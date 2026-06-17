import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Editorial pairing: Fraunces (an opsz serif) for display headlines, Space
// Grotesk for body/UI. Exposed as the CSS vars globals.css references.
const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Signal & Soul — Das Journal für hochwertiges Hören",
  description:
    "Ein Quartalsmagazin für Menschen, die den Unterschied hören. Langformat-Tests, Raumkunst und die Rückkehr des Analogen.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${serif.variable} ${grotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
