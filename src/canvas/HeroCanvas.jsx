// src/canvas/HeroCanvas.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";

const AnimatedShape = () => {
  const meshRef = useRef();
  const lightRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Smooth rotation
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.rotation.z = Math.cos(t * 0.2) * 0.1;
    
    // Breathing effect
    const scale = 2.5 + Math.sin(t * 0.5) * 0.2;
    meshRef.current.scale.set(scale, scale, scale);
    
    // Light movement
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(t * 0.5) * 3;
      lightRef.current.position.z = Math.cos(t * 0.5) * 3;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial
          color="#915EFF"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {/* Additional floating spheres */}
      <Sphere args={[0.3, 32, 32]} position={[-2, 1, -1]}>
        <meshStandardMaterial color="#4F46E5" emissive="#4F46E5" emissiveIntensity={0.5} />
      </Sphere>
      
      <Sphere args={[0.2, 32, 32]} position={[2, -1, -1]}>
        <meshStandardMaterial color="#915EFF" emissive="#915EFF" emissiveIntensity={0.5} />
      </Sphere>
      
      <pointLight ref={lightRef} position={[2, 2, 2]} intensity={1} color="#915EFF" />
    </group>
  );
};

const HeroCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#915EFF" />
      
      {/* The 3D Shape */}
      <AnimatedShape />
      
      {/* Interactive Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate={false}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default HeroCanvas;