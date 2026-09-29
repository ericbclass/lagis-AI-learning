import { UserProgress } from '../types';

const STORAGE_KEY = 'ai_zero_tut_progress_v1';

export const defaultProgress: UserProgress = {
  completedLevels: [],
  currentLevel: 0,
  quizScores: {},
  lastActiveTimestamp: Date.now(),
};

export function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw);
    return {
      completedLevels: Array.isArray(parsed.completedLevels) ? parsed.completedLevels : [],
      currentLevel: typeof parsed.currentLevel === 'number' ? parsed.currentLevel : 0,
      quizScores: parsed.quizScores || {},
      lastActiveTimestamp: parsed.lastActiveTimestamp || Date.now(),
    };
  } catch (e) {
    console.warn('Failed to load progress from localStorage', e);
    return defaultProgress;
  }
}

export function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...progress,
      lastActiveTimestamp: Date.now(),
    }));
  } catch (e) {
    console.warn('Failed to save progress to localStorage', e);
  }
}

export function markLevelCompleted(levelId: number, quizScore?: number): UserProgress {
  const current = loadProgress();
  const nextCompleted = current.completedLevels.includes(levelId)
    ? current.completedLevels
    : [...current.completedLevels, levelId].sort((a, b) => a - b);
  
  const updated: UserProgress = {
    ...current,
    completedLevels: nextCompleted,
    quizScores: quizScore !== undefined
      ? { ...current.quizScores, [levelId]: quizScore }
      : current.quizScores,
    currentLevel: Math.min(11, Math.max(current.currentLevel, levelId + 1)),
  };

  saveProgress(updated);
  return updated;
}

export function resetProgress(): UserProgress {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn(e);
  }
  return defaultProgress;
}
