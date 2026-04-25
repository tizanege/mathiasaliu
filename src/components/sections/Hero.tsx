"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroScene from "../3d/HeroScene";
import Countdown from "../ui/Countdown";
import { ArrowRight, ChevronDown, Sparkles, Activity, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] w-full flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
      <HeroScene />
      
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-dark to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent z-10" />

      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left pt-20">
          {/* Subtle top badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brand-gold/60 lg:hidden" />
            <div className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full glass-gold border border-brand-gold/40 shadow-[0_0_20px_rgba(212,180,117,0.15)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors duration-500" />
              <Sparkles className="w-3 h-3 text-brand-gold shrink-0 animate-pulse" />
              <span className="text-brand-gold font-semibold uppercase tracking-[0.25em] text-[10px] md:text-xs">
                Vision 2027 • Youth & Innovation • Etsako Central
              </span>
            </div>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-brand-gold/60" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.05] drop-shadow-2xl relative"
          >
            <span className="block opacity-90">Architecting Our</span>
            <span className="block mt-2 bg-gradient-to-br from-brand-gold-light via-brand-gold to-yellow-600 bg-clip-text text-transparent pb-4 drop-shadow-lg">
              Golden Future
            </span>
          </motion.h1>

          {/* Hero Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-lg md:text-2xl text-white/70 mb-12 font-light leading-relaxed"
          >
            Progress driven by youth-led innovation and world-class technology. Empowered by the unbreakable spirit of Etsako Central. The future belongs to those who build it.
          </motion.p>

          {/* Countdown Timer */}
          <div className="flex justify-center lg:justify-start w-full mb-12">
            <Countdown />
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <Link
              href="#vision"
              className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-brand-gold to-[#b89554] hover:from-brand-gold-light hover:to-brand-gold text-brand-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_40px_rgba(212,180,117,0.3)] hover:shadow-[0_0_60px_rgba(212,180,117,0.6)] w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-in-out]" />
              <span>Discover the Blueprint</span>
              <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" size={20} />
            </Link>
            
            <Link
              href="#about"
              className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-brand-gold/50 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-md w-full sm:w-auto"
            >
              Meet Mathias
            </Link>
          </motion.div>
        </div>

        {/* Candidate Portrait Side */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden glass border border-white/10 shadow-[0_0_100px_rgba(212,180,117,0.15)] group">
            <Image 
              src="/images/mathias-hero.jpeg"
              alt="Hon. Mathias Aliu"
              fill
              className="object-cover object-center filter group-hover:scale-105 transition-transform duration-1000 saturate-[1.1] contrast-[1.05]"
              priority
            />
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-brand-gold/5 mix-blend-overlay" />
            
            {/* Signature Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-gold rounded-xl border border-brand-gold/20 backdrop-blur-xl">
              <h4 className="text-white font-bold text-xl mb-1 italic">"For Etsako Central, I serve."</h4>
              <p className="text-brand-gold text-xs uppercase tracking-widest font-bold">Hon. Mathias Aliu</p>
            </div>
          </div>
          
          {/* Decorative floating bits */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/20 blur-[80px] animate-pulse rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-green/20 blur-[80px] animate-pulse rounded-full" />
        </motion.div>

        {/* Metrics Ticker underneath */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          className="lg:col-span-12 mt-12 w-full grid grid-cols-3 gap-4 md:gap-12 pt-8 border-t border-white/10 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          
          {[
            { icon: Globe, label: "Digital Forward", value: "100%" },
            { icon: Activity, label: "Youth Empowerment", value: "Driven" },
            { icon: ShieldCheck, label: "Leadership", value: "Modern" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-10 h-10 rounded-full glass-gold flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-5 h-5 text-brand-gold" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-white tracking-tight">{item.value}</span>
              <span className="text-xs md:text-sm text-white/50 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-gold z-20 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={36} className="filter drop-shadow-[0_0_8px_rgba(212,180,117,0.8)]" />
      </motion.div>
    </section>
  );
}
