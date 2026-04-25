"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Vision", href: "#vision" },
    { name: "Impact", href: "#impact" },
    { name: "Why Hon. Mathias", href: "#why-choose" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="relative z-10 group flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-gold-light to-brand-gold bg-clip-text text-transparent">
              Hon. Mathias Aliu
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 glass px-8 py-3 rounded-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex relative z-10">
            <Link
              href="#join"
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-black px-6 py-3 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(212,180,117,0.3)] hover:shadow-[0_0_30px_rgba(212,180,117,0.5)] transform hover:scale-105"
            >
              Join the Movement
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-10 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white/90 hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Link
                href="#join"
                onClick={() => setIsOpen(false)}
                className="bg-brand-gold text-brand-black px-8 py-4 rounded-full font-bold text-lg mt-8 inline-block shadow-[0_0_30px_rgba(212,180,117,0.3)]"
              >
                Join the Movement
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
