"use client";

import { useState } from "react";

/* ===============================================================
   KRISHNATECH — SERVICE INQUIRY FORM (Multi-Step)
   Steps: Company → Project → Specs → Budget
   =============================================================== */

const steps = [
  { num: 1, label: "Company" },
  { num: 2, label: "Project" },
  { num: 3, label: "Specs" },
  { num: 4, label: "Budget" },
];

const projectTypes = [
  "Sprinkler System",
  "Hydrant System",
  "Foam System",
  "Fire Alarm System",
  "Gas Suppression",
  "Hydraulic Analysis",
  "Water Spray System",
  "VESDA System",
  "PA / CCTV System",
  "Other",
];

const infoCards = [
  {
    icon: "verified_user",
    title: "Safety Standard Compliance",
    desc: "All designs are reviewed against NFPA, NBC, and local building codes by certified engineers.",
  },
  {
    icon: "precision_manufacturing",
    title: "High-Precision Modeling",
    desc: "Utilizing BIM and hydraulic analysis tools for maximum system efficiency and reliability.",
  },
  {
    icon: "support_agent",
    title: "Consultancy Access",
    desc: "Inquiry submissions are prioritized for 24-hour initial engineering feedback cycles.",
  },
];

export default function InquiryPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, 4));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
      {/* ═══════════════ PROGRESS STEPPER ═══════════════ */}
      <div className="mb-16">
        <div className="flex items-center justify-between relative">
          {/* Background line */}
          <div className="absolute top-5 left-0 w-full h-0.5 bg-surface-container-highest -z-10" />
          {/* Progress line */}
          <div
            className="absolute top-5 left-0 h-0.5 bg-tertiary-container -z-10 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />

          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  step.num <= currentStep
                    ? "bg-tertiary-container text-on-tertiary-container shadow-sm"
                    : "bg-surface-container-highest text-outline"
                }`}
              >
                {step.num < currentStep ? (
                  <span className="material-symbols-outlined text-lg">check</span>
                ) : (
                  step.num
                )}
              </div>
              <span
                className={`font-label text-xs font-semibold uppercase tracking-widest ${
                  step.num <= currentStep ? "text-primary" : "text-outline"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════ FORM CANVAS ═══════════════ */}
      <section className="bg-surface-container-low p-8 md:p-12 rounded-xl shadow-ambient">
        <div className="mb-10">
          <h1 className="font-headline text-3xl font-extrabold text-primary mb-2">
            Technical Inquiry
          </h1>
          <p className="text-on-surface-variant font-body">
            Step {currentStep} of 4:{" "}
            {currentStep === 1 && "Company Details & Contact Information"}
            {currentStep === 2 && "Project Type & Documentation"}
            {currentStep === 3 && "Technical Specifications"}
            {currentStep === 4 && "Budget & Timeline"}
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (currentStep < 4) goNext();
          }}
        >
          {/* STEP 1: Company Details */}
          {currentStep === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Engineering Firm LLC"
                  className="w-full bg-surface-container-high border-none border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-t-lg font-body"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                  Contact Person
                </label>
                <input
                  type="text"
                  placeholder="Alex Rivera"
                  className="w-full bg-surface-container-high border-none border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-t-lg font-body"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 9876 543 210"
                  className="w-full bg-surface-container-high border-none border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-t-lg font-body"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  className="w-full bg-surface-container-high border-none border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-t-lg font-body"
                />
              </div>
            </div>
          )}

          {/* STEP 2: Project Type */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="space-y-2">
                <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                  Project Type
                </label>
                <select className="w-full bg-surface-container-high border-none p-4 rounded-lg focus:ring-primary text-on-surface font-body">
                  <option value="">Select a system type...</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                  Project Location
                </label>
                <input
                  type="text"
                  placeholder="City, State, Country"
                  className="w-full bg-surface-container-high border-none border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-t-lg font-body"
                />
              </div>
              {/* File Upload */}
              <div className="p-12 border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center text-center bg-surface-container-lowest/50">
                <span
                  className="material-symbols-outlined text-4xl text-primary mb-4"
                >
                  upload_file
                </span>
                <p className="font-headline font-bold text-lg mb-1">
                  Upload Technical Drawings
                </p>
                <p className="text-sm text-outline mb-6">
                  PDF, DWG, or BIM files supported. Max 50MB.
                </p>
                <button
                  type="button"
                  className="bg-surface-variant text-on-surface-variant px-6 py-2 rounded-lg font-bold text-sm hover:bg-surface-container-highest transition-colors"
                >
                  Select Files
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Technical Specs */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                    Facility Area (sq.ft)
                  </label>
                  <input
                    type="number"
                    placeholder="50,000"
                    className="w-full bg-surface-container-high border-none border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-t-lg font-body"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                    Hazard Classification
                  </label>
                  <select className="w-full bg-surface-container-high border-none p-4 rounded-lg focus:ring-primary text-on-surface font-body">
                    <option value="">Select classification...</option>
                    <option>Light Hazard</option>
                    <option>Ordinary Hazard Group 1</option>
                    <option>Ordinary Hazard Group 2</option>
                    <option>Extra Hazard Group 1</option>
                    <option>Extra Hazard Group 2</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                  Applicable Codes & Standards
                </label>
                <div className="flex flex-wrap gap-3 mt-2">
                  {["NFPA", "NBC (India)", "IS Codes", "OISD", "FM Global"].map(
                    (code) => (
                      <label
                        key={code}
                        className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-lg cursor-pointer hover:bg-surface-container-highest transition-colors"
                      >
                        <input type="checkbox" className="accent-primary" />
                        <span className="text-sm font-body">{code}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                  Additional Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe any special conditions, existing infrastructure, or specific requirements..."
                  className="w-full bg-surface-container-high border-none border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-t-lg font-body resize-none"
                />
              </div>
            </div>
          )}

          {/* STEP 4: Budget & Timeline */}
          {currentStep === 4 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                    Estimated Budget Range (INR)
                  </label>
                  <select className="w-full bg-surface-container-high border-none p-4 rounded-lg focus:ring-primary text-on-surface font-body">
                    <option value="">Select range...</option>
                    <option>Under ₹10 Lakhs</option>
                    <option>₹10 – ₹50 Lakhs</option>
                    <option>₹50 Lakhs – ₹2 Crores</option>
                    <option>₹2 – ₹10 Crores</option>
                    <option>Above ₹10 Crores</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                    Project Timeline
                  </label>
                  <select className="w-full bg-surface-container-high border-none p-4 rounded-lg focus:ring-primary text-on-surface font-body">
                    <option value="">Select timeline...</option>
                    <option>Urgent (Less than 1 month)</option>
                    <option>1 – 3 Months</option>
                    <option>3 – 6 Months</option>
                    <option>6 – 12 Months</option>
                    <option>12+ Months</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                  Scope of Engagement
                </label>
                <div className="flex flex-wrap gap-3 mt-2">
                  {[
                    "Pre-Bid Design",
                    "Detailed Engineering",
                    "Shop Drawings",
                    "Procurement Support",
                    "Commissioning Supervision",
                    "Fire NOC Support",
                  ].map((scope) => (
                    <label
                      key={scope}
                      className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-lg cursor-pointer hover:bg-surface-container-highest transition-colors"
                    >
                      <input type="checkbox" className="accent-primary" />
                      <span className="text-sm font-body">{scope}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Any other information that would help us prepare an accurate proposal..."
                  className="w-full bg-surface-container-high border-none border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-t-lg font-body resize-none"
                />
              </div>
            </div>
          )}

          {/* ═══════════════ NAVIGATION CONTROLS ═══════════════ */}
          <div className="pt-12 flex justify-between items-center border-t border-outline-variant/20 mt-8">
            <button
              type="button"
              onClick={goBack}
              className={`text-primary font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform ${
                currentStep === 1 ? "invisible" : ""
              }`}
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back
            </button>

            {currentStep < 4 ? (
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:opacity-90 active:scale-95 transition-all"
              >
                Next Phase
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            ) : (
              <button
                type="button"
                className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:opacity-90 active:scale-95 transition-all"
              >
                Submit Inquiry
                <span className="material-symbols-outlined">send</span>
              </button>
            )}
          </div>
        </form>
      </section>

      {/* ═══════════════ INFO CARDS ═══════════════ */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {infoCards.map((card) => (
          <div key={card.title} className="bg-surface-container p-6 rounded-lg">
            <div className="text-primary-container mb-4">
              <span
                className="material-symbols-outlined text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {card.icon}
              </span>
            </div>
            <h3 className="font-headline font-bold text-on-surface mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-on-surface-variant">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
