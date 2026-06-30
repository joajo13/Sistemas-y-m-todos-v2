import { renderNav } from './nav.js';
import { getCurrentSubject, getAggregateSection } from './content.js';
import { renderBlock, hydrateBlocks } from './blocks.js';
import { renderMath } from './katex-init.js';

const subject = getCurrentSubject();

if (!subject) {
  location.replace('index.html');
} else if (!subject.resumen) {
  // La materia todavía no tiene resumen generado: volvé a la materia.
  location.replace(`materia.html?subject=${subject.id}`);
} else {
  main();
}

function main() {
  document.title = `Resumen final — ${subject.title}`;
  renderNav({ active: 'home', subject });
  document.getElementById('resumen-back').href = `materia.html?subject=${subject.id}`;

  document.getElementById('resumen-header').innerHTML = `
    <div class="section-header-eyebrow"><span>Resumen final</span></div>
    <h1 class="section-header-title">${subject.title}</h1>
  `;

  const intro = subject.resumen.intro;
  document.getElementById('resumen-intro').innerHTML = intro
    ? `<div class="criollo-callout">
         <span class="eyebrow no-rule" style="display:block;margin-bottom:0.35em;">Para el final</span>
         <p>${intro}</p>
       </div>`
    : '';

  const host = document.getElementById('resumen-content');
  host.innerHTML = subject.resumen.units.map(renderUnit).join('') + renderAutoevaluacion();
  hydrateBlocks(host);

  const renderAll = () => renderMath(host);
  if (typeof window.renderMathInElement === 'function') renderAll();
  else window.addEventListener('load', renderAll, { once: true });
}

function renderAutoevaluacion() {
  const agg = getAggregateSection(subject.id, '2');
  if (!agg) return '';
  const q = agg.quiz2 || { tf: [], mc: [], ms: [] };
  const nMc = q.mc?.length || 0;
  const nMs = q.ms?.length || 0;
  const nQ = (q.tf?.length || 0) + nMc + nMs;
  const nF = (agg.flashcards2 || []).length;
  if (nQ === 0 && nF === 0) return '';

  const quizLink = `quiz.html?subject=${subject.id}&id=__all__&set=2`;
  const fcLink = `flashcards.html?subject=${subject.id}&id=__all__&set=2`;
  const buttons = [];
  if (nQ > 0) {
    buttons.push(`<a href="${quizLink}" class="btn btn-accent touch-target" style="flex:1;">Quiz integral · ${nQ} preguntas</a>`);
  }
  if (nMc > 0) {
    buttons.push(`<a href="${quizLink}&type=mc" class="btn-ghost touch-target" style="flex:1;">Solo multiple choice · ${nMc}</a>`);
  }
  if (nMs > 0) {
    buttons.push(`<a href="${quizLink}&type=ms" class="btn-ghost touch-target" style="flex:1;">Solo multi-select · ${nMs}</a>`);
  }
  if (nF > 0) {
    buttons.push(`<a href="${fcLink}" class="btn-ghost touch-target" style="flex:1;">Flashcards integrales · ${nF}</a>`);
  }

  return `
    <section style="margin-top:3.5rem;">
      <div class="unit-header">
        <span class="unit-header-num">∑</span>
        <span class="unit-header-title">Autoevaluación de toda la materia</span>
        <span class="unit-header-meta">banco nuevo · sin pistas</span>
      </div>
      <div class="criollo-callout" style="margin-top:1rem;">
        <span class="eyebrow no-rule" style="display:block;margin-bottom:0.35em;">Para medirte de una</span>
        <p>Esto junta el quiz y las flashcards nuevas de <strong>todas las secciones</strong> en una sola
        tanda. Las opciones están parejas a propósito: no se puede adivinar por la forma, solo sabiendo.
        Es largo (es toda la materia), pero podés cortar cuando quieras.</p>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:1.25rem;">
        ${buttons.join('')}
      </div>
    </section>
  `;
}

function renderUnit(u) {
  const unitTitle = subject.units[u.unit] || '';
  const header = `
    <div class="unit-header" style="margin-top:2.5rem;">
      <span class="unit-header-num">${u.unit}</span>
      <span class="unit-header-title">${unitTitle}</span>
      <span class="unit-header-meta">${u.sections.length} ${u.sections.length === 1 ? 'sección' : 'secciones'}</span>
    </div>
  `;
  return header + u.sections.map(renderResumenSection).join('');
}

function renderResumenSection(s) {
  const body = s.blocks.map(renderBlock).join('');
  const leer = `seccion.html?subject=${subject.id}&id=${s.id}`;
  return `
    <section style="margin-top:2rem;">
      <h3 style="margin-bottom:0.75rem;">${s.title}</h3>
      ${body}
      <p style="margin-top:1rem;">
        <a href="${leer}" class="btn-ghost touch-target"
           style="padding:0.4rem 0.85rem;font-size:.78rem;letter-spacing:.06em;">
          Leer completo →
        </a>
      </p>
    </section>
  `;
}
