import React from 'react';
import './Tabuleiro.css';

const Tabuleiro = () => {
  const renderizarCelula = (linha, coluna) => {
    const isCelulaPreta = (linha + coluna) % 2 === 1;
    const corCelula = isCelulaPreta ? 'preta' : 'branca';

    return <div key={`${linha}-${coluna}`} className={`celula ${corCelula}`}></div>;
  };

  const renderizarTabuleiro = () => {
    const tamanhoTabuleiro = 8;
    const tabuleiro = [];

    for (let linha = 0; linha < tamanhoTabuleiro; linha++) {
      for (let coluna = 0; coluna < tamanhoTabuleiro; coluna++) {
        tabuleiro.push(renderizarCelula(linha, coluna));
      }
    }

    return tabuleiro;
  };

  return <div className="tabuleiro">{renderizarTabuleiro()}</div>;
};

export default Tabuleiro;
