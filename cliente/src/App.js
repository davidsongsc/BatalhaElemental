import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import About from './component/About';
import Cadastro from './component/Cadastro';
import './styles/style.css';
import Elementos from './component/Elementos';
import Perfil from './component/Perfil';
import Classes from './component/Classes';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/elementos" element={<Elementos />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/about" element={<About />} />
        <Route path="/perfil" element={<Perfil />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
