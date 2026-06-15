import React from 'react';
import Square from './Square';

export default function Board({ board, onSquareClick, winningLine}) {
  return (
    <div className="board">
      {board.map((cell, index) => (
        <Square 
          key={index} 
          value={cell} 
          onClick={() => onSquareClick(index)} 
          isWinningSquare={winningLine.includes(index)} 
          data-testid={`square-${index}`}
        />
      ))}
    </div>
  );
}