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
});