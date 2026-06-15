import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tic-Tac-Toe Kata', () => {
  test('Rule 1: X always goes first', () => {
    render(<App />);
    expect(screen.getByRole('status')).toHaveTextContent('Next player: X');

    const square0 = screen.getByTestId('square-0');
    fireEvent.click(square0);

    expect(square0).toHaveTextContent('X');
  });

  test('Rule 2: Players alternate placing Xs and Os', () => {
    render(<App />);
    const square0 = screen.getByTestId('square-0');
    const square1 = screen.getByTestId('square-1');

    fireEvent.click(square0);
    fireEvent.click(square1);

    expect(square0).toHaveTextContent('X');
    expect(square1).toHaveTextContent('O');
  });

  test('Rule 3: Players cannot play on a played position', () => {
    render(<App />);
    const square0 = screen.getByTestId('square-0');

    fireEvent.click(square0);
    fireEvent.click(square0);

    expect(square0).toHaveTextContent('X');
    expect(screen.getByRole('status')).toHaveTextContent('Next player: O'); 
  });

  test('Rule 4: Declares a winner when a player has three in a row', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('square-0'));
    fireEvent.click(screen.getByTestId('square-3'));
    fireEvent.click(screen.getByTestId('square-1'));
    fireEvent.click(screen.getByTestId('square-4'));
    fireEvent.click(screen.getByTestId('square-2'));

    expect(screen.getByRole('status')).toHaveTextContent('Winner: X');
  });

  test('Rule 5: Declares a draw when all squares are filled without a winner', () => {
    render(<App />);
    const drawMoves = [0, 1, 2, 4, 3, 5, 7, 6, 8];
    
    drawMoves.forEach(move => {
      fireEvent.click(screen.getByTestId(`square-${move}`));
    });

    expect(screen.getByRole('status')).toHaveTextContent('Draw');
  });

  test('Addon: Reset button clears the board and resets the game state', () => {
    render(<App />);
    const square0 = screen.getByTestId('square-0');

    fireEvent.click(square0);
    expect(square0).toHaveTextContent('X');

    const resetButton = screen.getByText('Reset Game');
    fireEvent.click(resetButton);

    expect(square0).toBeEmptyDOMElement();
    expect(screen.getByRole('status')).toHaveTextContent('Next player: X');
  });

  test('Addon: Applies highlight class to winning squares after a game is won', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('square-0')); // X
    fireEvent.click(screen.getByTestId('square-1')); // O
    fireEvent.click(screen.getByTestId('square-3')); // X
    fireEvent.click(screen.getByTestId('square-2')); // O
    fireEvent.click(screen.getByTestId('square-6')); // X wins!

    expect(screen.getByRole('status')).toHaveTextContent('Winner: X');

    expect(screen.getByTestId('square-0')).toHaveClass('highlight');
    expect(screen.getByTestId('square-3')).toHaveClass('highlight');
    expect(screen.getByTestId('square-6')).toHaveClass('highlight');
    expect(screen.getByTestId('square-1')).not.toHaveClass('highlight');
  });
});