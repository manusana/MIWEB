# Firstech

Web de una sola página de Manuel Sanchez para presentar Firstech y su propuesta de desarrollo web para pequeños negocios.

## Desarrollo

```sh
npm install
npm run dev -- --background
```

Astro muestra la URL local al arrancar. Para gestionar el servidor: `npm run astro -- dev status`, `npm run astro -- dev stop` y `npm run astro -- dev logs`.

## Comprobación y compilación

```sh
npm run check
npm run build
npm run preview
```

La web estática se genera en `dist/`.

## Contenido

- `src/data/site.ts`: nombre, estudios, correo, proyectos y reseñas. Al rellenar `profile.email`, el bloque de contacto muestra automáticamente un enlace de correo.
- `src/pages/index.astro`: secciones y textos.
- `src/styles/global.css`: identidad visual y adaptación a móvil.
- `src/scripts/interactions.ts`: menú móvil, sección activa y entradas al hacer scroll.

El proyecto Firstech se muestra como trabajo propio. No se han inventado clientes ni reseñas. Añadir testimonios reales con permiso de sus autores.

## Diseño y rendimiento

Astro estático, TypeScript y Tailwind CSS. Tipografía Manrope alojada localmente (licencia en `public/fonts/OFL-Manrope.txt`). Imagen abstracta original generada para Firstech, optimizada a WebP en varios tamaños por Astro. Scroll nativo y animaciones respetuosas con `prefers-reduced-motion`; el contenido y los acordeones funcionan sin JavaScript.

## Publicación

La configuración de Sites está en `.openai/hosting.json`. No contiene credenciales. La primera publicación en Sites es privada; no equivale a un lanzamiento público comercial.
