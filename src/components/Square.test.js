import { render, screen, fireEvent } from '@testing-library/react';
import Square from './Square';

describe('Square Component', () => {
  test('Renders the correct value', () => {
    render(<Square value="X" onClick={() => {}} />);
    const button = screen.getByRole('button');  
    expect(button).toHaveTextContent('X');
  });

  test('Calls the onClick function when clicked', () => {
    const mockOnClick = jest.fn();
    render(<Square value="O" onClick={mockOnClick} />);   
    const button = screen.getByRole('button');
    fireEvent.click(button);   
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('Applies the highlight class when isWinningSquare is true', () => {
    render(<Square value="X" onClick={() => {}} isWinningSquare={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('highlight');
  });
});