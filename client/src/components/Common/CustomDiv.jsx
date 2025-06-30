import React from 'react';

function CustomDiv({ children, id, className = '' }) {
  return (
    <div
      id={id}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
}

export default CustomDiv;
