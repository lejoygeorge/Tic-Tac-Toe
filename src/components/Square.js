import React from 'react';

export default function Square({ value, onClick, isWinningSquare, ...props }) {
  const className = `square ${isWinningSquare ? 'highlight' : ''}`;
  return (
    <button className={className} onClick={onClick} {...props}>
      {value}
    </button>
  );
}