# Imágenes del portafolio

Estas imágenes se sirven desde `public/`, así que se referencian por **URL absoluta**
empezando en `/images/...` (NO con import). Ejemplo en `src/data/projects.js`:

```js
image: '/images/projects/web/club-exploradores/cover.webp'
```

## Convención de nombres

Cada proyecto tiene **su propia carpeta** dentro de su **categoría principal**
(`cats[0]` en `src/data/projects.js`): `web`, `apps`, `games`, `xr`.
La carpeta lleva el `id` del proyecto y dentro van:

```
public/images/projects/<cat>/<id>/
├── cover.webp     → imagen de la card (campo image)
├── 1.webp         → galería 1 (campo gallery)
├── 2.webp         → galería 2
└── 3.webp         → galería 3
```

Ejemplo (Trazando Pasos):
```
games/trazando-pasos/cover.webp
games/trazando-pasos/1.webp
games/trazando-pasos/2.webp
games/trazando-pasos/3.webp
```

> Un proyecto con varias categorías va en la carpeta de su categoría **principal**
> (`cats[0]`). Ej.: *Alfarería y Metalurgia AR* (cats: games + xr) → `games/…`.

Las rutas ya están cableadas en `projects.js` (`image` y `gallery`). En cuanto
coloques el archivo en su carpeta, card/galería lo muestran; mientras no exista,
cae al placeholder.

## Tamaños recomendados (exportar en 2x para retina)

| Uso                     | Proporción | Tamaño export | Display real |
|-------------------------|-----------|---------------|--------------|
| Card de proyecto        | 16:9      | **1200×675**  | ~544×306     |
| Hero del modal          | 16:8 (2:1)| **1600×800**  | ~720×360     |
| Foto "Sobre mí"         | 4:5       | **800×1000**  | ~360×450     |
| Galería de caso (modal) | 4:3       | **1200×900**  | ~380×285     |

## Formato y peso

- **Formato:** `.webp` (mejor compresión que JPG/PNG, soporte universal hoy).
- **Peso objetivo:** < 200 KB por imagen de card. Comprime con
  [squoosh.app](https://squoosh.app) (calidad WebP ~80) antes de importar.
- Evita PNG salvo que necesites transparencia.
