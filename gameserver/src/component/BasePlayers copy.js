import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetchPlayers({ player }) {
  const [players, setPlayersDados] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiUrl = `http://192.168.0.50:5000/player/${player}`;

  async function readApiData(apiUrl) {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      localStorage.setItem('dataApi', JSON.stringify(data));
    
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      throw new Error('Falha em recuperar dados da API.');
    }
  }

  async function getApiData(apiUrl) {
    const savedData = JSON.parse(localStorage.getItem('dataApi'));
    if (savedData) {
      setPlayersDados(savedData);
      return savedData;
    } else {
      setLoading(true);
      const newData = await readApiData(apiUrl);
      setPlayersDados(newData);
      return newData;
    }
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const newData = await getApiData(apiUrl);
      setPlayersDados(newData);
    }
    fetchData();
  }, [apiUrl, player]);

  return { players, loading, getApiData };
}
