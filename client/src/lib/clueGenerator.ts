/**
 * Advanced Clue Generation System
 * Creates engaging, educational clues without revealing names
 */

import { Hero } from "./heroDatabase";

export type ClueType = 
  | "accomplishment" 
  | "era_category" 
  | "riddle" 
  | "quote_style" 
  | "comparison"
  | "legacy";

export interface GeneratedClue {
  text: string;
  type: ClueType;
  difficulty: "easy" | "medium" | "hard";
}

/**
 * Generate an accomplishment-based clue
 */
function generateAccomplishmentClue(hero: Hero): string {
  const templates = [
    `This person ${hero.keyAccomplishment.toLowerCase()}.`,
    `Known for ${hero.keyAccomplishment.toLowerCase()}.`,
    `Famous for: ${hero.keyAccomplishment}`,
    `This ${hero.category.toLowerCase()} figure ${hero.keyAccomplishment.toLowerCase()}.`,
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

/**
 * Generate an achievement-focused clue (NO DATES)
 */
function generateAchievementClue(hero: Hero): string {
  // Extract the most punchy part of their accomplishment
  const accomplishment = hero.keyAccomplishment.toLowerCase();
  
  const templates = [
    `This ${hero.category.toLowerCase()} legend ${accomplishment}.`,
    `Known for ${accomplishment}.`,
    `This icon ${accomplishment}.`,
    `Find the person who ${accomplishment}.`,
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

/**
 * Generate a riddle-style clue
 */
function generateRiddleClue(hero: Hero): string {
  // Extract key words from bio
  const bioWords = hero.bioSummary.toLowerCase();
  
  if (bioWords.includes("first")) {
    return `I was a trailblazer who broke barriers in ${hero.category.toLowerCase()}. Who am I?`;
  }
  
  if (bioWords.includes("founded") || bioWords.includes("created")) {
    return `I built something that changed ${hero.category.toLowerCase()} forever. Who am I?`;
  }
  
  if (bioWords.includes("fought") || bioWords.includes("activist")) {
    return `I dedicated my life to fighting for justice and equality. Who am I?`;
  }
  
  return `My legacy in ${hero.category.toLowerCase()} continues to inspire generations. Who am I?`;
}

/**
 * Generate a quote-style clue (using bio summary)
 */
function generateQuoteStyleClue(hero: Hero): string {
  // Use first sentence of bio
  const firstSentence = hero.bioSummary.split('.')[0];
  return `"${firstSentence}..." - Who is this about?`;
}

/**
 * Generate a comparison/context clue
 */
function generateComparisonClue(hero: Hero): string {
  const categoryContext: Record<string, string> = {
    "Civil Rights": "the fight for equality and justice",
    "Science & Medicine": "advancing human knowledge and health",
    "Arts & Culture": "shaping American culture and creativity",
    "Business & Entrepreneurship": "building economic empowerment",
    "Politics & Law": "shaping policy and governance",
    "Sports": "breaking barriers in athletics",
    "Faith & Leadership": "spiritual and community leadership",
    "Military": "serving and protecting with honor",
    "Ancient Philosophy": "ancient wisdom and leadership",
    "Music": "revolutionizing sound and culture",
  };
  
  const context = categoryContext[hero.category] || "their field";
  return `This person made history in ${context}.`;
}

/**
 * Generate a legacy-focused clue
 */
function generateLegacyClue(hero: Hero): string {
  return `This ${hero.category.toLowerCase()} icon's work continues to influence us today. ${hero.keyAccomplishment}`;
}

/**
 * Main clue generator - returns a random clue type
 */
export function generateAdvancedClue(hero: Hero, difficulty: "easy" | "medium" | "hard" = "medium"): GeneratedClue {
  const clueGenerators: Array<{ type: ClueType; fn: (h: Hero) => string; difficulty: "easy" | "medium" | "hard" }> = [
    { type: "accomplishment", fn: generateAccomplishmentClue, difficulty: "easy" },
    { type: "era_category", fn: generateAchievementClue, difficulty: "easy" },
    { type: "quote_style", fn: generateQuoteStyleClue, difficulty: "medium" },
    { type: "comparison", fn: generateComparisonClue, difficulty: "medium" },
    { type: "riddle", fn: generateRiddleClue, difficulty: "hard" },
    { type: "legacy", fn: generateLegacyClue, difficulty: "medium" },
  ];
  
  // Filter by difficulty
  const availableGenerators = clueGenerators.filter(g => {
    if (difficulty === "easy") return g.difficulty === "easy";
    if (difficulty === "medium") return g.difficulty === "easy" || g.difficulty === "medium";
    return true; // hard includes all
  });
  
  const selected = availableGenerators[Math.floor(Math.random() * availableGenerators.length)];
  
  return {
    text: selected.fn(hero),
    type: selected.type,
    difficulty: selected.difficulty,
  };
}

/**
 * Generate multiple clues for progressive hints
 */
export function generateProgressiveClues(hero: Hero): GeneratedClue[] {
  return [
    generateAdvancedClue(hero, "hard"),
    generateAdvancedClue(hero, "medium"),
    generateAdvancedClue(hero, "easy"),
  ];
}

/**
 * Generate a clue that emphasizes specific aspects
 */
export function generateThematicClue(hero: Hero, theme: string): string {
  const themeClues: Record<string, (h: Hero) => string> = {
    "music": (h) => `This musical pioneer ${h.keyAccomplishment.toLowerCase()}.`,
    "philosophy": (h) => `This thinker's ideas about ${h.category.toLowerCase()} shaped history.`,
    "entrepreneurship": (h) => `This business leader ${h.keyAccomplishment.toLowerCase()}.`,
    "activism": (h) => `This activist fought for change by ${h.keyAccomplishment.toLowerCase()}.`,
  };
  
  const generator = themeClues[theme.toLowerCase()];
  return generator ? generator(hero) : generateAdvancedClue(hero).text;
}
