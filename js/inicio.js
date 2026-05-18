import { renderNav } from './nav.js';
import { SUBJECTS } from './content.js';

renderNav({ active: 'inicio', subject: null });

function subjectCard(subject) {
  const totalSections = subject.sections.length;
  const totalUnits = Object.keys(subject.units || {}).length;
  const unitsBadge = totalUnits > 0
    ? `${totalUnits} unidad${totalUnits === 1 ? '' : 'es'} · `
    : '';
  const meta = `${unitsBadge}${totalSections} secci${totalSections === 1 ? 'ón' : 'ones'}`;

  return `
    <a href="materia.html?subject=${subject.id}" class="surface-card block p-5 transition-shadow">
      <h2 class="text-xl font-semibold">${subject.title}</h2>
      <p class="text-sm text-[var(--muted)] mt-1">${subject.subtitle || ''}</p>
      ${subject.tagline ? `<p class="text-sm mt-3">${subject.tagline}</p>` : ''}
      <p class="text-xs text-[var(--muted)] mt-4">${meta}</p>
    </a>
  `;
}

document.getElementById('subjects-grid').innerHTML =
  SUBJECTS.map(subjectCard).join('');
