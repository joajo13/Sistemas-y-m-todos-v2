# Design — App de estudio: Administración de Proyectos I (Unidad 8.1)

**Fecha**: 2026-05-13
**Materia**: Sistemas y Métodos — Universidad de Palermo
**Unidad**: 8.1 — Fundamentos de la Administración de Proyectos (parte 1)
**Tipo**: Spec de diseño (pre-implementación)

---

## 1. Contexto y objetivo

Una app web estática de estudio que consume el contenido de **tres apuntes oficiales** de la Unidad 8.1 y lo expone en cuatro modos: lectura interactiva con definiciones "en criollo", visor de los PDFs originales, evaluaciones (verdadero/falso + multiple choice) y flashcards.

**Restricción fundamental**: el contenido sale **exclusivamente** de los 3 PDFs. Nada inventado de afuera. Las versiones "en criollo" son re-explicaciones informales del mismo concepto.

**Fuentes**:
- `0177_APU_FundamentosDeLaAdministraciónDeProyectos1_261Q_V1-0.pdf` (texto completo, 7 páginas) — grueso del contenido.
- `0177_APU_LaAdministraciónDeProyectos1_261Q_V1-0.pdf` (1 página) — 5 consideraciones generales sobre proyectos de sistemas.
- `0177_APU_PresentaciónLaAdministraciónDeProyectos1_261Q_V1-0(1).pdf` (19 slides) — versión presentación con diagramas. Único concepto nuevo: **OBS** (Organization Breakdown Structure).

**Objetivo del producto**: facilitar el estudio de la unidad. La app no es generalista, no escala a otras unidades, no busca convertirse en una plataforma. Es una herramienta de un solo uso.

---

## 2. Stack técnico

| Capa | Decisión |
|------|----------|
| Markup | HTML estático (sin SSG, sin templating) |
| Estilos | **Tailwind CSS por CDN** (`https://cdn.tailwindcss.com`) + un `css/extra.css` chico para tokens y overrides |
| Lógica | **JavaScript vanilla** (módulos ES nativos, `<script type="module">`) |
| Visor PDF | **PDF.js** por CDN (`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/...`) |
| Persistencia | `localStorage` |
| Build | **Ninguno**. Cero `npm`, cero TypeScript, cero bundler |
| Deploy | **GitHub Pages**, repo público |

**Justificación**: este es un proyecto de estudio de una sola unidad. Cualquier toolchain moderno (Vite, Next, etc.) es sobreingeniería. Vanilla + CDN es lo más simple que puede funcionar bien, anda en mobile sin drama y se publica con un `git push`.

---

## 3. Estructura de archivos

```
sistemas-y-metodos-p2/
├── index.html                  # Home — listado de las 7 secciones
├── seccion.html                # Apunte interactivo de una sección
├── pdfs.html                   # Visor de los 3 PDFs originales
├── quiz.html                   # Evaluación V/F + MC de una sección
├── flashcards.html             # Flashcards de una sección
├── css/
│   └── extra.css               # Tokens (CSS vars) + overrides Notion-like
├── js/
│   ├── content.js              # Data: las 7 secciones (export const SECTIONS)
│   ├── storage.js              # Wrapper de localStorage
│   ├── nav.js                  # Renderiza top nav compartido
│   ├── home.js                 # Lógica de index.html
│   ├── seccion.js              # Lógica de seccion.html
│   ├── pdfs.js                 # Lógica del visor (PDF.js)
│   ├── quiz.js                 # Lógica de quiz.html
│   └── flashcards.js           # Lógica de flashcards.html
├── images/
│   └── diagrams/               # 8 imágenes extraídas del PDF Presentación
│       ├── embudo-fuentes.png
│       ├── proceso-fuentes.png
│       ├── ciclo-de-vida.png
│       ├── pm-wheel.png
│       ├── smart-cards.png
│       ├── esfuerzo-duracion-1.png
│       ├── esfuerzo-duracion-2.png
│       └── project-charter-illustration.jpg
├── pdfs/                       # Los 3 PDFs originales servidos
│   ├── fundamentos.pdf
│   ├── consideraciones.pdf
│   └── presentacion.pdf
├── docs/
│   └── specs/
│       └── 2026-05-13-study-app-admin-proyectos-design.md   # este doc
└── README.md
```

**Navegación entre vistas**: query string. La sección activa se pasa como `?id=N` donde `N` es el id de la sección.
- `seccion.html?id=3` → vista de la sección 3.
- `quiz.html?id=3` → quiz de la sección 3.
- `flashcards.html?id=3` → flashcards de la sección 3.
- `pdfs.html?doc=fundamentos` → visor abierto en el PDF correspondiente.

**Compartido entre vistas**: cada HTML carga `tailwindcss` (CDN), `css/extra.css`, `js/nav.js` y su `js/<vista>.js` correspondiente.

---

## 4. Modelo de contenido

Una sola fuente de verdad: `js/content.js` exporta `SECTIONS`, un array de objetos. Tipado conceptual (no hay TS, son objetos JS):

```js
// Tipos conceptuales (documentación, no enforced)
//
// type ContentBlock =
//   | { type: "h3"; text: string; criollo?: string }
//   | { type: "p"; text: string }
//   | { type: "ul"; items: string[] }
//   | { type: "ol"; items: string[] }
//   | { type: "callout"; tone: "info" | "warning"; text: string }
//   | { type: "figure"; src: string; alt: string; caption: string }
//
// type TFQuestion = { id: string; q: string; a: boolean; explain: string }
// type MCQuestion = { id: string; q: string; options: string[]; correctIndex: number; explain: string }
// type Flashcard  = { id: string; front: string; back: string }
//
// type Section = {
//   id: string;            // "1", "2", ..., "7"
//   title: string;         // título de la sección
//   criollo: string;       // explicación informal del título
//   blocks: ContentBlock[];
//   quiz: { tf: TFQuestion[]; mc: MCQuestion[] };
//   flashcards: Flashcard[];
// }

export const SECTIONS = [ /* 7 objetos Section */ ];
```

### Cantidad mínima por sección

- **3-5 preguntas V/F** (con explicación de la respuesta correcta).
- **3-5 preguntas multiple choice** (4 opciones, una correcta, con explicación).
- **5-8 flashcards** (concepto al frente, definición al dorso).
- **Criollo del título de la sección**: callout principal arriba (obligatorio en las 7 secciones).
- **Criollo a nivel sub-tema**: si la sección tiene `h3`, cada `h3` lleva su propio criollo colapsable (campo opcional `criollo` en el bloque `h3`). Si la sección es plana (sin `h3`, como las §6 "Desafíos" y §7 "Consideraciones"), el criollo se inserta como bloque `callout` con `tone: "info"` después del bullet o párrafo correspondiente, no como h3 criollo.

### Las 7 secciones

| id | Título | Fuente primaria |
|----|--------|-----------------|
| 1 | ¿Qué es un proyecto y por qué necesita gestión? | PDF1 §1 |
| 2 | El nacimiento de un proyecto (fase conceptual) | PDF1 §2 + PDF3 p.4, p.9 |
| 3 | Ciclo de vida y áreas de conocimiento PMBOK | PDF1 §3 + PDF3 p.10, p.11 |
| 4 | Fundamentos de la planificación (SMART + esfuerzo/duración/calendario) | PDF1 §4 + PDF3 p.7, p.8, p.15 |
| 5 | Herramientas esenciales (Charter, WBS, OBS, Gantt, Plan, Riesgos, Cambios) | PDF1 §5 + PDF3 p.17, p.18 |
| 6 | Desafíos comunes en la gestión de proyectos | PDF1 §6 + PDF3 p.5 |
| 7 | Consideraciones generales para proyectos de sistemas | PDF2 (5 puntos) |

**Nota sobre OBS**: aparece solo en la lista de herramientas del PDF3 slide 17 sin explicación. En la sección 5 se incluye con una breve mención y se aclara que el apunte no la desarrolla en detalle.

---

## 5. Vistas

### 5.1 Home (`index.html`)

**Propósito**: punto de entrada. Lista las 7 secciones y muestra estado de progreso.

**Layout**:
- Top nav fijo: título "Admin de Proyectos I" (link a home) + botón "Ver PDFs" (link a `pdfs.html`).
- Encabezado: H1 + subtítulo "Sistemas y Métodos — Unidad 8.1".
- Grid de 7 cards de sección.

**Card de sección**:
- Número grande (1, 2, ...) arriba a la izquierda.
- Título de la sección.
- Subtítulo "en criollo" (la versión informal de la definición del título).
- 3 mini-indicadores horizontales:
  - "Leída" (✓ si `state.sections[id].read === true`).
  - "Último quiz: X/Y" (si existe `state.sections[id].lastQuizScore`).
  - "Flashcards: X de Y sabidas" (siempre presente, default 0/total).
- Click en card → `seccion.html?id=N`.

**Responsive**:
- mobile (`<md`): `grid-cols-1`, cards full-width apilados.
- tablet (`md:` ≥768px): `grid-cols-2`.
- desktop (`lg:` ≥1024px): `grid-cols-3`.

### 5.2 Sección (`seccion.html`)

**Propósito**: leer el apunte de una sección con definiciones "en criollo" intercaladas e imágenes integradas.

**Lectura del id**: `new URLSearchParams(location.search).get('id')`. Si falta o es inválido → redirige a home.

**Layout**:
- Top nav (igual que home) + breadcrumb "← Volver al índice".
- Header: número de sección + título.
- **Callout principal "En criollo"** justo después del título (caja amarillo pálido `--criollo-bg` con borde lateral izquierdo grueso `--criollo-border`).
- Contenido renderizado desde `blocks[]`:
  - `h3` → `<h3>` con su mini-callout "en criollo" colapsable abajo (botón "En criollo ▾" que toggle muestra/oculta la explicación).
  - `p` → `<p>` con `max-width: 65ch`.
  - `ul`/`ol` → listas con spacing generoso.
  - `callout` → caja diferenciada por tone (info: celeste pálido / warning: rojo pálido).
  - `figure` → `<figure>` con `<img loading="lazy">` + `<figcaption>`. Click en la imagen abre lightbox modal (ver §7).
- Botones de nav entre secciones (← Sección N-1 / Sección N+1 →) al final del contenido. Anterior/Siguiente deshabilitados en los extremos.
- **Bottom bar sticky en mobile** con dos botones grandes lado a lado:
  - "Hacer quiz" → `quiz.html?id=N`
  - "Repasar flashcards" → `flashcards.html?id=N`
- En desktop la bottom bar se convierte en barra inline al final del contenido, no sticky.

**Side effect on load**: al renderizar la vista, marcar la sección como leída en `localStorage` (`storage.markRead(id)`).

### 5.3 Visor de PDFs (`pdfs.html`)

**Propósito**: leer los 3 PDFs originales sin salir de la app.

**Selección de PDF**: query string `?doc=fundamentos|consideraciones|presentacion`. Default: `fundamentos`.

**Layout mobile**:
- Top nav.
- Tabs horizontales scrolleables (overflow-x:auto) con los 3 docs. El activo está marcado.
- Botón "Abrir PDF original" arriba a la derecha (link directo al archivo PDF, abre en visor nativo del browser si el user prefiere).
- Área principal: canvas/contenedor de PDF.js. Una página visible a la vez.
- Bottom bar fija con controles grandes: `◀` página anterior, "Página X / Y", `▶` siguiente, `−` zoom out, `+` zoom in.

**Layout desktop (`md:`)**:
- Sidebar izquierda fija con los 3 tabs apilados verticalmente.
- Controles del visor arriba del canvas (no bottom bar).
- Canvas centrado, max-width responsive.

**PDF.js setup**: cargar desde CDN, configurar `workerSrc` al worker del CDN, renderizar página actual a canvas, manejar resize.

**Fallback**: si PDF.js falla a cargar, mostrar mensaje + link a "Abrir PDF original".

### 5.4 Quiz (`quiz.html`)

**Propósito**: evaluación de una sección. Mezcla V/F + multiple choice.

**Comportamiento**:
- Al cargar: tomar `id` del query string, leer `SECTIONS[id].quiz`. Combinar `tf[]` y `mc[]` en un solo array, **NO shuffleado** (orden estable para reproducibilidad).
- Pantalla 1..N: una pregunta a la vez.
  - Header: "Pregunta N de Total" + barra de progreso.
  - Enunciado.
  - Opciones como botones grandes apilados (V/F: dos botones "Verdadero" / "Falso"; MC: 4 botones).
  - Click → marca elegida con verde (correcta) o rojo (incorrecta) + muestra el botón "correcto" verde si elegiste mal + muestra `explain` debajo + se habilita botón "Siguiente".
  - Una vez elegida una opción, las demás se deshabilitan (no se permite cambiar).
- Pantalla final: resumen.
  - Score: "X correctas de Y" + porcentaje.
  - Lista de preguntas erradas con la respuesta correcta y la explicación.
  - Botones: "Reintentar quiz", "Ver flashcards", "Volver a la sección".
- Al terminar: guardar último score en `localStorage` (`storage.saveQuizScore(id, { correct, total, at })`).

**Mobile**:
- Opciones full-width, ≥48px de alto.
- Botón "Siguiente" sticky bottom, full-width.

### 5.5 Flashcards (`flashcards.html`)

**Propósito**: repaso por flashcards de una sección.

**Comportamiento**:
- Al cargar: tomar `id`, leer `SECTIONS[id].flashcards[]`. Inicializar una cola con todos los IDs.
- Mostrar la primera tarjeta:
  - Front: concepto.
  - Click en la tarjeta o tecla espacio → flip animado a back: definición.
- Dos botones grandes abajo:
  - **"La sabía"** ✓ — marca la flashcard como conocida en `localStorage` (`storage.markFlashcard(sectionId, fcId, true)`) y la saca de la cola. Avanza a la siguiente.
  - **"Repasar"** ↻ — la manda al final de la cola (NO la marca como conocida). Avanza a la siguiente.
- **No es SRS**: la cola es simple, "repasar" solo reordena dentro de la sesión actual. Recargar la página resetea la cola.
- Al vaciarse la cola: pantalla de resumen.
  - "X de Y marcadas como sabidas en esta sesión".
  - Botones: "Reiniciar", "Hacer quiz", "Volver a la sección".

**Mobile**:
- Tarjeta `min-height: 55vh`, centrada con padding generoso.
- Botones full-width lado a lado (`grid-cols-2`), sticky bottom, ≥56px de alto para pulgar.

**Out of scope (registrado para no hacer)**: swipe gestures, SRS, animaciones complejas.

---

## 6. Persistencia (`localStorage`)

**Storage key**: `study-app-state` (single key, single JSON blob).

**Schema**:

```js
{
  sections: {
    "1": {
      read: true,
      lastQuizScore: { correct: 6, total: 8, at: "2026-05-13T14:30:00.000Z" },
      knownFlashcards: ["fc-1-1", "fc-1-3", "fc-1-5"]
    },
    "2": { ... },
    ...
  }
}
```

**API expuesta por `js/storage.js`**:
- `getState()` → objeto completo. Devuelve estructura default si no existe.
- `setState(patch)` → merge superficial y persiste.
- `markRead(sectionId)`
- `saveQuizScore(sectionId, { correct, total })` → fecha agregada automáticamente.
- `markFlashcard(sectionId, fcId, known)` → toggle.
- `getSectionState(sectionId)` → atajo.

**Migration / versioning**: no hay. Si el schema cambia en el futuro, el primer load detecta keys faltantes y cae al default. Para una app de estudio personal, esto es más que suficiente.

**Lo que NO se guarda**:
- Tiempo de lectura, intentos previos de quiz (solo el último score), historial, analytics.
- Preferencias UI (no hay dark mode ni nada que personalizar).

---

## 7. Imágenes y diagramas

**Fuente**: las 8 imágenes vienen extraídas del PDF presentación con PyMuPDF y se commitean al repo en `images/diagrams/` (PNGs y JPGs).

**Extracción**: se hace una vez durante implementación con el script `scripts/extract-pdf-images.py` (o equivalente). Quedan en el repo como assets estáticos.

### Mapeo imagen → sección

| Archivo (`images/diagrams/...`) | Página fuente | Sección donde va |
|---------------------------------|---------------|------------------|
| `embudo-fuentes.png` | PDF3 p.4 | §2 Nacimiento — ilustra fuentes → business case → factibilidad → aprobado |
| `proceso-fuentes.png` | PDF3 p.9 | §2 Nacimiento — flecha-proceso ideas → estudio de factibilidad |
| `ciclo-de-vida.png` | PDF3 p.10 | §3 Ciclo de vida — flujo Inicio → Planif → Ejec ↔ Monitoreo → Cierre |
| `pm-wheel.png` | PDF3 p.11 | §3 Áreas de conocimiento — rueda alrededor de "Project management" |
| `smart-cards.png` | PDF3 p.15 | §4 Planificación — desglose visual de S/M/A/R/T |
| `esfuerzo-duracion-1.png` | PDF3 p.7 | §4 Planificación — relación Esfuerzo → Duración → Tiempo calendario |
| `esfuerzo-duracion-2.png` | PDF3 p.8 | §4 Planificación — cómo el software de PM combina los factores |
| `project-charter-illustration.jpg` | PDF3 p.18 | §5 Herramientas — ilustración decorativa del Project Charter |

**Lightbox modal**: al click en cualquier `<img>` dentro de un `<figure>`, abrir un modal que muestre la imagen a tamaño completo con backdrop oscuro. Cerrar con click fuera, botón ✕ arriba a la derecha o tecla Esc.

**Lazy loading**: todos los `<img>` usan `loading="lazy"` para no penalizar la carga inicial en mobile.

**Accesibilidad**:
- Cada `<img>` lleva `alt` descriptivo.
- `<figcaption>` con descripción contextual.
- El lightbox es accesible por teclado (Esc cierra).

**SVG inline propios**: por ahora, **cero**. Si durante implementación una sección queda visualmente pelada (probable candidata: §6 desafíos), se evalúa agregar SVG inline simples. Pero arrancamos sin.

---

## 8. Tema visual (tokens)

`css/extra.css`:

```css
:root {
  /* Surface */
  --bg: #fbfaf7;            /* off-white cálido, base Notion-like */
  --surface: #ffffff;       /* cards, modales */
  --surface-2: #f4f1ec;     /* hover suave */

  /* Text */
  --text: #2f2c28;
  --muted: #6f6a63;
  --text-on-accent: #ffffff;

  /* Border / structure */
  --border: #ebe7df;
  --border-strong: #d8d3c8;

  /* Accent (links, focus) */
  --accent: #2563eb;
  --accent-hover: #1d4ed8;

  /* Callouts */
  --criollo-bg: #fef9e7;
  --criollo-border: #e0c870;
  --info-bg: #eaf4ff;
  --info-border: #93c5fd;
  --warn-bg: #fff1f0;
  --warn-border: #f87171;

  /* Feedback (quiz) */
  --ok: #2f9e44;
  --ok-bg: #ebfbee;
  --error: #e03131;
  --error-bg: #fff5f5;

  /* Radii / shadows */
  --radius-sm: 6px;
  --radius: 10px;
  --radius-lg: 14px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow: 0 4px 12px rgba(0,0,0,0.06);

  /* Type */
  --font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Inter, sans-serif;
  --font-serif: "Iowan Old Style", "Source Serif Pro", Georgia, serif;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: var(--font-serif);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text);
}

.criollo-callout {
  background: var(--criollo-bg);
  border-left: 4px solid var(--criollo-border);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
}
```

Tailwind sigue manejando spacing, grid y la mayor parte de utilidades. `extra.css` solo aporta tokens cálidos y overrides tipográficos.

---

## 9. Responsive (mobile-first)

**Base**: todo el CSS arranca pensando mobile (≤640px). Se escala con prefixes Tailwind `sm:`, `md:`, `lg:`.

**Breakpoints (defaults de Tailwind)**:
- `sm:` ≥ 640px
- `md:` ≥ 768px (tablet)
- `lg:` ≥ 1024px (desktop)

**Reglas globales**:
- Touch targets interactivos: **mínimo 44×44px** (clases tipo `min-h-[44px]` o `py-3 px-4`).
- Fonts base: 16px en mobile (no menor — sino zoom auto en iOS).
- H1 28-32px mobile → 36-44px desktop.
- Padding lateral: 16px en mobile, 24-32px en desktop.
- Max-width del contenido de lectura: 65ch.
- Sticky bars (bottom en mobile, top nav siempre): atención a `padding-bottom` del body para que el contenido no quede tapado.

---

## 10. Lo que NO se hace (scope clavado)

Lista explícita para evitar scope creep:

- ❌ Autenticación / cuentas / multi-usuario.
- ❌ Sync entre dispositivos. Cada navegador tiene su propio `localStorage`.
- ❌ SRS / Anki / sistema de repaso espaciado.
- ❌ Búsqueda full-text en el contenido.
- ❌ Modo oscuro.
- ❌ Estadísticas globales, gráficos de progreso, analytics, tracking.
- ❌ Múltiples intentos de quiz registrados (solo último score).
- ❌ Swipe gestures en flashcards.
- ❌ Animaciones complejas (las transiciones default de Tailwind son suficientes).
- ❌ Build pipeline / npm / TypeScript / tests automatizados.
- ❌ Soporte para otras unidades de la materia. Esto es solo 8.1.
- ❌ PWA / offline-first con service worker.

---

## 11. Riesgos y consideraciones

| Riesgo | Mitigación |
|--------|------------|
| Copyright UP en imágenes y textos | Aceptado por el user. Repo público, uso personal de estudio. Si UP reclama, se baja el repo. |
| `cdn.tailwindcss.com` está pensado para prototipos, advierte en consola en producción | Aceptado. Es un proyecto de estudio personal. Si molesta, se puede pasar a Tailwind CLI build sin cambiar arquitectura, pero no es objetivo. |
| `localStorage` puede llenarse / borrarse | El estado es chico (kBs). Si se borra, el user pierde su progreso de lectura/quiz pero el contenido sigue ahí. No es crítico. |
| PDF.js en mobile puede ser lento con PDFs grandes | El PDF más pesado es 1.8MB. Manejable. Fallback: "Abrir PDF original". |
| Crear/mantener el contenido es trabajo manual | Inevitable: la calidad del contenido (criollo, quiz, flashcards) requiere edición humana. Se hace una vez durante implementación. |

---

## 12. Open questions

Ninguna pendiente al cierre de la fase de brainstorming. Si algo aparece durante implementación, se documenta y se decide caso por caso.

---

## 13. Siguiente paso

Pasar a `writing-plans` para descomponer la implementación en tareas concretas y ordenadas.
