import { renderNav } from './nav.js';
import { getCurrentSubject, getSection } from './content.js';
import { markRead } from './storage.js';
import { renderMath } from './katex-init.js';
import { renderBlock, hydrateBlocks } from './blocks.js';

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

  // Hidratación interactiva (criollo toggles, lightbox, Mermaid)
  hydrateBlocks(article);

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
