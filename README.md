# FIRMA · BacillotaSporulationDB

Base de datos web de regulación transcripcional y rutas metabólicas de *Bacillus* y otros Firmicutes
(grupo de la Dra. Rosa Gutiérrez Ríos, IBt-UNAM). SPA en React + Vite con seis secciones:
Inicio · Redes · Rutas · Filogenia · Distribución · Tablas.

> Los datos actuales son ilustrativos (vienen del prototipo de diseño); se sustituirán por los datos reales del grupo.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
```

## Estructura

- `src/firma/logic.js` — lógica y datos (estado, filtros, motor de grafo, mapa de rutas, árbol, sunburst).
- `src/firma/View.jsx` — vista, generada desde la plantilla del prototipo.
- `src/firma/dc.jsx` — host React mínimo para la clase de lógica.
- `public/` — tipografía Paper Mono (OFL), logo y `Globo.html` (vista de Distribución).
- `design/` — prototipo original (`FIRMA.dc.html`) y su runtime, como referencia.
- `docs/` — handoff de diseño y notas del motor de grafos.

`npm run convert` regenera `View.jsx`, `logic.js` y `firma.css` a partir de `design/FIRMA.dc.html`
(sobrescribe esos tres archivos).

## Despliegue

Vercel detecta Vite automáticamente: build `npm run build`, salida `dist`.
