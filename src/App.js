import { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="App">
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