import type { Metadata } from "next";
import { projects } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Project Portfolio",
  description: `${projects.length} major completed and ongoing fire protection projects across pharma, automobile, distillery, petrochemical, power, metro, infrastructure and data centre sectors — plus 200+ hydraulic analyses.`,
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
