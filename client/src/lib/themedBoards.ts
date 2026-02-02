/**
 * Themed Board Variations
 * AI-generated themed boards for different topics
 */

import { heroDatabase, Hero } from "./heroDatabase";

export interface ThemeOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  categories?: string[];
  heroIds?: number[];
}

export const themes: ThemeOption[] = [
  {
    id: "all",
    name: "All Heroes",
    description: "Random selection from all 75 Black historical figures",
    icon: "🌟",
  },
  {
    id: "civil-rights",
    name: "Civil Rights Icons",
    description: "Leaders who fought for equality and justice",
    icon: "✊",
    categories: ["Civil Rights"],
  },
  {
    id: "stem",
    name: "STEM Trailblazers",
    description: "Scientists, doctors, and innovators in technology",
    icon: "🔬",
    categories: ["Science & Medicine"],
  },
  {
    id: "arts",
    name: "Arts & Culture Legends",
    description: "Musicians, writers, artists, and cultural icons",
    icon: "🎨",
    categories: ["Arts & Culture"],
  },
  {
    id: "sports",
    name: "Sports Champions",
    description: "Athletes who broke barriers and inspired millions",
    icon: "🏆",
    categories: ["Sports"],
  },
  {
    id: "business",
    name: "Business Pioneers",
    description: "Entrepreneurs and business leaders who built empires",
    icon: "💼",
    categories: ["Business & Entrepreneurship"],
  },
  {
    id: "politics",
    name: "Political Leaders",
    description: "Politicians, diplomats, and policy makers",
    icon: "🏛️",
    categories: ["Politics & Law"],
  },
  {
    id: "women",
    name: "Trailblazing Women",
    description: "Remarkable Black women who changed history",
    icon: "👑",
    heroIds: [2, 5, 7, 11, 12, 13, 18, 23, 26, 28, 29, 31, 33, 35, 38, 54, 56, 57, 58, 60, 64, 69, 70, 73],
  },
  {
    id: "modern",
    name: "Modern Icons",
    description: "Contemporary figures still making an impact today",
    icon: "⚡",
    heroIds: [3, 4, 8, 10, 15, 16, 17, 19, 20, 21, 22, 50, 66, 69],
  },
];

export function getThemedHeroes(themeId: string, count: number): Hero[] {
  const theme = themes.find(t => t.id === themeId);
  
  if (!theme || themeId === "all") {
    // Random selection from all heroes
    const shuffled = [...heroDatabase].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  let filteredHeroes: Hero[] = [];

  // Filter by categories
  if (theme.categories && theme.categories.length > 0) {
    filteredHeroes = heroDatabase.filter(hero => 
      theme.categories!.includes(hero.category)
    );
  }

  // Filter by specific hero IDs
  if (theme.heroIds && theme.heroIds.length > 0) {
    filteredHeroes = heroDatabase.filter(hero => 
      theme.heroIds!.includes(hero.id)
    );
  }

  // If not enough heroes in the theme, add random ones
  if (filteredHeroes.length < count) {
    const remaining = heroDatabase.filter(h => !filteredHeroes.includes(h));
    const shuffledRemaining = remaining.sort(() => Math.random() - 0.5);
    filteredHeroes = [...filteredHeroes, ...shuffledRemaining].slice(0, count);
  }

  // Shuffle and return
  const shuffled = filteredHeroes.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
