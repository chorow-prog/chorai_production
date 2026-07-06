import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionLandingPage from "@/components/SolutionLandingPage";
import ContactFormCompactSection from "@/components/ContactFormCompactSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "KI-Beratung | ChorAI",
  description: "KI-Beratung für Handwerk & KMU – verständlich, praxisnah, ohne Buzzwords.",
  alternates: {
    canonical: "/loesungen/ki-beratung",
  },
};

export default function KiBeratungPage() {
  return (
    <>
      <Navbar />
      <SolutionLandingPage
        heroTitle="KI-Beratung"
        heroSubtitle="Wir zeigen Ihnen verständlich und praxisnah, wo"
        heroHighlight="KI im Handwerk"
        introTitlePrefix="Wir finden Ihr "
        introTitleHighlight="KI-Potenzial"
        introTitleSuffix=" – ohne Buzzwords."
        introText={[
          "Viele Betriebe hören überall „KI“ – aber im Alltag zählt nur, ob es Ihnen Zeit spart. Wir starten deshalb nicht mit Technik, sondern mit Ihren echten Abläufen: Anfrage, Angebot, Termin, Rechnung, Nachkalkulation.",
          "Gemeinsam finden wir 2–3 Use-Cases, die schnell Wirkung zeigen. Typisch sind z.B. automatische Vorqualifizierung von Anfragen, Zusammenfassen von Kundeninfos oder das Erstellen von Texten aus Stichpunkten (ohne Copy/Paste).",
          "Sie erhalten einen klaren Fahrplan: Was wir zuerst umsetzen, welche Daten dafür nötig sind, welche Risiken es gibt (DSGVO) – und wie Sie intern das Thema sauber betreiben.",
        ]}
        programTitle="So läuft die Beratung ab"
        programSteps={[
          {
            title: "Kurz-Interview (Ist-Zustand)",
            description:
              "Wir klären Ziele, vorhandene Tools (E-Mail, Telefon, Kalender, Handwerker-Software) und die größten Zeitfresser im Büro.",
          },
          {
            title: "Prozess- & Datencheck",
            description:
              "Wir prüfen: Welche Informationen fehlen oft? Wo entstehen Rückfragen? Welche Daten sind sauber erfasst – und was sollte zuerst verbessert werden?",
          },
          {
            title: "Konzept mit Quick Wins",
            description:
              "Sie bekommen Prioritäten, Aufwand/Nutzen und den nächsten konkreten Schritt. Optional planen wir direkt die Umsetzung (inkl. Förderung).",
          },
        ]}
        benefitsTitle="Was Sie am Ende in der Hand haben"
        benefits={[
          { title: "Konkrete Use-Cases", description: "2–3 Ideen, die zu Ihrem Betrieb passen – mit klarer Priorität." },
          { title: "Realistische Roadmap", description: "Was zuerst, was später – inkl. Aufwand und grobem Kostenrahmen." },
          { title: "DSGVO-Check", description: "Saubere Rollen, Datenquellen und Grenzen – damit es sicher bleibt." },
          { title: "Nächster Schritt", description: "Sie wissen genau, was als Nächstes zu tun ist – ohne Rätselraten." },
        ]}
        imageSrc="/loesungen/ki-beratung.svg"
        ctaLabel="Jetzt starten"
        ctaHref="#kontakt"
      />
      <FAQSection
        title="Häufig gefragt"
        items={[
          {
            question: "Kostet die KI-Beratung extra, oder ist sie Teil der Umsetzung?",
            answer:
              "Die Beratung ist ein eigenständiger Service. Manche Kunden möchten zuerst nur wissen, wo Potenzial liegt – andere nutzen sie als Grundlage für die Umsetzung. Die Kosten sind überschaubar und sparen später viel Zeit bei der Umsetzung.",
          },
          {
            question: "Wie lange dauert die Beratung?",
            answer:
              "Typischerweise 2–4 Wochen vom Kick-off bis zum Konzept. Das Interview dauert etwa 1–2 Tage (verteilt), der Datencheck und die Konzept-Erstellung brauchen dann noch 1–2 Wochen.",
          },
          {
            question: "Brauchen wir technische Kenntnisse für die Beratung?",
            answer:
              "Nein. Wir sprechen in Ihren Begriffen (Anfrage, Angebot, Rechnung), nicht in Technik. Was Sie mitbringen sollten: Offenheit für Veränderungen und 1–2 Stunden Zeit für ein Interview.",
          },
          {
            question: "Was, wenn die Beratung zeigt, dass wir noch nicht bereit sind?",
            answer:
              "Das kann passieren. Manchmal müssen zuerst Daten aufgeräumt werden oder Prozesse klarer werden. Das nennen wir dann ehrlich an – mit konkreten Schritten zum Aufräumen.",
          },
          {
            question: "Können wir die Beratung selbst umsetzen, oder brauchen wir euch dafür?",
            answer:
              "Beides ist möglich. Viele Kunden setzen danach selbst um oder arbeiten mit einem anderen Dienstleister. Wir dokumentieren so, dass das funktioniert. Optional bieten wir die Umsetzung auch selbst an.",
          },
        ]}
      />
      <ContactFormCompactSection />
      <Footer />
    </>
  );
}

