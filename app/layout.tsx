import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signal & Soul | Premium Sound & Hi-Fi Magazine",
  description: "A polished glossy magazine for high-end audio, acoustics, and analog sound.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#0a0a0c] text-[#f4f4f6] antialiased">
        {children}
      </body>
    </html>
  );
}
