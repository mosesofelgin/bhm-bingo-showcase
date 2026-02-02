/**
 * Hint System
 * Provides progressive hints for players who are stuck
 */

import { Hero } from "./heroDatabase";

export interface Hint {
  text: string;
  pointPenalty: number;
  level: number;
}

/**
 * Generate progressive hints for a hero
 * @param hero - The hero to generate hints for
 * @param currentHintLevel - Current hint level (0 = no hints yet)
 * @returns Hint object with text and point penalty
 */
export const generateHint = (hero: Hero, currentHintLevel: number): Hint => {
  const hints: Hint[] = [
    // Level 1: Category hint
    {
      text: `💡 Hint: This person is known for their work in ${hero.category}.`,
      pointPenalty: 10,
      level: 1
    },
    // Level 2: Era hint
    {
      text: `💡 Hint: They lived during ${hero.era}.`,
      pointPenalty: 20,
      level: 2
    },
    // Level 3: First letter hint
    {
      text: `💡 Hint: Their name starts with "${hero.name.charAt(0)}".`,
      pointPenalty: 30,
      level: 3
    },
    // Level 4: Partial name reveal
    {
      text: `💡 Hint: Their name is "${hero.name.split(' ')[0]} ${hero.name.split(' ').length > 1 ? hero.name.split(' ')[1].charAt(0) + '...' : ''}".`,
      pointPenalty: 50,
      level: 4
    },
    // Level 5: Full reveal (last resort)
    {
      text: `💡 Final Hint: The answer is ${hero.name}.`,
      pointPenalty: 75,
      level: 5
    }
  ];

  // Return the appropriate hint level
  const hintIndex = Math.min(currentHintLevel, hints.length - 1);
  return hints[hintIndex];
};

/**
 * Calculate total hint penalty
 * @param hintsUsed - Array of hints that have been used
 * @returns Total point penalty
 */
export const calculateHintPenalty = (hintsUsed: Hint[]): number => {
  return hintsUsed.reduce((total, hint) => total + hint.pointPenalty, 0);
};
