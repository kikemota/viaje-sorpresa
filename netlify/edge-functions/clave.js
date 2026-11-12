// Clave de acceso: solo quien sepa la clave puede abrir (e instalar) la app.
// La clave NO está en el código: se pone en Netlify, en la variable de entorno CLAVE_ACCESO.
// Si la variable no existe, la app queda abierta (útil mientras se configura).
// Al acertar la clave se guarda una cookie durante 90 días, así no hay que repetirla.

const COOKIE = 'acceso';
const DIAS = 90;

async function huella(texto) {
  const datos = new TextEncoder().encode('viaje-sorpresa:' + texto);
  const hash = await crypto.subtle.digest('SHA-256', datos);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

const normalizar = (s) => String(s || '').trim().toLowerCase();

function leerCookie(request, nombre) {
  const c = request.headers.get('cookie') || '';
  for (const parte of c.split(/;\s*/)) {
    const i = parte.indexOf('=');
    if (i > 0 && parte.slice(0, i) === nombre) return parte.slice(i + 1);
  }
  return null;
}

const escapar = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function pantalla(volver, error) {
  const html = `<!doctype html>
<html lang="es"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#1c322b">
<meta name="robots" content="noindex">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
<title>Viaje sorpresa</title>
<style>
  * { box-sizing: border-box; }
  html, body { margin: 0; height: 100%; }
  body { font: 16px/1.45 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #fff;
    background: radial-gradient(circle at 50% 30%, #2b463d, #14211d 70%);
    display: grid; place-items: center; padding: 24px; text-align: center; }
  main { width: 100%; max-width: 380px; }
  .candado { font-size: 72px; }
  .kicker { font-size: 13px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #fbbf24; margin: 12px 0 0; }
  h1 { font-size: 30px; margin: 6px 0 8px; font-weight: 900; }
  p { color: #e7e5e4; margin: 0 0 20px; }
  input { width: 100%; font: inherit; font-size: 18px; padding: 14px 16px; border-radius: 14px; border: 2px solid #2b463d;
    background: #0e1815; color: #fff; text-align: center; letter-spacing: .05em; }
  input:focus { outline: none; border-color: #fbbf24; }
  button { width: 100%; margin-top: 12px; font: inherit; font-size: 17px; font-weight: 700; padding: 14px; border: 0;
    border-radius: 14px; background: #fbbf24; color: #14211d; cursor: pointer; }
  .error { color: #fda4af; font-weight: 600; margin: 12px 0 0; }
</style>
</head><body><main>
  <div class="candado">🔐</div>
  <p class="kicker">Zona restringida por Ana y Alberto</p>
  <h1>¿Cuál es la clave?</h1>
  <p>Solo pasan los viajeros oficiales. Si no la sabes, pregúntale a Alberto: te la dirá, y también otras doscientas cosas.</p>
  <form method="post" action="/entrar">
    <input type="hidden" name="volver" value="${escapar(volver)}">
    <input name="clave" type="password" autocomplete="current-password" placeholder="Clave secreta" required autofocus>
    <button type="submit">Entrar</button>
    ${error ? '<p class="error">Clave incorrecta. Ana te da otra oportunidad, con cariño. 💛</p>' : ''}
  </form>
</main></body></html>`;
  return new Response(html, {
    status: error ? 401 : 200,
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' }
  });
}

export default async (request, context) => {
  const clave = Netlify.env.get('CLAVE_ACCESO');
  if (!clave) return context.next();

  const url = new URL(request.url);
  const token = await huella(normalizar(clave));

  if (url.pathname === '/entrar' && request.method === 'POST') {
    const form = await request.formData();
    let volver = String(form.get('volver') || '/');
    if (!volver.startsWith('/') || volver.startsWith('//')) volver = '/';
    if (normalizar(form.get('clave')) === normalizar(clave)) {
      return new Response(null, {
        status: 303,
        headers: {
          location: volver,
          'set-cookie': `${COOKIE}=${token}; Max-Age=${DIAS * 86400}; Path=/; HttpOnly; Secure; SameSite=Lax`,
          'cache-control': 'no-store'
        }
      });
    }
    return pantalla(volver, true);
  }

  if (leerCookie(request, COOKIE) === token) return context.next();

  const quiereHtml = (request.headers.get('accept') || '').includes('text/html');
  if (request.method === 'GET' && quiereHtml) return pantalla(url.pathname + url.search, false);
  return new Response('Clave necesaria', { status: 401, headers: { 'cache-control': 'no-store' } });
};

// El manifiesto, los iconos y el service worker quedan fuera: el navegador los pide sin cookie
// para poder instalar la app, y no desvelan el destino.
export const config = {
  path: '/*',
  excludedPath: ['/manifest.webmanifest', '/icons/*', '/sw.js', '/favicon.ico']
};
