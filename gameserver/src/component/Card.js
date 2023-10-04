import React, { useState } from 'react';

function Card({ cardData, position, onPositionChange }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const handleDrag = (event) => {
    event.preventDefault();
    const newPosition = { x: event.clientX, y: event.clientY };
    onPositionChange(newPosition);
  };

  return (
    <div
      className={`card ${isSelected ? 'selected' : ''}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s ease',
      }}
      onMouseDown={handleClick}
      onMouseMove={isSelected ? handleDrag : null}
      onMouseUp={isSelected ? handleClick : null}
    >
      {cardData.face}
    </div>
  );
}

export default Card;
