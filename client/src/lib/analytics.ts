/**
 * Privacy-Focused Analytics
 * Simple event tracking without personal data collection
 */

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp: number;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private readonly MAX_EVENTS = 100;
  private readonly STORAGE_KEY = 'bhm_bingo_analytics';

  constructor() {
    this.loadEvents();
  }

  private loadEvents() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.events = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to load analytics:', error);
    }
  }

  private saveEvents() {
    try {
      // Keep only the most recent events
      const recentEvents = this.events.slice(-this.MAX_EVENTS);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(recentEvents));
      this.events = recentEvents;
    } catch (error) {
      console.error('Failed to save analytics:', error);
    }
  }

  track(event: string, properties?: Record<string, any>) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties,
      timestamp: Date.now(),
    };

    this.events.push(analyticsEvent);
    this.saveEvents();

    // Log to console in development
    if (import.meta.env.DEV) {
      console.log('[Analytics]', event, properties);
    }
  }

  getStats() {
    const stats = {
      totalGames: 0,
      totalWins: 0,
      totalHeroesViewed: 0,
      themesUsed: {} as Record<string, number>,
      boardSizes: {} as Record<number, number>,
    };

    this.events.forEach((event) => {
      switch (event.event) {
        case 'game_started':
          stats.totalGames++;
          if (event.properties?.theme) {
            stats.themesUsed[event.properties.theme] = 
              (stats.themesUsed[event.properties.theme] || 0) + 1;
          }
          if (event.properties?.boardSize) {
            stats.boardSizes[event.properties.boardSize] = 
              (stats.boardSizes[event.properties.boardSize] || 0) + 1;
          }
          break;
        case 'game_won':
          stats.totalWins++;
          break;
        case 'hero_viewed':
          stats.totalHeroesViewed++;
          break;
      }
    });

    return stats;
  }

  clearData() {
    this.events = [];
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

export const analytics = new Analytics();

// Helper functions for common events
export function trackGameStarted(boardSize: number, theme: string, quizMode: boolean) {
  analytics.track('game_started', { boardSize, theme, quizMode });
}

export function trackGameWon(boardSize: number, heroCount: number) {
  analytics.track('game_won', { boardSize, heroCount });
}

export function trackHeroViewed(heroName: string, category: string) {
  analytics.track('hero_viewed', { heroName, category });
}

export function trackPDFDownload(boardSize: number, count: number, theme: string) {
  analytics.track('pdf_downloaded', { boardSize, count, theme });
}

export function trackSocialShare(platform: string) {
  analytics.track('social_share', { platform });
}
