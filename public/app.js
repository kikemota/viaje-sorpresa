const T = window.TRIP;
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// --- Almacenamiento local seguro ---
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};

const allStops = T.days.flatMap((d) => d.stops.map((s) => ({ ...s, dayId: d.id })));
const countable = allStops.filter((s) => s.id !== 'vuelta');
let done = new Set(store.get('done', []));
let selectedDay = null;
let excuseLast = null;

const mapsUrl = (q) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
const toMin = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };

function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toast.t);
  toast.t = setTimeout(() => { el.hidden = true; }, 2600);
}

// --- «Ahora»: qué toca según el día y la hora ---
function nowInfo() {
  const d = new Date();
  const day = T.days.find((x) => x.day === d.getDay());
  if (!day) return null;
  const mins = d.getHours() * 60 + d.getMinutes();
  const cur = day.stops.find((s) => mins >= toMin(s.start) && mins < toMin(s.end));
  const next = day.stops.find((s) => toMin(s.start) > mins);
  return { day, cur, next };
}

function rank() {
  const n = countable.filter((s) => done.has(s.id)).length;
  let r = T.ranks[0][1];
  for (const [min, name] of T.ranks) if (n >= min) r = name;
  return { n, total: countable.length, name: r };
}

function itemsHtml(items, numbered) {
  return `<ul class="items${numbered ? ' numbered' : ''}">` + items.map(([t, d], i) =>
    `<li>${numbered ? `<span class="num">${i + 1}</span>` : ''}<div><strong>${esc(t)}</strong><p>${esc(d)}</p></div></li>`
  ).join('') + '</ul>';
}

function quipsHtml(s) {
  if (!s.ana && !s.alberto) return '';
  return `<div class="quips">
    ${s.ana ? `<div class="quip quip-ana"><span class="quip-who">💛 Ana</span>${esc(s.ana)}</div>` : ''}
    ${s.alberto ? `<div class="quip quip-alberto"><span class="quip-who">🎙️ Alberto</span>${esc(s.alberto)}</div>` : ''}
  </div>`;
}

function stopHtml(s) {
  const isDone = done.has(s.id);
  const time = s.label || (s.start === s.end ? s.start : `${s.start} – ${s.end}`);
  return `
  <article class="stop${isDone ? ' is-done' : ''}" id="stop-${s.id}">
    <div class="stop-time"><span>${time}${s.approx ? ' aprox.' : ''}</span></div>
    <div class="card stop-card">
      ${s.img ? `<img class="stop-img" src="${s.img}" alt="" loading="lazy">` : ''}
      <div class="stop-body">
        <h2>${esc(s.title)}</h2>
        ${s.note ? `<p class="note">${esc(s.note)}</p>` : ''}
        ${itemsHtml(s.items, s.numbered)}
        ${quipsHtml(s)}
        <div class="actions">
          ${s.map ? `<a class="btn btn-ghost" href="${mapsUrl(s.map)}" target="_blank" rel="noopener">📍 Cómo llegar</a>` : ''}
          ${s.id !== 'vuelta' ? `<button class="btn ${isDone ? 'btn-done' : ''}" data-done="${s.id}">${isDone ? '✓ Hecho' : 'Marcar como hecho'}</button>` : ''}
        </div>
      </div>
    </div>
  </article>`;
}

// --- Vistas ---
const views = {
  plan: {
    title: 'Plan',
    html() {
      const now = nowInfo();
      if (!selectedDay) selectedDay = now ? now.day.id : T.days[0].id;
      const day = T.days.find((d) => d.id === selectedDay);
      const r = rank();
      let nowCard = '';
      if (now && (now.cur || now.next)) {
        const s = now.cur || now.next;
        nowCard = `<a class="card now" href="#/plan" data-jump="${s.id}" data-day="${now.day.id}">
          <span class="pill">${now.cur ? 'Ahora mismo' : 'A continuación · ' + s.start}</span>
          <h2>${esc(s.title)}</h2><p>Toca para ir a la parada.</p></a>`;
      }
      return `
        <div class="hero">
          <p class="hero-kicker">Un viaje de Ana y Alberto · ${esc(T.dates)}</p>
          <h2>${esc(T.title)}</h2>
          <p class="hero-tag">${esc(T.tagline)}</p>
          <p>${esc(T.subtitle)}</p>
          <div class="chips"><span>🏨 ${esc(T.hotel)}</span><span>🚌 ${esc(T.badge)}</span></div>
        </div>
        ${nowCard}
        <div class="card progress">
          <div class="progress-top"><strong>${esc(r.name)}</strong><span>${r.n}/${r.total}</span></div>
          <div class="bar"><i style="width:${(r.n / r.total) * 100}%"></i></div>
          <p>Marca las paradas que vayáis completando. Ana se asegura de que nadie se quede atrás; Alberto, de que nadie se quede sin anécdota.</p>
        </div>
        <div class="segmented" role="tablist">
          ${T.days.map((d) => `<button role="tab" aria-selected="${d.id === selectedDay}" data-day-tab="${d.id}">${d.label}</button>`).join('')}
        </div>
        <div class="timeline">${day.stops.map(stopHtml).join('')}</div>`;
    }
  },
  excursiones: {
    title: 'Excursiones',
    html() {
      return `<p class="lead">Para el sábado por la tarde (15:30 – 19:30). Ana ya ha mirado los horarios de vuelta. Alberto tiene un chiste preparado para cada una.</p>` +
        T.excursions.map((e) => `
        <div class="card stop-card">
          <img class="stop-img" src="${e.img}" alt="" loading="lazy">
          <div class="stop-body">
            <span class="pill">${esc(e.tag)}</span>
            <h2>${esc(e.title)}</h2>
            ${itemsHtml(e.items)}
            ${quipsHtml(e)}
            <div class="actions"><a class="btn btn-ghost" href="${mapsUrl(e.map)}" target="_blank" rel="noopener">📍 Ver en el mapa</a></div>
          </div>
        </div>`).join('');
    }
  },
  descubre: {
    title: 'Descubre',
    html() {
      return `
        <p class="lead">Para quedar bien en las cenas. O para intentar meter baza cuando Alberto se lance.</p>
        <h3 class="section">Historia</h3>
        ${T.history.map((h) => `
          <div class="card stop-card">
            <img class="stop-img" src="${h.img}" alt="" loading="lazy">
            <div class="stop-body">
              <span class="pill">${esc(h.era)}</span>
              <h2>${esc(h.title)}</h2>
              <ol class="years">${h.items.map(([y, t, d]) => `<li><span class="year">${esc(y)}</span><div><strong>${esc(t)}</strong><p>${esc(d)}</p></div></li>`).join('')}</ol>
            </div>
          </div>`).join('')}
        <h3 class="section">Curiosidades</h3>
        <p class="hint">Toca una tarjeta para darle la vuelta.</p>
        <div class="facts">
          ${T.facts.map(([e, t, d]) => `
            <button class="fact" aria-label="${esc(t)}">
              <span class="fact-front"><span class="fact-emoji">${e}</span><strong>${esc(t)}</strong></span>
              <span class="fact-back">${esc(d)}</span>
            </button>`).join('')}
        </div>`;
    }
  },
  info: {
    title: 'Info',
    html() {
      return `
        <div class="card excuse">
          <span class="pill">Generador oficial</span>
          <h2>Excusas de Ana y Alberto</h2>
          <p id="excuse-text" class="excuse-text">Por si algo sale mal. Ana tiene un plan B. Alberto, una explicación de veinte minutos.</p>
          <button id="excuse-btn" class="btn">Dame una excusa</button>
        </div>
        <div class="card" id="install-card">
          <span class="pill">Instalar</span>
          <h2>Llévala en el móvil</h2>
          <p class="muted">Funciona sin cobertura. Ana, que es previsora, ya la tiene instalada.</p>
          ${installHtml()}
        </div>
        <h3 class="section">Consejos de Ana y Alberto</h3>
        <div class="tips">${T.tips.map(([who, e, t, d]) => `<div class="card mini tip-${who}"><span class="tip-who">${who === 'ana' ? '💛 Ana' : '🎙️ Alberto'}</span><span class="mini-emoji">${e}</span><strong>${esc(t)}</strong><p>${esc(d)}</p></div>`).join('')}</div>
        <h3 class="section">Presupuesto orientativo</h3>
        <div class="card">
          ${T.prices.map(([e, t, p, d, free]) => `
            <div class="price"><span class="mini-emoji">${e}</span><div><strong>${esc(t)}</strong><p>${esc(d)}</p></div><span class="amount${free ? ' free' : ''}">${esc(p)}</span></div>`).join('')}
        </div>
        <h3 class="section">Más</h3>
        <div class="card">
          <button id="replay" class="btn btn-ghost">🎉 Volver a ver la revelación</button>
          <button id="reset" class="btn btn-ghost">↺ Reiniciar paradas hechas</button>
        </div>
        <p class="credits">${esc(T.credits)}</p>`;
    }
  }
};

function render() {
  const key = location.hash.replace('#/', '') || 'plan';
  const v = views[key] || views.plan;
  $('#title').textContent = v.title;
  $('#view').innerHTML = v.html();
  document.querySelectorAll('.tabbar a').forEach((a) => {
    if (a.dataset.tab === key) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

// --- Interacción (delegada) ---
$('#view').addEventListener('click', (e) => {
  const t = e.target.closest('button, a');
  if (!t) return;

  if (t.dataset.dayTab) {
    selectedDay = t.dataset.dayTab;
    render();
    return;
  }
  if (t.dataset.jump) {
    e.preventDefault();
    selectedDay = t.dataset.day;
    render();
    document.getElementById('stop-' + t.dataset.jump)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  if (t.dataset.done) {
    const id = t.dataset.done;
    const before = rank().name;
    if (done.has(id)) done.delete(id); else done.add(id);
    store.set('done', [...done]);
    const y = window.scrollY;
    render();
    window.scrollTo(0, y);
    const after = rank();
    if (done.has(id)) {
      if (after.name !== before) { toast('Nuevo rango: ' + after.name); burst(); }
      else toast(T.doneToasts[Math.floor(Math.random() * T.doneToasts.length)]);
      if (navigator.vibrate) navigator.vibrate(30);
    }
    return;
  }
  if (t.classList.contains('fact')) {
    t.classList.toggle('flipped');
    return;
  }
  if (t.id === 'excuse-btn') {
    const el = $('#excuse-text');
    let x;
    do { x = T.excuses[Math.floor(Math.random() * T.excuses.length)]; } while (x === excuseLast && T.excuses.length > 1);
    excuseLast = x;
    el.innerHTML = `<span class="excuse-who">${x[0] === 'ana' ? '💛 Ana' : '🎙️ Alberto'}</span>«${esc(x[1])}»`;
    el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
    return;
  }
  if (t.id === 'replay') { showReveal(); return; }
  if (t.id === 'reset') {
    if (confirm('¿Borrar las paradas marcadas? Ana te pregunta, con cariño, si estás seguro.')) {
      done = new Set(); store.set('done', []); render(); toast('Contador a cero.');
    }
  }
});

window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });

// --- Revelación ---
function showReveal() {
  $('#reveal').hidden = false;
  $('#envelope').hidden = false;
  $('#reveal-result').hidden = true;
  document.body.classList.add('locked');
}
function hideReveal() {
  $('#reveal').hidden = true;
  document.body.classList.remove('locked');
  store.set('revealed', true);
}
$('#envelope').addEventListener('click', () => {
  $('#envelope').hidden = true;
  $('#reveal-result').hidden = false;
  burst(120);
  if (navigator.vibrate) navigator.vibrate([40, 60, 40]);
});
$('#reveal-go').addEventListener('click', hideReveal);

function burst(n = 60) {
  const box = $('#confetti');
  const colors = ['#ef4444', '#ffffff', '#38bdf8', '#facc15', '#22c55e'];
  for (let i = 0; i < n; i++) {
    const p = document.createElement('i');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.background = colors[i % colors.length];
    p.style.animationDelay = Math.random() * 0.4 + 's';
    p.style.animationDuration = 1.6 + Math.random() * 1.4 + 's';
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    box.appendChild(p);
    setTimeout(() => p.remove(), 3600);
  }
}

// --- Conexión ---
const updateNet = () => { $('#net').hidden = navigator.onLine; };
window.addEventListener('online', updateNet);
window.addEventListener('offline', updateNet);

// --- Service worker y actualización automática ---
// Al volver a la app (y cada 30 min) se busca versión nueva; si la hay, la app se recarga sola.
if ('serviceWorker' in navigator) {
  const hadControl = !!navigator.serviceWorker.controller;
  let reloading = false;
  const check = () => navigator.serviceWorker.getRegistration().then((r) => r && r.update()).catch(() => {});
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (hadControl && !reloading) {
      reloading = true;
      try { sessionStorage.setItem('updated', '1'); } catch {}
      location.reload();
    }
  });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') check(); });
  setInterval(check, 30 * 60 * 1000);
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js'));
}

// --- Instalación: pasos según móvil y navegador ---
const banner = $('#install');
const isStandalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
let deferredPrompt = null;

function environment() {
  const ua = navigator.userAgent;
  const ios = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const os = ios ? 'ios' : /android/i.test(ua) ? 'android' : 'pc';
  let br = 'otro';
  if (ios) br = /CriOS/.test(ua) ? 'chrome' : /FxiOS|EdgiOS/.test(ua) ? 'otro' : /Safari/.test(ua) && !/(FBAN|FBAV|Instagram|GSA)\//.test(ua) ? 'safari' : 'otro';
  else if (/SamsungBrowser/.test(ua)) br = 'samsung';
  else if (/Chrome\//.test(ua) && !/Edg/.test(ua)) br = 'chrome';
  return { os, br };
}
const STEPS = {
  'ios.safari': ['Toca <b>Compartir</b> (el cuadrado con la flecha).', 'Si no lo ves, toca <b>Ver más</b>.', 'Elige <b>Añadir a pantalla de inicio</b>.'],
  'ios.chrome': ['Toca <b>Compartir</b> en la barra de direcciones.', 'Toca <b>Ver más</b>.', 'Elige <b>Añadir a pantalla de inicio</b>.'],
  'ios.otro': ['Abre este enlace en <b>Safari</b>.', 'Toca <b>Compartir</b>.', 'Elige <b>Añadir a pantalla de inicio</b>.'],
  'android.chrome': ['Toca el <b>menú ⋮</b> de arriba.', 'Elige <b>Instalar aplicación</b> o <b>Añadir a pantalla de inicio</b>.', 'Confirma con <b>Instalar</b>.'],
  'android.samsung': ['Toca el <b>menú ☰</b> de abajo.', 'Elige <b>Añadir página a</b>.', 'Elige <b>Pantalla de inicio</b>.'],
  'android.otro': ['Abre el <b>menú</b> del navegador.', 'Busca <b>Añadir a pantalla de inicio</b> o <b>Instalar</b>.'],
  'pc.chrome': ['Pulsa el icono <b>Instalar</b> de la barra de direcciones.'],
  'pc.otro': ['Mejor ábrela en el móvil: está pensada para llevarla en el bolsillo.']
};
function installSteps() {
  const { os, br } = environment();
  return STEPS[os + '.' + br] || STEPS[os + '.otro'];
}
function installHtml() {
  if (isStandalone) return '<p class="ok">✅ Ya la tienes instalada. Ana y Alberto viven oficialmente en tu móvil (Alberto ya está hablando).</p>';
  return `${deferredPrompt ? '<button class="btn" data-install>Instalar ahora</button>' : ''}
    <ol class="steps">${installSteps().map((t) => `<li>${t}</li>`).join('')}<li>Ábrela siempre desde el <b>icono nuevo</b>.</li></ol>`;
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (!isStandalone && !store.get('install-dismissed', false)) { banner.hidden = false; $('#install-btn').textContent = 'Instalar'; }
  if (location.hash === '#/info') render();
});
async function doInstall() {
  if (!deferredPrompt) { location.hash = '#/info'; banner.hidden = true; setTimeout(() => $('#install-card')?.scrollIntoView({ behavior: 'smooth' }), 50); return; }
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  banner.hidden = true;
}
$('#install-btn').addEventListener('click', doInstall);
$('#view').addEventListener('click', (e) => { if (e.target.closest('[data-install]')) doInstall(); });
if (!isStandalone && !store.get('install-dismissed', false) && environment().os !== 'pc') {
  $('#install-btn').textContent = 'Ver cómo';
  banner.hidden = false;
}
$('#install-close').addEventListener('click', () => { banner.hidden = true; store.set('install-dismissed', true); });
window.addEventListener('appinstalled', () => { banner.hidden = true; toast('Instalada. Ana y Alberto ya viven en tu móvil.'); });

// --- Arranque ---
render();
updateNet();
if (!store.get('revealed', false)) showReveal();
try {
  if (sessionStorage.getItem('updated')) {
    sessionStorage.removeItem('updated');
    setTimeout(() => toast('✨ App actualizada a la última versión'), 400);
  }
} catch {}
