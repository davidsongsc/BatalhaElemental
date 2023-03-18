import React, { useState, useEffect } from 'react';
import './buscador.css';
import { useParams } from 'react-router-dom';
import { useFetchPlayers } from './BasePlayers';
import BarraLateralEsquerda from './extra/BarraLateralEsquerda';
import Inventario from './extra/Inventario';
import Inventario2 from './extra/Inventario2';
import Match from './Match';
function Buscador() {
    const { player } = useParams();
    const { players } = useFetchPlayers({ player });

    try {
        return (
            <>
        
                <div className="pagina-inicial">

                    <BarraLateralEsquerda />
                    
                    <div className="barra-lateral-direita">
                        <div>
                            <div className="inventario">
                                {players.length === undefined && (
                                    <Inventario players={players} />

                                )}
                                {/*
                            {players.length === undefined && (
                                <Inventario2 players={players} />

                            )}
                             */}
                            </div>
                        </div>
                    </div>
                </div>
                <Match />
            </>
        );
    } catch (error) {
        return <div>Erro ao conectar. {players}</div>
    }
}

export default Buscador;
