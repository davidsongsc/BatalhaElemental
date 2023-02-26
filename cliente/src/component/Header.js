import React from "react";

function Header() {
    return (
        <header>
            <div className="banner">
                <h1>Consequencia & Consequencia</h1>
                <p>Um mundo de batalhas épicas</p>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/elementos">Elementos</a></li>
                    <li><a href="/classes">Classes</a></li>
                    <li><a href="/cadastro">Cadastro</a></li>
                    <li><a href="#">Entrar</a></li>
                    <li><a href="#">Cartas</a></li>
                    <li><a href="#">Atualizações</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;