import React, { useState } from 'react';
import ElementoUnico from '../ElementoUnico';

function Inventario({ players }) {
    const [contadorCartas, setContadorCartas] = useState(0);
    const [cartaSelecionada, setCartaSelecionada] = useState(null);
    const [secartaSelecionada, setSeCartaSelecionada] = useState(null);
    const [clickUno, setClickUno] = useState(null); // s1
    const [clickDuno, setClickDuno] = useState(null);   // s2
    const [clickTrino, setClickTrino] = useState(null); // s3
    const [bgSelect, setBgSelect] = useState();

    const inventarioCoresBg = ['carta-selecionada-a', 'carta-selecionada-b', 'carta-selecionada-c', 'carta-selecionada-d', 'carta-selecionada-e'];
    
    const handleClickInventario = (posicao, carta) => {
        console.log(posicao);
        console.log(carta);
        if (clickUno == null) {
            console.log('clique uno bem sucedido!');
            setClickUno(posicao);

        } else if (clickDuno === clickUno) {
            console.log('Detecção especial!')
            setClickTrino(posicao);
            setClickDuno(null);
            setClickUno(null);

        } else if (clickUno === posicao) {
            console.log('Detecção de Mesma Seleção!');
            setClickDuno(posicao);
            setClickUno(null);
            setBgSelect(inventarioCoresBg[1])

        }
    };


    return (
        <div className="cartas-inventario">
            <div className="cartaxx" onClick={() => handleClickInventario(players.inventario.posicao_a1[1], players.inventario.posicao_a1[0])}>
                {<ElementoUnico nome={players.inventario.posicao_a1[0]} posixy={players.inventario.posicao_a1[1]} argumento="menor" dadosCarta={players} bgselecionado={bgSelect} />}
            </div>
            <div className="cartaxx" onClick={() => handleClickInventario(players.inventario.posicao_a2[1], players.inventario.posicao_a2[0])}>
                {<ElementoUnico nome={players.inventario.posicao_a2[0]} posixy={players.inventario.posicao_a2[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx" onClick={() => handleClickInventario(players.inventario.posicao_a3[1], players.inventario.posicao_a3[0])}>
                {<ElementoUnico nome={players.inventario.posicao_a3[0]} posixy={players.inventario.posicao_a3[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx">
                {<ElementoUnico nome={players.inventario.posicao_a4[0]} posixy={players.inventario.posicao_a4[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx">
                {<ElementoUnico nome={players.inventario.posicao_d1[0]} posixy={players.inventario.posicao_d1[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx">
                {<ElementoUnico nome={players.inventario.posicao_d2[0]} posixy={players.inventario.posicao_d2[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx">
                {<ElementoUnico nome={players.inventario.posicao_d3[0]} posixy={players.inventario.posicao_d3[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx">
                {<ElementoUnico nome={players.inventario.posicao_d4[0]} posixy={players.inventario.posicao_d4[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx">
                {<ElementoUnico nome={players.inventario.posicao_c1[0]} posixy={players.inventario.posicao_c1[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx">
                {<ElementoUnico nome={players.inventario.posicao_c2[0]} posixy={players.inventario.posicao_c2[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx">
                {<ElementoUnico nome={players.inventario.posicao_c3[0]} posixy={players.inventario.posicao_c3[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx">
                {<ElementoUnico nome={players.inventario.posicao_c4[0]} posixy={players.inventario.posicao_c4[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx">
                {<ElementoUnico nome={players.inventario.posicao_f1[0]} posixy={players.inventario.posicao_f1[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx">
                {<ElementoUnico nome={players.inventario.posicao_f2[0]} posixy={players.inventario.posicao_f2[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx">
                {<ElementoUnico nome={players.inventario.posicao_f3[0]} posixy={players.inventario.posicao_f3[1]} argumento="menor" dadosCarta={players} />}
            </div>
            <div className="cartaxx">
                {<ElementoUnico nome={players.inventario.posicao_f4[0]} posixy={players.inventario.posicao_f4[1]} argumento="menor" dadosCarta={players} />}
            </div>
        </div>
    );
}

export default Inventario;
