import React, { useState } from "react";
import { fundoCarta } from '../jsx/fundocarta';
import "./carta.css";
import DeliniadorCartas from "../jogo/Deliniador";

function Carta(props) {
  const { item, index, corSelecionada, cartaSelecionada, nome, posixy, argumento, trocaposicoes, onPositionChange, dadosCarta } = props;
  const [isSelected, setIsSelected] = useState(false);

  function onDragEnd(event) {
    const indexOrigem = event.dataTransfer.getData("index");
    const indexDestino = Number(event.target.getAttribute("data-index"));

    if (indexOrigem !== indexDestino) {
      trocaposicoes(indexOrigem, indexDestino);
    }
  }
  const handleClick = () => {
    setIsSelected(!isSelected);
    { onDragEnd() };
  }


  return (
    <div
      className={`carta ${item.nome === cartaSelecionada ? corSelecionada : ''}${argumento} ${isSelected}`}
      id="elemento-carta"

      style={{
        backgroundImage: `${fundoCarta(item.tipo, item.efeito)}`,



      }}
    >
      <div>
        <h3>{item.nome}</h3>
        <div>

          <ul key={index} className="frente">

            <div className="nivel">Nivel:{item.nivel}</div>
            <div className="indicador">

              <h4>{item.efeito}</h4>
            </div>

            <h5>{item.tipo}</h5>
            <div id="imagem" className={item.nome}>
              <div
                id={item.efeito}
                className="imagemls"

              >
                <DeliniadorCartas item={item} />
              </div>
            </div>
            <p>
              {item.descricao}
            </p>
          </ul>
          <div id="fonte-poder-carta">
            <div>
              <h7 className="linha-fonte-poder-carta">Dano</h7>
              <h8>{item.poder}</h8></div>
            <div>
              <h7 className="linha-fonte-poder-carta">Tempo</h7>
              <h8>{item.energia}</h8></div>
            <div>
              <h7 className="linha-fonte-poder-carta">hp</h7>
              <h8>{item.defesa}</h8></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carta;
