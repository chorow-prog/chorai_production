import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionLandingPage from "@/components/SolutionLandingPage";
import ContactFormCompactSection from "@/components/ContactFormCompactSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "KI-Agenten | ChorAI",
  description: "KI-Agenten für Handwerk & KMU – wiederkehrende Aufgaben automatisch erledigen lassen.",
  alternates: {
    canonical: "/loesungen/ki-agenten",
  },
};

export default function KiAgentenPage() {
  return (
    <>
      <Navbar />
      <SolutionLandingPage
        heroTitle="KI-Agenten"
        heroSubtitle="Digitale Helfer, die Anfragen sortieren, fehlende Infos nachholen und"
        heroHighlight="den nächsten Schritt starten"
        introTitlePrefix="Ein Assistent, der "
        introTitleHighlight="mitdenkt"
        introTitleSuffix=" – aber nach Ihren Regeln."
        introText={[
          "Ein KI-Agent ist wie ein sehr fleißiger Kollege im Hintergrund: Er liest eingehende Anfragen, erkennt das Anliegen und startet die passenden Schritte.",
          "Beispiel aus dem Handwerk: Eine Anfrage kommt per E-Mail oder Formular rein. Der Agent prüft, ob Adresse, Fotos und gewünschter Termin enthalten sind – wenn nicht, fragt er automatisch nach.",
          "Das Ergebnis: weniger Ping-Pong, weniger „Bitte nochmal schicken“, und ein deutlich schnellerer Weg vom Erstkontakt bis zum Auftrag.",
        ]}
        programTitle="Agenten-Setup"
        programSteps={[
          {
            title: "Aufgaben & Grenzen",
            description:
              "Wir legen fest, was der Agent darf (und was nicht): z.B. Infos sammeln, Rückfragen stellen, Terminfenster vorschlagen.",
          },
          {
            title: "Wissen & Regeln einbauen",
            description:
              "Wir hinterlegen Ihre Regeln (Anfahrtsgebiet, Leistungen, Zeiten) und bauen sichere Abgrenzungen.",
          },
          {
            title: "Integration",
            description:
              "Der Agent arbeitet direkt in Ihren Kanälen: E-Mail, Formular, CRM, Kalender – je nach Setup.",
          },
        ]}
        benefitsTitle="Vorteile im Alltag"
        benefits={[
          { title: "Schnellere Reaktion", description: "Anfragen werden sofort vorsortiert und beantwortet." },
          { title: "Weniger Rückfragen", description: "Fehlende Infos werden automatisch nachgeholt." },
          { title: "Entlastung im Büro", description: "Routine wird abgefangen – Sie behalten den Überblick." },
          { title: "Klare Grenzen", description: "Der Agent handelt nur innerhalb Ihrer Regeln." },
        ]}
        imageSrc="/loesungen/ki-agenten.svg"
        ctaLabel="Use-Case besprechen"
        ctaHref="#kontakt"
      />
      <FAQSection
        title="Häufig gefragt"
        items={[
          {
            question: "Wie unterscheidet sich ein KI-Agent vom Chatbot?",
            answer:
              "Ein Chatbot beantwortet Fragen, die der Besucher stellt. Ein Agent ist proaktiv: Er liest Anfragen, erkennt Muster, stellt fehlende Infos nach — und startet Prozesse im Hintergrund (Ticketing, Terminbuchung usw.). Ein Agent ist eine Stufe selbstständiger.",
          },
          {
            question: "Was kann der Agent lernen, und was nicht?",
            answer:
              "Der Agent kann Ihre Regeln und Daten nutzen, um besser zu werden. Er kann aber nicht selbstständig neue Aufgaben erfinden – das definiert ihr zusammen. Und er wird nicht künstlicher, je länger er läuft (das ist ein Mythos).",
          },
          {
            question: "Brauchen wir zuerst eine Beratung, oder können wir direkt mit dem Agent starten?",
            answer:
              "Das hängt ab: Wenn Ihre Prozesse (Anfrage → Angebot → Auftrag) klar sind, können wir direkt starten. Wenn noch unklar ist, wo Automatisierung am meisten bringt, lohnt sich zuerst eine Beratung.",
          },
          {
            question: "Was passiert mit Anfragen, die der Agent nicht verarbeiten kann?",
            answer:
              "Davon gibt es immer einige. Der Agent eskaliert diese an einen Kollegen oder Sie – mit allen Infos, die er bis dahin gesammelt hat. Das ist ein normaler Teil des Designs.",
          },
          {
            question: "Wie schnell läuft ein Agent? Gibt es Latenz?",
            answer:
              "Moderner KI-Agenten verarbeiten Anfragen meist in Sekunden bis Minuten. Es gibt minimale Latenz durch API-Aufrufe, aber für Kundensupport ist das akzeptabel. Rückfragen gehen über E-Mail oder Chat, nicht in Echtzeit.",
          },
        ]}
      />
      <ContactFormCompactSection />
      <Footer />
    </>
  );
}

