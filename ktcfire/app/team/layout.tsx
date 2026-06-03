import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Krishnatech Consulting & Engineer Services",
  description:
    "Meet the experienced engineering professionals behind Krishnatech — experts in fire protection design, hydraulic analysis, and safety system consulting.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
