import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Portfolio | Krishnatech Consulting & Engineer Services",
  description:
    "Explore Krishnatech's portfolio of 20+ fire protection engineering projects across pharma, petrochemical, automobile, power, infrastructure, and data centre sectors.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
