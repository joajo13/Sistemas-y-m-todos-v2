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
