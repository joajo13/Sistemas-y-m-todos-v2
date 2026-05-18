# Design — Soporte multi-materia + Análisis Matemático (Derivadas)

**Fecha**: 2026-05-18
**Materias afectadas**: Sistemas y Métodos (existente) + Análisis Matemático (nueva)
**Tipo**: Spec de diseño (pre-implementación)
**Base previa**: [`2026-05-13-study-app-admin-proyectos-design.md`](./2026-05-13-study-app-admin-proyectos-design.md)

---

## 1. Contexto y objetivo

La app actual sirve **una sola materia** (Administración de Proyectos / Sistemas y Métodos) con dos unidades (8.1 y 8.2). Cada `Section` vive en un array global `SECTIONS` con `id` único, y todo el código asume que existe una sola materia.

El objetivo de este cambio es:

1. Sumar **una segunda materia**, Análisis Matemático, con contenido inicial sobre derivadas.
2. Refactorizar la app para que el modelo de "materia" sea de primera clase, de modo que agregar futuras materias (Algorítmica, Bases de Datos, etc.) sea solo agregar un archivo en `js/subjects/` y registrarlo en el índice.
3. Sumar render de fórmulas matemáticas (KaTeX) y un nuevo block type `table` para tabular contenido.
4. Mantener intacto el progreso ya guardado en `localStorage` por la materia existente vía migración automática del schema.

**Contenido inicial concreto** (Análisis Matemático → Unidad "Derivadas"):

- Sección 1: tabla de derivadas comunes.
- Sección 2: reglas de derivación (suma, producto, cociente, cadena) con ejemplos.
- Sección 3: condiciones de derivabilidad de una función en un punto.

Quiz y flashcards quedan **fuera de scope** para Análisis Matemático en esta iteración (se suman después si hace falta).

**Restricción**: el contenido sigue siendo de uso personal de estudio. Nada de SRS, analytics, multi-usuario, build pipeline, etc.

---

## 2. Stack técnico (incremental)

Lo mismo que el spec base, con un agregado:

| Capa | Decisión |
|------|----------|
| Render matemático | **KaTeX por CDN** (`https://cdn.jsdelivr.net/npm/katex@0.16.x/dist/katex.min.css` + `.../katex.min.js` + `.../contrib/auto-render.min.js`) |

KaTeX se carga solo en las páginas que necesitan render de fórmulas (`materia.html`, `seccion.html`). En la home raíz (`index.html`) y `pdfs.html` no se carga.

**Justificación**: KaTeX es más liviano y rápido que MathJax y soporta de sobra todo lo que pide una materia de Análisis I (fracciones, exponentes, raíces, integrales, sumatorias, límites). No requiere build.

---

## 3. Arquitectura — flujo de navegación

```
index.html  (NUEVO contenido — selector de materias)
   │
   │  click en card de materia
   ▼
materia.html?subject=<subjectId>
   │
   │  click en card de sección
   ▼
seccion.html?subject=<subjectId>&id=<sectionId>
   │
   ├─► quiz.html?subject=<subjectId>&id=<sectionId>          (solo si la sección tiene quiz)
   ├─► flashcards.html?subject=<subjectId>&id=<sectionId>    (solo si tiene flashcards)
   └─► pdfs.html?subject=<subjectId>&doc=<docKey>            (solo si la materia tiene PDFs)
```

**Subject activo**: query string `?subject=<id>` en toda página que no sea `index.html`. Si falta o no existe esa materia → redirige a `index.html`.

**Nav top compartido** (`js/nav.js`):

- En `index.html`: solo título "Apuntes — Universidad de Palermo" (o equivalente). Sin botones de materia.
- En cualquier otra página con `?subject=<id>` válido:
  - Título: el `title` de la materia activa, link a `materia.html?subject=<id>`.
  - Link "← Materias" → `index.html`.
  - Link "Ver PDFs" → `pdfs.html?subject=<id>` **solo si la materia tiene PDFs**.

---

## 4. Modelo de datos

### 4.1 `Subject`

```js
// Tipo conceptual (no enforced)
//
// type Subject = {
//   id: string;             // slug usado en URL y storage, ej: "sistemas-y-metodos"
//   title: string;          // mostrado en nav y card de materia, ej: "Administración de Proyectos"
//   subtitle: string;       // bajo el título, ej: "Sistemas y Métodos — Apuntes"
//   tagline?: string;       // descripción corta para la card de materia en index.html
//   units: Record<string, string>;   // { "8.1": "Fundamentos...", "derivadas": "Derivadas" }
//   sections: Section[];    // mismo Section que antes (con quiz/flashcards opcionales)
//   pdfs: PdfDoc[];         // array vacío si la materia no tiene PDFs
// }
//
// type PdfDoc = { key: string; label: string; path: string }
```

### 4.2 `Section` (cambios respecto del modelo previo)

```js
// type Section = {
//   id: string;                     // único DENTRO del subject (no global)
//   unit?: string;                  // key dentro de subject.units
//   title: string;
//   criollo?: string;               // opcional (antes era obligatorio)
//   blocks: ContentBlock[];
//   quiz?: { tf: TFQuestion[]; mc: MCQuestion[] };   // OPCIONAL
//   flashcards?: Flashcard[];                         // OPCIONAL
// }
```

**Reglas de unicidad**: `section.id` debe ser único dentro del array `sections` de su subject. Distintos subjects pueden tener IDs repetidos (ej: ambos tienen `'1'`). La identidad global de una sección es el par `(subjectId, sectionId)`.

### 4.3 Nuevos `ContentBlock`

A los bloques existentes (`h3`, `p`, `ul`, `ol`, `callout`, `figure`) se suman:

```js
// type ContentBlock =
//   | ...los existentes...
//   | { type: "math"; latex: string; display?: boolean }
//   | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
```

- `math`: render con KaTeX. `display: true` → renderizado en bloque (`displayMode`), centrado, tamaño mayor. `display: false` o ausente → inline. Para la mayoría de casos `display: true`.
- `table`: tabla simple. `headers` define las columnas. `rows` es array de filas; cada celda es un string que puede incluir LaTeX inline entre `$...$`. `caption` opcional (mostrada arriba como título de la tabla).

**Markup de LaTeX inline en otros blocks**: dentro de strings de `p`, `ul.items`, `ol.items`, `callout.text` y celdas de `table` se acepta `$...$` para inline y `$$...$$` para display. Después de inyectar el HTML, `seccion.js` corre `renderMathInElement(container, { delimiters })` y KaTeX reemplaza los `$...$` por nodos KaTeX. **No** procesamos `h3.text` (los títulos no llevan fórmulas en general; si hiciera falta, se rompería el patrón). El texto del `criollo` SÍ se procesa (es texto explicativo, puede llevar fórmulas).

### 4.4 Cardinalidad opcional de quiz/flashcards

En `home`/`materia.js`, si una sección no tiene `quiz`, no se muestra el badge "Quiz". Si no tiene `flashcards`, no se muestra el badge "Flashcards".

En `seccion.js`, el bottom bar muestra:
- Solo botón "Hacer quiz" si solo tiene quiz.
- Solo botón "Flashcards" si solo tiene flashcards.
- Ambos si tiene ambos.
- Ninguno (bottom bar oculto) si no tiene ninguno.

En `quiz.html?subject=X&id=Y` y `flashcards.html?subject=X&id=Y`, si la sección no tiene quiz/flashcards respectivamente, se redirige a la sección.

---

## 5. Estructura de archivos

```
.
├── index.html              # REESCRITO — selector de materias
├── materia.html            # NUEVO — home de la materia activa (ex-contenido de index.html)
├── seccion.html            # MODIFICADO — head suma KaTeX + acepta ?subject=
├── quiz.html               # MODIFICADO — acepta ?subject=
├── flashcards.html         # MODIFICADO — acepta ?subject=
├── pdfs.html               # MODIFICADO — acepta ?subject=
├── css/extra.css           # (sin cambios funcionales; eventual override de espaciado de tablas)
├── js/
│   ├── content.js          # REESCRITO — índice de subjects + helpers
│   ├── subjects/
│   │   ├── sistemas-y-metodos.js     # NUEVO — mueve UNITS+SECTIONS+PDFs actuales
│   │   └── analisis-matematico.js    # NUEVO — derivadas
│   ├── inicio.js           # NUEVO — lógica del selector de materias (index.html)
│   ├── materia.js          # NUEVO — reemplaza home.js, lee subject activo
│   ├── home.js             # ELIMINADO (su lógica migra a materia.js)
│   ├── seccion.js          # MODIFICADO — usa getCurrentSubject, integra KaTeX, renderiza math/table
│   ├── quiz.js             # MODIFICADO — usa subject activo, IDs no globales
│   ├── flashcards.js       # MODIFICADO — idem
│   ├── pdfs.js             # MODIFICADO — usa subject.pdfs, no array hardcodeado
│   ├── nav.js              # MODIFICADO — título/links dependen del subject activo
│   ├── storage.js          # MODIFICADO — namespaced por subject + migración v1→v2
│   ├── katex-init.js       # NUEVO — helper renderMath(rootEl)
│   └── lightbox.js         # (sin cambios)
├── images/diagrams/        # (sin cambios; futuras imágenes de Análisis se suman por subcarpeta)
├── pdfs/                   # (sin cambios — solo materia "sistemas-y-metodos")
└── docs/
    └── specs/
        ├── 2026-05-13-study-app-admin-proyectos-design.md
        └── 2026-05-18-multi-materia-analisis-matematico-design.md   # este doc
```

**Convención**: el archivo de subject exporta default:

```js
// js/subjects/sistemas-y-metodos.js
export default {
  id: 'sistemas-y-metodos',
  title: 'Administración de Proyectos',
  subtitle: 'Sistemas y Métodos — Apuntes',
  tagline: 'Unidades 8.1 y 8.2 — Fundamentos y herramientas',
  units: { '8.1': '...', '8.2': '...' },
  sections: [ /* las 11 secciones actuales */ ],
  pdfs: [ /* los 3 PDFs actuales */ ],
};
```

**`js/content.js` queda como índice**:

```js
import sym from './subjects/sistemas-y-metodos.js';
import am from './subjects/analisis-matematico.js';

export const SUBJECTS = [sym, am];

export function getSubject(id) {
  return SUBJECTS.find((s) => s.id === id) || null;
}

export function getSection(subjectId, sectionId) {
  const subject = getSubject(subjectId);
  return subject ? subject.sections.find((s) => s.id === sectionId) || null : null;
}

export function getCurrentSubject() {
  const id = new URLSearchParams(location.search).get('subject');
  return getSubject(id);
}
```

---

## 6. Vistas

### 6.1 `index.html` — Selector de materias (NUEVO contenido)

**Propósito**: punto de entrada. Lista las materias disponibles.

**Layout**:
- Top nav simplificado: título "Apuntes — Universidad de Palermo".
- H1: "Apuntes".
- Subtítulo: descripción corta (ej: "Material de estudio por materia").
- Grid de cards, una por materia.

**Card de materia**:
- Título grande (`subject.title`).
- Subtítulo (`subject.subtitle`).
- Tagline (`subject.tagline`).
- Mini-indicador con cantidad de unidades y secciones (ej: "2 unidades · 11 secciones").
- Click → `materia.html?subject=<id>`.

**Responsive**: `grid-cols-1` mobile, `md:grid-cols-2`, `lg:grid-cols-3`.

### 6.2 `materia.html` — Home de una materia (ex-`index.html`)

**Propósito**: lo que hoy hace `index.html`: muestra las secciones agrupadas por unidad.

**Diferencia respecto del index.html actual**:
- Lee el subject activo via `getCurrentSubject()`. Si no existe, redirige a `index.html`.
- El header muestra `subject.title` + `subject.subtitle`.
- Las cards iteran `subject.sections` (no `SECTIONS` global).
- Los links de las cards apuntan a `seccion.html?subject=<subjectId>&id=<sectionId>`.
- Si `subject.units` está vacío o ninguna sección tiene `unit`, el render cae al modo "lista plana" sin headers de unidad.

**Card de sección**: misma estructura que hoy, pero:
- Badge "Quiz" solo si `section.quiz` existe.
- Badge "Flashcards" solo si `section.flashcards` existe.
- Badge "Leída" siempre presente.

### 6.3 `seccion.html` — Lectura de una sección

**Cambios respecto del actual**:

1. **`<head>` suma KaTeX por CDN**:
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" />
   <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
   <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"></script>
   ```
2. **`seccion.js`** llama `getCurrentSubject()` + `getSection(subjectId, sectionId)`. Si falta cualquiera de los dos, redirige a `index.html` (si falta subject) o a `materia.html?subject=<id>` (si falta sección).
3. **Renderiza nuevos blocks**:
   - `math` → contenedor `<div class="math-display">` o `<span class="math-inline">`. Después de inyectar el HTML, se llama `katex.render(b.latex, el, { displayMode: !!b.display, throwOnError: false })`.
   - `table` → `<table class="content-table">` con `<thead>` y `<tbody>`. Las celdas tienen su string inyectado tal cual y luego se ejecuta el auto-render de KaTeX sobre el contenedor del article.
4. Después de inyectar todos los blocks, llamar `renderMath(article)` (helper de `katex-init.js`) que ejecuta:
   ```js
   renderMathInElement(article, {
     delimiters: [
       { left: '$$', right: '$$', display: true },
       { left: '$',  right: '$',  display: false },
     ],
     throwOnError: false,
   });
   ```
5. **Navegación entre secciones**: itera `subject.sections` (no `SECTIONS` global). Anterior/Siguiente ahora son relativos a la materia.
6. **Bottom bar**: visible solo si la sección tiene `quiz` y/o `flashcards`. Si no tiene ninguno, no se renderiza la barra y el body deja de tener `class="has-bottom-bar"`.

### 6.4 `quiz.html` / `flashcards.html`

**Cambios**:
- Leen `?subject=<subjectId>&id=<sectionId>` en lugar de solo `?id`.
- Si falta `subject`, redirigen a `index.html`. Si falta `id` (o no existe esa sección en el subject), redirigen a `materia.html?subject=<subjectId>`.
- Si la sección no tiene `quiz`/`flashcards` respectivamente, redirigen a `seccion.html?subject=<subjectId>&id=<sectionId>`.
- El storage save usa la nueva firma `saveQuizScore(subjectId, sectionId, ...)` / `markFlashcard(subjectId, sectionId, ...)`.
- Los links del fin del quiz/flashcards ("Volver a la sección", "Volver a la materia") propagan `?subject=<subjectId>` en su href.

### 6.5 `pdfs.html`

**Cambios**:
- Lee `?subject=<id>`. Si falta, redirige a `index.html`.
- Si `subject.pdfs.length === 0`, redirige a `materia.html?subject=<id>` (no debería pasar porque el botón "Ver PDFs" del nav se oculta si no hay PDFs, pero defensivo).
- El array `DOCS` deja de ser hardcodeado: viene de `subject.pdfs`.
- El query param `?doc=...` sigue funcionando igual, default es el primer PDF de la materia.

---

## 7. Persistencia — schema v2 + migración

### 7.1 Schema nuevo

```js
{
  schemaVersion: 2,
  subjects: {
    'sistemas-y-metodos': {
      sections: {
        '1': { read: bool, lastQuizScore: {...}|null, knownFlashcards: [...] },
        ...
      }
    },
    'analisis-matematico': {
      sections: { ... }
    }
  }
}
```

### 7.2 Migración (corre al primer `getState()`)

```js
function migrate(raw) {
  if (!raw) return defaultState();
  // schema v2 ya
  if (raw.schemaVersion === 2 && raw.subjects) return raw;
  // schema v1 (antiguo: { sections: {...} })
  if (raw.sections && !raw.subjects) {
    return {
      schemaVersion: 2,
      subjects: {
        'sistemas-y-metodos': { sections: raw.sections },
      },
    };
  }
  // formato desconocido: fallback
  return defaultState();
}

function defaultState() {
  return { schemaVersion: 2, subjects: {} };
}
```

La migración se ejecuta una sola vez (la próxima vez ya tiene `schemaVersion: 2`). El usuario que ya marcó secciones como leídas y guardó scores **no pierde nada**.

### 7.3 API de `storage.js`

```js
getState()
setState(state)
getSectionState(subjectId, sectionId)
markRead(subjectId, sectionId)
saveQuizScore(subjectId, sectionId, { correct, total })
markFlashcard(subjectId, sectionId, fcId, known)
```

`ensureSubject(state, subjectId)` y `ensureSection(state, subjectId, sectionId)` son helpers internos que crean las keys si no existen.

---

## 8. Contenido inicial — Análisis Matemático

### 8.1 Subject

```js
{
  id: 'analisis-matematico',
  title: 'Análisis Matemático',
  subtitle: 'Apuntes y fórmulas',
  tagline: 'Derivadas — tabla, reglas y derivabilidad',
  units: { 'derivadas': 'Derivadas' },
  sections: [ /* las 3 secciones */ ],
  pdfs: [],
}
```

### 8.2 Sección 1 — Tabla de derivadas

- `id`: `'1'`
- `unit`: `'derivadas'`
- `title`: "Tabla de derivadas"
- `criollo`: "Las derivadas básicas que más vas a usar. Memorizalas — son los ladrillos de todo lo demás."
- `blocks`:
  - `p`: introducción ("La derivada de una función mide la tasa de cambio instantánea...").
  - `table`:
    - `caption`: "Derivadas elementales"
    - `headers`: `['f(x)', "f'(x)"]`
    - `rows` (cada celda string, con LaTeX inline cuando hace falta), agrupadas conceptualmente:
      - **Básicas**:
        - `['$c$ (constante)', '$0$']`
        - `['$x$', '$1$']`
        - `['$x^n$', '$n \\cdot x^{n-1}$']`
      - **Exponenciales y logarítmicas**:
        - `['$e^x$', '$e^x$']`
        - `['$a^x$', '$a^x \\cdot \\ln a$']`
        - `['$\\ln x$', '$\\dfrac{1}{x}$']`
        - `['$\\log_a x$', '$\\dfrac{1}{x \\ln a}$']`
      - **Trigonométricas**:
        - `['$\\sin x$', '$\\cos x$']`
        - `['$\\cos x$', '$-\\sin x$']`
        - `['$\\tan x$', '$\\sec^2 x$']`
        - `['$\\cot x$', '$-\\csc^2 x$']`
        - `['$\\sec x$', '$\\sec x \\cdot \\tan x$']`
        - `['$\\csc x$', '$-\\csc x \\cdot \\cot x$']`
      - **Trigonométricas inversas**:
        - `['$\\arcsin x$', '$\\dfrac{1}{\\sqrt{1-x^2}}$']`
        - `['$\\arccos x$', '$-\\dfrac{1}{\\sqrt{1-x^2}}$']`
        - `['$\\arctan x$', '$\\dfrac{1}{1+x^2}$']`
      - **Hiperbólicas**:
        - `['$\\sinh x$', '$\\cosh x$']`
        - `['$\\cosh x$', '$\\sinh x$']`
        - `['$\\tanh x$', '$\\operatorname{sech}^2 x = 1 - \\tanh^2 x$']`
        - `['$\\coth x$', '$-\\operatorname{csch}^2 x$']`
        - `['$\\operatorname{sech} x$', '$-\\operatorname{sech} x \\cdot \\tanh x$']`
        - `['$\\operatorname{csch} x$', '$-\\operatorname{csch} x \\cdot \\coth x$']`

    > **Nota de implementación**: las agrupaciones (negritas con encabezado) **no** se renderizan en la tabla — son organización conceptual del spec. La tabla final es una secuencia plana de 22 filas en el mismo orden (3 básicas + 4 exp/log + 6 trig + 3 inversas + 6 hiperbólicas). Si más adelante se quiere visualizar los grupos, se puede extender el block `table` con un campo opcional `groups: { label, rowCount }[]` o se hacen varias tablas separadas. Por ahora, una sola tabla plana.
  - `callout` (tone `criollo`): consejo de uso ("Si tu función es una de estas exactas, listo. Si es una combinación de varias, mirá la sección de reglas.")

### 8.3 Sección 2 — Reglas de derivación

- `id`: `'2'`
- `unit`: `'derivadas'`
- `title`: "Reglas de derivación"
- `criollo`: "Cuando la función no es una sola cosa sino una combinación, no derivás cada parte por separado: hay reglas concretas para suma, producto, cociente y composición. Estas cuatro cubren casi todo."
- `blocks`:
  - `p`: intro a las cuatro reglas.
  - `h3` (con `criollo`): "Regla de la suma (y de la resta)"
    - `criollo`: "La derivada de una suma es la suma de las derivadas. Esto sí podés hacerlo por partes."
    - `math` display: `(f+g)'(x) = f'(x) + g'(x)`
    - `p` con ejemplo: derivar $f(x) = x^3 + \sin x$ paso a paso.
  - `h3` (con `criollo`): "Regla del producto"
    - `criollo`: "No, la derivada de un producto NO es el producto de las derivadas. La fórmula es: derivada del primero por el segundo más el primero por la derivada del segundo."
    - `math` display: `(f \cdot g)'(x) = f'(x) \cdot g(x) + f(x) \cdot g'(x)`
    - `p` con ejemplo: derivar $f(x) = x^2 \cdot \sin x$.
  - `h3` (con `criollo`): "Regla del cociente"
    - `criollo`: "Para una división: derivada del numerador por el denominador, menos el numerador por la derivada del denominador, todo dividido el denominador al cuadrado."
    - `math` display: `\left(\dfrac{f}{g}\right)'(x) = \dfrac{f'(x) g(x) - f(x) g'(x)}{[g(x)]^2}`
    - `p` con ejemplo: derivar $f(x) = \dfrac{\sin x}{x}$.
    - `callout` warning: "Solo válida si $g(x) \ne 0$."
  - `h3` (con `criollo`): "Regla de la cadena"
    - `criollo`: "Para una función compuesta (una función dentro de otra), derivás de afuera hacia adentro y multiplicás por la derivada de adentro."
    - `math` display: `(f \circ g)'(x) = f'(g(x)) \cdot g'(x)`
    - `p` con ejemplo: derivar $f(x) = \sin(x^2)$. Paso a paso: la "de afuera" es $\sin$, la "de adentro" es $x^2$, resultado $\cos(x^2) \cdot 2x$.

### 8.4 Sección 3 — Derivabilidad de una función

- `id`: `'3'`
- `unit`: `'derivadas'`
- `title`: "¿Cuándo una función es derivable?"
- `criollo`: "Para decir que $f$ es derivable en un punto no alcanza con que esté definida ahí. El límite del cociente incremental tiene que existir, y dar lo mismo por izquierda y por derecha. Si hay esquina, salto o tangente vertical, no es derivable."
- `blocks`:
  - `p`: intro al concepto de derivabilidad en un punto.
  - `h3`: "Definición formal"
  - `math` display: `f'(a) = \lim_{h \to 0} \dfrac{f(a+h) - f(a)}{h}`
  - `p`: "Para que esta derivada exista en $x = a$ tienen que cumplirse tres condiciones simultáneamente."
  - `ol`:
    - "$f$ está definida en $a$ — el punto pertenece al dominio."
    - "$f$ es continua en $a$ — si hay un salto o un agujero, no hay derivada."
    - "El límite del cociente incremental existe y es finito, **y los límites laterales coinciden**: $\lim_{h \to 0^-} = \lim_{h \to 0^+}$. Si los laterales dan distinto, hay esquina/pico (no derivable). Si dan $\pm\infty$, hay tangente vertical (no derivable)."
  - `callout` warning: "**Continua no implica derivable**: $f(x) = |x|$ es continua en $0$ pero no derivable ahí (los límites laterales dan $+1$ y $-1$)."
  - `h3`: "Casos típicos donde NO es derivable"
  - `ul`:
    - "**Esquina o pico**: los límites laterales del cociente incremental existen pero son distintos. Ejemplo: $|x|$ en $x = 0$."
    - "**Salto o discontinuidad**: la función no es continua en el punto. Ejemplo: $f(x) = \\lfloor x \\rfloor$ (parte entera) en cualquier entero."
    - "**Tangente vertical**: el límite del cociente incremental da $\\pm\\infty$. Ejemplo: $f(x) = \\sqrt[3]{x}$ en $x = 0$, la pendiente tiende a infinito."
    - "**Oscilación**: la función oscila infinitamente cerca del punto. Ejemplo: $f(x) = \\sin(1/x)$ no extendida a $x = 0$ (no es continua, así que tampoco derivable)."
  - `callout` info: "Una función puede ser derivable en casi todos los puntos de su dominio salvo en uno: en ese punto se dice que tiene un punto no derivable, no que la función entera no es derivable."

### 8.5 Storage

Las 3 secciones quedan registradas con `read: false`, `lastQuizScore: null`, `knownFlashcards: []` solo cuando el usuario las lee (la migración no las crea proactivamente).

---

## 9. Tema visual

`css/extra.css` no necesita cambios mayores. Se agregan dos selectores nuevos para el nuevo block `table`:

```css
.content-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}
.content-table caption {
  text-align: left;
  font-weight: 600;
  margin-bottom: 0.5rem;
  caption-side: top;
  color: var(--text);
}
.content-table th,
.content-table td {
  padding: 0.6rem 0.9rem;
  border-bottom: 1px solid var(--border);
  text-align: left;
  vertical-align: middle;
}
.content-table thead th {
  background: var(--surface-2);
  font-weight: 600;
}
.content-table tr:last-child td { border-bottom: none; }

/* KaTeX inline en celdas: hereda font-size del td */
.content-table .katex { font-size: inherit; }
```

Y un override para que las fórmulas en bloque (`type: math display`) tengan espaciado correcto:

```css
.math-display {
  display: block;
  text-align: center;
  margin: 1.25rem 0;
  overflow-x: auto;
}
```

---

## 10. Responsive

Nada cambia respecto del spec base. Solo:

- Las tablas con muchas filas/columnas pueden requerir scroll horizontal en mobile. Se envuelve `.content-table` en `<div class="table-wrap">` con `overflow-x: auto`.
- KaTeX en mobile: las fórmulas largas (ej: regla del cociente con celdas anchas) pueden desbordar. `.math-display { overflow-x: auto }` ya lo cubre.

---

## 11. Lo que NO se hace (scope clavado)

- ❌ Quiz/flashcards para Análisis Matemático en esta iteración.
- ❌ PDFs para Análisis Matemático.
- ❌ Editor visual de fórmulas — todo se escribe a mano en LaTeX en el archivo del subject.
- ❌ Búsqueda cross-materia.
- ❌ Sincronización de progreso entre dispositivos.
- ❌ Render de gráficas / plotting de funciones — solo fórmulas estáticas.
- ❌ Lazy-load de KaTeX por sección (se carga siempre que se entra a `seccion.html`).
- ❌ Soporte para `\begin{align}` y entornos AMS multilinea (KaTeX los soporta pero por ahora no los usamos).

---

## 12. Riesgos y consideraciones

| Riesgo | Mitigación |
|--------|------------|
| Migración v1→v2 falla y el usuario pierde progreso | La función `migrate` es defensiva: si el formato es desconocido cae al default. El formato v1 actual (`{sections: {...}}`) es muy específico y la detección es robusta (hay key `sections` y no hay `subjects`). Tests manuales: cargar la app con localStorage del schema viejo y verificar que las marcas siguen ahí. |
| KaTeX CDN cae o no carga | `auto-render` con `throwOnError: false` muestra el LaTeX crudo entre $...$. Feo pero no rompe la página. |
| Colisión de IDs entre subjects | Los IDs son únicos solo dentro del subject. Storage y URLs siempre llevan `(subject, sectionId)` juntos. No hay riesgo si todas las APIs respetan la firma nueva. |
| `index.html` reemplaza el comportamiento existente — usuarios con bookmark de "Sección 5" se rompen | El comportamiento previo expone URLs tipo `seccion.html?id=5`, `quiz.html?id=5`, `flashcards.html?id=5`. Mantenemos compatibilidad: si cualquiera de estas páginas recibe `?id=<X>` **sin** `?subject=`, asume `?subject=sistemas-y-metodos` (la materia preexistente) y hace `location.replace(<misma página>?subject=sistemas-y-metodos&id=<X>)` para que el resto del código vea la URL canónica. Mismo principio para `pdfs.html?doc=<X>` sin subject → asume `sistemas-y-metodos`. |
| Análisis Matemático crece y el archivo se vuelve grande | El subject vive en un solo archivo. Si crece mucho (ej: 50 secciones con quiz y flashcards), se puede partir por unidad: `js/subjects/analisis-matematico/index.js` + un archivo por unidad. Por ahora, un archivo. |

---

## 13. Open questions

Ninguna pendiente al cierre de la fase de brainstorming.

---

## 14. Siguiente paso

Pasar a `writing-plans` para descomponer en tareas concretas y ordenadas: refactor multi-subject, migración de storage, vistas nuevas, contenido de Análisis, smoke test manual.
