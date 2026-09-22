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
- `src/pages/index.astro`: presentación personal, proyectos y reseñas, servicios y proceso, herramientas y contacto.
- `src/styles/global.css`: diseño, transiciones y adaptación a móvil.
- `src/scripts/interactions.ts`: menú móvil, sección activa, entradas al hacer scroll, escritura animada y copia de datos de contacto.

El componente `ContactDetails.astro` muestra `profile.phone` y `profile.email`, con un botón de copiar por dato. La copia confirma el éxito o muestra una alternativa manual si el navegador no permite acceder al portapapeles. Sin JavaScript, los datos siguen siendo visibles y seleccionables.

Para añadir un proyecto, incorpora un elemento al array `projects`. Su campo opcional `review` admite `quote`, `author` y `role`; la reseña aparecerá junto al proyecto. Publica únicamente opiniones reales con permiso de su autor. El portfolio es el único proyecto realizado mostrado inicialmente. La tarjeta de colaboración no se presenta como un trabajo terminado.

El proveedor de dominio y alojamiento está pendiente de elección. La sección de herramientas explica dominio, DNS, alojamiento y HTTPS sin atribuir un proveedor concreto.

## Diseño y rendimiento

Astro estático y TypeScript, con CSS y Tailwind. Tema oscuro inspirado en editores de código: superficies grafito, acentos azules y resaltado de sintaxis. JetBrains Mono local para titulares y detalles (licencia en `public/fonts/OFL-JetBrainsMono.txt`), combinada con Manrope para los textos. El componente `EditorProfile.astro` presenta el perfil como un panel de editor. Logos SVG locales de Simple Icons en `public/logos/`, con su licencia y procedencia; los servicios sin marca usan iconos descriptivos. Manrope alojada localmente (licencia en `public/fonts/OFL-Manrope.txt`) y retrato optimizado por Astro a WebP en varios tamaños. La vista del proyecto está dibujada con HTML y CSS.

Scroll nativo, animaciones discretas mediante IntersectionObserver y un efecto de escritura de una sola pasada en el titular. El texto completo permanece en el HTML y para lectores de pantalla. Con `prefers-reduced-motion`, se muestra sin animar; cambiar la preferencia o esconder la pestaña completa la escritura y cancela sus temporizadores. El contenido, los enlaces y los acordeones funcionan sin JavaScript. El menú móvil admite teclado, Escape y cierre al seleccionar una sección.

## Publicación

La configuración de Sites está en `.openai/hosting.json`. No contiene credenciales. Conserva el acceso configurado al publicar; la publicación privada no equivale a un lanzamiento comercial público.
