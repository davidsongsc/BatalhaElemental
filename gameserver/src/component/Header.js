import React from "react";
import { useState, useEffect } from 'react';
function Header() {
    const todasLi = document.querySelector('li:nth-of-type(4)');
    const menuOculto = document.querySelector('.menuocul-tomenu');
    let c = 0


    return (
        <header>
            <div className="banner">
                <h1>Logica</h1>
                <p>Prepare-se para batalhar!</p>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/novo">Novo Mundo</a></li>
                    <li> <a href="/links">Opções</a>

                    </li>
                    

                </ul>

            </nav>
        </header>
    );
}

export default Header;