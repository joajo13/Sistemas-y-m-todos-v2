import { renderNav } from './nav.js';
import { getCurrentSubject } from './content.js';
import * as pdfjs from 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.min.mjs';

let subject;
let DOCS;
let activeKey;
let pdfDoc = null;
let currentPage = 1;
let scale = 1.2;
let canvas;
let ctx;

main();

function main() {
  const params = new URLSearchParams(location.search);
  const subjectParam = params.get('subject');
  const docParam = params.get('doc');

  // Compat: ?doc=... sin ?subject= → asumir sistemas-y-metodos
  if (!subjectParam) {
    const extra = docParam ? `&doc=${encodeURIComponent(docParam)}` : '';
    location.replace(`pdfs.html?subject=sistemas-y-metodos${extra}`);
    return;
  }

  subject = getCurrentSubject();
  if (!subject) {
    location.replace('index.html');
    return;
  }
  if (!subject.pdfs || subject.pdfs.length === 0) {
    location.replace(`materia.html?subject=${subject.id}`);
    return;
  }

  renderNav({ active: 'pdfs', subject });

  pdfjs.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.mjs';

  DOCS = subject.pdfs;
  activeKey = DOCS.some((d) => d.key === docParam) ? docParam : DOCS[0].key;

  canvas = document.getElementById('pdf-canvas');
  ctx = canvas.getContext('2d');

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
}

function tabHref(d) {
  return `pdfs.html?subject=${subject.id}&doc=${d.key}`;
}

function renderTabs() {
  const tabHtml = (d) => `
    <a href="${tabHref(d)}"
       class="touch-target inline-flex items-center justify-center px-3 py-2 rounded-[var(--radius-sm)] text-sm whitespace-nowrap
              ${d.key === activeKey
                ? 'bg-[var(--accent)] text-white'
                : 'border border-[var(--border-strong)] text-[var(--text)] hover:bg-[var(--surface-2)]'}">
      ${d.label}
    </a>
  `;
  document.getElementById('tabs').innerHTML = DOCS.map(tabHtml).join('');
  document.getElementById('tabs-desktop').innerHTML = DOCS.map((d) => `
    <a href="${tabHref(d)}"
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
