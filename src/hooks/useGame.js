import { useState } from 'react';
import { calculateWinner } from '../utils/gameLogic';

export function useGame() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winInfo = calculateWinner(board);
  const winner = winInfo ? winInfo.winner : null;
  const winningLine = winInfo ? winInfo.line : [];
  
  const isDraw = !winner && board.every(square => square !== null);

  const playMove = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return { board, xIsNext, winner, winningLine, isDraw, playMove, resetGame };
}