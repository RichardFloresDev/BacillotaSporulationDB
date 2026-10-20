# FIRMA · Motor de grafos

Notas de implementación para las vistas **Redes** y **Rutas**. El objetivo es dar las funciones que normalmente aporta Cytoscape.js (estilos de arista, recorte al borde, aristas paralelas, nodos compuestos) con código propio en SVG: es más ligero, más rápido y deja libre el control de la animación.

## 1. Modelo

- **Nodos**: `{ id, label, kind: 'tf' | 'gene' | 'metabolito', mod, x, y }`.
  - `x, y` es la posición objetivo (layout).
  - En Redes, `px, py` es la posición dibujada (animada).
- **Aristas**: `{ id, s, t, type: 'a' | 'r', ev: 'e' | 'p' | 'h', sig, cond }`. La geometría nunca se guarda: se recalcula en cada cuadro a partir de las posiciones de los nodos.
- **Rutas**: `MAP.N` define las posiciones fijas (equivalente a `preset` en Cytoscape) y `MAP.E` las reacciones (`pw`, índice del paso, `a → b`). La enzima de cada reacción se toma de `PW[pw].enz[i]`.

## 2. Estilos de arista — `edgePath(ax, ay, bx, by, opts)`

| `style` | Equivale en Cytoscape | Uso |
|---|---|---|
| `bezier` | `curve-style: bezier` | Red regulatoria (por defecto). Curva cuadrática con un punto de control desplazado sobre la normal: `off = L · curv`. |
| `straight` | `curve-style: straight` | Red, opción "Recta". |
| `taxi` | `curve-style: taxi` / `segments` | Red, opción "Ortogonal"; en Rutas, ramales, conectores y enlaces a otras rutas. |

**Opciones:**
- `ra`, `rb`: recortan la arista para que empiece y termine en el borde del nodo (o del rectángulo de enlace), no en su centro. Así la flecha queda pegada al contorno.
- `off`: desplazamiento perpendicular para separar aristas paralelas.
- `curv`: curvatura (0.12 por defecto).
- `dir: 'h' | 'v'`: fuerza la dirección del primer tramo ortogonal.
- `turn`: coordenada del quiebre.
- `radius`: radio de las esquinas redondeadas.

**Reglas del estilo `taxi`:**
- Si |dx| ≥ |dy|, recorre horizontal → vertical → horizontal; si no, al revés.
- Si los nodos están alineados, se convierte en recta.
- Las esquinas se redondean con `roundPoly` (una curva cuadrática por vértice, con radio limitado a la mitad del tramo más corto).

**Flechas:**
- Son `<marker orient="auto">` sobre `marker-end`; se orientan solas según la tangente del último tramo.
- Las reacciones reversibles usan además `marker-start` con `orient="auto-start-reverse"`.
- Activación: triángulo. Represión: barra (⊣).

**Grosor y tamaño constantes en pantalla (Redes):** radios, grosores y fuentes se multiplican por `zs = 1 / min(1, k)`, donde `k` es el zoom. Al alejar no se vuelven ilegibles.

## 3. Aristas paralelas

- Se cuentan las aristas por par no ordenado: `pairN["A|B"]`.
- **bezier**: las aristas A→B y B→A se separan solas, porque la normal se invierte con el sentido.
- **straight**: con más de una arista en el par, se convierte en bezier suave (`curv 0.1`).
- **taxi**: con más de una arista en el par, el quiebre se desplaza ±7 px según el sentido.

Caso real en los datos: la regulación mutua TnrA ⊣ GlnR y GlnR ⊣ TnrA.

## 4. Agrupación (nubes difusas)

Los grupos no se dibujan con contornos. Se usa una "nube":
- un círculo grande por miembro, en el color del grupo (reguladores con r = 52, genes con r = 38);
- encima, un `feGaussianBlur` (σ ≈ 20) aplicado al grupo entero;
- la opacidad va en el `<g>`, así los círculos se funden en una sola mancha suave que sigue a los nodos cuando flotan o se arrastran.

El título va encima del miembro más alto.

**Redes**
- Una nube por módulo: carbono = acento, nitrógeno = violeta, esporulación = ámbar.
- Los miembros salen de `modOf`: los reguladores del módulo y los genes regulados exclusivamente por él.
- `separateModules` mantiene los grupos separados.
- Interacción: hover intensifica; clic selecciona los reguladores.

**Rutas**
- Una nube por ruta (`MAP.OWN`).
- La ruta activa tiene más opacidad; el clic la selecciona, excepto después de arrastrar.

## 4b. Flujo animado

Sobre las aristas activas (selección o hover en Redes; paso seleccionado o regulador enfocado en Rutas) corren partículas con `<animateMotion path=d>`. Se desfasan con `begin` negativo y su color es el del tipo de regulación.

## 4c. Regulación dual y simultánea

- **Tipo `d` (dual):** el mismo regulador activa o reprime el mismo blanco según la condición.
  - Color `--dual` (ámbar).
  - Marcador `mDual` (punta más barra).
  - Símbolo ±.
- **Filtro "Solo regulación simultánea":** conserva solo los genes que reciben a la vez una señal positiva y una negativa, ya sea de reguladores distintos (lazos incoherentes) o de una arista dual.

## 5. Rutas: casos especiales

- **Ciclo de Krebs**: las reacciones siguen el círculo con arcos SVG (`A r,r 0 0 1`), no cuerdas. La caja del EC se coloca en el ángulo medio del arco.
- **Enlaces a otras rutas**: rectángulo redondeado con flecha punteada y punta abierta. Abre el mapa correspondiente en KEGG.
- **Estado de cada enzima en el organismo activo:**
  - con ortólogo: relleno de acento;
  - sin ortólogo: borde punteado;
  - debajo, una franja por regulador (verde = activa, rojo = reprime).

## 6. Interacción

- **Desplazamiento y zoom**: transformación en un `<g>` (`translate(tx,ty) scale(k)`). La rueda hace zoom en torno al cursor.
- **Encuadre (fit)**: bounding box de los nodos más margen; zoom limitado para que el texto siga legible.
- **Selección**: clic, Shift + clic para varios, Esc para limpiar. Al seleccionar algo se atenúa lo que no está conectado.
- **Movimiento en Redes**: interpolación amortiguada sin velocidad, sin rebote. Cada nodo se acerca a su objetivo con factor 0.05–0.075 por cuadro, más un vaivén senoidal de ±1.1 px. Al arrastrar, los vecinos siguen el 6 % del desplazamiento.
- **Movimiento reducido**: si el sistema tiene activado `prefers-reduced-motion`, se desactiva el vaivén.

## 7. Rendimiento

- Solo hay un ciclo `requestAnimationFrame`, y solo vuelve a dibujar mientras algo se mueve (energía > 0.03).
- Para redes de más de unos 2 000 nodos, se recomienda:
  - pasar el dibujo de aristas a `<canvas>` y dejar en SVG solo los nodos y las etiquetas;
  - dividir el espacio en una cuadrícula para detectar clics y colisiones;
  - calcular el layout en un Web Worker.
