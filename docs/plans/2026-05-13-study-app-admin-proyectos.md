# Study App — Admin de Proyectos I (Unidad 8.1) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir una app web estática mobile-first que estudie la Unidad 8.1 de Sistemas y Métodos (Admin de Proyectos I) a partir de 3 PDFs oficiales, con vistas de lectura, visor PDF, quiz y flashcards.

**Architecture:** HTML + JS vanilla + Tailwind CDN, sin build pipeline. Cinco páginas HTML separadas (home, sección, pdfs, quiz, flashcards), navegación por query string, data centralizada en `js/content.js`, persistencia en `localStorage`, deploy a GitHub Pages.

**Tech Stack:** HTML5, JavaScript ES modules (vanilla), Tailwind CSS por CDN, PDF.js por CDN, `localStorage`.

**Spec de referencia:** [docs/specs/2026-05-13-study-app-admin-proyectos-design.md](../specs/2026-05-13-study-app-admin-proyectos-design.md)

---

## Convenciones de este plan

**Sin tests automatizados.** Este proyecto está en scope explícito sin npm/build/tests. Cada task usa **verificación manual en el navegador** en lugar del ciclo TDD. La rutina por task es:

1. Crear/modificar los archivos.
2. Abrir en navegador con `python -m http.server 8000` (desde el root del proyecto) y verificar el comportamiento esperado en mobile + desktop (Chrome DevTools → toggle device toolbar).
3. Commit.

**Convención de commits:** mensajes en español, formato `<tipo>: <descripción corta>`. Tipos: `setup`, `feat`, `style`, `fix`, `content`, `chore`, `docs`.

**Co-author:** todos los commits incluyen:
```
Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

**Estado actual del workspace:**
- `pdfs/fundamentos.pdf`, `pdfs/consideraciones.pdf`, `pdfs/presentacion.pdf` ya están copiados.
- `docs/specs/2026-05-13-study-app-admin-proyectos-design.md` existe.
- `docs/plans/2026-05-13-study-app-admin-proyectos.md` (este archivo) existe.
- No hay `git init` aún. No hay `.gitignore`. No hay imágenes extraídas.

---

## Task 1: Setup del proyecto (git, .gitignore, extracción de imágenes)

**Files:**
- Create: `.gitignore`
- Create: `README.md` (placeholder corto, se llena después)
- Create: `scripts/extract-pdf-images.py`
- Create: `images/diagrams/` (con 8 PNG/JPG)

- [ ] **Step 1: Inicializar git**

Run:
```bash
cd "C:/Users/Juan/Desktop/projects/Sistemas y metodos - P2"
git init -b main
```

Expected: `Initialized empty Git repository in ...`

- [ ] **Step 2: Crear `.gitignore`**

Contenido completo:
```gitignore
# OS
.DS_Store
Thumbs.db
desktop.ini

# Editor
.vscode/
.idea/
*.swp

# Python (script de extracción)
__pycache__/
*.pyc
.venv/
venv/

# Inspección temporal
_pdf_images_inspection/
```

- [ ] **Step 3: Crear `README.md` placeholder**

Contenido completo:
```markdown
# Admin de Proyectos I — App de estudio

App web estática para estudiar la Unidad 8.1 (Administración de Proyectos I) de Sistemas y Métodos (UP).

En construcción. Ver [docs/specs/](docs/specs/) y [docs/plans/](docs/plans/) para diseño e implementación.
```

- [ ] **Step 4: Crear el script de extracción de imágenes**

`scripts/extract-pdf-images.py`:
```python
"""
Extrae las 8 imágenes con valor académico del PDF de presentación al directorio images/diagrams/.
Las imágenes decorativas (stock photos en p.5, p.6, p.16) se descartan.
Usa PyMuPDF (fitz). Requiere: pip install pymupdf
"""
import fitz
import os
from pathlib import Path

PDF_PATH = Path(__file__).parent.parent / "pdfs" / "presentacion.pdf"
OUT_DIR = Path(__file__).parent.parent / "images" / "diagrams"
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Mapping: (página 1-indexed, índice de imagen dentro de la página 0-indexed, nombre de salida)
TARGETS = [
    (4,  1, "embudo-fuentes"),
    (7,  1, "esfuerzo-duracion-1"),
    (8,  1, "esfuerzo-duracion-2"),
    (9,  1, "proceso-fuentes"),
    (10, 1, "ciclo-de-vida"),
    (11, 1, "pm-wheel"),
    (15, 1, "smart-cards"),
    (18, 1, "project-charter-illustration"),
]

def main():
    doc = fitz.open(PDF_PATH)
    for page_num, img_idx, name in TARGETS:
        page = doc[page_num - 1]
        images = page.get_images(full=True)
        if img_idx >= len(images):
            print(f"WARN: page {page_num} has no image at index {img_idx}")
            continue
        xref = images[img_idx][0]
        base = doc.extract_image(xref)
        ext = base["ext"]
        out_path = OUT_DIR / f"{name}.{ext}"
        out_path.write_bytes(base["image"])
        print(f"OK: {out_path.name} ({base['width']}x{base['height']})")
    doc.close()

if __name__ == "__main__":
    main()
```

- [ ] **Step 5: Ejecutar el script y verificar las imágenes**

Run:
```bash
python scripts/extract-pdf-images.py
ls images/diagrams/
```

Expected output (orden puede variar): 8 archivos
```
embudo-fuentes.png
esfuerzo-duracion-1.png
esfuerzo-duracion-2.png
proceso-fuentes.png
ciclo-de-vida.png
pm-wheel.png
smart-cards.png
project-charter-illustration.jpeg
```

(Note: `project-charter-illustration` viene como `.jpeg` desde el PDF. Ajustar referencias en el código a esa extensión.)

- [ ] **Step 6: Commit inicial**

```bash
git add .gitignore README.md scripts/ docs/ pdfs/ images/
git commit -m "$(cat <<'EOF'
setup: inicialización del proyecto

Inicia el repo con .gitignore, README placeholder, script de extracción
de imágenes desde el PDF de presentación, los 3 PDFs originales en pdfs/,
las 8 imágenes con valor académico en images/diagrams/, y los docs de
spec y plan en docs/.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: CSS foundation (tokens Notion-like)

**Files:**
- Create: `css/extra.css`

- [ ] **Step 1: Crear `css/extra.css` con tokens y reset mínimo**

Contenido completo:
```css
/* === Tokens === */
:root {
  /* Surface */
  --bg: #fbfaf7;
  --surface: #ffffff;
  --surface-2: #f4f1ec;

  /* Text */
  --text: #2f2c28;
  --muted: #6f6a63;
  --text-on-accent: #ffffff;

  /* Border */
  --border: #ebe7df;
  --border-strong: #d8d3c8;

  /* Accent */
  --accent: #2563eb;
  --accent-hover: #1d4ed8;

  /* Callouts */
  --criollo-bg: #fef9e7;
  --criollo-border: #e0c870;
  --info-bg: #eaf4ff;
  --info-border: #93c5fd;
  --warn-bg: #fff1f0;
  --warn-border: #f87171;

  /* Feedback */
  --ok: #2f9e44;
  --ok-bg: #ebfbee;
  --error: #e03131;
  --error-bg: #fff5f5;

  /* Geometry */
  --radius-sm: 6px;
  --radius: 10px;
  --radius-lg: 14px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow: 0 4px 12px rgba(0,0,0,0.06);

  /* Type */
  --font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Inter, sans-serif;
  --font-serif: "Iowan Old Style", "Source Serif Pro", Georgia, serif;
}

/* === Base === */
html, body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-serif);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text);
}

a { color: var(--accent); }
a:hover { color: var(--accent-hover); }

/* === Componentes reutilizables === */
.criollo-callout {
  background: var(--criollo-bg);
  border-left: 4px solid var(--criollo-border);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
}

.info-callout {
  background: var(--info-bg);
  border-left: 4px solid var(--info-border);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
}

.warn-callout {
  background: var(--warn-bg);
  border-left: 4px solid var(--warn-border);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
}

.surface-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.surface-card:hover {
  box-shadow: var(--shadow);
}

/* === Touch targets === */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}

/* === Quiz feedback states === */
.option-correct {
  background: var(--ok-bg);
  border-color: var(--ok) !important;
  color: var(--ok);
}

.option-wrong {
  background: var(--error-bg);
  border-color: var(--error) !important;
  color: var(--error);
}

/* === Utilities === */
.read-width { max-width: 65ch; }

/* === Body padding cuando hay bottom bar sticky === */
body.has-bottom-bar { padding-bottom: 88px; }
@media (min-width: 768px) {
  body.has-bottom-bar { padding-bottom: 0; }
}
```

- [ ] **Step 2: Verificar que el archivo existe**

Run:
```bash
ls css/extra.css
```

Expected: existe el archivo.

- [ ] **Step 3: Commit**

```bash
git add css/
git commit -m "$(cat <<'EOF'
style: agregar tokens CSS y componentes base Notion-like

Define variables CSS para colores, tipografía, radii, shadows. Incluye
clases reutilizables: criollo-callout, info-callout, warn-callout,
surface-card, option-correct/wrong y utilities para touch targets y
ancho de lectura.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Nav compartido (`js/nav.js`)

**Files:**
- Create: `js/nav.js`

- [ ] **Step 1: Crear `js/nav.js`**

Contenido completo:
```javascript
/**
 * Renderiza el top nav compartido entre todas las vistas.
 * Inserta el HTML al principio del <body>.
 *
 * Uso:
 *   import { renderNav } from './nav.js';
 *   renderNav({ active: 'home' });   // o 'pdfs'
 */

export function renderNav({ active = 'home' } = {}) {
  const isActive = (key) =>
    active === key
      ? 'text-[var(--accent)] font-semibold'
      : 'text-[var(--muted)] hover:text-[var(--text)]';

  const nav = document.createElement('nav');
  nav.className =
    'sticky top-0 z-40 bg-[var(--bg)]/95 backdrop-blur border-b border-[var(--border)]';
  nav.innerHTML = `
    <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="index.html" class="font-semibold ${isActive('home')}">
        Admin de Proyectos I
      </a>
      <a href="pdfs.html" class="touch-target inline-flex items-center px-3 py-2 rounded-[var(--radius-sm)] ${isActive('pdfs')}">
        Ver PDFs
      </a>
    </div>
  `;
  document.body.prepend(nav);
}
```

- [ ] **Step 2: Verificación rápida (skip — se valida en Task 6 cuando lo importe el home)**

- [ ] **Step 3: Commit**

```bash
git add js/nav.js
git commit -m "$(cat <<'EOF'
feat: nav compartido renderizable desde JS

Exporta renderNav({ active }) que inserta un top nav sticky con link a
home y link a la vista de PDFs. Marca el activo con color de acento.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Storage helper (`js/storage.js`)

**Files:**
- Create: `js/storage.js`

- [ ] **Step 1: Crear `js/storage.js`**

Contenido completo:
```javascript
/**
 * Wrapper sobre localStorage con un solo key (study-app-state).
 * Schema:
 *   {
 *     sections: {
 *       "1": { read: bool, lastQuizScore: { correct, total, at }, knownFlashcards: [fcId, ...] },
 *       ...
 *     }
 *   }
 */

const KEY = 'study-app-state';

function defaultState() {
  return { sections: {} };
}

function ensureSection(state, id) {
  if (!state.sections[id]) {
    state.sections[id] = { read: false, lastQuizScore: null, knownFlashcards: [] };
  }
  return state.sections[id];
}

export function getState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return defaultState();
    if (!parsed.sections) parsed.sections = {};
    return parsed;
  } catch {
    return defaultState();
  }
}

export function setState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function getSectionState(id) {
  const state = getState();
  return state.sections[id] || { read: false, lastQuizScore: null, knownFlashcards: [] };
}

export function markRead(id) {
  const state = getState();
  ensureSection(state, id).read = true;
  setState(state);
}

export function saveQuizScore(id, { correct, total }) {
  const state = getState();
  ensureSection(state, id).lastQuizScore = {
    correct,
    total,
    at: new Date().toISOString(),
  };
  setState(state);
}

export function markFlashcard(sectionId, fcId, known) {
  const state = getState();
  const section = ensureSection(state, sectionId);
  const set = new Set(section.knownFlashcards);
  if (known) set.add(fcId);
  else set.delete(fcId);
  section.knownFlashcards = [...set];
  setState(state);
}
```

- [ ] **Step 2: Commit**

```bash
git add js/storage.js
git commit -m "$(cat <<'EOF'
feat: wrapper de localStorage para estado de progreso

Expone getState, setState, getSectionState, markRead, saveQuizScore y
markFlashcard. Usa un único key 'study-app-state'. Maneja parseo
defensivo: si el blob está corrupto, vuelve al default.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: `js/content.js` — types + sección 1 completa (template)

**Files:**
- Create: `js/content.js`

Esta task crea el archivo con:
- Comentarios doc explicando los tipos.
- Sección 1 **completa** (fiel al PDF1 §1).
- Stubs vacíos para secciones 2-7 (se llenan en tasks 12-14).

- [ ] **Step 1: Crear `js/content.js`**

Contenido completo:
```javascript
/**
 * Data central de la app.
 *
 * Tipos conceptuales (documentación, no enforced):
 *
 *   ContentBlock =
 *     | { type: "h3"; text: string; criollo?: string }
 *     | { type: "p"; text: string }
 *     | { type: "ul"; items: string[] }
 *     | { type: "ol"; items: string[] }
 *     | { type: "callout"; tone: "info" | "warning" | "criollo"; text: string }
 *     | { type: "figure"; src: string; alt: string; caption: string }
 *
 *   TFQuestion = { id, q, a: bool, explain }
 *   MCQuestion = { id, q, options: string[], correctIndex: number, explain }
 *   Flashcard  = { id, front, back }
 *
 *   Section = { id, title, criollo, blocks, quiz: { tf, mc }, flashcards }
 *
 * Regla: todo el contenido sale de los 3 PDFs. Nada inventado.
 */

export const SECTIONS = [
  // ---------- SECCIÓN 1 ----------
  {
    id: '1',
    title: '¿Qué es un proyecto y por qué necesita gestión?',
    criollo:
      'Básicamente: un proyecto es algo que arrancás, hacés y terminás, con un objetivo concreto y recursos que tenés que cuidar. No es la rutina del trabajo de todos los días. Y la administración de proyectos es la disciplina que se encarga de que eso salga bien.',
    blocks: [
      {
        type: 'p',
        text:
          'Para comenzar, debemos tener una definición clara y compartida de qué es un proyecto y por qué la disciplina que lo gestiona importa.',
      },
      {
        type: 'h3',
        text: 'Definición de proyecto',
        criollo:
          'Un proyecto es algo único, con fecha de inicio y de fin, con plata y gente asignadas, y con un objetivo claro de lo que hay que entregar. Si es una tarea continua y rutinaria, no es proyecto: es operación.',
      },
      {
        type: 'p',
        text:
          'Un proyecto es, fundamentalmente, un esfuerzo temporal y único que se emprende para crear un producto, servicio o resultado específico.',
      },
      {
        type: 'p',
        text: 'Sus características clave:',
      },
      {
        type: 'ul',
        items: [
          'Temporal: todo proyecto tiene un comienzo y un final definidos. No es una operación continua o rutinaria de la empresa (como la facturación o el soporte técnico). Su naturaleza es finita.',
          'Único: el producto o resultado del proyecto es diferente de otros. Por ejemplo, construir un nuevo edificio es un proyecto; el mantenimiento diario de este es una operación. Aunque se hayan construido otros edificios antes, este tendrá una ubicación, diseño y equipo de trabajo específicos que lo hacen único.',
          'Recursos definidos: se le asigna un presupuesto, personal y equipamiento específicos para su ejecución.',
          'Resultado específico: busca alcanzar un objetivo claro y tangible.',
        ],
      },
      {
        type: 'h3',
        text: 'La administración de proyectos (project management)',
        criollo:
          'Es la disciplina que planifica, organiza y controla todo lo que pasa en un proyecto para que llegue a destino dentro de los límites de alcance, tiempo y costo. Aumenta las chances de que salga bien.',
      },
      {
        type: 'p',
        text:
          'Es la disciplina que consiste en planificar, organizar, asegurar y gestionar los recursos para llevar a cabo el trabajo requerido y cumplir con los objetivos del proyecto dentro de las restricciones definidas (alcance, tiempo y costo).',
      },
      {
        type: 'p',
        text:
          'Su importancia radica en que aumenta las probabilidades de éxito, optimiza el uso de recursos y proporciona un marco de trabajo claro para todo el equipo.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-1-1',
          q: 'Un proyecto es una operación continua y rutinaria de la empresa.',
          a: false,
          explain:
            'Falso. El proyecto es temporal, tiene comienzo y final definidos. Una operación continua, como la facturación, no es un proyecto.',
        },
        {
          id: 'tf-1-2',
          q: 'Todo proyecto tiene un comienzo y un final definidos.',
          a: true,
          explain:
            'Verdadero. La característica "temporal" implica exactamente eso: el proyecto tiene fechas de inicio y fin acotadas.',
        },
        {
          id: 'tf-1-3',
          q: 'El mantenimiento diario de un edificio es un proyecto.',
          a: false,
          explain:
            'Falso. Construir el edificio es un proyecto (único, temporal). El mantenimiento diario es una operación rutinaria.',
        },
        {
          id: 'tf-1-4',
          q: 'La administración de proyectos garantiza el éxito al 100%.',
          a: false,
          explain:
            'Falso. Aumenta las probabilidades de éxito y optimiza recursos, pero no garantiza el éxito automáticamente.',
        },
      ],
      mc: [
        {
          id: 'mc-1-1',
          q: '¿Cuál NO es una característica de un proyecto?',
          options: ['Temporal', 'Único', 'Repetitivo y continuo', 'Recursos definidos'],
          correctIndex: 2,
          explain:
            'La característica opuesta es la verdad: un proyecto es temporal y único, no repetitivo ni continuo. Eso lo distingue de una operación.',
        },
        {
          id: 'mc-1-2',
          q: 'Las tres restricciones principales que la administración de proyectos busca respetar son:',
          options: [
            'Alcance, tiempo y costo',
            'Alcance, calidad y equipo',
            'Tiempo, equipo y presupuesto',
            'Costo, calidad y recursos',
          ],
          correctIndex: 0,
          explain:
            'El apunte menciona explícitamente que la administración cumple los objetivos dentro de las restricciones de alcance, tiempo y costo.',
        },
        {
          id: 'mc-1-3',
          q: '¿Por qué importa la administración de proyectos?',
          options: [
            'Reemplaza la necesidad de un equipo de trabajo',
            'Aumenta las probabilidades de éxito y optimiza recursos',
            'Garantiza el éxito del proyecto al 100%',
            'Solo aplica a proyectos de gran escala',
          ],
          correctIndex: 1,
          explain:
            'Su importancia radica en que aumenta las probabilidades de éxito, optimiza el uso de recursos y da un marco claro al equipo.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-1-1',
        front: 'Proyecto',
        back:
          'Esfuerzo temporal y único que se emprende para crear un producto, servicio o resultado específico.',
      },
      {
        id: 'fc-1-2',
        front: 'Característica "Temporal" de un proyecto',
        back:
          'Tiene un comienzo y un final definidos. No es operación continua o rutinaria.',
      },
      {
        id: 'fc-1-3',
        front: 'Característica "Único" de un proyecto',
        back:
          'El producto o resultado es diferente de otros. Aun cuando se hayan hecho cosas similares, esta es distinta por ubicación, diseño o equipo.',
      },
      {
        id: 'fc-1-4',
        front: 'Característica "Recursos definidos"',
        back:
          'Se asigna un presupuesto, personal y equipamiento específicos para la ejecución del proyecto.',
      },
      {
        id: 'fc-1-5',
        front: 'Característica "Resultado específico"',
        back: 'Busca alcanzar un objetivo claro y tangible.',
      },
      {
        id: 'fc-1-6',
        front: 'Administración de proyectos (project management)',
        back:
          'Disciplina que planifica, organiza, asegura y gestiona los recursos para cumplir los objetivos dentro de las restricciones de alcance, tiempo y costo.',
      },
      {
        id: 'fc-1-7',
        front: 'Las 3 restricciones del proyecto',
        back: 'Alcance, tiempo y costo.',
      },
    ],
  },

  // ---------- SECCIÓN 2 ----------
  {
    id: '2',
    title: 'El nacimiento de un proyecto (fase conceptual)',
    criollo: 'TBD — Task 12',
    blocks: [],
    quiz: { tf: [], mc: [] },
    flashcards: [],
  },

  // ---------- SECCIÓN 3 ----------
  {
    id: '3',
    title: 'Ciclo de vida y áreas de conocimiento PMBOK',
    criollo: 'TBD — Task 12',
    blocks: [],
    quiz: { tf: [], mc: [] },
    flashcards: [],
  },

  // ---------- SECCIÓN 4 ----------
  {
    id: '4',
    title: 'Fundamentos de la planificación',
    criollo: 'TBD — Task 13',
    blocks: [],
    quiz: { tf: [], mc: [] },
    flashcards: [],
  },

  // ---------- SECCIÓN 5 ----------
  {
    id: '5',
    title: 'Herramientas esenciales de gestión de proyectos',
    criollo: 'TBD — Task 13',
    blocks: [],
    quiz: { tf: [], mc: [] },
    flashcards: [],
  },

  // ---------- SECCIÓN 6 ----------
  {
    id: '6',
    title: 'Desafíos comunes en la gestión de proyectos',
    criollo: 'TBD — Task 14',
    blocks: [],
    quiz: { tf: [], mc: [] },
    flashcards: [],
  },

  // ---------- SECCIÓN 7 ----------
  {
    id: '7',
    title: 'Consideraciones generales (proyectos de sistemas)',
    criollo: 'TBD — Task 14',
    blocks: [],
    quiz: { tf: [], mc: [] },
    flashcards: [],
  },
];

export function getSection(id) {
  return SECTIONS.find((s) => s.id === id);
}
```

**Nota sobre los "TBD" en stubs**: estos stubs **no son placeholders del plan**; son data parcial del producto que tasks 12-14 van a llenar. El plan describe exactamente qué tasks lo completan y en qué orden.

- [ ] **Step 2: Commit**

```bash
git add js/content.js
git commit -m "$(cat <<'EOF'
content: data inicial con sección 1 completa y stubs para 2-7

Crea js/content.js con la estructura SECTIONS (array de 7 objetos).
Sección 1 ("¿Qué es un proyecto...") completa: criollo, blocks con
2 h3, listas y párrafos del PDF1; 4 V/F, 3 multiple choice y 7
flashcards. Las secciones 2-7 quedan como stubs vacíos que se llenan
en tasks posteriores.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 6: Home page (`index.html` + `js/home.js`)

**Files:**
- Create: `index.html`
- Create: `js/home.js`

- [ ] **Step 1: Crear `index.html`**

Contenido completo:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin de Proyectos I — Estudio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="css/extra.css" />
</head>
<body>
  <main class="max-w-5xl mx-auto px-4 py-6">
    <header class="mb-8">
      <h1 class="text-3xl md:text-4xl font-semibold">Administración de Proyectos I</h1>
      <p class="text-[var(--muted)] mt-1">Sistemas y Métodos — Unidad 8.1</p>
    </header>
    <section id="sections-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- cards inyectadas por home.js -->
    </section>
  </main>
  <script type="module" src="js/home.js"></script>
</body>
</html>
```

- [ ] **Step 2: Crear `js/home.js`**

Contenido completo:
```javascript
import { renderNav } from './nav.js';
import { SECTIONS } from './content.js';
import { getSectionState } from './storage.js';

renderNav({ active: 'home' });

const grid = document.getElementById('sections-grid');

function sectionCard(section) {
  const state = getSectionState(section.id);
  const totalFc = section.flashcards.length;
  const knownFc = state.knownFlashcards.length;
  const score = state.lastQuizScore;

  const readBadge = state.read
    ? '<span class="text-[var(--ok)]">✓ Leída</span>'
    : '<span class="text-[var(--muted)]">Sin leer</span>';

  const quizBadge = score
    ? `<span class="text-[var(--muted)]">Quiz: ${score.correct}/${score.total}</span>`
    : '<span class="text-[var(--muted)]">Sin quiz</span>';

  const fcBadge = `<span class="text-[var(--muted)]">Flashcards: ${knownFc}/${totalFc}</span>`;

  return `
    <a href="seccion.html?id=${section.id}"
       class="surface-card block p-5 transition-shadow">
      <div class="flex items-start gap-3 mb-3">
        <span class="text-3xl font-semibold text-[var(--muted)] leading-none">${section.id}</span>
        <h2 class="text-lg leading-tight">${section.title}</h2>
      </div>
      <p class="text-sm text-[var(--muted)] mb-4 line-clamp-3">${section.criollo}</p>
      <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs">
        ${readBadge}
        ${quizBadge}
        ${fcBadge}
      </div>
    </a>
  `;
}

grid.innerHTML = SECTIONS.map(sectionCard).join('');
```

- [ ] **Step 3: Servir con HTTP server y verificar**

Run (en una terminal aparte, mantener corriendo):
```bash
python -m http.server 8000
```

Abrir en navegador: `http://localhost:8000/`

Expected:
- Top nav con título "Admin de Proyectos I" a la izquierda y "Ver PDFs" a la derecha.
- H1 grande "Administración de Proyectos I" + subtítulo "Sistemas y Métodos — Unidad 8.1".
- Grid de 7 cards. En mobile (Chrome DevTools → device toolbar) una abajo de la otra; en desktop 3 columnas.
- Cada card muestra: número grande, título, criollo abajo, y 3 badges ("Sin leer", "Sin quiz", "Flashcards: 0/N").
- Hover (en desktop) levanta sombra suavemente.

- [ ] **Step 4: Commit**

```bash
git add index.html js/home.js
git commit -m "$(cat <<'EOF'
feat: home con grid de 7 secciones y badges de progreso

index.html monta el shell con Tailwind CDN y css/extra.css. js/home.js
renderiza el nav compartido, lee SECTIONS y getSectionState para
mostrar cada card con número, título, criollo y 3 badges (leída,
último quiz, flashcards sabidas). Mobile: 1 columna; md: 2; lg: 3.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 7: Sección page (`seccion.html` + `js/seccion.js`)

**Files:**
- Create: `seccion.html`
- Create: `js/seccion.js`

- [ ] **Step 1: Crear `seccion.html`**

Contenido completo:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sección — Admin de Proyectos I</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="css/extra.css" />
</head>
<body class="has-bottom-bar">
  <main class="max-w-3xl mx-auto px-4 py-6">
    <a href="index.html" class="text-sm text-[var(--muted)] hover:text-[var(--text)]">← Volver al índice</a>
    <header id="section-header" class="mt-2 mb-4"></header>
    <div id="section-criollo" class="mb-6"></div>
    <article id="section-content" class="read-width space-y-4"></article>
    <nav id="section-nav" class="mt-10 pt-6 border-t border-[var(--border)] flex justify-between"></nav>
  </main>
  <div id="bottom-bar"
       class="fixed bottom-0 left-0 right-0 md:static md:max-w-3xl md:mx-auto bg-[var(--surface)] border-t md:border-0 border-[var(--border)] p-3 md:p-0 md:mt-6 md:pb-10 grid grid-cols-2 gap-3 z-30"></div>
  <script type="module" src="js/seccion.js"></script>
</body>
</html>
```

- [ ] **Step 2: Crear `js/seccion.js`**

Contenido completo:
```javascript
import { renderNav } from './nav.js';
import { SECTIONS, getSection } from './content.js';
import { markRead } from './storage.js';

renderNav({ active: 'home' });

const params = new URLSearchParams(location.search);
const id = params.get('id');
const section = getSection(id);

if (!section) {
  location.replace('index.html');
} else {
  document.title = `${section.title} — Admin de Proyectos I`;
  renderSection(section);
  markRead(section.id);
}

function renderSection(s) {
  // Header
  document.getElementById('section-header').innerHTML = `
    <p class="text-sm text-[var(--muted)]">Sección ${s.id}</p>
    <h1 class="text-2xl md:text-3xl font-semibold mt-1">${s.title}</h1>
  `;

  // Criollo principal
  document.getElementById('section-criollo').innerHTML = `
    <div class="criollo-callout">
      <p class="text-xs font-semibold text-[var(--muted)] uppercase tracking-wide mb-1">En criollo</p>
      <p>${s.criollo}</p>
    </div>
  `;

  // Blocks
  const article = document.getElementById('section-content');
  article.innerHTML = s.blocks.map(renderBlock).join('');
  // Activar toggles de criollo en h3
  article.querySelectorAll('[data-criollo-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const open = body.classList.toggle('hidden');
      btn.querySelector('[data-arrow]').textContent = open ? '▸' : '▾';
    });
  });
  // Activar lightbox en imágenes (lazy: lo manejamos en Task 8)
  article.querySelectorAll('img[data-lightbox]').forEach((img) => {
    img.addEventListener('click', () => window.openLightbox?.(img.src, img.alt));
  });

  // Nav entre secciones
  const total = SECTIONS.length;
  const idx = SECTIONS.findIndex((x) => x.id === s.id);
  const prev = idx > 0 ? SECTIONS[idx - 1] : null;
  const next = idx < total - 1 ? SECTIONS[idx + 1] : null;
  document.getElementById('section-nav').innerHTML = `
    ${prev
      ? `<a href="seccion.html?id=${prev.id}" class="text-[var(--accent)]">← Sección ${prev.id}</a>`
      : '<span></span>'}
    ${next
      ? `<a href="seccion.html?id=${next.id}" class="text-[var(--accent)]">Sección ${next.id} →</a>`
      : '<span></span>'}
  `;

  // Bottom bar: quiz + flashcards
  document.getElementById('bottom-bar').innerHTML = `
    <a href="quiz.html?id=${s.id}"
       class="touch-target inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] bg-[var(--accent)] text-white font-medium">
      Hacer quiz
    </a>
    <a href="flashcards.html?id=${s.id}"
       class="touch-target inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)] text-[var(--text)] font-medium">
      Flashcards
    </a>
  `;
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
    default:
      return '';
  }
}
```

- [ ] **Step 3: Verificar en navegador**

Abrir: `http://localhost:8000/seccion.html?id=1`

Expected:
- Breadcrumb "← Volver al índice" funcional.
- Header con "Sección 1" + título "¿Qué es un proyecto y por qué necesita gestión?".
- Callout amarillo "En criollo" con la explicación de toda la sección.
- 2 sub-secciones ("Definición de proyecto" y "La administración de proyectos"), cada una con botón colapsable "▾ En criollo".
- Listas con bullets renderizadas bien.
- Nav entre secciones al final (← no aparece porque es la 1, sí aparece "Sección 2 →").
- Bottom bar fija en mobile con dos botones grandes: "Hacer quiz" (azul) y "Flashcards" (outline).
- En desktop la bottom bar pasa a ser inline al final del contenido.
- Volver a home y verificar que la card de sección 1 ahora muestra "✓ Leída".

Probar también: `http://localhost:8000/seccion.html?id=99` → redirige a home (id inválido).

- [ ] **Step 4: Commit**

```bash
git add seccion.html js/seccion.js
git commit -m "$(cat <<'EOF'
feat: vista de sección con criollo, blocks y nav entre secciones

seccion.html lee ?id= y renderiza el apunte: criollo principal, blocks
del apunte (h3 con criollo colapsable, párrafos, listas, callouts,
figures), navegación entre secciones anterior/siguiente, y bottom bar
sticky en mobile con quiz/flashcards. Al cargar marca la sección como
leída. Si el id es inválido, redirige a home.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 8: Lightbox modal para imágenes (`js/lightbox.js`)

**Files:**
- Create: `js/lightbox.js`
- Modify: `seccion.html` (agregar contenedor + script)

- [ ] **Step 1: Crear `js/lightbox.js`**

Contenido completo:
```javascript
/**
 * Lightbox modal global. Expone window.openLightbox(src, alt).
 * El modal se crea una sola vez al cargar el script.
 */

let backdrop, img, caption;

function ensureModal() {
  if (backdrop) return;
  backdrop = document.createElement('div');
  backdrop.className =
    'fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-sm flex items-center justify-center p-4';
  backdrop.innerHTML = `
    <button type="button"
            aria-label="Cerrar"
            class="absolute top-4 right-4 text-white text-3xl leading-none">×</button>
    <div class="max-w-5xl w-full">
      <img alt="" class="w-full max-h-[80vh] object-contain rounded-[var(--radius)] bg-white" />
      <p data-caption class="text-white text-center text-sm mt-3"></p>
    </div>
  `;
  document.body.appendChild(backdrop);
  img = backdrop.querySelector('img');
  caption = backdrop.querySelector('[data-caption]');

  const close = () => backdrop.classList.add('hidden');
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop || e.target.tagName === 'BUTTON') close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

window.openLightbox = function (src, alt = '') {
  ensureModal();
  img.src = src;
  img.alt = alt;
  caption.textContent = alt;
  backdrop.classList.remove('hidden');
};
```

- [ ] **Step 2: Agregar el script al `seccion.html`**

En `seccion.html`, justo antes de `<script type="module" src="js/seccion.js"></script>`, agregar:
```html
  <script type="module" src="js/lightbox.js"></script>
```

(El orden importa: lightbox primero define `window.openLightbox`, después `seccion.js` lo usa.)

- [ ] **Step 3: Verificar**

Recargar `http://localhost:8000/seccion.html?id=1`.

Sección 1 no tiene imágenes (esa es la realidad del contenido). Para verificar el lightbox antes de tener secciones con figures, agregar **temporalmente** un block figure de prueba en `js/content.js` dentro de la sección 1, después del último párrafo:

```js
{
  type: 'figure',
  src: 'images/diagrams/embudo-fuentes.png',
  alt: 'Embudo de fuentes',
  caption: 'Test temporal — borrar antes de commit',
},
```

Recargar, verificar que:
- La imagen aparece en la sección.
- Click en la imagen abre el lightbox.
- Backdrop oscuro, imagen centrada.
- Click fuera de la imagen o tecla Esc cierra el lightbox.
- Botón × arriba a la derecha también cierra.

**Borrar el block de prueba** antes de commitear.

- [ ] **Step 4: Commit**

```bash
git add js/lightbox.js seccion.html
git commit -m "$(cat <<'EOF'
feat: lightbox modal global para visualizar imágenes en grande

js/lightbox.js define window.openLightbox(src, alt). Se carga desde
seccion.html antes de seccion.js. Cierra con click fuera, botón × o
Escape. Permite ver los diagramas del apunte a tamaño completo
(crítico en mobile).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 9: Visor de PDFs (`pdfs.html` + `js/pdfs.js`)

**Files:**
- Create: `pdfs.html`
- Create: `js/pdfs.js`

PDF.js (CDN): se carga desde `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.min.mjs` (módulo ES, soporta `import`).

- [ ] **Step 1: Crear `pdfs.html`**

Contenido completo:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PDFs — Admin de Proyectos I</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="css/extra.css" />
  <style>
    /* Canvas del PDF: sombra suave para que se destaque sobre el fondo */
    #pdf-canvas {
      box-shadow: var(--shadow);
      max-width: 100%;
      height: auto;
      background: white;
    }
  </style>
</head>
<body class="has-bottom-bar md:pb-0">
  <main class="max-w-5xl mx-auto px-4 py-4">
    <div id="tabs" class="flex gap-2 overflow-x-auto pb-2 mb-3 md:hidden"></div>
    <div class="md:flex md:gap-6">
      <aside id="tabs-desktop" class="hidden md:block md:w-48 shrink-0 space-y-2"></aside>
      <section class="flex-1 min-w-0">
        <div class="hidden md:flex justify-between items-center mb-3">
          <div id="page-info" class="text-sm text-[var(--muted)]"></div>
          <div class="flex gap-2">
            <button id="prev" class="touch-target px-3 py-2 rounded-[var(--radius-sm)] border border-[var(--border-strong)]">◀</button>
            <button id="next" class="touch-target px-3 py-2 rounded-[var(--radius-sm)] border border-[var(--border-strong)]">▶</button>
            <button id="zoom-out" class="touch-target px-3 py-2 rounded-[var(--radius-sm)] border border-[var(--border-strong)]">−</button>
            <button id="zoom-in" class="touch-target px-3 py-2 rounded-[var(--radius-sm)] border border-[var(--border-strong)]">+</button>
            <a id="open-original-d" href="#" target="_blank" rel="noopener" class="touch-target px-3 py-2 rounded-[var(--radius-sm)] border border-[var(--border-strong)] text-sm">Abrir original</a>
          </div>
        </div>
        <div id="status" class="text-[var(--muted)] text-sm mb-2"></div>
        <div class="flex justify-center"><canvas id="pdf-canvas"></canvas></div>
      </section>
    </div>
  </main>
  <!-- Bottom bar mobile -->
  <div id="bottom-bar-mobile"
       class="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--surface)] border-t border-[var(--border)] p-3 flex gap-2 z-30">
    <button id="prev-m" class="touch-target flex-1 px-3 py-2 rounded-[var(--radius-sm)] border border-[var(--border-strong)]">◀</button>
    <div id="page-info-m" class="flex-1 text-center text-sm self-center text-[var(--muted)]"></div>
    <button id="next-m" class="touch-target flex-1 px-3 py-2 rounded-[var(--radius-sm)] border border-[var(--border-strong)]">▶</button>
    <button id="zoom-out-m" class="touch-target px-3 py-2 rounded-[var(--radius-sm)] border border-[var(--border-strong)]">−</button>
    <button id="zoom-in-m" class="touch-target px-3 py-2 rounded-[var(--radius-sm)] border border-[var(--border-strong)]">+</button>
    <a id="open-original-m" href="#" target="_blank" rel="noopener" class="touch-target self-center text-sm text-[var(--accent)]">Abrir</a>
  </div>
  <script type="module" src="js/pdfs.js"></script>
</body>
</html>
```

- [ ] **Step 2: Crear `js/pdfs.js`**

Contenido completo:
```javascript
import { renderNav } from './nav.js';
import * as pdfjs from 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.min.mjs';

renderNav({ active: 'pdfs' });

pdfjs.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.mjs';

const DOCS = [
  { key: 'fundamentos', label: 'Fundamentos', path: 'pdfs/fundamentos.pdf' },
  { key: 'consideraciones', label: 'Consideraciones', path: 'pdfs/consideraciones.pdf' },
  { key: 'presentacion', label: 'Presentación', path: 'pdfs/presentacion.pdf' },
];

const params = new URLSearchParams(location.search);
let activeKey = DOCS.some((d) => d.key === params.get('doc')) ? params.get('doc') : 'fundamentos';
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

function renderTabs() {
  const tabHtml = (d) => `
    <a href="pdfs.html?doc=${d.key}"
       class="touch-target inline-flex items-center justify-center px-3 py-2 rounded-[var(--radius-sm)] text-sm whitespace-nowrap
              ${d.key === activeKey
                ? 'bg-[var(--accent)] text-white'
                : 'border border-[var(--border-strong)] text-[var(--text)] hover:bg-[var(--surface-2)]'}">
      ${d.label}
    </a>
  `;
  document.getElementById('tabs').innerHTML = DOCS.map(tabHtml).join('');
  document.getElementById('tabs-desktop').innerHTML = DOCS.map((d) => `
    <a href="pdfs.html?doc=${d.key}"
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

- [ ] **Step 3: Verificar**

Abrir: `http://localhost:8000/pdfs.html`

Expected:
- Tabs visibles arriba en mobile (scrolleables si no entran), sidebar a la izquierda en desktop.
- "Fundamentos" activo por default.
- El canvas muestra la página 1 del PDF de Fundamentos.
- Botones ◀ ▶ navegan páginas.
- − / + zoom in/out.
- En mobile, los controles están en bottom bar.
- "Abrir original" abre el PDF en una pestaña nueva (visor nativo del navegador).
- Cambiar a tab "Presentación" — recarga la página con `?doc=presentacion` y muestra ese PDF.

Verificar también: si la conexión de PDF.js CDN falla (lo podés simular en DevTools Network → Offline), aparece el mensaje "No se pudo cargar el PDF. Probá 'Abrir original'".

- [ ] **Step 4: Commit**

```bash
git add pdfs.html js/pdfs.js
git commit -m "$(cat <<'EOF'
feat: visor de PDFs con PDF.js y controles mobile-first

pdfs.html + js/pdfs.js cargan PDF.js por CDN, muestran tabs por documento
(scrolleables horizontales en mobile, sidebar en desktop), canvas con
la página actual y controles de navegación + zoom. Bottom bar fija en
mobile con prev/next/page/zoom/abrir-original. Fallback a "Abrir
original" si PDF.js no carga.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 10: Quiz (`quiz.html` + `js/quiz.js`)

**Files:**
- Create: `quiz.html`
- Create: `js/quiz.js`

- [ ] **Step 1: Crear `quiz.html`**

Contenido completo:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quiz — Admin de Proyectos I</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="css/extra.css" />
</head>
<body class="has-bottom-bar">
  <main class="max-w-2xl mx-auto px-4 py-6">
    <div id="quiz-header" class="mb-4"></div>
    <div id="quiz-body"></div>
    <div id="quiz-summary" class="hidden"></div>
  </main>
  <div id="quiz-bottom"
       class="fixed bottom-0 left-0 right-0 md:static md:max-w-2xl md:mx-auto bg-[var(--surface)] border-t md:border-0 border-[var(--border)] p-3 md:p-0 md:mt-6 md:pb-10 z-30"></div>
  <script type="module" src="js/quiz.js"></script>
</body>
</html>
```

- [ ] **Step 2: Crear `js/quiz.js`**

Contenido completo:
```javascript
import { renderNav } from './nav.js';
import { getSection } from './content.js';
import { saveQuizScore } from './storage.js';

renderNav({ active: 'home' });

const id = new URLSearchParams(location.search).get('id');
const section = getSection(id);

if (!section) {
  location.replace('index.html');
}

// Construcción de preguntas: V/F primero, luego MC, orden estable.
const questions = [
  ...section.quiz.tf.map((q) => ({ ...q, kind: 'tf' })),
  ...section.quiz.mc.map((q) => ({ ...q, kind: 'mc' })),
];

let current = 0;
let correct = 0;
const wrongAnswers = []; // { question, chosen }

document.title = `Quiz: ${section.title}`;
document.getElementById('quiz-header').innerHTML = `
  <a href="seccion.html?id=${section.id}" class="text-sm text-[var(--muted)] hover:text-[var(--text)]">← Volver a la sección</a>
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

  // Bloquear todas las opciones
  document.querySelectorAll('#options button').forEach((b) => (b.disabled = true));

  // Marcar elegida
  btn.classList.add(isCorrect ? 'option-correct' : 'option-wrong');

  // Si fue incorrecta, marcar la correcta en verde
  if (!isCorrect) {
    const correctIdx = opts.findIndex((o) => o.value === correctValue);
    document.querySelector(`#options button[data-idx="${correctIdx}"]`).classList.add('option-correct');
    wrongAnswers.push({ question: q, chosenText: opts[Number(btn.dataset.idx)].text });
  } else {
    correct++;
  }

  // Mostrar explicación
  const exp = document.getElementById('explanation');
  exp.innerHTML = `<p>${q.explain}</p>`;
  exp.classList.remove('hidden');

  // Habilitar Siguiente
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
  saveQuizScore(section.id, { correct, total: questions.length });
  document.getElementById('quiz-body').classList.add('hidden');
  document.getElementById('quiz-bottom').innerHTML = '';
  const summary = document.getElementById('quiz-summary');
  summary.classList.remove('hidden');
  const pct = Math.round((correct / questions.length) * 100);
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
      <a href="quiz.html?id=${section.id}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] bg-[var(--accent)] text-white">Reintentar</a>
      <a href="flashcards.html?id=${section.id}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)]">Flashcards</a>
      <a href="seccion.html?id=${section.id}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)]">Volver a la sección</a>
    </div>
  `;
}
```

- [ ] **Step 3: Verificar**

Abrir: `http://localhost:8000/quiz.html?id=1`

Expected:
- Breadcrumb a la sección.
- Header "Quiz — Sección 1" + "Pregunta 1 de 7" + barra de progreso.
- Card con la primera pregunta + 2 opciones (V/F) o 4 opciones (MC).
- Click en una opción → se pinta verde (correcta) o rojo (incorrecta).
- Si fue incorrecta, la opción correcta también se pinta verde.
- Aparece la explicación abajo.
- Botón "Siguiente" se habilita.
- Avanzo por las 7 preguntas (4 V/F + 3 MC) y al final aparece el resumen con score X/7 + lista de erradas + 3 botones (Reintentar / Flashcards / Volver).
- Volver a home: la card de sección 1 muestra "Quiz: X/7".

- [ ] **Step 4: Commit**

```bash
git add quiz.html js/quiz.js
git commit -m "$(cat <<'EOF'
feat: quiz con V/F y multiple choice, feedback instantáneo

quiz.html + js/quiz.js renderizan una pregunta por pantalla
(combinando tf y mc en orden estable), marcan verde/rojo al
seleccionar, muestran la explicación de la respuesta y permiten
avanzar con botón sticky bottom. Pantalla final con score, lista de
erradas y opciones de reintentar / flashcards / volver. Guarda el
último score en localStorage.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 11: Flashcards (`flashcards.html` + `js/flashcards.js`)

**Files:**
- Create: `flashcards.html`
- Create: `js/flashcards.js`

- [ ] **Step 1: Crear `flashcards.html`**

Contenido completo:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Flashcards — Admin de Proyectos I</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="css/extra.css" />
  <style>
    /* Flip animation usando 3D transforms */
    .flashcard { perspective: 1200px; }
    .flashcard-inner {
      position: relative;
      width: 100%;
      transform-style: preserve-3d;
      transition: transform 0.5s;
    }
    .flashcard.is-flipped .flashcard-inner { transform: rotateY(180deg); }
    .flashcard-face {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      text-align: center;
    }
    .flashcard-back { transform: rotateY(180deg); }
  </style>
</head>
<body class="has-bottom-bar">
  <main class="max-w-2xl mx-auto px-4 py-6">
    <div id="fc-header" class="mb-4"></div>
    <div id="fc-stage" class="min-h-[55vh] flex items-center justify-center"></div>
    <div id="fc-summary" class="hidden"></div>
  </main>
  <div id="fc-bottom"
       class="fixed bottom-0 left-0 right-0 md:static md:max-w-2xl md:mx-auto bg-[var(--surface)] border-t md:border-0 border-[var(--border)] p-3 md:p-0 md:mt-6 md:pb-10 grid grid-cols-2 gap-3 z-30"></div>
  <script type="module" src="js/flashcards.js"></script>
</body>
</html>
```

- [ ] **Step 2: Crear `js/flashcards.js`**

Contenido completo:
```javascript
import { renderNav } from './nav.js';
import { getSection } from './content.js';
import { markFlashcard } from './storage.js';

renderNav({ active: 'home' });

const id = new URLSearchParams(location.search).get('id');
const section = getSection(id);

if (!section) {
  location.replace('index.html');
}

document.title = `Flashcards: ${section.title}`;
document.getElementById('fc-header').innerHTML = `
  <a href="seccion.html?id=${section.id}" class="text-sm text-[var(--muted)] hover:text-[var(--text)]">← Volver a la sección</a>
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
    markFlashcard(section.id, card.id, true);
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
  s.innerHTML = `
    <div class="surface-card p-6 mt-6 text-center">
      <p class="text-sm text-[var(--muted)]">Resultado de esta sesión</p>
      <p class="text-4xl font-semibold mt-2">${knownThisSession}/${total}</p>
      <p class="text-[var(--muted)] mt-1">marcadas como sabidas</p>
    </div>
    <div class="flex flex-col md:flex-row gap-3 mt-8">
      <a href="flashcards.html?id=${section.id}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] bg-[var(--accent)] text-white">Reiniciar</a>
      <a href="quiz.html?id=${section.id}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)]">Hacer quiz</a>
      <a href="seccion.html?id=${section.id}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)]">Volver a la sección</a>
    </div>
  `;
}
```

- [ ] **Step 3: Verificar**

Abrir: `http://localhost:8000/flashcards.html?id=1`

Expected:
- Header "Flashcards — Sección 1" + contador "Quedan 7 · 0 sabidas".
- Tarjeta grande en el medio mostrando el `front` (ej: "Proyecto").
- Click en la tarjeta → animación de flip → muestra el `back`.
- Click otra vez → vuelve al front.
- Botones abajo: "↻ Repasar" (outline) y "✓ La sabía" (verde).
- "La sabía" → marca la fc, suma al contador, avanza a la siguiente.
- "Repasar" → manda al final de la cola sin marcar.
- Al vaciarse la cola: pantalla de resumen con X/7 + botones reiniciar/quiz/volver.
- Volver a home: la card de sección 1 muestra "Flashcards: X/7" reflejando las marcadas.

- [ ] **Step 4: Commit**

```bash
git add flashcards.html js/flashcards.js
git commit -m "$(cat <<'EOF'
feat: flashcards con flip animado y cola simple

flashcards.html + js/flashcards.js renderizan una tarjeta a la vez
con flip CSS 3D, controles "La sabía" / "Repasar" full-width sticky
bottom en mobile. "La sabía" persiste en localStorage; "Repasar"
manda al final de la cola dentro de la sesión. Pantalla final con
resumen y botones reiniciar / quiz / volver.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 12: Contenido — Sección 2 (Nacimiento) y Sección 3 (Ciclo de vida)

**Files:**
- Modify: `js/content.js` (reemplazar stubs de secciones 2 y 3 con contenido completo)

**Fuente del contenido:**
- Sección 2: PDF1 §2 (páginas 1-3 — "El nacimiento de un proyecto: la fase conceptual"). Imágenes: `embudo-fuentes.png` (PDF3 p.4) y `proceso-fuentes.png` (PDF3 p.9).
- Sección 3: PDF1 §3 (páginas 3-4 — "El ciclo de vida del proyecto y las áreas de conocimiento"). Imágenes: `ciclo-de-vida.png` (PDF3 p.10) y `pm-wheel.png` (PDF3 p.11).

- [ ] **Step 1: Leer el apunte para tener el contenido fresco**

Abrir `pdfs/fundamentos.pdf` en el navegador o ver `http://localhost:8000/pdfs.html?doc=fundamentos`. Releer páginas 1-4 (correspondientes a §2 y §3) y tomar nota mental del contenido.

- [ ] **Step 2: Reemplazar el stub de Sección 2 en `js/content.js`**

Estructura esperada (transcribir el contenido fiel al PDF):

```js
{
  id: '2',
  title: 'El nacimiento de un proyecto (fase conceptual)',
  criollo: '<EN CRIOLLO: ~2-3 frases informales sobre cómo nace un proyecto: ideas → análisis → aprobación. Mencionar que pasa por filtros antes de empezar.>',
  blocks: [
    { type: 'p', text: '<Párrafo introductorio del apunte §2>' },
    { type: 'h3', text: 'Fuentes de proyectos', criollo: '<De dónde salen las ideas para nuevos proyectos>' },
    { type: 'p', text: '<Bajada del h3>' },
    { type: 'ul', items: [
      'Oportunidades de negocio: <texto del PDF>',
      'Requerimientos del cliente: <texto>',
      'Cambios regulatorios: <texto>',
      'Plan estratégico: <texto>',
      'Ideas innovadoras: <texto>',
    ]},
    { type: 'figure', src: 'images/diagrams/embudo-fuentes.png',
      alt: 'Embudo: fuentes de proyectos pasan por business case y estudio de factibilidad hasta llegar a aprobación',
      caption: 'Las fuentes entran al embudo y se filtran hasta llegar a proyecto aprobado.' },
    { type: 'h3', text: 'El proceso de selección y aprobación', criollo: '<Cómo se evalúa una idea para decidir si se hace o no>' },
    { type: 'ol', items: [
      'Business case (caso de negocio): <texto>',
      'Estudio de factibilidad: <texto>',
      'Comités de revisión: <texto>',
    ]},
    { type: 'p', text: '<Detalle sobre los 3 tipos de comités: directivo, sistemas de información, grupo de usuarios>' },
    { type: 'ul', items: [
      'Comité directivo (steering committee): <texto>',
      'Comité de sistemas de información: <texto>',
      'Comité del grupo de usuarios: <texto>',
    ]},
    { type: 'figure', src: 'images/diagrams/proceso-fuentes.png',
      alt: 'Proceso de fuentes hasta estudio de factibilidad',
      caption: 'Flujo: ideas → oportunidades → requerimientos → cambios → plan estratégico → estudio de factibilidad.' },
    { type: 'p', text: '<Cierre del PDF §2>' },
  ],
  quiz: {
    tf: [
      // 3-5 preguntas V/F basadas en §2. Ejemplos:
      { id: 'tf-2-1', q: 'Los cambios regulatorios pueden originar nuevos proyectos.', a: true, explain: 'Verdadero. El apunte los lista como una de las 5 fuentes de proyectos.' },
      // ... 3-4 más
    ],
    mc: [
      // 3-5 preguntas MC. Ejemplos:
      { id: 'mc-2-1', q: '¿Cuál es el primer documento formal que justifica un proyecto?',
        options: ['Plan de proyecto', 'Business case', 'WBS', 'Project charter'],
        correctIndex: 1,
        explain: 'El business case (caso de negocio) es el primer documento formal: justifica la razón de ser del proyecto.' },
      // ... 2-4 más
    ],
  },
  flashcards: [
    // 6-8 flashcards de conceptos clave: fuentes, business case, factibilidad técnica/económica/operativa, los 3 comités.
    { id: 'fc-2-1', front: 'Business case', back: 'Primer documento formal que justifica el proyecto: analiza beneficios, costos y alineación estratégica.' },
    // ... 5-7 más
  ],
},
```

**Requisitos cuantitativos por sección 2:**
- 4-5 V/F.
- 3-4 MC (4 opciones cada una).
- 7-8 flashcards.
- Criollo del título + criollo en cada h3.
- Mínimo 1 figure (idealmente 2 — `embudo-fuentes` y `proceso-fuentes`).

- [ ] **Step 3: Reemplazar el stub de Sección 3 en `js/content.js`**

Estructura esperada (transcribir fiel al PDF1 §3):

```js
{
  id: '3',
  title: 'Ciclo de vida y áreas de conocimiento PMBOK',
  criollo: '<EN CRIOLLO: el proyecto pasa por 5 fases — inicio, planificación, ejecución, monitoreo y cierre. Y el PMBOK son las 9 áreas que hay que gestionar a lo largo de esas fases.>',
  blocks: [
    { type: 'p', text: '<Intro del §3>' },
    { type: 'ol', items: [
      'Inicio: <texto>',
      'Planificación: <texto>',
      'Ejecución: <texto>',
      'Monitoreo y control: <texto>',
      'Cierre: <texto>',
    ]},
    { type: 'figure', src: 'images/diagrams/ciclo-de-vida.png', alt: '...', caption: '...' },
    { type: 'h3', text: 'El PMI y la Guía del PMBOK®', criollo: '<Qué es el PMI y qué es el PMBOK>' },
    { type: 'p', text: '<Texto del PDF>' },
    { type: 'h3', text: 'Áreas de conocimiento', criollo: '<Las 9 áreas que el director de proyecto tiene que coordinar>' },
    { type: 'ul', items: [
      'Gestión de la integración: <texto>',
      'Gestión del alcance: <texto>',
      'Gestión del tiempo (cronograma): <texto>',
      'Gestión de los costos: <texto>',
      'Gestión de la calidad: <texto>',
      'Gestión de los recursos humanos: <texto>',
      'Gestión de las comunicaciones: <texto>',
      'Gestión de los riesgos: <texto>',
      'Gestión de las adquisiciones: <texto>',
    ]},
    { type: 'figure', src: 'images/diagrams/pm-wheel.png', alt: '...', caption: '...' },
  ],
  quiz: {
    tf: [/* 4-5 */],
    mc: [/* 3-4 */],
  },
  flashcards: [/* 8-10 (las 5 fases + el PMI + el PMBOK + 2-3 áreas clave) */],
},
```

- [ ] **Step 4: Verificar**

Recargar `http://localhost:8000/seccion.html?id=2` y `?id=3`:
- Renderizan completas, sin "TBD".
- Las imágenes cargan correctamente.
- Click en imagen → lightbox abre con la imagen a tamaño completo.
- Los h3 colapsan/expanden criollo.
- `quiz.html?id=2` y `?id=3` corren y muestran las preguntas.
- `flashcards.html?id=2` y `?id=3` corren con las cards correctas.

- [ ] **Step 5: Commit**

```bash
git add js/content.js
git commit -m "$(cat <<'EOF'
content: secciones 2 (Nacimiento) y 3 (Ciclo de vida + PMBOK)

Llena las dos secciones con: criollo del título y por h3, blocks con
párrafos y listas del PDF1 §2-3, figures con embudo-fuentes,
proceso-fuentes, ciclo-de-vida y pm-wheel. Quizzes (V/F + MC) y
flashcards basadas exclusivamente en el texto del apunte.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 13: Contenido — Sección 4 (Planificación) y Sección 5 (Herramientas)

**Files:**
- Modify: `js/content.js`

**Fuente:**
- Sección 4: PDF1 §4 (páginas 4-6 — "Fundamentos de la planificación"). Imágenes: `smart-cards.png` (PDF3 p.15), `esfuerzo-duracion-1.png` (PDF3 p.7), `esfuerzo-duracion-2.png` (PDF3 p.8).
- Sección 5: PDF1 §5 (página 6 — "Herramientas esenciales") + PDF3 p.17 (lista que incluye OBS). Imágenes: `project-charter-illustration.jpeg` (PDF3 p.18).

- [ ] **Step 1: Reemplazar Sección 4 en `js/content.js`**

Estructura:
```js
{
  id: '4',
  title: 'Fundamentos de la planificación',
  criollo: '<EN CRIOLLO: planificar bien es la base. SMART te ayuda a definir objetivos que no sean chamuyo. Y hay que saber diferenciar esfuerzo (horas-persona), duración (días laborales) y tiempo calendario (días reales que pasan).>',
  blocks: [
    { type: 'p', text: '<Intro: beneficios de planear bien>' },
    { type: 'h3', text: 'Objetivos SMART', criollo: '<Acrónimo para definir objetivos claros>' },
    { type: 'ul', items: [
      'S - Específico (Specific): <texto + ejemplo correcto/incorrecto del PDF>',
      'M - Medible (Measurable): <texto + ejemplo>',
      'A - Alcanzable (Achievable): <texto>',
      'R - Realista/Relevante: <texto + ejemplo>',
      'T - Oportuno/Limitado en el tiempo: <texto + ejemplo>',
    ]},
    { type: 'figure', src: 'images/diagrams/smart-cards.png', alt: '...', caption: '...' },
    { type: 'h3', text: 'Esfuerzo vs. Duración vs. Tiempo calendario', criollo: '<La distinción entre los 3 conceptos para armar cronogramas realistas>' },
    { type: 'ul', items: [
      'Esfuerzo (tiempo/persona): <texto>',
      'Duración (días laborales): <texto>',
      'Tiempo calendario: <texto>',
    ]},
    { type: 'figure', src: 'images/diagrams/esfuerzo-duracion-1.png', alt: '...', caption: '...' },
    { type: 'callout', tone: 'info', text: 'Ejemplo práctico del apunte: una tarea de 16 horas-persona ejecutada por 1 programador (8 hs/día) tiene duración 2 días laborales pero tiempo calendario 4 días si arranca un viernes.' },
    { type: 'figure', src: 'images/diagrams/esfuerzo-duracion-2.png', alt: '...', caption: '...' },
  ],
  quiz: {
    tf: [/* 4-5, incluyendo distinción esfuerzo/duración/calendario y SMART */],
    mc: [/* 3-4, ejemplo: "¿Qué significa la R de SMART?", "Si una tarea de 16 hs arranca viernes con 1 programador, su tiempo calendario es..."*/],
  },
  flashcards: [/* 7-9: cada letra SMART + esfuerzo + duración + tiempo calendario + ejemplo */],
},
```

- [ ] **Step 2: Reemplazar Sección 5 en `js/content.js`**

Estructura:
```js
{
  id: '5',
  title: 'Herramientas esenciales de gestión de proyectos',
  criollo: '<EN CRIOLLO: las herramientas estándar que vas a ver siempre: el Charter (la partida de nacimiento del proyecto), el WBS (cómo se desglosa el laburo), el Gantt (cronograma visual), el plan maestro, y los procesos de riesgos y cambios.>',
  blocks: [
    { type: 'p', text: '<Intro §5>' },
    { type: 'h3', text: 'Project charter (Acta de constitución)', criollo: '<La "partida de nacimiento" del proyecto>' },
    { type: 'p', text: '<Texto del PDF: documento que autoriza, qué incluye>' },
    { type: 'figure', src: 'images/diagrams/project-charter-illustration.jpeg', alt: 'Ilustración de un Project Charter sobre un escritorio', caption: 'El Project Charter formaliza el qué, por qué, quién y cuándo del proyecto.' },
    { type: 'h3', text: 'WBS (Work Breakdown Structure)', criollo: '<Cómo se rompe el proyecto en pedazos manejables>' },
    { type: 'p', text: '<Texto del PDF: descomposición jerárquica, paquetes de trabajo>' },
    { type: 'h3', text: 'OBS (Organization Breakdown Structure)', criollo: '<Estructura jerárquica de la organización del proyecto. El apunte la menciona pero no la desarrolla en detalle.>' },
    { type: 'callout', tone: 'info', text: 'OBS aparece en el listado de herramientas del PDF de presentación (slide 17) pero no se desarrolla en el apunte. Es la contraparte organizacional del WBS: mientras el WBS divide el "qué hay que hacer", el OBS divide el "quién lo hace".' },
    { type: 'h3', text: 'Cronograma Gantt', criollo: '<El cronograma visual clásico>' },
    { type: 'p', text: '<Texto del PDF>' },
    { type: 'h3', text: 'Plan de proyecto', criollo: '<El documento maestro que integra todo>' },
    { type: 'p', text: '<Texto del PDF>' },
    { type: 'h3', text: 'Gestión de riesgos y cambios', criollo: '<Procesos para no quedar pegados con sorpresas o con scope creep>' },
    { type: 'p', text: '<Texto del PDF, mencionar scope creep>' },
  ],
  quiz: {
    tf: [/* 4-5: charter es la partida de nacimiento, WBS no dice cuándo se hacen las cosas, scope creep es corrupción del alcance */],
    mc: [/* 3-4 */],
  },
  flashcards: [/* 8-10: Charter, WBS, OBS, Gantt, Plan, Riesgos, Cambios, Scope creep */],
},
```

- [ ] **Step 3: Verificar**

Abrir `seccion.html?id=4` y `?id=5` y verificar:
- Texto fiel al PDF.
- Imágenes cargan (3 en §4, 1 en §5).
- Criollo en cada h3 funciona.
- Quizzes y flashcards correctos.

- [ ] **Step 4: Commit**

```bash
git add js/content.js
git commit -m "$(cat <<'EOF'
content: secciones 4 (Planificación / SMART) y 5 (Herramientas)

§4 cubre SMART (con ejemplo de cada letra) y la distinción
esfuerzo/duración/tiempo calendario con el ejemplo del PDF.
§5 cubre Charter, WBS, OBS (con la nota de que el apunte no la
desarrolla), Gantt, Plan y gestión de riesgos/cambios (incluye
scope creep). Imágenes: smart-cards, esfuerzo-duracion-1/2,
project-charter-illustration.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 14: Contenido — Sección 6 (Desafíos) y Sección 7 (Consideraciones)

**Files:**
- Modify: `js/content.js`

**Fuente:**
- Sección 6: PDF1 §6 (páginas 6-7 — "Desafíos comunes"). Sin imágenes propias.
- Sección 7: PDF2 completo (5 puntos sobre proyectos de sistemas). Sin imágenes.

Nota importante: las secciones 6 y 7 son "planas" (sin sub-secciones h3), por lo que el criollo a nivel sub-tema va como `callout` de tipo `info` después del bullet o párrafo correspondiente, según el spec §4.

- [ ] **Step 1: Reemplazar Sección 6 en `js/content.js`**

Estructura:
```js
{
  id: '6',
  title: 'Desafíos comunes en la gestión de proyectos',
  criollo: '<EN CRIOLLO: las 5 cagadas típicas que hacen fracasar proyectos: no saber a dónde van, cronogramas imposibles, gente saturada con mil proyectos, la dirección cambiando de idea y mala comunicación.>',
  blocks: [
    { type: 'p', text: '<Intro del §6>' },
    { type: 'ul', items: [
      'Objetivos poco claros: <texto del PDF>',
      'Planes y calendarios irreales: <texto>',
      'Recursos saturados: <texto>',
      'Prioridades cambiantes: <texto>',
      'Comunicación deficiente: <texto>',
    ]},
    { type: 'callout', tone: 'info', text: 'En criollo: cada uno de estos 5 puntos es una señal de alarma. Si los detectás a tiempo (al inicio del proyecto), un buen project manager puede mitigarlos. Si los ignorás, el proyecto se va a la lona.' },
    { type: 'p', text: '<Cierre del PDF: un buen gerente trabaja proactivamente para mitigar>' },
  ],
  quiz: {
    tf: [/* 3-4 */],
    mc: [/* 3 */],
  },
  flashcards: [/* 5-6: uno por desafío + qué hace un buen PM */],
},
```

- [ ] **Step 2: Reemplazar Sección 7 en `js/content.js`**

Estructura (PDF2 tiene 5 puntos numerados):
```js
{
  id: '7',
  title: 'Consideraciones generales (proyectos de sistemas)',
  criollo: '<EN CRIOLLO: 5 cosas a tener en cuenta cuando el proyecto es de sistemas/software: planear con los usuarios, investigar bien, calcular tiempos por entrevistas, asignar gente bien, y que el project leader controle disponibilidad y calidad.>',
  blocks: [
    { type: 'p', text: '<Intro contextualizando que estas son consideraciones específicas para proyectos de sistemas>' },
    { type: 'ol', items: [
      'Los proyectos de sistemas deben estar correctamente planeados, en conformidad con el grupo de usuarios.',
      'Los requerimientos de tiempo del proyecto se refieren al tiempo necesario para llevar a cabo una investigación clara y profunda del sistema a desarrollar.',
      'El tiempo de investigación del sistema se determina a partir de la cantidad de personas a entrevistar, la cantidad de tiempo necesaria para el desarrollo y la realización de las interconsultas entre los usuarios.',
      'El personal afectado al desarrollo debe ser asignado y administrado adecuadamente. Al mismo tiempo, es necesario que el desarrollo cumpla específicamente y siga los lineamientos para asegurar la calidad y efectividad de la aplicación a implementar.',
      'El desarrollo de sistemas y la actividad de la programación se consideran actividades individuales, pero desde la mirada del project leader es primordial controlar que todas las personas asignadas se encuentren disponibles para la concreción del plan de trabajo.',
    ]},
    { type: 'callout', tone: 'info', text: 'En criollo: el punto que se repite es la coordinación con el usuario. En proyectos de sistemas, si arrancás sin entender bien al cliente y sin investigar a fondo, vas a re-trabajar todo después. Y aunque programar parezca un esfuerzo individual, el rol del project leader es justamente asegurar que el equipo está disponible y alineado.' },
  ],
  quiz: {
    tf: [/* 3-4 basados en los 5 puntos */],
    mc: [/* 3 */],
  },
  flashcards: [/* 5-6: uno por cada punto + uno para "rol del project leader" */],
},
```

- [ ] **Step 3: Verificar**

Abrir `seccion.html?id=6` y `?id=7`. Confirmar:
- Texto fiel.
- Callout "En criollo" infoo aparece después del listado.
- Quizzes y flashcards funcionales.
- Volver a home: las 7 cards muestran progreso y badges actualizados.

- [ ] **Step 4: Commit**

```bash
git add js/content.js
git commit -m "$(cat <<'EOF'
content: secciones 6 (Desafíos) y 7 (Consideraciones de sistemas)

§6 cubre los 5 desafíos típicos del PDF1 §6 con criollo
inline después del listado. §7 transcribe los 5 puntos del PDF2
sobre proyectos de sistemas con criollo informal sobre el rol del
project leader y la coordinación con usuarios.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 15: README final + verificación cross-browser + ajustes mobile

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Reescribir `README.md` con instrucciones de uso**

Contenido completo:
```markdown
# Admin de Proyectos I — App de estudio

App web estática para estudiar la **Unidad 8.1 (Administración de Proyectos I)** de Sistemas y Métodos (Universidad de Palermo).

## Qué hay adentro

- **Lectura interactiva** de las 7 secciones del apunte con definiciones "en criollo".
- **Visor integrado** de los 3 PDFs originales.
- **Quizzes** de verdadero/falso y multiple choice por sección, con feedback instantáneo.
- **Flashcards** por sección con flip + cola de repaso.
- **Progreso** guardado en `localStorage` (lectura, último score de quiz, flashcards sabidas).

## Cómo correrlo

Cualquier servidor estático sirve. Por ejemplo:

```bash
python -m http.server 8000
# Abrir http://localhost:8000/
```

O, en VS Code, el plugin "Live Server" sobre `index.html`.

## Stack

- HTML + JS vanilla (módulos ES nativos)
- Tailwind CSS por CDN
- PDF.js por CDN
- Sin build, sin npm, sin TypeScript

## Estructura

```
.
├── index.html              # Home
├── seccion.html            # Lectura de una sección
├── pdfs.html               # Visor de los 3 PDFs
├── quiz.html               # Quiz por sección
├── flashcards.html         # Flashcards por sección
├── css/extra.css           # Tokens + componentes
├── js/                     # Lógica vanilla
├── images/diagrams/        # 8 diagramas del PDF presentación
├── pdfs/                   # 3 PDFs originales
├── scripts/                # Utilidades (extracción de imágenes)
└── docs/                   # Diseño y plan de implementación
```

## Deploy a GitHub Pages

1. Crear repo en GitHub y push.
2. Settings → Pages → Source: "Deploy from a branch" → `main` → `/ (root)`.
3. La app queda en `https://<usuario>.github.io/<repo>/`.

## Fuentes

Las 3 PDFs del apunte oficial de UP están en `pdfs/`. Todo el contenido textual y los diagramas vienen de ahí — uso académico personal.

## Limitaciones conocidas

- Tailwind CDN imprime un warning de consola en producción. Es aceptable para un proyecto de estudio personal.
- El progreso se guarda por navegador (no sincroniza entre dispositivos).
- No hay SRS para flashcards: la cola "repasar" solo reordena dentro de la sesión actual.
```

- [ ] **Step 2: Verificación cross-browser y mobile**

Recorrer toda la app en orden y verificar en **mobile (Chrome DevTools → device toolbar → iPhone 14)** y en **desktop**:

| Vista | Mobile | Desktop |
|-------|--------|---------|
| Home | 7 cards en una columna, scroll natural | 3 columnas, hover en cards |
| Sección 1-7 | Criollo y h3-criollos colapsables; figures se ven enteras; bottom bar con quiz/flashcards | Bottom bar pasa a inline al final |
| PDFs (los 3) | Tabs scrolleables arriba; controles abajo; navegación páginas y zoom OK | Sidebar de tabs, controles arriba |
| Quiz | Una pregunta a la vez; opciones full-width; feedback OK; resumen final | Igual pero centrado, max-width |
| Flashcards | Flip funciona al tocar; botones grandes pulgar-friendly abajo | Igual, max-width |
| Lightbox | Click en imagen abre, ✕/Esc cierra | Igual |

Fijarse en:
- Touch targets ≥44px en todos los botones.
- No hay scroll horizontal accidental en mobile.
- Bottom bar no tapa contenido (gracias a `body.has-bottom-bar`).

Si alguna cosa anda mal, ajustarla y commitear como `fix:`.

- [ ] **Step 3: Commit del README**

```bash
git add README.md
git commit -m "$(cat <<'EOF'
docs: README con instrucciones de uso, deploy y estructura

Documenta cómo correr la app (python -m http.server), el stack
elegido, la estructura del repo, instrucciones de deploy a GitHub
Pages y limitaciones conocidas (Tailwind CDN warning, sin sync,
sin SRS).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 16: Deploy a GitHub Pages

**Files:**
- Ninguno (configuración remota).

Pre-requisito: cuenta de GitHub. La app se publica en la URL `https://<usuario>.github.io/<repo>/`.

- [ ] **Step 1: Crear el repo en GitHub**

Opciones:
- Via web: crear nuevo repo `admin-proyectos-app` (o el nombre que prefieras) público.
- Via CLI:
```bash
gh repo create admin-proyectos-app --public --source=. --remote=origin
```

(Si no se tiene `gh` CLI o si hubiese login pendiente, usar la opción web.)

- [ ] **Step 2: Push de la rama `main`**

```bash
git remote add origin https://github.com/<usuario>/admin-proyectos-app.git   # solo si no se usó gh repo create
git push -u origin main
```

- [ ] **Step 3: Activar GitHub Pages**

En el navegador:
1. Ir al repo → Settings → Pages.
2. En "Source": elegir "Deploy from a branch".
3. Branch: `main`, folder: `/ (root)`.
4. Guardar.

Esperar 1-2 minutos al deploy inicial.

- [ ] **Step 4: Verificar deploy**

Abrir `https://<usuario>.github.io/admin-proyectos-app/` en el celular y verificar:
- Home carga, todas las cards aparecen.
- Click en sección 1 → renderiza completa.
- Visor PDF carga los 3 documentos.
- Quiz y flashcards corren end-to-end.
- Mobile responsivo OK.

Si las imágenes o PDFs no cargan, verificar que las rutas en el código son **relativas** (no empiezan con `/`) — `images/diagrams/...` y `pdfs/...` (no `/images/...` ni `/pdfs/...`). En GitHub Pages bajo subpath, las rutas absolutas rompen.

- [ ] **Step 5: Tag de versión inicial**

```bash
git tag -a v1.0.0 -m "v1.0.0 — primera release con las 7 secciones completas"
git push origin v1.0.0
```

---

## Cierre

A partir de este punto, mantenimiento es solo si querés agregar más contenido o ajustar UX. Si en algún momento aparece la Unidad 8.2 y se quiere extender la app, ahí sí entrará en juego una refactor (probable: pasar `content.js` a múltiples archivos, agregar un selector de unidad). Pero eso está fuera del scope actual.
