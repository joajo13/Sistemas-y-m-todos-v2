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
