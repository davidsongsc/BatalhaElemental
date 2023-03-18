import React from 'react';
import Elemento from './Elemento';

const ElementosGrupoPesquisa = ({ elementos, handleClick, cartaSelecionada, corSelecionada, ordernarPorNivel, totalCartas, offsetX }) => {
  return (
    <div id="elementos-grupos-pesquisa">
      {elementos.map((item, index) => (
        <Elemento 
          key={index}
          item={item}
          index={index}
          handleClick={handleClick}
          cartaSelecionada={cartaSelecionada}
          corSelecionada={corSelecionada}
          ordernarPorNivel={ordernarPorNivel}
          totalCartas={totalCartas}
          offsetX={offsetX}
        />
      ))}
    </div>
  );
}

export default ElementosGrupoPesquisa;
