import React from 'react';
import Carta from './principal/Carta';
import { useFetchElementos } from './BaseDados';
import { fundoCarta } from './jsx/fundocarta';
import { useParams } from 'react-router-dom';

function PrincipalElementos({ cartaSelecionada, handleClick, ordernarPorNivel, grupo }) {
    
    const { termo } = useParams();
    const { dados, carregando } = useFetchElementos(grupo =  { "grupo": termo });


    if (carregando) {
        return <div>
            <h1>Cartas</h1>
            <p>Carregando...</p>

        </div>;
    }

    return (
        <div>
            <h2>Grupo Cadeia</h2>
            <div id="elementos-grupos-cadeia">

                {dados.map((item, index) => (

                    <Carta
                        key={item.id}
                        item={item}
                        index={index}
                        cartaSelecionada={cartaSelecionada}
                        handleClick={handleClick}
                        ordernarPorNivel={ordernarPorNivel}
                        fundoCarta={fundoCarta}
                    />
                ))}
            </div>
        </div>
    );
}

export default PrincipalElementos;
