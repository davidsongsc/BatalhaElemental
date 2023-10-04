import React, { useState } from "react";
import './Poder.css';


function PoderHerdado() {
    const [selecionarOpcao, setSelecionar] = useState('sobrenatural');

    const handleSelecionar = (event) => {
        setSelecionar(event.target.value);
    };

    return (
        <div className={`tela-novo-mundo ${selecionarOpcao}`}>
            <div >
                <h1>Habilidade</h1>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="sobrenatural"
                        checked={selecionarOpcao === 'sobrenatural'}
                        onChange={handleSelecionar}
                    />
                    <span className="radio-custom"></span>
                    Sobrenatural
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="espiritual"
                        checked={selecionarOpcao === 'espiritual'}
                        onChange={handleSelecionar}
                    />
                    <span className="radio-custom"></span>
                    Espiritual
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="elemental"
                        checked={selecionarOpcao === 'elemental'}
                        onChange={handleSelecionar}
                    />
                    <span className="radio-custom"></span>
                    Elemental
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="ancestral"
                        checked={selecionarOpcao === 'ancestral'}
                        onChange={handleSelecionar}
                    />
                    <span className="radio-custom"></span>
                    Ancestral
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="heranca"
                        checked={selecionarOpcao === 'heranca'}
                        onChange={handleSelecionar}
                    />
                    <span className="radio-custom"></span>
                    Herança
                </label>
                <div>
                    <button>Continuar</button>
                </div>
            </div>
            <div className={`${selecionarOpcao}-int`}>
                <p style={{ background: 'black', textTransform: 'capitalize', padding: '10px 10px', opacity: '0.7' }}>{selecionarOpcao}</p>

            </div>
            <div>
                
            </div>
        </div>
    );
};

export default PoderHerdado;
