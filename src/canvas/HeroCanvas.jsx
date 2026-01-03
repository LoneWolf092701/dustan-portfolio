// src/canvas/HeroCanvas.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Torus, Box } from "@react-three/drei";

const AnimatedShape = () => {
  const meshRef = useRef();
  const torusRef = useRef();
  const boxRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Main shape rotation
    meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.3;
    meshRef.current.rotation.y = t * 0.3;
    meshRef.current.rotation.z = Math.cos(t * 0.2) * 0.2;
    
    // Breathing effect
    const scale = 2.2 + Math.sin(t * 0.5) * 0.15;
    meshRef.current.scale.set(scale, scale, scale);
    
    // Orbiting torus
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.01;
      torusRef.current.position.x = Math.cos(t * 0.5) * 3;
      torusRef.current.position.z = Math.sin(t * 0.5) * 3;
    }
    
    // Orbiting box
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.02;
      boxRef.current.rotation.y += 0.02;
      boxRef.current.position.x = Math.cos(t * 0.5 + Math.PI) * 3;
      boxRef.current.position.z = Math.sin(t * 0.5 + Math.PI) * 3;
    }
  });

  return (
    <group>
      {/* Main wireframe shape */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color="#00ff41" wireframe={true} />
      </mesh>
      
      {/* Orbiting torus */}
      <Torus ref={torusRef} args={[0.3, 0.1, 16, 32]} position={[3, 0, 0]}>
        <meshBasicMaterial color="#00d9ff" wireframe={true} />
      </Torus>
      
      {/* Orbiting box */}
      <Box ref={boxRef} args={[0.5, 0.5, 0.5]} position={[-3, 0, 0]}>
        <meshBasicMaterial color="#00ff41" wireframe={true} />
      </Box>
      
      {/* Ambient particles */}
      <pointLight position={[2, 2, 2]} intensity={0.5} color="#00ff41" />
      <pointLight position={[-2, -2, -2]} intensity={0.3} color="#00d9ff" />
    </group>
  );
};

const HeroCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 75 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
    >
      {/* Minimal lighting for noir effect */}
      <ambientLight intensity={0.2} />
      
      {/* The 3D Shape */}
      <AnimatedShape />
      
      {/* Interactive Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={0.5}
        rotateSpeed={0.3}
      />
    </Canvas>
  );
};

export default HeroCanvas;