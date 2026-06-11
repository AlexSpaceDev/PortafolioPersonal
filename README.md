# Portafolio Personal — Alex Enriquez Vera

Portafolio personal de **Alex Enriquez Vera (SPACE DEV)**: Software Developer · Game Developer · Creative Technologist.

Sitio de una sola página con un concepto visual **"Cosmos + Código"**: hero 3D, constelaciones de stack interactivas, proyectos filtrables y soporte bilingüe (ES/EN).

## Stack

Sitio **estático puro**, sin paso de build. El JSX se transpila directamente en el navegador con Babel standalone.

- **HTML + CSS** plano (`index.html`, `css/styles.css`)
- **React 18** (UMD, vía CDN)
- **Babel Standalone** — transpila los `.jsx` en el navegador
- **Three.js** — fondo / hero 3D
- Datos e i18n en `js/data.js`

> No hay `package.json` ni `npm install`: todas las dependencias se cargan por CDN.

## Ejecutar en local

Como los archivos `.jsx` se cargan vía `src=`, **no funciona** abrir `index.html` con doble clic (el navegador lo bloquea por CORS con `file://`). Necesitas un servidor estático:

```bash
# Opción 1 — Python
python -m http.server 8000

# Opción 2 — Node
npx serve
```

Luego abre **http://localhost:8000** (o el puerto que indique `serve`).

En VS Code también puedes usar la extensión **Live Server** (click derecho en `index.html` → *Open with Live Server*).

## Estructura

```
portafolio/
├── index.html              # Punto de entrada, carga scripts y estilos
├── css/
│   └── styles.css          # Estilos globales
├── js/
│   ├── data.js             # Contenido + i18n (ES/EN)
│   ├── app.jsx             # Raíz de la app React
│   ├── hero3d.jsx          # Hero / fondo 3D (Three.js)
│   ├── constellation.jsx   # Constelaciones de stack interactivas
│   ├── sections.jsx        # Secciones del portafolio
│   ├── ui.jsx              # Componentes de UI reutilizables
│   ├── contact-footer.jsx  # Contacto y pie de página
│   └── tweaks-panel.jsx    # Panel de ajustes en vivo
└── docs/
    └── portafolio-diseno-v2.md  # Notas de diseño
```

## Autor

**Alex Enriquez Vera** — SPACE DEV
