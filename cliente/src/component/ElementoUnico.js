import React from 'react';
import Carta from './principal/Carta';
import './elemento.css';
import { useFetchElementos } from './BaseDeck';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';


function ElementoUnico({ nome, posixy, argumento, dadosCarta, bgselecionado }) {
    const { dados, carregando } = useFetchElementos({ "serial": nome });

    if (carregando) {
        return <div className="spinner">
            <h3>Carregando...</h3><br /><br /><br />
            <RingLoader color={'#FFFFFF'} loading={carregando} css={css`
          display: block;
          margin: 0 -10px;
          border-color: red;
        `} size={120} />
        </div>;
    }
    if (nome !== 'vazio') {
        return (
            <div id="elementos-grupos-cadeia-ic">
                {dados.map((item, index) => (

                    <Carta
                        key={item.id}
                        item={item}
                        index={index}
                        nome={nome}
                        posixy={posixy}
                        argumento={argumento}
                        corSelecionada={bgselecionado}
                        dadosCarta={dadosCarta}
                        
                    />
                ))}
            </div>

        );
    }
    else {
        return (
            <div>
                <div></div>
            </div>
        )
    }
}

export default ElementoUnico;
