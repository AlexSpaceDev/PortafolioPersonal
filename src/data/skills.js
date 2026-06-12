/* ============================================================
   Habilidades / constelación — iteración v1.0.0
   x, y en coordenadas normalizadas 0-1 dentro del espacio
   virtual del canvas (más ancho que el contenedor: se navega
   con click sostenido + arrastre).
   cat: web | apps | games | xr | backend | tools | design
   main: true => estrella dorada (stack principal actual)
   enabled: false => NO se renderiza todavía (tecnología sin
   proyecto visible que la respalde — no eliminar, se
   reactivará al agregar proyectos. Ver README, pendientes).
   projects: nº de proyectos visibles que la usan.
   ============================================================ */

export const SKILLS = [
  // --- Web ---
  { id: 'javascript', name: 'JavaScript',   cat: 'web',     x: 0.08, y: 0.28, size: 1.2,  main: false, enabled: true,  projects: 2 },
  { id: 'typescript', name: 'TypeScript',   cat: 'web',     x: 0.18, y: 0.16, size: 1.15, main: true,  enabled: true,  projects: 1 },
  { id: 'react',      name: 'React',        cat: 'web',     x: 0.28, y: 0.27, size: 1.3,  main: true,  enabled: true,  projects: 1 },
  { id: 'astro',      name: 'Astro',        cat: 'web',     x: 0.16, y: 0.43, size: 1.25, main: true,  enabled: true,  projects: 1 },
  { id: 'tailwind',   name: 'Tailwind CSS', cat: 'web',     x: 0.29, y: 0.54, size: 1.05, main: false, enabled: true,  projects: 1 },
  { id: 'joomla',     name: 'Joomla',       cat: 'web',     x: 0.05, y: 0.52, size: 0.95, main: false, enabled: true,  projects: 1 },
  { id: 'html5',      name: 'HTML5',        cat: 'web',     x: 0.10, y: 0.72, size: 0.9,  main: false, enabled: false, projects: 0 },
  { id: 'css3',       name: 'CSS3',         cat: 'web',     x: 0.20, y: 0.80, size: 0.9,  main: false, enabled: false, projects: 0 },
  { id: 'preact',     name: 'Preact',       cat: 'web',     x: 0.34, y: 0.12, size: 0.85, main: false, enabled: false, projects: 0 },
  { id: 'responsive', name: 'Responsive Design', cat: 'web', x: 0.02, y: 0.14, size: 0.85, main: false, enabled: false, projects: 0 },

  // --- Mobile / Apps ---
  { id: 'flutter',    name: 'Flutter',      cat: 'apps',    x: 0.47, y: 0.24, size: 1.15, main: false, enabled: true,  projects: 1 },
  { id: 'dart',       name: 'Dart',         cat: 'apps',    x: 0.56, y: 0.14, size: 0.95, main: false, enabled: true,  projects: 1 },

  // --- Videojuegos ---
  { id: 'unreal',     name: 'Unreal Engine', cat: 'games',  x: 0.62, y: 0.50, size: 1.25, main: false, enabled: true,  projects: 2 },
  { id: 'unity',      name: 'Unity',        cat: 'games',   x: 0.74, y: 0.32, size: 1.3,  main: true,  enabled: true,  projects: 1 },
  { id: 'csharp',     name: 'C#',           cat: 'games',   x: 0.84, y: 0.48, size: 1.05, main: false, enabled: true,  projects: 1 },
  { id: 'blueprints', name: 'Blueprints',   cat: 'games',   x: 0.68, y: 0.86, size: 0.9,  main: false, enabled: false, projects: 0 },

  // --- VR / AR ---
  { id: 'metaquest',  name: 'Meta Quest',   cat: 'xr',      x: 0.88, y: 0.22, size: 1.05, main: false, enabled: true,  projects: 1 },
  { id: 'lensstudio', name: 'Lens Studio',  cat: 'xr',      x: 0.71, y: 0.68, size: 1.0,  main: false, enabled: true,  projects: 1 },

  // --- Backend / Base de datos ---
  { id: 'supabase',   name: 'Supabase',     cat: 'backend', x: 0.41, y: 0.62, size: 1.05, main: false, enabled: true,  projects: 1 },
  { id: 'mysql',      name: 'MySQL',        cat: 'backend', x: 0.50, y: 0.82, size: 0.9,  main: false, enabled: false, projects: 0 },
  { id: 'postgresql', name: 'PostgreSQL',   cat: 'backend', x: 0.38, y: 0.88, size: 0.9,  main: false, enabled: false, projects: 0 },

  // --- Herramientas generales (implícitas: no se muestran como
  //     tech principal de las cards; sí podrán aparecer en el
  //     detalle expandido de cada proyecto) ---
  { id: 'git',        name: 'Git',          cat: 'tools',   x: 0.93, y: 0.66, size: 0.85, main: false, enabled: false, projects: 0 },
  { id: 'github',     name: 'GitHub',       cat: 'tools',   x: 0.97, y: 0.80, size: 0.85, main: false, enabled: false, projects: 0 },
  { id: 'vscode',     name: 'VSCode',       cat: 'tools',   x: 0.86, y: 0.88, size: 0.85, main: false, enabled: false, projects: 0 },

  // --- Diseño (secundario — subsección con Behance pendiente) ---
  { id: 'illustrator', name: 'Illustrator', cat: 'design',  x: 0.04, y: 0.90, size: 0.85, main: false, enabled: false, projects: 0 },
  { id: 'photoshop',  name: 'Photoshop',    cat: 'design',  x: 0.14, y: 0.95, size: 0.85, main: false, enabled: false, projects: 0 },
  { id: 'figma',      name: 'Figma',        cat: 'design',  x: 0.26, y: 0.92, size: 0.85, main: false, enabled: false, projects: 0 },
  { id: 'maya',       name: 'Maya',         cat: 'design',  x: 0.58, y: 0.94, size: 0.85, main: false, enabled: false, projects: 0 },
  { id: 'blender',    name: 'Blender',      cat: 'design',  x: 0.46, y: 0.96, size: 0.85, main: false, enabled: false, projects: 0 }
];

/* Conexiones (constelaciones de stack) — pares de ids.
   Solo se dibujan si ambas estrellas están enabled. */
export const SKILL_LINKS = [
  // Web
  ['javascript', 'typescript'], ['typescript', 'react'], ['react', 'astro'],
  ['astro', 'tailwind'], ['react', 'tailwind'], ['javascript', 'joomla'],
  ['javascript', 'html5'], ['html5', 'css3'], ['react', 'preact'],
  // Web <-> Backend
  ['typescript', 'supabase'], ['react', 'supabase'],
  // Apps
  ['flutter', 'dart'], ['supabase', 'flutter'],
  // Videojuegos
  ['unity', 'csharp'], ['unity', 'unreal'], ['unreal', 'blueprints'],
  // VR / AR
  ['unity', 'metaquest'], ['lensstudio', 'javascript'], ['lensstudio', 'metaquest'],
  // Backend
  ['supabase', 'postgresql'], ['mysql', 'postgresql']
];
