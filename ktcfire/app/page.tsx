import Link from "next/link";
import ContactForm from "@/components/ContactForm";

/* ===============================================================
   KRISHNATECH — HOME / LANDING PAGE
   Sections: Hero · Services · Workflow · Expertise · Trust · CTA
   =============================================================== */

// ── Service Data ────────────────────────────────────────────────
const serviceCategories = [
  {
    title: "Water-Based Systems",
    icon: "water_drop",
    services: [
      "Pump Room Design",
      "Hydrant System",
      "Sprinkler System",
      "HV / MV Water Spray System",
      "Water Curtain System",
      "Foam / Water-based System",
    ],
  },
  {
    title: "Detection & Alarm",
    icon: "notification_important",
    services: [
      "Intelligent Addressable Fire Alarm",
      "Conventional Fire Alarm",
      "VESDA (Very Early Smoke Detection)",
    ],
  },
  {
    title: "Suppression Systems",
    icon: "fire_extinguisher",
    services: [
      "CO₂ Gas-based System",
      "Argonite / FM 200 / Clean Agent",
      "Portable Fire Extinguishers",
    ],
  },
  {
    title: "Specialty Systems",
    icon: "settings_input_antenna",
    services: [
      "Public Address System (PA)",
      "CCTV Surveillance",
      "Water Leak Detection",
      "Rodent Repellent System",
    ],
  },
  {
    title: "Engineering Services",
    icon: "engineering",
    services: [
      "Hydraulic Analysis – Water & Compressed Air",
      "CAD Services & Pre-Bid Support",
      "Technical Datasheets & BOQ/MTO",
      "Vendor Analysis & Bid Evaluation",
    ],
  },
];

const workflowSteps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Initial risk assessment and requirement mapping.",
  },
  {
    num: "02",
    title: "Design",
    desc: "System conceptualization and architectural integration.",
  },
  {
    num: "03",
    title: "Engineering",
    desc: "Precise hydraulic calculations and advanced CAD drafting.",
  },
  {
    num: "04",
    title: "Commissioning",
    desc: "Procurement inspection and certification for handover.",
  },
];

const trustedClients = [
  "MARUTI SUZUKI",
  "IOCL",
  "ONGC",
  "BPCL",
  "MANKIND PHARMA",
  "NTPC",
];

// ── Page Component ──────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left – Copy */}
          <div>
            <div className="inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-[10px] font-bold tracking-widest mb-6 uppercase">
              Precision Safety Systems
            </div>
            <h1 className="font-headline font-extrabold text-4xl md:text-[3.5rem] leading-tight tracking-tighter text-on-surface mb-6">
              Protecting lives
              <br />
              and assets starts
              <br />
              with <em className="not-italic text-primary">smart</em>
              <br />
              <em className="not-italic text-primary">engineering.</em>
            </h1>
            <p className="text-on-surface-variant max-w-md text-lg leading-relaxed mb-10">
              Krishnatech delivers world-class fire protection consultancy,
              blending rigorous code compliance with advanced hydraulic analysis
              for complex industrial landscapes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#services"
                className="gradient-primary text-white px-8 py-3.5 rounded-lg font-headline font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-lg"
              >
                Explore Our Capabilities
              </Link>
              <Link
                href="/portfolio"
                className="bg-surface-container-highest text-on-surface-variant px-8 py-3.5 rounded-lg font-headline font-bold text-sm hover:bg-surface-container-high active:scale-[0.98] transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Right – Hero Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-high">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-tertiary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-8xl text-primary/30" style={{ fontVariationSettings: "'FILL' 1" }}>
                  local_fire_department
                </span>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 right-4 md:right-8 bg-surface-container-lowest shadow-ambient rounded-lg px-5 py-3 flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                  NPB Certified
                </p>
                <p className="text-xs font-bold text-on-surface">
                  Global Safety Standards Compliant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ESO CONCEPT SECTION ═══════════════ */}
      <section className="py-16 bg-surface-container-highest">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary tracking-tight mb-4">
                The ESO Advantage
              </h2>
              <p className="text-xl font-headline font-bold text-secondary mb-6">
                Engineering Services Outsourcing
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Many consultants and contractors lack in-house designing resources. Hiring full-time engineers is expensive and time-consuming. We bridge this gap by offering on-demand, outsourced fire system design consulting.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                  Complete Fire Protection Designing delivered remotely.
                </li>
                <li className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                  Expert in National and International Fire Safety Codes (NBC, IS, NFPA, OISD & FM).
                </li>
                <li className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                  White-label service: You retain complete client-facing control.
                </li>
              </ul>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl ghost-border shadow-ambient border-t-4 border-t-secondary">
              <h3 className="font-headline font-bold text-xl mb-4 text-on-surface">Why Outsource to Us?</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Detailing to the level of contracting at the consulting phase to minimize costs and maximize profits. Enjoy scalable, cost-effective engineering with fast turnarounds and strict confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES SECTION ═══════════════ */}
      <section id="services" className="py-20 md:py-28 px-6 md:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight mb-3">
              Core Engineering Services
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              From initial risk assessment to commissioning, we provide
              end-to-end fire protection solutions tailored to your
              infrastructure&apos;s unique requirements.
            </p>
          </div>
          <Link
            href="/inquiry"
            className="text-primary font-headline font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all shrink-0"
          >
            Full Service Catalog
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-surface-container-low p-8 rounded-xl hover:shadow-ambient transition-all duration-300 group"
            >
              <span
                className="material-symbols-outlined text-3xl text-primary-container mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {cat.icon}
              </span>
              <h3 className="font-headline font-bold text-lg text-on-surface mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.services.map((s) => (
                  <li
                    key={s}
                    className="text-sm text-on-surface-variant flex items-start gap-2"
                  >
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5 shrink-0" style={{ fontSize: "14px" }}>
                      check_circle
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ WORKFLOW SECTION ═══════════════ */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="px-6 md:px-8 max-w-7xl mx-auto text-center">
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight mb-4">
            Engineering Workflow
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-16">
            Our systematic approach ensures every project meets international
            safety benchmarks while optimizing cost and efficiency.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {workflowSteps.map((step) => (
              <div key={step.num} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full gradient-primary text-white flex items-center justify-center font-headline font-extrabold text-xl mb-6 shadow-lg">
                  {step.num}
                </div>
                <h3 className="font-headline font-bold text-on-surface mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPERTISE SECTION ═══════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-high relative">
            <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-8xl text-primary/20" style={{ fontVariationSettings: "'FILL' 1" }}>
                precision_manufacturing
              </span>
            </div>
          </div>

          {/* Copy */}
          <div>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight mb-6">
              Unrivaled Expertise in Fire Safety
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-10">
              We don&apos;t just design systems; we engineer peace of mind. Our
              team brings decades of combined experience to every blueprint.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: "shield",
                  title: "25+ Years Experience",
                  desc: "A legacy of successful high-hazard projects across industries.",
                },
                {
                  icon: "gavel",
                  title: "Full Code Compliance",
                  desc: "Expertise in NFPA, NBC, and local AHJ safety regulations.",
                },
                {
                  icon: "speed",
                  title: "Fast Turnaround",
                  desc: "Optimized engineering workflows that meet tight construction timelines.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary text-2xl mt-1 shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TECHNICAL SHOWCASE SECTION ═══════════════ */}
      <section className="py-20 md:py-28 bg-surface-container-highest">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight mb-4">
              System Detailed Drawings & Analysis
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Precision engineering backed by advanced hydraulic modeling and state-of-the-art CAD drafting techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-ambient group">
              <div className="aspect-[4/3] relative overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/tech-drawing.png" alt="Technical CAD Drawing" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-8">
                <h3 className="font-headline font-bold text-xl text-primary mb-2">High-Precision CAD Drafting</h3>
                <p className="text-sm text-on-surface-variant">Detailed blueprints for fire sprinkler and hydrant systems, ready for construction and execution.</p>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-ambient group">
              <div className="aspect-[4/3] relative overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/hydraulic-analysis.png" alt="Hydraulic Flow Analysis" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-8">
                <h3 className="font-headline font-bold text-secondary mb-2">Hydraulic Analysis</h3>
                <p className="text-sm text-on-surface-variant">Advanced 3D modeling and pressure gradient analysis for optimal water flow and system reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUSTED BY SECTION ═══════════════ */}
      <section className="py-16 bg-surface-container-low">
        <div className="px-6 md:px-8 max-w-7xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-on-surface-variant mb-10">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
            {trustedClients.map((client) => (
              <div
                key={client}
                className="flex flex-col items-center justify-center p-4 bg-surface-container-highest rounded-lg w-32 h-24 hover:shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-outline-variant text-3xl mb-2">
                  domain
                </span>
                <span className="text-xs font-headline font-bold text-on-surface text-center leading-tight">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA + CONTACT FORM ═══════════════ */}
      <section id="contact" className="py-20 md:py-28 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-ambient">
          {/* Left – Info */}
          <div className="gradient-primary p-10 md:p-14 text-white flex flex-col justify-center">
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl mb-4">
              Start Your Consultation
            </h2>
            <p className="text-white/80 leading-relaxed mb-10 max-w-sm">
              Ready to secure your facility with precision engineering? Fill out
              the form, and our engineering team will get back to you within 24
              hours.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg">mail</span>
                <span>solutionswithktc@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg">call</span>
                <span>+91 9769367666</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-lg mt-1">location_city</span>
                <div>
                  <div className="font-bold mb-1">Registered Office</div>
                  <div className="text-white/80 leading-relaxed text-xs">
                    Krishnatech Consulting Engineer Services,<br />
                    Ghaziabad, UP
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-lg mt-1">business</span>
                <div>
                  <div className="font-bold mb-1">Current Office</div>
                  <div className="text-white/80 leading-relaxed text-xs">
                    Main Engineering Hub,<br />
                    NCR Region, India
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-lg mt-1">corporate_fare</span>
                <div>
                  <div className="font-bold mb-1">Mumbai Office</div>
                  <div className="text-white/80 leading-relaxed text-xs">
                    B/17, Janardan Apartments,<br />
                    Natwarya Shankar Ghankar Marg,<br />
                    Dadar(W), Mumbai-400028
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
