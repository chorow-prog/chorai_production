"use client";

import { motion } from "framer-motion";
import { Server, Shield, Zap } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }} />
      </div>

      {/* Abstract Shapes */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-100 leading-tight">
            SIND SIE NOCH GESCHÄFTSFÜHRER
            <br />
            ODER SCHON SEKRETÄR?
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Wir automatisieren Ihre Prozesse auf <span className="text-[#3b82f6] font-semibold">IHRER</span> eigenen Infrastruktur.
            <br />
            <span className="text-[#3b82f6]">100% Datenschutz.</span> <span className="text-slate-500">0% Cloud-Zwang.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-[#3b82f6] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#2563eb] transition-colors shadow-lg shadow-[#3b82f6]/20"
            >
              Kostenlose Analyse anfordern
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("preise")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-[#3b82f6] text-[#3b82f6] px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#3b82f6]/10 transition-colors"
            >
              Preise ansehen
            </motion.button>
          </div>
        </motion.div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#3b82f6]/20 rounded-lg flex items-center justify-center mb-4">
              <Server className="w-8 h-8 text-[#3b82f6]" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Ihre Infrastruktur</h3>
            <p className="text-slate-400">Vollständige Datenhoheit</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#3b82f6]/20 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-[#3b82f6]" />
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Datenschutz</h3>
            <p className="text-slate-400">DSGVO-konform</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#3b82f6]/20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-[#3b82f6]" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Sofort einsatzbereit</h3>
            <p className="text-slate-400">Managed Service</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


