import React from 'react';
import './BarraLateralEsquerda.css';

function BarraLateralEsquerda() {

    return (
        <div className="barra-lateral-esquerda">
                <div className="controle-batalha">
                    <button className='btn-buscar-partida'>Competitivo</button>
                    <button className='btn-aceita-desafio'>Arena</button>
                    <button className='btn-desistir'>Desafio</button>
                    <button className='btn-dados-perfil'>Perfil</button>
                    <button className='btn-deck-partida'>Deck</button>
                    <button className='btn-inventario-partida'>Inventario</button>
                </div>
            </div>
    );
}

export default BarraLateralEsquerda;
