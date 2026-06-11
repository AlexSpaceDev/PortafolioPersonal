# Portafolio Personal — Documento de Diseño V2

## 0. Resumen ejecutivo

Este documento es la base de diseño para el portafolio personal de Alex Enriquez Vera (SPACE DEV). Evoluciona desde la V1 incorporando: bilingüismo ES/EN, una constelación interactiva como sección de habilidades, un hero 3D con sistema orbital de tecnologías, modales de case study por proyecto, una sección de proceso de trabajo, y un conjunto de toques distintivos (boot sequence, cursor custom, indicador de status en vivo) que refuerzan la temática cosmos + código sin caer en cliché.

El documento está organizado para ser pasado directamente a una etapa de diseño visual. Cada sección define **qué** debe existir y **cómo debe comportarse**, dejando las decisiones de implementación técnica para una fase posterior.

---

## 1. Información general

**Nombre**: Alex Enriquez Vera

**Título profesional**: Software Developer • Game Developer • Creative Technologist

**Objetivo del sitio**: portafolio personal moderno y visualmente impactante que presente a Alex como desarrollador full-stack multidisciplinario (web, mobile, videojuegos, consultoría técnica). El sitio debe permitir a reclutadores, clientes potenciales y colaboradores entender rápidamente el perfil, habilidades y trabajo de Alex, y facilitar el contacto profesional.

**Audiencias prioritarias**:
1. Clientes potenciales freelance (locales e internacionales)
2. Reclutadores técnicos
3. Otros desarrolladores y colaboradores
4. Equipos de consultoría buscando perfil técnico

---

## 2. Concepto creativo

**Temática**: Cosmos + Código.

La metáfora del cosmos funciona como soporte de exploración, construcción y descubrimiento — no como decoración astronómica. El espacio aquí representa la disciplina de explorar territorios técnicos diversos (web, juegos, mobile, consultoría) desde un mismo punto.

**Lo que sí queremos transmitir**:
- Disciplina técnica con sensibilidad creativa
- Curiosidad y rigor en igual medida
- Profesionalismo sin rigidez
- Trabajo independiente con visión amplia
- Estética futurista pero atemporal

**Lo que NO queremos**:
- Estética de página de astronomía o ciencia divulgativa
- Estilo infantil o caricaturesco
- Sobrecarga visual o "demo de Three.js"
- Clichés de developer (matrix, consolas verdes, hacker tropes)
- Storytelling forzado sobre la ubicación geográfica

---

## 3. Idioma y localización

**Idiomas soportados**: Español (default) e Inglés.

**Comportamiento**:
- Toggle visible en el header (ES / EN)
- La preferencia se guarda en localStorage
- Rutas: `/` para español, `/en/` para inglés
- Detección inicial por `navigator.language`, pero respetando la elección manual una vez hecha

**Implementación sugerida**: routing nativo de Astro con archivos paralelos en `/src/content/es/` y `/src/content/en/`, o `astro-i18n`.

**Contenido a traducir**: todo el texto visible, incluyendo descripciones de proyectos, badges, tooltips y formulario de contacto.

---

## 4. Identidad visual

### 4.1 Paleta de colores

| Rol | Hex | Notas |
|---|---|---|
| Fondo principal | `#070B14` | Espacio profundo, casi negro |
| Fondo secundario | `#0E1423` | Para superficies elevadas |
| Fondo terciario | `#161E33` | Para cards y elementos contenidos |
| Azul primario | `#3981BF` | Color principal de marca, tecnología |
| Azul claro | `#5AA3D9` | Hover y acentos sobre azul |
| Dorado de acento | `#F4B860` | **Reemplaza el naranja rojizo de la V1**. Más cálido, evoca sol/estrellas, menos agresivo. Solo para CTAs y momentos puntuales. |
| Texto principal | `#F5F7FA` | Sobre fondos oscuros |
| Texto secundario | `#A7B0C0` | Descripciones, metadatos |
| Texto terciario | `#6B7280` | Hints, placeholders |
| Borde sutil | `rgba(255,255,255,0.08)` | Para separadores |
| Borde elevado | `rgba(255,255,255,0.15)` | Para cards al hover |

**Reglas de uso**:
- El dorado se usa con cuentagotas: CTAs primarios, badge de "disponible", micro-acentos
- El azul es el color dominante de interacción (links, hovers, glows)
- Nunca usar el dorado y el azul juntos en un mismo elemento

### 4.2 Tipografía

**Sans-serif (cuerpo y titulares)**: Geist Sans o Inter como alternativa
- Pesos usados: 400 (regular), 500 (medium), 600 (semibold para titulares grandes)
- Tracking ligeramente negativo en titulares grandes (-0.02em)

**Monoespaciada (acentos técnicos)**: JetBrains Mono o Geist Mono
- Usada para: números de versión, badges de tech, etiquetas de sección ("01 // Sobre mí"), código si aparece, indicadores de status
- Solo peso 400 y 500

**Jerarquía**:
- H1 (hero): 64-96px desktop, 40-56px mobile
- H2 (sección): 40-56px desktop, 32-40px mobile
- H3 (subsección): 24-32px
- Body: 16-18px
- Caption / mono: 12-14px

### 4.3 Tratamientos visuales

- **Fondos**: nebulosas muy sutiles (opacity ~0.15) generadas con CSS gradients o SVG estático. Starfield ligero, no animado por defecto.
- **Glow**: usado solo en hover de elementos interactivos. Color azul (`#3981BF` con alpha 0.4). Nunca permanente en elementos estáticos.
- **Transparencias**: glassmorphism moderado en el header sticky y modales (backdrop-blur ~12px, fondo `rgba(14,20,35,0.7)`).
- **Bordes**: 1px, color `rgba(255,255,255,0.08)` por defecto. Animan a `rgba(57,129,191,0.5)` en hover.
- **Sombras**: solo glow azul, no sombras grises tradicionales.
- **Esquinas redondeadas**: 8px para botones y badges, 12-16px para cards, 24px para modales.

### 4.4 Cursor custom

Cursor personalizado en desktop:
- Default: pequeño círculo blanco semitransparente (~6px) con outline
- En elementos interactivos (links, botones, cards): se expande a ~28px con borde dorado y centro vacío
- Trail muy sutil (opcional, evaluable según performance)
- En mobile: deshabilitado completamente
- Respeta `prefers-reduced-motion`: si está activo, cursor estándar del sistema

---

## 5. Estructura del sitio

Orden de secciones de arriba hacia abajo:

1. Header (sticky)
2. Hero con animación 3D
3. Sobre mí
4. Habilidades (constelación)
5. Proyectos
6. Experiencia
7. Proceso de trabajo
8. Contacto
9. Footer

### 5.1 Header

**Comportamiento**: sticky en top, transparente al inicio, gana fondo con backdrop-blur al hacer scroll.

**Estructura desktop (izquierda → derecha)**:
- Logo textual: `AE` o `Alex Enriquez` (decisión pendiente, ver sección Open Questions)
- Menú horizontal: Inicio, Sobre mí, Habilidades, Proyectos, Experiencia, Proceso, Contacto
- Toggle de idioma: `ES / EN`
- Indicador de status en vivo (ver sección 9.3)

**Mobile**: menú hamburguesa, drawer lateral o overlay full-screen. El indicador de status sigue visible. Toggle de idioma dentro del menú.

**Estado activo**: la sección actualmente visible se marca con un punto dorado a la izquierda del item o un underline sutil.

### 5.2 Hero

**Objetivo**: ser el elemento más memorable del sitio y comunicar inmediatamente el perfil de Alex.

**Layout desktop**: dos columnas.

**Columna izquierda — contenido textual**:

- Badge superior con punto dorado pulsante: `Disponible para nuevos proyectos` (texto dinámico, controlable desde Supabase — ver sección 9.3)
- Etiqueta mono pequeña encima del título: `// SOFTWARE DEVELOPER`
- Título principal H1: `Alex Enriquez Vera`
- Subtítulo: `Software Developer • Game Developer • Creative Technologist`
- Descripción (2-3 líneas, **PROVISIONAL — sujeto a revisión**): *"Diseño y construyo aplicaciones, sitios web y videojuegos donde la lógica del código se cruza con la curiosidad por explorar nuevas formas de crear."*
- Botones:
  - Primario (dorado): `Ver proyectos`
  - Secundario (outline): `Contactarme`

**Columna derecha — animación 3D**: ver sección 6.

**Mobile**: la animación 3D pasa arriba en versión simplificada (sistema orbital reducido a 4-5 planetas, sin trails, sin starfield denso). El texto va debajo.

### 5.3 Sobre mí

**Layout**: dos columnas en desktop, stack en mobile.

**Columna izquierda**: foto profesional o avatar. Puede tener un tratamiento visual sutil (overlay azul muy ligero, marco con borde animado, partículas alrededor).

**Columna derecha**:
- Etiqueta mono: `// 01 SOBRE MÍ`
- Título: `Construyo software con criterio y curiosidad`
- Párrafo principal (3-4 líneas): perfil profesional general
- Párrafo secundario (2-3 líneas): qué tipo de proyectos prefiere, cómo trabaja

**Estadísticas debajo del texto**: 4 cards horizontales en desktop, 2x2 en mobile. Cada card muestra un número grande y una etiqueta debajo:
- Proyectos completados
- Tecnologías dominadas
- Años de experiencia
- Áreas de especialización

Animación: los números cuentan desde 0 hasta el valor final al entrar en viewport (una sola vez).

### 5.4 Habilidades — Constelación interactiva

Esta es una de las secciones distintivas del portafolio. Reemplaza el grid de logos tradicional por una constelación interactiva.

**Concepto**: cada tecnología es una estrella en un canvas. Las estrellas que conforman un mismo stack están conectadas por líneas finas, formando "constelaciones de stack" (ejemplo: Astro + React + Tailwind + Supabase forma una constelación del stack web actual de Alex).

**Categorías** (los filtros del usuario):
- Todos
- Web
- Apps
- Videojuegos
- VR/AR

**Comportamiento al filtrar**:
- Al seleccionar una categoría, las estrellas que no pertenecen se desvanecen a opacity ~0.15
- Las estrellas de la categoría activa brillan más fuerte
- Las líneas de conexión se redibujan para mostrar solo las conexiones dentro del filtro activo
- Transición suave (~600ms)

**Por cada estrella (tecnología)**:
- Posición fija en el canvas (no se desordena entre interacciones)
- Tamaño ligeramente variable según relevancia (no según años de uso — para no desincentivar stacks menos frecuentes)
- Color: azul base, dorado para las "principales" del stack actual
- Logo de la tecnología al lado o sobre la estrella (pequeño)
- Nombre debajo del logo, tipografía mono (`Astro`, `Unity`, `Three.js`, etc.)

**Interacción hover sobre estrella**:
- La estrella crece ligeramente y brilla
- Aparece un pequeño tooltip con:
  - Nombre completo de la tecnología
  - Categoría
  - Número de proyectos donde se ha usado (ej: `5 proyectos`)
- Las conexiones que salen de esa estrella se iluminan
- Las demás estrellas se atenúan levemente

**Interacción click sobre estrella**:
- Filtra la sección de Proyectos para mostrar solo los que usan esa tecnología
- Scroll suave a la sección de Proyectos
- Indicador visible de que el filtro viene de la constelación (ej: `Filtrando por: Unity ×`)

**Mobile**:
- La constelación se simplifica: menos conexiones visibles
- En lugar de hover, tap muestra el tooltip
- Posibilidad de fallback a grid simple si performance es problema (ver sección 13)

**Tecnologías a incluir inicialmente** (lista no exhaustiva, ajustable):
- Web: Astro, React, TypeScript, Tailwind CSS, Supabase, Vite
- Apps: Flutter, Dart
- Juegos: Unity, C#
- VR/AR: (a definir, dejar listo para crecer)
- Herramientas transversales: Git, Figma, Claude Code

### 5.5 Proyectos

**Comportamiento de filtros**: los mismos que en habilidades (Todos, Web, Apps, Videojuegos, VR/AR).

**Visualización inicial**: 4 proyectos máximo visibles. Si hay más en la categoría activa, botón `Ver más proyectos` debajo del grid.

**Layout**: grid de 2 columnas en desktop, 1 en mobile. Cards generosas con buen espacio entre ellas.

**Anatomía de la card de proyecto**:
- Imagen principal (captura o portada del proyecto) ocupa la parte superior
- Badge de categoría sobre la imagen (ej: `Web`, `Videojuego`)
- Título del proyecto
- Descripción breve (2 líneas máx)
- Badges de tecnologías usadas (mono, pequeños)
- Footer con dos acciones: `Ver detalles` (abre modal — ver sección 8) y `Ver código` (link a GitHub si aplica)

**Interacciones**:
- Hover: la imagen hace zoom muy sutil, la card se eleva ligeramente, el borde se ilumina en azul
- Click en cualquier parte de la card (excepto los links del footer): abre el modal de case study

**Animación de entrada**: cards aparecen escalonadas al entrar en viewport (stagger ~80ms).

### 5.6 Experiencia

**Diseño**: timeline vertical inspirado en una ruta espacial.

**Estructura**:
- Línea vertical central (o ligeramente desplazada en desktop) con puntos en cada hito
- Cada experiencia es una card a un lado de la línea (alternando lados en desktop, todas a la derecha en mobile)
- Línea con animación sutil al hacer scroll: las secciones ya pasadas tienen la línea iluminada, las futuras están en gris

**Por cada experiencia**:
- Fecha (mono, pequeña)
- Cargo (título)
- Organización
- Descripción breve (2-3 líneas)
- Tecnologías clave (badges mono)

**Interacción**: el punto en la línea se ilumina cuando esa experiencia entra en viewport, dando sensación de "viaje".

### 5.7 Proceso de trabajo

**Nueva sección, no estaba en V1**. Ayuda a generar confianza con clientes potenciales que no conocen a Alex personalmente.

**Concepto visual**: 5 pasos numerados, presentados horizontalmente en desktop, verticalmente en mobile. Cada paso tiene un icono outline minimalista, un título, y una descripción de 1-2 líneas.

**Pasos sugeridos** (ajustables):

1. **Conversación inicial** — Entendemos juntos qué necesitas, plazos y presupuesto. Sin compromiso.
2. **Propuesta y alcance** — Te envío una propuesta clara con scope, entregables, tiempos y precio fijo.
3. **Diseño y validación** — Mockups o prototipos cuando aplica, para que valides antes de codear.
4. **Desarrollo iterativo** — Construyo en sprints, con avances visibles y feedback frecuente.
5. **Entrega y soporte** — Despliegue, documentación y un periodo de soporte incluido.

**Tratamiento visual**: línea de conexión entre los pasos (refuerzo de la metáfora de viaje), con un degradado del azul al dorado conforme avanza.

### 5.8 Contacto

**Título**: `Construyamos algo juntos.`

**Subtítulo / descripción**: párrafo corto. Incluye explícitamente:
- Tipo de proyectos que más interesan
- Tiempo de respuesta esperado: `Respondo en menos de 24h (GMT-5)`
- Idiomas: `Español e inglés`

**Métodos de contacto** (lista horizontal de iconos):
- Email (clickable, abre cliente o copia al portapapeles)
- GitHub
- LinkedIn
- CV descargable (PDF)

**Formulario**:
- Nombre *
- Correo *
- Tipo de proyecto (dropdown: Web, App, Videojuego, Consultoría, Otro)
- Presupuesto aproximado (dropdown opcional: < $500, $500-$2000, $2000-$5000, $5000+, A definir)
- Mensaje *
- Botón: `Enviar mensaje`

**Backend del formulario**: Web3Forms (ya en uso para Aniversario) o equivalente. Confirmación inline al enviar, sin recarga.

**Validaciones**: campos requeridos marcados, validación de email, mensaje mínimo de 20 caracteres.

### 5.9 Footer

**Estructura simple en 3 zonas**:

Izquierda:
- `Alex Enriquez Vera`
- Subtítulo: `Software Developer • Game Developer • Creative Technologist`

Centro:
- Enlaces rápidos a secciones principales

Derecha:
- Iconos de redes sociales
- Texto de copyright: `© 2026 Alex Enriquez Vera. Todos los derechos reservados.`

Línea inferior pequeña, centrada, mono:
- `Construido con Astro, React y mucho café ☕` (o equivalente, sin emojis si conflicta con la guía visual)
- Versión del sitio (mono, opcional)

---

## 6. Animación 3D del Hero — Sistema orbital

### 6.1 Concepto

Una composición 3D que representa el stack tecnológico de Alex como un sistema orbital:

- **Núcleo central**: una esfera o forma abstracta que pulsa lentamente. Puede contener el logo `AE` sutilmente o ser un núcleo de partículas
- **Planetas orbitando**: 8-12 esferas más pequeñas, cada una representando una tecnología principal (Astro, React, Unity, Three.js, Supabase, Flutter, TypeScript, Tailwind, etc.)
- **Órbitas**: ligeramente visibles como líneas finas circulares, dándole la sensación de sistema
- **Starfield de fondo**: estrellas distantes muy sutiles, parallax muy ligero al mover el mouse
- **Partículas adicionales**: trails detrás de cada planeta, muy sutiles

### 6.2 Comportamiento

- Rotación automática lenta del sistema completo (~20-40 segundos por vuelta)
- Cada planeta orbita a velocidad ligeramente distinta para evitar lockstep visual
- Al mover el mouse, la cámara hace un parallax suave (no rotación completa, solo ligero tilt)
- Hover sobre un planeta: el planeta crece ~20%, se ilumina, aparece tooltip con el nombre de la tecnología, los demás planetas se atenúan ligeramente
- Click sobre un planeta: scroll suave a la sección de habilidades con esa tech destacada (o filtrada)

### 6.3 Implementación

- Three.js puro
- Geometrías simples (esferas con materiales standard) para los planetas
- Núcleo central: combinación de esfera + shader sutil o sistema de partículas
- Raycasting para detección de hover/click
- Labels: HTML overlay con CSS, posicionados con las coordenadas 3D proyectadas a 2D (más legibles que sprites de canvas)
- Color de cada planeta: vinculado a su categoría (azul=web, dorado=games, etc)

### 6.4 Dirección visual de referencia

Aunque el concepto es orbital, la estética visual puede tomar referencias del **agujero negro con horizonte de eventos** (segunda opción discutida): glow intenso del núcleo, ligera distorsión cromática alrededor, sensación de gravedad. El sistema orbital con estética de evento gravitacional es una combinación distintiva.

### 6.5 Fallback móvil

- Sistema reducido a 4-5 planetas
- Sin trails, sin starfield denso
- Sin parallax con mouse (no aplica)
- Si `prefers-reduced-motion`, animación detenida en posición estética (frame estático)

---

## 7. Modal de Case Study

Cada proyecto puede abrir un modal con vista detallada. Esto resuelve el problema de las cards planas y permite mostrar profundidad técnica sin cargar la página principal.

### 7.1 Comportamiento

- Se abre al hacer click en una card de proyecto
- Animación de entrada: fade + scale ligero desde la card original
- Bloquea scroll del body
- Cerrable con: botón X, click fuera del modal, tecla Escape
- Navegación entre proyectos: flechas izquierda/derecha (teclado y botones visibles)
- URL se actualiza con un hash o query param para permitir compartir el link directo a un case study (`/proyectos#aniversario`)

### 7.2 Estructura interna

- **Header del modal**: título del proyecto + categoría + año
- **Hero del case study**: imagen o video grande del proyecto
- **Bloque "Resumen"**: 2-3 líneas describiendo el proyecto
- **Bloque "El reto"**: cuál era el problema o necesidad del cliente
- **Bloque "La solución"**: qué se construyó y por qué (decisiones técnicas)
- **Bloque "Stack técnico"**: badges de todas las tecnologías usadas
- **Galería**: 3-5 imágenes adicionales (capturas, mockups, etc) en grid o carrusel
- **Bloque "Resultado"**: outcome del proyecto (si hay métricas, mejor)
- **Footer**: links a `Ver proyecto en vivo` y `Ver código en GitHub` cuando aplique

### 7.3 Casos sin algunos bloques

Si un proyecto no tiene métricas o no está deployed, esos bloques simplemente se omiten. La estructura es flexible.

### 7.4 Mobile

- Modal a pantalla completa
- Galería en carrusel horizontal con swipe
- Resto del contenido en stack vertical

---

## 8. Toques distintivos

Estos elementos no son críticos pero diferencian el portafolio.

### 8.1 Boot sequence (primera visita)

- Solo se muestra la primera vez que un usuario visita el sitio (guardado en localStorage)
- Duración: 2-3 segundos máximo
- Overlay full-screen sobre el sitio cargando
- Estética: terminal arrancando, líneas mono apareciendo una a una
  ```
  > Inicializando sistema...
  > Conectando con el cosmos...
  > Cargando experiencia...
  > Bienvenido.
  ```
- Si `prefers-reduced-motion`: skipped automáticamente
- Skippable manualmente con cualquier click o tecla
- Después de mostrarse una vez, jamás se vuelve a mostrar

### 8.2 Cursor custom

Ya descrito en la sección 4.4. Se desactiva en mobile y con `prefers-reduced-motion`.

### 8.3 Indicador de status en vivo

Punto pulsante en el header con texto a su lado. Tres estados:

- 🟢 `Disponible` — color verde sutil
- 🟡 `Capacidad limitada` — color dorado
- 🔴 `No tomando proyectos` — color rojo sutil

El status se guarda en Supabase (tabla simple `site_status` con un solo registro). Alex puede cambiarlo desde un panel admin simple o directamente en Supabase. El sitio lo consulta al cargar (con caché de 5 minutos para no spamear).

El badge de "Disponible para nuevos proyectos" del hero se sincroniza con este status.

---

## 9. Responsive

### 9.1 Breakpoints

| Nombre | Rango | Notas |
|---|---|---|
| Mobile S | 320-374px | Soporte mínimo |
| Mobile | 375-767px | Diseño base mobile |
| Tablet | 768-1023px | Layout intermedio |
| Desktop | 1024-1439px | Layout completo |
| Desktop L | 1440px+ | Mayor whitespace, contenido más respirado |

### 9.2 Estrategias por sección

| Sección | Mobile | Desktop |
|---|---|---|
| Header | Hamburger + drawer | Menú horizontal |
| Hero | Stack vertical, 3D simplificado arriba | Dos columnas |
| Sobre mí | Stack vertical | Dos columnas |
| Habilidades | Constelación reducida o fallback grid | Constelación completa |
| Proyectos | 1 columna | 2 columnas |
| Experiencia | Todas las cards al mismo lado | Alternando lados |
| Proceso | Vertical | Horizontal |
| Contacto | Stack vertical | Dos columnas (info + form) |
| Footer | Stack vertical | 3 zonas |

### 9.3 Fallbacks específicos en mobile

- Cursor custom: deshabilitado
- Boot sequence: duración reducida o skipped
- Parallax 3D: deshabilitado
- Constelación: posible fallback a grid si el dispositivo es muy débil (detectable por `navigator.hardwareConcurrency` o por frame rate detection)
- Trails de partículas: deshabilitados

---

## 10. Accesibilidad

### 10.1 Movimiento reducido

Respetar `@media (prefers-reduced-motion: reduce)` en:
- Animación 3D del hero (frame estático)
- Constelación (sin pulsación de estrellas, conexiones estáticas)
- Cursor custom (cursor del sistema)
- Boot sequence (skipped)
- Transiciones entre secciones (instantáneas en vez de animadas)
- Hover effects (sin scale, solo cambio de color)

### 10.2 Contraste

- Todo el texto debe cumplir WCAG AA mínimo (4.5:1 para body, 3:1 para titulares grandes)
- El texto secundario (`#A7B0C0`) sobre fondo principal (`#070B14`) debe verificarse caso por caso
- Estados de focus visibles con outline azul claro de 2px

### 10.3 Navegación por teclado

- Todos los elementos interactivos son focuseables con Tab
- Orden de tabulación lógico
- Skip-link al inicio para saltar al contenido principal
- Modales: focus trap, focus inicial en el botón de cerrar o el primer elemento
- Atajos: Escape cierra modales, flechas navegan entre case studies

### 10.4 ARIA y semántica

- Estructura semántica correcta (header, nav, main, section, footer, article)
- Labels en todos los inputs
- aria-label en botones solo con icono
- aria-live region para feedback del formulario de contacto
- Alt text descriptivo en imágenes de proyectos

---

## 11. SEO

### 11.1 Meta tags

- Title único por página (en bilingüe)
- Description única por página, 150-160 caracteres
- Keywords (opcional, no críticas)
- Canonical URL
- Hreflang tags para ES/EN

### 11.2 Open Graph

- og:title, og:description, og:type, og:url, og:image
- Imagen OG: diseñada específicamente (1200x630), con estética cosmos pero legible. Una versión por idioma si los textos cambian.
- Twitter Card equivalente

### 11.3 Schema.org

- `Person` para Alex en la home
- `CreativeWork` o `SoftwareApplication` para cada proyecto destacado
- `BreadcrumbList` si la estructura crece

### 11.4 Sitemap y robots

- `sitemap.xml` generado por Astro automáticamente
- `robots.txt` permitiendo indexación
- Verificación en Google Search Console post-deploy

---

## 12. Performance

### 12.1 Objetivos

- LCP < 2.5s en 3G simulado
- CLS < 0.1
- FID < 100ms
- Bundle inicial < 200KB gzipped (excluyendo Three.js que se carga lazy)

### 12.2 Estrategias

- **Three.js lazy load**: la animación del hero carga después del LCP. Mostrar fallback estático (imagen o SVG ligero) hasta que Three.js esté listo.
- **Detección de capacidad**: si el dispositivo es móvil o tiene `navigator.hardwareConcurrency` bajo, cargar versión reducida directamente
- **Imágenes**: formato WebP/AVIF con fallback. Astro Image component. Lazy loading nativo.
- **Fuentes**: subset Latin extendido, preload de las dos fuentes principales, font-display: swap
- **CSS**: crítico inline, resto async
- **JavaScript**: Astro islands — solo hidratar componentes interactivos (constelación, modales, formulario, 3D)
- **Constelación**: límite de partículas según device (50-200 según hardware)
- **Modales**: contenido cargado solo al abrirse, no en el bundle inicial

### 12.3 Optimización 3D

- Geometrías de baja resolución para planetas (sphere segments: 32-48)
- Sin shadows en mobile
- Frame rate adaptativo: bajar quality si fps < 30 sostenido
- Pausar cuando el hero sale del viewport (Intersection Observer)

---

## 13. Analytics

**Herramienta**: Plausible o Umami (ambas privacy-friendly, sin cookies, GDPR-compliant).

**Eventos a trackear**:
- Pageviews (default)
- Click en filtros de habilidades y proyectos
- Clicks en cards de proyecto (qué proyectos generan más interés)
- Apertura de case studies
- Envío exitoso del formulario de contacto
- Click en CV descargable
- Cambio de idioma

**No trackear**: información personal, contenido de formularios, datos sensibles.

**Banner de cookies**: no necesario si se usa una herramienta sin cookies. Solo agregar si se cambia a GA u otra herramienta con cookies.

---

## 14. Stack técnico previsto

| Capa | Tecnología | Notas |
|---|---|---|
| Framework | Astro 4+ | SSG + islands para interactividad |
| UI | React (en islands) | Solo donde necesario: constelación, modales, formulario |
| Estilos | Tailwind CSS | Con configuración custom para la paleta y tipografía |
| Tipografía | Geist Sans + Geist Mono (o Inter + JetBrains Mono) | Self-hosted vía Fontsource |
| Animaciones 2D | GSAP o Framer Motion | A decidir según peso final |
| 3D | Three.js | Sin loaders pesados, todo procedural |
| Backend ligero | Supabase | Para status dinámico y eventualmente formulario |
| Formulario | Web3Forms | Ya en uso en otros proyectos |
| Deploy | Vercel o Netlify | A definir |
| Analytics | Plausible o Umami | A definir |
| Idiomas | Astro i18n nativo | Sin librerías adicionales |

---

## 15. Open Questions / decisiones pendientes

Decisiones aún no tomadas. Resolver antes o durante la fase de diseño:

1. **Logo**: ¿`AE` o `Alex Enriquez` en el header? Posible explorar un logotipo simbólico (constelación que forma AE, por ejemplo).
2. **Foto vs avatar**: ¿foto profesional real en Sobre mí o avatar ilustrado/abstracto?
3. **Selección de tipografía**: Geist vs Inter para sans. JetBrains Mono vs Geist Mono. Probar ambas en mockups.
4. **Texto definitivo del hero**: el actual es provisional, ver sección 5.2 y nota al final del documento.
5. **Proyectos a incluir en lanzamiento**: definir lista exacta y conseguir capturas/galerías de cada uno.
6. **CV PDF**: ¿se incluye una versión descargable? Si sí, diseñarla en línea con la identidad visual.
7. **Boot sequence**: texto exacto y duración final. Posible localización ES/EN.
8. **Dominio y deploy**: confirmar proveedor de deploy y dominio definitivo.

---

## 16. Sensación final deseada

El visitante debe sentir que ha entrado al centro de control de un desarrollador que toma su trabajo en serio sin perder la curiosidad. La temática cosmos no es disfraz: es la metáfora correcta para alguien que explora territorios técnicos diversos con disciplina y criterio.

Al irse, el visitante debería poder decir tres cosas con confianza:

1. *"Sé qué hace esta persona y a qué nivel."*
2. *"Sé cómo trabaja y qué esperar si la contrato."*
3. *"Quiero saber más."*

Si el sitio logra eso, cumple su función.

---

## Decisiones confirmadas antes de pasar a diseño

- ✅ **Animación 3D del hero**: sistema orbital de tecnologías (sección 6).
- ✅ **Idioma**: bilingüe ES/EN, español por defecto (sección 3).
- ✅ **Paleta**: cosmos oscuro con dorado como acento (sección 4.1).
- ✅ **Tipografía**: Geist Sans + Geist Mono (con Inter + JetBrains Mono como alternativa a evaluar en mockups).
- ✅ **Secciones incluidas en V1**: Hero, Sobre mí, Habilidades (constelación), Proyectos (con modal de case study), Experiencia, Proceso de trabajo, Contacto.
- ✅ **Toques distintivos**: boot sequence (primera visita), cursor custom, indicador de status en vivo.
- ⏳ **Provisional**: texto del hero, lista final de proyectos, logo, foto/avatar — se refinan durante o después del primer mockup.

---

*Documento V2. Última actualización: 2026.*
