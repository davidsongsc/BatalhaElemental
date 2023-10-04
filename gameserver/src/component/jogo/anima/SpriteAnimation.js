import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';

const SpriteAnimation = ({ imagem, imgefeito, width, frames, time }) => {
  // Define o estado do frame atual da animação
  const [frame, setFrame] = useState(0);

  // Define o número total de frames na imagem do sprite
  const totalFrames = frames; // Número total de frames por linha

  // Define as dimensões da imagem do sprite
  const spriteWidth = width; // Largura total da imagem do sprite
  const spriteHeight = 785; // Altura total da imagem do sprite

  // Calcula o tamanho de cada frame individual
  const frameWidth = spriteWidth / totalFrames; // Tamanho de cada frame na largura
  const frameHeight = spriteHeight / 10; // Tamanho de cada frame na altura

  // Define a animação do sprite
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((frame) => (frame + frameWidth) % spriteWidth);
    }, time); // Intervalo de tempo entre os frames (100ms no exemplo, ajuste conforme necessário)

    return () => clearInterval(interval);
  }, [spriteWidth, frameWidth]);

  return (
    <FlipMove typeName={null} enterAnimation={false} leaveAnimation={false}>
      <div
        key={frame}
        className='imagem-animacao-carta'
        style={{
     
          width: `${frameWidth - 50}px`,
          height: `${frameHeight}px`,
          background: `url(${imagem}) no-repeat`,
          backgroundSize: `auto`,
          backgroundPositionY: '-3px',
          backgroundPositionX: `-${frame}px`,
          filter: imgefeito,
          willChange: 'background-position-x',
        }}
      ></div>
    </FlipMove>
  );
};

export default SpriteAnimation;
