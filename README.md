# Apuntes — App de estudio

App web estática para estudiar apuntes de varias materias de la Universidad de Palermo. Actualmente cubre:

- **Administración de Proyectos** (Sistemas y Métodos) — unidades 8.1 y 8.2.
- **Análisis Matemático** — Derivadas (tabla, reglas, derivabilidad).

## Qué hay adentro

- **Selector de materias** en la home raíz.
- **Lectura interactiva** de las secciones con definiciones "en criollo", agrupadas por unidad.
- **Visor integrado** de los PDFs originales (cuando la materia los tiene).
- **Quizzes** de verdadero/falso, multiple choice y multi-select (varias o ninguna correcta) por sección.
- **Flashcards** por sección con flip + cola de repaso (cuando la sección las tiene).
- **Banco nuevo anti-spoiler** (`?set=2`): un segundo set de quiz + flashcards por sección, generado
  para autoevaluación real — las opciones son homogéneas, así que no se puede adivinar la respuesta
  por su forma. Se accede con los botones "Quiz nuevo" / "Flashcards nuevas" en cada sección. Vive en
  `js/quizzes2/<materia>.js` y no toca los apuntes de `js/subjects/`.
- **Fórmulas matemáticas** renderizadas con KaTeX (LaTeX inline `$...$` y display `$$...$$`).
- **Progreso** guardado en `localStorage` namespaced por materia (lectura, último score de quiz, flashcards sabidas).

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

## Deploy a GitHub Pages

1. Crear repo en GitHub y push.
2. Settings → Pages → Source: "Deploy from a branch" → `main` → `/ (root)`.
3. La app queda en `https://<usuario>.github.io/<repo>/`.

## Fuentes

Los PDFs del apunte oficial de UP están en `pdfs/`. Todo el contenido textual y los diagramas vienen de ahí — uso académico personal.

## Limitaciones conocidas

- Tailwind CDN imprime un warning de consola en producción. Es aceptable para un proyecto de estudio personal.
- El progreso se guarda por navegador (no sincroniza entre dispositivos).
- No hay SRS para flashcards: la cola "repasar" solo reordena dentro de la sesión actual.
