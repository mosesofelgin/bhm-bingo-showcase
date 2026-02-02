/**
 * Black History Bingo Game Page
 * Design: Responsive game board with hero images, quiz mode, beautiful interface
 */

import { useState, useEffect } from "react";
import "../components/ShakeAnimation.css";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeroBioPanel from "@/components/HeroBioPanel";
import { heroDatabase, Hero } from "@/lib/heroDatabase";
import { ArrowLeft, Sparkles, Trophy, Printer } from "lucide-react";
import Confetti from "@/components/Confetti";
import SocialShare from "@/components/SocialShare";
import QuickFactCard from "@/components/QuickFactCard";
import { themes, getThemedHeroes } from "@/lib/themedBoards";
import { downloadPrintableBoards } from "@/lib/pdfExport";
import { trackGameStarted, trackGameWon, trackHeroViewed, trackPDFDownload } from "@/lib/analytics";
import { 
  generateClue, 
  validateSelection, 
  calculateStreakBonus, 
  formatTime, 
  getPersonalBest, 
  savePersonalBest,
  calculateScore 
} from "@/lib/gameLogic";
import { generateAdvancedClue } from "@/lib/clueGenerator";
import { playSuccessSound, playFailureSound, playWinSound } from "@/lib/audioFeedback";
import { calculateSpeedScore, calculateTotalScore, formatResponseTime, getScoreTier, SpeedScore } from "@/lib/speedScoring";
import { generateHint, calculateHintPenalty, Hint } from "@/lib/hintSystem";
import { playHintSound } from "@/lib/audioFeedback";

interface GameState {
  boardSize: number;
  boardHeroes: Hero[];
  markedSquares: number[];
  calledHeroes: Hero[];
  currentHero: Hero | null;
  currentClue: string | null;
  hasWon: boolean;
  gameRecap: Hero[];
  // New manual selection mechanics
  awaitingPlayerSelection: boolean;
  streak: number;
  incorrectAttempts: number;
  totalAttempts: number;
  startTime: number | null;
  lastCorrectTime: number | null;
  // Speed scoring
  currentHeroCallTime: number | null;
  speedScores: SpeedScore[];
  totalScore: number;
  maxStreak: number;
}

export default function Game() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState(5);
  const [quizMode, setQuizMode] = useState(true); // Quiz mode is now default
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [showBioPanel, setShowBioPanel] = useState(false);
  const [showQuickFact, setShowQuickFact] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("all");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [gameTimer, setGameTimer] = useState<number>(0);
  const [personalBest, setPersonalBest] = useState<number | null>(null);
  const [wrongSquare, setWrongSquare] = useState<number | null>(null);
  const [currentHintLevel, setCurrentHintLevel] = useState<number>(0);
  const [hintsUsed, setHintsUsed] = useState<Hint[]>([]);
  const [currentHint, setCurrentHint] = useState<string | null>(null);

  // Timer effect - updates every second
  useEffect(() => {
    if (!isGameStarted || !gameState || gameState.hasWon) return;
    
    const interval = setInterval(() => {
      if (gameState.startTime) {
        setGameTimer(Date.now() - gameState.startTime);
      }
    }, 100); // Update every 100ms for smooth display
    
    return () => clearInterval(interval);
  }, [isGameStarted, gameState]);

  const generateQuestion = (hero: Hero): string => {
    const questions = [
      `Who was known for: ${hero.keyAccomplishment}?`,
      `Which ${hero.category} figure lived from ${hero.era}?`,
      `Who ${hero.bioSummary.toLowerCase()}?`,
      `Find the hero from ${hero.category} who ${hero.keyAccomplishment.toLowerCase()}`,
    ];
    return questions[Math.floor(Math.random() * questions.length)];
  };

  const initializeGame = () => {
    const totalSquares = boardSize * boardSize;
    // Use themed heroes based on selection
    const boardHeroes = getThemedHeroes(selectedTheme, totalSquares);
    const freeSpaceIndex = Math.floor(totalSquares / 2);

    const newGameState: GameState = {
      boardSize,
      boardHeroes: boardHeroes,
      markedSquares: [freeSpaceIndex],
      calledHeroes: [],
      currentHero: null,
      currentClue: null,
      hasWon: false,
      gameRecap: [],
      // New manual selection mechanics
      awaitingPlayerSelection: false,
      streak: 0,
      incorrectAttempts: 0,
      totalAttempts: 0,
      startTime: Date.now(),
      lastCorrectTime: null,
      // Speed scoring
      currentHeroCallTime: null,
      speedScores: [],
      totalScore: 0,
      maxStreak: 0,
    };

    setGameState(newGameState);
    setIsGameStarted(true);
    setGameTimer(0);
    setFeedback(null);
    setWrongSquare(null);
    
    // Load personal best
    const pb = getPersonalBest(boardSize, quizMode ? 'quiz' : 'classic');
    setPersonalBest(pb);
    
    // Track game start
    trackGameStarted(boardSize, selectedTheme, quizMode);
  };

  const checkWin = (markedSquares: number[], boardSize: number): boolean => {
    // Check rows
    for (let row = 0; row < boardSize; row++) {
      let rowWin = true;
      for (let col = 0; col < boardSize; col++) {
        const index = row * boardSize + col;
        const isFreeSpace = index === Math.floor(boardSize * boardSize / 2);
        if (!markedSquares.includes(index) && !isFreeSpace) {
          rowWin = false;
          break;
        }
      }
      if (rowWin) return true;
    }

    // Check columns
    for (let col = 0; col < boardSize; col++) {
      let colWin = true;
      for (let row = 0; row < boardSize; row++) {
        const index = row * boardSize + col;
        const isFreeSpace = index === Math.floor(boardSize * boardSize / 2);
        if (!markedSquares.includes(index) && !isFreeSpace) {
          colWin = false;
          break;
        }
      }
      if (colWin) return true;
    }

    // Check diagonals
    let diag1Win = true;
    for (let i = 0; i < boardSize; i++) {
      const index = i * boardSize + i;
      const isFreeSpace = index === Math.floor(boardSize * boardSize / 2);
      if (!markedSquares.includes(index) && !isFreeSpace) {
        diag1Win = false;
        break;
      }
    }
    if (diag1Win) return true;

    let diag2Win = true;
    for (let i = 0; i < boardSize; i++) {
      const index = i * boardSize + (boardSize - 1 - i);
      const isFreeSpace = index === Math.floor(boardSize * boardSize / 2);
      if (!markedSquares.includes(index) && !isFreeSpace) {
        diag2Win = false;
        break;
      }
    }
    return diag2Win;
  };

  const callNextHero = () => {
    if (!gameState) return;

    setIsLoading(true);
    setFeedback(null);
    setWrongSquare(null);

    const uncalledHeroes = heroDatabase.filter(
      (h) => !gameState.calledHeroes.some((ch) => ch.id === h.id)
    );

    if (uncalledHeroes.length === 0) {
      setIsLoading(false);
      return;
    }

    const randomHero = uncalledHeroes[Math.floor(Math.random() * uncalledHeroes.length)];
    // Use advanced clue generator for quiz mode
    const clueData = quizMode ? generateAdvancedClue(randomHero, "medium") : null;
    const clue = clueData ? clueData.text : null;

    // NO AUTO-SELECT! Player must find and click the square
    setGameState({
      ...gameState,
      currentHero: randomHero,
      currentClue: clue,
      calledHeroes: [...gameState.calledHeroes, randomHero],
      awaitingPlayerSelection: true, // Wait for player to click
      currentHeroCallTime: Date.now(), // Track when clue was shown
    });

    setCurrentHintLevel(0); // Reset hint level for new hero
    setCurrentHint(null); // Clear any previous hints
    
    setTimeout(() => setIsLoading(false), 500);
  };

  // Handle hint button click
  const handleHintClick = () => {
    if (!gameState || !gameState.currentHero || !gameState.awaitingPlayerSelection) return;
    
    playHintSound();
    const hint = generateHint(gameState.currentHero, currentHintLevel);
    setCurrentHint(hint.text);
    setHintsUsed([...hintsUsed, hint]);
    setCurrentHintLevel(currentHintLevel + 1);
    
    // Deduct points from total score
    const hintPenalty = calculateHintPenalty([...hintsUsed, hint]);
    const newTotalScore = Math.max(0, gameState.totalScore - hint.pointPenalty);
    
    setGameState({
      ...gameState,
      totalScore: newTotalScore,
    });
    
    // Clear hint after 5 seconds
    setTimeout(() => setCurrentHint(null), 5000);
  };

  // NEW: Handle player clicking a square
  const handleSquareClick = (index: number, hero: Hero | null) => {
    if (!gameState || !gameState.awaitingPlayerSelection || !gameState.currentHero || !hero) return;
    
    const isFreeSpace = index === Math.floor(gameState.boardSize * gameState.boardSize / 2);
    if (isFreeSpace || gameState.markedSquares.includes(index)) return;

    // Validate selection
    const validation = validateSelection(hero, gameState.currentHero);
    
    if (validation.correct) {
      // CORRECT! Mark the square
      playSuccessSound(); // Audio feedback
      
      // Calculate speed score
      const responseTime = gameState.currentHeroCallTime ? Date.now() - gameState.currentHeroCallTime : 0;
      const speedScore = calculateSpeedScore(responseTime);
      const newSpeedScores = [...gameState.speedScores, speedScore];
      
      const newMarkedSquares = [...gameState.markedSquares, index];
      const hasWon = checkWin(newMarkedSquares, gameState.boardSize);
      const newStreak = gameState.streak + 1;
      const newMaxStreak = Math.max(gameState.maxStreak, newStreak);
      
      // Calculate accuracy
      const accuracy = ((gameState.totalAttempts + 1 - gameState.incorrectAttempts) / (gameState.totalAttempts + 1)) * 100;
      
      // Calculate total score
      const newTotalScore = calculateTotalScore(
        newMarkedSquares.length - 1, // Subtract free space
        newSpeedScores,
        newMaxStreak,
        accuracy,
        gameState.boardSize
      );
      
      setFeedback(`${speedScore.bonus} +${speedScore.points}pts | ${hero.name} - Streak: ${newStreak}`);
      
      setGameState({
        ...gameState,
        markedSquares: newMarkedSquares,
        hasWon,
        awaitingPlayerSelection: false,
        streak: newStreak,
        maxStreak: newMaxStreak,
        totalAttempts: gameState.totalAttempts + 1,
        lastCorrectTime: Date.now(),
        speedScores: newSpeedScores,
        totalScore: newTotalScore,
        currentHeroCallTime: null,
      });

      if (hasWon) {
        playWinSound(); // Victory fanfare
        const finalTime = Date.now() - (gameState.startTime || Date.now());
        const isNewRecord = savePersonalBest(gameState.boardSize, quizMode ? 'quiz' : 'classic', finalTime);
        
        setShowWinModal(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
        
        trackGameWon(gameState.boardSize, gameState.calledHeroes.length);
      }
      
      // Clear feedback after 2 seconds
      setTimeout(() => setFeedback(null), 2000);
    } else {
      // WRONG! Show error feedback
      playFailureSound(); // Audio feedback for wrong answer
      setFeedback(validation.feedback);
      setWrongSquare(index);
      
      setGameState({
        ...gameState,
        incorrectAttempts: gameState.incorrectAttempts + 1,
        totalAttempts: gameState.totalAttempts + 1,
        streak: 0, // Reset streak on wrong answer
      });
      
      // Shake animation and clear after 1 second
      setTimeout(() => {
        setWrongSquare(null);
        setFeedback(null);
      }, 1500);
    }
  };

  const handleCardClick = (hero: Hero) => {
    setSelectedHero(hero);
    setShowQuickFact(true);
    
    // Track hero view
    trackHeroViewed(hero.name, hero.category);
  };

  if (!isGameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] to-[#e8f5e8] py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">
              Black History Bingo
            </h1>
            <p className="text-lg text-gray-600">
              Celebrate and learn about remarkable Black historical figures
            </p>
          </div>

          <Card className="p-8 bg-white shadow-xl">
            <h2 className="text-2xl font-semibold text-[#2d5016] mb-6 text-center">
              Game Setup
            </h2>

            <div className="space-y-6">
              {/* Theme Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Choose Your Theme
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedTheme === theme.id
                          ? "border-[#2d5016] bg-[#f0f4ed] shadow-md"
                          : "border-gray-300 bg-white hover:border-[#d4a574]"
                      }`}
                    >
                      <div className="text-2xl mb-2">{theme.icon}</div>
                      <div className="font-semibold text-[#2d5016] text-sm mb-1">
                        {theme.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {theme.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Board Size
                </label>
                <select
                  value={boardSize}
                  onChange={(e) => setBoardSize(Number(e.target.value))}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#2d5016] focus:outline-none"
                >
                  <option value={3}>3x3 (Kids)</option>
                  <option value={5}>5x5 (Standard)</option>
                  <option value={7}>7x7 (Advanced)</option>
                </select>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#f0f4ed] rounded-lg">
                <input
                  type="checkbox"
                  id="quiz-mode"
                  checked={quizMode}
                  onChange={(e) => setQuizMode(e.target.checked)}
                  className="w-5 h-5 cursor-pointer"
                />
                <label htmlFor="quiz-mode" className="font-medium text-[#2d5016] cursor-pointer flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Quiz Mode (Answer questions to find heroes)
                </label>
              </div>

              <Button
                onClick={initializeGame}
                className="w-full py-6 text-lg font-semibold bg-[#2d5016] hover:bg-[#3d6820] text-white rounded-lg transition-all"
              >
                Start Game
              </Button>

              {/* PDF Export for Teachers */}
              <div className="border-t-2 border-gray-200 pt-4">
                <p className="text-sm text-gray-600 mb-3 text-center">
                  <strong>For Teachers:</strong> Print multiple unique boards for your classroom
                </p>
                <Button
                  onClick={() => {
                    const count = prompt("How many unique boards do you need? (1-30)", "10");
                    const boardCount = parseInt(count || "10");
                    if (boardCount > 0 && boardCount <= 30) {
                      downloadPrintableBoards({
                        boardSize,
                        theme: selectedTheme,
                        count: boardCount
                      });
                      trackPDFDownload(boardSize, boardCount, selectedTheme);
                    } else {
                      alert("Please enter a number between 1 and 30");
                    }
                  }}
                  variant="outline"
                  className="w-full py-4 text-base font-semibold border-2 border-[#2d5016] text-[#2d5016] hover:bg-[#f0f4ed] rounded-lg"
                >
                  <Printer className="w-5 h-5 mr-2" />
                  Download Printable Boards
                </Button>
              </div>

              <Button
                onClick={() => window.location.href = "/"}
                variant="outline"
                className="w-full py-6 text-lg font-semibold border-2 border-[#d4a574] text-[#2d5016] hover:bg-[#d4a574]/10 rounded-lg"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Game playing screen
  if (gameState) {
    // Responsive grid: optimized for laptop and phone - no scrolling
    const gridSize = boardSize === 3 ? "grid-cols-3" : boardSize === 5 ? "grid-cols-5" : "grid-cols-7";
    
    // Optimized card sizes for mobile tappability - larger touch targets
    const cardSize = boardSize === 3 
      ? "h-28 sm:h-32 lg:h-36 min-h-[7rem]" 
      : boardSize === 5 
      ? "h-24 sm:h-28 lg:h-32 min-h-[6rem]" 
      : "h-20 sm:h-24 lg:h-28 min-h-[5rem]";

    return (
      <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-br from-[#f5f5f5] to-[#e8f5e8]">
        <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-2 sm:px-4 py-2 sm:py-4 overflow-hidden">
          {/* Header */}
          <div className="text-center mb-2 flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-[#2d5016]">
              Black History Bingo
            </h1>
            
            {/* Game Stats */}
            <div className="flex justify-center gap-1 sm:gap-2 mt-1 text-xs flex-wrap">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-1 rounded shadow">
                <span className="text-white font-semibold">💰</span>
                <span className="ml-1 font-bold text-white">
                  {gameState.totalScore}
                </span>
              </div>
              <div className="bg-white px-2 py-1 rounded shadow">
                <span className="text-gray-600">⏱️</span>
                <span className="ml-1 font-bold text-indigo-600">
                  {formatTime(gameTimer)}
                </span>
              </div>
              <div className="bg-white px-2 py-1 rounded shadow">
                <span className="text-gray-600">🔥</span>
                <span className="ml-1 font-bold text-green-600">
                  {gameState.streak}
                </span>
              </div>
              <div className="bg-white px-2 py-1 rounded shadow">
                <span className="text-gray-600">✓</span>
                <span className="ml-1 font-bold text-blue-600">
                  {gameState.totalAttempts > 0 
                    ? Math.round(((gameState.totalAttempts - gameState.incorrectAttempts) / gameState.totalAttempts) * 100)
                    : 100}%
                </span>
              </div>
              {personalBest && (
                <div className="bg-white px-2 py-1 rounded shadow">
                  <span className="text-gray-600">🏆</span>
                  <span className="ml-1 font-bold text-purple-600">
                    {formatTime(personalBest)}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {/* Feedback Banner */}
          {feedback && (
            <div className={`max-w-3xl mx-auto mb-2 p-2 rounded-lg text-center font-bold text-sm ${
              feedback.startsWith('✓') 
                ? 'bg-green-100 text-green-800 border-2 border-green-500'
                : 'bg-red-100 text-red-800 border-2 border-red-500'
            }`}>
              {feedback}
            </div>
          )}

          {/* Current Hero/Question Display */}
          {gameState.currentHero && (
            <div className="max-w-3xl mx-auto mb-2 flex-shrink-0">
              <Card className="p-2 sm:p-3 bg-gradient-to-r from-[#2d5016] to-[#3d6820] text-white shadow-lg">
                <div className="text-xs sm:text-sm opacity-90 mb-1">
                  {quizMode ? "Current Question:" : "Current Hero:"}
                </div>
                <div className="text-sm sm:text-base font-bold">
                  {quizMode && gameState.currentClue
                    ? gameState.currentClue
                    : gameState.currentHero.name}
                </div>
                {!quizMode && (
                  <div className="text-sm mt-2 opacity-90">
                    Find this hero on your board!
                  </div>
                )}
                {quizMode && (
                  <div className="text-sm mt-2 opacity-90">
                    🔍 Find the hero who matches this clue!
                  </div>
                )}
                
                {/* Hint Display */}
                {currentHint && (
                  <div className="mt-2 p-2 bg-yellow-400 text-gray-900 rounded text-xs sm:text-sm font-semibold animate-pulse">
                    {currentHint}
                  </div>
                )}
              </Card>
            </div>
          )}

          {/* Main Content Area - Flex container */}
          <div className="flex-1 grid lg:grid-cols-[1fr_300px] gap-2 sm:gap-4 overflow-hidden">
            {/* Bingo Board Column */}
            <div className="flex flex-col overflow-hidden">
              {/* Grid Container - Takes available space */}
              <div className="flex-1 overflow-y-auto mb-4">
                <div className={`grid ${gridSize} gap-2 sm:gap-3`}>
                {gameState.boardHeroes.map((hero, index) => {
                  const isMarked = gameState.markedSquares.includes(index);
                  const isFreeSpace = index === Math.floor(gameState.boardSize * gameState.boardSize / 2);

                  return (
                    <Card
                      key={index}
                      onClick={() => {
                        // If awaiting selection, try to mark square
                        if (gameState.awaitingPlayerSelection) {
                          handleSquareClick(index, hero);
                        } else {
                          // Otherwise show bio panel
                          handleCardClick(hero);
                        }
                      }}
                      className={`${cardSize} relative overflow-hidden cursor-pointer transition-all hover:scale-105 ${
                        wrongSquare === index
                          ? "animate-shake ring-4 ring-red-500"
                          : isMarked
                          ? "ring-4 ring-[#d4a574] shadow-xl"
                          : isFreeSpace
                          ? "bg-gradient-to-br from-[#d4a574] to-[#c49564]"
                          : gameState.awaitingPlayerSelection
                          ? "bg-white hover:shadow-lg hover:ring-2 hover:ring-green-400"
                          : "bg-white hover:shadow-lg"
                      }`}
                    >
                      {/* Hero Image */}
                      {hero.imageUrl && !isFreeSpace && (
                        <img
                          src={hero.imageUrl}
                          alt={hero.name}
                          className={`w-full h-full object-cover ${isMarked ? "opacity-40" : ""}`}
                        />
                      )}

                      {/* Hero Name Overlay */}
                      <div className={`absolute inset-0 flex items-center justify-center p-2 ${
                        isFreeSpace ? "bg-transparent" : "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                      }`}>
                        <div className="text-center">
                          <div className={`text-xs md:text-sm font-bold ${
                            isFreeSpace ? "text-[#2d5016]" : "text-white drop-shadow-lg"
                          }`}>
                            {isFreeSpace ? "FREE SPACE" : hero.name}
                          </div>
                        </div>
                      </div>

                      {/* Enhanced marked state with animation */}
                      {isMarked && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2d5016]/75 backdrop-blur-sm animate-in fade-in duration-300">
                          <div className="text-5xl md:text-6xl text-[#d4a574] font-bold animate-in zoom-in duration-500">✓</div>
                          <div className="text-xs md:text-sm text-white font-semibold mt-2 bg-[#d4a574] px-3 py-1 rounded-full">MARKED</div>
                        </div>
                      )}
                    </Card>
                  );
                })}
                </div>
              </div>

              {/* Controls - Fixed at bottom */}
              <div className="flex gap-2 sm:gap-4 flex-shrink-0 flex-wrap">
                <Button
                  onClick={() => {
                    if (confirm("Start a new game? Your current progress will be lost.")) {
                      setIsGameStarted(false);
                      setGameState(null);
                      setShowConfetti(false);
                      setShowWinModal(false);
                    }
                  }}
                  className="py-3 px-4 text-base font-semibold bg-red-600 hover:bg-red-700 text-white rounded-lg"
                >
                  New Game
                </Button>
                <Button
                  onClick={callNextHero}
                  disabled={isLoading}
                  className="flex-1 py-3 text-base font-semibold bg-[#2d5016] hover:bg-[#3d6820] text-white rounded-lg disabled:opacity-50"
                >
                  {isLoading ? "Calling..." : "Call Next Hero"}
                </Button>
                
                {/* Skip button for when hero isn't on board */}
                {gameState.awaitingPlayerSelection && quizMode && (
                  <Button
                    onClick={() => {
                      setFeedback("Skipped - Hero not on your board");
                      setGameState({
                        ...gameState,
                        awaitingPlayerSelection: false,
                        currentHero: null,
                        currentClue: null,
                      });
                      setCurrentHintLevel(0);
                      setCurrentHint(null);
                      setTimeout(() => setFeedback(null), 2000);
                    }}
                    className="px-4 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold"
                  >
                    Not on My Board
                  </Button>
                )}
                
                {/* Hint Button - Only show when awaiting player selection */}
                {gameState.awaitingPlayerSelection && quizMode && (
                  <Button
                    onClick={handleHintClick}
                    disabled={currentHintLevel >= 5}
                    className="px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold disabled:opacity-50"
                    title="Get a hint (costs points)"
                  >
                    💡 Hint
                  </Button>
                )}
                
                <Button
                  onClick={() => {
                    setIsGameStarted(false);
                    setGameState(null);
                  }}
                  variant="outline"
                  className="px-4 py-3 border-2 border-gray-300 hover:bg-gray-100 rounded-lg"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Sidebar - Called Heroes */}
            <div className="flex flex-col overflow-hidden">
              <Card className="p-4 bg-white shadow-lg flex-1 flex flex-col overflow-hidden">
                <h3 className="text-lg font-bold text-[#2d5016] mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Called Heroes ({gameState.calledHeroes.length})
                </h3>
                {gameState.calledHeroes.length === 0 ? (
                  <p className="text-gray-500 text-sm">No heroes called yet</p>
                ) : (
                  <div className="space-y-2 flex-1 overflow-y-auto">
                    {gameState.calledHeroes.map((hero, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 bg-[#f0f4ed] rounded-lg hover:bg-[#e0e8dd] transition-colors cursor-pointer"
                        onClick={() => handleCardClick(hero)}
                      >
                        <img
                          src={hero.imageUrl}
                          alt={hero.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-[#2d5016] truncate">
                            {hero.name}
                          </div>
                          <div className="text-xs text-gray-600">{hero.era}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>

        {/* Confetti Animation */}
        {showConfetti && <Confetti />}

        {/* Enhanced Win Modal */}
        {showWinModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
            <Card className="max-w-md w-full p-8 bg-gradient-to-br from-[#2d5016] to-[#3d6820] text-center shadow-2xl animate-in zoom-in duration-500">
              <div className="text-7xl mb-4 animate-bounce">🎉</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#d4a574] mb-2">
                BINGO!
              </h2>
              <h3 className="text-xl text-white/90 mb-6 font-semibold">
                You Did It!
              </h3>
              <p className="text-base md:text-lg text-white/80 mb-4 leading-relaxed">
                Congratulations! You've completed a line and learned about <span className="font-bold text-[#d4a574]">{gameState.calledHeroes.length}</span> remarkable Black historical figures!
              </p>
              
              {/* Game Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-white">
                <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                  <div className="text-sm opacity-80">Time</div>
                  <div className="text-2xl font-bold text-[#d4a574]">
                    {formatTime(gameTimer)}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                  <div className="text-sm opacity-80">Accuracy</div>
                  <div className="text-2xl font-bold text-[#d4a574]">
                    {gameState.totalAttempts > 0 
                      ? Math.round(((gameState.totalAttempts - gameState.incorrectAttempts) / gameState.totalAttempts) * 100)
                      : 100}%
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                  <div className="text-sm opacity-80">Max Streak</div>
                  <div className="text-2xl font-bold text-[#d4a574]">
                    🔥 {gameState.streak}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                  <div className="text-sm opacity-80">Score</div>
                  <div className="text-2xl font-bold text-[#d4a574]">
                    {calculateScore(gameTimer, gameState.streak, gameState.incorrectAttempts, gameState.boardSize)}
                  </div>
                </div>
              </div>
              
              {personalBest && gameTimer < personalBest && (
                <div className="bg-yellow-400/20 border-2 border-yellow-400 rounded-lg p-3 mb-4">
                  <div className="text-yellow-300 font-bold text-lg">
                    🏆 NEW PERSONAL BEST! 🏆
                  </div>
                  <div className="text-white/80 text-sm">
                    Beat your previous record by {formatTime(personalBest - gameTimer)}!
                  </div>
                </div>
              )}
              
              {/* Social Sharing */}
              <SocialShare heroCount={gameState.calledHeroes.length} boardSize={gameState.boardSize} />
              
              <div className="flex gap-4 mt-6">
                <Button
                  onClick={() => {
                    setShowWinModal(false);
                    setShowConfetti(false);
                    setIsGameStarted(false);
                    setGameState(null);
                  }}
                  className="flex-1 py-3 bg-[#d4a574] hover:bg-[#c49564] text-[#2d5016] font-bold text-lg"
                >
                  New Game
                </Button>
                <Button
                  onClick={() => {
                    setShowWinModal(false);
                    setShowConfetti(false);
                  }}
                  variant="outline"
                  className="flex-1 py-3 border-2 border-white text-white hover:bg-white/10 font-bold text-lg"
                >
                  Continue
                </Button>
              </div>
            </Card>
          </div>
        )}

         {/* Bio Panel */}
        <HeroBioPanel
          hero={selectedHero}
          isOpen={showBioPanel}
          onClose={() => setShowBioPanel(false)}
        />
        
        {/* Quick Fact Card */}
        {showQuickFact && selectedHero && (
          <QuickFactCard
            hero={selectedHero}
            onClose={() => setShowQuickFact(false)}
          />
        )}
      </div>
    );
  }
  return null;
}
