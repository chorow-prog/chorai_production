import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionLandingPage from "@/components/SolutionLandingPage";
import ContactFormCompactSection from "@/components/ContactFormCompactSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Prozessautomatisierung | ChorAI",
  description: "Prozessautomatisierung für Handwerk & KMU – weniger Büro, mehr Zeit fürs Kerngeschäft.",
  alternates: {
    canonical: "/loesungen/prozessautomatisierung",
  },
};

export default function ProzessautomatisierungPage() {
  return (
    <>
      <Navbar />
      <SolutionLandingPage
        heroTitle="Prozessautomatisierung"
        heroSubtitle="Weniger Copy/Paste, weniger Rückfragen: Wir bauen Abläufe, die automatisch laufen – von Anfrage bis Rechnung, optional mit"
        heroHighlight="KI-Unterstützung"
        introTitlePrefix="Ihr Büro wird schneller – "
        introTitleHighlight="ohne zusätzliches Personal"
        introTitleSuffix="."
        introText={[
          "Wenn Anfragen, Angebote, Terminabsprachen und Rechnungen ständig manuell hin- und hergeschoben werden, kostet das jeden Tag Fokus. Automatisierung heißt: einmal sauber bauen – dann läuft es zuverlässig im Hintergrund.",
          "Wir verbinden Ihre bestehenden Systeme (E-Mail, Kalender, CRM/ERP, Handwerker-Software). Daten werden automatisch übernommen, geprüft und an die nächste Stelle weitergegeben.",
          "So entsteht ein klarer Ablauf: weniger Doppelarbeit, weniger Zahlendreher, weniger vergessene Schritte – und jederzeit nachvollziehbar, was passiert ist.",
        ]}
        programTitle="Unser Vorgehen"
        programSteps={[
          {
            title: "Workflow auswählen",
            description:
              "Wir starten mit 1–2 Abläufen, die sofort Wirkung zeigen (z.B. Anfrage → Angebot → Auftrag → Rechnung).",
          },
          {
            title: "Umsetzen & integrieren",
            description:
              "Wir bauen den Ablauf mit klaren Regeln: Daten holen, prüfen, weiterleiten, dokumentieren – passend zu Ihren Tools.",
          },
          {
            title: "Testen & stabilisieren",
            description:
              "Sie testen mit echten Fällen. Danach optimieren wir Details, bis es im Alltag zuverlässig läuft.",
          },
        ]}
        benefitsTitle="Was Sie typischerweise gewinnen"
        benefits={[
          { title: "Weniger Tipp-Arbeit", description: "Daten werden einmal erfasst und automatisch weitergenutzt." },
          { title: "Weniger Fehler", description: "Validierung verhindert Zahlendreher und vergessene Schritte." },
          { title: "Schnellere Reaktion", description: "Kunden bekommen schneller Rückmeldung und Termine." },
          { title: "Mehr Überblick", description: "Protokolle/Logs sorgen dafür, dass nichts untergeht." },
        ]}
        imageSrc="/loesungen/prozessautomatisierung.svg"
        ctaLabel="Workflow-Idee prüfen"
        ctaHref="#kontakt"
      />
      <FAQSection
        title="Häufig gefragt"
        items={[
          {
            question: "Mit welchen Systemen könnt ihr integrieren?",
            answer:
              "Wir verbinden die meisten verbreiteten Systeme: E-Mail, Kalender, CRM (Salesforce, HubSpot, Pipedrive), ERP, Buchhaltungssoftware, Handwerker-Apps. Wenn Ihr System eine API oder SMTP/REST-Schnittstelle hat, können wir eine Brücke bauen.",
          },
          {
            question: "Wie lange braucht eine typische Automatisierung?",
            answer:
              "Ein einfacher Workflow (z.B. Anfrage → Angebot → Rechnung) dauert 3–6 Wochen. Komplexere Abläufe mit mehreren Bedingungen oder Systemen können länger dauern. Wir starten mit einem Piloten, der schnell Wirkung zeigt.",
          },
          {
            question: "Was passiert, wenn der Automatisierungsdienst ausfällt?",
            answer:
              "Alle Automatisierungen haben Fehlerbehandlung und Fallbacks eingebaut. Wenn ein System nicht erreichbar ist, werden Anfragen gepuffert und später wiederholt oder Sie bekommen eine Warnung, damit Sie manuell eingreifen können.",
          },
          {
            question: "Können wir die Automatisierung später ändern oder ausbauen?",
            answer:
              "Ja, absolut. Das ist ein Vorteil von gut dokumentierter Automatisierung: Sie können anfangen mit den zwei dringendsten Workflows, später weitere dazunehmen oder ändern. Wir dokumentieren alles so, dass auch andere Entwickler einsteigen können.",
          },
          {
            question: "Brauchen wir eine Person, die die Automatisierung administriert?",
            answer:
              "Nein, aber eine Person sollte die Logs im Auge behalten und bei größeren Änderungen involviert sein. Für die meisten Kunden reicht ein monatlicher Check-in, ob alles läuft.",
          },
          {
            question: "Wie sieht es mit Sicherheit und Datenschutz aus?",
            answer:
              "Daten werden verschlüsselt übertragen, Logs sind geschützt, und Zugriff ist protokolliert. Wir halten DSGVO-Anforderungen ein: Ihre Daten landen nicht bei uns oder dritten, sondern nur in Ihren Systemen. Das dokumentieren wir in einer DPA.",
          },
        ]}
      />
      <ContactFormCompactSection />
      <Footer />
    </>
  );
}

