import React from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Box } from '@react-three/drei';

const ModeloCorpoHumano = () => {
  const RotatingBox = () => {
    const ref = React.useRef();

    useFrame(() => {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    });

    return (
      <Box ref={ref} args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshBasicMaterial attach="material" color="red" />
      </Box>
    );
  };

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox />
    </Canvas>
  );
};

export default ModeloCorpoHumano;
