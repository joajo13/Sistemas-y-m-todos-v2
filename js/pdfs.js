import { renderNav } from './nav.js';
import * as pdfjs from 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.min.mjs';

renderNav({ active: 'pdfs' });

pdfjs.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.mjs';

const DOCS = [
  { key: 'fundamentos', label: 'Fundamentos', path: 'pdfs/fundamentos.pdf' },
  { key: 'consideraciones', label: 'Consideraciones', path: 'pdfs/consideraciones.pdf' },
  { key: 'presentacion', label: 'Presentación', path: 'pdfs/presentacion.pdf' },
];

const params = new URLSearchParams(location.search);
let activeKey = DOCS.some((d) => d.key === params.get('doc')) ? params.get('doc') : 'fundamentos';
let pdfDoc = null;
let currentPage = 1;
let scale = 1.2;

const canvas = document.getElementById('pdf-canvas');
const ctx = canvas.getContext('2d');

renderTabs();
loadDoc(activeKey);

document.getElementById('prev').onclick = goPrev;
document.getElementById('next').onclick = goNext;
document.getElementById('zoom-out').onclick = () => zoom(-0.2);
document.getElementById('zoom-in').onclick = () => zoom(0.2);
document.getElementById('prev-m').onclick = goPrev;
document.getElementById('next-m').onclick = goNext;
document.getElementById('zoom-out-m').onclick = () => zoom(-0.2);
document.getElementById('zoom-in-m').onclick = () => zoom(0.2);

function renderTabs() {
  const tabHtml = (d) => `
    <a href="pdfs.html?doc=${d.key}"
       class="touch-target inline-flex items-center justify-center px-3 py-2 rounded-[var(--radius-sm)] text-sm whitespace-nowrap
              ${d.key === activeKey
                ? 'bg-[var(--accent)] text-white'
                : 'border border-[var(--border-strong)] text-[var(--text)] hover:bg-[var(--surface-2)]'}">
      ${d.label}
    </a>
  `;
  document.getElementById('tabs').innerHTML = DOCS.map(tabHtml).join('');
  document.getElementById('tabs-desktop').innerHTML = DOCS.map((d) => `
    <a href="pdfs.html?doc=${d.key}"
       class="touch-target block px-3 py-2 rounded-[var(--radius-sm)] text-sm
              ${d.key === activeKey
                ? 'bg-[var(--accent)] text-white'
                : 'hover:bg-[var(--surface-2)] text-[var(--text)]'}">
      ${d.label}
    </a>
  `).join('');

  const doc = DOCS.find((d) => d.key === activeKey);
  document.getElementById('open-original-d').href = doc.path;
  document.getElementById('open-original-m').href = doc.path;
}

async function loadDoc(key) {
  const doc = DOCS.find((d) => d.key === key);
  setStatus('Cargando PDF…');
  try {
    pdfDoc = await pdfjs.getDocument(doc.path).promise;
    currentPage = 1;
    setStatus('');
    await renderPage();
  } catch (err) {
    console.error(err);
    setStatus('No se pudo cargar el PDF. Probá "Abrir original".');
  }
}

async function renderPage() {
  if (!pdfDoc) return;
  const page = await pdfDoc.getPage(currentPage);
  const viewport = page.getViewport({ scale });
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  await page.render({ canvasContext: ctx, viewport }).promise;
  updatePageInfo();
}

function updatePageInfo() {
  const text = `Página ${currentPage} de ${pdfDoc?.numPages ?? '?'}`;
  document.getElementById('page-info').textContent = text;
  document.getElementById('page-info-m').textContent = text;
}

function goPrev() {
  if (!pdfDoc || currentPage <= 1) return;
  currentPage--;
  renderPage();
}

function goNext() {
  if (!pdfDoc || currentPage >= pdfDoc.numPages) return;
  currentPage++;
  renderPage();
}

function zoom(delta) {
  scale = Math.max(0.5, Math.min(3, scale + delta));
  renderPage();
}

function setStatus(msg) {
  document.getElementById('status').textContent = msg;
}
