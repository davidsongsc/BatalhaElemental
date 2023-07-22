import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import HeaderLinks from './component/links/HeaderLinks';
import About from './component/About';
import Cadastro from './component/Cadastro';
import PrincipalElementos from './component/PrincipalElementos';
import Perfil from './component/Perfil';
import Match from './component/Match';
import Buscador from './component/buscador';
import DeckEstilo from './component/DeckEstilo';
import './styles/style.css';
import './styles/media.css';
import NovoMundo from './component/principal/NovoMundo';
import PoderHerdado from './component/principal/PoderHerdado';

import Tabuleiro from './component/Mapa';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/pesquisa/:termo" element={<PrincipalElementos />} />
        <Route path="/match/:matchId" element={<Match />} />
        <Route path="/deck" element={<DeckEstilo />} />
        <Route path="/mecanica" element={<About />} />
        <Route path="/links" element={<HeaderLinks />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/novo" element={<NovoMundo />} />
        <Route path="/novo/poderes" element={<PoderHerdado />} />
        <Route path="/buscador/:player" element={<Buscador />} />
        <Route path="/mapa" element={<Tabuleiro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
