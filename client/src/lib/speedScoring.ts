/**
 * Speed-Based Scoring System
 * Awards points based on how quickly players identify heroes
 */

export interface SpeedScore {
  points: number;
  bonus: string;
  responseTime: number;
}

/**
 * Calculate points based on response time
 * @param responseTimeMs - Time in milliseconds from clue appearing to correct answer
 * @returns Score object with points and bonus description
 */
export const calculateSpeedScore = (responseTimeMs: number): SpeedScore => {
  const responseTimeSec = responseTimeMs / 1000;
  
  // Speed bonus tiers
  if (responseTimeSec <= 3) {
    return {
      points: 150,
      bonus: "⚡ Lightning Fast!",
      responseTime: responseTimeSec
    };
  } else if (responseTimeSec <= 5) {
    return {
      points: 100,
      bonus: "🔥 Blazing Speed!",
      responseTime: responseTimeSec
    };
  } else if (responseTimeSec <= 10) {
    return {
      points: 50,
      bonus: "✨ Quick Thinking!",
      responseTime: responseTimeSec
    };
  } else if (responseTimeSec <= 20) {
    return {
      points: 25,
      bonus: "👍 Good Job!",
      responseTime: responseTimeSec
    };
  } else if (responseTimeSec <= 30) {
    return {
      points: 10,
      bonus: "🎯 Got It!",
      responseTime: responseTimeSec
    };
  } else {
    return {
      points: 5,
      bonus: "✓ Correct",
      responseTime: responseTimeSec
    };
  }
};

/**
 * Calculate total game score
 * @param correctAnswers - Number of correct answers
 * @param speedScores - Array of speed scores from each correct answer
 * @param streak - Maximum streak achieved
 * @param accuracy - Accuracy percentage (0-100)
 * @param boardSize - Size of the board (3, 5, or 7)
 * @returns Total score
 */
export const calculateTotalScore = (
  correctAnswers: number,
  speedScores: SpeedScore[],
  streak: number,
  accuracy: number,
  boardSize: number
): number => {
  // Base points from speed scores
  const basePoints = speedScores.reduce((sum, score) => sum + score.points, 0);
  
  // Streak multiplier (max 2x at streak 10+)
  const streakMultiplier = 1 + Math.min(streak * 0.1, 1.0);
  
  // Accuracy bonus (perfect accuracy = 50% bonus)
  const accuracyBonus = accuracy === 100 ? 1.5 : 1 + (accuracy / 200);
  
  // Board size multiplier (harder boards worth more)
  const boardMultiplier = boardSize === 3 ? 1.0 : boardSize === 5 ? 1.5 : 2.0;
  
  // Calculate final score
  const totalScore = Math.round(
    basePoints * streakMultiplier * accuracyBonus * boardMultiplier
  );
  
  return totalScore;
};

/**
 * Format response time for display
 * @param seconds - Time in seconds
 * @returns Formatted string (e.g., "3.2s")
 */
export const formatResponseTime = (seconds: number): string => {
  return `${seconds.toFixed(1)}s`;
};

/**
 * Get score tier description
 * @param score - Total score
 * @returns Tier description
 */
export const getScoreTier = (score: number): string => {
  if (score >= 2000) return "🏆 LEGENDARY";
  if (score >= 1500) return "💎 MASTER";
  if (score >= 1000) return "⭐ EXPERT";
  if (score >= 500) return "🎯 SKILLED";
  if (score >= 250) return "📚 LEARNER";
  return "🌱 BEGINNER";
};
