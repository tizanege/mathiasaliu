"use client";

import { motion } from "framer-motion";
import { Lightbulb, Network, ShieldCheck, GraduationCap, ArrowUpRight } from "lucide-react";

export default function Vision() {
  const visions = [
    {
      title: "Digital Ecosystem",
      subtitle: "The Foundation of the Future",
      description: "Bringing high-speed broadband and 24/7 power to tech campuses, enabling Etsako youth to work for the world’s biggest companies right from their hometown.",
      icon: Network,
      color: "from-blue-900/50 to-brand-dark"
    },
    {
      title: "Youth Enterprise",
      subtitle: "Wealth Creation at Scale",
      description: "Empowering young innovators with venture capital, modern cooperatives, and smart-farming tools. We transition from survival to global market dominance.",
      icon: Lightbulb,
      color: "from-brand-green/50 to-brand-dark"
    },
    {
      title: "Education Revolution",
      subtitle: "Building the Next Prodigies",
      description: "Transforming schools into premium hubs of coding, AI, and robotics. Equipping the next generation with world-class skills for a borderless world.",
      icon: GraduationCap,
      color: "from-brand-gold/30 to-brand-dark"
    },
    {
      title: "Digital Governance",
      subtitle: "Radical Transparency",
      description: "An open-door policy backed by immutable digital systems, ensuring every resource is trackable by the people. No dark corners, only absolute clarity.",
      icon: ShieldCheck,
      color: "from-purple-900/40 to-brand-dark"
    }
  ];

  return (
    <section id="vision" className="py-40 relative bg-brand-black overflow-hidden">
      <div className="absolute inset-0 bg-[#05100c] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-green-light/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-brand-gold" />
            <h2 className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold">
              The Strategic Blueprint
            </h2>
            <div className="h-px w-8 bg-brand-gold" />
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight"
          >
            A Vision for <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-brand-gold-light via-brand-gold to-yellow-600 bg-clip-text text-transparent italic">Exponential</span> Growth
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {visions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group relative p-[1px] rounded-[32px] overflow-hidden bg-gradient-to-br from-white/10 via-transparent to-transparent shadow-2xl"
            >
              {/* Dynamic Hover Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative h-full bg-[#040c09] rounded-[31px] p-10 md:p-12 transition-colors duration-500 overflow-hidden flex flex-col justify-between">
                
                {/* Background immense icon pattern */}
                <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 scale-150 rotate-12 pointer-events-none group-hover:rotate-0">
                  <item.icon className="w-96 h-96 text-white" />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-20 h-20 rounded-2xl glass-gold flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_30px_rgba(212,180,117,0.15)] bg-[#05100c] border-brand-gold/30">
                      <item.icon className="text-brand-gold w-10 h-10 drop-shadow-lg" />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/5 transition-all -translate-y-2 group-hover:translate-y-0 text-white cursor-pointer">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  
                  <h5 className="text-sm font-bold text-brand-gold/80 uppercase tracking-widest mb-2">{item.subtitle}</h5>
                  <h4 className="text-3xl font-bold text-white mb-6 tracking-tight">{item.title}</h4>
                  <p className="text-white/60 text-lg leading-relaxed group-hover:text-white/80 transition-colors font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
