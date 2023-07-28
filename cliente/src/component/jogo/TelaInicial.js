import React from "react";
import BarraSuperior from "./interface/BarraSuperior";
import BarraInferior from "./interface/BarraInferior";
import MarAberto from "./MarAberto";
import BolaDeFogo from "./mecanica/BolaDeFogo";
import Jupter from "./Mapa/Jupter";
import Saturno from "./Mapa/Saturno";
import Urano from "./Mapa/Urano";
import Marte from "./Mapa/Marte";
import Terra from "./Mapa/Terra";

function TelaInicial() {
    return (
        <>
            <BarraSuperior />
            <Saturno />

            <BarraInferior />
        </>
    )
}

export default TelaInicial;