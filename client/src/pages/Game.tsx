/**
 * Black History Bingo Game Page
 * Design: Responsive game board with hero images, quiz mode, beautiful interface
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeroBioPanel from "@/components/HeroBioPanel";
import { heroDatabase, Hero } from "@/lib/heroDatabase";
import { ArrowLeft, Sparkles, Trophy } from "lucide-react";

interface GameState {
  boardSize: number;
  boardHeroes: Hero[];
  markedSquares: number[];
  calledHeroes: Hero[];
  currentHero: Hero | null;
  currentQuestion: string | null;
  hasWon: boolean;
  gameRecap: Hero[];
}

export default function Game() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState(5);
  const [quizMode, setQuizMode] = useState(false);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [showBioPanel, setShowBioPanel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);

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
    const shuffledHeroes = [...heroDatabase].sort(() => Math.random() - 0.5);
    const boardHeroes = shuffledHeroes.slice(0, totalSquares);

    const newGameState: GameState = {
      boardSize,
      boardHeroes,
      markedSquares: [],
      calledHeroes: [],
      currentHero: null,
      currentQuestion: null,
      hasWon: false,
      gameRecap: [],
    };

    setGameState(newGameState);
    setIsGameStarted(true);
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

  const handleCallNextHero = () => {
    if (isLoading || !gameState) return;

    setIsLoading(true);

    const uncalledHeroes = heroDatabase.filter(
      (h) => !gameState.calledHeroes.some((ch) => ch.id === h.id)
    );

    if (uncalledHeroes.length === 0) {
      setIsLoading(false);
      return;
    }

    const randomHero = uncalledHeroes[Math.floor(Math.random() * uncalledHeroes.length)];
    const question = quizMode ? generateQuestion(randomHero) : null;

    const heroIndex = gameState.boardHeroes.findIndex((h) => h && h.id === randomHero.id);
    const isFreeSpace = heroIndex === Math.floor(gameState.boardSize * gameState.boardSize / 2);

    let newMarkedSquares = gameState.markedSquares;
    if (heroIndex !== -1 && !gameState.markedSquares.includes(heroIndex) && !isFreeSpace) {
      newMarkedSquares = [...gameState.markedSquares, heroIndex];
    }

    const hasWon = checkWin(newMarkedSquares, gameState.boardSize);

    setGameState({
      ...gameState,
      currentHero: randomHero,
      currentQuestion: question,
      calledHeroes: [...gameState.calledHeroes, randomHero],
      markedSquares: newMarkedSquares,
      hasWon,
    });

    if (hasWon) {
      setShowWinModal(true);
    }

    setTimeout(() => setIsLoading(false), 500);
  };

  const handleCardClick = (hero: Hero) => {
    setSelectedHero(hero);
    setShowBioPanel(true);
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
    const gridSize = boardSize === 3 ? "grid-cols-3" : boardSize === 5 ? "grid-cols-5" : "grid-cols-7";
    const cardSize = boardSize === 3 ? "h-32" : boardSize === 5 ? "h-24" : "h-20";

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] to-[#e8f5e8] py-6 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2d5016]">
              Black History Bingo
            </h1>
          </div>

          {/* Current Hero/Question Display */}
          {gameState.currentHero && (
            <div className="max-w-3xl mx-auto mb-6">
              <Card className="p-6 bg-gradient-to-r from-[#2d5016] to-[#3d6820] text-white shadow-lg">
                <div className="text-sm opacity-90 mb-2">
                  {quizMode ? "Current Question:" : "Current Hero:"}
                </div>
                <div className="text-xl md:text-2xl font-bold">
                  {quizMode && gameState.currentQuestion
                    ? gameState.currentQuestion
                    : gameState.currentHero.name}
                </div>
                {quizMode && (
                  <div className="text-sm mt-2 opacity-75">
                    Answer: {gameState.currentHero.name}
                  </div>
                )}
              </Card>
            </div>
          )}

          <div className="grid lg:grid-cols-[1fr_300px] gap-6">
            {/* Bingo Board */}
            <div>
              <div className={`grid ${gridSize} gap-2 md:gap-3 mb-6`}>
                {gameState.boardHeroes.map((hero, index) => {
                  const isMarked = gameState.markedSquares.includes(index);
                  const isFreeSpace = index === Math.floor(gameState.boardSize * gameState.boardSize / 2);

                  return (
                    <Card
                      key={index}
                      onClick={() => handleCardClick(hero)}
                      className={`${cardSize} relative overflow-hidden cursor-pointer transition-all hover:scale-105 ${
                        isMarked
                          ? "ring-4 ring-[#d4a574] shadow-xl"
                          : isFreeSpace
                          ? "bg-gradient-to-br from-[#d4a574] to-[#c49564]"
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

                      {/* Checkmark for marked squares */}
                      {isMarked && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#2d5016]/60">
                          <div className="text-6xl text-[#d4a574]">✓</div>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>

              {/* Controls */}
              <div className="flex gap-4">
                <Button
                  onClick={handleCallNextHero}
                  disabled={isLoading}
                  className="flex-1 py-6 text-lg font-semibold bg-[#2d5016] hover:bg-[#3d6820] text-white rounded-lg"
                >
                  {isLoading ? "Calling..." : "Call Next Hero"}
                </Button>
                <Button
                  onClick={() => {
                    setIsGameStarted(false);
                    setGameState(null);
                  }}
                  variant="outline"
                  className="px-6 py-6 border-2 border-gray-300 hover:bg-gray-100 rounded-lg"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Sidebar - Called Heroes */}
            <div>
              <Card className="p-4 bg-white shadow-lg sticky top-6">
                <h3 className="text-lg font-bold text-[#2d5016] mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Called Heroes ({gameState.calledHeroes.length})
                </h3>
                {gameState.calledHeroes.length === 0 ? (
                  <p className="text-gray-500 text-sm">No heroes called yet</p>
                ) : (
                  <div className="space-y-2 max-h-[600px] overflow-y-auto">
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

        {/* Win Modal */}
        {showWinModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-md w-full p-8 bg-white text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-[#2d5016] mb-4">
                BINGO!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Congratulations! You've completed a line and learned about {gameState.calledHeroes.length} remarkable Black historical figures!
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => {
                    setShowWinModal(false);
                    setIsGameStarted(false);
                    setGameState(null);
                  }}
                  className="flex-1 py-3 bg-[#2d5016] hover:bg-[#3d6820] text-white"
                >
                  New Game
                </Button>
                <Button
                  onClick={() => setShowWinModal(false)}
                  variant="outline"
                  className="flex-1 py-3 border-2 border-[#2d5016] text-[#2d5016]"
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
      </div>
    );
  }

  return null;
}
