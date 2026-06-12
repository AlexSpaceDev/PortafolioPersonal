# Portafolio Personal — ALEX DEV

Portafolio personal de **Alex DEV (SPACE DEV)**: Full Stack Developer.

Sitio de una sola página con un concepto visual **"Cosmos + Código"**: hero 3D orbital como fondo ambiental, constelaciones de stack interactivas (con navegación por arrastre), proyectos filtrables y soporte bilingüe (ES/EN).

Versión actual: **v1.1.0** (ver `docs/iteracion-v1.1.0-portfolio-alex-dev.md`).

## Stack

- **Astro 5** — framework base (SSG + islands)
- **React 18** — toda la UI interactiva vive en una isla (`client:only`)
- **Three.js** — sistema orbital 3D del hero
- **CSS** plano (`src/styles/global.css`) con custom properties

## Ejecutar en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build de producción en dist/
npm run preview  # sirve el build
```

## Estructura

```
portafolio/
├── astro.config.mjs
├── src/
│   ├── pages/
│   │   └── index.astro          # Página única; monta la isla React
│   ├── styles/
│   │   └── global.css           # Estilos globales (paleta cosmos)
│   ├── data/
│   │   ├── site.js              # Config: status, logo, fuente, cursor
│   │   ├── i18n.js              # Textos ES/EN
│   │   ├── skills.js            # Constelación (estrellas + conexiones)
│   │   ├── projects.js          # Proyectos
│   │   ├── experience.js        # Timeline de experiencia
│   │   └── planets.js           # Planetas del hero 3D
│   └── components/
│       ├── App.jsx              # Raíz de la isla React
│       ├── Ui.jsx               # Hooks, boot, cursor, header, hero, sobre mí
│       ├── Hero3D.jsx           # Sistema orbital (Three.js)
│       ├── Constellation.jsx    # Constelación de habilidades (canvas 2D)
│       ├── Sections.jsx         # Habilidades, proyectos, modal, experiencia, proceso
│       └── ContactFooter.jsx    # Contacto y footer
└── docs/
    ├── portafolio-diseno-v2.md                  # Documento de diseño original
    ├── iteracion-v1.0.0-portfolio-alex-dev.md   # Cambios de la iteración v1.0.0
    └── iteracion-v1.1.0-portfolio-alex-dev.md   # Cambios de la iteración v1.1.0
```

## Pendientes (puntos abiertos)

- **Integración con Supabase:** definir alcance (¿formulario de contacto?, ¿panel privado?, ¿gestión de proyectos?). Aún por discutir. El indicador de status del header se controla por ahora en `src/data/site.js`.
- **Funcionamiento del formulario:** definir backend (posiblemente Supabase, o servicio tipo Formspree / Resend). Hoy simula el envío.
- **Enlaces de contacto:** completar los links reales (email, GitHub, LinkedIn, CV).
- **Sección de habilidades de diseño:** subsección con enlace a Behance, por definir ubicación dentro de la página.
- **Repositorios / código fuente de cada proyecto:** falta pasar los enlaces para conectarlos con el botón "Ver código" del modal de detalle (campo `github` en `src/data/projects.js`; el botón se muestra solo cuando hay URL).
- **Detalle expandido por proyecto:** vista ampliada con descripción larga, stack completo (incluyendo tecnologías implícitas como VS Code/Git), capturas y enlaces (incluido "Ver código"). El modal ya omite los bloques sin contenido (`challenge`, `solution`, `gallery`, `result` en `projects.js`).
- **Constelación de stack:** revisar qué tecnologías desactivar/ocultar mientras no estén respaldadas por un proyecto. No eliminarlas del código (flag `enabled` en `src/data/skills.js`).
- **Filtros secundarios de la constelación:** confirmar el ícono temporal del botón que despliega `Backend / Diseño / Herramientas` (hoy `✦`).
- **Iconografía SVG:** la página tiene pocos íconos. Definir un set ilustrativo (SVGs propios o una librería tipo Lucide / Tabler / Phosphor) que encaje con la estética espacial.
- **Recuento final de tecnologías dominadas:** actualizar la métrica del "Sobre Mí" cuando la página esté terminada y el stack cerrado.
- **Sección de experiencia:** ampliar con futuras entradas posteriores a 2025.
- **Apartado de marcas / colaboraciones:** sección de mención especial a marcas y emprendimientos independientes con participación activa. Pendiente a futuro, cuando esas marcas estén más establecidas.
- **Logo definitivo:** reemplazar provisional `[AE]` cuando esté listo el branding final.
- **Imágenes:** capturas reales de proyectos y foto/avatar de "Sobre mí" (hoy placeholders rayados).

## Autor

**Alex DEV** — SPACE DEV
