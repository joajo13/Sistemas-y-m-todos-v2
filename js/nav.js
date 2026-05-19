/**
 * Renderiza el masthead editorial compartido entre vistas.
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
  nav.className = 'masthead';

  if (!subject) {
    // Vista raíz: index.html
    nav.innerHTML = `
      <div class="masthead-inner">
        <a href="index.html" class="masthead-title">Apuntes</a>
        <span class="meta" style="font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;">
          Universidad de Palermo
        </span>
      </div>
    `;
  } else {
    const subjectHome = `materia.html?subject=${subject.id}`;
    const isActiveHome = active === 'home';
    const isActivePdfs = active === 'pdfs';

    const pdfsLink = subject.pdfs && subject.pdfs.length > 0
      ? `<a href="pdfs.html?subject=${subject.id}"
            class="btn-ghost touch-target ${isActivePdfs ? 'masthead-link-active' : ''}"
            style="padding:0.4rem 0.85rem;font-size:.78rem;letter-spacing:.06em;">
           Ver PDFs
         </a>`
      : '';

    nav.innerHTML = `
      <div class="masthead-inner">
        <div class="masthead-crumbs">
          <a href="index.html" class="masthead-back">← Materias</a>
          <span class="sep"></span>
          <a href="${subjectHome}"
             class="masthead-title ${isActiveHome ? 'masthead-link-active' : ''}"
             style="font-style:italic;">${subject.title}</a>
        </div>
        ${pdfsLink}
      </div>
    `;
  }
  document.body.prepend(nav);
}
