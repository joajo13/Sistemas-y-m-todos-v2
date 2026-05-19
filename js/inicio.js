import { renderNav } from './nav.js';
import { SUBJECTS } from './content.js';

renderNav({ active: 'inicio', subject: null });

function subjectCard(subject, idx) {
  const totalSections = subject.sections.length;
  const totalUnits = Object.keys(subject.units || {}).length;
  const eyebrow = totalUnits > 0
    ? `Materia N.º ${String(idx + 1).padStart(2, '0')}`
    : `Materia N.º ${String(idx + 1).padStart(2, '0')}`;

  const meta = [];
  if (totalUnits > 0) {
    meta.push(`${totalUnits} unidad${totalUnits === 1 ? '' : 'es'}`);
  }
  meta.push(`${totalSections} secci${totalSections === 1 ? 'ón' : 'ones'}`);
  if (subject.pdfs && subject.pdfs.length > 0) {
    meta.push(`${subject.pdfs.length} PDF${subject.pdfs.length === 1 ? '' : 's'}`);
  }

  const subtitle = subject.subtitle
    ? `<p class="meta mb-2" style="font-size:.78rem;letter-spacing:.06em;">${subject.subtitle}</p>`
    : '';

  const tagline = subject.tagline
    ? `<p class="article-card-dek">${subject.tagline}</p>`
    : '<p class="article-card-dek">&nbsp;</p>';

  return `
    <a href="materia.html?subject=${subject.id}" class="article-card">
      <span class="article-card-eyebrow">${eyebrow}</span>
      <h3 class="article-card-title">${subject.title}</h3>
      ${subtitle}
      ${tagline}
      <div class="article-card-meta">
        ${meta.map((m) => `<span>${m}</span>`).join('')}
      </div>
    </a>
  `;
}

const grid = document.getElementById('subjects-grid');
grid.innerHTML = SUBJECTS.map(subjectCard).join('');

const countEl = document.getElementById('subjects-count');
if (countEl) {
  const n = SUBJECTS.length;
  countEl.textContent = `${n} materia${n === 1 ? '' : 's'} disponibles`;
}
