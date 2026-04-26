"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="join" className="py-32 relative overflow-hidden">
      {/* Background with abstract glowing sphere effect */}
      <div className="absolute inset-0 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] opacity-40"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-gold p-12 md:p-20 rounded-[40px] border border-brand-gold/20 shadow-[0_20px_50px_rgba(180,83,9,0.1)] relative overflow-hidden"
        >
          {/* subtle interior glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/5 border-transparent"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 relative z-10">
            Join the <span className="bg-gradient-to-r from-brand-gold to-yellow-800 bg-clip-text text-transparent">Digital Movement</span>
          </h2>
          <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto relative z-10 font-medium">
            The future of Etsako Central is youth-led and tech-driven. Join our mission to build a premium, accountable, and world-class constituency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_10px_30px_rgba(180,83,9,0.2)] hover:shadow-[0_15px_40px_rgba(180,83,9,0.3)] hover:scale-105">
              Volunteer Now <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent hover:bg-foreground/5 text-foreground border border-foreground/10 px-10 py-5 rounded-full font-bold text-lg transition-all backdrop-blur-md">
              Donate to Campaign
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
