import { render, screen, fireEvent } from '@testing-library/react';
import Board from './Board';

describe('Board Component', () => {
  test('Renders exactly 9 squares', () => {
    const emptyBoard = Array(9).fill(null);
    render(<Board board={emptyBoard} onSquareClick={() => {}} winningLine={[]} />);
    const squares = screen.getAllByRole('button');
    expect(squares).toHaveLength(9);
  });

  test('Passes the correct index to onSquareClick', () => {
    const emptyBoard = Array(9).fill(null);
    const mockOnSquareClick = jest.fn();
    render(<Board board={emptyBoard} onSquareClick={mockOnSquareClick} winningLine={[]} />);
    const middleSquare = screen.getByTestId('square-4');
    fireEvent.click(middleSquare);
    expect(mockOnSquareClick).toHaveBeenCalledWith(4);
  });

  test('Highlights the correct squares when a winningLine is provided', () => {
    const board = ['X', 'X', 'X', 'O', 'O', null, null, null, null];
    const winningLine = [0, 1, 2];
    render(<Board board={board} onSquareClick={() => {}} winningLine={winningLine} />);
    expect(screen.getByTestId('square-0')).toHaveClass('highlight');
    expect(screen.getByTestId('square-1')).toHaveClass('highlight');
    expect(screen.getByTestId('square-2')).toHaveClass('highlight');
    expect(screen.getByTestId('square-3')).not.toHaveClass('highlight');
  });
});