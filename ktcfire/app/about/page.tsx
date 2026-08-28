import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Krishnatech Consulting & Engineer Services — the Engineering Service Outsourcing (ESO) firm for fire detection, protection and suppression system design, from commercial bidding to detailed engineering.",
};

const foundation = [
  {
    label: "Vision",
    color: "text-primary",
    body: "To help our customers in selecting the best possible solutions for their requirements through the Engineering Service Outsourcing concept.",
  },
  {
    label: "Mission",
    color: "text-accent-ink",
    body: "To avail all possible opportunities by providing Engineering Service Solutions, to engage customers and develop customer satisfaction, thereby maintaining long-term relationships.",
  },
  {
    label: "Goal",
    color: "text-tertiary",
    body: "To establish as an Engineering Service Outsourcing company for providing EPCC services, with competitiveness in quality, delivery time and best feasible solutions.",
  },
];

const values = [
  {
    icon: "shield",
    title: "Safety",
    quote: "We believe in Safety First & Forever.",
  },
  {
    icon: "search",
    title: "Transparency",
    quote: "We are committed to be honest and transparent in our dealings.",
  },
  {
    icon: "check-badge",
    title: "Excellence",
    quote: "We are committed to excel in every business activity.",
  },
  {
    icon: "flame",
    title: "Leadership",
    quote: "We are committed to set new benchmarks for the industry.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-36 pb-24">
      {/* Header */}
      <header className="px-6 md:px-8 max-w-7xl mx-auto mb-20">
        <p className="overline-code text-on-surface-variant mb-4">
          <span className="text-accent-ink">KTC / A-01</span>
          <span aria-hidden="true"> / </span>The Firm
        </p>
        <h1 className="font-headline font-extrabold text-4xl md:text-6xl text-on-surface tracking-tighter mb-6 max-w-3xl">
          The engineering room behind{" "}
          <span className="text-primary">your fire safety projects.</span>
        </h1>
        <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
          In a competitive global arena, projects need aligned, integrated
          engineering to add value. {site.legalName} introduces the concept of
          Engineering Service Outsourcing (ESO) — one stop for system design
          and estimation across fire detection, protection and suppression,
          from initial commercial bidding through detailed engineering.
        </p>
      </header>

      {/* History & purpose */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6 bg-surface-container-low p-10 rounded-lg">
          <h2 className="font-headline font-extrabold text-2xl text-on-surface tracking-tight mb-4">
            Where we started
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Krishnatech Consulting Engineer Services started with a clear
            vision: to meet market requirements for precision system design
            and achieve approval from the statutory agencies.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            We are a team of dedicated professionals with vast experience in
            their respective fields — design, engineering, procurement,
            execution, commissioning, sales and marketing.
          </p>
        </div>
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-surface-container p-8 rounded-lg">
            <Icon name="document" size={28} className="text-primary mb-4" />
            <h3 className="font-headline font-bold text-on-surface text-lg mb-2">
              Pre-bid engineering
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              CAD services, technical datasheets, BOQs and tender documents for
              commercial bidding.
            </p>
          </div>
          <div className="bg-surface-container p-8 rounded-lg">
            <Icon name="blueprint" size={28} className="text-secondary mb-4" />
            <h3 className="font-headline font-bold text-on-surface text-lg mb-2">
              Detailed design
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              End-to-end design from initial concept to Issued-for-Construction
              drawings.
            </p>
          </div>
          <div className="bg-surface-container p-8 rounded-lg sm:col-span-2 flex items-center gap-6">
            <Icon name="gauge" size={40} className="text-tertiary shrink-0" />
            <div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-1">
                Hydraulic analysis
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Complex hydraulic calculations for water-based and
                compressed-air systems — 200+ projects in the last five years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="bg-surface-container-low py-20 mb-24">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <p className="overline-code text-on-surface-variant mb-4">
            <span className="text-accent-ink">KTC / A-02</span>
            <span aria-hidden="true"> / </span>Foundation
          </p>
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight mb-12">
            What the firm is built on.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {foundation.map((f) => (
              <div key={f.label} className="bg-surface-container-lowest p-8 rounded-lg">
                <h3 className={`font-headline font-extrabold text-xl mb-3 ${f.color}`}>
                  {f.label}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          <h3 className="font-headline font-bold text-2xl text-on-surface mb-8">
            Core values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <Icon name={v.icon} size={26} className="text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-headline font-bold text-on-surface mb-1">{v.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    &ldquo;{v.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve + CTA */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <p className="overline-code text-on-surface-variant mb-4">
            <span className="text-accent-ink">KTC / A-03</span>
            <span aria-hidden="true"> / </span>Who We Serve
          </p>
          <h2 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight mb-6">
            Built for firms that sell the project, not the drawing office.
          </h2>
          <ul className="space-y-3">
            {site.clientTypes.map((t) => (
              <li key={t} className="flex items-center gap-3 text-on-surface">
                <Icon name="check" size={18} strokeWidth={2.5} className="text-secondary shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="bg-ink grid-paper-dark rounded-lg p-10 text-on-ink">
            <h3 className="font-headline font-extrabold text-2xl tracking-tight mb-3">
              Partner with Krishnatech
            </h3>
            <p className="text-on-ink-variant text-sm leading-relaxed mb-8">
              Let us handle your fire design workload while you focus on
              execution.
            </p>
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-2 bg-secondary text-ink px-7 py-3.5 rounded-lg font-headline font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Start an Inquiry
              <Icon name="arrow-right" size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
