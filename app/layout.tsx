import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT GRI Solusi Nusantara — Logistik, Alat Berat & Solusi Digital",
  description:
    "PT GRI Solusi Nusantara menyediakan jasa pengiriman logistik, penyewaan forklift, layanan keagenan, dan solusi digital di Bandung, Jawa Barat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${sans.variable} ${display.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
