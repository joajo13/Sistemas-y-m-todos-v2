import { renderNav } from './nav.js';
import { SECTIONS, UNITS } from './content.js';
import { getSectionState } from './storage.js';

renderNav({ active: 'home' });

const container = document.getElementById('sections-grid');

function sectionCard(section) {
  const state = getSectionState(section.id);
  const totalFc = section.flashcards.length;
  const knownFc = state.knownFlashcards.length;
  const score = state.lastQuizScore;

  const readBadge = state.read
    ? '<span class="text-[var(--ok)]">✓ Leída</span>'
    : '<span class="text-[var(--muted)]">Sin leer</span>';

  const quizBadge = score
    ? `<span class="text-[var(--muted)]">Quiz: ${score.correct}/${score.total}</span>`
    : '<span class="text-[var(--muted)]">Sin quiz</span>';

  const fcBadge = `<span class="text-[var(--muted)]">Flashcards: ${knownFc}/${totalFc}</span>`;

  return `
    <a href="seccion.html?id=${section.id}"
       class="surface-card block p-5 transition-shadow">
      <div class="flex items-start gap-3 mb-3">
        <span class="text-3xl font-semibold text-[var(--muted)] leading-none">${section.id}</span>
        <h2 class="text-lg leading-tight">${section.title}</h2>
      </div>
      <p class="text-sm text-[var(--muted)] mb-4 line-clamp-3">${section.criollo}</p>
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
  const unitTitle = UNITS[unit] || '';
  const heading = unitTitle
    ? `Unidad ${unit} — ${unitTitle}`
    : `Unidad ${unit}`;
  return `
    <section>
      <h2 class="text-xl md:text-2xl font-semibold mb-4">${heading}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${sections.map(sectionCard).join('')}
      </div>
    </section>
  `;
}

const groups = groupByUnit(SECTIONS);
container.innerHTML = Array.from(groups.entries())
  .map(([unit, list]) => unitBlock(unit, list))
  .join('');
