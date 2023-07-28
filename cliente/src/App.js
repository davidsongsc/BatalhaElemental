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
import styled from "styled-components";
import Tabuleiro from './component/Mapa';
import TelaInicial from './component/jogo/TelaInicial';
import SpriteAnimation from './component/jogo/anima/SpriteAnimation';
import Caixa from './component/extra/objetos/Box';
import HeroBackground from './component/BackGround';



function App() {

  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/p/:termo" element={<PrincipalElementos />} />
          <Route path="/match/:matchId" element={<Match />} />
          <Route path="/deck" element={<DeckEstilo />} />
          <Route path="/mecanica" element={<About />} />
          <Route path="/links" element={<HeaderLinks />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/novo" element={<NovoMundo />} />
          <Route path="/novo/poderes" element={<PoderHerdado />} />
          <Route path="/buscador/:player" element={<Buscador />} />
          <Route path="/mapa" element={<Tabuleiro />} />
          <Route path="/game" element={<TelaInicial />} />
          <Route path="/ani" element={<SpriteAnimation />} />
          <Route path="/teste" element={<Caixa />} />


        </Routes>

    </BrowserRouter>
  );

}

export default App;
