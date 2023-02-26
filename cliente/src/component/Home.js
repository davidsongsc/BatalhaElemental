import React from 'react';
import Footer from './Footer';
function Home() {
  return (
    <div>
  
      <main>
        <section>
          <h2>Últimas partidas</h2>
          <ul>
            <li><a href="#">Player 1 vs. Player 2</a> - Vitória: Player 1</li>
            <li><a href="#">Player 3 vs. Player 4</a> - Vitória: Player 4</li>
            <li><a href="#">Player 5 vs. Player 6</a> - Vitória: Player 6</li>
          </ul>
        </section>
        <section>
          <h2>Barra Lateral</h2>
          <nav>
            <ul>
              <li><a href="#">Buscar Partida</a></li>
              <li><a href="#">Praticar</a></li>
              <li><a href="#">Aprendizagem</a></li>
              <li><a href="#">Suporte</a></li>
            </ul>
          </nav>
        </section>
      </main>
      <Footer/>
    </div>

  );
}

export default Home;
