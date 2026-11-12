// Service worker: la app funciona sin conexión y se actualiza sola.
// Página, código y datos: primero la red (siempre lo último) y, sin conexión, la copia guardada.
// Fotos, iconos y fuentes: primero la copia guardada.
// Al publicar una versión nueva, sube CACHE para renovar también las fotos.
const CACHE = 'viajes-v6';
const SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './manifest.webmanifest',
  './fuentes/cormorant-garamond.woff2',
  './fuentes/plus-jakarta-sans.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './img/portada.jpg',
  './img/llegada.jpg',
  './img/noche.jpg',
  './img/palacio.jpg',
  './img/comida.jpg',
  './img/vianden.jpg',
  './img/schengen.jpg',
  './img/mullerthal.jpg',
  './img/metz.jpg',
  './img/grund.jpg',
  './img/kirchberg.jpg',
  './img/casamatas.jpg',
  './img/historia.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const save = (req, res) => {
  if (res && res.ok && res.type === 'basic') {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return res;
};

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.endsWith('/sw.js')) return;

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          // Solo se guarda la app de verdad, no la pantalla de clave.
          if (res.ok && res.headers.get('cache-control') !== 'no-store') save(new Request('./index.html'), res);
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  if (/\.(js|css|json|webmanifest)$/.test(url.pathname)) {
    e.respondWith(fetch(req).then((res) => save(req, res)).catch(() => caches.match(req)));
    return;
  }

  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => save(req, res))));
});
