import { renderNav } from './nav.js';
import { getCurrentSubject, getSection, getNextSectionWith } from './content.js';
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
    <a href="seccion.html?subject=${subject.id}&id=${section.id}" class="masthead-back">← Volver a la sección</a>
    <div class="section-header" style="margin-bottom:1.5rem;">
      <div class="section-header-eyebrow">
        <span class="num">${section.id}</span>
        <span>Examinación</span>
      </div>
      <h1 class="section-header-title" style="font-size:clamp(1.8rem,4.5vw,2.6rem);">${section.title}</h1>
      <div class="quiz-progress">
        <span class="count" id="progress-text"></span>
        <div class="bar" id="progress-bar" style="--progress:0%"></div>
      </div>
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
  document.getElementById('progress-text').textContent =
    `Pregunta ${current + 1} de ${questions.length}`;
  document.getElementById('progress-bar').style
    .setProperty('--progress', `${(current / questions.length) * 100}%`);

  const opts = q.kind === 'tf'
    ? [{ text: 'Verdadero', value: true }, { text: 'Falso', value: false }]
    : q.options.map((text, i) => ({ text, value: i }));

  document.getElementById('quiz-body').innerHTML = `
    <div class="question-card fade-in">
      <p class="eyebrow no-rule" style="margin-bottom:0.85rem;">
        <span style="background:none;width:0;height:0;"></span>
        Pregunta N.º ${String(current + 1).padStart(2, '0')}
      </p>
      <p class="question-stem">${q.q}</p>
      <div id="options"></div>
      <div id="explanation" class="hidden info-callout" style="margin-top:1.1rem;"></div>
    </div>
  `;
  const optsContainer = document.getElementById('options');
  optsContainer.innerHTML = opts
    .map((o, i) => `
      <button data-idx="${i}" class="quiz-option touch-target">
        ${o.text}
      </button>
    `).join('');

  optsContainer.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => handleAnswer(btn, opts, q));
  });

  document.getElementById('quiz-bottom').innerHTML = `
    <button id="next-btn" class="btn btn-accent touch-target" disabled
            style="opacity:0.4;">Siguiente</button>
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
  exp.innerHTML = `
    <span class="eyebrow no-rule" style="display:block;margin-bottom:0.4em;">
      ${isCorrect ? 'Bien · explicación' : 'Por qué fallaste'}
    </span>
    <p>${q.explain}</p>
  `;
  exp.classList.remove('hidden');

  const nextBtn = document.getElementById('next-btn');
  nextBtn.disabled = false;
  nextBtn.style.opacity = '1';
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
  const nextSection = getNextSectionWith(subject.id, section.id, 'quiz');
  const nextLink = nextSection
    ? `quiz.html?subject=${subject.id}&id=${nextSection.id}`
    : null;

  let verdict = '';
  if (pct === 100) verdict = 'Impecable';
  else if (pct >= 80) verdict = 'Muy bien';
  else if (pct >= 60) verdict = 'Aceptable';
  else if (pct >= 40) verdict = 'A revisar';
  else verdict = 'A leer otra vez';

  summary.innerHTML = `
    <div class="result-card fade-in">
      <p class="result-card-label">Resultado</p>
      <p class="result-card-score">${correct}<span style="color:var(--muted);font-style:normal;font-size:0.55em;letter-spacing:-0.02em;"> ⁄ </span>${questions.length}</p>
      <p class="result-card-meta">${pct}% correctas · <em>${verdict}</em></p>
    </div>
    ${wrongAnswers.length > 0 ? `
      <section class="mt-12">
        <div class="unit-header">
          <span class="unit-header-num">!</span>
          <span class="unit-header-title">Preguntas erradas</span>
          <span class="unit-header-meta">${wrongAnswers.length} ${wrongAnswers.length === 1 ? 'item' : 'items'}</span>
        </div>
        <div class="grid grid-cols-1 gap-4 stagger-rise">
          ${wrongAnswers.map((w) => `
            <div class="surface-card" style="padding:1.25rem 1.4rem;">
              <p class="font-medium mb-2" style="font-family:var(--font-reading);font-size:1.05rem;color:var(--ink);">${w.question.q}</p>
              <p class="meta" style="color:var(--error);">Elegiste: ${w.chosenText}</p>
              <p class="meta" style="margin-top:0.55em;color:var(--ink-2);font-style:italic;font-family:var(--font-reading);">${w.question.explain}</p>
            </div>
          `).join('')}
        </div>
      </section>
    ` : ''}
    ${nextSection ? `
      <a href="${nextLink}" class="btn btn-accent touch-target" style="display:block;margin-top:2.5rem;">
        Siguiente quiz: ${nextSection.id}. ${nextSection.title} →
      </a>
    ` : ''}
    <div class="flex flex-col md:flex-row gap-3 ${nextSection ? 'mt-3' : 'mt-10'}">
      <a href="${quizLink}" class="${nextSection ? 'btn-ghost' : 'btn btn-accent'} touch-target md:flex-1">Reintentar</a>
      <a href="${fcLink}" class="btn-ghost touch-target md:flex-1">Flashcards</a>
      <a href="${seccionLink}" class="btn-ghost touch-target md:flex-1">Volver a la sección</a>
    </div>
  `;
}
