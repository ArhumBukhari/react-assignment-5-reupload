import React from 'react';

function Card({ title, children }) {
  return (
    <div className="card">
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}


export default Card;
