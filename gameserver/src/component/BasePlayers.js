import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetchPlayers({ player }) {
  const [players, setPlayersDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastPlayer, setLastPlayer] = useState(null);
  
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
    
    return new Promise((resolve, reject) => {

      if (lastPlayer === player && savedData) {
        setPlayersDados(savedData);
        resolve(savedData);
      } else {
        readApiData(apiUrl)
          .then((newData) => {
            setPlayersDados(newData);
            resolve(newData);
          })
          .catch((error) => reject(error));
      }

    });
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const newData = await Promise.race([
          getApiData(apiUrl),
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const savedData = JSON.parse(localStorage.getItem('dataApi'));
              if (savedData) {
                setPlayersDados(savedData);
                resolve(savedData);
                setLoading(false);
              } else {
                reject(new Error('Timeout exceeded'));
              }
            }, 50);
          }),
        ]);
        setPlayersDados(newData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [apiUrl, player]);

  return { players, getApiData, loading };
}
