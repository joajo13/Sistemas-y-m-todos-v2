/**
 * Wrapper sobre localStorage con un solo key (study-app-state).
 *
 * Schema v2:
 *   {
 *     schemaVersion: 2,
 *     subjects: {
 *       "<subjectId>": {
 *         sections: {
 *           "<sectionId>": {
 *             read: bool,
 *             lastQuizScore: { correct, total, at } | null,
 *             knownFlashcards: [fcId, ...]
 *           },
 *           ...
 *         }
 *       },
 *       ...
 *     }
 *   }
 *
 * Migración v1 → v2: si encontramos { sections: {...} } sin `subjects`,
 * lo movemos a `subjects['sistemas-y-metodos'].sections` y seteamos
 * schemaVersion: 2. La key v1 NO se borra hasta que setState() pisa
 * el valor (que es lo que ocurre en el primer write).
 */

const KEY = 'study-app-state';
const LEGACY_SUBJECT_ID = 'sistemas-y-metodos';

function defaultState() {
  return { schemaVersion: 2, subjects: {} };
}

function defaultSectionState() {
  return { read: false, lastQuizScore: null, knownFlashcards: [] };
}

function migrate(raw) {
  if (!raw || typeof raw !== 'object') return defaultState();
  // Ya v2
  if (raw.schemaVersion === 2 && raw.subjects && typeof raw.subjects === 'object') {
    return raw;
  }
  // v1: { sections: {...} } sin subjects
  if (raw.sections && typeof raw.sections === 'object' && !raw.subjects) {
    return {
      schemaVersion: 2,
      subjects: {
        [LEGACY_SUBJECT_ID]: { sections: raw.sections },
      },
    };
  }
  // formato desconocido → default vacío (no se pierde nada porque no había nada usable)
  return defaultState();
}

function ensureSubject(state, subjectId) {
  if (!state.subjects[subjectId]) {
    state.subjects[subjectId] = { sections: {} };
  }
  return state.subjects[subjectId];
}

function ensureSection(state, subjectId, sectionId) {
  const subj = ensureSubject(state, subjectId);
  if (!subj.sections[sectionId]) {
    subj.sections[sectionId] = defaultSectionState();
  }
  return subj.sections[sectionId];
}

export function getState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return migrate(parsed);
  } catch {
    return defaultState();
  }
}

export function setState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function getSectionState(subjectId, sectionId) {
  const state = getState();
  const subj = state.subjects[subjectId];
  if (!subj || !subj.sections[sectionId]) return defaultSectionState();
  return subj.sections[sectionId];
}

export function markRead(subjectId, sectionId) {
  const state = getState();
  ensureSection(state, subjectId, sectionId).read = true;
  setState(state);
}

export function saveQuizScore(subjectId, sectionId, { correct, total }) {
  const state = getState();
  ensureSection(state, subjectId, sectionId).lastQuizScore = {
    correct,
    total,
    at: new Date().toISOString(),
  };
  setState(state);
}

/**
 * Progreso de un examen integral (id=__all__), guardado aparte de las secciones
 * en state.examProgress[subjectId][examKey]. Permite reanudar exámenes largos
 * (cientos de preguntas) y alimentar las cards de resumen intermedio.
 *
 * ExamProgress = {
 *   current: number,          // índice de la próxima pregunta a mostrar
 *   correct: number,          // correctas acumuladas
 *   lastMilestone: number,    // índice del último checkpoint mostrado (-1 si ninguno)
 *   wrong: [ { idx, q, chosenText, explain, secTitle } ],  // erradas, con su tema
 *   total: number,            // total de preguntas del examen (para validar reanudación)
 *   updatedAt: string
 * }
 */
export function getExamProgress(subjectId, examKey) {
  const state = getState();
  return state.examProgress?.[subjectId]?.[examKey] ?? null;
}

export function saveExamProgress(subjectId, examKey, progress) {
  const state = getState();
  if (!state.examProgress) state.examProgress = {};
  if (!state.examProgress[subjectId]) state.examProgress[subjectId] = {};
  state.examProgress[subjectId][examKey] = {
    ...progress,
    updatedAt: new Date().toISOString(),
  };
  setState(state);
}

export function clearExamProgress(subjectId, examKey) {
  const state = getState();
  if (state.examProgress?.[subjectId]?.[examKey]) {
    delete state.examProgress[subjectId][examKey];
    setState(state);
  }
}

export function markFlashcard(subjectId, sectionId, fcId, known) {
  const state = getState();
  const section = ensureSection(state, subjectId, sectionId);
  const set = new Set(section.knownFlashcards);
  if (known) set.add(fcId);
  else set.delete(fcId);
  section.knownFlashcards = [...set];
  setState(state);
}
