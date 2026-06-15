import { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const isDraw = board.every(square => square !== null);
  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  let status
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = 'Draw';
  } else {
   status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="App">
      <div role="status" className="status">{status}</div>
      <div className="board">
        {board.map((cell, index) => (
          <button 
            key={index} 
            onClick={() => handleClick(index)}
            data-testid={`square-${index}`}
            className="square">
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;