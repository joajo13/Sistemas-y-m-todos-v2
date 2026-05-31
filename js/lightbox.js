/**
 * Lightbox modal global. Expone window.openLightbox(src, alt).
 * El modal se crea una sola vez al cargar el script.
 */

let backdrop, img, caption;

function ensureModal() {
  if (backdrop) return;
  backdrop = document.createElement('div');
  backdrop.className =
    'fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-sm flex items-center justify-center p-4';
  backdrop.innerHTML = `
    <button type="button"
            aria-label="Cerrar"
            class="absolute top-4 right-4 text-white text-3xl leading-none z-10">×</button>
    <div data-wrap class="lb-wrap max-w-5xl w-full">
      <img alt="" class="lb-img w-full max-h-[80vh] object-contain rounded-[var(--radius)] bg-white" />
      <p data-caption class="text-white text-center text-sm mt-3"></p>
    </div>
  `;
  document.body.appendChild(backdrop);
  img = backdrop.querySelector('img');
  caption = backdrop.querySelector('[data-caption]');
  const wrap = backdrop.querySelector('[data-wrap]');

  const close = () => backdrop.classList.add('hidden');
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop || e.target.tagName === 'BUTTON') close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  // Zoom opcional (sólo cuando se abre con { zoomable:true }): un clic sobre
  // la imagen alterna entre ajustada y tamaño completo con scroll.
  img.addEventListener('click', (e) => {
    if (img.dataset.zoomable !== 'true') return;
    e.stopPropagation();
    const zoomed = img.classList.toggle('lb-zoomed');
    wrap.classList.toggle('lb-wrap--zoomed', zoomed);
    img.style.cursor = zoomed ? 'zoom-out' : 'zoom-in';
  });
}

window.openLightbox = function (src, alt = '', opts = {}) {
  ensureModal();
  const wrap = backdrop.querySelector('[data-wrap]');
  // Reset de estado de zoom de la apertura anterior.
  img.classList.remove('lb-zoomed');
  wrap.classList.remove('lb-wrap--zoomed');
  img.src = src;
  img.alt = alt;
  caption.textContent = alt;
  if (opts.zoomable) {
    img.dataset.zoomable = 'true';
    img.style.cursor = 'zoom-in';
  } else {
    delete img.dataset.zoomable;
    img.style.cursor = '';
  }
  backdrop.classList.remove('hidden');
};
