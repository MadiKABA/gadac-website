import Header from "./components/public/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GADAC | Groupe ADA Consulting",
  description: "Site officiel du Groupe ADA Consulting",
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
        <main>{children}</main>
      </body>
    </html>
  );
}
