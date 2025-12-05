import Link from "next/link";

export const metadata = {
  title: "Allgemeine Geschäftsbedingungen - ChorAI",
  description: "AGB der ChorAI",
};

export default function AGB() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-slate-100">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen der ChorAI, Margarita Chorow, Schulbrink 18, 31675 Bückeburg (nachfolgend &quot;Anbieter&quot; genannt) im Bereich der Automatisierung von Geschäftsprozessen auf Kundeninfrastruktur.
            </p>
            <p>
              Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">2. Vertragsgegenstand</h2>
            <p>
              Der Anbieter erbringt Managed Automation Services auf der Infrastruktur des Kunden. Die Leistungen umfassen insbesondere:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Setup und Konfiguration von Automatisierungslösungen</li>
              <li>Betrieb und Wartung der Automatisierungssysteme</li>
              <li>Monitoring und Support</li>
              <li>Entwicklung und Anpassung von Workflows</li>
            </ul>
            <p className="mt-4">
              Die konkreten Leistungen ergeben sich aus dem jeweiligen Vertrag oder Angebot.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">3. Vertragsschluss</h2>
            <p>
              Ein Vertrag kommt durch die schriftliche Bestätigung des Anbieters oder durch die Ausführung der Leistung zustande. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">4. Leistungen des Anbieters</h2>
            <p>
              Der Anbieter erbringt die vereinbarten Leistungen mit der gebotenen Sorgfalt und nach den Regeln der Technik. Der Anbieter ist berechtigt, zur Erfüllung seiner Verpflichtungen Dritte einzuschalten.
            </p>
            <p>
              Der Anbieter erbringt die Leistungen auf der Infrastruktur des Kunden. Der Kunde stellt die erforderliche Infrastruktur (Server, Netzwerk, Docker-Umgebung) zur Verfügung und gewährleistet deren Verfügbarkeit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">5. Pflichten des Kunden</h2>
            <p>
              Der Kunde ist verpflichtet:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>alle für die Leistungserbringung erforderlichen Informationen vollständig und rechtzeitig zur Verfügung zu stellen</li>
              <li>die erforderliche Infrastruktur bereitzustellen und deren Verfügbarkeit sicherzustellen</li>
              <li>Zugangsdaten und Berechtigungen zu erteilen, soweit für die Leistungserbringung erforderlich</li>
              <li>die vereinbarten Zahlungen fristgerecht zu leisten</li>
              <li>bei Störungen unverzüglich zu informieren</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">6. Preise und Zahlung</h2>
            <p>
              Alle Preise verstehen sich in Euro zuzüglich der gesetzlichen Mehrwertsteuer. Gemäß § 19 UStG wird keine Umsatzsteuer berechnet, da der Anbieter als Kleinunternehmer tätig ist.
            </p>
            <p>
              Die Preise setzen sich zusammen aus:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>einmaligen Setup-Kosten</li>
              <li>monatlichen Betriebskosten</li>
            </ul>
            <p className="mt-4">
              Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">7. Laufzeit und Kündigung</h2>
            <p>
              Die Laufzeit des Vertrags ergibt sich aus dem jeweiligen Vertrag. Sofern nichts anderes vereinbart ist, verlängert sich der Vertrag automatisch um jeweils ein Jahr, wenn er nicht mit einer Frist von drei Monaten zum Ende der Laufzeit gekündigt wird.
            </p>
            <p>
              Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor, wenn eine Partei trotz Abmahnung mit angemessener Frist wesentliche Vertragspflichten verletzt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">8. Gewährleistung</h2>
            <p>
              Der Anbieter haftet für Mängel der Leistung nach den gesetzlichen Bestimmungen. Die Gewährleistungsfrist beträgt 12 Monate ab Ablieferung der Leistung.
            </p>
            <p>
              Der Anbieter haftet nicht für Schäden, die auf fehlerhaften oder unvollständigen Angaben des Kunden, auf unsachgemäßer Nutzung oder auf Änderungen der Leistung durch den Kunden oder Dritte beruhen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">9. Haftung</h2>
            <p>
              Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach Maßgabe des Produkthaftungsgesetzes.
            </p>
            <p>
              Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung einer wesentlichen Vertragspflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf (Kardinalpflicht). In diesem Fall ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
            </p>
            <p>
              Die vorstehenden Haftungsbeschränkungen gelten nicht bei Verletzung von Leben, Körper oder Gesundheit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">10. Datenschutz</h2>
            <p>
              Der Anbieter verarbeitet personenbezogene Daten des Kunden nur im Rahmen der gesetzlichen Bestimmungen und der Datenschutzerklärung. Der Kunde bleibt für die Daten auf seiner Infrastruktur verantwortlich und behält die Datenhoheit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">11. Vertraulichkeit</h2>
            <p>
              Beide Parteien verpflichten sich, alle ihnen im Rahmen der Vertragsbeziehung bekannt gewordenen Geschäfts- und Betriebsgeheimnisse sowie sonstige vertrauliche Informationen des jeweils anderen geheim zu halten und nicht an Dritte weiterzugeben. Diese Verpflichtung besteht auch nach Beendigung des Vertrags fort.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-100">12. Schlussbestimmungen</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p>
              Erfüllungsort und Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, soweit der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist, der Sitz des Anbieters.
            </p>
            <p>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. Die unwirksame Bestimmung soll durch eine wirksame ersetzt werden, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
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


