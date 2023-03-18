import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from './Footer';
import DetalhesPartida from './partida/DetalhesPartida';

function Match() {
  const [matchId, setMatchId] = useState('');
  const navegacao = useNavigate();
  const { id } = useParams();

  const handleInputChange = (event) => {
    setMatchId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navegacao.push(`/match/${matchId}`);
  };

  return (
    <div>
      <main>
        <h1>Partida {id}</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="matchId">ID da partida:</label>
          <input type="text" id="matchId" name="matchId" value={matchId} onChange={handleInputChange} />
          <button type="submit">Pesquisar</button>
          <div>
            <h2>Partidas ao vivo</h2>
            
        </div>
        <DetalhesPartida />
        </form>
        
      </main>
      <Footer />
    </div>
  );
}

export default Match;
