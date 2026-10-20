# Handoff: FIRMA — Base de datos de regulación transcripcional y rutas metabólicas de Firmicutes

## Overview
FIRMA es una base de datos web para el grupo de la Dra. Rosa Gutiérrez Ríos (IBt, UNAM) sobre redes de regulación transcripcional y rutas metabólicas de *Bacillus* y otros Firmicutes. Es una SPA con seis secciones (Inicio · Redes · Rutas · Filogenia · Distribución · Tablas) más un menú hamburguesa (Descargas, Acerca). Uso: investigación seria; densidad de información alta, estética sobria.

## About the Design Files
Los archivos de este paquete son **referencias de diseño hechas en HTML**: prototipos que muestran el aspecto y el comportamiento esperados, no código de producción. La tarea es **recrear estos diseños en el entorno del codebase** (o, si no existe, elegir el stack más adecuado; recomendado: React + TypeScript + Vite, con D3 solo para utilidades geométricas/proyección y un motor de grafo propio en SVG/Canvas) usando sus patrones y librerías.

`FIRMA.dc.html` es un "Design Component": HTML con un template y una clase de lógica (`class Component extends DCLogic`) que funciona como un componente de clase de React (`state`, `setState`, `renderVals()` devuelve los valores del template). Ábrelo en el navegador junto a `support.js` para verlo funcionando. Toda la lógica (datos de ejemplo, filtros, motor de grafo, mapa de rutas, árbol, sunburst) está en el bloque `<script data-dc-script>` al final del archivo: léelo como especificación de comportamiento.

## Fidelity
**Alta fidelidad (hi-fi).** Colores, tipografía, espaciados e interacciones son finales. Recrear con precisión.
**Los datos son ilustrativos.** Todos los reguladores, interacciones, pasos de ruta, ortólogos, conteos de genomas y sitios de aislamiento son de ejemplo; el grupo entregará los datos reales. Diseñar la capa de datos para volumen masivo (miles de interacciones, decenas de módulos, cientos de rutas, cientos de genomas): paginación/virtualización en tablas, carga por especie, búsqueda indexada en servidor.

## Principios globales
- Tipografía única: **Paper Mono** (variable, pesos 100–800), `fonts/PaperMono-VF.woff2`, licencia OFL. Fallback `ui-monospace, monospace`.
- Nomenclatura: especies, genes y operones en *itálica* (*ccpA*, *alsSD*, *B. subtilis*); proteínas con mayúscula inicial y sin itálica (CcpA, CodY); metabolitos con nombre completo (Glucosa-6-fosfato, 1,3-bisfosfoglicerato).
- Modo claro y oscuro: `:root[data-theme=dark]`. Toggle en la barra superior, persistido.
- Selector de especie global en la barra superior: recalcula todas las vistas. *B. subtilis* 168 = red curada; otras especies = red inferida por homología (aristas punteadas, nota "inferida por homología").
- Navegación cruzada: buscador → gen/regulador/ruta; regulador en Rutas → abre en Redes; nodo en Redes → rutas donde participa; fila de tabla → detalle. El estado de cada sección persiste al navegar.

## Screens / Views

### 1. Inicio (landing)
Portada de pantalla completa, fondo blanco con difuminado azul muy leve.
- **Fondo**: `--hero` (ver tokens): dos radial-gradients de `--acc` a baja opacidad (11 % arriba-derecha en 80%/32%, 6 % abajo-izquierda) sobre `--bg`.
- **Red decorativa de fondo** (canvas, `aria-hidden`, `pointer-events:none`, no interactiva): 7 reguladores con 8–16 genes cada uno, dispuestos en ~95 % del ancho, desvanecida hacia la izquierda con `mask-image: linear-gradient(90deg, transparent 15%, #000 60%)`. Color `rgb(var(--heroNet))` (claro `16,35,240`, oscuro `127,139,255`). Aristas al 13–20 % de opacidad, nodos al 28–50 %, halo de reguladores con pulso muy leve (±2 px, 0.5 rad/s), partículas lentas (1.5–2.4 px) que aparecen y desaparecen a lo largo de cada arista, deriva global de ±10 px muy lenta. Layout calculado una vez (determinista con semilla) y **no se recalcula al cambiar de especie**. Debe ser un detalle, nunca llamativo.
- **Contenido** (max-width 1240 px, padding 72px 32px 48px; columna de texto max 720 px):
  - H1 52 px / 600 / line-height 1.06 / letter-spacing −0.025em: "Redes de regulación transcripcional y rutas metabólicas de *Bacillus* y otros Firmicutes".
  - Buscador: alto 62 px, radio 12 px, borde 1.5 px `--heroSearchBd`, fondo `--heroSearch`, sombra `0 10px 30px rgba(16,35,240,.08)`, icono ⌕, input 16 px, placeholder "Busca un gen, regulador, operón, ruta o especie". Autocompletado desplegable (↑↓ navegar · ↵ abrir · esc cerrar). Sin indicador "/" (no hay comandos).
  - Ejemplos: pastillas (radio 999, padding 5×11, fondo `--heroTile`, borde `--heroLine`, hover fondo `--accSoft` color `--acc`).
- **Conteos** (abajo, grid de 5 columnas iguales, borde superior `--heroLine`, separadores verticales): número 34 px / 600 tabular-nums + etiqueta en `--heroMute`. Reguladores · Genes blanco · Interacciones · Rutas · Genomas. Cada uno navega a su sección.
- **Nota de homología**: espacio reservado fijo (min-height 64 px, `visibility` toggle) para que la portada no cambie de altura al cambiar de especie.
- **Pie** dentro de la portada: "Instituto de Biotecnología, UNAM · Cuernavaca, Morelos" / "Cómo citar · Contacto" (→ Acerca).
- Decisión explícita: **no** listar módulos ni rutas en Inicio (no escala con una DB masiva); se accede vía buscador, conteos y pestañas.

### 2. Redes
Tres columnas: panel izquierdo de filtros · lienzo · panel derecho de detalle.
- Panel izquierdo: módulos (nombre + conteo alineado a la derecha, tabular-nums, min-width 3ch) con sus reguladores debajo (mismo alineado); filtros por tipo de interacción (activación, represión, dual), evidencia, factor σ.
- Lienzo: motor de grafo propio (ver `docs/Motor de grafos.md`): estilos de línea curva ⌒ / recta ╱ / ortogonal ⌐; separación de aristas paralelas; partículas de flujo; regulación dual (±); física suave (al soltar un nodo regresa a su sitio con deriva por peso); zoom/pan.
- Módulos como halos difusos de color detrás de sus nodos (blur gaussiano). El halo envuelve solo los nodos presentes en la especie activa; si un módulo no tiene nodos en la especie, no se dibuja.
- Aristas inferidas por homología: punteadas.
- Panel derecho: detalle del nodo (tipo, módulo, regulados/reguladores, rutas donde participa, enlaces).
- Pendiente: algoritmo de separación de etiquetas en zonas densas a bajo zoom.

### 3. Rutas
Mapa metabólico de 4 rutas (glucólisis, ciclo de Krebs, acetato, acetoína). Vista lista o mapa completo. Cajas de enzima por paso, reguladores debajo de cada paso, metabolitos con nombre completo, enlaces a KEGG/MetaCyc. Click en paso o regulador → detalle; regulador → abrir en Redes.

### 4. Filogenia
Pestañas: Árbol (árbol + matriz de conservación módulo × especie) y Taxonomía (sunburst clase → orden → familia → género → especie, hover/click por rango).

### 5. Distribución
Globo interactivo (rotar, zoom, pausar) con sitios de aislamiento (`Globo.html`, requiere internet para el mapa mundial) + tabla a un lado con orden, filtro y exportación.

### 6. Tablas
Cuatro tablas: Interacciones, Reguladores, Enzimas de rutas, Conservación. Búsqueda, filtros por columna, orden, multiselección, copiar, exportar TSV, fila → navegación al detalle. En producción: virtualización y paginación en servidor.

### Menú: Descargas, Acerca
Descargas de conjuntos de datos (TSV). Acerca: descripción del proyecto, cómo citar, contacto (sin publicaciones/tesis).

## State Management
- Global: `page`, `org` (especie activa), `theme`, estado del buscador (`hq`, resultados, índice).
- Redes: filtros, módulo activo, nodo seleccionado, estilo de línea, viewport (zoom/pan), posiciones de nodos.
- Rutas: vista (lista/mapa), paso/regulador seleccionado, viewport.
- Filogenia: pestaña, selección de especie/módulo.
- Tablas: tabla activa, filtros, orden, selección.
- Todo persiste al cambiar de sección. Datos: por especie (curados para *B. subtilis* 168; inferidos por ortología para el resto).

## Design Tokens
Claro / oscuro:
- `--bg` #FFFFFF / #0B0D18 · `--bg2` #FAFAFC / #080A13 · `--soft` #F4F5F8 / #151829
- `--line` #E2E4EC / #23273C · `--line2` #C5C9D6 / #363B56
- `--ink` #0B0F2A / #E6E8F2 · `--ink2` #3A4058 / #C3C7D8 · `--mute` #5A6075 / #9095AE
- `--acc` (azul de marca) #1023F0 / #7F8BFF · `--accSoft` #EEF0FF / #1A1F45 · `--onAcc` #FFFFFF / #0B0D18
- `--act` activación #0E8A5F / #3DC48F · `--actSoft` #E6F4EE / #11302A
- `--rep` represión #D6402B / #FF6E5A · `--repSoft` #FDECEA / #3A1C18
- `--dual` #9A5B00 / #F0B45C · `--dualSoft` #FBF0E0 / #3A2A12
- Módulos: carbono `--acc`, nitrógeno `--t2` #7A3FD6 / #B392FF, esporulación `--t3` #B5651D / #E8A15C
- `--shadow` rgba(11,15,42,.12) / rgba(0,0,0,.55)
- Portada: `--hero`, `--heroLine` (= line), `--heroMute` (= mute), `--heroTile` (= soft), `--heroSearch`, `--heroSearchBd` #0B0F2A / #C3C7D8, `--heroNet` "16,35,240" / "127,139,255"
- Radios: 4, 6, 8, 10, 12, 14, 999 px. Espaciado base múltiplos de 4 (8, 12, 16, 20, 24, 32).
- Tipografía: 11 (meta), 12, 13, 14 (base), 16, 19, 24 (títulos de sección), 34 (conteos), 52 (H1). Pesos 400 / 600 / 700.

## Assets
- `fonts/PaperMono-VF.woff2` (+ `fonts/OFL.txt`): repo paper-design/paper-mono.
- `assets/logo.jpg`: logo del proyecto (en modo oscuro va sobre fondo blanco; `--logoBg`, `--logoBlend`).
- Mapa mundial del globo: se carga de internet en `Globo.html`.

## Files
- `FIRMA.dc.html`: app completa (template + lógica + datos de ejemplo). Fuente de verdad.
- `support.js`: runtime para abrir el `.dc.html` en el navegador (solo para ver el prototipo).
- `Globo.html`: componente del globo de Distribución.
- `docs/Motor de grafos.md`: documentación del motor de grafo (layout, estilos de arista, partículas, física, contenedores).
