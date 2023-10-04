import React from "react";
import Terra from "../Mapa/Terra";
import SimulacaoEspaco from "../Mapa/Space";
function BarraInferior() {
    return (
        <div className="barra-inferior">
            <div className="mapa-jogador">
                <div className="mapa-jg-ilu"></div>

            </div>
            <div className="skills-jogador">
            <button>HABILIDADE 1</button>
            <button>HABILIDADE 1</button>
            <button>HABILIDADE 1</button>
            <button>HABILIDADE 1</button>
            <button>HABILIDADE 1</button>
            </div>
            <div className="controle-jogador">
                <div>controle

                </div>

            </div>
        </div>
    )
}

export default BarraInferior;