// src/canvas/StarsCanvas.jsx
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const NoirStars = (props) => {
  const ref = useRef();
  
  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    const sizes = new Float32Array(3000);
    
    for (let i = 0; i < 3000; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      
      positions.set([x, y, z], i * 3);
      
      // Varying sizes for depth
      sizes[i] = Math.random() * 0.3 + 0.1;
    }
    
    return [positions, sizes];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.03;
      ref.current.rotation.y -= delta * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.12}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

// Falling particles effect - like film grain or dust
const FallingParticles = () => {
  const ref = useRef();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    const velocities = [];
    
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = Math.random() * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      velocities.push(Math.random() * 0.08 + 0.04);
    }
    
    return { positions, velocities };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array;
      
      for (let i = 0; i < 500; i++) {
        positions[i * 3 + 1] -= particles.velocities[i];
        
        // Reset to top when reaches bottom
        if (positions[i * 3 + 1] < -50) {
          positions[i * 3 + 1] = 50;
          positions[i * 3] = (Math.random() - 0.5) * 50;
        }
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <NoirStars />
        <FallingParticles />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;