"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { BarChart3 } from "lucide-react";

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = to;
    if (start === end) return;

    let totalMilSecDur = duration * 1000;
    let incrementTime = (totalMilSecDur / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [to, duration, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Impact() {
  const stats = [
    { label: "Digital Jobs Facilitated", value: 850, max: 1000, suffix: "+" },
    { label: "Youths Trained in Tech", value: 2400, max: 3000, suffix: "+" },
    { label: "Tech Hubs & Workspaces", value: 4, max: 5, suffix: "" },
    { label: "Student Support Grants", value: 320, max: 400, suffix: "+" },
  ];

  return (
    <section id="impact" className="py-40 relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888078-43d810842a5a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white pointer-events-none" />

      {/* Decorative Grid SVG */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #115e59 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <BarChart3 className="text-brand-gold w-5 h-5" />
              <h2 className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold">Proven Track Record</h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Execution Over <br /><span className="text-foreground/20 italic font-light">Rhetoric</span>
            </h3>
            <p className="text-foreground/60 text-lg md:text-xl font-medium leading-relaxed">
              We are building a future where the youth of Etsako Central lead in the digital economy. Through specialized training, tech infrastructure, and direct workspace empowerment, we are transforming potential into world-class excellence.
            </p>
          </div>
          
          <div className="hidden lg:block pb-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-24 h-24 rounded-full border border-brand-gold/30 flex items-center justify-center relative spin-slow"
            >
              <div className="absolute inset-2 border border-dashed border-brand-gold/40 rounded-full" />
              <div className="w-12 h-1 bg-brand-gold blur-[2px] rotate-45" />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="glass p-8 rounded-[30px] border border-foreground/5 relative group overflow-hidden shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter flex items-end">
                  <span className="bg-gradient-to-br from-foreground to-brand-gold text-transparent bg-clip-text drop-shadow-sm">
                    <Counter to={stat.value} duration={2.5} />
                  </span>
                  <span className="text-brand-gold text-4xl">{stat.suffix}</span>
                </div>

                <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden mb-6 filter drop-shadow-sm">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(stat.value / stat.max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-brand-green to-brand-gold rounded-full"
                  />
                </div>

                <div className="text-sm md:text-base font-bold text-foreground/80 uppercase tracking-widest leading-snug">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
