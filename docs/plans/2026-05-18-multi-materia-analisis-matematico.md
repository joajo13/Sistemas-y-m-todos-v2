# Multi-materia + Análisis Matemático Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactorizar la study-app para soportar múltiples materias y agregar Análisis Matemático con una unidad "Derivadas" (tabla de derivadas, reglas, condiciones de derivabilidad), preservando todo el progreso ya guardado en localStorage de Sistemas y Métodos.

**Architecture:** `index.html` pasa a ser un selector de materias; cada materia vive en `js/subjects/<id>.js` y se accede vía `materia.html?subject=<id>`. Las páginas existentes (seccion, quiz, flashcards, pdfs) reciben `?subject=` además del `?id=` y mantienen compatibilidad con URLs viejas redirigiendo a `sistemas-y-metodos`. Storage pasa a un schema v2 namespaced por materia con migración automática del v1.

**Tech Stack:** HTML5 + JS vanilla (módulos ES nativos), Tailwind CSS por CDN, KaTeX por CDN (nuevo), `localStorage`. Sin npm, sin build, sin tests automatizados — verificación por smoke test manual en navegador.

**Spec base:** `docs/specs/2026-05-18-multi-materia-analisis-matematico-design.md` (commit `f87cded`).

---

## Convenciones del plan

- **No hay test runner**. Cada task termina con un "smoke test manual" describiendo qué tiene que verse o pasar en el browser, y un commit.
- **Servidor local**: ejecutar una vez al inicio en otra terminal y dejarlo corriendo:
  ```
  cd "C:\Users\Juan\Desktop\projects\Sistemas y metodos - P2"
  python -m http.server 8000
  ```
  Abrir `http://localhost:8000/` en el browser. Hard refresh (Ctrl+Shift+R) entre cambios para evitar cache de módulos ES.
- **Backup del localStorage actual** antes de empezar (Task 1) — el usuario tiene progreso real.
- **Commits frecuentes**: uno por task como mínimo, salvo Task 13 que se commitea por sección (tabla / reglas / derivabilidad) para mantener diffs reviewables.
- **Co-author de los commits**:
  ```
  Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
  ```

---

## File map

```
A = create   M = modify   D = delete

A docs/plans/2026-05-18-multi-materia-analisis-matematico.md   # este plan

M js/storage.js                          # schema v2 + migración v1→v2, API namespaced
A js/subjects/sistemas-y-metodos.js      # contenido actual (UNITS + SECTIONS + PDFs)
A js/subjects/analisis-matematico.js     # 3 secciones de derivadas
M js/content.js                          # índice SUBJECTS + helpers (getSubject, getSection, getCurrentSubject)

M js/nav.js                              # título y links dependen del subject activo
A js/inicio.js                           # lógica del selector de materias
A js/materia.js                          # ex-home.js, parametrizado por subject
D js/home.js                             # reemplazado por materia.js

A materia.html                           # nuevo: home de la materia activa
M index.html                             # reescrito: selector de materias

M js/seccion.js                          # subject activo + compat legacy URL + render math/table
M js/quiz.js                             # subject activo + compat legacy URL
M js/flashcards.js                       # subject activo + compat legacy URL
M js/pdfs.js                             # subject.pdfs + compat legacy URL

M seccion.html                           # head suma KaTeX
M materia.html                           # head suma KaTeX (para previews futuros — opcional)
A js/katex-init.js                       # helper renderMath(rootEl)

M css/extra.css                          # estilos para .content-table y .math-display
```

---

## Task 1 — Refactor storage a schema v2 con migración

**Files:**
- Modify: `js/storage.js`

Lo más importante primero: la migración tiene que correr una sola vez en el primer load del schema viejo y dejar todo intacto. El resto del plan asume que `storage.js` ya recibe `subjectId` como primer argumento.

- [ ] **Step 1: Backup manual del localStorage actual**

Abrir DevTools → Application → Local Storage → `http://localhost:8000` → copiar el valor de `study-app-state` y pegarlo en un .txt local fuera del repo. Esto permite restaurar si la migración rompe algo.

- [ ] **Step 2: Reescribir `js/storage.js` con namespace por materia + migración**

Reemplazar el archivo entero por:

```js
/**
 * Wrapper sobre localStorage con un solo key (study-app-state).
 *
 * Schema v2:
 *   {
 *     schemaVersion: 2,
 *     subjects: {
 *       "<subjectId>": {
 *         sections: {
 *           "<sectionId>": {
 *             read: bool,
 *             lastQuizScore: { correct, total, at } | null,
 *             knownFlashcards: [fcId, ...]
 *           },
 *           ...
 *         }
 *       },
 *       ...
 *     }
 *   }
 *
 * Migración v1 → v2: si encontramos { sections: {...} } sin `subjects`,
 * lo movemos a `subjects['sistemas-y-metodos'].sections` y seteamos
 * schemaVersion: 2. La key v1 NO se borra hasta que setState() pisa
 * el valor (que es lo que ocurre en el primer write).
 */

const KEY = 'study-app-state';
const LEGACY_SUBJECT_ID = 'sistemas-y-metodos';

function defaultState() {
  return { schemaVersion: 2, subjects: {} };
}

function defaultSectionState() {
  return { read: false, lastQuizScore: null, knownFlashcards: [] };
}

function migrate(raw) {
  if (!raw || typeof raw !== 'object') return defaultState();
  // Ya v2
  if (raw.schemaVersion === 2 && raw.subjects && typeof raw.subjects === 'object') {
    return raw;
  }
  // v1: { sections: {...} } sin subjects
  if (raw.sections && typeof raw.sections === 'object' && !raw.subjects) {
    return {
      schemaVersion: 2,
      subjects: {
        [LEGACY_SUBJECT_ID]: { sections: raw.sections },
      },
    };
  }
  // formato desconocido → default vacío (no se pierde nada porque no había nada usable)
  return defaultState();
}

function ensureSubject(state, subjectId) {
  if (!state.subjects[subjectId]) {
    state.subjects[subjectId] = { sections: {} };
  }
  return state.subjects[subjectId];
}

function ensureSection(state, subjectId, sectionId) {
  const subj = ensureSubject(state, subjectId);
  if (!subj.sections[sectionId]) {
    subj.sections[sectionId] = defaultSectionState();
  }
  return subj.sections[sectionId];
}

export function getState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return migrate(parsed);
  } catch {
    return defaultState();
  }
}

export function setState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function getSectionState(subjectId, sectionId) {
  const state = getState();
  const subj = state.subjects[subjectId];
  if (!subj || !subj.sections[sectionId]) return defaultSectionState();
  return subj.sections[sectionId];
}

export function markRead(subjectId, sectionId) {
  const state = getState();
  ensureSection(state, subjectId, sectionId).read = true;
  setState(state);
}

export function saveQuizScore(subjectId, sectionId, { correct, total }) {
  const state = getState();
  ensureSection(state, subjectId, sectionId).lastQuizScore = {
    correct,
    total,
    at: new Date().toISOString(),
  };
  setState(state);
}

export function markFlashcard(subjectId, sectionId, fcId, known) {
  const state = getState();
  const section = ensureSection(state, subjectId, sectionId);
  const set = new Set(section.knownFlashcards);
  if (known) set.add(fcId);
  else set.delete(fcId);
  section.knownFlashcards = [...set];
  setState(state);
}
```

- [ ] **Step 3: Smoke test de migración**

La app va a estar rota visualmente porque otros archivos todavía llaman `markRead(id)` con un solo argumento. **No la cargues todavía** — la verificación es por consola.

1. En DevTools → Console:
   ```js
   // Simular schema v1
   localStorage.setItem('study-app-state', JSON.stringify({
     sections: {
       '1': { read: true, lastQuizScore: { correct: 5, total: 8, at: '2026-05-13T14:30:00.000Z' }, knownFlashcards: ['fc-1-1'] },
       '5': { read: false, lastQuizScore: null, knownFlashcards: [] }
     }
   }));
   ```
2. Hard refresh y abrir Console:
   ```js
   const m = await import('/js/storage.js');
   m.getState();
   ```
   Esperado: `{ schemaVersion: 2, subjects: { 'sistemas-y-metodos': { sections: { '1': {...}, '5': {...} } } } }`. El contenido de las secciones se preserva.
3. Restaurar el valor real del backup (Step 1) ANTES de seguir con el resto del plan.

- [ ] **Step 4: Commit**

```
git add js/storage.js
git commit -m "$(cat <<'EOF'
refactor(storage): schema v2 namespaced por materia + migración v1→v2

Cambia la API de localStorage para recibir subjectId como primer argumento
en getSectionState, markRead, saveQuizScore y markFlashcard. La migración
de v1 (sin subjects) a v2 mueve el contenido viejo bajo sistemas-y-metodos
sin perder progreso del usuario.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2 — Mover contenido actual a `js/subjects/sistemas-y-metodos.js`

**Files:**
- Create: `js/subjects/sistemas-y-metodos.js`
- Modify: `js/content.js` (queda inestable hasta Task 3)

- [ ] **Step 1: Crear carpeta `js/subjects/`**

```
mkdir "js\subjects"
```

- [ ] **Step 2: Crear `js/subjects/sistemas-y-metodos.js`**

Crear el archivo con la siguiente estructura, y **copiar exactamente** el contenido actual de `UNITS` y `SECTIONS` desde `js/content.js`:

```js
/**
 * Materia: Sistemas y Métodos — Administración de Proyectos I (UP).
 * Unidades 8.1 y 8.2.
 *
 * Tipos conceptuales (ver js/content.js para Subject/Section/ContentBlock).
 */

export default {
  id: 'sistemas-y-metodos',
  title: 'Administración de Proyectos',
  subtitle: 'Sistemas y Métodos — Apuntes',
  tagline: 'Unidades 8.1 y 8.2 — Fundamentos y herramientas',
  units: {
    '8.1': 'Fundamentos de la Administración de Proyectos',
    '8.2': 'Herramientas y procesos para la administración de proyectos',
  },
  sections: [
    // ⬇ PEGAR ACÁ exactamente las 11 secciones que hoy están en
    //   js/content.js dentro de export const SECTIONS = [...].
    //   No cambiar ningún campo: id, unit, title, criollo, blocks, quiz, flashcards.
  ],
  pdfs: [
    { key: 'fundamentos', label: 'Fundamentos', path: 'pdfs/fundamentos.pdf' },
    { key: 'consideraciones', label: 'Consideraciones', path: 'pdfs/consideraciones.pdf' },
    { key: 'presentacion', label: 'Presentación', path: 'pdfs/presentacion.pdf' },
  ],
};
```

Tip: abrir `js/content.js` en una pestaña, copiar todo el array `SECTIONS`, pegarlo en `sections:`. NO copiar `UNITS` (ya está como `units` arriba).

- [ ] **Step 3: Smoke test**

En Console:
```js
const sym = (await import('/js/subjects/sistemas-y-metodos.js')).default;
sym.id;                          // "sistemas-y-metodos"
sym.units;                       // { '8.1': '...', '8.2': '...' }
sym.sections.length;             // 11 (las que tenías)
sym.sections[0].id;              // "1"
sym.pdfs.length;                 // 3
```

Si alguna assertion falla, no avanzar.

- [ ] **Step 4: Commit**

```
git add js/subjects/sistemas-y-metodos.js
git commit -m "$(cat <<'EOF'
refactor(content): mover contenido de Sistemas y Métodos a js/subjects/

Primera parte del refactor multi-materia: el contenido de la materia
actual sale de content.js y vive en su propio archivo, exportando un
objeto Subject. content.js queda inestable hasta la próxima tarea.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 3 — Convertir `js/content.js` en índice de materias

**Files:**
- Modify: `js/content.js`

- [ ] **Step 1: Reescribir `js/content.js` como índice**

Reemplazar el archivo entero por:

```js
/**
 * Índice de materias y helpers de acceso.
 *
 * Cada materia vive en js/subjects/<id>.js exportando default un objeto:
 *   Subject = {
 *     id: string,                        // slug en URL y storage
 *     title: string,
 *     subtitle: string,
 *     tagline?: string,
 *     units: Record<string, string>,
 *     sections: Section[],
 *     pdfs: { key, label, path }[]
 *   }
 *
 * Section = {
 *   id: string,                          // único dentro del subject
 *   unit?: string,
 *   title: string,
 *   criollo?: string,
 *   blocks: ContentBlock[],
 *   quiz?: { tf: TFQuestion[], mc: MCQuestion[] },
 *   flashcards?: Flashcard[]
 * }
 *
 * ContentBlock =
 *   | { type: 'h3', text: string, criollo?: string }
 *   | { type: 'p', text: string }
 *   | { type: 'ul', items: string[] }
 *   | { type: 'ol', items: string[] }
 *   | { type: 'callout', tone: 'info'|'warning'|'criollo', text: string }
 *   | { type: 'figure', src: string, alt: string, caption: string }
 *   | { type: 'math', latex: string, display?: boolean }
 *   | { type: 'table', caption?: string, headers: string[], rows: string[][] }
 *
 * En strings de p/ul/ol/callout y celdas de table se acepta LaTeX inline
 * entre $...$ y display entre $$...$$. h3.text NO se procesa.
 */

import sistemasYMetodos from './subjects/sistemas-y-metodos.js';

export const SUBJECTS = [sistemasYMetodos];

export function getSubject(subjectId) {
  return SUBJECTS.find((s) => s.id === subjectId) || null;
}

export function getSection(subjectId, sectionId) {
  const subject = getSubject(subjectId);
  if (!subject) return null;
  return subject.sections.find((s) => s.id === sectionId) || null;
}

/**
 * Lee ?subject=<id> de location.search y devuelve el Subject correspondiente.
 * Devuelve null si falta o no existe.
 */
export function getCurrentSubject() {
  const id = new URLSearchParams(location.search).get('subject');
  if (!id) return null;
  return getSubject(id);
}
```

`SECTIONS` y `UNITS` ya no se exportan desde acá. Los archivos consumidores se adaptan en las próximas tasks.

- [ ] **Step 2: Smoke test**

En Console:
```js
const c = await import('/js/content.js');
c.SUBJECTS.length;                                       // 1
c.getSubject('sistemas-y-metodos').sections.length;      // 11
c.getSection('sistemas-y-metodos', '1').title;            // "¿Qué es un proyecto..."
c.getSection('sistemas-y-metodos', '999');                // null
c.getSubject('no-existe');                                // null
```

- [ ] **Step 3: Commit**

```
git add js/content.js
git commit -m "$(cat <<'EOF'
refactor(content): convertir content.js en índice de materias

SUBJECTS es ahora el array central, con helpers getSubject, getSection y
getCurrentSubject. SECTIONS y UNITS dejan de exportarse desde content.js;
las páginas consumen el subject activo via getCurrentSubject().

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 4 — Adaptar `js/nav.js` al subject activo

**Files:**
- Modify: `js/nav.js`

El nav top necesita:
1. Mostrar `subject.title` cuando hay subject activo.
2. Linkear el título a `materia.html?subject=<id>`.
3. Mostrar "← Materias" siempre que NO esté en `index.html`.
4. Mostrar "Ver PDFs" solo si la materia tiene PDFs (`subject.pdfs.length > 0`).
5. En `index.html` (selector raíz): título genérico "Apuntes", sin links de materia.

- [ ] **Step 1: Reescribir `js/nav.js`**

Reemplazar el archivo entero por:

```js
/**
 * Renderiza el top nav compartido entre vistas.
 *
 * Uso:
 *   import { renderNav } from './nav.js';
 *   renderNav({ active: 'home', subject });     // subject opcional
 *
 * `active`: 'home' | 'pdfs' | 'inicio'.
 * `subject`: objeto Subject o null. Si null, se asume vista raíz (selector).
 */

export function renderNav({ active = 'home', subject = null } = {}) {
  const nav = document.createElement('nav');
  nav.className =
    'sticky top-0 z-40 bg-[var(--bg)]/95 backdrop-blur border-b border-[var(--border)]';

  const isActive = (key) =>
    active === key
      ? 'text-[var(--accent)] font-semibold'
      : 'text-[var(--muted)] hover:text-[var(--text)]';

  if (!subject) {
    // Vista raíz: index.html
    nav.innerHTML = `
      <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="index.html" class="font-semibold ${isActive('inicio')}">Apuntes</a>
      </div>
    `;
  } else {
    const subjectHome = `materia.html?subject=${subject.id}`;
    const pdfsLink = subject.pdfs && subject.pdfs.length > 0
      ? `<a href="pdfs.html?subject=${subject.id}" class="touch-target inline-flex items-center px-3 py-2 rounded-[var(--radius-sm)] ${isActive('pdfs')}">Ver PDFs</a>`
      : '';

    nav.innerHTML = `
      <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div class="flex items-center gap-3 min-w-0">
          <a href="index.html" class="text-sm text-[var(--muted)] hover:text-[var(--text)] whitespace-nowrap">← Materias</a>
          <span class="text-[var(--muted)]">·</span>
          <a href="${subjectHome}" class="font-semibold truncate ${isActive('home')}">${subject.title}</a>
        </div>
        ${pdfsLink}
      </div>
    `;
  }
  document.body.prepend(nav);
}
```

- [ ] **Step 2: Smoke test**

No se puede probar end-to-end todavía (las vistas todavía importan `SECTIONS`). Test aislado en Console:
```js
const { renderNav } = await import('/js/nav.js');
// Sin subject (debería mostrar "Apuntes"):
renderNav({});
// Con subject ficticio:
renderNav({ active: 'home', subject: { id: 'x', title: 'Test', pdfs: [{key:'a',label:'A',path:''}] } });
```

Inspeccionar `document.querySelectorAll('nav')` y confirmar que hay dos navs con los textos esperados. Después borrar las navs creadas (`document.querySelectorAll('nav').forEach(n => n.remove())`) y refrescar.

- [ ] **Step 3: Commit**

```
git add js/nav.js
git commit -m "$(cat <<'EOF'
refactor(nav): recibir subject activo y condicionar links

El nav muestra título de la materia + Ver PDFs solo si la materia tiene
PDFs. En la vista raíz (sin subject) muestra solo 'Apuntes'.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 5 — Crear `materia.html` + `js/materia.js` (home de la materia)

**Files:**
- Create: `materia.html`
- Create: `js/materia.js`
- Delete: `js/home.js` (al final del task)

`materia.html` es la ex-`index.html`: muestra las secciones de la materia agrupadas por unidad.

- [ ] **Step 1: Crear `materia.html`**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Materia — Apuntes</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="css/extra.css" />
</head>
<body>
  <main class="max-w-5xl mx-auto px-4 py-6">
    <header class="mb-8">
      <h1 id="materia-title" class="text-3xl md:text-4xl font-semibold"></h1>
      <p id="materia-subtitle" class="text-[var(--muted)] mt-1"></p>
    </header>
    <section id="sections-grid" class="space-y-10">
      <!-- grupos por unidad inyectados por materia.js -->
    </section>
  </main>
  <script type="module" src="js/materia.js"></script>
</body>
</html>
```

- [ ] **Step 2: Crear `js/materia.js`**

```js
import { renderNav } from './nav.js';
import { getCurrentSubject } from './content.js';
import { getSectionState } from './storage.js';

const subject = getCurrentSubject();

if (!subject) {
  location.replace('index.html');
} else {
  document.title = `${subject.title} — Apuntes`;
  renderNav({ active: 'home', subject });
  document.getElementById('materia-title').textContent = subject.title;
  document.getElementById('materia-subtitle').textContent = subject.subtitle || '';
  renderSections();
}

function sectionCard(section) {
  const state = getSectionState(subject.id, section.id);
  const hasQuiz = !!section.quiz;
  const hasFc = !!section.flashcards;

  const readBadge = state.read
    ? '<span class="text-[var(--ok)]">✓ Leída</span>'
    : '<span class="text-[var(--muted)]">Sin leer</span>';

  const score = state.lastQuizScore;
  const quizBadge = hasQuiz
    ? (score
        ? `<span class="text-[var(--muted)]">Quiz: ${score.correct}/${score.total}</span>`
        : '<span class="text-[var(--muted)]">Sin quiz</span>')
    : '';

  const fcBadge = hasFc
    ? (() => {
        const total = section.flashcards.length;
        const known = state.knownFlashcards.length;
        return `<span class="text-[var(--muted)]">Flashcards: ${known}/${total}</span>`;
      })()
    : '';

  return `
    <a href="seccion.html?subject=${subject.id}&id=${section.id}"
       class="surface-card block p-5 transition-shadow">
      <div class="flex items-start gap-3 mb-3">
        <span class="text-3xl font-semibold text-[var(--muted)] leading-none">${section.id}</span>
        <h2 class="text-lg leading-tight">${section.title}</h2>
      </div>
      ${section.criollo
        ? `<p class="text-sm text-[var(--muted)] mb-4 line-clamp-3">${section.criollo}</p>`
        : '<p class="text-sm text-[var(--muted)] mb-4">&nbsp;</p>'}
      <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs">
        ${readBadge}
        ${quizBadge}
        ${fcBadge}
      </div>
    </a>
  `;
}

function groupByUnit(sections) {
  const groups = new Map();
  for (const s of sections) {
    const key = s.unit || 'sin-unidad';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(s);
  }
  return groups;
}

function unitBlock(unit, sections) {
  const unitTitle = subject.units[unit] || '';
  const heading = unit === 'sin-unidad'
    ? ''
    : (unitTitle ? `Unidad ${unit} — ${unitTitle}` : `Unidad ${unit}`);
  return `
    <section>
      ${heading ? `<h2 class="text-xl md:text-2xl font-semibold mb-4">${heading}</h2>` : ''}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${sections.map(sectionCard).join('')}
      </div>
    </section>
  `;
}

function renderSections() {
  const groups = groupByUnit(subject.sections);
  document.getElementById('sections-grid').innerHTML =
    Array.from(groups.entries()).map(([unit, list]) => unitBlock(unit, list)).join('');
}
```

- [ ] **Step 3: Smoke test**

Abrir `http://localhost:8000/materia.html?subject=sistemas-y-metodos`. Esperado:
- Header con "Administración de Proyectos" y subtítulo "Sistemas y Métodos — Apuntes".
- Nav top: "← Materias · Administración de Proyectos · Ver PDFs".
- Dos grupos: "Unidad 8.1 — Fundamentos..." y "Unidad 8.2 — Herramientas...".
- 11 cards totales, con badges Leída/Quiz/Flashcards.
- Click en una card → va a `seccion.html?subject=sistemas-y-metodos&id=<n>` (la sección todavía no anda, eso es Task 7).
- `materia.html` sin `?subject=` o con uno inexistente → redirige a `index.html` (que todavía es la home vieja).

- [ ] **Step 4: Borrar `js/home.js` (ya no se usa)**

```
del "js\home.js"
```

- [ ] **Step 5: Commit**

```
git add materia.html js/materia.js
git rm js/home.js
git commit -m "$(cat <<'EOF'
feat(materia): nueva home de materia activa en materia.html

materia.html lee ?subject=<id> y renderiza las secciones agrupadas por
unidad. Reemplaza a home.js, que se borra. Quiz/flashcards badges son
condicionales según si la sección los define.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 6 — Reescribir `index.html` como selector + crear `js/inicio.js`

**Files:**
- Modify: `index.html`
- Create: `js/inicio.js`

- [ ] **Step 1: Reescribir `index.html`**

Reemplazar el archivo entero por:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Apuntes — Universidad de Palermo</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="css/extra.css" />
</head>
<body>
  <main class="max-w-5xl mx-auto px-4 py-6">
    <header class="mb-8">
      <h1 class="text-3xl md:text-4xl font-semibold">Apuntes</h1>
      <p class="text-[var(--muted)] mt-1">Material de estudio por materia</p>
    </header>
    <section id="subjects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- cards de materias inyectadas por inicio.js -->
    </section>
  </main>
  <script type="module" src="js/inicio.js"></script>
</body>
</html>
```

- [ ] **Step 2: Crear `js/inicio.js`**

```js
import { renderNav } from './nav.js';
import { SUBJECTS } from './content.js';

renderNav({ active: 'inicio', subject: null });

function subjectCard(subject) {
  const totalSections = subject.sections.length;
  const totalUnits = Object.keys(subject.units || {}).length;
  const unitsBadge = totalUnits > 0
    ? `${totalUnits} unidad${totalUnits === 1 ? '' : 'es'} · `
    : '';
  const meta = `${unitsBadge}${totalSections} secci${totalSections === 1 ? 'ón' : 'ones'}`;

  return `
    <a href="materia.html?subject=${subject.id}" class="surface-card block p-5 transition-shadow">
      <h2 class="text-xl font-semibold">${subject.title}</h2>
      <p class="text-sm text-[var(--muted)] mt-1">${subject.subtitle || ''}</p>
      ${subject.tagline ? `<p class="text-sm mt-3">${subject.tagline}</p>` : ''}
      <p class="text-xs text-[var(--muted)] mt-4">${meta}</p>
    </a>
  `;
}

document.getElementById('subjects-grid').innerHTML =
  SUBJECTS.map(subjectCard).join('');
```

- [ ] **Step 3: Smoke test**

Abrir `http://localhost:8000/`. Esperado:
- Header "Apuntes" + subtítulo.
- Nav top: solo "Apuntes".
- Una card de materia: "Administración de Proyectos" → click va a `materia.html?subject=sistemas-y-metodos` (que ya anda de Task 5).
- Meta: "2 unidades · 11 secciones".

- [ ] **Step 4: Commit**

```
git add index.html js/inicio.js
git commit -m "$(cat <<'EOF'
feat(inicio): index.html como selector de materias

La home raíz lista las materias disponibles desde SUBJECTS. Click en una
card lleva a materia.html?subject=<id>. Por ahora solo Sistemas y
Métodos; Análisis Matemático se suma en una tarea posterior.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 7 — Adaptar `js/seccion.js` al subject + compat de URLs legacy

**Files:**
- Modify: `js/seccion.js`

Tres cambios:
1. Leer `?subject=` + `?id=`. Si falta subject pero hay id → redirigir a `?subject=sistemas-y-metodos&id=<X>` (compat de bookmarks viejos).
2. Pasar subject al nav.
3. `markRead`, prev/next y links del bottom bar usan `subject.id`.

**Nota**: los nuevos blocks (`math`, `table`) y KaTeX entran en Task 11 y 12. Acá solo se hace el cableado del subject. Si la sección no tiene `quiz`/`flashcards`, los botones del bottom bar se ocultan.

- [ ] **Step 1: Reescribir `js/seccion.js`**

Reemplazar el archivo entero por:

```js
import { renderNav } from './nav.js';
import { getSubject, getCurrentSubject, getSection } from './content.js';
import { markRead } from './storage.js';

const params = new URLSearchParams(location.search);
const id = params.get('id');
const subjectParam = params.get('subject');

// Compat: URL legacy sin ?subject= → asumir sistemas-y-metodos
if (id && !subjectParam) {
  location.replace(`seccion.html?subject=sistemas-y-metodos&id=${encodeURIComponent(id)}`);
}

const subject = getCurrentSubject();
if (!subject) {
  location.replace('index.html');
}

const section = getSection(subject.id, id);
if (!section) {
  location.replace(`materia.html?subject=${subject.id}`);
}

renderNav({ active: 'home', subject });

document.title = `${section.title} — ${subject.title}`;
renderSection(section);
markRead(subject.id, section.id);

function renderSection(s) {
  // Header
  const unitLabel = s.unit ? `Unidad ${s.unit} · ` : '';
  document.getElementById('section-header').innerHTML = `
    <p class="text-sm text-[var(--muted)]">${unitLabel}Sección ${s.id}</p>
    <h1 class="text-2xl md:text-3xl font-semibold mt-1">${s.title}</h1>
  `;

  // Criollo principal (opcional)
  const criolloEl = document.getElementById('section-criollo');
  if (s.criollo) {
    criolloEl.innerHTML = `
      <div class="criollo-callout">
        <p class="text-xs font-semibold text-[var(--muted)] uppercase tracking-wide mb-1">En criollo</p>
        <p>${s.criollo}</p>
      </div>
    `;
  } else {
    criolloEl.innerHTML = '';
  }

  // Blocks
  const article = document.getElementById('section-content');
  article.innerHTML = s.blocks.map(renderBlock).join('');

  // Toggles de criollo
  article.querySelectorAll('[data-criollo-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const open = body.classList.toggle('hidden');
      btn.querySelector('[data-arrow]').textContent = open ? '▸' : '▾';
    });
  });

  // Lightbox
  article.querySelectorAll('img[data-lightbox]').forEach((img) => {
    img.addEventListener('click', () => window.openLightbox?.(img.src, img.alt));
  });

  // Nav entre secciones (dentro del mismo subject)
  const list = subject.sections;
  const idx = list.findIndex((x) => x.id === s.id);
  const prev = idx > 0 ? list[idx - 1] : null;
  const next = idx < list.length - 1 ? list[idx + 1] : null;
  const linkTo = (sec) => `seccion.html?subject=${subject.id}&id=${sec.id}`;
  document.getElementById('section-nav').innerHTML = `
    ${prev ? `<a href="${linkTo(prev)}" class="text-[var(--accent)]">← Sección ${prev.id}</a>` : '<span></span>'}
    ${next ? `<a href="${linkTo(next)}" class="text-[var(--accent)]">Sección ${next.id} →</a>` : '<span></span>'}
  `;

  // Bottom bar: quiz + flashcards condicional
  const bottomBar = document.getElementById('bottom-bar');
  const buttons = [];
  if (s.quiz) {
    buttons.push(`
      <a href="quiz.html?subject=${subject.id}&id=${s.id}"
         class="touch-target inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] bg-[var(--accent)] text-white font-medium">
        Hacer quiz
      </a>
    `);
  }
  if (s.flashcards) {
    buttons.push(`
      <a href="flashcards.html?subject=${subject.id}&id=${s.id}"
         class="touch-target inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)] text-[var(--text)] font-medium">
        Flashcards
      </a>
    `);
  }
  if (buttons.length === 0) {
    bottomBar.remove();
    document.body.classList.remove('has-bottom-bar');
    // Si el grid del bottom bar era col-2, reajustar para que no haya gap visual.
  } else {
    bottomBar.className = bottomBar.className
      .replace(/grid-cols-\d+/, `grid-cols-${buttons.length}`);
    bottomBar.innerHTML = buttons.join('');
  }
}

function renderBlock(b) {
  switch (b.type) {
    case 'h3': {
      const criollo = b.criollo
        ? `
          <button type="button"
                  data-criollo-toggle
                  class="mt-1 inline-flex items-center gap-1 text-xs text-[var(--muted)] hover:text-[var(--text)]">
            <span data-arrow>▾</span> En criollo
          </button>
          <div class="criollo-callout mt-2 hidden">
            <p>${b.criollo}</p>
          </div>
        `
        : '';
      return `
        <section class="mt-6">
          <h3 class="text-xl">${b.text}</h3>
          ${criollo}
        </section>
      `;
    }
    case 'p':
      return `<p>${b.text}</p>`;
    case 'ul':
      return `<ul class="list-disc pl-6 space-y-1">${b.items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
    case 'ol':
      return `<ol class="list-decimal pl-6 space-y-1">${b.items.map((i) => `<li>${i}</li>`).join('')}</ol>`;
    case 'callout': {
      const cls = b.tone === 'warning' ? 'warn-callout' : b.tone === 'criollo' ? 'criollo-callout' : 'info-callout';
      return `<div class="${cls}"><p>${b.text}</p></div>`;
    }
    case 'figure':
      return `
        <figure class="my-6">
          <img src="${b.src}" alt="${b.alt}" loading="lazy"
               data-lightbox
               class="w-full rounded-[var(--radius)] border border-[var(--border)] cursor-zoom-in" />
          <figcaption class="text-sm text-[var(--muted)] mt-2 text-center">${b.caption}</figcaption>
        </figure>
      `;
    // math y table se renderizan en Task 11/12 (acá devolvemos string vacío para
    // que la app no se rompa si aparecen antes de tiempo).
    case 'math':
    case 'table':
      return '';
    default:
      return '';
  }
}
```

- [ ] **Step 2: Smoke test**

1. Desde la home raíz → click en "Administración de Proyectos" → click en cualquier sección. URL: `seccion.html?subject=sistemas-y-metodos&id=1`. La página debe mostrarse igual que antes con el nav nuevo.
2. URL legacy: abrir directo `http://localhost:8000/seccion.html?id=3`. Debe redirigir a `seccion.html?subject=sistemas-y-metodos&id=3` automáticamente y cargarse.
3. URL invalida: `seccion.html?subject=foo&id=1` → redirige a `index.html`.
4. URL valid subject sin section: `seccion.html?subject=sistemas-y-metodos&id=999` → redirige a `materia.html?subject=sistemas-y-metodos`.
5. Botones del bottom bar siguen apareciendo (la sección tiene quiz y flashcards). Click → URLs nuevas con `?subject=`.
6. Navegación prev/next entre secciones funciona dentro del subject.

- [ ] **Step 3: Commit**

```
git add js/seccion.js
git commit -m "$(cat <<'EOF'
refactor(seccion): leer ?subject= y mantener compat de URLs viejas

seccion.js ahora resuelve la materia activa y la sección desde su subject.
markRead, prev/next y los botones del bottom bar incluyen ?subject=<id>.
Si la URL llega sin ?subject= pero con ?id=, se asume sistemas-y-metodos
y se redirige a la URL canónica.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 8 — Adaptar `js/quiz.js` al subject + compat legacy

**Files:**
- Modify: `js/quiz.js`

- [ ] **Step 1: Reescribir `js/quiz.js`**

Reemplazar el archivo entero por:

```js
import { renderNav } from './nav.js';
import { getCurrentSubject, getSection } from './content.js';
import { saveQuizScore } from './storage.js';

const params = new URLSearchParams(location.search);
const id = params.get('id');
const subjectParam = params.get('subject');

// Compat URL legacy
if (id && !subjectParam) {
  location.replace(`quiz.html?subject=sistemas-y-metodos&id=${encodeURIComponent(id)}`);
}

const subject = getCurrentSubject();
if (!subject) {
  location.replace('index.html');
}

const section = getSection(subject.id, id);
if (!section) {
  location.replace(`materia.html?subject=${subject.id}`);
}
if (!section.quiz) {
  location.replace(`seccion.html?subject=${subject.id}&id=${section.id}`);
}

renderNav({ active: 'home', subject });

const questions = [
  ...section.quiz.tf.map((q) => ({ ...q, kind: 'tf' })),
  ...section.quiz.mc.map((q) => ({ ...q, kind: 'mc' })),
];

let current = 0;
let correct = 0;
const wrongAnswers = [];

document.title = `Quiz: ${section.title}`;
document.getElementById('quiz-header').innerHTML = `
  <a href="seccion.html?subject=${subject.id}&id=${section.id}" class="text-sm text-[var(--muted)] hover:text-[var(--text)]">← Volver a la sección</a>
  <h1 class="text-2xl mt-2">Quiz — Sección ${section.id}</h1>
  <p class="text-sm text-[var(--muted)] mt-1" id="progress-text"></p>
  <div class="w-full bg-[var(--border)] rounded-full h-1.5 mt-2">
    <div id="progress-bar" class="bg-[var(--accent)] h-1.5 rounded-full transition-all" style="width: 0%"></div>
  </div>
`;

if (questions.length === 0) {
  document.getElementById('quiz-body').innerHTML = `
    <div class="info-callout mt-6"><p>Esta sección aún no tiene preguntas cargadas.</p></div>
  `;
} else {
  renderQuestion();
}

function renderQuestion() {
  const q = questions[current];
  document.getElementById('progress-text').textContent = `Pregunta ${current + 1} de ${questions.length}`;
  document.getElementById('progress-bar').style.width = `${(current / questions.length) * 100}%`;

  const opts = q.kind === 'tf'
    ? [{ text: 'Verdadero', value: true }, { text: 'Falso', value: false }]
    : q.options.map((text, i) => ({ text, value: i }));

  document.getElementById('quiz-body').innerHTML = `
    <div class="surface-card p-5 mt-4">
      <p class="font-medium mb-4">${q.q}</p>
      <div id="options" class="space-y-2"></div>
      <div id="explanation" class="hidden mt-4 info-callout"></div>
    </div>
  `;
  const optsContainer = document.getElementById('options');
  optsContainer.innerHTML = opts
    .map((o, i) => `
      <button data-idx="${i}"
              class="touch-target w-full text-left px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)] hover:bg-[var(--surface-2)] transition-colors">
        ${o.text}
      </button>
    `).join('');

  optsContainer.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => handleAnswer(btn, opts, q));
  });

  document.getElementById('quiz-bottom').innerHTML = `
    <button id="next-btn"
            class="touch-target w-full px-4 py-3 rounded-[var(--radius)] bg-[var(--accent)] text-white font-medium disabled:opacity-40"
            disabled>Siguiente</button>
  `;
  document.getElementById('next-btn').addEventListener('click', advance);
}

function handleAnswer(btn, opts, q) {
  const chosen = opts[Number(btn.dataset.idx)].value;
  const correctValue = q.kind === 'tf' ? q.a : q.correctIndex;
  const isCorrect = chosen === correctValue;

  document.querySelectorAll('#options button').forEach((b) => (b.disabled = true));
  btn.classList.add(isCorrect ? 'option-correct' : 'option-wrong');

  if (!isCorrect) {
    const correctIdx = opts.findIndex((o) => o.value === correctValue);
    document.querySelector(`#options button[data-idx="${correctIdx}"]`).classList.add('option-correct');
    wrongAnswers.push({ question: q, chosenText: opts[Number(btn.dataset.idx)].text });
  } else {
    correct++;
  }

  const exp = document.getElementById('explanation');
  exp.innerHTML = `<p>${q.explain}</p>`;
  exp.classList.remove('hidden');
  document.getElementById('next-btn').disabled = false;
}

function advance() {
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    renderSummary();
  }
}

function renderSummary() {
  saveQuizScore(subject.id, section.id, { correct, total: questions.length });
  document.getElementById('quiz-body').classList.add('hidden');
  document.getElementById('quiz-bottom').innerHTML = '';
  const summary = document.getElementById('quiz-summary');
  summary.classList.remove('hidden');
  const pct = Math.round((correct / questions.length) * 100);
  const seccionLink = `seccion.html?subject=${subject.id}&id=${section.id}`;
  const quizLink = `quiz.html?subject=${subject.id}&id=${section.id}`;
  const fcLink = `flashcards.html?subject=${subject.id}&id=${section.id}`;
  summary.innerHTML = `
    <div class="surface-card p-6 mt-6 text-center">
      <p class="text-sm text-[var(--muted)]">Resultado</p>
      <p class="text-4xl font-semibold mt-2">${correct}/${questions.length}</p>
      <p class="text-[var(--muted)] mt-1">${pct}% correctas</p>
    </div>
    ${wrongAnswers.length > 0 ? `
      <div class="mt-6">
        <h2 class="text-lg font-semibold mb-3">Preguntas erradas</h2>
        <div class="space-y-3">
          ${wrongAnswers.map((w) => `
            <div class="surface-card p-4">
              <p class="font-medium mb-1">${w.question.q}</p>
              <p class="text-sm text-[var(--error)]">Elegiste: ${w.chosenText}</p>
              <p class="text-sm mt-2 text-[var(--muted)]">${w.question.explain}</p>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
    <div class="flex flex-col md:flex-row gap-3 mt-8">
      <a href="${quizLink}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] bg-[var(--accent)] text-white">Reintentar</a>
      <a href="${fcLink}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)]">Flashcards</a>
      <a href="${seccionLink}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)]">Volver a la sección</a>
    </div>
  `;
}
```

- [ ] **Step 2: Smoke test**

1. Desde una sección con quiz → "Hacer quiz" → completar el quiz → ver score. Verificar en DevTools → Local Storage → `study-app-state` que `subjects['sistemas-y-metodos'].sections.<id>.lastQuizScore` se actualizó.
2. URL legacy: `quiz.html?id=1` → redirige a `quiz.html?subject=sistemas-y-metodos&id=1` y arranca el quiz.
3. URL inválida (subject correcto, id que no existe): `quiz.html?subject=sistemas-y-metodos&id=999` → redirige a `materia.html?subject=sistemas-y-metodos`.

- [ ] **Step 3: Commit**

```
git add js/quiz.js
git commit -m "$(cat <<'EOF'
refactor(quiz): leer ?subject= y guardar score por (subject, section)

saveQuizScore recibe subject.id como primer argumento. Compat de URLs
viejas: ?id= sin ?subject= redirige asumiendo sistemas-y-metodos.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 9 — Adaptar `js/flashcards.js` al subject + compat legacy

**Files:**
- Modify: `js/flashcards.js`

- [ ] **Step 1: Reescribir `js/flashcards.js`**

Reemplazar el archivo entero por:

```js
import { renderNav } from './nav.js';
import { getCurrentSubject, getSection } from './content.js';
import { markFlashcard } from './storage.js';

const params = new URLSearchParams(location.search);
const id = params.get('id');
const subjectParam = params.get('subject');

if (id && !subjectParam) {
  location.replace(`flashcards.html?subject=sistemas-y-metodos&id=${encodeURIComponent(id)}`);
}

const subject = getCurrentSubject();
if (!subject) {
  location.replace('index.html');
}

const section = getSection(subject.id, id);
if (!section) {
  location.replace(`materia.html?subject=${subject.id}`);
}
if (!section.flashcards) {
  location.replace(`seccion.html?subject=${subject.id}&id=${section.id}`);
}

renderNav({ active: 'home', subject });

document.title = `Flashcards: ${section.title}`;
document.getElementById('fc-header').innerHTML = `
  <a href="seccion.html?subject=${subject.id}&id=${section.id}" class="text-sm text-[var(--muted)] hover:text-[var(--text)]">← Volver a la sección</a>
  <h1 class="text-2xl mt-2">Flashcards — Sección ${section.id}</h1>
  <p id="fc-progress" class="text-sm text-[var(--muted)] mt-1"></p>
`;

let queue = [...section.flashcards];
let total = queue.length;
let knownThisSession = 0;
let flipped = false;

if (total === 0) {
  document.getElementById('fc-stage').innerHTML = `
    <div class="info-callout w-full"><p>Esta sección aún no tiene flashcards cargadas.</p></div>
  `;
} else {
  renderCard();
  document.getElementById('fc-bottom').innerHTML = `
    <button id="repaso-btn"
            class="touch-target px-4 py-4 rounded-[var(--radius)] border border-[var(--border-strong)] font-medium">↻ Repasar</button>
    <button id="sabia-btn"
            class="touch-target px-4 py-4 rounded-[var(--radius)] bg-[var(--ok)] text-white font-medium">✓ La sabía</button>
  `;
  document.getElementById('repaso-btn').addEventListener('click', () => answer(false));
  document.getElementById('sabia-btn').addEventListener('click', () => answer(true));
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      flipCurrent();
    }
  });
}

function renderCard() {
  flipped = false;
  document.getElementById('fc-progress').textContent =
    `Quedan ${queue.length} · ${knownThisSession} sabidas`;
  const card = queue[0];
  document.getElementById('fc-stage').innerHTML = `
    <div id="flashcard" class="flashcard w-full h-72 cursor-pointer">
      <div class="flashcard-inner h-full">
        <div class="flashcard-face surface-card">
          <p class="text-xl font-medium">${card.front}</p>
        </div>
        <div class="flashcard-face flashcard-back surface-card">
          <p class="text-base">${card.back}</p>
        </div>
      </div>
    </div>
    <p class="text-xs text-[var(--muted)] text-center mt-3">Tocá la tarjeta para dar vuelta</p>
  `;
  document.getElementById('flashcard').addEventListener('click', flipCurrent);
}

function flipCurrent() {
  flipped = !flipped;
  document.getElementById('flashcard').classList.toggle('is-flipped', flipped);
}

function answer(known) {
  const card = queue.shift();
  if (known) {
    knownThisSession++;
    markFlashcard(subject.id, section.id, card.id, true);
  } else {
    queue.push(card);
  }
  if (queue.length === 0) {
    renderSummary();
  } else {
    renderCard();
  }
}

function renderSummary() {
  document.getElementById('fc-stage').classList.add('hidden');
  document.getElementById('fc-bottom').innerHTML = '';
  const s = document.getElementById('fc-summary');
  s.classList.remove('hidden');
  const seccionLink = `seccion.html?subject=${subject.id}&id=${section.id}`;
  const quizLink = `quiz.html?subject=${subject.id}&id=${section.id}`;
  const fcLink = `flashcards.html?subject=${subject.id}&id=${section.id}`;
  s.innerHTML = `
    <div class="surface-card p-6 mt-6 text-center">
      <p class="text-sm text-[var(--muted)]">Resultado de esta sesión</p>
      <p class="text-4xl font-semibold mt-2">${knownThisSession}/${total}</p>
      <p class="text-[var(--muted)] mt-1">marcadas como sabidas</p>
    </div>
    <div class="flex flex-col md:flex-row gap-3 mt-8">
      <a href="${fcLink}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] bg-[var(--accent)] text-white">Reiniciar</a>
      <a href="${quizLink}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)]">Hacer quiz</a>
      <a href="${seccionLink}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)]">Volver a la sección</a>
    </div>
  `;
}
```

- [ ] **Step 2: Smoke test**

1. Desde una sección con flashcards → "Flashcards" → flipear, marcar "La sabía" en una flashcard, refrescar la sección → la card aparece como sabida en `getSectionState` (DevTools → Local Storage).
2. URL legacy: `flashcards.html?id=1` → redirige.

- [ ] **Step 3: Commit**

```
git add js/flashcards.js
git commit -m "$(cat <<'EOF'
refactor(flashcards): leer ?subject= y marcar fc por (subject, section)

markFlashcard recibe subject.id como primer argumento. Compat de URLs
viejas idem quiz: redirige a sistemas-y-metodos si falta ?subject=.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 10 — Adaptar `js/pdfs.js` al subject + compat legacy

**Files:**
- Modify: `js/pdfs.js`

- [ ] **Step 1: Reescribir `js/pdfs.js`**

Reemplazar el archivo entero por:

```js
import { renderNav } from './nav.js';
import { getCurrentSubject } from './content.js';
import * as pdfjs from 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.min.mjs';

const params = new URLSearchParams(location.search);
const subjectParam = params.get('subject');
const docParam = params.get('doc');

// Compat: ?doc=... sin ?subject= → asumir sistemas-y-metodos
if (!subjectParam) {
  const extra = docParam ? `&doc=${encodeURIComponent(docParam)}` : '';
  location.replace(`pdfs.html?subject=sistemas-y-metodos${extra}`);
}

const subject = getCurrentSubject();
if (!subject) {
  location.replace('index.html');
}
if (!subject.pdfs || subject.pdfs.length === 0) {
  location.replace(`materia.html?subject=${subject.id}`);
}

renderNav({ active: 'pdfs', subject });

pdfjs.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.mjs';

const DOCS = subject.pdfs;
let activeKey = DOCS.some((d) => d.key === docParam) ? docParam : DOCS[0].key;
let pdfDoc = null;
let currentPage = 1;
let scale = 1.2;

const canvas = document.getElementById('pdf-canvas');
const ctx = canvas.getContext('2d');

renderTabs();
loadDoc(activeKey);

document.getElementById('prev').onclick = goPrev;
document.getElementById('next').onclick = goNext;
document.getElementById('zoom-out').onclick = () => zoom(-0.2);
document.getElementById('zoom-in').onclick = () => zoom(0.2);
document.getElementById('prev-m').onclick = goPrev;
document.getElementById('next-m').onclick = goNext;
document.getElementById('zoom-out-m').onclick = () => zoom(-0.2);
document.getElementById('zoom-in-m').onclick = () => zoom(0.2);

function tabHref(d) {
  return `pdfs.html?subject=${subject.id}&doc=${d.key}`;
}

function renderTabs() {
  const tabHtml = (d) => `
    <a href="${tabHref(d)}"
       class="touch-target inline-flex items-center justify-center px-3 py-2 rounded-[var(--radius-sm)] text-sm whitespace-nowrap
              ${d.key === activeKey
                ? 'bg-[var(--accent)] text-white'
                : 'border border-[var(--border-strong)] text-[var(--text)] hover:bg-[var(--surface-2)]'}">
      ${d.label}
    </a>
  `;
  document.getElementById('tabs').innerHTML = DOCS.map(tabHtml).join('');
  document.getElementById('tabs-desktop').innerHTML = DOCS.map((d) => `
    <a href="${tabHref(d)}"
       class="touch-target block px-3 py-2 rounded-[var(--radius-sm)] text-sm
              ${d.key === activeKey
                ? 'bg-[var(--accent)] text-white'
                : 'hover:bg-[var(--surface-2)] text-[var(--text)]'}">
      ${d.label}
    </a>
  `).join('');

  const doc = DOCS.find((d) => d.key === activeKey);
  document.getElementById('open-original-d').href = doc.path;
  document.getElementById('open-original-m').href = doc.path;
}

async function loadDoc(key) {
  const doc = DOCS.find((d) => d.key === key);
  setStatus('Cargando PDF…');
  try {
    pdfDoc = await pdfjs.getDocument(doc.path).promise;
    currentPage = 1;
    setStatus('');
    await renderPage();
  } catch (err) {
    console.error(err);
    setStatus('No se pudo cargar el PDF. Probá "Abrir original".');
  }
}

async function renderPage() {
  if (!pdfDoc) return;
  const page = await pdfDoc.getPage(currentPage);
  const viewport = page.getViewport({ scale });
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  await page.render({ canvasContext: ctx, viewport }).promise;
  updatePageInfo();
}

function updatePageInfo() {
  const text = `Página ${currentPage} de ${pdfDoc?.numPages ?? '?'}`;
  document.getElementById('page-info').textContent = text;
  document.getElementById('page-info-m').textContent = text;
}

function goPrev() {
  if (!pdfDoc || currentPage <= 1) return;
  currentPage--;
  renderPage();
}

function goNext() {
  if (!pdfDoc || currentPage >= pdfDoc.numPages) return;
  currentPage++;
  renderPage();
}

function zoom(delta) {
  scale = Math.max(0.5, Math.min(3, scale + delta));
  renderPage();
}

function setStatus(msg) {
  document.getElementById('status').textContent = msg;
}
```

- [ ] **Step 2: Smoke test**

1. Desde la materia → "Ver PDFs" → cargar los 3 PDFs alternando tabs. Las URLs de los tabs incluyen `?subject=sistemas-y-metodos`.
2. URL legacy: `pdfs.html?doc=consideraciones` → redirige a `pdfs.html?subject=sistemas-y-metodos&doc=consideraciones` y abre el PDF correcto.
3. `pdfs.html` sin parámetros → redirige a `pdfs.html?subject=sistemas-y-metodos` y abre el default (fundamentos).

- [ ] **Step 3: Commit**

```
git add js/pdfs.js
git commit -m "$(cat <<'EOF'
refactor(pdfs): cargar PDFs desde subject.pdfs

El array DOCS deja de ser hardcodeado y se toma de la materia activa.
Si la materia no tiene PDFs, se redirige a su home. Compat de URLs
viejas idem el resto de las páginas.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 11 — Helper `js/katex-init.js` + cargar KaTeX en `seccion.html`

**Files:**
- Create: `js/katex-init.js`
- Modify: `seccion.html`

KaTeX se carga solo en la página que necesita render de fórmulas. Por ahora solo `seccion.html`. `materia.html` no lo necesita (la home no muestra fórmulas).

- [ ] **Step 1: Crear `js/katex-init.js`**

```js
/**
 * Renderiza fórmulas KaTeX dentro de un contenedor.
 * Espera que el HTML del head haya cargado:
 *   - katex.min.css
 *   - katex.min.js
 *   - contrib/auto-render.min.js
 *
 * Si KaTeX no cargó (ej: CDN caído), no rompe nada: el LaTeX queda crudo.
 */

export function renderMath(rootEl) {
  if (typeof window.renderMathInElement !== 'function') return;
  window.renderMathInElement(rootEl, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$',  right: '$',  display: false },
    ],
    throwOnError: false,
  });
}
```

- [ ] **Step 2: Agregar KaTeX al `<head>` de `seccion.html`**

Editar `seccion.html` y reemplazar el bloque `<head>` por:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sección — Apuntes</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="css/extra.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+" crossorigin="anonymous" />
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" integrity="sha384-7zkQWkzuo3B5mTepMUcHkMB5jZaolc2xDwL6VFqjFALcbeS9Ggm/Yr2r3Dy4lfFg" crossorigin="anonymous"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" integrity="sha384-43gviWU0YVjaDtb/GhzOouOXtZMP/7XUzwPTstBeZFe/+rCMvRwr4yROQP43s0Xk" crossorigin="anonymous"></script>
</head>
```

> **Nota**: los hashes integrity son de KaTeX 0.16.11. Si KaTeX cambia de versión, hay que regenerarlos. Para 0.16.11 son los oficiales de la doc de KaTeX. Si en el smoke test ves errores de SRI en consola, eliminar los atributos `integrity` y `crossorigin` y volver a probar.

- [ ] **Step 3: Smoke test**

1. Hard refresh `seccion.html?subject=sistemas-y-metodos&id=1`. En la pestaña Network del DevTools verificar que `katex.min.css`, `katex.min.js` y `auto-render.min.js` cargan con status 200.
2. En Console: `typeof renderMathInElement` debería ser `"function"` cuando todos los scripts terminen de cargar (los `defer` significan que pueden tardar un instante).
3. La página renderiza igual que antes (no hay fórmulas todavía, así que ningún cambio visible).

- [ ] **Step 4: Commit**

```
git add js/katex-init.js seccion.html
git commit -m "$(cat <<'EOF'
feat(katex): cargar KaTeX por CDN en seccion.html

Sumamos KaTeX (CSS + JS + auto-render) al head de seccion.html y un
helper renderMath(rootEl) en js/katex-init.js para que seccion.js lo
invoque una vez inyectado el contenido. KaTeX solo se carga en páginas
que renderizan fórmulas.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 12 — Renderizar nuevos blocks `math` y `table` en `seccion.js` + estilos

**Files:**
- Modify: `js/seccion.js`
- Modify: `css/extra.css`

- [ ] **Step 1: Modificar `js/seccion.js` para renderizar `math` y `table` + invocar KaTeX**

Editar `js/seccion.js`:

1. Agregar import al top del archivo:
   ```js
   import { renderMath } from './katex-init.js';
   ```
2. Reemplazar el `switch` dentro de `renderBlock(b)`: agregar los casos `math` y `table` (los stubs que devolvían `''` se eliminan). El switch debe quedar así (NO cambiar los otros casos):

   ```js
   function renderBlock(b) {
     switch (b.type) {
       case 'h3': {
         const criollo = b.criollo
           ? `
             <button type="button"
                     data-criollo-toggle
                     class="mt-1 inline-flex items-center gap-1 text-xs text-[var(--muted)] hover:text-[var(--text)]">
               <span data-arrow>▾</span> En criollo
             </button>
             <div class="criollo-callout mt-2 hidden">
               <p>${b.criollo}</p>
             </div>
           `
           : '';
         return `
           <section class="mt-6">
             <h3 class="text-xl">${b.text}</h3>
             ${criollo}
           </section>
         `;
       }
       case 'p':
         return `<p>${b.text}</p>`;
       case 'ul':
         return `<ul class="list-disc pl-6 space-y-1">${b.items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
       case 'ol':
         return `<ol class="list-decimal pl-6 space-y-1">${b.items.map((i) => `<li>${i}</li>`).join('')}</ol>`;
       case 'callout': {
         const cls = b.tone === 'warning' ? 'warn-callout' : b.tone === 'criollo' ? 'criollo-callout' : 'info-callout';
         return `<div class="${cls}"><p>${b.text}</p></div>`;
       }
       case 'figure':
         return `
           <figure class="my-6">
             <img src="${b.src}" alt="${b.alt}" loading="lazy"
                  data-lightbox
                  class="w-full rounded-[var(--radius)] border border-[var(--border)] cursor-zoom-in" />
             <figcaption class="text-sm text-[var(--muted)] mt-2 text-center">${b.caption}</figcaption>
           </figure>
         `;
       case 'math': {
         const display = b.display ? '$$' : '$';
         const cls = b.display ? 'math-display' : 'math-inline';
         return `<div class="${cls}">${display}${b.latex}${display}</div>`;
       }
       case 'table': {
         const caption = b.caption ? `<caption>${b.caption}</caption>` : '';
         const headers = b.headers.map((h) => `<th>${h}</th>`).join('');
         const rows = b.rows.map((row) => `
           <tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>
         `).join('');
         return `
           <div class="table-wrap">
             <table class="content-table">
               ${caption}
               <thead><tr>${headers}</tr></thead>
               <tbody>${rows}</tbody>
             </table>
           </div>
         `;
       }
       default:
         return '';
     }
   }
   ```

3. **Al final de `renderSection(s)`** (justo antes del cierre `}` de la función), agregar:
   ```js
   // Render KaTeX en todo el contenido inyectado (incluye p/ul/ol/callout/table/math)
   // Esperar a que KaTeX cargue (los scripts son `defer`).
   if (typeof window.renderMathInElement === 'function') {
     renderMath(article);
   } else {
     // Si todavía no cargó, esperar a 'load' una sola vez.
     window.addEventListener('load', () => renderMath(article), { once: true });
   }
   ```

   Insertarlo después del bloque que renderiza el `bottom-bar`. Si el orden no es claro, queda al final de `renderSection`, antes del cierre.

- [ ] **Step 2: Agregar estilos a `css/extra.css`**

Agregar al **final** de `css/extra.css` (sin modificar nada existente):

```css
/* === Tablas de contenido (block 'table') === */
.table-wrap {
  overflow-x: auto;
  margin: 1.5rem 0;
}
.content-table {
  width: 100%;
  border-collapse: collapse;
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
  padding: 0 0.25rem;
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
.content-table tbody tr:last-child td { border-bottom: none; }
.content-table .katex { font-size: inherit; }

/* === Fórmulas KaTeX === */
.math-display {
  display: block;
  text-align: center;
  margin: 1.25rem 0;
  overflow-x: auto;
}
.math-inline { display: inline; }
```

- [ ] **Step 3: Smoke test temporal**

Para verificar el render sin tener todavía Análisis Matemático, agregar **temporalmente** dos blocks a la primera sección de Sistemas y Métodos. En `js/subjects/sistemas-y-metodos.js`, dentro de `sections[0].blocks` agregar al final del array (antes del cierre `]`):

```js
{ type: 'math', latex: 'f(x) = \\int_a^b g(t)\\,dt', display: true },
{ type: 'table', caption: 'Demo', headers: ['Símbolo', 'Significado'], rows: [
  ['$\\alpha$', 'Alfa'],
  ['$\\beta$', 'Beta'],
] },
```

Abrir `seccion.html?subject=sistemas-y-metodos&id=1`. Esperado:
- Fórmula display centrada y grande con la integral.
- Tabla con caption "Demo", dos columnas, los símbolos griegos renderizados con KaTeX.
- LaTeX inline en las celdas se ve como letras griegas, no como `$\alpha$`.

**Revertir los dos blocks temporales** después del smoke test (no commitearlos): borrar las dos líneas agregadas.

- [ ] **Step 4: Commit**

```
git add js/seccion.js css/extra.css
git commit -m "$(cat <<'EOF'
feat(seccion): render de blocks math y table con KaTeX

seccion.js soporta dos blocks nuevos: 'math' (LaTeX display o inline) y
'table' (con caption, headers y rows con LaTeX en celdas). Después de
inyectar los blocks se corre renderMathInElement de KaTeX para procesar
los delimitadores \$...\$ y \$\$...\$\$.

Estilos para .content-table y .math-display en css/extra.css.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 13 — Crear `js/subjects/analisis-matematico.js` con las 3 secciones

**Files:**
- Create: `js/subjects/analisis-matematico.js`

Esta task se commitea en TRES commits (uno por sección) para mantener diffs reviewables.

### 13.A — Esqueleto + Sección 1 (Tabla de derivadas)

- [ ] **Step 1: Crear `js/subjects/analisis-matematico.js` con la sección 1**

```js
/**
 * Materia: Análisis Matemático.
 * Unidad 'derivadas' — tabla de derivadas, reglas y derivabilidad.
 *
 * Las fórmulas se escriben en LaTeX entre $...$ (inline) o $$...$$ (display).
 * Render por KaTeX (cargado en seccion.html).
 */

export default {
  id: 'analisis-matematico',
  title: 'Análisis Matemático',
  subtitle: 'Apuntes y fórmulas',
  tagline: 'Derivadas — tabla, reglas y derivabilidad',
  units: { 'derivadas': 'Derivadas' },
  sections: [
    {
      id: '1',
      unit: 'derivadas',
      title: 'Tabla de derivadas',
      criollo: 'Las derivadas básicas que más vas a usar. Memorizalas — son los ladrillos de todo lo demás.',
      blocks: [
        {
          type: 'p',
          text: 'La derivada de una función mide la tasa de cambio instantánea. Estas son las derivadas elementales que aparecen una y otra vez. Si tu función es una de estas exactamente, listo. Si es una combinación, mirá la sección de reglas.',
        },
        {
          type: 'table',
          caption: 'Derivadas elementales',
          headers: ['f(x)', "f'(x)"],
          rows: [
            ['$c$ (constante)', '$0$'],
            ['$x$', '$1$'],
            ['$x^n$', '$n \\cdot x^{n-1}$'],
            ['$e^x$', '$e^x$'],
            ['$a^x$', '$a^x \\cdot \\ln a$'],
            ['$\\ln x$', '$\\dfrac{1}{x}$'],
            ['$\\log_a x$', '$\\dfrac{1}{x \\ln a}$'],
            ['$\\sin x$', '$\\cos x$'],
            ['$\\cos x$', '$-\\sin x$'],
            ['$\\tan x$', '$\\sec^2 x$'],
            ['$\\cot x$', '$-\\csc^2 x$'],
            ['$\\sec x$', '$\\sec x \\cdot \\tan x$'],
            ['$\\csc x$', '$-\\csc x \\cdot \\cot x$'],
            ['$\\arcsin x$', '$\\dfrac{1}{\\sqrt{1-x^2}}$'],
            ['$\\arccos x$', '$-\\dfrac{1}{\\sqrt{1-x^2}}$'],
            ['$\\arctan x$', '$\\dfrac{1}{1+x^2}$'],
            ['$\\sinh x$', '$\\cosh x$'],
            ['$\\cosh x$', '$\\sinh x$'],
            ['$\\tanh x$', '$\\operatorname{sech}^2 x = 1 - \\tanh^2 x$'],
            ['$\\coth x$', '$-\\operatorname{csch}^2 x$'],
            ['$\\operatorname{sech} x$', '$-\\operatorname{sech} x \\cdot \\tanh x$'],
            ['$\\operatorname{csch} x$', '$-\\operatorname{csch} x \\cdot \\coth x$'],
          ],
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'Si tu función combina varias de estas (suma, producto, cociente o composición), no derives cada parte por separado a lo loco — hay reglas. Mirá la sección 2.',
        },
      ],
    },
  ],
  pdfs: [],
};
```

- [ ] **Step 2: Commit parcial de la Sección 1**

Para verificarla todavía no se puede (el subject no está registrado en content.js — eso es Task 14). Commiteamos igual el archivo aislado:

```
git add js/subjects/analisis-matematico.js
git commit -m "$(cat <<'EOF'
content(analisis): Sección 1 — Tabla de derivadas

Subject 'analisis-matematico' con la primera de tres secciones:
tabla de 22 derivadas elementales (básicas, exponenciales/logs,
trigonométricas + cot/sec/csc, inversas, hiperbólicas + coth/sech/csch).
Aún no está registrada en content.js.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

### 13.B — Sección 2 (Reglas de derivación)

- [ ] **Step 1: Agregar la Sección 2 al array `sections`**

Editar `js/subjects/analisis-matematico.js`. Justo antes del cierre `]` del array `sections`, después del cierre de la sección 1 (después de su `}`), agregar una coma y el siguiente objeto:

```js
    {
      id: '2',
      unit: 'derivadas',
      title: 'Reglas de derivación',
      criollo: 'Cuando la función no es una sola cosa sino una combinación, no derivás cada parte por separado: hay reglas concretas para suma, producto, cociente y composición. Estas cuatro cubren casi todo.',
      blocks: [
        {
          type: 'p',
          text: 'Las cuatro reglas que vas a usar todo el tiempo. Cada una con su fórmula y un ejemplo corto. Las podés combinar entre sí: una derivada con regla de la cadena por dentro y producto por fuera es perfectamente normal.',
        },

        {
          type: 'h3',
          text: 'Regla de la suma (y de la resta)',
          criollo: 'La derivada de una suma es la suma de las derivadas. Esto sí podés hacerlo por partes — para sumas y restas siempre funciona.',
        },
        { type: 'math', latex: '(f + g)\'(x) = f\'(x) + g\'(x)', display: true },
        {
          type: 'p',
          text: 'Ejemplo: si $f(x) = x^3 + \\sin x$, entonces $f\'(x) = 3x^2 + \\cos x$. Cada término se deriva por su lado y se suma.',
        },

        {
          type: 'h3',
          text: 'Regla del producto',
          criollo: 'No, la derivada de un producto NO es el producto de las derivadas. La fórmula es: derivada del primero por el segundo, más el primero por la derivada del segundo.',
        },
        { type: 'math', latex: '(f \\cdot g)\'(x) = f\'(x) \\cdot g(x) + f(x) \\cdot g\'(x)', display: true },
        {
          type: 'p',
          text: 'Ejemplo: si $f(x) = x^2 \\cdot \\sin x$, entonces $f\'(x) = 2x \\cdot \\sin x + x^2 \\cdot \\cos x$.',
        },

        {
          type: 'h3',
          text: 'Regla del cociente',
          criollo: 'Para una división: derivada del numerador por el denominador, menos el numerador por la derivada del denominador, todo dividido el denominador al cuadrado.',
        },
        { type: 'math', latex: '\\left(\\dfrac{f}{g}\\right)\'(x) = \\dfrac{f\'(x)\\,g(x) - f(x)\\,g\'(x)}{[g(x)]^2}', display: true },
        {
          type: 'p',
          text: 'Ejemplo: si $f(x) = \\dfrac{\\sin x}{x}$, entonces $f\'(x) = \\dfrac{\\cos x \\cdot x - \\sin x \\cdot 1}{x^2} = \\dfrac{x\\cos x - \\sin x}{x^2}$.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Solo válida si $g(x) \\ne 0$. En los puntos donde el denominador se anula, la función no está definida y por lo tanto no es derivable ahí.',
        },

        {
          type: 'h3',
          text: 'Regla de la cadena',
          criollo: 'Para una función compuesta (una función dentro de otra), derivás de afuera hacia adentro y multiplicás por la derivada de adentro. Si te equivocás en algo, casi siempre es acá.',
        },
        { type: 'math', latex: '(f \\circ g)\'(x) = f\'(g(x)) \\cdot g\'(x)', display: true },
        {
          type: 'p',
          text: 'Ejemplo: si $f(x) = \\sin(x^2)$, la "de afuera" es $\\sin$ y la "de adentro" es $x^2$. Derivás la de afuera dejando la de adentro intacta ($\\cos(x^2)$) y multiplicás por la derivada de la de adentro ($2x$). Resultado: $f\'(x) = \\cos(x^2) \\cdot 2x$.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Truco mental: leé la función "de afuera para adentro", derivá de afuera para adentro, y multiplicá cada paso por la derivada de la siguiente capa interna.',
        },
      ],
    },
```

- [ ] **Step 2: Commit**

```
git add js/subjects/analisis-matematico.js
git commit -m "$(cat <<'EOF'
content(analisis): Sección 2 — Reglas de derivación

Cuatro reglas (suma, producto, cociente, cadena) con su fórmula display,
criollo en el h3 y ejemplo trabajado. Callout en cociente sobre g(x)≠0
y truco mental para la cadena.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

### 13.C — Sección 3 (Derivabilidad)

- [ ] **Step 1: Agregar la Sección 3 al array `sections`**

En `js/subjects/analisis-matematico.js`, agregar una coma después del cierre `}` de la sección 2 y a continuación:

```js
    {
      id: '3',
      unit: 'derivadas',
      title: '¿Cuándo una función es derivable?',
      criollo: 'Para decir que $f$ es derivable en un punto no alcanza con que esté definida ahí. El límite del cociente incremental tiene que existir, y dar lo mismo por izquierda y por derecha. Si hay esquina, salto o tangente vertical, no es derivable.',
      blocks: [
        {
          type: 'p',
          text: 'La derivabilidad es una propiedad local: una función puede ser derivable en casi todos los puntos de su dominio salvo en uno. En ese punto se dice que tiene un "punto no derivable", no que la función entera no lo sea.',
        },

        { type: 'h3', text: 'Definición formal' },
        {
          type: 'p',
          text: 'Decimos que $f$ es derivable en $x = a$ cuando existe el siguiente límite y es finito:',
        },
        { type: 'math', latex: 'f\'(a) = \\lim_{h \\to 0} \\dfrac{f(a+h) - f(a)}{h}', display: true },
        {
          type: 'p',
          text: 'Para que esta derivada exista en $a$ tienen que cumplirse tres condiciones simultáneamente:',
        },
        {
          type: 'ol',
          items: [
            '$f$ está definida en $a$ — el punto pertenece al dominio.',
            '$f$ es continua en $a$ — si hay un salto, agujero o asíntota vertical, no hay derivada.',
            'El límite del cociente incremental existe y es finito, y los límites laterales coinciden: $\\lim_{h \\to 0^-} \\dfrac{f(a+h) - f(a)}{h} = \\lim_{h \\to 0^+} \\dfrac{f(a+h) - f(a)}{h}$. Si los laterales dan distinto, hay esquina. Si dan $\\pm \\infty$, hay tangente vertical.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Continua NO implica derivable: $f(x) = |x|$ es continua en $0$ pero no derivable ahí (el límite lateral izquierdo da $-1$ y el derecho da $+1$).',
        },

        { type: 'h3', text: 'Casos típicos donde NO es derivable' },
        {
          type: 'ul',
          items: [
            '**Esquina o pico**: los límites laterales del cociente incremental existen pero son distintos. Ejemplo: $f(x) = |x|$ en $x = 0$.',
            '**Salto o discontinuidad**: la función no es continua en el punto, así que la condición 2 falla. Ejemplo: $f(x) = \\lfloor x \\rfloor$ (parte entera) en cualquier $x$ entero.',
            '**Tangente vertical**: el límite del cociente incremental da $\\pm\\infty$. Ejemplo: $f(x) = \\sqrt[3]{x}$ en $x = 0$ — la pendiente tiende a infinito.',
            '**Oscilación**: la función oscila infinitamente cerca del punto y ni siquiera es continua. Ejemplo: $f(x) = \\sin(1/x)$ no extendida a $x = 0$.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Truco para detectar: si podés dibujar la función sin levantar el lápiz Y sin tener que cambiar bruscamente la dirección, suele ser derivable. Esquinas y tangentes verticales son las dos cosas que rompen la "suavidad".',
        },
      ],
    },
```

- [ ] **Step 2: Commit**

```
git add js/subjects/analisis-matematico.js
git commit -m "$(cat <<'EOF'
content(analisis): Sección 3 — Derivabilidad de una función

Definición formal del cociente incremental, las tres condiciones para
que f sea derivable en a (definida, continua, límites laterales iguales
y finitos) y los cuatro casos típicos donde no es derivable (esquina,
salto, tangente vertical, oscilación), con ejemplos.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 14 — Registrar la nueva materia en `js/content.js`

**Files:**
- Modify: `js/content.js`

- [ ] **Step 1: Importar y registrar Análisis Matemático**

Editar `js/content.js`. Reemplazar las dos líneas:

```js
import sistemasYMetodos from './subjects/sistemas-y-metodos.js';

export const SUBJECTS = [sistemasYMetodos];
```

por:

```js
import sistemasYMetodos from './subjects/sistemas-y-metodos.js';
import analisisMatematico from './subjects/analisis-matematico.js';

export const SUBJECTS = [sistemasYMetodos, analisisMatematico];
```

- [ ] **Step 2: Smoke test end-to-end de Análisis Matemático**

1. `http://localhost:8000/` → debe aparecer una segunda card "Análisis Matemático" con tagline "Derivadas — tabla, reglas y derivabilidad" y meta "1 unidad · 3 secciones".
2. Click en la card → `materia.html?subject=analisis-matematico`. Header "Análisis Matemático — Apuntes y fórmulas". Una sola unidad "Derivadas" con 3 cards (sin badges de Quiz/Flashcards porque no las tiene; sí aparece "Sin leer").
3. Verificar que el nav NO muestra "Ver PDFs" (la materia tiene `pdfs: []`).
4. Click en card "Tabla de derivadas":
   - URL: `seccion.html?subject=analisis-matematico&id=1`.
   - Tabla con 22 filas. Cada celda con LaTeX renderizado por KaTeX (fracciones, exponentes, raíces).
   - Bottom bar NO aparece (no hay quiz ni flashcards).
   - Marcar como leída se persiste: refrescar → la card de la materia muestra "✓ Leída".
5. Click en "Reglas de derivación":
   - Cuatro h3 con criollo colapsable.
   - Cuatro fórmulas display centradas y grandes.
   - Ejemplos inline con $...$ renderizados.
   - Callout warning en cociente, callout info al final de cadena.
6. Click en "Derivabilidad":
   - Definición formal con fórmula del cociente incremental display.
   - `ol` con tres condiciones (la tercera tiene una fórmula inline).
   - Callout warning sobre |x|.
   - `ul` con cuatro casos típicos.
7. Verificar que Sistemas y Métodos sigue funcionando idéntico a antes:
   - Home → "Administración de Proyectos" → cualquier sección → quiz y flashcards funcionan.
   - El progreso previo se ve en la home de la materia (las secciones leídas siguen leídas, los scores previos siguen).
8. URL legacy: `seccion.html?id=5`, `quiz.html?id=5`, `flashcards.html?id=5`, `pdfs.html?doc=fundamentos` → todas redirigen agregando `subject=sistemas-y-metodos`.

- [ ] **Step 3: Commit**

```
git add js/content.js
git commit -m "$(cat <<'EOF'
feat(content): registrar Análisis Matemático en el índice de materias

Con esto la nueva materia aparece en la home raíz y es navegable.
Cierra el ciclo del refactor multi-materia.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 15 — Actualizar README

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Actualizar el README para reflejar multi-materia**

Editar `README.md` y reemplazar las primeras dos secciones por:

```markdown
# Apuntes — App de estudio

App web estática para estudiar apuntes de varias materias de la Universidad de Palermo. Actualmente cubre:

- **Administración de Proyectos** (Sistemas y Métodos) — unidades 8.1 y 8.2.
- **Análisis Matemático** — Derivadas (tabla, reglas, derivabilidad).

## Qué hay adentro

- **Selector de materias** en la home raíz.
- **Lectura interactiva** de las secciones con definiciones "en criollo", agrupadas por unidad.
- **Visor integrado** de los PDFs originales (cuando la materia los tiene).
- **Quizzes** de verdadero/falso y multiple choice por sección (cuando la sección los tiene).
- **Flashcards** por sección con flip + cola de repaso (cuando la sección las tiene).
- **Fórmulas matemáticas** renderizadas con KaTeX (LaTeX inline `$...$` y display `$$...$$`).
- **Progreso** guardado en `localStorage` namespaced por materia (lectura, último score de quiz, flashcards sabidas).
```

Y en la sección "Estructura" reemplazar el árbol por:

```
.
├── index.html              # Selector de materias
├── materia.html            # Home de la materia activa (?subject=<id>)
├── seccion.html            # Lectura de una sección
├── pdfs.html               # Visor de PDFs (cuando la materia los tiene)
├── quiz.html               # Quiz por sección
├── flashcards.html         # Flashcards por sección
├── css/extra.css           # Tokens + componentes (incluye estilos de tabla y math)
├── js/
│   ├── content.js          # Índice de materias (SUBJECTS, helpers)
│   ├── subjects/           # Una materia por archivo
│   ├── katex-init.js       # Helper para correr KaTeX sobre un contenedor
│   └── ...                 # Lógica por vista (inicio, materia, seccion, quiz, flashcards, pdfs, nav, storage, lightbox)
├── images/diagrams/        # Diagramas extraídos de los PDFs (por unidad)
├── pdfs/                   # PDFs originales (solo Administración de Proyectos)
├── scripts/                # Utilidades (extracción de imágenes)
└── docs/                   # Diseños y planes de implementación
```

- [ ] **Step 2: Smoke test**

Abrir `README.md` en VS Code o equivalente y verificar que se ve consistente.

- [ ] **Step 3: Commit**

```
git add README.md
git commit -m "$(cat <<'EOF'
docs(readme): actualizar para reflejar la nueva arquitectura multi-materia

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 16 — Smoke test final end-to-end y limpieza

**Files:** ninguno

- [ ] **Step 1: Recorrido completo manual**

1. Abrir `http://localhost:8000/` con localStorage limpio (DevTools → Application → Clear site data) y verificar:
   - Selector muestra las dos materias.
2. Restaurar el backup del localStorage (del Step 1 de la Task 1) en DevTools y refrescar.
3. Recorrer Sistemas y Métodos:
   - Cada sección leída antes sigue "✓ Leída".
   - Scores previos siguen visibles.
   - Hacer un quiz nuevo y verificar que `subjects['sistemas-y-metodos'].sections.<id>.lastQuizScore` se actualiza.
4. Recorrer Análisis Matemático:
   - Las tres secciones cargan y renderizan correctamente.
   - Marcar como leída persiste.
   - El nav top NO muestra "Ver PDFs" (correcto, la materia no tiene).
5. URLs legacy: bookmark de prueba a `seccion.html?id=2`, `quiz.html?id=2`, `flashcards.html?id=2`, `pdfs.html?doc=presentacion` → todas redirigen correctamente.
6. Comportamiento defensivo:
   - `materia.html` sin params → redirige a `index.html`.
   - `seccion.html?subject=foo&id=1` → redirige a `index.html`.
   - `quiz.html?subject=analisis-matematico&id=1` → redirige a `seccion.html?subject=analisis-matematico&id=1` (la sección no tiene quiz).
7. Responsive: ver en mobile (DevTools device toolbar 375px de ancho):
   - Selector de materias: cards en una columna.
   - Tabla de derivadas: scroll horizontal funciona.
   - Fórmulas display largas: scroll horizontal en `.math-display`.
8. Verificar consola: cero errores de JS o de carga de assets.

- [ ] **Step 2: Comparar git log con el plan**

```
git log --oneline -20
```

Esperado: una secuencia de commits que matchea las tasks del plan (storage, subjects/sym, content índice, nav, materia, inicio, seccion, quiz, flashcards, pdfs, katex, render math/table, 3 commits de análisis, registro, readme). Si hay un task sin commit, verificar qué pasó.

- [ ] **Step 3: Commit de plan (si aún no se hizo)**

```
git add docs/plans/2026-05-18-multi-materia-analisis-matematico.md
git commit -m "$(cat <<'EOF'
docs: plan de implementación para multi-materia + Análisis Matemático

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Self-Review (spec coverage)

| Spec section | Cubierto en task |
|---|---|
| §3 Navegación con `?subject=` | Task 6 (index/inicio) + 5 (materia) + 7-10 (subviews) |
| §4.1 Subject | Task 2 + Task 14 |
| §4.2 Section con quiz/fc opcionales | Task 5 (cards) + Task 7 (bottom bar) + Task 8/9 (redirects) |
| §4.3 Blocks `math` y `table` | Task 12 |
| §4.3 LaTeX inline `$...$` | Task 12 (KaTeX auto-render) |
| §5 Estructura de archivos | Tasks 2, 3, 5, 6, 11 |
| §5 `js/subjects/` convención | Task 2 + Task 13 |
| §6.1 Selector de materias | Task 6 |
| §6.2 Home de materia | Task 5 |
| §6.3 Sección con KaTeX | Task 11 + Task 12 |
| §6.4 Quiz/flashcards con subject | Task 8 + Task 9 |
| §6.5 PDFs por materia | Task 10 |
| §7 Schema v2 + migración | Task 1 |
| §8 Contenido Análisis (tabla 22 filas) | Task 13.A |
| §8 Reglas | Task 13.B |
| §8 Derivabilidad | Task 13.C |
| §9 Estilos `.content-table` `.math-display` | Task 12 |
| §10 Responsive (table-wrap scroll, math overflow) | Task 12 |
| §12 Riesgo bookmarks legacy | Tasks 7, 8, 9, 10 (compat redirects) |
| §12 Riesgo migración pierde progreso | Task 1 Step 1 (backup) + Step 3 (smoke test) |

**Sin gaps.**

---

## Execution Handoff

Plan completo y guardado en `docs/plans/2026-05-18-multi-materia-analisis-matematico.md`.

Próximo paso: ejecutar con **`superpowers:subagent-driven-development`** — un subagente fresco por tarea, revisión entre tasks, iteración rápida.
