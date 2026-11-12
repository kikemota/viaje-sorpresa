# Viaje sorpresa · Ana y Alberto

Guía de bolsillo del fin de semana sorpresa en Luxemburgo, basada en la presentación «Escapada a Luxemburgo – Guía Completa de Fin de Semana» (versión 5), con su paleta (crema, verde bosque y ámbar) y sus tipografías (Cormorant Garamond y Plus Jakarta Sans, alojadas en `public/fuentes/`).

Es una PWA sin dependencias ni compilación: se instala en el móvil desde el navegador y funciona sin cobertura.

- `public/`: la app. Es lo que se publica.
- `public/data.js`: todo el contenido (itinerario, excursiones, historia, curiosidades, consejos, precios y excusas). Los consejos de cada parada van en `ana` (prudente y amable) y `alberto` (hablador y gracioso).
- `public/sw.js`: service worker para funcionar sin conexión.

## Clave de acceso

`netlify/edge-functions/clave.js` pide una clave antes de mostrar la app. La clave no está en el código: se guarda en Netlify.

- Ponerla o cambiarla: Netlify → Site configuration → Environment variables → `CLAVE_ACCESO`. Después, Deploys → Trigger deploy.
- No distingue mayúsculas ni espacios al principio o al final.
- Quien acierta no tiene que repetirla durante 90 días. Al cambiar la clave, todos tienen que volver a ponerla.
- En iPhone, la app instalada guarda sus datos aparte de Safari, así que pide la clave una vez más al abrirla desde el icono.
- Si `CLAVE_ACCESO` no existe, la app queda abierta.

## Publicar una versión nueva

Sube los cambios a `main` y Netlify los publica solo. Los móviles se actualizan sin hacer nada:

- La página, el código y `data.js` se piden siempre primero a la red, así que al abrir la app con conexión ya se ve lo último.
- Al volver a la app (y cada 30 minutos) se comprueba si hay versión nueva del service worker; si la hay, la app se recarga sola y avisa con «App actualizada».
- Si cambias o añades fotos, sube también `CACHE` en `public/sw.js` (por ejemplo `viajes-v6` → `viajes-v7`) para que se renueven las copias sin conexión.

## Probar en local

```
cd public && python3 -m http.server 8000
```

y abre http://localhost:8000

## Fotos

Las fotos vienen de la presentación original.
