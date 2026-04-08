import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krishnatech Consulting & Engineer Services | Fire Protection Engineering",
  description:
    "Engineering Service Outsourcing (ESO) company specializing in fire detection, protection, and suppression system design. 25+ years of experience across pharma, automobile, petrochemical, power, and infrastructure sectors.",
  keywords: [
    "fire protection engineering",
    "fire safety consulting",
    "sprinkler system design",
    "hydrant system",
    "hydraulic analysis",
    "NFPA compliance",
    "NBC codes",
    "engineering service outsourcing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body antialiased bg-surface text-on-surface">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
