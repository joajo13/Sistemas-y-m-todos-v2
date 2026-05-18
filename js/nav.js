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
