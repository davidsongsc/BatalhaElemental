import React from 'react';
import Card from './Card';

function Deck({ cards }) {
  return (
    <div className="deck">
      {cards.map((card) => (
        <Card key={card.id} cardData={card} />
      ))}
    </div>
  );
}

export default Deck;
