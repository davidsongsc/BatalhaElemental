import React, { useState, useEffect, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import "./Box.css";
import texture from "./pedra.jpg";

export default function Caixa({ item }) {
  const colorMap = useLoader(TextureLoader, texture)

  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={(-2, 5, 2)} intensity={1} />
      <Suspense fallback={null}>
        <mesh
          visible
          userData={{ hello: "world" }}
          position={[0, 0, 0]}
          rotation={[90, 0, 20]}
        >

          {item.nome === 'quadrado' && <><boxGeometry  args={item.imagem} > </boxGeometry> <meshNormalMaterial map={colorMap} /></>}
          {item.nome === 'esfera' && <><sphereGeometry args={item.imagem} ></sphereGeometry> <meshNormalMaterial map={colorMap} /></>}
          {item.nome === 'manipulacao' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#00b0f3" distort={0.7} speed={1.5} roughness={0}/> </>}
          {item.nome === 'constante' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#ff4100" distort={1} speed={10} roughness={0}/> </>}

         

        </mesh>

      </Suspense>

    </Canvas>
  );
}
