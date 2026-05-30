import { renderNav } from './nav.js';
import { getCurrentSubject, getPartial } from './content.js';

let subject;
let partial;
let questions;
let current = 0;
let correct = 0;       // aciertos en preguntas cerradas (tf/mc)
let closedTotal = 0;   // total de preguntas cerradas
const wrongAnswers = [];

main();

function main() {
  const params = new URLSearchParams(location.search);
  const partialId = params.get('parcial');

  subject = getCurrentSubject();
  if (!subject) {
    location.replace('index.html');
    return;
  }
  if (!subject.partials || subject.partials.length === 0) {
    location.replace(`materia.html?subject=${subject.id}`);
    return;
  }

  renderNav({ active: 'home', subject });

  if (!partialId) {
    renderIndex();
    return;
  }

  partial = getPartial(subject.id, partialId);
  if (!partial) {
    location.replace(`parciales.html?subject=${subject.id}`);
    return;
  }

  startPartial();
}

/* ---------- Índice de parciales ---------- */

function countKinds(qs) {
  return qs.reduce(
    (acc, q) => {
      acc[q.kind] = (acc[q.kind] || 0) + 1;
      return acc;
    },
    { tf: 0, mc: 0, open: 0 }
  );
}

function partialCard(p) {
  const c = countKinds(p.questions);
  const meta = [
    `${p.questions.length} preguntas`,
    `${c.tf} V/F`,
    `${c.mc} opción múltiple`,
    `${c.open} desarrollo`,
  ].join(' · ');
  return `
    <a href="parciales.html?subject=${subject.id}&parcial=${p.id}" class="folio-card">
      <div class="folio-card-num">${p.id}</div>
      <div class="folio-card-body">
        <h3 class="folio-card-title">${p.title}</h3>
        <p class="folio-card-dek">${p.blurb || '&nbsp;'}</p>
        <div class="folio-card-meta"><span class="quiz">${meta}</span></div>
      </div>
    </a>
  `;
}

function renderIndex() {
  document.title = `Parciales — ${subject.title}`;
  document.getElementById('parcial-header').innerHTML = `
    <a href="materia.html?subject=${subject.id}" class="masthead-back">← Volver a la materia</a>
    <div class="section-header" style="margin-bottom:1.5rem;">
      <div class="section-header-eyebrow">
        <span>Parciales de práctica</span>
      </div>
      <h1 class="section-header-title" style="font-size:clamp(1.8rem,4.5vw,2.6rem);">${subject.title}</h1>
      <p class="meta" style="margin-top:0.6rem;font-family:var(--font-reading);font-size:1rem;color:var(--ink-2);text-transform:none;letter-spacing:0;">
        Exámenes de práctica que cruzan todos los temas de la materia. Las preguntas cerradas se corrigen solas; las de desarrollo muestran una respuesta modelo para autoevaluarte.
      </p>
    </div>
  `;
  document.getElementById('parcial-bottom').innerHTML = '';
  document.getElementById('parcial-index').innerHTML = `
    <div class="grid grid-cols-1 gap-4 stagger-rise">
      ${subject.partials.map(partialCard).join('')}
    </div>
  `;
}

/* ---------- Rendir un parcial ---------- */

function startPartial() {
  document.getElementById('parcial-index').innerHTML = '';
  questions = partial.questions;
  closedTotal = questions.filter((q) => q.kind === 'tf' || q.kind === 'mc').length;
  current = 0;
  correct = 0;
  wrongAnswers.length = 0;

  document.title = `${partial.title} — ${subject.title}`;
  document.getElementById('parcial-header').innerHTML = `
    <a href="parciales.html?subject=${subject.id}" class="masthead-back">← Todos los parciales</a>
    <div class="section-header" style="margin-bottom:1.5rem;">
      <div class="section-header-eyebrow">
        <span class="num">${partial.id}</span>
        <span>Parcial de práctica</span>
      </div>
      <h1 class="section-header-title" style="font-size:clamp(1.8rem,4.5vw,2.6rem);">${partial.title}</h1>
      <div class="quiz-progress">
        <span class="count" id="progress-text"></span>
        <div class="bar" id="progress-bar" style="--progress:0%"></div>
      </div>
    </div>
  `;
  renderQuestion();
}

function renderQuestion() {
  const q = questions[current];
  document.getElementById('progress-text').textContent =
    `Pregunta ${current + 1} de ${questions.length}`;
  document.getElementById('progress-bar').style
    .setProperty('--progress', `${(current / questions.length) * 100}%`);

  const kindLabel = q.kind === 'tf'
    ? 'Verdadero / Falso'
    : q.kind === 'mc'
      ? 'Opción múltiple'
      : 'Desarrollo';

  document.getElementById('parcial-body').innerHTML = `
    <div class="question-card fade-in">
      <p class="eyebrow no-rule" style="margin-bottom:0.85rem;">
        <span style="background:none;width:0;height:0;"></span>
        Pregunta N.º ${String(current + 1).padStart(2, '0')} · ${kindLabel}
      </p>
      <p class="question-stem">${q.q}</p>
      <div id="options"></div>
      <div id="explanation" class="hidden info-callout" style="margin-top:1.1rem;"></div>
    </div>
  `;

  if (q.kind === 'open') {
    renderOpen(q);
  } else {
    renderSingleSelect(q);
  }
}

function renderSingleSelect(q) {
  const opts = q.kind === 'tf'
    ? [{ text: 'Verdadero', value: true }, { text: 'Falso', value: false }]
    : q.options.map((text, i) => ({ text, value: i }));

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

  document.getElementById('parcial-bottom').innerHTML = `
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

function renderOpen(q) {
  document.getElementById('options').innerHTML = `
    <p class="meta" style="margin:0.2rem 0 0;letter-spacing:.06em;text-transform:uppercase;font-size:.72rem;">
      Pregunta de desarrollo · respondela mentalmente o en papel y después comparala con la respuesta modelo.
    </p>
  `;

  document.getElementById('parcial-bottom').innerHTML = `
    <button id="reveal-btn" class="btn btn-accent touch-target">Ver respuesta modelo</button>
    <button id="next-btn" class="btn btn-accent touch-target hidden"
            style="margin-left:0.5rem;">Siguiente</button>
  `;
  document.getElementById('reveal-btn').addEventListener('click', () => revealModel(q));
  document.getElementById('next-btn').addEventListener('click', advance);
}

function revealModel(q) {
  const exp = document.getElementById('explanation');
  exp.innerHTML = `
    <span class="eyebrow no-rule" style="display:block;margin-bottom:0.4em;">Respuesta modelo</span>
    <p>${q.model}</p>
  `;
  exp.classList.remove('hidden');
  document.getElementById('reveal-btn').classList.add('hidden');
  document.getElementById('next-btn').classList.remove('hidden');
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
  document.getElementById('parcial-body').classList.add('hidden');
  document.getElementById('parcial-bottom').innerHTML = '';
  const summary = document.getElementById('parcial-summary');
  summary.classList.remove('hidden');

  const openTotal = questions.length - closedTotal;
  const pct = closedTotal > 0 ? Math.round((correct / closedTotal) * 100) : 0;
  const indexLink = `parciales.html?subject=${subject.id}`;
  const retryLink = `parciales.html?subject=${subject.id}&parcial=${partial.id}`;
  const materiaLink = `materia.html?subject=${subject.id}`;

  let verdict = '';
  if (pct === 100) verdict = 'Impecable';
  else if (pct >= 80) verdict = 'Muy bien';
  else if (pct >= 60) verdict = 'Aceptable';
  else if (pct >= 40) verdict = 'A revisar';
  else verdict = 'A leer otra vez';

  summary.innerHTML = `
    <div class="result-card fade-in">
      <p class="result-card-label">Resultado · cerradas</p>
      <p class="result-card-score">${correct}<span style="color:var(--muted);font-style:normal;font-size:0.55em;letter-spacing:-0.02em;"> ⁄ </span>${closedTotal}</p>
      <p class="result-card-meta">${pct}% correctas · <em>${verdict}</em></p>
    </div>
    <div class="info-callout" style="margin-top:1.5rem;">
      <p>Las ${closedTotal} preguntas cerradas se corrigieron arriba. Las ${openTotal} de desarrollo no puntúan: autoevaluate comparando lo que respondiste con la respuesta modelo de cada una.</p>
    </div>
    ${wrongAnswers.length > 0 ? `
      <section class="mt-12">
        <div class="unit-header">
          <span class="unit-header-num">!</span>
          <span class="unit-header-title">Cerradas erradas</span>
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
    <div class="flex flex-col md:flex-row gap-3 mt-10">
      <a href="${retryLink}" class="btn btn-accent touch-target md:flex-1">Reintentar</a>
      <a href="${indexLink}" class="btn-ghost touch-target md:flex-1">Otros parciales</a>
      <a href="${materiaLink}" class="btn-ghost touch-target md:flex-1">Volver a la materia</a>
    </div>
  `;
}
