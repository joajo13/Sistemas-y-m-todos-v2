// Render compartido de ContentBlock[] entre seccion.js y resumen.js.
// renderBlock devuelve el HTML de un block; hydrateBlocks engancha los
// comportamientos interactivos (criollo toggles, lightbox, Mermaid, gráficos
// interactivos) sobre el contenedor ya inyectado.

import { renderPlot, hydratePlots } from './plot.js';

export function renderBlock(b, i) {
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
    case 'plot': {
      // Gráfico matemático interactivo (canvas). El spec lleva funciones JS de
      // verdad, así que plot.js lo guarda en un registro y acá sólo va el
      // placeholder con el id; la hidratación lo levanta después.
      return renderPlot(b);
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

export function hydrateBlocks(container) {
  // toggles de criollo en h3
  container.querySelectorAll('[data-criollo-toggle]').forEach((btn) => {
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isHidden = body.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!isHidden));
    });
  });
  // lightbox de imágenes
  container.querySelectorAll('img[data-lightbox]').forEach((img) => {
    img.addEventListener('click', () => window.openLightbox?.(img.src, img.alt));
  });
  // diagramas Mermaid (solo si hay)
  if (container.querySelector('.mermaid')) {
    renderMermaid(container);
  }
  // gráficos interactivos (solo si hay)
  if (container.querySelector('[data-plot-id]')) {
    hydratePlots(container);
  }
}

// Carga Mermaid desde CDN (ESM) una sola vez y renderiza los diagramas
// presentes en el contenedor dado.
let mermaidPromise = null;
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
