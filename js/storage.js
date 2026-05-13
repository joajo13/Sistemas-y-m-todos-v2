/**
 * Wrapper sobre localStorage con un solo key (study-app-state).
 * Schema:
 *   {
 *     sections: {
 *       "1": { read: bool, lastQuizScore: { correct, total, at }, knownFlashcards: [fcId, ...] },
 *       ...
 *     }
 *   }
 */

const KEY = 'study-app-state';

function defaultState() {
  return { sections: {} };
}

function ensureSection(state, id) {
  if (!state.sections[id]) {
    state.sections[id] = { read: false, lastQuizScore: null, knownFlashcards: [] };
  }
  return state.sections[id];
}

export function getState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return defaultState();
    if (!parsed.sections) parsed.sections = {};
    return parsed;
  } catch {
    return defaultState();
  }
}

export function setState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function getSectionState(id) {
  const state = getState();
  return state.sections[id] || { read: false, lastQuizScore: null, knownFlashcards: [] };
}

export function markRead(id) {
  const state = getState();
  ensureSection(state, id).read = true;
  setState(state);
}

export function saveQuizScore(id, { correct, total }) {
  const state = getState();
  ensureSection(state, id).lastQuizScore = {
    correct,
    total,
    at: new Date().toISOString(),
  };
  setState(state);
}

export function markFlashcard(sectionId, fcId, known) {
  const state = getState();
  const section = ensureSection(state, sectionId);
  const set = new Set(section.knownFlashcards);
  if (known) set.add(fcId);
  else set.delete(fcId);
  section.knownFlashcards = [...set];
  setState(state);
}
