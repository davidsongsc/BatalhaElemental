import { useState, useEffect } from 'react';

export const useFetchElementos = ({ serial }) => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  
  const STORAGE_KEY = 'elementosData';

  useEffect(() => {
    const fetchData = async () => {
      const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

      if (savedData && savedData.length > 0) {
        setDados(savedData.filter((item) => item.serial === serial));
        setCarregando(false);
      } else {
        try {
          const response = await fetch('http://192.168.0.50:5000/elemento/todas');
          const data = await response.json();
          setDados(data.filter((item) => item.serial === serial));
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          setCarregando(false);
        } catch (error) {
          console.error(error);
          if (savedData && savedData.length > 0) {
            setDados(savedData.filter((item) => item.serial === serial));
          }
          setCarregando(false);
        }
      }
    };

    fetchData();
  }, [serial]);

  return { dados, carregando };
};
