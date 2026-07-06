import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionLandingPage from "@/components/SolutionLandingPage";
import ContactFormCompactSection from "@/components/ContactFormCompactSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "KI-Telefonassistent | ChorAI",
  description: "KI-Telefonassistent – Anrufe annehmen, Anliegen sortieren, Termine vorbereiten.",
  alternates: {
    canonical: "/loesungen/ki-telefonassistent",
  },
};

export default function KiTelefonassistentPage() {
  return (
    <>
      <Navbar />
      <SolutionLandingPage
        heroTitle="KI-Telefonassistent"
        heroSubtitle="Nie wieder verpasste Anrufe: Der Assistent nimmt Gespräche an, stellt Rückfragen und"
        heroHighlight="fasst alles sauber zusammen"
        introTitlePrefix="Sie bleiben "
        introTitleHighlight="im Flow"
        introTitleSuffix=" – das Telefon trotzdem unter Kontrolle."
        introText={[
          "Wenn im Betrieb gerade gearbeitet wird, klingelt das Telefon oft „nebenbei“. Genau dann gehen Anrufe verloren oder Infos fehlen später.",
          "Ein Telefonassistent kann Anrufe annehmen, das Anliegen erfassen (z.B. Wartung, Störung, Angebot), Rückfragen stellen und alles strukturiert an Sie weitergeben.",
          "Sie bekommen am Ende nicht nur „Bitte zurückrufen“, sondern: Name, Adresse, Problem, gewünschtes Zeitfenster – plus eine saubere Zusammenfassung fürs Team.",
        ]}
        programTitle="Telefon-Flow"
        programSteps={[
          {
            title: "Anliegen-Kategorien",
            description: "Wir definieren typische Gründe für Anrufe und die passenden Rückfragen dazu.",
          },
          {
            title: "Übergabe-Regeln",
            description: "Bei Notfällen sofort zu Ihnen – sonst sauber als Ticket/Anfrage mit allen Details.",
          },
          {
            title: "Kalender & Nacharbeit",
            description: "Optional: Terminvorschläge, Erinnerungen und Zusammenfassung fürs Team.",
          },
        ]}
        benefitsTitle="Das bringt’s"
        benefits={[
          { title: "Keine verpassten Anrufe", description: "Auch außerhalb der Stoßzeiten wird aufgenommen." },
          { title: "Bessere Vorbereitung", description: "Sie wissen vorab, worum es geht und was gebraucht wird." },
          { title: "Weniger Stress", description: "Telefon stört weniger – Infos sind trotzdem da." },
          { title: "Saubere Doku", description: "Jeder Anruf landet als strukturierte Notiz/Ticket." },
        ]}
        imageSrc="/loesungen/ki-telefonassistent.svg"
        ctaLabel="Telefonassistent planen"
        ctaHref="#kontakt"
      />
      <FAQSection
        title="Häufig gefragt"
        items={[
          {
            question: "Kostet der KI-Telefonassistent monatlich, oder einmalig?",
            answer:
              "Es gibt beide Modelle: Manche Kunden zahlen monatlich für die Telefon-Nummer und die KI-Verarbeitung, andere zahlen eine einmalige Einrichtung plus Kosten pro Minute. Das hängt von Ihrem Anrufvolumen ab.",
          },
          {
            question: "Können Kunden den Assistenten vom Menschen unterscheiden?",
            answer:
              "Das hängt vom Setup ab. Mit modernen TTS-Systemen klingt es heute sehr natürlich – viele Kunden bemerken nicht sofort, dass sie mit einer KI sprechen. Transparent zu sein ist eine gute Idee.",
          },
          {
            question: "Was passiert bei Notfällen? Kann der Assistent sofort eskalieren?",
            answer:
              "Ja. Sie definieren Notfall-Begriffe (z.B. Wasser im Keller, Brand) und der Assistent übergibt sofort an einen Menschen oder die Feuerwehr – je nach Ihren Regeln.",
          },
          {
            question: "Welche Telefon-Nummer nutzen wir?",
            answer:
              "Ihr besteht mehrere Optionen: eine neue Nummer nur für den Assistenten, Ihre bestehende Nummer (mit Zusatz-Route) oder beides. Wir besprechen das bei der Planung.",
          },
          {
            question: "Wie gut ist die Spracherkennung bei Akzenten oder schlechtem Sound?",
            answer:
              "Modern KI-Spracherkennung ist robust für die meisten Akzente und mittelmäßigen Verbindungen. Bei sehr schlechtem Sound oder sehr seltenem Dialekt kann es zu Missverständnissen kommen – dafür hat der Assistent Rückfragen-Mechanismen.",
          },
          {
            question: "Brauchen wir eine bestimmte Telefonanlage?",
            answer:
              "Nein. Der Assistent kann an jede moderne Anlage oder Telefonanbieter angebunden werden. Wir klären die technischen Details vor der Umsetzung.",
          },
        ]}
      />
      <ContactFormCompactSection />
      <Footer />
    </>
  );
}

