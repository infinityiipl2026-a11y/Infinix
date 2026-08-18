import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://infinix.example.com"),
  title: {
    default: "Infinix — Everyday care, made simple",
    template: "%s — Infinix",
  },
  description:
    "Infinix makes soaps, hand washes, sanitizers, and everyday hygiene essentials. Browse the current collection.",
  keywords: [
    "Infinix",
    "soap",
    "hand wash",
    "sanitizer",
    "personal care",
    "hygiene products",
  ],
  openGraph: {
    title: "Infinix — Everyday care, made simple",
    description:
      "Soaps, washes, sanitizers, and everyday hygiene essentials.",
    type: "website",
    siteName: "Infinix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinix — Everyday care, made simple",
    description:
      "Soaps, washes, sanitizers, and everyday hygiene essentials.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jbmono.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
