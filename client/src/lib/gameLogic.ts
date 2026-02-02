/**
 * Game Logic - Manual Selection Mechanics
 * Players must manually find and click the correct square
 */

import { Hero } from "./heroDatabase";

export interface GameMechanics {
  mode: "classic" | "quiz";
  currentClue: string | null;
  currentAnswer: Hero | null;
  awaitingPlayerSelection: boolean;
  streak: number;
  incorrectAttempts: number;
  startTime: number | null;
  personalBest: number | null;
}

/**
 * Generate a clue for quiz mode
 * Returns a description without revealing the name
 */
export function generateClue(hero: Hero): string {
  const clues = [
    // Use bio summary
    hero.bioSummary,
    
    // Use key accomplishment
    `Known for: ${hero.keyAccomplishment}`,
    
    // Use category and era
    `This ${hero.category.toLowerCase()} figure from the ${hero.era} era...`,
    
    // Use partial bio
    hero.fullBio.split('.')[0] + '...',
  ];
  
  // Randomly select a clue type
  const randomIndex = Math.floor(Math.random() * clues.length);
  return clues[randomIndex];
}

/**
 * Generate multiple choice clues for harder difficulty
 */
export function generateMultipleChoiceClue(hero: Hero, allHeroes: Hero[]): {
  clue: string;
  options: string[];
  correctAnswer: string;
} {
  // Get 3 random wrong answers from same category
  const sameCategory = allHeroes.filter(
    h => h.category === hero.category && h.id !== hero.id
  );
  
  const wrongAnswers = sameCategory
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(h => h.name);
  
  // Combine and shuffle
  const options = [...wrongAnswers, hero.name].sort(() => Math.random() - 0.5);
  
  return {
    clue: generateClue(hero),
    options,
    correctAnswer: hero.name,
  };
}

/**
 * Check if player clicked the correct square
 */
export function validateSelection(
  clickedHero: Hero,
  expectedHero: Hero
): {
  correct: boolean;
  feedback: string;
} {
  const correct = clickedHero.id === expectedHero.id;
  
  return {
    correct,
    feedback: correct
      ? `✓ Correct! ${expectedHero.name}`
      : `✗ Wrong! That's ${clickedHero.name}, not ${expectedHero.name}`,
  };
}

/**
 * Calculate streak bonus
 */
export function calculateStreakBonus(streak: number): number {
  if (streak >= 10) return 3;
  if (streak >= 5) return 2;
  if (streak >= 3) return 1.5;
  return 1;
}

/**
 * Format time for display
 */
export function formatTime(milliseconds: number): string {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  
  if (minutes > 0) {
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  return `${seconds}s`;
}

/**
 * Get personal best from localStorage
 */
export function getPersonalBest(boardSize: number, mode: string): number | null {
  const key = `pb_${boardSize}_${mode}`;
  const stored = localStorage.getItem(key);
  return stored ? parseInt(stored) : null;
}

/**
 * Save personal best to localStorage
 */
export function savePersonalBest(boardSize: number, mode: string, time: number): boolean {
  const key = `pb_${boardSize}_${mode}`;
  const current = getPersonalBest(boardSize, mode);
  
  if (current === null || time < current) {
    localStorage.setItem(key, time.toString());
    return true; // New record!
  }
  
  return false;
}

/**
 * Calculate score based on time, streak, and accuracy
 */
export function calculateScore(
  timeMs: number,
  streak: number,
  incorrectAttempts: number,
  boardSize: number
): number {
  const baseScore = 1000;
  const timeBonus = Math.max(0, 500 - Math.floor(timeMs / 1000));
  const streakBonus = streak * 50;
  const accuracyPenalty = incorrectAttempts * 25;
  const sizeMultiplier = boardSize === 3 ? 1 : boardSize === 5 ? 1.5 : 2;
  
  return Math.floor(
    (baseScore + timeBonus + streakBonus - accuracyPenalty) * sizeMultiplier
  );
}
