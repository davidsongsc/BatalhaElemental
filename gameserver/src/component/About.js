import { useState, useEffect } from 'react';

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/dados')
      .then(response => response.text())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Atributos Principais</h1>
      <p>{data}</p>
    </div>
  );
}
export default About;
