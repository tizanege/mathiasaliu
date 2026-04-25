"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";


export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 bg-brand-dark overflow-hidden">
      {/* Regional Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/images/edo-bg.png')] bg-cover bg-center opacity-40 mix-blend-luminosity scale-110"
        style={{ filter: "brightness(0.4) contrast(1.2)" }}
      />
      
      {/* Gradient Overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black opacity-80 z-1" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green/20 via-brand-dark/60 to-brand-dark opacity-70 z-0"></div>
      
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#d4b475" />
        <directionalLight position={[-10, 10, -5]} intensity={0.5} color="#164936" />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
