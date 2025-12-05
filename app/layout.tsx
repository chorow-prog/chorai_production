import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ChorAI - Managed Automation auf Ihrer Infrastruktur",
  description: "Wir automatisieren Ihre Prozesse auf IHRER eigenen Infrastruktur. 100% Datenschutz. 0% Cloud-Zwang.",
  keywords: "Automation, KI, Datenschutz, Docker, Managed Services, Bückeburg",
  authors: [{ name: "Margarita Chorow" }],
  metadataBase: new URL("https://chorai.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ChorAI - Managed Automation",
    description: "Wir automatisieren Ihre Prozesse auf IHRER eigenen Infrastruktur. 100% Datenschutz. 0% Cloud-Zwang.",
    type: "website",
    url: "https://chorai.de",
    siteName: "ChorAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChorAI - Managed Automation",
    description: "Wir automatisieren Ihre Prozesse auf IHRER eigenen Infrastruktur. 100% Datenschutz. 0% Cloud-Zwang.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${jetbrainsMono.variable} antialiased bg-[#0a1525] text-slate-300`}
      >
        {children}
      </body>
    </html>
  );
}
