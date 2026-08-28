import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/content/site";

const manrope = localFont({
  src: "../public/fonts/Manrope-Variable.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../public/fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} | Fire Protection Engineering`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
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
  openGraph: {
    type: "website",
    siteName: site.legalName,
    title: `${site.legalName} | Fire Protection Engineering`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-body antialiased bg-surface text-on-surface">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
