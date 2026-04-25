"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      title: "Unmatched Integrity",
      desc: "Built on a foundation of trust, zero corruption tolerance, and absolute transparency in all dealings."
    },
    {
      title: "Technological Edge",
      desc: "Leveraging 21st-century digital solutions to solve age-old administrative and economic challenges."
    },
    {
      title: "Deep Empathy",
      desc: "A leader who listens. Policy decisions are driven by the actual needs of the people, not political expediency."
    },
    {
      title: "Strategic Vision",
      desc: "Thinking in decades, not election cycles. Creating sustainable frameworks that outlast single terms."
    }
  ];

  return (
    <section id="why-choose" className="py-32 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold uppercase tracking-[0.2em] text-sm font-bold mb-4"
            >
              The Differentiator
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Why Hon. Mathias Aliu?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg mb-8 leading-relaxed"
            >
              Etsako Central requires a paradigm shift. We can no longer rely on analog thinking in a digital world. Hon. Mathias brings a premium, execution-focused mindset to public office, treating the prosperity of our district with the urgency and precision of a world-class enterprise.
            </motion.p>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors group border border-transparent hover:border-brand-gold/30"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
