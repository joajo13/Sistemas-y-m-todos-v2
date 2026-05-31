import { renderNav } from './nav.js';
import { getCurrentSubject, getSection } from './content.js';
import { markRead } from './storage.js';
import { renderMath } from './katex-init.js';

// Promesa de carga de Mermaid (declarada antes de main() para evitar el TDZ:
// main() se ejecuta de inmediato y puede llegar a renderMermaid).
let mermaidPromise = null;

main();

function main() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const subjectParam = params.get('subject');

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
  document.getElementById('section-back').href = `materia.html?subject=${subject.id}`;
  renderSection(subject, section);
  markRead(subject.id, section.id);
}

function renderSection(subject, s) {
  // Header editorial
  const unitLabel = s.unit ? `Unidad ${s.unit}` : 'Sección';
  document.getElementById('section-header').innerHTML = `
    <div class="section-header-eyebrow">
      <span class="num">${s.id}</span>
      <span>${unitLabel}</span>
    </div>
    <h1 class="section-header-title">${s.title}</h1>
  `;

  // Criollo principal (lead callout)
  const criolloEl = document.getElementById('section-criollo');
  if (s.criollo) {
    criolloEl.innerHTML = `
      <div class="criollo-callout">
        <span class="eyebrow no-rule" style="display:block;margin-bottom:0.35em;">En criollo</span>
        <p>${s.criollo}</p>
      </div>
    `;
  } else {
    criolloEl.innerHTML = '';
  }

  // Blocks
  const article = document.getElementById('section-content');
  article.innerHTML = s.blocks.map(renderBlock).join('');

  // Toggles de criollo embebidos en h3
  article.querySelectorAll('[data-criollo-toggle]').forEach((btn) => {
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isHidden = body.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!isHidden));
    });
  });

  // Lightbox
  article.querySelectorAll('img[data-lightbox]').forEach((img) => {
    img.addEventListener('click', () => window.openLightbox?.(img.src, img.alt));
  });

  // Diagramas Mermaid: se carga la librería sólo si hay diagramas en la sección.
  if (article.querySelector('.mermaid')) {
    renderMermaid(article);
  }

  // Nav entre secciones (dentro del mismo subject)
  const list = subject.sections;
  const idx = list.findIndex((x) => x.id === s.id);
  const prev = idx > 0 ? list[idx - 1] : null;
  const next = idx < list.length - 1 ? list[idx + 1] : null;
  const linkTo = (sec) => `seccion.html?subject=${subject.id}&id=${sec.id}`;

  const navEl = document.getElementById('section-nav');
  navEl.innerHTML = `
    ${prev
      ? `<a href="${linkTo(prev)}" class="prev">
           <span>← Anterior</span>
           <span>Sección ${prev.id}</span>
         </a>`
      : '<span></span>'}
    ${next
      ? `<a href="${linkTo(next)}" class="next">
           <span>Siguiente →</span>
           <span>Sección ${next.id}</span>
         </a>`
      : '<span></span>'}
  `;

  // Bottom bar: quiz + flashcards condicional
  const bottomBar = document.getElementById('bottom-bar');
  const buttons = [];
  if (s.quiz) {
    buttons.push(`
      <a href="quiz.html?subject=${subject.id}&id=${s.id}"
         class="btn btn-accent touch-target">
        Hacer quiz
      </a>
    `);
  }
  if (s.flashcards) {
    buttons.push(`
      <a href="flashcards.html?subject=${subject.id}&id=${s.id}"
         class="btn-ghost touch-target">
        Flashcards
      </a>
    `);
  }
  if (buttons.length === 0) {
    bottomBar.remove();
    document.body.classList.remove('has-bottom-bar');
  } else {
    bottomBar.style.gridTemplateColumns = `repeat(${buttons.length}, 1fr)`;
    bottomBar.innerHTML = buttons.join('');
  }

  const renderAll = () => {
    renderMath(criolloEl);
    renderMath(article);
  };
  if (typeof window.renderMathInElement === 'function') {
    renderAll();
  } else {
    window.addEventListener('load', renderAll, { once: true });
  }
}

// Carga Mermaid desde CDN (ESM) una sola vez y renderiza los diagramas
// presentes en el contenedor dado.
function renderMermaid(container) {
  if (!mermaidPromise) {
    mermaidPromise = import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs')
      .then(({ default: mermaid }) => {
        mermaid.initialize({ startOnLoad: false, securityLevel: 'strict' });
        return mermaid;
      });
  }
  mermaidPromise
    .then((mermaid) => mermaid.run({ nodes: container.querySelectorAll('.mermaid') }))
    .then(() => {
      // Una vez renderizado el SVG, se hace clicable para abrirlo en el
      // lightbox con zoom (útil cuando el diagrama no entra completo).
      container.querySelectorAll('figure.mermaid-figure').forEach((fig) => {
        const svg = fig.querySelector('svg');
        const node = fig.querySelector('.mermaid');
        if (!svg || !node) return;
        const cap = fig.querySelector('figcaption');
        const alt = cap ? cap.textContent : 'Diagrama';
        node.style.cursor = 'zoom-in';
        node.setAttribute('role', 'button');
        node.setAttribute('tabindex', '0');
        node.setAttribute('aria-label', `Ampliar diagrama: ${alt}`);
        const open = () => {
          const markup = new XMLSerializer().serializeToString(svg);
          const src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(markup);
          window.openLightbox?.(src, alt, { zoomable: true });
        };
        node.addEventListener('click', open);
        node.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open();
          }
        });
      });
    })
    .catch((err) => console.error('No se pudo renderizar el diagrama Mermaid:', err));
}

function renderBlock(b, i) {
  switch (b.type) {
    case 'h3': {
      const criollo = b.criollo
        ? `
          <button type="button"
                  data-criollo-toggle
                  class="criollo-toggle">
            <span class="arrow">›</span> En criollo
          </button>
          <div class="criollo-callout hidden" style="margin-top:0.5rem;">
            <p>${b.criollo}</p>
          </div>
        `
        : '';
      return `
        <section style="margin-top:2.4rem;">
          <h3>${b.text}</h3>
          ${criollo}
        </section>
      `;
    }
    case 'p': {
      // Primer párrafo después del header → "lead" con drop cap natural
      const cls = i === 0 ? ' class="lead drop-cap"' : '';
      return `<p${cls}>${b.text}</p>`;
    }
    case 'ul':
      return `<ul>${b.items.map((it) => `<li>${it}</li>`).join('')}</ul>`;
    case 'ol':
      return `<ol>${b.items.map((it) => `<li>${it}</li>`).join('')}</ol>`;
    case 'callout': {
      const cls = b.tone === 'warning' ? 'warn-callout' : b.tone === 'criollo' ? 'criollo-callout' : 'info-callout';
      return `<div class="${cls}"><p>${b.text}</p></div>`;
    }
    case 'figure':
      return `
        <figure class="figure">
          <img src="${b.src}" alt="${b.alt}" loading="lazy" data-lightbox />
          <figcaption>${b.caption}</figcaption>
        </figure>
      `;
    case 'math': {
      const display = b.display ? '$$' : '$';
      const cls = b.display ? 'math-display' : 'math-inline';
      return `<div class="${cls}">${display}${b.latex}${display}</div>`;
    }
    case 'code': {
      // Bloque de código / comando. Preserva whitespace, monospace, scroll horizontal.
      const escaped = String(b.code)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      return `<pre class="code-block"><code>${escaped}</code></pre>`;
    }
    case 'mermaid': {
      // Diagrama Mermaid. Se escapa para que el navegador no parsee etiquetas
      // como <br/> dentro de los labels: Mermaid lee el textContent y las
      // interpreta él mismo. La inicialización ocurre tras inyectar el HTML.
      const escaped = String(b.code)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      const caption = b.caption ? `<figcaption>${b.caption}</figcaption>` : '';
      return `
        <figure class="mermaid-figure">
          <pre class="mermaid">${escaped}</pre>
          ${caption}
        </figure>
      `;
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
