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
});