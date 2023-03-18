import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BuscarPlayer({props}) {
    const { pesquisa } = props;
    const [ dados, setDados] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`http://192.168.0.50:5000/player/${pesquisa}`);
            setDados(result.data);
        }
        fetchData();
    }, []);

    // Renderiza o componente com os dados pré-carregados
   return dados;
}

export default BuscarPlayer;
