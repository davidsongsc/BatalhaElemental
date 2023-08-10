import { useState, useEffect } from 'react';

export const useFetchElementos = ({ grupo }) => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  async function fetchData(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setDados(data);
      setCarregando(false);
      console.log(data);
    } catch (error) {
      console.error(error);
      throw new Error('Falha em recuperar dados da API.');
    }
  }

  useEffect(() => {
    const apiUrl = `http://192.168.0.50:5000/elemento/todas`;
    fetchData(apiUrl);
  }, []);

  return { dados, carregando };
};
