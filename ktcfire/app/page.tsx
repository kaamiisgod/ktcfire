import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { SprinklerSchematic, HydraulicCurve } from "@/components/Schematics";
import { site } from "@/lib/content/site";
import { serviceIndex, workflow } from "@/lib/content/services";
import { featuredProjects, projects } from "@/lib/content/projects";
import { testimonials } from "@/lib/content/testimonials";

function Overline({ code, title }: { code: string; title: string }) {
  return (
    <p className="overline-code text-on-surface-variant mb-4">
      <span className="text-accent-ink">{code}</span>
      <span aria-hidden="true"> / </span>
      {title}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="grid-paper">
        <div className="pt-36 pb-16 md:pt-44 md:pb-24 px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Overline code="KTC" title="Engineering Service Outsourcing" />
              <h1 className="font-headline font-extrabold text-4xl md:text-[3.5rem] leading-[1.05] tracking-tighter text-on-surface mb-6 max-w-2xl">
                Protecting lives and assets starts with{" "}
                <em className="not-italic text-primary">smart engineering.</em>
              </h1>
              <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed mb-4">
                Krishnatech is your outsourced fire protection design office.
                We take a project from inputs to a complete, code-compliant
                design package — hydrant, sprinkler, spray, foam, detection and
                suppression systems — delivered remotely, under your name.
              </p>
              <p className="overline-code text-on-surface-variant mb-10">
                Designing to {site.codes.join(" · ")} and state-wise AHJ
                requirements
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/inquiry"
                  className="gradient-primary text-on-primary px-8 py-3.5 rounded-lg font-headline font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all inline-flex items-center gap-2"
                >
                  Start an Inquiry
                  <Icon name="arrow-right" size={16} strokeWidth={2} />
                </Link>
                <Link
                  href="/portfolio"
                  className="bg-surface-container-highest text-on-surface px-8 py-3.5 rounded-lg font-headline font-bold text-sm hover:bg-surface-container-high active:scale-[0.98] transition-all"
                >
                  View the Project Index
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden shadow-ambient">
                <SprinklerSchematic className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAT STRIP ───────────────────────────────────────── */}
      <section aria-label="Key figures" className="bg-surface-container-low">
        <div className="px-6 md:px-8 max-w-7xl mx-auto py-12 md:py-16 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-headline font-extrabold text-5xl md:text-6xl text-primary tracking-tighter tnum">
                {stat.value}
              </p>
              <p className="font-headline font-bold text-on-surface mt-2">
                {stat.label}
              </p>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed max-w-[16rem]">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE ESO MODEL ────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Overline code="KTC" title="The ESO Model" />
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight mb-6">
              A design office you don&apos;t have to hire.
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              Many consultants and contractors lack in-house design resources,
              and hiring full-time engineers is expensive and slow. Compliance
              with NBC, IS, NFPA, OISD and FM codes requires specialised
              expertise — and deadlines are rarely generous.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Engineering Service Outsourcing closes that gap: on-demand fire
              system design consulting — concepting, consulting and costing —
              detailed to the level of contracting at the consulting stage, to
              minimise costs and maximise profits.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="space-y-6">
              {[
                {
                  title: "Complete design, delivered remotely",
                  desc: "Full fire protection design packages — DBR, drawings and documentation — without adding headcount.",
                },
                {
                  title: "Code expertise on tap",
                  desc: "National and international fire safety codes, plus state-wise AHJ local requirement compliance.",
                },
                {
                  title: "White-label by default",
                  desc: "You retain complete client-facing control; our work ships under your name.",
                },
                {
                  title: "Scalable and deadline-friendly",
                  desc: "Cost-effective for all project sizes, with fast turnarounds and strict confidentiality.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4 bg-surface-container-low p-6 rounded-lg">
                  <Icon
                    name="check"
                    size={20}
                    strokeWidth={2.5}
                    className="text-secondary shrink-0 mt-0.5"
                  />
                  <div>
                    <h3 className="font-headline font-bold text-on-surface mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SERVICES INDEX ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <Overline code="KTC" title="Services" />
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight">
                The drawing index.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-primary font-headline font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all shrink-0"
            >
              Full service catalogue
              <Icon name="arrow-right" size={16} strokeWidth={2} />
            </Link>
          </div>

          <ul>
            {serviceIndex.map((s) => (
              <li key={s.code}>
                <Link
                  href={`/services#${s.code.toLowerCase()}`}
                  className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[7rem_16rem_1fr_auto] items-baseline md:items-center gap-x-6 gap-y-1 py-5 px-4 -mx-4 rounded-md hover:bg-surface-container transition-colors"
                >
                  <span className="overline-code text-accent-ink tnum">{s.code}</span>
                  <span className="font-headline font-bold text-lg text-on-surface">
                    {s.title}
                  </span>
                  <span className="hidden md:block text-sm text-on-surface-variant leading-relaxed pr-8">
                    {s.summary}
                  </span>
                  <span className="justify-self-end flex items-center gap-3 text-on-surface-variant">
                    <span className="text-xs tnum">{s.count} items</span>
                    <Icon
                      name="arrow-right"
                      size={16}
                      strokeWidth={2}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WORKFLOW ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-xl mb-14">
          <Overline code="KTC" title="Workflow" />
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight mb-4">
            Four steps from inputs to handover.
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            The engagement is deliberately simple: you stay in front of your
            client, we run the drawing board.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {workflow.map((step) => (
            <li key={step.num}>
              <p className="font-headline font-extrabold text-6xl text-on-secondary-fixed tracking-tighter tnum mb-4">
                {step.num}
              </p>
              <h3 className="font-headline font-bold text-on-surface mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── DELIVERABLES SHOWCASE ────────────────────────────── */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <Overline code="KTC" title="Deliverables" />
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight">
              Engineering you can put a title block on.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-lg overflow-hidden bg-surface-container-lowest">
              <HydraulicCurve className="w-full h-auto block" />
              <div className="p-8">
                <h3 className="font-headline font-bold text-xl text-primary mb-2">
                  Hydraulic analysis
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Pump and system curves, pressure gradients and orifice plate
                  calculations for water-based and compressed-air systems —
                  over 200 analyses delivered in the last five years.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-lg p-8 md:p-10">
              <h3 className="font-headline font-bold text-xl text-primary mb-6">
                The document set
              </h3>
              <ul className="space-y-4">
                {[
                  "Design basis reports (DBR)",
                  "As-Built, GFC and IFC drawings",
                  "Shop drawings",
                  "Technical datasheets",
                  "BOQ / MTO and cost estimates",
                  "Tender techno-commercial documents",
                  "Vendor analysis and technical bid evaluation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-on-surface">
                    <Icon
                      name="document"
                      size={18}
                      className="text-tertiary shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-on-surface-variant mt-8 leading-relaxed">
                Every package is prepared for statutory approval — including
                Fire NOC support and third-party approvals where required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS & SECTORS ────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Overline code="KTC" title="Track Record" />
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight mb-6">
              Who we work with.
            </h2>
            <ul className="space-y-3 mb-8">
              {site.clientTypes.map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              href="/portfolio"
              className="text-primary font-headline font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
            >
              {projects.length} projects in the index
              <Icon name="arrow-right" size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="overline-code text-on-surface-variant mb-6">
              Selected end clients, via consultants and contractors
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5 mb-12">
              {site.featuredClients.map((client) => (
                <li
                  key={client}
                  className="font-headline font-bold text-on-surface-variant tracking-tight"
                >
                  {client}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredProjects.map((p) => (
                <div key={p.title} className="bg-surface-container-low rounded-lg p-6">
                  <p className="overline-code text-accent-ink mb-2">{p.sector}</p>
                  <h3 className="font-headline font-bold text-on-surface leading-snug mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant">{p.client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (renders only when real quotes exist) ── */}
      {testimonials.length > 0 && (
        <section className="py-20 md:py-28 bg-surface-container-low">
          <div className="px-6 md:px-8 max-w-7xl mx-auto">
            <Overline code="KTC" title="Testimonials" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {testimonials.map((t) => (
                <figure key={t.name} className="bg-surface-container-lowest rounded-lg p-8">
                  <blockquote className="text-on-surface leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-sm">
                    <span className="font-headline font-bold text-on-surface block">
                      {t.name}
                    </span>
                    <span className="text-on-surface-variant">
                      {t.role}, {t.company}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="bg-ink grid-paper-dark py-20 md:py-28 scroll-mt-24">
        <div className="px-6 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 text-on-ink">
            <p className="overline-code text-secondary mb-4">
              KTC <span aria-hidden="true">/</span> Contact
            </p>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl mb-4 tracking-tight">
              Put us on your next drawing.
            </h2>
            <p className="text-on-ink-variant leading-relaxed mb-10 max-w-md">
              Send a brief and our engineering team will come back within 24
              hours — or call and talk it through first.
            </p>
            <dl className="space-y-6 text-sm">
              <div className="flex items-center gap-4">
                <Icon name="phone" size={20} className="text-secondary shrink-0" />
                <div>
                  <dt className="overline-code text-on-ink-variant">Phone</dt>
                  <dd>
                    <a href={site.phoneHref} className="hover:underline tnum">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="mail" size={20} className="text-secondary shrink-0" />
                <div>
                  <dt className="overline-code text-on-ink-variant">Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="hover:underline break-all">
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>
              {site.addresses.map((addr) => (
                <div key={addr.label} className="flex items-start gap-4">
                  <Icon name="pin" size={20} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <dt className="overline-code text-on-ink-variant">{addr.label}</dt>
                    <dd className="text-on-ink-variant leading-relaxed">
                      {addr.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
