import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Inquiry | Krishnatech Consulting & Engineer Services",
  description:
    "Submit a technical inquiry for fire protection system design, hydraulic analysis, or engineering consultancy. Our team responds within 24 hours.",
};

export default function InquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
