import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Agua = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    const waterGeometry = new THREE.PlaneGeometry(10, 10, 64, 64);
    const waterMaterial = new THREE.MeshPhongMaterial({
      color: 0x3388aa,
      side: THREE.DoubleSide,
      flatShading: true,
      emissive: 0x000000,
      shininess: 100,
      transparent: true,
      opacity: 0.6,
    });

    const waterMesh = new THREE.Mesh(waterGeometry, waterMaterial);
    waterMesh.rotation.x = -Math.PI / 2;
    scene.add(waterMesh);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Atualize aqui a altura dos vértices da geometria da água para criar uma ondulação simulada.

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    if (sceneRef.current) {
      sceneRef.current.appendChild(renderer.domElement);
    }

    return () => {
      sceneRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default Agua;
