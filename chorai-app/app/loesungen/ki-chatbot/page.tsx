import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionLandingPage from "@/components/SolutionLandingPage";
import ContactFormCompactSection from "@/components/ContactFormCompactSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "KI-Chatbot | ChorAI",
  description: "KI-Chatbot für Ihre Website – beantwortet Fragen, sammelt Infos und qualifiziert Anfragen.",
  alternates: {
    canonical: "/loesungen/ki-chatbot",
  },
};

export default function KiChatbotPage() {
  return (
    <>
      <Navbar />
      <SolutionLandingPage
        heroTitle="KI-Chatbot"
        heroSubtitle="Mehr Anfragen – weniger Unterbrechung: Ein Chatbot beantwortet Standardfragen und sammelt Infos, bevor"
        heroHighlight="Sie ans Telefon müssen"
        introTitlePrefix="Mehr Leads, weniger "
        introTitleHighlight="Unterbrechungen"
        introTitleSuffix="."
        introText={[
          "Viele Website-Anfragen scheitern an Kleinigkeiten: Öffnungszeiten, Anfahrt, Leistungen, „Was kostet das ungefähr?“. Ein Chatbot beantwortet diese Fragen sofort – auch abends.",
          "Wenn es konkret wird, fragt der Bot gezielt nach: Welche Leistung? Wo? Bis wann? Gibt es Fotos oder Maße? So bekommen Sie strukturierte Infos statt unvollständiger Nachrichten.",
          "Sie entscheiden, wann der Chatbot an einen Menschen übergibt – z.B. bei Sonderfällen oder wichtigen Bestandskunden.",
        ]}
        programTitle="Chatbot-Setup"
        programSteps={[
          { title: "Fragenkatalog", description: "Wir sammeln Ihre häufigsten Fragen und bauen klare Antworten in Ihrer Sprache." },
          {
            title: "Lead-Qualifizierung",
            description: "Der Bot stellt die richtigen Rückfragen, damit Sie sofort wissen, worum es geht.",
          },
          {
            title: "Übergabe & Tracking",
            description: "Anfragen landen da, wo Sie arbeiten: E-Mail, CRM oder Kalender – inklusive Protokoll.",
          },
        ]}
        benefitsTitle="Das verbessert sich"
        benefits={[
          { title: "Mehr Leads", description: "Besucher bekommen sofort Hilfe und bleiben eher dran." },
          { title: "Bessere Infos", description: "Strukturierte Daten statt Freitext-Chaos." },
          { title: "Weniger Unterbrechung", description: "Standardfragen laufen automatisch." },
          { title: "Klare Übergabe", description: "Wenn es wichtig wird, übernehmen Sie." },
        ]}
        imageSrc="/loesungen/ki-chatbot.svg"
        ctaLabel="Chatbot prüfen"
        ctaHref="#kontakt"
      />
      <FAQSection
        title="Häufig gefragt"
        items={[
          {
            question: "Wie lange dauert die Einrichtung eines Chatbots?",
            answer:
              "Das hängt vom Umfang ab. Ein einfacher Bot mit 10–20 häufigen Fragen ist meist in 2–4 Wochen live. Komplexere Fälle mit vielen Verzweigungen dauern länger. Wir starten mit einem Fragenkatalog, den wir gemeinsam mit Ihnen erarbeiten.",
          },
          {
            question: "Welche Informationen braucht der Bot, um gut zu funktionieren?",
            answer:
              "Der Bot braucht Klarheit über Ihre Leistungen, Preise (oder Preisspannen), Öffnungszeiten, Kontakt und Prozesse. Je strukturierter Ihre Informationen, desto besser die Antworten. Wir unterstützen Sie bei der Sammlung.",
          },
          {
            question: "Kann der Bot an unser CRM oder Kalender angebunden werden?",
            answer:
              "Ja, das ist häufig genau der Punkt. Der Bot kann qualifizierte Anfragen direkt in Ihr CRM schreiben, Termine in Ihren Kalender eintragen oder E-Mails versenden. So entfällt manuelle Doppelarbeit.",
          },
          {
            question: "Was kostet ein KI-Chatbot?",
            answer:
              "Die Kosten hängen von Komplexität und Integration ab. Ein einfacher Q&A-Bot kostet weniger als einer, der in mehrere Systeme schreibt. Wir kalkulieren transparent und zeigen den ROI auf – meist spart die Zeitersparnis die Kosten schnell wieder ein.",
          },
          {
            question: "Was passiert, wenn der Bot eine Frage nicht beantworten kann?",
            answer:
              "Das ist normal und sollte so sein. Der Bot kann konfiguriert werden, dass er erklärt, dass die Frage außerhalb seines Wissens liegt, und die Anfrage an einen Menschen eskaliert – mit vollständigem Kontext aus dem Gespräch.",
          },
          {
            question: "Brauchen wir technische Kenntnisse, um den Bot zu verwalten?",
            answer:
              "Nein. Wir bauen die Verwaltung so, dass Sie Fragen und Antworten selbst aktualisieren können – meist über eine einfache Web-Oberfläche, ohne Code zu schreiben.",
          },
        ]}
      />
      <ContactFormCompactSection />
      <Footer />
    </>
  );
}

