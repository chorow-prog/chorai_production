"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise die Formular-Logik stehen
    console.log("Form submitted:", formData);
    alert("Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="kontakt" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            Kostenlose Analyse anfordern
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam herausfinden, wie wir Ihre Prozesse automatisieren können
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-100">Kontaktinformationen</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#3b82f6] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-300 font-semibold">Adresse</p>
                  <p className="text-slate-400">Schulbrink 18</p>
                  <p className="text-slate-400">31675 Bückeburg</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#3b82f6] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-300 font-semibold">E-Mail</p>
                  <a href="mailto:info@chorai.de" className="text-[#3b82f6] hover:underline">
                    info@chorai.de
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-slate-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-slate-300 mb-2">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-slate-300 mb-2">
                Unternehmen
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-slate-300 mb-2">
                Nachricht *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#3b82f6] text-white py-3 rounded-md font-semibold hover:bg-[#2563eb] transition-colors"
            >
              Analyse anfordern
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}


