import { useGame } from './hooks/useGame';
import Board from './components/Board';
import './App.css';

export default function App() {
  const { board, xIsNext, winner, winningLine, isDraw, playMove, resetGame } = useGame();

  let status;
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
      <Board board={board} onSquareClick={playMove} winningLine={winningLine} />
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}