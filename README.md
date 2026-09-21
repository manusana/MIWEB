# Manuel Sanchez — Portfolio

Portfolio personal centrado en desarrollo web para pequeños negocios sin web o con una página anticuada. Construido sobre la estructura Astro del repositorio MIWEB.

## Desarrollo

```sh
npm install
npm run dev -- --background
```

Astro muestra la URL local. Para gestionar el servidor: `npm run astro -- dev status`, `npm run astro -- dev stop` y `npm run astro -- dev logs`.

## Comprobación y compilación

```sh
npm run check
npm run build
npm run preview
```

La web estática se genera en `dist/`.

## Contenido

- `src/data/site.ts`: perfil, proyectos, reseñas, proceso y herramientas.
- `src/pages/index.astro`: presentación personal, servicios, proceso, proyectos y reseñas, herramientas, primeras colaboraciones y contacto.
- `src/styles/global.css`: diseño, transiciones y adaptación a móvil.
- `src/scripts/interactions.ts`: menú móvil, sección activa y entradas al hacer scroll.

Al rellenar `profile.email`, el bloque de contacto muestra un enlace de correo. Mientras tanto, muestra el estado pendiente y el GitHub de Manuel.

Para añadir un proyecto, incorpora un elemento al array `projects`. Su campo opcional `review` admite `quote`, `author` y `role`; la reseña aparecerá junto al proyecto. Publica únicamente opiniones reales con permiso de su autor. El portfolio es el único proyecto realizado mostrado inicialmente. La tarjeta de colaboración no se presenta como un trabajo terminado.

El proveedor de dominio y alojamiento está pendiente de elección. La sección de herramientas explica dominio, DNS, alojamiento y HTTPS sin atribuir un proveedor concreto.

## Diseño y rendimiento

Astro estático y TypeScript, con CSS y Tailwind. Fondo azul oscuro, tonos claros y acento verde suave. Manrope alojada localmente (licencia en `public/fonts/OFL-Manrope.txt`) y retrato optimizado por Astro a WebP en varios tamaños. La vista del proyecto está dibujada con HTML y CSS.

Scroll nativo, animaciones discretas mediante IntersectionObserver y respeto a `prefers-reduced-motion`. El contenido, los enlaces y los acordeones funcionan sin JavaScript. El menú móvil admite teclado, Escape y cierre al seleccionar una sección.

## Publicación

La configuración de Sites está en `.openai/hosting.json`. No contiene credenciales. Conserva el acceso configurado al publicar; la publicación privada no equivale a un lanzamiento comercial público.
