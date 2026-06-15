import React from 'react';

export default function Square({ value, onClick, ...props }) {
  return (
    <button className="square" onClick={onClick} {...props}>
      {value}
    </button>
  );
}