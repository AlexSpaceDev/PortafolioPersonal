/* ============================================================
   Proyectos — iteración v1.0.0
   - techLabels: solo tecnologías PRINCIPALES (las implícitas
     como Git/GitHub/VSCode irán en el detalle expandido, que
     se trabaja en una iteración futura).
   - live: URL pública (null si no aplica / en desarrollo).
   - github: null => botón "Ver código" oculto (repos pendientes
     de pasar — ver README).
   - Los bloques de case study (challenge/solution/result/galería)
     se completan en la iteración del detalle expandido; el modal
     omite los bloques ausentes.
   ============================================================ */

export const PROJECTS = [
  {
    id: 'rompamos-el-tabu',
    cat: 'web',
    tech: ['joomla', 'javascript'],
    techLabels: ['Joomla', 'JavaScript'],
    live: 'https://rompamoseltabu.com/',
    github: null,
    es: {
      title: 'Rompamos el Tabú',
      desc: 'Sitio web educativo enfocado en la concienciación y prevención de ETS en jóvenes.',
      summary: 'Sitio web educativo enfocado en la concienciación y prevención de enfermedades de transmisión sexual (ETS) en jóvenes. Ofrece información accesible y recursos de apoyo a través de una plataforma orientada a la salud sexual.'
    },
    en: {
      title: 'Rompamos el Tabú',
      desc: 'Educational website focused on STD awareness and prevention among young people.',
      summary: 'Educational website focused on awareness and prevention of sexually transmitted diseases (STDs) among young people. It offers accessible information and support resources through a platform oriented to sexual health.'
    }
  },
  {
    id: 'space-dev',
    cat: 'web',
    tech: ['astro', 'react', 'tailwind', 'typescript'],
    techLabels: ['Astro', 'React', 'Tailwind CSS', 'TypeScript'],
    live: 'https://spacedev.me',
    github: null,
    es: {
      title: 'Space DEV',
      desc: 'Sitio web corporativo de Space DEV: identidad, servicios y proyectos del estudio.',
      summary: 'Sitio web corporativo de Space DEV, diseñado para presentar la identidad del estudio, sus servicios y proyectos a través de una experiencia moderna y accesible, con una temática inspirada en el espacio y la creatividad tecnológica.'
    },
    en: {
      title: 'Space DEV',
      desc: "Space DEV's corporate website: the studio's identity, services and projects.",
      summary: "Space DEV's corporate website, designed to present the studio's identity, services and projects through a modern, accessible experience themed around space and creative technology."
    }
  },
  {
    id: 'trazando-pasos',
    cat: 'games',
    tech: ['unreal'],
    techLabels: ['Unreal Engine'],
    live: 'https://www.behance.net/gallery/166470549/Trazando-Pasos-(videojuego-VR)-(2023)',
    github: null,
    es: {
      title: 'Trazando Pasos',
      desc: 'Videojuego VR sobre la migración. Ganador del GameJam VRDay Latam 2022.',
      summary: 'Videojuego de realidad virtual que explora los desafíos y experiencias de la migración. Ganador del GameJam VRDay Latam 2022. Utiliza la inmersión de VR para reforzar el mensaje narrativo.'
    },
    en: {
      title: 'Trazando Pasos',
      desc: 'VR game about migration. Winner of the VRDay Latam 2022 GameJam.',
      summary: 'Virtual reality game that explores the challenges and experiences of migration. Winner of the VRDay Latam 2022 GameJam. It uses VR immersion to reinforce the narrative message.'
    }
  },
  {
    id: 'plantain-feast',
    cat: 'games',
    tech: ['unreal'],
    techLabels: ['Unreal Engine'],
    live: 'https://www.behance.net/gallery/166078851/Plantain-Feast',
    github: null,
    es: {
      title: 'Plantain Feast',
      desc: 'Juego móvil de cocina 2D inspirado en la gastronomía ecuatoriana.',
      summary: 'Videojuego móvil de cocina en 2D inspirado en la gastronomía ecuatoriana. Los jugadores preparan recetas tradicionales utilizando el plátano como ingrediente principal, promoviendo la cultura culinaria local.'
    },
    en: {
      title: 'Plantain Feast',
      desc: '2D mobile cooking game inspired by Ecuadorian gastronomy.',
      summary: '2D mobile cooking game inspired by Ecuadorian gastronomy. Players prepare traditional recipes using plantain as the main ingredient, promoting local culinary culture.'
    }
  },
  {
    id: 'pets',
    cat: 'apps',
    tech: ['flutter', 'supabase'],
    techLabels: ['Flutter', 'Supabase'],
    live: null, // proyecto en desarrollo
    github: null,
    es: {
      title: 'Pets',
      desc: 'App móvil para el cuidado y seguimiento de mascotas.',
      summary: 'Aplicación móvil enfocada en el cuidado y seguimiento de mascotas. Permite gestionar calendarios de vacunación, recordatorios de alimentación, citas veterinarias y otros aspectos de la salud y bienestar animal.'
    },
    en: {
      title: 'Pets',
      desc: 'Mobile app for pet care and tracking.',
      summary: 'Mobile app focused on pet care and tracking. It lets you manage vaccination calendars, feeding reminders, vet appointments and other aspects of animal health and wellbeing.'
    }
  },
  {
    id: 'alerta',
    cat: 'xr',
    tech: ['lensstudio', 'javascript'],
    techLabels: ['Lens Studio', 'JavaScript'],
    live: 'https://www.expreso.ec/guayaquil/arte-interactivo-busca-sensibilizar-enos-salud-mental-213527.html',
    github: null,
    es: {
      title: 'ALERTA!',
      desc: 'Experiencia AR para la exposición "ALERTA! Reflexiones gráficas en torno a la salud mental".',
      summary: 'Experiencia de realidad aumentada creada para la exposición "ALERTA! Reflexiones gráficas en torno a la salud mental". Combina ilustración, animación y tecnología interactiva para enriquecer la experiencia artística y fomentar la reflexión sobre la salud mental.'
    },
    en: {
      title: 'ALERTA!',
      desc: 'AR experience for the exhibition "ALERTA! Graphic reflections on mental health".',
      summary: 'Augmented reality experience created for the exhibition "ALERTA! Graphic reflections on mental health". It combines illustration, animation and interactive technology to enrich the artistic experience and encourage reflection on mental health.'
    }
  },
  {
    id: 'soldadura-vr',
    cat: 'xr',
    tech: ['unity', 'csharp', 'metaquest'],
    techLabels: ['Unity', 'C#', 'Meta Quest 2'],
    live: null, // documentación privada / presentación del proyecto
    github: null,
    es: {
      title: 'Simulación de Soldadura VR',
      desc: 'Simulador de capacitación en VR para Meta Quest 2 sobre el proceso de soldadura.',
      summary: 'Simulador de capacitación en realidad virtual para Meta Quest 2 que guía al usuario a través de las distintas etapas del proceso de soldadura. Diseñado como herramienta de entrenamiento práctico en entornos seguros e inmersivos.'
    },
    en: {
      title: 'VR Welding Simulation',
      desc: 'VR training simulator for Meta Quest 2 covering the welding process.',
      summary: 'Virtual reality training simulator for Meta Quest 2 that guides the user through the different stages of the welding process. Designed as a hands-on training tool in safe, immersive environments.'
    }
  }
];
