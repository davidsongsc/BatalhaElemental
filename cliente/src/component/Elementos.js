import React, { useState } from 'react';
import ElementosGrupoCadeia from './ElementosGrupoCadeia';
import ElementosGrupoLantus from './ElementosGrupoLantus';
import ElementosGrupoPesquisa from './ElementosGrupoPesquisa';

function Elemento() {
  const [cartaSelecionada, setCartaSelecionada] = useState(null);
  const [ordernarPorNivel, setOrdenarPorNivel] = useState(false);

  const handleClick = (nome, index) => {
    if (cartaSelecionada === nome) {
      setCartaSelecionada(null);
    } else {
      setCartaSelecionada(nome);
    }
  };

  const handleOrdenarPorNivel = () => {
    setOrdenarPorNivel(!ordernarPorNivel);
  };

  return (
    <div className="container">
      <h1>Minha coleção de cartas</h1>
      <button onClick={handleOrdenarPorNivel}>
        {ordernarPorNivel ? 'Desordenar' : 'Ordenar'} por Nível
      </button>
      <ElementosGrupoCadeia
        cartaSelecionada={cartaSelecionada}
        handleClick={handleClick}
        ordernarPorNivel={ordernarPorNivel}
      />
      <ElementosGrupoLantus
        cartaSelecionada={cartaSelecionada}
        handleClick={handleClick}
        ordernarPorNivel={ordernarPorNivel}
      />
      <ElementosGrupoPesquisa
        cartaSelecionada={cartaSelecionada}
        handleClick={handleClick}
        ordernarPorNivel={ordernarPorNivel}
      />
    </div>
  );
}

export default Elemento;
