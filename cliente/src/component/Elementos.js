import { useState } from 'react';
import React, { useEffect } from 'react';

import "./elementoApi"
function Elementos() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    // Simula o carregamento da página por 3 segundos
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
    return (
        <div>
            {isLoading && <p>Carregando...</p>}
            {<div id="elementos-grupos-cadeia"></div>}



        </div>
    );
}

export default Elementos;