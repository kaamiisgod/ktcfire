import type { Metadata } from "next";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What the Krishnatech website collects, why, and how to reach us about it.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-36 pb-24 px-6 md:px-8 max-w-3xl mx-auto">
      <p className="overline-code text-on-surface-variant mb-4">
        <span className="text-accent-ink">KTC / LEGAL</span>
        <span aria-hidden="true"> / </span>Privacy
      </p>
      <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface tracking-tighter mb-10">
        Privacy notice
      </h1>

      <div className="space-y-8 text-on-surface-variant leading-relaxed">
        <section>
          <h2 className="font-headline font-bold text-xl text-on-surface mb-3">
            What this site collects
          </h2>
          <p>
            This website collects personal information only when you submit
            the contact form or the service inquiry form: your name, email
            address, and — on the inquiry form — your company, phone number
            and the project details you choose to share.
          </p>
        </section>

        <section>
          <h2 className="font-headline font-bold text-xl text-on-surface mb-3">
            How it is used
          </h2>
          <p>
            Submissions are delivered by email to our engineering team so we
            can respond to your enquiry. They are not used for marketing
            lists, not sold, and not shared with third parties beyond the
            email delivery service that transports the message.
          </p>
        </section>

        <section>
          <h2 className="font-headline font-bold text-xl text-on-surface mb-3">
            Cookies and analytics
          </h2>
          <p>
            This site sets no cookies and runs no analytics or tracking
            scripts.
          </p>
        </section>

        <section>
          <h2 className="font-headline font-bold text-xl text-on-surface mb-3">
            Contact
          </h2>
          <p>
            To ask about, correct, or delete information you have sent us,
            email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-primary font-semibold hover:underline"
            >
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={site.phoneHref} className="text-primary font-semibold hover:underline tnum">
              {site.phone}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
