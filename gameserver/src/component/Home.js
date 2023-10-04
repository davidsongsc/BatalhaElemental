import React from 'react';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <main>
        <section id='gr-partidas-home'>
          <h2>Últimas partidas</h2>
          <ul>
            <li><a href="/match/1" title="Ir para a partida entre Player 1 e Player 2">Player 1 vs. Player 2</a> - Vitória: Player 1</li>
            <li><a href="/match/2" title="Ir para a partida entre Player 3 e Player 4">Player 3 vs. Player 4</a> - Vitória: Player 4</li>
            <li><a href="/match/3" title="Ir para a partida entre Player 5 e Player 6">Player 5 vs. Player 6</a> - Vitória: Player 6</li>
          </ul>
        </section>
        <section id='gr-buscador-home'>
          <h2>Game</h2>
          <nav>
            <ul>
              <li><a href="/buscador/davidson" title="Ir para a página de busca de partidas">Buscar Partida</a></li>
              <li><a href="/game" title="Ir para a página de prática">Praticar</a></li>
              <li><a href="/p/todas" title="Ir para a página de aprendizagem">Cartas</a></li>
              <li><a href="/support" title="Ir para a página de suporte">Suporte</a></li>
            </ul>
          </nav>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
