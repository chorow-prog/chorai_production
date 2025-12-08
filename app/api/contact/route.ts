// app/api/contact/route.ts
export async function POST(request: Request) {
    try {
      const body = await request.json().catch((err) => {
        console.error("JSON parse error:", err);
        return {};
      });
      
      console.log("Received contact form data:", JSON.stringify(body));
      const { name, email, company, message } = body;
  
      // Validierung: Pflichtfelder prüfen
      if (!name || typeof name !== "string" || name.trim().length === 0) {
        console.error("Validation error: Name missing or invalid", { name, type: typeof name });
        return Response.json(
          { error: "Name ist erforderlich" },
          { status: 400 }
        );
      }
  
      if (!email || typeof email !== "string" || email.trim().length === 0) {
        console.error("Validation error: Email missing or invalid", { email, type: typeof email });
        return Response.json(
          { error: "E-Mail-Adresse ist erforderlich" },
          { status: 400 }
        );
      }
  
      if (!message || typeof message !== "string" || message.trim().length === 0) {
        console.error("Validation error: Message missing or invalid", { message, type: typeof message });
        return Response.json(
          { error: "Nachricht ist erforderlich" },
          { status: 400 }
        );
      }
  
      // E-Mail-Format validieren
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return Response.json(
          { error: "Ungültige E-Mail-Adresse" },
          { status: 400 }
        );
      }
  
      // n8n Webhook URL aus Environment-Variable
      const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;
      if (!webhookUrl) {
        console.error("N8N_CONTACT_WEBHOOK_URL nicht in .env konfiguriert");
        return Response.json(
          { error: "Kontakt-Service temporär nicht verfügbar" },
          { status: 500 }
        );
      }
  
      // Payload für n8n zusammenstellen
      const payload = {
        name: name.trim(),
        email: email.trim(),
        company: company ? company.trim() : "",
        message: message.trim(),
        timestamp: new Date().toISOString(),
        source: "contact-form",
      };
  
      // Request an n8n Webhook senden
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      // Fehlerbehandlung
      if (!res.ok) {
        const errorText = await res.text().catch(() => "Unknown error");
        console.error("n8n webhook error:", {
          status: res.status,
          statusText: res.statusText,
          error: errorText,
        });
  
        // Wenn n8n eine HTML-Fehlerseite zurückgibt (z. B. Workflow nicht aktiv)
        if (errorText.includes("<html") || errorText.includes("<!DOCTYPE")) {
          return Response.json(
            {
              error: "Kontakt-Service nicht verfügbar",
              details: "Bitte versuchen Sie es später erneut",
            },
            { status: 503 }
          );
        }
  
        return Response.json(
          {
            error: "Fehler beim Senden der Nachricht",
            details: "Bitte versuchen Sie es später erneut",
          },
          { status: 500 }
        );
      }
  
      // Erfolgreiche Antwort von n8n
      const data = await res.json().catch(() => ({}));
      
      return Response.json(
        {
          success: true,
          message: "Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.",
        },
        { status: 200 }
      );
    } catch (error) {
      // Unerwartete Fehler abfangen
      console.error("Contact API error:", error);
      return Response.json(
        {
          error: "Interner Serverfehler",
          details: error instanceof Error ? error.message : String(error),
        },
        { status: 500 }
      );
    }
  }