import React, { useState } from 'react';
import Card from './Card';

function DeckEstilo({ cards }) {
  const [positions, setPositions] = useState(
    cards.map(() => ({
      x: Math.random() * 500,
      y: Math.random() * 500,
    }))
  );

  return (
    <div className="deck">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          cardData={card}
          position={positions[index]}
          onPositionChange={(newPosition) => {
            setPositions([
              ...positions.slice(0, index),
              newPosition,
              ...positions.slice(index + 1),
            ]);
          }}
        />
      ))}
    </div>
  );
}

export default DeckEstilo;

