import React from 'react';

function Perfil() {
  return (
    <main>
    <section>
      <h2>Informações do Perfil</h2>
      <div>
        <img src="caminho/para/foto.jpg" alt="Foto do Usuário" />
        <h3>Nome do Usuário</h3>
        <p>Apelido: apelido_do_usuario</p>
        <p id="posto-graduacao">Posto: 1000</p>
        <p>Pontuação: 1000</p>
      </div>
      <div>
        <h3>Histórico de Partidas</h3>
        <ul>
          <li>Partida 1</li>
          <li>Partida 2</li>
          <li>Partida 3</li>
        </ul>
      </div>
      <div>
        <h3>Mentoria</h3>
        <p>Disponível para mentoria</p>
      </div>
    </section>
    <section>
      <h2>Classes</h2>
      <div>
        <h3>Transformação</h3>
        <p>Habilidade inata: Transforma energia em vitalidade ou ataque em defesa</p>
        <ul>
          <li>Emissão-Transformação</li>
          <li>Captação-Transformação</li>
          <li>Criação-Transformação</li>
          <li>Destruição-Transformação</li>
        </ul>
      </div>
      <div>
        <h3>Emissão</h3>
        <p>Habilidade inata: Emite energia na forma de aura</p>
        <ul>
          <li>Transformação-Emissão</li>
          <li>Captação-Emissão</li>
          <li>Criação-Emissão</li>
          <li>Destruição-Emissão</li>
        </ul>
      </div>
      <div>
        <h3>Captação</h3>
        <p>Habilidade inata: Captura e controla energia</p>
        <ul>
          <li>Transformação-Captação</li>
          <li>Emissão-Captação</li>
          <li>Criação-Captação</li>
          <li>Destruição-Captação</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Comunidade</h2>
      <div>
        <h3>Chats</h3>
      </div>
      <div>
        <h3>Partidas em Andamento</h3>
      </div>
    </section>
    <section>
      <h2>Atributos</h2>
      <div>
        <h3>Força</h3>
        <ul>
          <li>Vitalidade: 10</li>
          <li>Resistência: 8</li>
        </ul>
      </div>
      <div>
        <h3>Agilidade</h3>
        <ul>
          <li>Velocidade: 7</li>
          <li>Destreza: 9</li>
        </ul>
      </div>
      <div>
        <h3>Inteligência</h3>
        <ul>
          <li>Sabedoria: 8</li>
          <li>Conhecimento: 9</li>
        </ul>
      </div>
    </section>

  </main>
  );
}

export default Perfil;
