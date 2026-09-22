import type { ImageMetadata } from 'astro';
import sixFilmsPreview from '../assets/projects/dir-sixfilms.png';

export const profile = {
  name: "Manuel Sanchez",
  education: "2.º de Ingeniería Informática",
  email: "manusancheztech@gmail.com",
  phone: "622164556",
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
  year?: string;
  linkLabel: string;
  preview?: ImageMetadata;
  previewAlt?: string;
  portfolioPreview?: boolean;
  tools: string[];
  review?: Review;
}
// Añade aquí proyectos terminados y reseñas reales, con permiso de sus autores.
export const projects: Project[] = [
  {
    name: "dir.sixFilms",
    category: "Portfolio audiovisual · Filmmaker",
    description:
      "Web creada para el filmmaker dir.sixFilms: un espacio propio para presentar sus videoclips, portadas y trabajos de dirección visual.",
    challenge: "Reunir su trabajo audiovisual y facilitar el contacto para nuevos proyectos.",
    work: "Diseño y desarrollo de un portfolio visual con secciones para videoclips, artworks y contacto.",
    result: "Una web publicada donde explorar sus trabajos y conocer su identidad como creador.",
    url: "https://dirweb.vercel.app/",
    linkLabel: "Visitar web",
    preview: sixFilmsPreview,
    previewAlt: "Portada de la web de dir.sixFilms, con el logotipo SixFilms sobre fondo negro.",
    tools: ["Astro", "CSS"],
  },
  {
    name: "Mi espacio en internet",
    category: "Portfolio personal",
    description:
      "Identidad, diseño y desarrollo de este portfolio. Una web ligera para contar quién soy y cómo trabajo.",
    challenge: "Necesitaba un espacio propio para presentar mis servicios y mostrar cómo trabajo.",
    work: "Definí la estructura y la identidad visual, diseñé las secciones y desarrollé la web con Astro.",
    result: "Un portfolio que reúne servicios, proceso y proyectos, con un diseño adaptable y navegación con teclado.",
    url: "https://github.com/manusana/MIWEB",
    linkLabel: "Ver código en GitHub",
    portfolioPreview: true,
    year: "2026",
    tools: ["Astro", "TypeScript", "CSS"],
  },
];

export const process = [
  {
    title: "Primero, hablamos de tu negocio.",
    label: "01 / Contactar",
    description:
      "Me pongo en contacto contigo para conocer tu negocio, lo que ofreces y cómo te gustaría presentarlo. Escucho tus ideas y vemos qué necesitas de tu web.",
  },
  {
    title: "Te enseño un primer ejemplo.",
    label: "02 / Mostrar",
    description:
      "Preparo un ejemplo de cómo podría ser tu web y te lo enseño. Así tienes algo concreto que ver y comentar: el diseño, las secciones y la forma de presentar tu negocio.",
  },
  {
    title: "Lo ajustamos con tus ideas.",
    label: "03 / Revisar",
    description:
      "A partir de ese ejemplo, me cuentas qué te gusta y qué cambiarías. Voy adaptando el diseño, los textos y las secciones según tus comentarios, y revisamos juntos cada avance dentro del alcance que acordemos.",
  },
  {
    title: "Damos el último repaso y publicamos.",
    label: "04 / Publicar",
    description:
      "Cuando la web esté lista, comprobamos cómo se ve en móvil y ordenador, revisamos los contenidos y los datos de contacto. Con tu visto bueno, la publicamos y dejamos acordados los siguientes pasos.",
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
