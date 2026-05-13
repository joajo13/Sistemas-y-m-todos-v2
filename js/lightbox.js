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
            class="absolute top-4 right-4 text-white text-3xl leading-none">×</button>
    <div class="max-w-5xl w-full">
      <img alt="" class="w-full max-h-[80vh] object-contain rounded-[var(--radius)] bg-white" />
      <p data-caption class="text-white text-center text-sm mt-3"></p>
    </div>
  `;
  document.body.appendChild(backdrop);
  img = backdrop.querySelector('img');
  caption = backdrop.querySelector('[data-caption]');

  const close = () => backdrop.classList.add('hidden');
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop || e.target.tagName === 'BUTTON') close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

window.openLightbox = function (src, alt = '') {
  ensureModal();
  img.src = src;
  img.alt = alt;
  caption.textContent = alt;
  backdrop.classList.remove('hidden');
};
