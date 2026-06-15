import { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  let status = `Next player: ${xIsNext ? 'X' : 'O'}`;

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
export default App;