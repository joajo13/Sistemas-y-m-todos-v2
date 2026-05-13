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
  const unitLabel = s.unit ? `Unidad ${s.unit} · ` : '';
  document.getElementById('section-header').innerHTML = `
    <p class="text-sm text-[var(--muted)]">${unitLabel}Sección ${s.id}</p>
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
