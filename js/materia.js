import { renderNav } from './nav.js';
import { getCurrentSubject } from './content.js';
import { getSectionState } from './storage.js';

const subject = getCurrentSubject();

if (!subject) {
  location.replace('index.html');
} else {
  document.title = `${subject.title} — Apuntes`;
  renderNav({ active: 'home', subject });
  document.getElementById('materia-title').textContent = subject.title;
  document.getElementById('materia-subtitle').textContent = subject.subtitle || '';

  const eyebrow = document.getElementById('materia-eyebrow');
  if (eyebrow) {
    const totalSecs = subject.sections.length;
    const totalUnits = Object.keys(subject.units || {}).length;
    const bits = [
      'Materia',
      totalUnits > 0 ? `${totalUnits} unidad${totalUnits === 1 ? '' : 'es'}` : null,
      `${totalSecs} secci${totalSecs === 1 ? 'ón' : 'ones'}`,
    ].filter(Boolean);
    eyebrow.innerHTML = bits.map((b) => `<span>${b}</span>`).join(' · ');
  }

  renderSections();
}

function sectionCard(section) {
  const state = getSectionState(subject.id, section.id);
  const hasQuiz = !!section.quiz;
  const hasFc = !!section.flashcards;

  const meta = [];
  meta.push(state.read
    ? '<span class="read">✓ Leída</span>'
    : '<span class="unread">Sin leer</span>');

  const score = state.lastQuizScore;
  if (hasQuiz) {
    meta.push(score
      ? `<span class="quiz">Quiz · ${score.correct}/${score.total}</span>`
      : '<span class="quiz">Quiz</span>');
  }
  if (hasFc) {
    const total = section.flashcards.length;
    const known = state.knownFlashcards.length;
    meta.push(`<span class="fc">Flashcards · ${known}/${total}</span>`);
  }

  const dek = section.criollo
    ? `<p class="folio-card-dek">${section.criollo}</p>`
    : '<p class="folio-card-dek">&nbsp;</p>';

  return `
    <a href="seccion.html?subject=${subject.id}&id=${section.id}"
       class="folio-card">
      <div class="folio-card-num">${section.id}</div>
      <div class="folio-card-body">
        <h3 class="folio-card-title">${section.title}</h3>
        ${dek}
        <div class="folio-card-meta">${meta.join('')}</div>
      </div>
    </a>
  `;
}

function groupByUnit(sections) {
  const groups = new Map();
  for (const s of sections) {
    const key = s.unit || 'sin-unidad';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(s);
  }
  return groups;
}

function unitBlock(unit, sections) {
  const unitTitle = subject.units[unit] || '';
  const isOrphan = unit === 'sin-unidad';
  const heading = isOrphan
    ? `<div class="unit-header">
         <span class="unit-header-num">·</span>
         <span class="unit-header-title">Secciones</span>
         <span class="unit-header-meta">${sections.length} ${sections.length === 1 ? 'item' : 'items'}</span>
       </div>`
    : `<div class="unit-header">
         <span class="unit-header-num">${unit}</span>
         <span class="unit-header-title">${unitTitle}</span>
         <span class="unit-header-meta">${sections.length} ${sections.length === 1 ? 'item' : 'items'}</span>
       </div>`;

  return `
    <section>
      ${heading}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-rise">
        ${sections.map(sectionCard).join('')}
      </div>
    </section>
  `;
}

function renderSections() {
  const groups = groupByUnit(subject.sections);
  document.getElementById('sections-grid').innerHTML =
    Array.from(groups.entries()).map(([unit, list]) => unitBlock(unit, list)).join('');
}
