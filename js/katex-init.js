/**
 * Renderiza fórmulas KaTeX dentro de un contenedor.
 * Espera que el HTML del head haya cargado:
 *   - katex.min.css
 *   - katex.min.js
 *   - contrib/auto-render.min.js
 *
 * Si KaTeX no cargó (ej: CDN caído), no rompe nada: el LaTeX queda crudo.
 */

export function renderMath(rootEl) {
  if (typeof window.renderMathInElement !== 'function') return;
  window.renderMathInElement(rootEl, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$',  right: '$',  display: false },
    ],
    throwOnError: false,
  });
}
