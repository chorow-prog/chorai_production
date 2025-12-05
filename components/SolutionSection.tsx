"use client";

import { motion } from "framer-motion";
import { Bot, Database, Lock, Zap } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "KI-gestützte Automation",
    description: "Intelligente Workflows, die Ihre Prozesse verstehen und optimieren.",
  },
  {
    icon: Database,
    title: "Ihre Infrastruktur",
    description: "Alles läuft auf Ihren Servern. Sie behalten die volle Kontrolle über Ihre Daten.",
  },
  {
    icon: Lock,
    title: "100% Datenschutz",
    description: "DSGVO-konform, keine Cloud-Zwänge. Ihre Daten bleiben bei Ihnen.",
  },
  {
    icon: Zap,
    title: "Sofort einsatzbereit",
    description: "Managed Service - wir kümmern uns um Setup, Wartung und Updates.",
  },
];

export default function SolutionSection() {
  return (
    <section id="loesung" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            Die Lösung: ChorAI
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Managed Automation auf Ihrer Infrastruktur. Sie behalten die Datenhoheit, wir übernehmen die Arbeit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#3b82f6]/10 to-transparent border border-[#3b82f6]/20 rounded-lg p-8"
              >
                <div className="w-16 h-16 bg-[#3b82f6]/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-[#3b82f6]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-100">{solution.title}</h3>
                <p className="text-slate-400">{solution.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


