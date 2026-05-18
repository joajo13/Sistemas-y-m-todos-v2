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
  renderSections();
}

function sectionCard(section) {
  const state = getSectionState(subject.id, section.id);
  const hasQuiz = !!section.quiz;
  const hasFc = !!section.flashcards;

  const readBadge = state.read
    ? '<span class="text-[var(--ok)]">✓ Leída</span>'
    : '<span class="text-[var(--muted)]">Sin leer</span>';

  const score = state.lastQuizScore;
  const quizBadge = hasQuiz
    ? (score
        ? `<span class="text-[var(--muted)]">Quiz: ${score.correct}/${score.total}</span>`
        : '<span class="text-[var(--muted)]">Sin quiz</span>')
    : '';

  const fcBadge = hasFc
    ? (() => {
        const total = section.flashcards.length;
        const known = state.knownFlashcards.length;
        return `<span class="text-[var(--muted)]">Flashcards: ${known}/${total}</span>`;
      })()
    : '';

  return `
    <a href="seccion.html?subject=${subject.id}&id=${section.id}"
       class="surface-card block p-5 transition-shadow">
      <div class="flex items-start gap-3 mb-3">
        <span class="text-3xl font-semibold text-[var(--muted)] leading-none">${section.id}</span>
        <h2 class="text-lg leading-tight">${section.title}</h2>
      </div>
      ${section.criollo
        ? `<p class="text-sm text-[var(--muted)] mb-4 line-clamp-3">${section.criollo}</p>`
        : '<p class="text-sm text-[var(--muted)] mb-4">&nbsp;</p>'}
      <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs">
        ${readBadge}
        ${quizBadge}
        ${fcBadge}
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
  const heading = unit === 'sin-unidad'
    ? ''
    : (unitTitle ? `Unidad ${unit} — ${unitTitle}` : `Unidad ${unit}`);
  return `
    <section>
      ${heading ? `<h2 class="text-xl md:text-2xl font-semibold mb-4">${heading}</h2>` : ''}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
