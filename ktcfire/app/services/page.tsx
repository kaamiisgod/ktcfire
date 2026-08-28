import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { systemGroups, engineeringGroups, workflow } from "@/lib/content/services";
import type { ServiceGroup } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fire protection systems and engineering services: hydrant, sprinkler, spray, foam, detection and gas suppression design, hydraulic analysis, DBR to IFC documentation, bid support, and compliance auditing.",
};

function GroupBlock({ group }: { group: ServiceGroup }) {
  return (
    <article
      id={group.code.toLowerCase()}
      className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 py-10 scroll-mt-28"
    >
      <div className="md:col-span-4">
        <p className="overline-code text-accent-ink tnum mb-3">{group.code}</p>
        <div className="flex items-center gap-3 mb-3">
          <Icon name={group.icon} size={26} className="text-primary shrink-0" />
          <h3 className="font-headline font-extrabold text-2xl text-on-surface tracking-tight">
            {group.title}
          </h3>
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed max-w-sm">
          {group.summary}
        </p>
      </div>
      <ul className="md:col-span-7 md:col-start-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 content-start">
        {group.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-on-surface leading-relaxed">
            <Icon
              name="check"
              size={16}
              strokeWidth={2.5}
              className="text-secondary shrink-0 mt-1"
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-36 pb-24">
      {/* Header */}
      <header className="px-6 md:px-8 max-w-7xl mx-auto mb-16">
        <p className="overline-code text-on-surface-variant mb-4">
          <span className="text-accent-ink">KTC / 02</span>
          <span aria-hidden="true"> / </span>Service Catalogue
        </p>
        <h1 className="font-headline font-extrabold text-4xl md:text-6xl text-on-surface tracking-tighter mb-6 max-w-3xl">
          Every system in the fire package,{" "}
          <span className="text-primary">designed to code.</span>
        </h1>
        <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
          From the pump room to the furthest sprinkler head — and from the
          design basis report to statutory approval — Krishnatech covers the
          full scope of fire protection design and the engineering services
          around it.
        </p>
      </header>

      {/* Systems */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto mb-8">
        <h2 className="font-headline font-extrabold text-xl text-on-surface-variant tracking-tight uppercase mb-2">
          Fire protection systems
        </h2>
        <div>
          {systemGroups.map((g) => (
            <GroupBlock key={g.code} group={g} />
          ))}
        </div>
      </section>

      {/* Engineering services */}
      <section className="bg-surface-container-low py-8 mb-20">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <h2 className="font-headline font-extrabold text-xl text-on-surface-variant tracking-tight uppercase mb-2 pt-8">
            Engineering &amp; consulting
          </h2>
          <div>
            {engineeringGroups.map((g) => (
              <GroupBlock key={g.code} group={g} />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow recap + CTA */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-ink grid-paper-dark rounded-lg p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 text-on-ink">
            <h2 className="font-headline font-extrabold text-3xl tracking-tight mb-4">
              Scope not listed? Ask anyway.
            </h2>
            <p className="text-on-ink-variant leading-relaxed mb-8">
              The catalogue covers the common cases — value engineering, GAP
              audits and one-off validation work are quoted per project.
            </p>
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-2 bg-secondary text-ink px-8 py-3.5 rounded-lg font-headline font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Start an Inquiry
              <Icon name="arrow-right" size={16} strokeWidth={2} />
            </Link>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-x-8 gap-y-8">
            {workflow.map((step) => (
              <li key={step.num} className="text-on-ink">
                <p className="font-headline font-extrabold text-3xl text-secondary tracking-tighter tnum mb-2">
                  {step.num}
                </p>
                <h3 className="font-headline font-bold text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-on-ink-variant leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
