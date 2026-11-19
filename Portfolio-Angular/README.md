# PRISM — Portafolio integral Angular + GSAP

Portafolio profesional con seis fichas de proyectos, cinco en portada y cinco por página en el catálogo.

## Ejecutar

Requisitos: Node.js 22 o 24 y npm.

```bash
npm install
npm run start
```

Abrir http://localhost:4200. Para producción: `npm run build`.

## Incluye
- Angular 21 standalone + GSAP / ScrollTrigger, **sin Three.js ni Next.js**.
- Paisaje distópico original integrado en portada con aves, niebla, transición de día/noche (~14 s) y control pausa/reanudar.
- Imagen optimizada `public/images/ruinas-distopicas.webp` incluida; no requiere downloads externos en tiempo de ejecución para ilustración.
- Paleta naranja terracota y rojo arcilla, tema claro y oscuro, 3 tipografías, adaptativo, reducción de movimiento.
- Proyectos: Vibe, WC-personal, Orionixgol, Unity, ASL Group, Spring AI Financial Engine.
- Reactive Ticketing Platform y Ollama Prompt Lab excluidos, conforme a lo solicitado.

## Estado de proyectos
Los cinco proyectos de portada se muestran como **Finalizado** según lo indicado por el propietario. Esto no equivale a que sus URLs y prestaciones sean públicas: Orionixgol sigue sin URL validada, y Spring AI Financial Engine conserva su estado anterior de desarrollo. No inventamos enlaces.

## Despliegue
Compilar con `npm run build`. Para hosting estático, subir el contenido de `dist/portfolio/browser`. El archivo `public/_redirects` sirve para hosts compatibles con redirecciones SPA. Configure rewrites de Angular Router según el hosting elegido.

## Arquitectura
- `src/app/components/dystopian-hero/` — escena GSAP encapsulada y con limpieza al desmontar.
- `src/app/views.ts` — portada, galería, filtros y fichas.
- `src/app/projects.ts` — catálogo editable.
- `src/styles.css` — sistema visual.
- `public/images/ruinas-distopicas.webp` — escena ilustrada.


## Paisaje GSAP automático (corrección)
El hero distópico inicia automáticamente al cargar, se repite indefinidamente y no tiene botón de pausa. Incluye transiciones visibles día/noche, aves, niebla y zoom de paisaje. No usa Three.js.


## Edición colores planos
- Fondo crema uniforme (#F5EDE4), superficies marfil uniforme (#FFF9F2) y terracota cálida (#B95431).
- Sin degradados CSS, desenfoques, sombras difusas ni efectos glassmorphism.
- Paisaje automático con aves y día/noche mediante una capa de color sólido (sin gradientes).
- Angular y GSAP; sin Three.js.

## Idiomas, favicon, stack y Credly
- **i18n en tiempo de ejecución** (Signals): inglés por defecto, español conmutable con el botón 🌐 del header; la elección se guarda en `localStorage` (`prism-lang`). Textos en `src/app/i18n/translations.ts` (las claves ES se validan en compilación contra EN). Traducciones de proyectos en `PROJECTS_EN` (`src/app/projects.ts`). Los títulos de pestaña se traducen con `I18nTitleStrategy`.
- **Configuración de dominio**: `src/app/portfolio.config.ts` (idiomas, favicon, badges de Credly y tecnologías).
- **Favicon**: `public/assets/images/favicon.png` (+ `apple-touch-icon.png`).
- **Stack**: solo se renderizan las tecnologías con `active: true`. Logos SVG en `public/assets/tech/` (devicon, MIT).
- **Credly**: solo se muestran badges con datos reales, imagen válida y `verificationUrl` https de `credly.com`; con placeholders la sección no aparece.
