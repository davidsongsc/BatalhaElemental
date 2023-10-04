import { useState } from "react";
import { fundoCarta } from "./elementosApi";

function Elemento({ dados, onCartaClick }) {
  const [selecionada, setSelecionada] = useState(false);

  const handleCartaClick = () => {
    if (!selecionada) {
      onCartaClick(dados.nome, dados.nivel);
      setSelecionada(true);
    } else {
      setSelecionada(false);
    }
  };

  return (
    <div
      className={`carta ${selecionada ? "selecionada" : ""}`}
      onClick={handleCartaClick}
      style={{
        backgroundImage: `url(${fundoCarta(dados.tipo, dados.efeito)})`,
        order: dados.nivel,
      }}
    >
      <div>
        <h7>{dados.nivel}</h7>
        <div>
          <ul ke className="frente">
            <h3>{dados.nome}</h3>
            <h4>{dados.efeito}</h4>
            <h5>{dados.tipo}</h5>

            <div id="imagem" className={dados.nome}>
              <div
                id={dados.efeito}
                className="imagemls"
                style={{ backgroundImage: `url(${dados.imagem})` }}
              ></div>
            </div>
            <p>{dados.descricao}</p>
          </ul>
          <div id="fonte-poder-carta">
            <div> A{dados.ataque}</div>
            <div> D{dados.defesa}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elemento;
