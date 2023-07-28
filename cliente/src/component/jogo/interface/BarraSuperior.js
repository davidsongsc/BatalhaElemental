import React from "react";
import './BarraSuperior.css';

function PersonagemBarraStatus(props) {
    const { hp, mana, hpMax, manaMax } = props;

    const calcularPorcentagem = (valorAtual, valorMaximo) => {
        return (valorAtual / valorMaximo) * 100;
    };

    const calcularMarcadores = (valorAtual) => {
        const marcadores = Math.floor(valorAtual / 500);
        return marcadores > 0 ? marcadores : 1;
    };

    return (
        <div className="personagem-barra-status">
            <div className="hp-barra">
            <div className="valores-marcador">{hp} </div>
                <div
                    className="hp-progresso"
                    style={{ width: `${calcularPorcentagem(hp, hpMax)}%` }}
                ></div>
                {Array.from({ length: calcularMarcadores(hp) }).map((_, index) => (
                    <div
                        key={`hp-marker-${index}`}
                        className="hp-marker"
                        style={{ left: `${((index + 1) / calcularMarcadores(hp)) * 100}%` }}
                    ></div>
                ))}
            </div>
            <div className="mana-barra">
                <div className="valores-marcador">{mana} </div>
                <div
                    className="mana-progresso"
                    style={{ width: `${calcularPorcentagem(mana, manaMax)}%` }}
                ></div>
                {Array.from({ length: calcularMarcadores(mana) }).map((_, index) => (
                    <div
                        key={`mana-marker-${index}`}
                        className="mana-marker"
                        style={{ left: `${((index + 1) / calcularMarcadores(mana)) * 100}%` }}
                    ></div>
                    
                ))}
        
            </div>
        </div>
    );
}


function BarraSuperior() {
    const jogadoresTimeA = [
        { nome: "Jogador 1", hp: 2300, hpMax: 2300, mana: 1500, manaMax: 1500 },
        { nome: "Jogador 2", hp: 1300, hpMax: 2300, mana: 1500, manaMax: 1500 },
        { nome: "Jogador 3", hp: 1300, hpMax: 2300, mana: 1500, manaMax: 1500 },
        { nome: "Jogador 4", hp: 1300, hpMax: 2300, mana: 1500, manaMax: 1500 },
        { nome: "Jogador 5", hp: 1300, hpMax: 2300, mana: 1500, manaMax: 1500 },

        
        // Adicione os demais jogadores do Time A aqui...
    ];

    const jogadoresTimeB = [
        { nome: "Player 6", hp: 1100, hpMax: 1100, mana: 1000, manaMax: 1000 },
        { nome: "Player 7", hp: 1100, hpMax: 1100, mana: 1000, manaMax: 1000 },
        { nome: "Player 8", hp: 1100, hpMax: 1100, mana: 1000, manaMax: 1000 },
        { nome: "Player 9", hp: 1100, hpMax: 1100, mana: 1000, manaMax: 1000 },
        { nome: "Player 10", hp: 1100, hpMax: 1100, mana: 1000, manaMax: 1000 },
       // Adicione os demais jogadores do Time B aqui...
    ];

    const renderizarJogadores = (jogadores) => {
        return (
            <ul>
                {jogadores.map((jogador, index) => (
                    <li key={index}>
                        {jogador.nome}
                        <PersonagemBarraStatus
                            hp={jogador.hp}
                            hpMax={jogador.hpMax}
                            mana={jogador.mana}
                            manaMax={jogador.manaMax}
                        />
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <div className="barraIndicadora-tempo">
            <div className="b-time-a-5">
            {renderizarJogadores(jogadoresTimeA)}

            </div>
            <div className="b-time">
                <div className="placar-time">0</div>
                <div className="relogio-partida">
                    <div className="relogio-time">
                        0:00
                    </div>
                    <div className="periodo">Noite</div></div>
                <div className="placar-time">0</div>
            </div>
            <div className="b-time-b-5">

            {renderizarJogadores(jogadoresTimeB)}
            </div>
        </div>
    )
}

export default BarraSuperior;