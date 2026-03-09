import type { Metadata } from "next";
import { plusJakarta, inter } from "@/lib/fonts";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Citerra Campus Immobilier | Opérateur immobilier des campus",
  description:
    "Citerra Campus, opérateur immobilier spécialisé dans les campus d'enseignement supérieur. Développement de campus, résidences étudiantes, stratégie territoriale.",
  keywords: [
    "immobilier campus",
    "campus enseignement supérieur",
    "résidences étudiantes",
    "co-schooling",
    "citerra campus",
    "développement campus",
    "stratégie territoriale",
  ],
  openGraph: {
    title: "Citerra Campus Immobilier",
    description:
      "L'opérateur immobilier des campus d'enseignement supérieur",
    locale: "fr_FR",
    type: "website",
    siteName: "Citerra Campus Immobilier",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${inter.variable} antialiased`}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
