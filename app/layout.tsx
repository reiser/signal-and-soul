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
  title: "Signal & Soul — A magazine for people who hear the difference",
  description:
    "Long-form tests, listening reports and the slow return of analogue. Signal & Soul is an independent magazine for people who hear the difference.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${grotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <span style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0 }} aria-hidden="true">devshot</span>
        <a
          href="/login"
          className="studio-corner"
          style={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 60,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 14px",
            borderRadius: 9999,
            background: "rgba(20,17,15,0.92)",
            color: "#fbf8f3",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.02em",
            textDecoration: "none",
            boxShadow: "0 12px 30px -12px rgba(20,17,15,0.45)",
            backdropFilter: "blur(6px)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "grid",
              width: 18,
              height: 18,
              placeItems: "center",
              borderRadius: 9999,
              background: "#d96a3a",
              color: "#fbf8f3",
              fontSize: 10,
            }}
          >
            ◆
          </span>
          <span>DevShot Studio</span>
          <span aria-hidden="true" style={{ opacity: 0.5 }}>·</span>
          <span>Login</span>
        </a>
        {children}
      </body>
    </html>
  );
}
