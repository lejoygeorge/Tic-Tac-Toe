import { useState } from 'react';
import './App.css';

function App() {
  const [board] = useState(Array(9).fill(null));

  return (
    <div className="App">
      <div className="board">
        {board.map((cell, index) => (
          <button 
            key={index} 
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