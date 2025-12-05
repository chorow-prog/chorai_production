import Link from "next/link";

export const metadata = {
  title: "Impressum - ChorAI",
  description: "Impressum der ChorAI",
};

export default function Impressum() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-slate-100">Impressum</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">Angaben gemäß § 5 TMG</h2>
            <p>
              ChorAI
              <br />
              Margarita Chorow
              <br />
              Schulbrink 18
              <br />
              31675 Bückeburg
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:info@chorai.de" className="text-[#3b82f6] hover:underline">info@chorai.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              Kleinunternehmer gemäß § 19 UStG (Keine USt-Berechnung)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Margarita Chorow
              <br />
              Schulbrink 18
              <br />
              31675 Bückeburg
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">Haftungsausschluss</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-slate-100 mt-6">Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-slate-100 mt-6">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-slate-100 mt-6">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-[#3b82f6] hover:underline">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}


