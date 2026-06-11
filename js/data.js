/* ============================================================
   Datos + i18n ES/EN — Portafolio Alex Enriquez Vera
   Contenido placeholder marcado donde aplica.
   ============================================================ */

window.I18N = {
  es: {
    nav: { inicio: 'Inicio', sobre: 'Sobre mí', habilidades: 'Habilidades', proyectos: 'Proyectos', experiencia: 'Experiencia', proceso: 'Proceso', contacto: 'Contacto' },
    status: {
      available: 'Disponible',
      limited: 'Capacidad limitada',
      closed: 'No tomando proyectos'
    },
    heroBadge: {
      available: 'Disponible para nuevos proyectos',
      limited: 'Capacidad limitada este mes',
      closed: 'No tomando proyectos por ahora'
    },
    hero: {
      kicker: '// SOFTWARE DEVELOPER',
      title: 'Alex Enriquez',
      subtitle: 'Software Developer • Game Developer • Creative Technologist',
      desc: 'Diseño y construyo aplicaciones, sitios web y videojuegos donde la lógica del código se cruza con la curiosidad por explorar nuevas formas de crear.',
      ctaPrimary: 'Ver proyectos',
      ctaSecondary: 'Contactarme'
    },
    about: {
      label: '// 01 SOBRE MÍ',
      title: 'Construyo software con criterio y curiosidad',
      p1: 'Soy desarrollador full-stack multidisciplinario: aplicaciones web, mobile, videojuegos y consultoría técnica. Me muevo entre stacks con la misma disciplina con la que un explorador estudia un territorio nuevo — entendiendo primero el problema, eligiendo después la herramienta.',
      p2: 'Prefiero proyectos donde el detalle importa: productos con identidad, experiencias interactivas y herramientas que la gente realmente usa. Trabajo de forma independiente, con comunicación directa y entregas visibles.',
      photoPh: '[ foto profesional / avatar ]',
      stats: [
        { value: 24, suffix: '+', label: 'Proyectos completados' },
        { value: 15, suffix: '+', label: 'Tecnologías dominadas' },
        { value: 6, suffix: '', label: 'Años de experiencia' },
        { value: 4, suffix: '', label: 'Áreas de especialización' }
      ]
    },
    skills: {
      label: '// 02 HABILIDADES',
      title: 'Constelaciones de stack',
      desc: 'Cada tecnología es una estrella. Las líneas conectan los stacks con los que construyo. Haz click en una estrella para filtrar los proyectos donde la uso.',
      hint: 'hover: detalle · click: filtrar proyectos',
      projects: 'proyectos',
      project: 'proyecto'
    },
    filters: { all: 'Todos', web: 'Web', apps: 'Apps', games: 'Videojuegos', xr: 'VR/AR', tools: 'Herramientas' },
    projects: {
      label: '// 03 PROYECTOS',
      title: 'Trabajo seleccionado',
      filteringBy: 'Filtrando por:',
      seeMore: 'Ver más proyectos',
      seeLess: 'Ver menos',
      details: 'Ver detalles',
      code: 'Ver código',
      empty: 'No hay proyectos en esta categoría todavía.'
    },
    modal: {
      summary: 'Resumen',
      challenge: 'El reto',
      solution: 'La solución',
      stack: 'Stack técnico',
      gallery: 'Galería',
      result: 'Resultado',
      live: 'Ver proyecto en vivo',
      github: 'Ver código en GitHub',
      close: 'Cerrar',
      prev: 'Proyecto anterior',
      next: 'Proyecto siguiente'
    },
    experience: {
      label: '// 04 EXPERIENCIA',
      title: 'Ruta de viaje'
    },
    process: {
      label: '// 05 PROCESO DE TRABAJO',
      title: 'Cómo trabajo contigo',
      steps: [
        { title: 'Conversación inicial', desc: 'Entendemos juntos qué necesitas, plazos y presupuesto. Sin compromiso.' },
        { title: 'Propuesta y alcance', desc: 'Te envío una propuesta clara con scope, entregables, tiempos y precio fijo.' },
        { title: 'Diseño y validación', desc: 'Mockups o prototipos cuando aplica, para que valides antes de codear.' },
        { title: 'Desarrollo iterativo', desc: 'Construyo en sprints, con avances visibles y feedback frecuente.' },
        { title: 'Entrega y soporte', desc: 'Despliegue, documentación y un periodo de soporte incluido.' }
      ]
    },
    contact: {
      label: '// 06 CONTACTO',
      title: 'Construyamos algo juntos.',
      desc: 'Me interesan especialmente los proyectos web con identidad propia, las apps con propósito claro y las experiencias interactivas o de juego. Si tienes una idea, hablemos.',
      meta1: 'Respondo en menos de 24h (GMT-5)',
      meta2: 'Español e inglés',
      email: 'Email',
      cv: 'CV (PDF)',
      emailCopied: '¡Email copiado!',
      form: {
        name: 'Nombre', email: 'Correo', type: 'Tipo de proyecto', budget: 'Presupuesto aproximado',
        message: 'Mensaje', send: 'Enviar mensaje', sending: 'Enviando…',
        namePh: 'Tu nombre', emailPh: 'tu@correo.com', messagePh: 'Cuéntame sobre tu proyecto…',
        types: ['Web', 'App', 'Videojuego', 'Consultoría', 'Otro'],
        budgets: ['A definir', '< $500', '$500 – $2,000', '$2,000 – $5,000', '$5,000+'],
        optional: '(opcional)',
        errRequired: 'Este campo es requerido',
        errEmail: 'Ingresa un correo válido',
        errMessage: 'El mensaje debe tener al menos 20 caracteres',
        successTitle: 'Mensaje enviado',
        successDesc: 'Gracias por escribir. Te respondo en menos de 24 horas.',
        sendAnother: 'Enviar otro mensaje'
      }
    },
    footer: {
      quickLinks: 'Secciones',
      social: 'Redes',
      copyright: '© 2026 Alex Enriquez Vera. Todos los derechos reservados.',
      builtWith: 'Construido con Astro, React y mucho café',
      version: 'v2.0.0'
    },
    boot: [
      'Inicializando sistema...',
      'Conectando con el cosmos...',
      'Cargando experiencia...',
      'Bienvenido.'
    ],
    bootSkip: 'click o tecla para saltar',
    skipLink: 'Saltar al contenido principal'
  },

  en: {
    nav: { inicio: 'Home', sobre: 'About', habilidades: 'Skills', proyectos: 'Projects', experiencia: 'Experience', proceso: 'Process', contacto: 'Contact' },
    status: {
      available: 'Available',
      limited: 'Limited capacity',
      closed: 'Not taking projects'
    },
    heroBadge: {
      available: 'Available for new projects',
      limited: 'Limited capacity this month',
      closed: 'Not taking projects right now'
    },
    hero: {
      kicker: '// SOFTWARE DEVELOPER',
      title: 'Alex Enriquez Vera',
      subtitle: 'Software Developer • Game Developer • Creative Technologist',
      desc: 'I design and build applications, websites and games where the logic of code meets the curiosity to explore new ways of creating.',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Contact me'
    },
    about: {
      label: '// 01 ABOUT ME',
      title: 'I build software with judgment and curiosity',
      p1: 'I am a multidisciplinary full-stack developer: web apps, mobile, games and technical consulting. I move between stacks with the same discipline an explorer applies to new territory — understanding the problem first, choosing the tool second.',
      p2: 'I prefer projects where detail matters: products with identity, interactive experiences and tools people actually use. I work independently, with direct communication and visible progress.',
      photoPh: '[ professional photo / avatar ]',
      stats: [
        { value: 24, suffix: '+', label: 'Projects completed' },
        { value: 15, suffix: '+', label: 'Technologies mastered' },
        { value: 6, suffix: '', label: 'Years of experience' },
        { value: 4, suffix: '', label: 'Areas of expertise' }
      ]
    },
    skills: {
      label: '// 02 SKILLS',
      title: 'Stack constellations',
      desc: 'Every technology is a star. Lines connect the stacks I build with. Click a star to filter the projects where I use it.',
      hint: 'hover: details · click: filter projects',
      projects: 'projects',
      project: 'project'
    },
    filters: { all: 'All', web: 'Web', apps: 'Apps', games: 'Games', xr: 'VR/AR', tools: 'Tools' },
    projects: {
      label: '// 03 PROJECTS',
      title: 'Selected work',
      filteringBy: 'Filtering by:',
      seeMore: 'See more projects',
      seeLess: 'See less',
      details: 'View details',
      code: 'View code',
      empty: 'No projects in this category yet.'
    },
    modal: {
      summary: 'Summary',
      challenge: 'The challenge',
      solution: 'The solution',
      stack: 'Tech stack',
      gallery: 'Gallery',
      result: 'Outcome',
      live: 'View live project',
      github: 'View code on GitHub',
      close: 'Close',
      prev: 'Previous project',
      next: 'Next project'
    },
    experience: {
      label: '// 04 EXPERIENCE',
      title: 'Journey log'
    },
    process: {
      label: '// 05 WORK PROCESS',
      title: 'How I work with you',
      steps: [
        { title: 'Initial conversation', desc: 'We figure out together what you need, timelines and budget. No commitment.' },
        { title: 'Proposal & scope', desc: 'You get a clear proposal with scope, deliverables, timeline and fixed price.' },
        { title: 'Design & validation', desc: 'Mockups or prototypes where applicable, so you validate before any code.' },
        { title: 'Iterative development', desc: 'I build in sprints, with visible progress and frequent feedback.' },
        { title: 'Delivery & support', desc: 'Deployment, documentation and an included support period.' }
      ]
    },
    contact: {
      label: '// 06 CONTACT',
      title: "Let's build something together.",
      desc: 'I am especially drawn to web projects with their own identity, apps with a clear purpose, and interactive or game experiences. If you have an idea, let’s talk.',
      meta1: 'I reply within 24h (GMT-5)',
      meta2: 'Spanish & English',
      email: 'Email',
      cv: 'Resume (PDF)',
      emailCopied: 'Email copied!',
      form: {
        name: 'Name', email: 'Email', type: 'Project type', budget: 'Approximate budget',
        message: 'Message', send: 'Send message', sending: 'Sending…',
        namePh: 'Your name', emailPh: 'you@email.com', messagePh: 'Tell me about your project…',
        types: ['Web', 'App', 'Game', 'Consulting', 'Other'],
        budgets: ['To be defined', '< $500', '$500 – $2,000', '$2,000 – $5,000', '$5,000+'],
        optional: '(optional)',
        errRequired: 'This field is required',
        errEmail: 'Enter a valid email',
        errMessage: 'Message must be at least 20 characters',
        successTitle: 'Message sent',
        successDesc: 'Thanks for writing. I will get back to you within 24 hours.',
        sendAnother: 'Send another message'
      }
    },
    footer: {
      quickLinks: 'Sections',
      social: 'Social',
      copyright: '© 2026 Alex Enriquez Vera. All rights reserved.',
      builtWith: 'Built with Astro, React and a lot of coffee',
      version: 'v2.0.0'
    },
    boot: [
      'Initializing system...',
      'Connecting to the cosmos...',
      'Loading experience...',
      'Welcome.'
    ],
    bootSkip: 'click or press any key to skip',
    skipLink: 'Skip to main content'
  }
};

/* ---------- Habilidades / constelación ----------
   x, y en coordenadas normalizadas 0-1 dentro del canvas.
   cat: web | apps | games | xr | tools
   main: true => estrella dorada (stack principal actual)
*/
window.SKILLS = [
  { id: 'astro',      name: 'Astro',        cat: 'web',   x: 0.16, y: 0.30, size: 1.25, main: true,  projects: 3 },
  { id: 'react',      name: 'React',        cat: 'web',   x: 0.28, y: 0.18, size: 1.3,  main: true,  projects: 6 },
  { id: 'typescript', name: 'TypeScript',   cat: 'web',   x: 0.40, y: 0.32, size: 1.2,  main: true,  projects: 7 },
  { id: 'tailwind',   name: 'Tailwind CSS', cat: 'web',   x: 0.24, y: 0.46, size: 1.1,  main: false, projects: 5 },
  { id: 'supabase',   name: 'Supabase',     cat: 'web',   x: 0.38, y: 0.55, size: 1.05, main: false, projects: 3 },
  { id: 'vite',       name: 'Vite',         cat: 'web',   x: 0.12, y: 0.58, size: 0.9,  main: false, projects: 4 },
  { id: 'threejs',    name: 'Three.js',     cat: 'web',   x: 0.30, y: 0.72, size: 1.0,  main: false, projects: 2 },

  { id: 'flutter',    name: 'Flutter',      cat: 'apps',  x: 0.58, y: 0.20, size: 1.15, main: false, projects: 3 },
  { id: 'dart',       name: 'Dart',         cat: 'apps',  x: 0.68, y: 0.34, size: 1.0,  main: false, projects: 3 },

  { id: 'unity',      name: 'Unity',        cat: 'games', x: 0.78, y: 0.55, size: 1.3,  main: true,  projects: 4 },
  { id: 'csharp',     name: 'C#',           cat: 'games', x: 0.66, y: 0.66, size: 1.1,  main: false, projects: 4 },

  { id: 'xr',         name: 'XR Toolkit',   cat: 'xr',    x: 0.88, y: 0.36, size: 0.95, main: false, projects: 1 },

  { id: 'git',        name: 'Git',          cat: 'tools', x: 0.50, y: 0.80, size: 0.85, main: false, projects: 12 },
  { id: 'figma',      name: 'Figma',        cat: 'tools', x: 0.62, y: 0.88, size: 0.85, main: false, projects: 6 },
  { id: 'claude',     name: 'Claude Code',  cat: 'tools', x: 0.74, y: 0.78, size: 0.95, main: false, projects: 5 }
];

/* Conexiones (constelaciones de stack) — pares de ids */
window.SKILL_LINKS = [
  ['astro', 'react'], ['react', 'typescript'], ['astro', 'tailwind'],
  ['react', 'tailwind'], ['typescript', 'supabase'], ['tailwind', 'supabase'],
  ['astro', 'vite'], ['vite', 'threejs'], ['threejs', 'supabase'],
  ['flutter', 'dart'], ['dart', 'typescript'],
  ['unity', 'csharp'], ['csharp', 'claude'],
  ['unity', 'xr'], ['xr', 'dart'],
  ['git', 'threejs'], ['git', 'figma'], ['figma', 'claude'], ['git', 'claude']
];

/* ---------- Proyectos (contenido placeholder, ajustar con proyectos reales) ---------- */
window.PROJECTS = [
  {
    id: 'aniversario',
    cat: 'web',
    year: '2025',
    tech: ['astro', 'react', 'tailwind', 'supabase'],
    techLabels: ['Astro', 'React', 'Tailwind CSS', 'Supabase', 'Web3Forms'],
    github: true, live: true,
    es: {
      title: 'Aniversario',
      desc: 'Sitio interactivo conmemorativo con experiencia narrativa, formulario RSVP y galería en vivo.',
      summary: 'Una experiencia web narrativa creada para un evento de aniversario, con animaciones suaves, confirmación de asistencia y galería colaborativa.',
      challenge: 'El cliente necesitaba un sitio memorable que funcionara perfecto en mobile, con RSVP en tiempo real y cero fricción para invitados de todas las edades.',
      solution: 'Astro para un sitio ultraligero con islands de React solo donde había interactividad. Web3Forms para el RSVP sin backend propio y Supabase para la galería en vivo.',
      result: '100% de las confirmaciones llegaron por el sitio. LCP de 1.2s en 3G. El cliente lo describió como "mejor de lo que imaginamos".'
    },
    en: {
      title: 'Aniversario',
      desc: 'Interactive commemorative site with a narrative experience, RSVP form and live gallery.',
      summary: 'A narrative web experience created for an anniversary event, with soft animations, RSVP confirmation and a collaborative gallery.',
      challenge: 'The client needed a memorable site that worked flawlessly on mobile, with real-time RSVP and zero friction for guests of all ages.',
      solution: 'Astro for an ultra-light site with React islands only where interactivity lived. Web3Forms for backend-less RSVP and Supabase for the live gallery.',
      result: '100% of confirmations arrived through the site. 1.2s LCP on 3G. The client described it as "better than we imagined".'
    }
  },
  {
    id: 'orbital-runner',
    cat: 'games',
    year: '2024',
    tech: ['unity', 'csharp'],
    techLabels: ['Unity', 'C#', 'Shader Graph'],
    github: true, live: false,
    es: {
      title: 'Orbital Runner',
      desc: 'Juego arcade de gravedad orbital: esquiva escombros y usa la gravedad de planetas para impulsarte.',
      summary: 'Arcade 2.5D donde el jugador navega campos de escombros usando asistencias gravitacionales como mecánica central.',
      challenge: 'Diseñar una mecánica de gravedad que se sintiera intuitiva en los primeros 10 segundos de juego, sin tutorial.',
      solution: 'Simulación simplificada de dos cuerpos con trayectoria proyectada visible. Iteré la curva de dificultad con playtesting semanal.',
      result: 'Prototipo jugable publicado en itch.io; base para un proyecto comercial en exploración.'
    },
    en: {
      title: 'Orbital Runner',
      desc: 'Orbital-gravity arcade game: dodge debris and slingshot around planets to gain speed.',
      summary: 'A 2.5D arcade game where the player navigates debris fields using gravity assists as the core mechanic.',
      challenge: 'Designing a gravity mechanic that felt intuitive within the first 10 seconds of play, with no tutorial.',
      solution: 'Simplified two-body simulation with a visible projected trajectory. Difficulty curve iterated through weekly playtesting.',
      result: 'Playable prototype published on itch.io; foundation for a commercial project under exploration.'
    }
  },
  {
    id: 'habitos',
    cat: 'apps',
    year: '2024',
    tech: ['flutter', 'dart', 'supabase'],
    techLabels: ['Flutter', 'Dart', 'Supabase'],
    github: true, live: false,
    es: {
      title: 'Órbita — App de hábitos',
      desc: 'App mobile de seguimiento de hábitos con visualización orbital del progreso semanal.',
      summary: 'Aplicación Flutter donde cada hábito es un cuerpo en órbita: completar el hábito mantiene su órbita estable.',
      challenge: 'Diferenciar la app en una categoría saturada, evitando la culpa como mecánica de retención.',
      solution: 'Metáfora visual positiva (órbitas que se estabilizan) en lugar de rachas que se rompen. Sincronización offline-first con Supabase.',
      result: 'Beta cerrada con 40 usuarios y retención semanal del 62%.'
    },
    en: {
      title: 'Órbita — Habits app',
      desc: 'Mobile habit-tracking app with an orbital visualization of weekly progress.',
      summary: 'A Flutter app where each habit is an orbiting body: completing the habit keeps its orbit stable.',
      challenge: 'Standing out in a saturated category while avoiding guilt as a retention mechanic.',
      solution: 'A positive visual metaphor (orbits that stabilize) instead of streaks that break. Offline-first sync with Supabase.',
      result: 'Closed beta with 40 users and 62% weekly retention.'
    }
  },
  {
    id: 'consultoria-dashboard',
    cat: 'web',
    year: '2025',
    tech: ['react', 'typescript', 'supabase', 'vite'],
    techLabels: ['React', 'TypeScript', 'Supabase', 'Vite'],
    github: false, live: true,
    es: {
      title: 'Panel de operaciones',
      desc: 'Dashboard interno para una consultora: métricas de proyectos, capacidad del equipo y facturación.',
      summary: 'Herramienta interna que centraliza la operación de una consultora pequeña: proyectos activos, horas, capacidad y facturación.',
      challenge: 'El equipo gestionaba todo en hojas de cálculo desconectadas; los datos clave tardaban días en consolidarse.',
      solution: 'SPA en React + TypeScript con Supabase como backend (auth, RLS, realtime). Migración de datos históricos incluida.',
      result: 'El cierre mensual pasó de 3 días a 2 horas. Adoptado por todo el equipo en la primera semana.'
    },
    en: {
      title: 'Operations panel',
      desc: 'Internal dashboard for a consulting firm: project metrics, team capacity and billing.',
      summary: 'An internal tool centralizing a small consultancy’s operations: active projects, hours, capacity and billing.',
      challenge: 'The team managed everything in disconnected spreadsheets; key data took days to consolidate.',
      solution: 'React + TypeScript SPA with Supabase as backend (auth, RLS, realtime). Historical data migration included.',
      result: 'Monthly close went from 3 days to 2 hours. Adopted by the whole team within the first week.'
    }
  },
  {
    id: 'vr-museo',
    cat: 'xr',
    year: '2023',
    tech: ['unity', 'csharp', 'xr'],
    techLabels: ['Unity', 'C#', 'XR Toolkit'],
    github: false, live: false,
    es: {
      title: 'Galería VR experimental',
      desc: 'Prototipo de galería de arte en realidad virtual con navegación por teletransporte y audio espacial.',
      summary: 'Exploración de VR como medio expositivo: una galería virtual navegable con obras 3D y audio posicional.',
      challenge: 'Lograr confort de navegación para usuarios sin experiencia previa en VR.',
      solution: 'Locomoción por teletransporte con viñeteado dinámico, señalética espacial y sesiones de prueba con usuarios nuevos.',
      result: 'Demo presentada en un evento local de tecnología creativa; 0 reportes de mareo en 30+ sesiones.'
    },
    en: {
      title: 'Experimental VR gallery',
      desc: 'VR art gallery prototype with teleport navigation and spatial audio.',
      summary: 'Exploring VR as an exhibition medium: a navigable virtual gallery with 3D works and positional audio.',
      challenge: 'Achieving comfortable navigation for users with no prior VR experience.',
      solution: 'Teleport locomotion with dynamic vignetting, spatial wayfinding and testing sessions with first-time users.',
      result: 'Demo presented at a local creative-tech event; 0 motion-sickness reports across 30+ sessions.'
    }
  },
  {
    id: 'landing-producto',
    cat: 'web',
    year: '2024',
    tech: ['astro', 'tailwind', 'threejs'],
    techLabels: ['Astro', 'Tailwind CSS', 'Three.js'],
    github: true, live: true,
    es: {
      title: 'Landing 3D de producto',
      desc: 'Landing page con visualización 3D interactiva del producto y configurador de variantes.',
      summary: 'Página de producto donde el visitante rota, acerca y configura el producto en 3D antes de comprar.',
      challenge: 'Integrar 3D interactivo sin sacrificar el rendimiento de carga ni el SEO.',
      solution: 'Astro con el visor Three.js cargado lazy tras el LCP, imágenes estáticas como fallback y modelos optimizados (< 800KB).',
      result: '+34% de tiempo en página respecto a la landing anterior y mejora en la tasa de conversión.'
    },
    en: {
      title: '3D product landing',
      desc: 'Landing page with an interactive 3D product viewer and variant configurator.',
      summary: 'A product page where visitors rotate, zoom and configure the product in 3D before buying.',
      challenge: 'Integrating interactive 3D without sacrificing load performance or SEO.',
      solution: 'Astro with the Three.js viewer lazy-loaded after LCP, static image fallbacks and optimized models (< 800KB).',
      result: '+34% time-on-page versus the previous landing and an improved conversion rate.'
    }
  }
];

/* ---------- Experiencia ---------- */
window.EXPERIENCE = [
  {
    date: '2024 — presente', dateEn: '2024 — present',
    tech: ['Astro', 'React', 'Supabase', 'Unity'],
    es: { role: 'Desarrollador independiente', org: 'SPACE DEV', desc: 'Desarrollo de productos web, apps y videojuegos para clientes locales e internacionales bajo marca propia.' },
    en: { role: 'Independent developer', org: 'SPACE DEV', desc: 'Building web products, apps and games for local and international clients under my own brand.' }
  },
  {
    date: '2022 — 2024', dateEn: '2022 — 2024',
    tech: ['React', 'TypeScript', 'Node.js'],
    es: { role: 'Desarrollador full-stack', org: 'Consultora de software · placeholder', desc: 'Desarrollo de aplicaciones web para clientes de banca y retail. Liderazgo técnico en dos proyectos.' },
    en: { role: 'Full-stack developer', org: 'Software consultancy · placeholder', desc: 'Web application development for banking and retail clients. Technical lead on two projects.' }
  },
  {
    date: '2021 — 2022', dateEn: '2021 — 2022',
    tech: ['Unity', 'C#'],
    es: { role: 'Game developer', org: 'Estudio indie · placeholder', desc: 'Programación de gameplay y herramientas internas para un estudio de juegos independiente.' },
    en: { role: 'Game developer', org: 'Indie studio · placeholder', desc: 'Gameplay programming and internal tooling for an independent game studio.' }
  },
  {
    date: '2020 — 2021', dateEn: '2020 — 2021',
    tech: ['Flutter', 'Dart', 'Firebase'],
    es: { role: 'Desarrollador mobile (freelance)', org: 'Proyectos independientes', desc: 'Primeras apps publicadas y primeros clientes freelance. Base de la práctica independiente actual.' },
    en: { role: 'Mobile developer (freelance)', org: 'Independent projects', desc: 'First published apps and first freelance clients. Foundation of my current independent practice.' }
  }
];

/* ---------- Planetas del hero 3D ---------- */
window.HERO_PLANETS = [
  { id: 'astro',      name: 'Astro',      cat: 'web',   radius: 2.1, speed: 1.00, size: 0.16, phase: 0.0 },
  { id: 'react',      name: 'React',      cat: 'web',   radius: 2.6, speed: 0.80, size: 0.19, phase: 1.1 },
  { id: 'typescript', name: 'TypeScript', cat: 'web',   radius: 3.1, speed: 0.65, size: 0.15, phase: 2.4 },
  { id: 'tailwind',   name: 'Tailwind',   cat: 'web',   radius: 3.55, speed: 0.55, size: 0.13, phase: 3.6 },
  { id: 'supabase',   name: 'Supabase',   cat: 'web',   radius: 4.0, speed: 0.47, size: 0.14, phase: 4.8 },
  { id: 'threejs',    name: 'Three.js',   cat: 'web',   radius: 4.45, speed: 0.40, size: 0.13, phase: 0.7 },
  { id: 'flutter',    name: 'Flutter',    cat: 'apps',  radius: 4.9, speed: 0.34, size: 0.15, phase: 2.0 },
  { id: 'unity',      name: 'Unity',      cat: 'games', radius: 5.35, speed: 0.29, size: 0.18, phase: 3.2 },
  { id: 'csharp',     name: 'C#',         cat: 'games', radius: 5.8, speed: 0.25, size: 0.13, phase: 5.5 }
];
