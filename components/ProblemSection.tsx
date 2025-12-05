"use client";

import { motion } from "framer-motion";
import { Clock, Mail, FileText } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Zeitverschwendung",
    description: "Routinetätigkeiten binden wertvolle Arbeitszeit, die für strategische Aufgaben fehlt.",
  },
  {
    icon: Mail,
    title: "E-Mail-Overload",
    description: "Hunderte von E-Mails täglich, Spam und wichtige Nachrichten gehen unter.",
  },
  {
    icon: FileText,
    title: "Manuelle Prozesse",
    description: "Wiederholende Aufgaben, die automatisiert werden könnten, werden manuell erledigt.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            Kennen Sie das Problem?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Als Geschäftsführer verbringen Sie zu viel Zeit mit Aufgaben, die ein Assistent übernehmen könnte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-lg p-8"
              >
                <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-100">{problem.title}</h3>
                <p className="text-slate-400">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


