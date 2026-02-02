/**
 * PDF Export Utility
 * Generates printable bingo boards for classroom use
 */

import { Hero } from "./heroDatabase";
import { getThemedHeroes } from "./themedBoards";

export interface BoardConfig {
  boardSize: number;
  theme: string;
  count: number;
}

export function generatePrintableBoards(config: BoardConfig): string {
  const { boardSize, theme, count } = config;
  const totalSquares = boardSize * boardSize;
  
  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Black History Bingo Boards</title>
      <style>
        @page {
          size: letter;
          margin: 0.5in;
        }
        
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        
        .board-page {
          page-break-after: always;
          padding: 20px;
        }
        
        .board-page:last-child {
          page-break-after: auto;
        }
        
        .board-header {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .board-title {
          font-size: 28px;
          font-weight: bold;
          color: #2d5016;
          margin-bottom: 5px;
        }
        
        .board-subtitle {
          font-size: 14px;
          color: #666;
        }
        
        .bingo-board {
          display: grid;
          grid-template-columns: repeat(${boardSize}, 1fr);
          gap: 2px;
          border: 3px solid #2d5016;
          background: #2d5016;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .bingo-cell {
          background: white;
          padding: 15px;
          min-height: ${boardSize === 3 ? '120px' : boardSize === 5 ? '80px' : '60px'};
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: ${boardSize === 3 ? '14px' : boardSize === 5 ? '11px' : '9px'};
          font-weight: 600;
          color: #2d5016;
        }
        
        .free-space {
          background: linear-gradient(135deg, #d4a574 0%, #c49564 100%);
          color: white;
          font-weight: bold;
          font-size: ${boardSize === 3 ? '16px' : boardSize === 5 ? '13px' : '11px'};
        }
        
        .board-footer {
          margin-top: 20px;
          text-align: center;
          font-size: 12px;
          color: #666;
        }
        
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      </style>
    </head>
    <body>
  `;
  
  // Generate multiple unique boards
  for (let i = 0; i < count; i++) {
    const heroes = getThemedHeroes(theme, totalSquares);
    const freeSpaceIndex = Math.floor(totalSquares / 2);
    
    html += `
      <div class="board-page">
        <div class="board-header">
          <div class="board-title">Black History Bingo</div>
          <div class="board-subtitle">Board #${i + 1} | ${boardSize}x${boardSize}</div>
        </div>
        
        <div class="bingo-board">
    `;
    
    heroes.forEach((hero, index) => {
      const isFreeSpace = index === freeSpaceIndex;
      html += `
        <div class="bingo-cell ${isFreeSpace ? 'free-space' : ''}">
          ${isFreeSpace ? 'FREE<br>SPACE' : hero.name}
        </div>
      `;
    });
    
    html += `
        </div>
        
        <div class="board-footer">
          Learn more at your school's Black History Month celebration
        </div>
      </div>
    `;
  }
  
  html += `
    </body>
    </html>
  `;
  
  return html;
}

export function downloadPrintableBoards(config: BoardConfig) {
  const html = generatePrintableBoards(config);
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `bhm-bingo-boards-${config.boardSize}x${config.boardSize}-${config.count}boards.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
