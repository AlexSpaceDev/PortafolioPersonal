# Iteración v1.0.0 — Mejoras Portfolio Alex DEV

Documento de cambios sobre la versión actual. Claude Code ya tiene el contexto y la estructura construida; este archivo describe únicamente las modificaciones a aplicar.

---

## 1. Header / Hero

### Sistema de órbitas
- El sistema de órbitas **no debe recortarse** por ningún lado.
- La posición actual se mantiene, pero debe comportarse como un **fondo ambiental**, no como un elemento más dentro de una cuadrícula.
- Si las órbitas se superponen con el texto de la izquierda, **no es problema**: el texto va por encima, las órbitas detrás.
- Por el lado derecho puede extenderse hasta el borde del viewport sin recortes.
- Objetivo: que respire y se sienta integrado como capa de fondo.

### Textos del hero
- **Nombre:** reemplazar el nombre completo por **`ALEX DEV`**.
- **Rol:** reemplazar `Software Developer • Game Developer • Creative Technologist` por **`Full Stack Developer`**.
  - (Confirmado: el término correcto es *Full Stack Developer* o *Full-Stack Developer*, ambos válidos).

---

## 2. Sección "Sobre Mí"

### Encabezado
- Cambiar `Construyo software con criterio y curiosidad` por: **`Soy Alex DEV`**.

### Descripción (versión final redactada)

> Desarrollador full-stack multidisciplinario: aplicaciones web, móviles, videojuegos y consultoría técnica. Me muevo entre stacks con la misma disciplina, entendiendo primero el problema para luego elegir la herramienta más adecuada en cada caso.
>
> Prefiero proyectos donde el detalle importa: productos con identidad, experiencias interactivas y herramientas que la gente realmente usa. Trabajo de forma independiente, con comunicación directa y entregas visibles.

### Métricas
- Años de experiencia: **5** (antes 6).
- Áreas de especialización: **4** → Web, Mobile, Videojuegos, VR/AR. ✅
- Proyectos completados y tecnologías dominadas: **pendiente** — se calcula al cerrar la lista definitiva de proyectos y stacks.

---

## 3. Constelación de Stack

### Comportamiento
- Mantener el filtro por categoría (Web, Apps, Videojuegos, VR/AR). ✅
- **Nueva interacción sugerida:** el contenedor mantiene su tamaño actual, pero el usuario puede **hacer click sostenido sobre el vacío y arrastrar** para navegar por el espacio y ver todas las estrellas (pan/drag dentro del recuadro). Esto evita tener que agrandar el módulo aunque haya muchas tecnologías.
- Las tecnologías que aún no estén respaldadas por un proyecto visible **no eliminar**: solo **desactivar u ocultar** del render. Al agregar más proyectos en el futuro algunas reaparecerán.

### Tecnologías a incluir (organizadas por categoría)

**Web**
- JavaScript, TypeScript, React, Astro, Tailwind CSS, HTML5, CSS3, Joomla, Preact, Responsive Design

**Mobile**
- Flutter, Dart

**Videojuegos**
- Unity, C#, Unreal Engine, Blueprints

**VR / AR**
- Meta Quest Development, Lens Studio

**Backend / Base de datos**
- Supabase, MySQL, PostgreSQL

**Herramientas generales** *(implícitas, mostrar solo si el filtro las requiere)*
- Git, GitHub, VSCode

**Diseño** *(secundario — ver pendientes)*
- Illustrator, Photoshop, Figma, Maya, Blender

> Nota: hay tecnologías como VSCode, Git o GitHub que quedan implícitas en cualquier tarjeta de proyecto web/app y **no necesitan aparecer en las tech principales de la card**, pero sí pueden aparecer en el detalle expandido del proyecto.

---

## 4. Sección de Proyectos

### Nombre de la sección
Reemplazar `Trabajo seleccionado` por: **`Nuestros Archivos`**.

### Comportamiento
- Filtros y cards funcionan bien. ✅
- Por ahora solo datos base por proyecto. El detalle expandido por tarjeta se trabaja en una **iteración futura**.
- En cada card mostrar solo **tecnologías principales**; las secundarias o implícitas van en el detalle expandido.

> ⚠️ **Pendiente:** el enlace al **código fuente** de cada proyecto (botón "Ver código" dentro de las cards) **queda pendiente para una próxima iteración**. Aún no se pasaron los repositorios junto con esta lista. Por ahora se puede dejar el botón oculto, deshabilitado, o con un estado "próximamente", según lo que mejor encaje visualmente.

### Lista de proyectos

#### 1. Rompamos el Tabú
- **Categoría:** Desarrollo Web
- **Descripción:** Sitio web educativo enfocado en la concienciación y prevención de enfermedades de transmisión sexual (ETS) en jóvenes. Ofrece información accesible y recursos de apoyo a través de una plataforma orientada a la salud sexual.
- **Tecnologías principales:** Joomla, JavaScript
- **URL:** https://rompamoseltabu.com/
- **Código:** *pendiente*

#### 2. Space DEV
- **Categoría:** Desarrollo Web
- **Descripción:** Sitio web corporativo de Space DEV, diseñado para presentar la identidad del estudio, sus servicios y proyectos a través de una experiencia moderna y accesible, con una temática inspirada en el espacio y la creatividad tecnológica.
- **Tecnologías principales:** Astro, React, Tailwind CSS, TypeScript
- **URL:** https://spacedev.me
- **Código:** *pendiente*

#### 3. Trazando Pasos
- **Categoría:** Desarrollo de Videojuegos
- **Descripción:** Videojuego de realidad virtual que explora los desafíos y experiencias de la migración. Ganador del GameJam VRDay Latam 2022. Utiliza la inmersión de VR para reforzar el mensaje narrativo.
- **Tecnologías principales:** Unreal Engine
- **URL:** https://www.behance.net/gallery/166470549/Trazando-Pasos-(videojuego-VR)-(2023)
- **Código:** *pendiente*

#### 4. Plantain Feast
- **Categoría:** Desarrollo de Videojuegos
- **Descripción:** Videojuego móvil de cocina en 2D inspirado en la gastronomía ecuatoriana. Los jugadores preparan recetas tradicionales utilizando el plátano como ingrediente principal, promoviendo la cultura culinaria local.
- **Tecnologías principales:** Unreal Engine
- **URL:** https://www.behance.net/gallery/166078851/Plantain-Feast
- **Código:** *pendiente*

#### 5. Pets
- **Categoría:** Desarrollo de Aplicaciones Móviles
- **Descripción:** Aplicación móvil enfocada en el cuidado y seguimiento de mascotas. Permite gestionar calendarios de vacunación, recordatorios de alimentación, citas veterinarias y otros aspectos de la salud y bienestar animal.
- **Tecnologías principales:** Flutter, Supabase
- **URL:** No disponible *(proyecto en desarrollo)*
- **Código:** *pendiente*

#### 6. ALERTA!
- **Categoría:** Realidad Aumentada (AR)
- **Descripción:** Experiencia de realidad aumentada creada para la exposición *"ALERTA! Reflexiones gráficas en torno a la salud mental"*. Combina ilustración, animación y tecnología interactiva para enriquecer la experiencia artística y fomentar la reflexión sobre la salud mental.
- **Tecnologías principales:** Lens Studio, JavaScript
- **URL:** https://www.expreso.ec/guayaquil/arte-interactivo-busca-sensibilizar-enos-salud-mental-213527.html
- **Código:** *pendiente*

#### 7. Simulación de Soldadura VR
- **Categoría:** Realidad Virtual (VR)
- **Descripción:** Simulador de capacitación en realidad virtual para Meta Quest 2 que guía al usuario a través de las distintas etapas del proceso de soldadura. Diseñado como herramienta de entrenamiento práctico en entornos seguros e inmersivos.
- **Tecnologías principales:** Unity, C#, Meta Quest 2
- **URL:** Documentación privada / presentación del proyecto
- **Código:** *pendiente*

> Quedan más proyectos por agregar en próximas iteraciones.

---

## 5. Sección de Experiencia

- Mantener el diseño actual. ✅
- **Rango temporal:** inicia en **2022** (título universitario) y por ahora termina en **2026**.
- Las entradas intermedias se completan en una iteración futura. Por ahora dejar solo el inicio y la fecha final marcada hasta 2026.

---

## 6. Proceso de Trabajo

Sin cambios. ✅

---

## 7. Sección de Contacto ("Construyamos algo juntos")

Sin cambios. ✅

---

## 8. Footer

- Texto descriptivo (software, etc.): se mantiene. ✅
- Firma: reemplazar `Alex Enriquez Vera` por **`Alex DEV`**.
- Copyright: `Todos los derechos reservados a Alex DEV`.
- Logo: por ahora **`AE`** (provisional, se redefine después).
- Texto "Construido con": ajustar al stack real del proyecto. La versión actual menciona Astro y eso es incorrecto.
  - Stack real: **React, JavaScript, HTML, CSS**.
  - Versión sugerida (corta): `Construido con React, CSS y mucho café` *(o `React, JavaScript y mucho café`, elegir la que se sienta mejor)*.
  - **Mantener `…y mucho café`**, esa parte se queda sí o sí.
- Versión: **`v1.0.0`** (antes v2).

---

## 9. Pendientes para el README

Agregar al README del proyecto los siguientes puntos abiertos:

- **Integración con Supabase:** definir alcance (¿formulario de contacto?, ¿panel privado?, ¿gestión de proyectos?). Aún por discutir.
- **Sección de habilidades de diseño:** subsección con enlace a Behance, por definir ubicación dentro de la página.
- **Lista de proyectos:** ampliar con nuevos proyectos en próximas iteraciones.
- **Repositorios / código fuente de cada proyecto:** falta pasar los enlaces al código de cada proyecto para conectarlos con el botón "Ver código" en las cards.
- **Detalle expandido por proyecto:** vista ampliada al hacer click en una card, mostrando descripción larga, stack completo (incluyendo tecnologías implícitas como VSCode/Git), capturas y enlaces.
- **Constelación de stack:** revisar qué tecnologías desactivar/ocultar mientras no estén respaldadas por un proyecto. No eliminarlas del código.
- **Métricas del "Sobre Mí":** calcular y fijar `Proyectos completados` y `Tecnologías dominadas` cuando la lista esté cerrada.
- **Sección de experiencia:** ampliar con entradas entre 2022 y 2026.
- **Logo definitivo:** reemplazar provisional `AE` cuando esté listo el branding final.

---

## Resumen de cambios rápidos

| Elemento | Antes | Después |
|---|---|---|
| Nombre hero | Nombre completo | `ALEX DEV` |
| Rol hero | Software Developer • Game Developer • Creative Technologist | `Full Stack Developer` |
| Encabezado Sobre Mí | Construyo software con criterio y curiosidad | `Soy Alex DEV` |
| Años de experiencia | 6 | 5 |
| Sección de proyectos | Trabajo seleccionado | `Nuestros Archivos` |
| Firma footer | Alex Enriquez Vera | `Alex DEV` |
| Versión | v2 | `v1.0.0` |
| Stack en footer | Astro + React | `React, CSS` (o `React, JavaScript`) |
