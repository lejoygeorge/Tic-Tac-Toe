import { calculateWinner } from './gameLogic';

describe('calculateWinner', () => {
  test('Returns null when the board is empty', () => {
    const emptyBoard = Array(9).fill(null);
    expect(calculateWinner(emptyBoard)).toBeNull();
  });

  test('Returns X when X has a horizontal winning line', () => {
    const board = [
      'X', 'X', 'X',
      'O', 'O', null,
      null, null, null
    ];
    expect(calculateWinner(board)).toBe('X');
  });

  test('Returns O when O has a diagonal winning line', () => {
    const board = [
      'O', 'X', 'X',
      null, 'O', null,
      'X', null, 'O'
    ];
    expect(calculateWinner(board)).toBe('O');
  });
});