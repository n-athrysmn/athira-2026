import type { Metadata } from "next";
import { Geist, Geist_Mono, Boldonse } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const boldonse = Boldonse({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-boldonse",
});

export const metadata: Metadata = {
  title: "Athira's 2026 Portfolio",
  description:
    "A showcase of my projects, skills, and experiences as a Full Stack Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} ${boldonse.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
