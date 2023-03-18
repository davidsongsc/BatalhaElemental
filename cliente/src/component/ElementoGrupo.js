import React, { useState } from 'react';
import Elemento from './Elemento';

const ElementosGrupo = ({ elementos, cartaSelecionada, corSelecionada, handleClick, ordernarPorNivel, totalCartas }) => {
  const [offsetX, setOffsetX] = useState(0);

  const handleOffset = (direction) => {
    const element = document.getElementById('elementos-grupos-cadeia');
    const distance = element.offsetWidth / 3;
    const offset = direction === 'left' ? offsetX + distance : offsetX - distance;
    setOffsetX(offset);
  };

  return (
    <div className="elementos-grupo-container">
      <div className="elementos-grupo">
        <button className="btn-navegacao btn-esquerda" onClick={() => handleOffset('left')}>
          <i className="fa fa-chevron-left" />
        </button>
        <div id="elementos-grupos-cadeia" className="elementos-grupos-cadeia">
          {elementos.map((item, index) => (
            <Elemento
              key={index}
              item={item}
              index={index}
              cartaSelecionada={cartaSelecionada}
              corSelecionada={corSelecionada}
              handleClick={handleClick}
              ordernarPorNivel={ordernarPorNivel}
              totalCartas={totalCartas}
              offsetX={offsetX}
            />
          ))}
        </div>
        <button className="btn-navegacao btn-direita" onClick={() => handleOffset('right')}>
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default ElementosGrupo;
