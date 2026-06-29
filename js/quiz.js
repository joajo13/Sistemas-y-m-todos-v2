import { renderNav } from './nav.js';
import { getCurrentSubject, getSection, getNextSectionWith, getAggregateSection } from './content.js';
import { saveQuizScore } from './storage.js';

let subject;
let section;
let quizData;
let isV2 = false;
let isAggregate = false;
let quizFeature = 'quiz';
let setSuffix = '';
let backLink = '';
let questions;
let current = 0;
let correct = 0;
const wrongAnswers = [];

main();

function main() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const subjectParam = params.get('subject');
  isV2 = params.get('set') === '2';
  quizFeature = isV2 ? 'quiz2' : 'quiz';
  setSuffix = isV2 ? '&set=2' : '';

  if (id && !subjectParam) {
    location.replace(`quiz.html?subject=sistemas-y-metodos&id=${encodeURIComponent(id)}${setSuffix}`);
    return;
  }

  subject = getCurrentSubject();
  if (!subject) {
    location.replace('index.html');
    return;
  }

  isAggregate = id === '__all__';
  section = isAggregate
    ? getAggregateSection(subject.id, params.get('set'))
    : getSection(subject.id, id);
  if (!section) {
    location.replace(`materia.html?subject=${subject.id}`);
    return;
  }
  quizData = section[quizFeature];
  if (!quizData) {
    location.replace(`seccion.html?subject=${subject.id}&id=${section.id}`);
    return;
  }

  backLink = isAggregate
    ? `${subject.resumen ? 'resumen' : 'materia'}.html?subject=${subject.id}`
    : `seccion.html?subject=${subject.id}&id=${section.id}`;

  renderNav({ active: 'home', subject });

  questions = [
    ...((quizData.tf ?? []).map((q) => ({ ...q, kind: 'tf' }))),
    ...((quizData.mc ?? []).map((q) => ({ ...q, kind: 'mc' }))),
    ...((quizData.ms ?? []).map((q) => ({ ...q, kind: 'ms' }))),
  ];

  document.title = `Quiz: ${section.title}`;
  const eyebrowLabel = isAggregate
    ? (isV2 ? 'Examinación integral · banco nuevo' : 'Examinación integral')
    : (isV2 ? 'Examinación · banco nuevo' : 'Examinación');
  document.getElementById('quiz-header').innerHTML = `
    <a href="${backLink}" class="masthead-back">← ${isAggregate ? 'Volver' : 'Volver a la sección'}</a>
    <div class="section-header" style="margin-bottom:1.5rem;">
      <div class="section-header-eyebrow">
        <span class="num">${isAggregate ? '∑' : section.id}</span>
        <span>${eyebrowLabel}</span>
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

  const helpText = q.kind === 'ms'
    ? `<p class="meta" style="margin:0.4rem 0 1rem;letter-spacing:.06em;text-transform:uppercase;font-size:.72rem;">Marcá <strong>una o más</strong> opciones · 5 posibles</p>`
    : '';

  document.getElementById('quiz-body').innerHTML = `
    <div class="question-card fade-in">
      <p class="eyebrow no-rule" style="margin-bottom:0.85rem;">
        <span style="background:none;width:0;height:0;"></span>
        Pregunta N.º ${String(current + 1).padStart(2, '0')}
      </p>
      <p class="question-stem">${q.q}</p>
      ${helpText}
      <div id="options"></div>
      <div id="explanation" class="hidden info-callout" style="margin-top:1.1rem;"></div>
    </div>
  `;
  const optsContainer = document.getElementById('options');

  if (q.kind === 'ms') {
    renderMultiSelect(optsContainer, opts, q);
  } else {
    renderSingleSelect(optsContainer, opts, q);
  }
}

function renderSingleSelect(optsContainer, opts, q) {
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

function renderMultiSelect(optsContainer, opts, q) {
  optsContainer.innerHTML = opts
    .map((o, i) => `
      <button data-idx="${i}" class="quiz-option quiz-option-ms touch-target" aria-pressed="false">
        <span class="ms-marker" aria-hidden="true"></span>
        <span class="ms-text">${o.text}</span>
      </button>
    `).join('');

  optsContainer.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!pressed));
      btn.classList.toggle('option-selected', !pressed);
    });
  });

  document.getElementById('quiz-bottom').innerHTML = `
    <button id="check-btn" class="btn btn-accent touch-target">Comprobar</button>
    <button id="next-btn" class="btn btn-accent touch-target hidden"
            style="margin-left:0.5rem;">Siguiente</button>
  `;
  document.getElementById('check-btn').addEventListener('click',
    () => handleMultiAnswer(optsContainer, opts, q));
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

function handleMultiAnswer(optsContainer, opts, q) {
  const buttons = Array.from(optsContainer.querySelectorAll('button'));
  const chosenIdx = buttons
    .map((b, i) => (b.getAttribute('aria-pressed') === 'true' ? i : -1))
    .filter((i) => i !== -1);
  const correctSet = new Set(q.correctIndexes);
  const chosenSet = new Set(chosenIdx);
  const isCorrect =
    chosenSet.size === correctSet.size &&
    [...chosenSet].every((i) => correctSet.has(i));

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    const wasChosen = chosenSet.has(i);
    const isRight = correctSet.has(i);
    btn.classList.remove('option-selected');
    if (isRight) {
      btn.classList.add('option-correct');
    } else if (wasChosen) {
      btn.classList.add('option-wrong');
    }
  });

  if (isCorrect) {
    correct++;
  } else {
    const chosenText = chosenIdx.length === 0
      ? '(no marcaste ninguna)'
      : chosenIdx.map((i) => opts[i].text).join(' · ');
    wrongAnswers.push({ question: q, chosenText });
  }

  const exp = document.getElementById('explanation');
  const correctText = q.correctIndexes.map((i) => opts[i].text).join(' · ');
  exp.innerHTML = `
    <span class="eyebrow no-rule" style="display:block;margin-bottom:0.4em;">
      ${isCorrect ? 'Bien · explicación' : 'Por qué fallaste'}
    </span>
    <p style="margin-bottom:0.55em;"><strong>Correctas:</strong> ${correctText}</p>
    <p>${q.explain}</p>
  `;
  exp.classList.remove('hidden');

  const checkBtn = document.getElementById('check-btn');
  const nextBtn = document.getElementById('next-btn');
  checkBtn.classList.add('hidden');
  nextBtn.classList.remove('hidden');
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
  saveQuizScore(subject.id, isV2 ? `${section.id}::v2` : section.id, { correct, total: questions.length });
  document.getElementById('quiz-body').classList.add('hidden');
  document.getElementById('quiz-bottom').innerHTML = '';
  const summary = document.getElementById('quiz-summary');
  summary.classList.remove('hidden');
  const pct = Math.round((correct / questions.length) * 100);
  const seccionLink = backLink;
  const quizLink = `quiz.html?subject=${subject.id}&id=${section.id}${setSuffix}`;
  const fcLink = `flashcards.html?subject=${subject.id}&id=${section.id}${setSuffix}`;
  const nextSection = isAggregate
    ? null
    : getNextSectionWith(subject.id, section.id, quizFeature);
  const nextLink = nextSection
    ? `quiz.html?subject=${subject.id}&id=${nextSection.id}${setSuffix}`
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
      <a href="${seccionLink}" class="btn-ghost touch-target md:flex-1">${isAggregate ? 'Volver' : 'Volver a la sección'}</a>
    </div>
  `;
}
