"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";


export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
      {/* Regional Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/images/edo-bg.png')] bg-cover bg-center opacity-30 mix-blend-multiply scale-110"
        style={{ filter: "brightness(1.1) contrast(1.05) saturate(0.8)" }}
      />
      
      {/* Gradient Overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 opacity-60 z-1" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/10 via-brand-green-light/40 to-background opacity-80 z-0"></div>
      
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#d4b475" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
        <Environment preset="apartment" />
      </Canvas>
    </div>
  );
}
