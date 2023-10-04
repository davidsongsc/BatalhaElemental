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
      <ambientLight intensity={0.1} />
      <directionalLight position={(-3, 5, 2)} intensity={1} />
      <Suspense fallback={null}>
        <mesh
          visible
          userData={{ hello: "world" }}
          position={[0, 0, 0]}
          rotation={[-15, 25, 90]}
        >

          {item.nome === 'cubo' && <><boxGeometry  args={item.imagem} > </boxGeometry> <meshNormalMaterial map={colorMap} /></>}
          {item.nome === 'esfera' && <><sphereGeometry args={item.imagem} ></sphereGeometry> <meshNormalMaterial map={colorMap} /></>}
          {item.nome === 'manipulacao' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#00b0f3" distort={0.7} speed={0.3} roughness={0}/> </>}
          {item.nome === 'constante' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#ff4100" distort={1} speed={0.5} roughness={0}/> </>}
          {item.nome === 'auréola do arcanjo' && <><torusGeometry args={item.imagem} /> <meshNormalMaterial map={colorMap} /> </>}
          {item.nome === 'fa' && <><torusKnotGeometry args={item.imagem} /> <meshNormalMaterial map={colorMap} /> </>}
          {item.nome === 'vermelho' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#FF0000" distort={0.3} speed={10} roughness={0}/> </>}
          {item.nome === 'verde' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#00FF00" distort={1} speed={0.5} roughness={0}/> </>}
          {item.nome === 'azul' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#0000FF" distort={1} speed={0.5} roughness={0}/> </>}
          {item.nome === 'amarelo' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#FFFF00" distort={1} speed={0.5} roughness={0}/> </>}
          {item.nome === 'magenta' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#FF00FF" distort={1} speed={0.5} roughness={0}/> </>}
          {item.nome === 'ciano' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#00FFFF" distort={1} speed={0.5} roughness={0}/> </>}
          {item.nome === 'roxo' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#800080" distort={1} speed={0.5} roughness={0}/> </>}
          {item.nome === 'agua' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#800080" distort={1} speed={0.5} roughness={0}/> </>}
          {item.nome === 'fogo' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#FF0000" distort={0.1} speed={1} roughness={0}/> </>}
          {item.nome === 'terra' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#800080" distort={1} speed={0.5} roughness={0}/> </>}
          {item.nome === 'raio' && <><sphereGeometry args={item.imagem} /><MeshDistortMaterial color="#800080" distort={1} speed={0.5} roughness={0}/> </>}
        </mesh>

      </Suspense>

    </Canvas>
  );
}
