import React from 'react';
import Globe from 'react-globe.gl';

const Marte = () => {
    const globeOptions = {
        globeImageUrl: 'http://192.168.0.50:5000/img/marte.jpg', // Substitua pelo caminho para a imagem do globo que você deseja usar
        bumpImageUrl: '', // Substitua pelo caminho para a imagem de relevo do globo que você deseja usar
        backgroundImageUrl: '', // Substitua pelo caminho para a imagem de fundo do globo que você deseja usar
        nome: 'Marte'
    };

    return (
        <>
            <div className='titulo-planeta'>
                <h4>{globeOptions.nome}</h4>
                
            </div>

            <Globe
                width="100vw"
                height="100vh"
                globeImageUrl={globeOptions.globeImageUrl}
                bumpImageUrl={globeOptions.bumpImageUrl}
                backgroundImageUrl={globeOptions.backgroundImageUrl}
            />
        </>
    );
};

export default Marte;
