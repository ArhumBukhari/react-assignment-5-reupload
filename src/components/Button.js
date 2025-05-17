import React from 'react';

function Button({ label, onClick, variant = "primary", disabled = false}) {
  const className = `btn ${variant}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
