import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mitchell Sam — Fullstack Software Engineer",
  description:
    "Fullstack Software Engineer based in New York. React, TypeScript, Node.js, AWS. Currently at JPMorgan Chase.",
  openGraph: {
    title: "Mitchell Sam — Fullstack Software Engineer",
    description:
      "Fullstack Software Engineer based in New York. React, TypeScript, Node.js, AWS.",
    url: "https://mitchellsam.com",
    siteName: "Mitchell Sam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitchell Sam — Fullstack Software Engineer",
    description: "Fullstack Software Engineer based in New York.",
  },
  metadataBase: new URL("https://mitchellsam.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${hanken.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
