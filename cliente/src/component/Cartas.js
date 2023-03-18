import React, { useState, useEffect } from "react";
import { fundoCarta } from "./elementoApi";
import "./elemento.css"; // importe o arquivo CSS aqui
import "./mmobile.css";


function Elementos() {
  const [dados, setDados] = useState([]);
  const [cartaSelecionada, setCartaSelecionada] = useState(null);
  const [cartaSelecionada2, setCartaSelecionada2] = useState(null);
  const [corSelecionada, setCorSelecionada] = useState(null);
  const [posicaoSelecionada, setPosicaoSelecionada] = useState(null);
  const [ordernarPorNivel, setOrdernarPorNivel] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [cliques, setCliques] = useState(0);
  const [cliques2, setCliques2] = useState(0);
  const cores = ["carta-selecionada-a", "carta-selecionada-b", "carta-selecionada-c", "carta-selecionada-d", "carta-selecionada-e"];
  const [positions, setPositions] = useState(
    cards.map(() => ({
      x: Math.random() * 500,
      y: Math.random() * 500,
    }))
  );

  useEffect(() => {
    fetch('http://192.168.0.50:5000/elementos')
      .then(response => response.json())
      .then(data => {
        setDados(data);
        setCarregando(false);
      });
  }, []);

  const totalCartas = dados.elementos ? dados.elementos.length : 0;
  let offsetX = 0;

  function handleclique() {
    setCliques(cliques + 1);
    console.log(cliques);
  }

  function handleclique2() {
    setCliques2(cliques2 + 1);
    console.log(cliques2);
  }

  const handleClick = (nome, posicao) => {
    let novosDados;
    if (cartaSelecionada === null) {
      handleclique();
      setCorSelecionada(cores[0])
      setCartaSelecionada(nome);
      setPosicaoSelecionada(posicao);
      console.log(cartaSelecionada);
      console.log("primeira selecao " + nome);
      console.log(posicao);

    }
    else if (cartaSelecionada === nome) {
      console.log(posicao);

      handleclique();
      handleclique2();


      setCorSelecionada(cores[1])
      console.log("selecionou o mesmo " + nome);

    } else if (cliques === 2 && cartaSelecionada !== nome) {
      handleclique2();
      setCartaSelecionada2(nome);
      setCorSelecionada(cores[2])
      console.log(posicao);

      console.log("novamente " + nome);

      setCliques(0);
    }

    else if (cliques2 === 3 && cartaSelecionada !== cartaSelecionada2 && cartaSelecionada2 === nome) {
      setCorSelecionada(cores[3])
      console.log("trocou com " + nome);
      setCartaSelecionada(nome);
      setPosicaoSelecionada(posicao);
      console.log(cartaSelecionada)
      console.log(posicao);

      setPosicaoSelecionada(null);
      //setCartaSelecionada(null);
      setCliques(0);
      setCliques2(0);

    } else {
      console.log("quer trocar " + nome)
      console.log(posicao);

      setCorSelecionada(cores[0])
      setCartaSelecionada(nome);
      setPosicaoSelecionada(posicao);
      setCliques(0);
      setCliques2(0);
    }
  };
  const handleOrdernarPorNivel = () => {
    setOrdernarPorNivel(!ordernarPorNivel);
  }

  if (carregando) {
    return <h1>Carregando...</h1>;
  }
  let cartas = dados.elementos;
  if (ordernarPorNivel) {
    cartas = cartas.sort((a, b) => a.id - b.id);
  }
  return (
    <div id="elementos-grupos-cadeia">
      {dados.elementos.map((item, index) => (

        <div
          className={`carta ${item.nome === cartaSelecionada ? corSelecionada : ''}`}
          id="elemento-carta"
          onClick={() => handleClick(item.nome, index)}
          style={{
            backgroundImage: `url(${fundoCarta(item.tipo, item.efeito)})`,
            order: ordernarPorNivel ? item.id : item.id - totalCartas,
            transform: `translateX(${offsetX}px)%` 

          }}
        >
          <div>
            <h7 className="nivel">{item.nivel}</h7>
            <div>
              <ul key={index} className="frente">
                <h3>{item.nome}</h3>
                <h4>{item.efeito}</h4>
                <h5>{item.tipo}</h5>

                <div id="imagem" className={item.nome}>
                  <div
                    id={item.efeito}
                    className="imagemls"

                    style={{ backgroundImage: `url(${item.imagem})` }}
                  ></div>
                </div>
                <p>{item.descricao}</p>
              </ul>
              <div id="fonte-poder-carta">
                <div> A{item.poder}</div>
                <div> D{item.defesa}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Elementos;
