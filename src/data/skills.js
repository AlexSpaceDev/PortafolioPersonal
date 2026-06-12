/* ============================================================
   Habilidades / constelación — iteración v1.1.0
   x, y en coordenadas normalizadas 0-1 dentro del espacio
   virtual del canvas (más ancho que el contenedor: se navega
   con click sostenido + arrastre).
   cat: categoría principal (la que muestra el tooltip).
   cats: opcional — categorías adicionales. La estrella se
     mantiene encendida en todos esos filtros (ej. Unity/Unreal
     en Videojuegos y VR/AR; VS Code/Git/GitHub transversales).
   main: true => estrella dorada (stack principal actual)
   enabled: false => NO se renderiza todavía (tecnología sin
   proyecto visible que la respalde — no eliminar, se
   reactivará al agregar proyectos. Ver README, pendientes).
   projects: nº de proyectos visibles que la usan (0 = el
   tooltip omite el contador).
   ============================================================ */

export const SKILLS = [
  // --- Web ---
  { id: 'javascript', name: 'JavaScript',   cat: 'web',     x: 0.08, y: 0.28, size: 1.2,  main: false, enabled: true,  projects: 3 },
  { id: 'typescript', name: 'TypeScript',   cat: 'web',     x: 0.18, y: 0.16, size: 1.15, main: true,  enabled: true,  projects: 2 },
  { id: 'react',      name: 'React',        cat: 'web',     x: 0.28, y: 0.27, size: 1.3,  main: true,  enabled: true,  projects: 2 },
  { id: 'astro',      name: 'Astro',        cat: 'web',     x: 0.16, y: 0.43, size: 1.25, main: true,  enabled: true,  projects: 2 },
  { id: 'tailwind',   name: 'Tailwind CSS', cat: 'web',     x: 0.29, y: 0.54, size: 1.05, main: false, enabled: true,  projects: 2 },
  { id: 'joomla',     name: 'Joomla',       cat: 'web',     x: 0.05, y: 0.52, size: 0.95, main: false, enabled: true,  projects: 2 },
  { id: 'css',        name: 'CSS',          cat: 'web',     x: 0.13, y: 0.68, size: 1.0,  main: false, enabled: true,  projects: 2 },
  { id: 'html5',      name: 'HTML5',        cat: 'web',     x: 0.10, y: 0.88, size: 0.9,  main: false, enabled: false, projects: 0 },
  { id: 'preact',     name: 'Preact',       cat: 'web',     x: 0.34, y: 0.12, size: 0.85, main: false, enabled: false, projects: 0 },
  { id: 'responsive', name: 'Responsive Design', cat: 'web', x: 0.02, y: 0.14, size: 0.85, main: false, enabled: false, projects: 0 },

  // --- Mobile / Apps ---
  { id: 'flutter',    name: 'Flutter',      cat: 'apps',    x: 0.47, y: 0.24, size: 1.15, main: false, enabled: true,  projects: 1 },
  { id: 'dart',       name: 'Dart',         cat: 'apps',    x: 0.56, y: 0.14, size: 0.95, main: false, enabled: true,  projects: 1 },

  // --- Videojuegos (Unity/Unreal también se usan para VR/AR) ---
  { id: 'unreal',     name: 'Unreal Engine', cat: 'games',  cats: ['games', 'xr'], x: 0.62, y: 0.50, size: 1.25, main: false, enabled: true, projects: 2 },
  { id: 'unity',      name: 'Unity',        cat: 'games',   cats: ['games', 'xr'], x: 0.74, y: 0.32, size: 1.3,  main: true,  enabled: true, projects: 2 },
  { id: 'csharp',     name: 'C#',           cat: 'games',   x: 0.84, y: 0.48, size: 1.05, main: false, enabled: true,  projects: 2 },
  { id: 'blueprints', name: 'Blueprints',   cat: 'games',   x: 0.92, y: 0.64, size: 0.9,  main: false, enabled: false, projects: 0 },

  // --- VR / AR ---
  { id: 'metaquest',  name: 'Meta Quest',   cat: 'xr',      x: 0.88, y: 0.22, size: 1.05, main: false, enabled: true,  projects: 1 },
  { id: 'lensstudio', name: 'Lens Studio',  cat: 'xr',      x: 0.70, y: 0.68, size: 1.0,  main: false, enabled: true,  projects: 1 },

  // --- Backend / Base de datos (filtro secundario) ---
  { id: 'supabase',   name: 'Supabase',     cat: 'backend', x: 0.41, y: 0.62, size: 1.05, main: false, enabled: true,  projects: 1 },
  { id: 'mysql',      name: 'MySQL',        cat: 'backend', x: 0.50, y: 0.50, size: 0.9,  main: false, enabled: false, projects: 0 },
  { id: 'postgresql', name: 'PostgreSQL',   cat: 'backend', x: 0.38, y: 0.90, size: 0.9,  main: false, enabled: false, projects: 0 },

  // --- Herramientas generales (filtro secundario; transversales:
  //     se mantienen encendidas en Web, Apps, Videojuegos y VR/AR) ---
  { id: 'vscode',     name: 'VS Code',      cat: 'tools',   cats: ['tools', 'web', 'apps', 'games', 'xr'], x: 0.50, y: 0.80, size: 1.05, main: false, enabled: true, projects: 10 },
  { id: 'git',        name: 'Git',          cat: 'tools',   cats: ['tools', 'web', 'apps', 'games', 'xr'], x: 0.60, y: 0.90, size: 0.95, main: false, enabled: true, projects: 10 },
  { id: 'github',     name: 'GitHub',       cat: 'tools',   cats: ['tools', 'web', 'apps', 'games', 'xr'], x: 0.70, y: 0.84, size: 0.95, main: false, enabled: true, projects: 10 },

  // --- Deploy / hosting (filtro secundario) ---
  { id: 'vercel',      name: 'Vercel',      cat: 'deploy',  x: 0.82, y: 0.76, size: 0.95, main: false, enabled: true,  projects: 0 },
  { id: 'hostinger',   name: 'Hostinger',   cat: 'deploy',  x: 0.91, y: 0.88, size: 0.95, main: false, enabled: true,  projects: 0 },
  { id: 'ecuahosting', name: 'EcuaHosting', cat: 'deploy',  x: 0.94, y: 0.70, size: 0.9,  main: false, enabled: true,  projects: 0 },

  // --- Diseño (filtro secundario — subsección con Behance pendiente) ---
  { id: 'figma',      name: 'Figma',        cat: 'design',  x: 0.27, y: 0.80, size: 0.95, main: false, enabled: true,  projects: 0 },
  { id: 'illustrator', name: 'Illustrator', cat: 'design',  x: 0.04, y: 0.94, size: 0.85, main: false, enabled: false, projects: 0 },
  { id: 'photoshop',  name: 'Photoshop',    cat: 'design',  x: 0.18, y: 0.96, size: 0.85, main: false, enabled: false, projects: 0 },
  { id: 'maya',       name: 'Maya',         cat: 'design',  x: 0.58, y: 0.96, size: 0.85, main: false, enabled: false, projects: 0 },
  { id: 'blender',    name: 'Blender',      cat: 'design',  x: 0.46, y: 0.96, size: 0.85, main: false, enabled: false, projects: 0 }
];

/* Conexiones (constelaciones de stack) — pares de ids.
   Solo se dibujan si ambas estrellas están enabled. */
export const SKILL_LINKS = [
  // Web
  ['javascript', 'typescript'], ['typescript', 'react'], ['react', 'astro'],
  ['astro', 'tailwind'], ['react', 'tailwind'], ['javascript', 'joomla'],
  ['javascript', 'css'], ['css', 'joomla'], ['react', 'preact'],
  // Web <-> Backend
  ['typescript', 'supabase'], ['react', 'supabase'],
  // Apps
  ['flutter', 'dart'], ['supabase', 'flutter'],
  // Videojuegos
  ['unity', 'csharp'], ['unity', 'unreal'], ['unreal', 'blueprints'],
  // VR / AR (Unity y Unreal también se usan para VR)
  ['unity', 'metaquest'], ['unreal', 'metaquest'],
  ['lensstudio', 'javascript'], ['lensstudio', 'metaquest'],
  // Backend
  ['supabase', 'postgresql'], ['mysql', 'postgresql'],
  // Herramientas transversales (una conexión por especialidad)
  ['vscode', 'tailwind'], ['vscode', 'flutter'], ['vscode', 'unreal'], ['vscode', 'lensstudio'],
  ['git', 'github'], ['git', 'vscode'],
  // Deploy / hosting
  ['vercel', 'github'], ['vercel', 'hostinger'], ['hostinger', 'ecuahosting'],
  // Diseño
  ['figma', 'css'], ['figma', 'vscode']
];
