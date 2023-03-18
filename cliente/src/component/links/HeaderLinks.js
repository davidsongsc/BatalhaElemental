import React from "react";
import { useState, useEffect } from 'react';
function Header() {
    const todasLi = document.querySelector('li:nth-of-type(4)');
    const menuOculto = document.querySelector('.menuocul-tomenu');
    let c = 0


    return (
        <div>
            <div className="banner">
                <h1>Desvio</h1>
                <p>Aqui você encontra o mapa do site e a dinamica do game!</p>
                <h1>Tipo</h1>
            </div>
            <nav>
                <ul>
                <li><a href="pesquisa/todas">Todas</a></li>
                    <li><a href="pesquisa/humano">humanos</a></li>
                    <li><a href="pesquisa/elfo">elfos</a></li>
                    <li><a href="pesquisa/mutante">mutantes</a></li>
                    <li><a href="pesquisa/alien">aliens</a></li>
                    <li><a href="pesquisa/armamento">armamentos</a></li>
                    <li><a href="pesquisa/mecanica">mecanica</a></li>
                    <li><a href="pesquisa/especial">especiais</a></li>
                </ul>

            </nav>
            <div className="banner">
                <h1>Acesso do Usuario</h1>
                <p>Já tem uma conta? então entre e </p>

            </div>
            <nav>
                <ul>
                    <li><a href="/">Cadastro</a></li>
                    <li><a href="/">Entrar</a></li>
                </ul>

            </nav>
            <div className="banner">
                <h1>Game Master</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">vila</a></li>
                    <li><a href="/">Visão</a></li>
                    <li><a href="/">arredores</a></li>
                </ul>

            </nav>
        </div>
    );
}

export default Header;