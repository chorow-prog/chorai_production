"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a1525]/95 backdrop-blur-sm border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-mono font-bold text-slate-300">
              CHOR
              <span className="text-[#3b82f6]">AI</span>
              <span className="cursor-blink text-[#3b82f6]">_</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-slate-300 hover:text-[#3b82f6] transition-colors"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("loesung")}
              className="text-slate-300 hover:text-[#3b82f6] transition-colors"
            >
              Lösung
            </button>
            <button
              onClick={() => scrollToSection("preise")}
              className="text-slate-300 hover:text-[#3b82f6] transition-colors"
            >
              Preise
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="bg-[#3b82f6] text-white px-6 py-2 rounded-md hover:bg-[#2563eb] transition-colors font-medium"
            >
              Analyse anfordern
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => scrollToSection("kontakt")}
              className="bg-[#3b82f6] text-white px-4 py-2 rounded-md hover:bg-[#2563eb] transition-colors font-medium text-sm"
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

