import { renderNav } from './nav.js';
import { getSection } from './content.js';
import { markFlashcard } from './storage.js';

renderNav({ active: 'home' });

const id = new URLSearchParams(location.search).get('id');
const section = getSection(id);

if (!section) {
  location.replace('index.html');
}

document.title = `Flashcards: ${section.title}`;
document.getElementById('fc-header').innerHTML = `
  <a href="seccion.html?id=${section.id}" class="text-sm text-[var(--muted)] hover:text-[var(--text)]">← Volver a la sección</a>
  <h1 class="text-2xl mt-2">Flashcards — Sección ${section.id}</h1>
  <p id="fc-progress" class="text-sm text-[var(--muted)] mt-1"></p>
`;

let queue = [...section.flashcards];
let total = queue.length;
let knownThisSession = 0;
let flipped = false;

if (total === 0) {
  document.getElementById('fc-stage').innerHTML = `
    <div class="info-callout w-full"><p>Esta sección aún no tiene flashcards cargadas.</p></div>
  `;
} else {
  renderCard();
  document.getElementById('fc-bottom').innerHTML = `
    <button id="repaso-btn"
            class="touch-target px-4 py-4 rounded-[var(--radius)] border border-[var(--border-strong)] font-medium">↻ Repasar</button>
    <button id="sabia-btn"
            class="touch-target px-4 py-4 rounded-[var(--radius)] bg-[var(--ok)] text-white font-medium">✓ La sabía</button>
  `;
  document.getElementById('repaso-btn').addEventListener('click', () => answer(false));
  document.getElementById('sabia-btn').addEventListener('click', () => answer(true));
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      flipCurrent();
    }
  });
}

function renderCard() {
  flipped = false;
  document.getElementById('fc-progress').textContent =
    `Quedan ${queue.length} · ${knownThisSession} sabidas`;
  const card = queue[0];
  document.getElementById('fc-stage').innerHTML = `
    <div id="flashcard" class="flashcard w-full h-72 cursor-pointer">
      <div class="flashcard-inner h-full">
        <div class="flashcard-face surface-card">
          <p class="text-xl font-medium">${card.front}</p>
        </div>
        <div class="flashcard-face flashcard-back surface-card">
          <p class="text-base">${card.back}</p>
        </div>
      </div>
    </div>
    <p class="text-xs text-[var(--muted)] text-center mt-3">Tocá la tarjeta para dar vuelta</p>
  `;
  document.getElementById('flashcard').addEventListener('click', flipCurrent);
}

function flipCurrent() {
  flipped = !flipped;
  document.getElementById('flashcard').classList.toggle('is-flipped', flipped);
}

function answer(known) {
  const card = queue.shift();
  if (known) {
    knownThisSession++;
    markFlashcard(section.id, card.id, true);
  } else {
    queue.push(card);
  }
  if (queue.length === 0) {
    renderSummary();
  } else {
    renderCard();
  }
}

function renderSummary() {
  document.getElementById('fc-stage').classList.add('hidden');
  document.getElementById('fc-bottom').innerHTML = '';
  const s = document.getElementById('fc-summary');
  s.classList.remove('hidden');
  s.innerHTML = `
    <div class="surface-card p-6 mt-6 text-center">
      <p class="text-sm text-[var(--muted)]">Resultado de esta sesión</p>
      <p class="text-4xl font-semibold mt-2">${knownThisSession}/${total}</p>
      <p class="text-[var(--muted)] mt-1">marcadas como sabidas</p>
    </div>
    <div class="flex flex-col md:flex-row gap-3 mt-8">
      <a href="flashcards.html?id=${section.id}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] bg-[var(--accent)] text-white">Reiniciar</a>
      <a href="quiz.html?id=${section.id}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)]">Hacer quiz</a>
      <a href="seccion.html?id=${section.id}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)]">Volver a la sección</a>
    </div>
  `;
}
