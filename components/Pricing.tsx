"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Der Vertriebs-Filter",
    price: "149€",
    setup: "1.490€",
    period: "mtl.",
    features: [
      "Spam-Schutz & Lead-Liste",
      "Automatische E-Mail-Filterung",
      "Lead-Qualifizierung",
      "Basis-Reporting",
    ],
    highlight: false,
  },
  {
    name: "Business Intelligenz",
    price: "399€",
    setup: "3.900€",
    period: "mtl.",
    features: [
      "RAG-Chatbot Integration",
      "Workflow-Automation",
      "Dokumentenanalyse",
      "Erweiterte Analytics",
      "Prioritätssupport",
    ],
    highlight: true,
  },
  {
    name: "KI-Ökosystem",
    price: "890€",
    setup: "8.500€",
    period: "mtl.",
    features: [
      "Voice-AI Integration",
      "Full-Service Automation",
      "Multi-Channel Support",
      "Dedicated Account Manager",
      "24/7 Monitoring",
      "Custom Development",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="preise" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            Transparente Preise
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Wählen Sie das Paket, das zu Ihrem Unternehmen passt
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative rounded-lg p-8 ${
                plan.highlight
                  ? "bg-gradient-to-br from-[#3b82f6]/20 to-[#3b82f6]/5 border-2 border-[#3b82f6] scale-105"
                  : "bg-slate-900/50 border border-slate-800"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#3b82f6] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Empfohlen
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-slate-100">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#3b82f6]">{plan.price}</span>
                <span className="text-slate-400 ml-2">/{plan.period}</span>
              </div>
              <div className="mb-6">
                <span className="text-slate-400">Setup: </span>
                <span className="text-slate-300 font-semibold">{plan.setup}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-[#3b82f6] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className={`w-full py-3 rounded-md font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-[#3b82f6] text-white hover:bg-[#2563eb]"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Jetzt starten
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


