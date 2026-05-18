import { renderNav } from './nav.js';
import { getCurrentSubject, getSection } from './content.js';
import { markRead } from './storage.js';
import { renderMath } from './katex-init.js';

// Entrypoint envuelto en una función para que cada redirect pueda detener
// el flujo con return — location.replace() no halt sincrónico, así que sin
// returns el script seguiría ejecutando y accediendo a subject/section null.
main();

function main() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const subjectParam = params.get('subject');

  // Compat: URL legacy sin ?subject= → asumir sistemas-y-metodos
  if (id && !subjectParam) {
    location.replace(`seccion.html?subject=sistemas-y-metodos&id=${encodeURIComponent(id)}`);
    return;
  }

  const subject = getCurrentSubject();
  if (!subject) {
    location.replace('index.html');
    return;
  }

  const section = getSection(subject.id, id);
  if (!section) {
    location.replace(`materia.html?subject=${subject.id}`);
    return;
  }

  renderNav({ active: 'home', subject });

  document.title = `${section.title} — ${subject.title}`;
  renderSection(subject, section);
  markRead(subject.id, section.id);
}

function renderSection(subject, s) {
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
  } else {
    bottomBar.className = bottomBar.className
      .replace(/grid-cols-\d+/, `grid-cols-${buttons.length}`);
    bottomBar.innerHTML = buttons.join('');
  }

  // Render KaTeX en todo el contenido inyectado (incluye p/ul/ol/callout/table/math)
  // Esperar a que KaTeX cargue (los scripts son `defer`).
  if (typeof window.renderMathInElement === 'function') {
    renderMath(article);
  } else {
    // Si todavía no cargó, esperar a 'load' una sola vez.
    window.addEventListener('load', () => renderMath(article), { once: true });
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
