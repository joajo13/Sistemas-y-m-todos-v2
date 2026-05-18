import { renderNav } from './nav.js';
import { getCurrentSubject, getSection } from './content.js';
import { saveQuizScore } from './storage.js';

let subject;
let section;
let questions;
let current = 0;
let correct = 0;
const wrongAnswers = [];

main();

function main() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const subjectParam = params.get('subject');

  if (id && !subjectParam) {
    location.replace(`quiz.html?subject=sistemas-y-metodos&id=${encodeURIComponent(id)}`);
    return;
  }

  subject = getCurrentSubject();
  if (!subject) {
    location.replace('index.html');
    return;
  }

  section = getSection(subject.id, id);
  if (!section) {
    location.replace(`materia.html?subject=${subject.id}`);
    return;
  }
  if (!section.quiz) {
    location.replace(`seccion.html?subject=${subject.id}&id=${section.id}`);
    return;
  }

  renderNav({ active: 'home', subject });

  questions = [
    ...section.quiz.tf.map((q) => ({ ...q, kind: 'tf' })),
    ...section.quiz.mc.map((q) => ({ ...q, kind: 'mc' })),
  ];

  document.title = `Quiz: ${section.title}`;
  document.getElementById('quiz-header').innerHTML = `
    <a href="seccion.html?subject=${subject.id}&id=${section.id}" class="text-sm text-[var(--muted)] hover:text-[var(--text)]">← Volver a la sección</a>
    <h1 class="text-2xl mt-2">Quiz — Sección ${section.id}</h1>
    <p class="text-sm text-[var(--muted)] mt-1" id="progress-text"></p>
    <div class="w-full bg-[var(--border)] rounded-full h-1.5 mt-2">
      <div id="progress-bar" class="bg-[var(--accent)] h-1.5 rounded-full transition-all" style="width: 0%"></div>
    </div>
  `;

  if (questions.length === 0) {
    document.getElementById('quiz-body').innerHTML = `
      <div class="info-callout mt-6"><p>Esta sección aún no tiene preguntas cargadas.</p></div>
    `;
  } else {
    renderQuestion();
  }
}

function renderQuestion() {
  const q = questions[current];
  document.getElementById('progress-text').textContent = `Pregunta ${current + 1} de ${questions.length}`;
  document.getElementById('progress-bar').style.width = `${(current / questions.length) * 100}%`;

  const opts = q.kind === 'tf'
    ? [{ text: 'Verdadero', value: true }, { text: 'Falso', value: false }]
    : q.options.map((text, i) => ({ text, value: i }));

  document.getElementById('quiz-body').innerHTML = `
    <div class="surface-card p-5 mt-4">
      <p class="font-medium mb-4">${q.q}</p>
      <div id="options" class="space-y-2"></div>
      <div id="explanation" class="hidden mt-4 info-callout"></div>
    </div>
  `;
  const optsContainer = document.getElementById('options');
  optsContainer.innerHTML = opts
    .map((o, i) => `
      <button data-idx="${i}"
              class="touch-target w-full text-left px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)] hover:bg-[var(--surface-2)] transition-colors">
        ${o.text}
      </button>
    `).join('');

  optsContainer.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => handleAnswer(btn, opts, q));
  });

  document.getElementById('quiz-bottom').innerHTML = `
    <button id="next-btn"
            class="touch-target w-full px-4 py-3 rounded-[var(--radius)] bg-[var(--accent)] text-white font-medium disabled:opacity-40"
            disabled>Siguiente</button>
  `;
  document.getElementById('next-btn').addEventListener('click', advance);
}

function handleAnswer(btn, opts, q) {
  const chosen = opts[Number(btn.dataset.idx)].value;
  const correctValue = q.kind === 'tf' ? q.a : q.correctIndex;
  const isCorrect = chosen === correctValue;

  document.querySelectorAll('#options button').forEach((b) => (b.disabled = true));
  btn.classList.add(isCorrect ? 'option-correct' : 'option-wrong');

  if (!isCorrect) {
    const correctIdx = opts.findIndex((o) => o.value === correctValue);
    document.querySelector(`#options button[data-idx="${correctIdx}"]`).classList.add('option-correct');
    wrongAnswers.push({ question: q, chosenText: opts[Number(btn.dataset.idx)].text });
  } else {
    correct++;
  }

  const exp = document.getElementById('explanation');
  exp.innerHTML = `<p>${q.explain}</p>`;
  exp.classList.remove('hidden');
  document.getElementById('next-btn').disabled = false;
}

function advance() {
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    renderSummary();
  }
}

function renderSummary() {
  saveQuizScore(subject.id, section.id, { correct, total: questions.length });
  document.getElementById('quiz-body').classList.add('hidden');
  document.getElementById('quiz-bottom').innerHTML = '';
  const summary = document.getElementById('quiz-summary');
  summary.classList.remove('hidden');
  const pct = Math.round((correct / questions.length) * 100);
  const seccionLink = `seccion.html?subject=${subject.id}&id=${section.id}`;
  const quizLink = `quiz.html?subject=${subject.id}&id=${section.id}`;
  const fcLink = `flashcards.html?subject=${subject.id}&id=${section.id}`;
  summary.innerHTML = `
    <div class="surface-card p-6 mt-6 text-center">
      <p class="text-sm text-[var(--muted)]">Resultado</p>
      <p class="text-4xl font-semibold mt-2">${correct}/${questions.length}</p>
      <p class="text-[var(--muted)] mt-1">${pct}% correctas</p>
    </div>
    ${wrongAnswers.length > 0 ? `
      <div class="mt-6">
        <h2 class="text-lg font-semibold mb-3">Preguntas erradas</h2>
        <div class="space-y-3">
          ${wrongAnswers.map((w) => `
            <div class="surface-card p-4">
              <p class="font-medium mb-1">${w.question.q}</p>
              <p class="text-sm text-[var(--error)]">Elegiste: ${w.chosenText}</p>
              <p class="text-sm mt-2 text-[var(--muted)]">${w.question.explain}</p>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
    <div class="flex flex-col md:flex-row gap-3 mt-8">
      <a href="${quizLink}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] bg-[var(--accent)] text-white">Reintentar</a>
      <a href="${fcLink}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)]">Flashcards</a>
      <a href="${seccionLink}" class="touch-target flex-1 inline-flex items-center justify-center px-4 py-3 rounded-[var(--radius)] border border-[var(--border-strong)]">Volver a la sección</a>
    </div>
  `;
}
