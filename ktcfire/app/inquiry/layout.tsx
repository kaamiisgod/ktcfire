import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { site } from "@/lib/content/site";

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
  // The form is hidden site-wide while inquiries are closed; send visitors
  // with an old link to the contact details instead.
  if (!site.inquiriesOpen) redirect("/#contact");
  return children;
}
