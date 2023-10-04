import React from 'react';
import './pesquisa.css';
import imagemJogador1 from './jogador1.jpg';
import imagemJogador2 from './jogador2.jpg';

function DetalhesPartida() {
    return (
        <div className="detalhes-partida">
            <div className="player-um">
                <div className="player-info">
                    <div className="player-image"></div>
                    <h3>John Doe</h3>
                    <img src={imagemJogador1} alt="Imagem do jogador 1" className="player-img" />
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>Ranking:</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Grupo:</td>
                            <td>Especial</td>
                        </tr>
                        <tr>
                            <td>Cartas:</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Cartas especiais:</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Sequências:</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Dano médio:</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Dano máximo:</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>Habilidades usadas:</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Combinações de cartas usadas:</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mapa-jogo">
                {/* Espaço para o mapa do jogo */}
            </div>
            <div className="player-dois">
                <div className="player-info">
                    <div className="player-image"></div>
                    <h3>Jane Smith</h3>

                    <img src={imagemJogador2} alt="Imagem do jogador 2" className="player-img" />
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>Ranking:</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Grupo:</td>
                            <td>Mutante</td>
                        </tr>
                        <tr>
                            <td>Cartas:</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Cartas especiais:</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Sequências:</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Dano médio:</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Dano máximo:</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Habilidades usadas:</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Combinações de cartas usadas:</td>
                            <td>8</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="dados-partida">
                <h3>Dados da partida</h3>
                <p>Data/hora: 01/03/2023 - 19:30</p>
                <div className="cartas-partida">
                    <h4>Cartas utilizadas na partida</h4>
                    {/* Pequena div com as cartas da partida */}
                </div>
            </div>
        </div>
    );
}

export default DetalhesPartida;
