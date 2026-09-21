# Manuel Sanchez — Portfolio

Portfolio de Manuel Sanchez: presentación, estudios, tecnologías, proyectos y proceso de desarrollo web para empresas sin web o con páginas anticuadas.

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

- `src/data/site.ts`: nombre, estudios, correo y proyectos. Al rellenar `profile.email`, el bloque de contacto muestra automáticamente un enlace de correo.
- `src/pages/index.astro`: secciones y textos.
- `src/styles/global.css`: identidad visual y adaptación a móvil.
- `src/scripts/interactions.ts`: menú móvil, sección activa y entradas al hacer scroll.

El portfolio se muestra como proyecto personal. El segundo bloque invita a colaborar y no se presenta como un trabajo realizado. No se han inventado proyectos, clientes ni testimonios.

## Diseño y rendimiento

Astro estático, TypeScript y Tailwind CSS. Tipografía Manrope alojada localmente (licencia en `public/fonts/OFL-Manrope.txt`). Imagen abstracta original del portfolio, optimizada a WebP en varios tamaños por Astro. Scroll nativo y animaciones respetuosas con `prefers-reduced-motion`; el contenido y los acordeones funcionan sin JavaScript.

## Publicación

La configuración de Sites está en `.openai/hosting.json`. No contiene credenciales. La primera publicación en Sites es privada; no equivale a un lanzamiento público comercial.
