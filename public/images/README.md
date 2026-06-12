# Imágenes del portafolio

Estas imágenes se sirven desde `public/`, así que se referencian por **URL absoluta**
empezando en `/images/...` (NO con import). Ejemplo en `src/data/projects.js`:

```js
image: '/images/projects/club-exploradores.webp'
```

## Convención de nombres

Las imágenes de proyectos se organizan en subcarpetas por **categoría principal**
(`cats[0]` en `src/data/projects.js`): `web`, `apps`, `games`, `xr`.
El archivo usa el mismo `id` del proyecto:

```
public/images/projects/<cat>/<id>.webp
```

Ejemplos:
- `web/club-exploradores.webp`
- `games/alfareria-metalurgia-ar.webp`  (cats: games + xr → va en games, su categoría principal)
- `xr/soldadura-vr.webp`

La ruta ya está cableada en `projects.js` (campo `image`). En cuanto coloques el
archivo en su carpeta, la card lo muestra; mientras no exista, cae al placeholder.

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
