"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MoveRight, History, Award } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="relative py-40 bg-brand-green-light overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-green/5 via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="absolute -left-1/4 top-1/4 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image / Graphic Side */}
          <motion.div 
            style={{ y, opacity }}
            className="relative h-[700px] w-full rounded-[40px] group"
          >
            <div className="absolute inset-0 bg-brand-green/5 mix-blend-overlay z-10 rounded-[40px] transition-opacity duration-700 group-hover:opacity-0" />
            
            <div className="w-full h-full bg-white rounded-[40px] relative overflow-hidden border border-brand-green-light/40 shadow-[0_20px_50px_rgba(13,47,35,0.1)]">
              {/* Premium Portrait */}
              <Image 
                src="/images/mathias.jpeg"
                alt="Hon. Mathias Aliu"
                fill
                className="object-cover object-center filter group-hover:scale-105 transition-all duration-1000 grayscale-[0.2] contrast-[1.05]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating UI Elements inside Image */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-10 left-10 right-10 glass p-6 rounded-2xl border border-brand-gold/20 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold flex flex-col items-center justify-center text-white font-bold shadow-lg shadow-brand-gold/20">
                    <span>15+</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold tracking-wide">Years of Dedication</h4>
                    <p className="text-foreground/60 text-sm">Serving community & governance.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Glowing Accent */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold to-brand-green rounded-[40px] opacity-10 blur-xl -z-10 group-hover:opacity-20 transition-opacity duration-700" />
          </motion.div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-brand-gold inline-block" />
                <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">
                  The Architect of Tomorrow
                </span>
              </div>
              
              <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight relative">
                A leader rooted in <span className="text-brand-green italic font-light absolute opacity-5 -translate-x-4 translate-y-4 text-7xl md:text-8xl select-none">heritage</span> heritage, committed to the future.
              </h3>
              
              <div className="space-y-6 text-foreground/70 text-lg font-medium leading-relaxed">
                <p>
                  Hon. Mathias Aliu is not just a politician; he is a visionary technocrat who understands that the future of Etsako Central lies at the intersection of proven infrastructure, modern technology, and unshakeable community values.
                </p>
                <p>
                  With decades of experience spanning both grassroots mobilization and systemic elite governance, he brings a rare combination of empathy and execution. His mission is to transform our district into a highly optimized beacon of prosperity.
                </p>
              </div>

              {/* Detailed Accolades */}
              <div className="mt-12 space-y-4">
                {[
                  { icon: History, text: "Spearheaded 4 major infrastructure overhauls in local wards." },
                  { icon: Award, text: "Recognized nationally for transparent fund allocation strategies." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.2) }}
                    className="flex items-center gap-4 bg-white border border-foreground/5 rounded-xl p-4 hover:shadow-lg hover:border-brand-gold/20 transition-all cursor-default shadow-sm"
                  >
                    <div className="p-3 bg-brand-green-light rounded-lg text-brand-green shadow-inner border border-brand-green/5">
                      <item.icon size={20} />
                    </div>
                    <p className="text-foreground/80 text-sm font-semibold">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <a href="#vision" className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-sm hover:text-brand-gold transition-colors group">
                  Explore Full Biography 
                  <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
