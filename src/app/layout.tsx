import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

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
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
