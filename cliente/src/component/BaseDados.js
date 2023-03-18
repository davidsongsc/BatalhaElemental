import { useState, useEffect } from 'react';

export const useFetchElementos = ({ grupo }) => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const localStorageKey = 'elementos';

  async function fetchAndSaveData(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      localStorage.setItem(localStorageKey, JSON.stringify(data));
      setDados(data);
      setCarregando(false);
      console.log(data);
    } catch (error) {
      console.error(error);
      throw new Error('Falha em recuperar dados da API.');
    }
  }

  function getDataFromLocalStorage() {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
      setDados(JSON.parse(savedData));
      setCarregando(false);
      return JSON.parse(savedData);
    }
    return null;
  }

  useEffect(() => {
    const apiUrl = grupo === 'todas' ? 'http://192.168.0.50:5000/elemento/todas' : `http://192.168.0.50:5000/elemento/${grupo}`;
    const savedData = getDataFromLocalStorage();
    if (!savedData) {
      fetchAndSaveData(apiUrl);
    } else {
      setDados(savedData);
    }
  }, [grupo]);

  return { dados, carregando };
};