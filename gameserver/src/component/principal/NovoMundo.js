import React, { useState } from "react";
import {useNavigate } from 'react-router-dom';

import './NovoMundo.css';

function NovoMundo() {
    const [selecionarOpcao, setSelecionar] = useState('floresta');
    const navigate = useNavigate();

    const handleSelecionar = (event) => {
        setSelecionar(event.target.value);
    };

    const handleNavegar = (rota) => {
        navigate(rota);
    };

    return (
        <div className={`tela-novo-mundo ${selecionarOpcao}`}>
            <div >
                <h1>Estilo</h1>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="floresta"
                        checked={selecionarOpcao === 'floresta'}
                        onChange={handleSelecionar}
                    />
                    <span className="radio-custom"></span>
                    Floresta
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="deserto"
                        checked={selecionarOpcao === 'deserto'}
                        onChange={handleSelecionar}
                    />
                    <span className="radio-custom"></span>
                    Deserto
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="tundra"
                        checked={selecionarOpcao === 'tundra'}
                        onChange={handleSelecionar}
                    />
                    <span className="radio-custom"></span>
                    Tundra
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="costa"
                        checked={selecionarOpcao === 'costa'}
                        onChange={handleSelecionar}
                    />
                    <span className="radio-custom"></span>
                    Costa
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="savana"
                        checked={selecionarOpcao === 'savana'}
                        onChange={handleSelecionar}
                    />
                    <span className="radio-custom"></span>
                    Savana
                </label>
                <div>
                    <button onClick={() => handleNavegar('poderes')}>Continuar</button>
                </div>
            </div>
            <div className={`${selecionarOpcao}-int`}>
                <p style={{ background: 'black', textTransform: 'capitalize', padding: '10px 10px', opacity: '0.7' }}>{selecionarOpcao}</p>

            </div>

        </div>
    );
};

export default NovoMundo;
