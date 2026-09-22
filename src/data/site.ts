export const profile = {
  name: "Manuel Sanchez",
  education: "2.º de Ingeniería Informática",
  email: "1firstech1@gmail.com",
  github: "https://github.com/manusana",
};

export interface Review {
  quote: string;
  author: string;
  role: string;
}
export interface Project {
  name: string;
  category: string;
  description: string;
  challenge: string;
  work: string;
  result: string;
  url: string;
  year: string;
  tools: string[];
  review?: Review;
}
// Añade aquí proyectos terminados y reseñas reales, con permiso de sus autores.
export const projects: Project[] = [
  {
    name: "Mi espacio en internet",
    category: "Portfolio personal",
    description:
      "Identidad, diseño y desarrollo de este portfolio. Una web ligera para contar quién soy y cómo trabajo.",
    challenge: "Necesitaba un espacio propio para presentar mis servicios y mostrar cómo trabajo.",
    work: "Definí la estructura y la identidad visual, diseñé las secciones y desarrollé la web con Astro.",
    result: "Un portfolio que reúne servicios, proceso y proyectos, con un diseño adaptable y navegación con teclado.",
    url: "https://github.com/manusana/MIWEB",
    year: "2026",
    tools: ["Astro", "TypeScript", "CSS"],
  },
];

export const process = [
  {
    title: "Escuchar antes de diseñar.",
    label: "01 / Entender",
    description:
      "Empezamos por tu negocio: qué ofreces, a quién y qué debería conseguir tu web. Si ya tienes una, revisamos qué funciona y qué necesita cambiar. Acordamos contenido, alcance y plazos.",
  },
  {
    title: "Dar forma a lo importante.",
    label: "02 / Diseñar",
    description:
      "Ordeno las secciones, los textos y las imágenes. Preparo una dirección visual propia para tu negocio y la revisamos juntos antes de desarrollar. Cada elemento tiene una razón para estar ahí.",
  },
  {
    title: "Cuidar lo que se ve. Y lo que no.",
    label: "03 / Desarrollar",
    description:
      "Construyo una web adaptada a móvil, tablet y ordenador. Cuido la velocidad, las imágenes, la navegación con teclado y los detalles de movimiento. También preparo los títulos y las descripciones para buscadores.",
  },
  {
    title: "Publicar con todo en su sitio.",
    label: "04 / Acompañar",
    description:
      "Comprobamos contenido, enlaces y contacto. Elegimos dominio y alojamiento según el proyecto, configuramos DNS y HTTPS, y planificamos las redirecciones si sustituimos una web. Dejamos acordado cómo gestionar las futuras actualizaciones.",
  },
];

interface Tool {
  name: string;
  logo?: string;
  icon?: 'globe' | 'network' | 'server' | 'lock';
}
interface ToolGroup {
  number: string;
  title: string;
  summary: string;
  tools: Tool[];
  description: string;
}
export const toolkit: ToolGroup[] = [
  {
    number: "01",
    title: "Código & estructura",
    summary: "Una base ligera y fácil de mantener.",
    tools: [
      { name: "Astro", logo: "/logos/astro.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "HTML", logo: "/logos/html5.svg" },
      { name: "CSS", logo: "/logos/css.svg" },
      { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
    ],
    description:
      "Contenido rápido de cargar, componentes reutilizables y el JavaScript necesario para cada interacción.",
  },
  {
    number: "02",
    title: "Versiones & evolución",
    summary: "Cada cambio, bajo control.",
    tools: [
      { name: "Git", logo: "/logos/git.svg" },
      { name: "GitHub", logo: "/logos/github.svg" },
    ],
    description:
      "Organizo el código y su historial para revisar cambios, recuperar versiones y seguir mejorando la web.",
  },
  {
    number: "03",
    title: "Dominio & publicación",
    summary: "De una carpeta a una dirección propia.",
    tools: [
      { name: "Dominio", icon: "globe" },
      { name: "DNS", icon: "network" },
      { name: "Alojamiento", icon: "server" },
      { name: "HTTPS", icon: "lock" },
    ],
    description:
      "Te ayudo a elegir y conectar los servicios que necesite tu web. El proveedor se decide según el proyecto, el presupuesto y su mantenimiento.",
  },
];
