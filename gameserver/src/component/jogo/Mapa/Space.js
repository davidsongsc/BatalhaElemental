import React from 'react';
import './Space.css';

const SimulacaoEspaco = () => {
  return (
    <div className="star-field">
      {[...Array(1000)].map((_, index) => (
        <div key={index} className="star" />
      ))}
    </div>
  );
};

export default SimulacaoEspaco;
