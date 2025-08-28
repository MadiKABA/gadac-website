import Footer from "./components/public/Footer";
import Header from "./components/public/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GADAC | Groupe ADA Consulting",
  description:
    "Groupe ADA Consulting accompagne entreprises et institutions en stratégie, études, digital, formation et développement durable pour une croissance inclusive et durable.",
  keywords: [
    "GADAC",
    "Groupe ADA Consulting",
    "conseil stratégie",
    "études ingénierie",
    "transformation digitale",
    "formation",
    "développement durable",
    "RSE",
    "consulting Sénégal",
    "cabinet de conseil Afrique",
  ],
  authors: [{ name: "Groupe ADA Consulting", url: "https://gadac.com" }],
  metadataBase: new URL("https://gadac.com"), // 👈 remplace par ton domaine
  alternates: {
    canonical: "https://gadac.com",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://gadac.com",
    siteName: "GADAC | Groupe ADA Consulting",
    title: "GADAC | Groupe ADA Consulting",
    description:
      "Expertise en conseil, études, digital, formation et développement durable en Afrique.",
    images: [
      {
        url: "https://gadac.com/og-image.jpg", // 👈 mets une image 1200x630
        width: 1200,
        height: 630,
        alt: "GADAC - Groupe ADA Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gadac", // 👈 si tu as un compte Twitter
    creator: "@gadac",
    title: "GADAC | Groupe ADA Consulting",
    description:
      "Cabinet de conseil en stratégie, digital, études, formation et RSE.",
    images: ["https://gadac.com/og-image.jpg"], // même que l’OG
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 dark:bg-gray-950">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
