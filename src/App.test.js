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
});