/**
 * Confetti Animation Component
 * Creates a celebratory confetti effect for BINGO wins
 */

import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  color: string;
}

export default function Confetti() {
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    // Pan-African colors + gold
    const colors = ["#2d5016", "#d4a574", "#8b1a1a", "#f0f4ed", "#3d6820"];
    
    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 2 + Math.random() * 3,
        animationDelay: Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 opacity-80"
          style={{
            left: `${piece.left}%`,
            top: "-10px",
            backgroundColor: piece.color,
            animation: `confetti-fall ${piece.animationDuration}s linear ${piece.animationDelay}s forwards`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
