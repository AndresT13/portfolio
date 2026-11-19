export interface Project {
  slug: string;
  name: string;
  category: 'Arquitectura'|'Inteligencia artificial'|'DevOps'|'Full Stack'|'Videojuegos'|'Desarrollo Web';
  eyebrow: string;
  description: string;
  details: string;
  stack: string[];
  icon: string;
  status: 'En desarrollo'|'Demostración'|'Publicado'|'Finalizado';
  github?: string;
  website?: string;
  playUrl?: string;
  scorersUrl?: string;
  highlights: string[];
}
// Proyectos editables: cada proyecto se mantiene en una sola ficha.
export const PROJECTS: Project[] = [
  {slug:'vibe-comandas',name:'Vibe — Comandas',category:'Full Stack',eyebrow:'Restaurantes · Operaciones en tiempo real',description:'Panel interactivo para gestionar carta, mesas, pedidos y reservas de restaurantes, conectado a una API Spring Boot desplegada en Render.',details:'Solución demostrativa Full Stack con frontend Next.js, backend Spring Boot y documentación Swagger/OpenAPI. Incluye catálogo de platos, seguimiento de comandas y formularios de reservas. El backend utiliza almacenamiento temporal en memoria: no está preparado para órdenes reales sin autenticación y persistencia.',stack:['Next.js','TypeScript','Spring Boot','Java 21','Docker','Vercel','Render'],icon:'🍽',status:'Finalizado',website:'https://vibe-frontend-kappa.vercel.app/',github:'https://github.com/AndresT13/vibe',highlights:['Panel navegable e interactivo','API REST con documentación OpenAPI','Mesas, pedidos, reservas y catálogo','CI con GitHub Actions','Despliegue gratuito en Render y Vercel','Demostración: datos temporales y sin autenticación']},
  {slug:'orionixgol',name:'Orionixgol',category:'Desarrollo Web',eyebrow:'Proyecto web · Caso de estudio',description:'Proyecto Orionixgol incluido en el portafolio como trabajo finalizado, con documentación pública pendiente de incorporar.',details:'Proyecto finalizado. La URL pública, el repositorio y las tecnologías no se presentan todavía porque no han sido confirmados.',stack:['Proyecto web','Caso de estudio'],icon:'🚀',status:'Finalizado',highlights:['Caso de estudio incluido','Capturas y documentación pendientes de incorporar','Enlace público pendiente de confirmar']},

  {slug:'spring-ai-financial-engine',name:'Spring AI — Financial Engine',category:'Inteligencia artificial',eyebrow:'Modelos locales y mercados',description:'Exploración de un motor de predicción financiera integrado con modelos de IA.',details:'Investigación y prototipado de herramientas de análisis financiero con Spring AI, modelos locales e integración de fuentes de datos. No constituye asesoría de inversión.',stack:['Spring AI','Ollama','Java','Docker','ONNX (evaluación)'],icon:'◈',status:'En desarrollo',highlights:['Integración de modelos locales','Evaluación de herramientas de inferencia','Análisis de tendencias y volatilidad','Diseño de microservicios']},
  {slug:'videojuego3d-unity',name:'VideoJuego3D — Unity',category:'Videojuegos',eyebrow:'Desarrollo de videojuegos 3D',description:'Proyecto de videojuego 3D desarrollado con Unity y C#, con repositorio público y enlace a una versión jugable en línea.',details:'Repositorio de videojuego en Unity que incluye Assets, Packages y ProjectSettings. Es una muestra de trabajo con el motor Unity y programación en C#. El proyecto tiene una versión web publicada en GitHub Pages que permite acceder al videojuego desde el navegador.',stack:['Unity','C#','Desarrollo 3D'],icon:'🎮',status:'Finalizado',playUrl:'https://andrest13.github.io/VideoJuego3D-Unity/',github:'https://github.com/AndresT13/VideoJuego3D-Unity',highlights:['Proyecto Unity con estructura de Assets y Packages','Código fuente disponible en GitHub','Desarrollo con C#','Versión web WebGL enlazada desde GitHub Pages']},
  {slug:'wc-personal',name:'WC Personal — Plataforma Mundial',category:'Full Stack',eyebrow:'Aplicación web · Arquitectura Full Stack',description:'Plataforma web vinculada al Mundial, con frontend Next.js, API Spring Boot y persistencia en PostgreSQL.',details:'Proyecto Full Stack organizado en frontend, backend e infraestructura. El repositorio documenta la ejecución local del conjunto mediante Docker Compose, con frontend en Next.js 14, backend Spring Boot 3.5 y base de datos PostgreSQL. El código fuente permanece privado, por lo que se presenta una descripción técnica sin exponer documentación interna.',stack:['Next.js','TypeScript','Spring Boot','Java 21','PostgreSQL','Docker Compose'],icon:'⚽',status:'Finalizado',website:'https://wc-personal-frontend.vercel.app/es',scorersUrl:'https://wc-personal-frontend.vercel.app/es/scorers',highlights:['Frontend con Next.js y TypeScript','API backend con Spring Boot','Persistencia en PostgreSQL','Contenedorización y entorno local Docker Compose','Repositorio privado: sin enlace público al código','Aplicación publicada en Vercel','Sección de goleadores enlazada desde el portafolio']},
  {slug:'asl-group-web',name:'ASL Group — Sitio web',category:'Desarrollo Web',eyebrow:'Proyecto web publicado',description:'Referencia al sitio web de ASL Group, incorporada a mi catálogo de proyectos.',details:'Sitio web asociado a ASL Group. El enlace público ha sido proporcionado para documentar el proyecto; quedan pendientes la validación de sus tecnologías, alcance del desarrollo y responsabilidades específicas antes de detallar el caso de estudio.',stack:['Sitio web','Proyecto público'],icon:'🌐',status:'Finalizado',website:'https://asl-group.us/',highlights:['Enlace externo al sitio web','Caso de estudio pendiente de documentar','Tecnologías y alcance por confirmar']},
];

// Traducción al inglés: capa sobre PROJECTS (los datos en español siguen siendo la fuente).
type ProjectText = Pick<Project, 'eyebrow' | 'description' | 'details' | 'highlights'> & { stack?: string[] };
export const PROJECTS_EN: Record<string, ProjectText> = {
  'vibe-comandas': {
    eyebrow: 'Restaurants · Real-time operations',
    description: 'Interactive dashboard to manage restaurant menus, tables, orders and reservations, connected to a Spring Boot API deployed on Render.',
    details: 'Full Stack demo solution with a Next.js frontend, a Spring Boot backend and Swagger/OpenAPI documentation. It includes a dish catalog, order tracking and reservation forms. The backend uses temporary in-memory storage: it is not ready for real orders without authentication and persistence.',
    highlights: ['Navigable, interactive dashboard', 'REST API with OpenAPI documentation', 'Tables, orders, reservations and catalog', 'CI with GitHub Actions', 'Free-tier deployment on Render and Vercel', 'Demo: temporary data and no authentication'],
  },
  'orionixgol': {
    eyebrow: 'Web project · Case study',
    description: 'Orionixgol project included in the portfolio as completed work, with public documentation still to be added.',
    details: 'Completed project. The public URL, repository and technologies are not shown yet because they have not been confirmed.',
    stack: ['Web project', 'Case study'],
    highlights: ['Case study included', 'Screenshots and documentation to be added', 'Public link pending confirmation'],
  },
  'spring-ai-financial-engine': {
    eyebrow: 'Local models and markets',
    description: 'Exploration of a financial prediction engine integrated with AI models.',
    details: 'Research and prototyping of financial analysis tools with Spring AI, local models and data-source integration. This is not investment advice.',
    stack: ['Spring AI', 'Ollama', 'Java', 'Docker', 'ONNX (evaluation)'],
    highlights: ['Local model integration', 'Evaluation of inference tools', 'Trend and volatility analysis', 'Microservice design'],
  },
  'videojuego3d-unity': {
    eyebrow: '3D game development',
    description: '3D video game built with Unity and C#, with a public repository and a link to a playable online version.',
    details: 'Unity game repository including Assets, Packages and ProjectSettings. It showcases work with the Unity engine and C# programming. A web build is published on GitHub Pages so the game can be played from the browser.',
    stack: ['Unity', 'C#', '3D development'],
    highlights: ['Unity project with Assets and Packages structure', 'Source code available on GitHub', 'Developed in C#', 'WebGL build linked from GitHub Pages'],
  },
  'wc-personal': {
    eyebrow: 'Web application · Full Stack architecture',
    description: 'World Cup web platform with a Next.js frontend, a Spring Boot API and PostgreSQL persistence.',
    details: 'Full Stack project organized into frontend, backend and infrastructure. The repository documents running the whole stack locally with Docker Compose, using a Next.js 14 frontend, a Spring Boot 3.5 backend and a PostgreSQL database. The source code is private, so a technical description is provided without exposing internal documentation.',
    highlights: ['Frontend with Next.js and TypeScript', 'Backend API with Spring Boot', 'PostgreSQL persistence', 'Containerization and local Docker Compose environment', 'Private repository: no public link to the code', 'Application published on Vercel', 'Top scorers section linked from the portfolio'],
  },
  'asl-group-web': {
    eyebrow: 'Published web project',
    description: 'Reference to the ASL Group website, added to my project catalog.',
    details: 'Website associated with ASL Group. The public link has been provided to document the project; its technologies, development scope and specific responsibilities are still to be validated before detailing the case study.',
    stack: ['Website', 'Public project'],
    highlights: ['External link to the website', 'Case study to be documented', 'Technologies and scope to be confirmed'],
  },
};

export function localizeProject(p: Project, lang: 'en' | 'es'): Project {
  return lang === 'en' && PROJECTS_EN[p.slug] ? { ...p, ...PROJECTS_EN[p.slug] } : p;
}
