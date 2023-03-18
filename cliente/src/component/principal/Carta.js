import React, { useState } from "react";
import { fundoCarta } from '../jsx/fundocarta';
import { medidor } from "../jsx/medidor";
import "./carta.css";

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
        <div className="nivel">XP:{item.nivel}</div>
        <div>
          <ul key={index} className="frente">
            <h3>{item.nome}</h3>
            <h4>{item.efeito}</h4>
            <h5>{item.tipo}</h5>
            <div id="imagem" className={item.nome}>
              <div
                id={item.efeito}
                className="imagemls"
                style={{ backgroundSize: 'cover', backgroundImage: `url(${item.imagem})` }}
              ></div>
            </div>
            <p>
              {item.descricao}
            </p>
          </ul>
          <div id="fonte-poder-carta">
            <div> A{medidor(item.poder, item.nivel, item.efeito, item.defesa)}</div>
            <div> D{medidor(item.defesa, item.nivel, item.efeito, item.poder)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carta;
