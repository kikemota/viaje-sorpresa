# Viaje sorpresa · Ana y Alberto

Guía de bolsillo del fin de semana sorpresa en Luxemburgo, basada en la presentación «Escapada a Luxemburgo – Guía Completa de Fin de Semana».

Es una PWA sin dependencias ni compilación: se instala en el móvil desde el navegador y funciona sin cobertura.

- `public/`: la app. Es lo que se publica.
- `public/data.js`: todo el contenido (itinerario, excursiones, historia, curiosidades, consejos, precios, excusas de Ana y Alberto).
- `public/sw.js`: service worker para funcionar sin conexión.

## Clave de acceso

`netlify/edge-functions/clave.js` pide una clave antes de mostrar la app. La clave no está en el código: se guarda en Netlify.

- Ponerla o cambiarla: Netlify → Site configuration → Environment variables → `CLAVE_ACCESO`. Después, Deploys → Trigger deploy.
- No distingue mayúsculas ni espacios al principio o al final.
- Quien acierta no tiene que repetirla durante 90 días. Al cambiar la clave, todos tienen que volver a ponerla.
- En iPhone, la app instalada guarda sus datos aparte de Safari, así que pide la clave una vez más al abrirla desde el icono.
- Si `CLAVE_ACCESO` no existe, la app queda abierta.

## Publicar una versión nueva

1. Cambia el contenido en `public/data.js` (o lo que toque).
2. Sube `CACHE` en `public/sw.js` (por ejemplo `viajes-v3` → `viajes-v4`) para que los móviles descarguen la versión nueva.
3. Sube los cambios a `main`. Los móviles se actualizan solos al volver a abrir la app.

## Probar en local

```
cd public && python3 -m http.server 8000
```

y abre http://localhost:8000

## Fotos

Las fotos vienen de la presentación original: luxembourg-city.com, visitluxembourg.com, freerangetravellers.com, christophevanbiesen.com, expedia.com, visitmoselle.lu, nextleveloftravel.com y mullerthal.lu.
