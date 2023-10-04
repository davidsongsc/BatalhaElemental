import React from 'react';
import ElementoUnico from '../ElementoUnico';

function Inventario2({players, inventario2}) {

    return (
        <div className="cartas-conflito">
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_a1[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_a2[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_a3[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_a4[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_d1[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_d1[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_d1[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_d1[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_c1[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_c1[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_c1[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_c1[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_f1[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_f1[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_f1[0]} argumento="reserva" />}
                    </div>
                    <div className="cartayy">
                        {<ElementoUnico nome={players.inventario2.posicao_f1[0]} argumento="reserva" />}
                    </div>
                </div>
    );
}

export default Inventario2;
