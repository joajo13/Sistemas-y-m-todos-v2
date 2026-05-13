import { renderNav } from './nav.js';
import { SECTIONS } from './content.js';
import { getSectionState } from './storage.js';

renderNav({ active: 'home' });

const grid = document.getElementById('sections-grid');

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

grid.innerHTML = SECTIONS.map(sectionCard).join('');
