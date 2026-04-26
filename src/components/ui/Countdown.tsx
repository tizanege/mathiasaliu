"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date("2027-01-16T00:00:00").getTime();
  
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Set initial time right away to avoid hydration flicker if possible 
    // (though SSR will have null initially)
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (!timeLeft) return null;

  const timeItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-6 mb-12"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="h-[1px] w-8 bg-brand-gold/30" />
        <span className="text-brand-gold/60 text-[10px] uppercase tracking-[0.3em] font-medium">Countdown to Election</span>
        <div className="h-[1px] w-8 bg-brand-gold/30" />
      </div>
      
      <div className="flex gap-3 md:gap-6">
        {timeItems.map((item, index) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute -inset-1 bg-brand-gold/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative min-w-[70px] md:min-w-[100px] h-20 md:h-28 flex flex-col items-center justify-center rounded-xl glass border border-foreground/5 group-hover:border-brand-gold/30 transition-all duration-500 overflow-hidden shadow-2xl backdrop-blur-2xl">
                {/* Subtle highlight */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-black/[0.02]" />
                
                <span className="text-3xl md:text-5xl font-bold text-foreground tracking-tighter tabular-nums drop-shadow-sm">
                  {String(item.value).padStart(2, '0')}
                </span>
                
                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
              </div>
            </div>
            <span className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold text-brand-gold drop-shadow-md">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
