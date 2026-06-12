# Iteración v1.1.0 — Mejoras Portfolio Alex DEV

Segunda tanda de mejoras sobre la versión actual. Claude Code ya tiene el contexto del proyecto y de la iteración anterior (v1.0.0). Este documento describe únicamente los cambios nuevos a aplicar.

---

## 1. Hero

- **Quitar** el texto `// software developer` que aparece debajo / al lado del rol principal. Es redundante con `Full Stack Developer`.

---

## 2. Sección "Sobre Mí"

### Descripción (nueva versión)

Reemplazar el párrafo introductorio por este:

> ¿Qué tal? Soy **Alex Enriquez D. Vera (DEV)**, desarrollador full-stack multidisciplinario: aplicaciones web, móviles, videojuegos y consultoría técnica. Me muevo entre stacks entendiendo primero el problema, para luego elegir la herramienta más adecuada en cada caso.
>
> Prefiero proyectos donde el detalle importa: productos con identidad, experiencias interactivas y herramientas que la gente realmente usa. Trabajo de forma independiente, con comunicación directa y entregas visibles.

### Métricas
- **Proyectos completados:** `15+` (aunque la sección "Nuestros Archivos" refleje 10; siempre hay proyectos menores o sin documentación pública).
- **Tecnologías dominadas:** mantener el número actual. Se hará un recuento final cuando la página esté terminada *(ver pendientes)*.
- **Años de experiencia:** 5 ✅
- **Áreas de especialización:** 4 ✅

---

## 3. Constelación de Stack

### Texto descriptivo (reemplazo)

Reemplazar:

> ~~Cada tecnología es una estrella. Las líneas conectan los stacks con los que construyo. Haz click en una estrella para filtrar los proyectos donde la uso, o arrastra el fondo para explorar.~~

Por algo más natural, menos tutorial:

> Cada tipo de proyecto trae su propio **stack** y sus propias **herramientas**. Recorrerlos me ha enseñado a moverme entre entornos distintos y a elegir lo que mejor encaja con cada idea.

> **Nota sobre "stack" vs "herramientas":** no son lo mismo. *Stack* = combinación de tecnologías que conforman el producto (lenguajes, frameworks, bases de datos). *Herramientas* = todo lo de alrededor (IDEs, control de versiones, software de diseño). Por eso conviene mencionar ambos.

### Estrellas a agregar

Sumar al sistema actual:
- **VS Code**
- **Figma**
- **CSS** *(si no estaba ya destacada como estrella propia)*
- **Git**
- **GitHub**

### Conexiones nuevas / ajustes

- **Unreal Engine** y **Unity** → conectarse también al filtro **VR/AR** (ambos motores se han usado para VR además de videojuegos clásicos).
- **VS Code** → transversal: conecta con **Web, Apps, Videojuegos y VR/AR**. Es la herramienta principal de escritura de código en todas las especialidades.
- **Git** y **GitHub** → transversales también: conectan con todas las categorías principales.
- **Supabase** → mantiene su nodo de **Backend** (filtro propio).
- **Figma** → entra en el filtro **Diseño** (ver siguiente bloque).

### Propuesta: filtros secundarios

Los filtros principales se quedan como están: `Todos · Web · Apps · Videojuegos · VR/AR`.

Agregar un **botón secundario** (icono temporal por ahora — ver pendientes de iconografía) que al presionarlo despliega filtros adicionales más específicos:

- **Backend** → Supabase, MySQL, PostgreSQL
- **Diseño** → Figma, Illustrator, Photoshop, Maya, Blender
- **Herramientas** → VS Code, Git, GitHub

> El razonamiento: hay estrellas que hoy se sienten "solitarias" si se activan solas, pero conforme crezca el portafolio la constelación se irá llenando. Mejor dejar la arquitectura cimentada desde ya.

---

## 4. Sección "Nuestros Archivos"

### Descripción breve (nueva, al inicio de la sección)

Agregar un párrafo introductorio:

> Aquí puedes echar un vistazo a los proyectos que he creado o en los que he participado — al menos los que **no son confidenciales**. Cada uno cuenta una historia distinta, con su propio stack y su propia razón de existir.

### Comportamiento por defecto

Cuando el filtro está en **"Todos"** y se muestran solo 4 cards iniciales, esas 4 deben ser **una de cada categoría principal**:
- 1 de Web
- 1 de Apps
- 1 de Videojuegos
- 1 de VR/AR

Así la vista inicial transmite la diversidad del portafolio. Cuando el usuario presiona **"Mostrar todo"**, se ordenan con la lógica normal.

### Cambios en el footer de las cards

Reorganización del pie de cada card de proyecto:

| Esquina izquierda | Esquina derecha |
|---|---|
| **Ver detalles** *(abre modal)* | **Ver en vivo** *(abre URL del proyecto)* |

- El botón **"Ver código"** se **quita del footer principal de la card** y pasa a estar **dentro del modal de detalle** del proyecto. Tiene más sentido ahí, junto con el resto de la info expandida.
- Para proyectos **sin URL pública** (actualmente solo **Pets**), reemplazar **"Ver en vivo"** por **"En proceso"** como etiqueta no clickeable (estado visualmente distinguible: opacidad reducida, sin hover, cursor por defecto).

> Texto alternativo si "Ver en vivo" se siente largo: `En vivo →`, `Visitar`, `Abrir sitio`. Queda a criterio visual.

---

## 5. Ruta de Viaje (Experiencia)

Reemplazar el contenido actual de la sección de experiencia por esta trayectoria. **Mantener la estética y maquetación ya existente**, solo cambian los datos y los textos:

### 2018 – 2023
**Licenciado en Animación Digital**
*Universidad Católica Santiago de Guayaquil*

> Formación que sentó las bases para moverme con soltura entre el diseño visual y el código.

---

### 2022 – 2024
**Game Developer**
*Indie Games*

> Proyectos como *Trazando Pasos* y *Plantain Feast* marcaron mis primeros pasos en la programación, combinando narrativa, mecánicas y diseño interactivo.

---

### 2024 – 2025
**Desarrollador Independiente**
*SPACE DEV*

> Desarrollo de sitios web y videojuegos para clientes locales bajo marca propia.

---

### 2025 – presente
**Desarrollador Full-Stack**
*Webs, apps, videojuegos, XR*

> Desarrollo de productos completos — de la idea inicial al entregable final — combinando diseño y código en web, mobile, videojuegos y XR.

---

## 6. Sección de Contacto

### Texto (reemplazo)

Reemplazar:

> ~~Me interesan especialmente los proyectos web con identidad propia, las apps con propósito claro y las experiencias interactivas o de juego. Si tienes una idea, hablemos.~~

Por:

> Si tienes un prototipo, un documento o apenas una idea, podemos aterrizarla, construirla y escalarla — ya sea una web, una app, una experiencia interactiva o tu propio videojuego. Solo escríbeme.

---

## 7. Pendientes para el README

Actualizar el README. Quitar lo que ya quedó cerrado y sumar lo nuevo:

### Quitar de pendientes (ya resuelto en esta iteración)
- ~~Lista de proyectos: ampliar con nuevos proyectos~~ → ya ampliada.

### Mantener / actualizar
- **Integración con Supabase:** definir alcance (formulario de contacto, panel privado, gestión de proyectos). Aún por discutir.
- **Sección de habilidades de diseño:** subsección con enlace a Behance, por definir ubicación dentro de la página.
- **Repositorios / código fuente de cada proyecto:** falta pasar los enlaces para conectarlos con el botón "Ver código" del modal de detalle.
- **Detalle expandido por proyecto:** vista ampliada al hacer click en una card, con descripción larga, stack completo, capturas y enlaces (incluido "Ver código").
- **Constelación de stack:** revisar qué tecnologías desactivar/ocultar mientras no estén respaldadas por un proyecto. No eliminarlas del código.
- **Sección de experiencia:** ampliar con futuras entradas posteriores a 2025.
- **Logo definitivo:** reemplazar provisional `AE` cuando esté listo el branding final.

### Nuevos pendientes
- **Recuento final de tecnologías dominadas:** actualizar la métrica del "Sobre Mí" cuando la página esté terminada y el stack cerrado.
- **Iconografía SVG:** la página tiene pocos íconos. Definir un set ilustrativo (SVGs propios importados manualmente o una librería tipo Lucide / Tabler / Phosphor). Ya veremos qué encaja mejor con la estética espacial.
- **Filtros secundarios de la constelación:** confirmar el ícono temporal del botón que despliega `Backend / Diseño / Herramientas`.
- **Enlaces de contacto:** completar los links reales (email, redes, etc.).
- **Funcionamiento del formulario:** definir backend (posiblemente Supabase, o servicio tipo Formspree / Resend).
- **Apartado de marcas / colaboraciones:** sección de mención especial a marcas y emprendimientos independientes en los que participo activamente. Pendiente más a futuro, cuando esas marcas estén más establecidas.

---

## Resumen de cambios rápidos

| Elemento | Antes | Después |
|---|---|---|
| Hero subtítulo | `// software developer` debajo de Full Stack Developer | Eliminado |
| Sobre Mí — saludo | "Soy Alex DEV" | "¿Qué tal? Soy Alex Enriquez D. Vera (DEV)…" |
| Métrica proyectos | *(número anterior)* | `15+` |
| Texto constelación | Tono tutorial | Stack + herramientas, tono natural |
| Estrellas nuevas | — | VS Code, Figma, CSS, Git, GitHub |
| Conexiones nuevas | — | Unreal/Unity ↔ VR/AR · VS Code transversal · Git/GitHub transversales |
| Filtros constelación | 5 principales | + botón secundario: Backend / Diseño / Herramientas |
| Vista inicial "Nuestros Archivos" | 4 cards lineales | 4 cards = una de cada categoría principal |
| Footer card | "Ver detalles" + "Ver código" (oculto) | "Ver detalles" + "Ver en vivo" (o "En proceso") |
| "Ver código" | Footer de card | Dentro del modal de detalle |
| Experiencia | Vacío / placeholder | 4 entradas de 2018 a presente |
| Texto contacto | Lista de intereses | Invitación directa a colaborar |
