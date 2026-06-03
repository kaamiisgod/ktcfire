import type { Metadata } from "next";
import Link from "next/link";

/* ===============================================================
   KRISHNATECH — ABOUT US PAGE
   =============================================================== */

export const metadata: Metadata = {
  title: "About Us | Krishnatech Consulting & Engineer Services",
  description:
    "Learn about Krishnatech's Engineering Service Outsourcing (ESO) model, our 25+ years of fire protection experience, and our vision for advancing industrial safety.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-16 text-center">
        <div className="inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-bold tracking-widest mb-6 uppercase">
          Who We Are
        </div>
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-primary tracking-tighter mb-6">
          Advancing Fire Safety Through <br />
          <span className="text-secondary">Innovative Engineering</span>
        </h1>
        <p className="max-w-3xl mx-auto text-on-surface-variant text-lg leading-relaxed">
          In a competitive global arena, the need to align projects & integrate activities to further enhance the value addition process is paramount. Krishnatech Consulting & Engineer Services introduces the concept of “Engineering Service Outsourcing” (ESO) to streamline fire safety design and compliance.
        </p>
      </header>

      {/* History & What we do */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-surface-container-low p-10 rounded-xl shadow-ambient">
          <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">Our History & Purpose</h2>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Krishnatech Consulting Engineer Services started with a clear vision: to meet market requirements for precision system design and achieve seamless approval from Statutory Agencies. 
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            We are a team of dedicated professionals who have vast experience in their respective fields of Design, Engineering, Procurement, Execution, Commissioning, Sales, and Marketing. We are your one-stop solution to all your worries regarding system design and estimation for various services like Fire detection, protection, and suppression systems.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-primary-container p-8 rounded-xl">
            <span className="material-symbols-outlined text-4xl text-on-primary-container mb-4">engineering</span>
            <h3 className="font-headline font-bold text-on-primary-container text-lg mb-2">Pre-Bid Engineering</h3>
            <p className="text-on-primary-container/80 text-sm">Providing CAD services, technical datasheets, BOQs, and tender documents for commercial bidding.</p>
          </div>
          <div className="bg-secondary-container p-8 rounded-xl">
            <span className="material-symbols-outlined text-4xl text-on-secondary-container mb-4">architecture</span>
            <h3 className="font-headline font-bold text-on-secondary-container text-lg mb-2">Detailed Design</h3>
            <p className="text-on-secondary-container/80 text-sm">End-to-end design from initial concept to IFC (Issued for Construction) drawings.</p>
          </div>
          <div className="bg-tertiary-container p-8 rounded-xl sm:col-span-2 flex items-center gap-6">
            <span className="material-symbols-outlined text-5xl text-on-tertiary-container shrink-0">speed</span>
            <div>
              <h3 className="font-headline font-bold text-on-tertiary-container text-lg mb-1">Hydraulic Analysis</h3>
              <p className="text-on-tertiary-container/80 text-sm">Expertise in complex hydraulic calculations for water-based and compressed air systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values & Vision */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight mb-4">
            Our Foundation
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-surface-container-highest p-8 rounded-xl border-t-4 border-primary">
            <h3 className="font-headline font-bold text-xl text-primary mb-3">Vision</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              To help our customers in selecting the best possible solutions for their requirements through the Engineering Service Outsourcing (ESO) concept.
            </p>
          </div>
          <div className="bg-surface-container-highest p-8 rounded-xl border-t-4 border-secondary">
            <h3 className="font-headline font-bold text-xl text-secondary mb-3">Mission</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              To avail all possible opportunities by providing Engineering Service Solutions, to engage customers & develop customer satisfaction thereby maintaining long-term relationships.
            </p>
          </div>
          <div className="bg-surface-container-highest p-8 rounded-xl border-t-4 border-tertiary">
            <h3 className="font-headline font-bold text-xl text-tertiary mb-3">Goal</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              To establish as a premier Engineering Service Outsourcing Company for providing EPCC Services by providing competitiveness in quality, delivery time & best feasible solutions.
            </p>
          </div>
        </div>
        
        {/* Values */}
        <div className="bg-surface-container-low p-10 rounded-xl shadow-ambient">
          <h3 className="font-headline font-bold text-2xl text-on-surface mb-8 text-center">Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-3">health_and_safety</span>
              <h4 className="font-bold text-on-surface mb-2">Safety</h4>
              <p className="text-xs text-on-surface-variant">We believe in Safety First & Forever.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-4xl text-secondary mb-3">visibility</span>
              <h4 className="font-bold text-on-surface mb-2">Transparency</h4>
              <p className="text-xs text-on-surface-variant">Committed to be honest and transparent in our dealings.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-4xl text-tertiary mb-3">workspace_premium</span>
              <h4 className="font-bold text-on-surface mb-2">Excellence</h4>
              <p className="text-xs text-on-surface-variant">Committed to excel in every business activity.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-3">flag</span>
              <h4 className="font-bold text-on-surface mb-2">Leadership</h4>
              <p className="text-xs text-on-surface-variant">Committed to set new benchmarks for the industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/inquiry"
          className="inline-flex items-center gap-2 gradient-primary text-white px-8 py-4 rounded-xl font-headline font-bold hover:opacity-90 active:scale-95 transition-all shadow-lg"
        >
          Partner with Krishnatech
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
