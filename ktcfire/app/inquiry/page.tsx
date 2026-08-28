"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { site } from "@/lib/content/site";

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

const hazardOptions = [
  "Light Hazard",
  "Ordinary Hazard Group 1",
  "Ordinary Hazard Group 2",
  "Extra Hazard Group 1",
  "Extra Hazard Group 2",
  "Not sure yet",
];

const codeOptions = ["NFPA", "NBC (India)", "IS Codes", "OISD", "FM Global"];

const budgetOptions = [
  "Under ₹10 Lakhs",
  "₹10 – ₹50 Lakhs",
  "₹50 Lakhs – ₹2 Crores",
  "₹2 – ₹10 Crores",
  "Above ₹10 Crores",
];

const timelineOptions = [
  "Urgent (less than 1 month)",
  "1 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "12+ months",
];

const scopeOptions = [
  "Pre-Bid Design",
  "Detailed Engineering",
  "Shop Drawings",
  "Procurement Support",
  "Commissioning Supervision",
  "Fire NOC Support",
];

type Fields = {
  company: string;
  contactPerson: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  area: string;
  hazard: string;
  codes: string[];
  requirements: string;
  budget: string;
  timeline: string;
  scope: string[];
  notes: string;
};

const initialFields: Fields = {
  company: "",
  contactPerson: "",
  phone: "",
  email: "",
  projectType: "",
  location: "",
  area: "",
  hazard: "",
  codes: [],
  requirements: "",
  budget: "",
  timeline: "",
  scope: [],
  notes: "",
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateStep(step: number, f: Fields): Errors {
  const errors: Errors = {};
  if (step === 1) {
    if (!f.company.trim()) errors.company = "Enter your company name.";
    if (!f.contactPerson.trim()) errors.contactPerson = "Enter a contact person.";
    if (!f.phone.trim()) errors.phone = "Enter a phone number.";
    else if (!/^[+\d][\d\s\-()]{6,}$/.test(f.phone.trim()))
      errors.phone = "Enter a valid phone number.";
    if (!f.email.trim()) errors.email = "Enter an email address.";
    else if (!EMAIL_RE.test(f.email.trim()))
      errors.email = "Enter a valid email address.";
  }
  if (step === 2) {
    if (!f.projectType) errors.projectType = "Select a project type.";
    if (!f.location.trim()) errors.location = "Enter the project location.";
  }
  return errors;
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="overline-code text-on-surface-variant block">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function InquiryPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [startedAt] = useState(() => Date.now());
  const [honeypot, setHoneypot] = useState("");

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) =>
    setFields((f) => ({ ...f, [key]: value }));

  const toggle = (key: "codes" | "scope", value: string) =>
    setFields((f) => ({
      ...f,
      [key]: f[key].includes(value)
        ? f[key].filter((v) => v !== value)
        : [...f[key], value],
    }));

  const goNext = () => {
    const stepErrors = validateStep(currentStep, fields);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;
    setCurrentStep((s) => Math.min(s + 1, 4));
  };

  const goBack = () => {
    setErrors({});
    setCurrentStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async () => {
    const allErrors = { ...validateStep(1, fields), ...validateStep(2, fields) };
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      setCurrentStep(allErrors.company || allErrors.contactPerson || allErrors.phone || allErrors.email ? 1 : 2);
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "inquiry",
          startedAt,
          website: honeypot,
          fields: {
            ...fields,
            codes: fields.codes.join(", "),
            scope: fields.scope.join(", "),
          },
        }),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="pt-36 pb-24 px-4 sm:px-6 md:px-8 max-w-3xl mx-auto">
        <div className="bg-surface-container-low rounded-lg p-10 md:p-16 text-center">
          <Icon name="check-circle" size={64} className="text-primary mx-auto mb-6" />
          <h1 className="font-headline font-extrabold text-3xl text-on-surface mb-4 tracking-tight">
            Inquiry received
          </h1>
          <p className="text-on-surface-variant leading-relaxed max-w-md mx-auto mb-4">
            Thank you, {fields.contactPerson.split(" ")[0] || "there"}. Our
            engineering team will review the details and come back to{" "}
            <span className="font-semibold text-on-surface">{fields.email}</span>{" "}
            within 24 hours.
          </p>
          <p className="text-sm text-on-surface-variant leading-relaxed max-w-md mx-auto">
            Have drawings or specifications ready? You can attach them when we
            reply, or send them ahead to{" "}
            <a href={`mailto:${site.email}`} className="text-primary font-semibold hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-36 pb-24 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
      {/* Progress stepper */}
      <div className="mb-14">
        <ol className="flex items-center justify-between relative">
          <div
            className="absolute top-5 left-0 w-full h-0.5 bg-surface-container-highest -z-10"
            aria-hidden="true"
          />
          <div
            className="absolute top-5 left-0 h-0.5 bg-tertiary -z-10 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            aria-hidden="true"
          />
          {steps.map((step) => (
            <li
              key={step.num}
              className="flex flex-col items-center gap-3"
              aria-current={step.num === currentStep ? "step" : undefined}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 tnum ${
                  step.num <= currentStep
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-highest text-outline"
                }`}
              >
                {step.num < currentStep ? (
                  <Icon name="check" size={18} strokeWidth={2.5} label="Completed" />
                ) : (
                  step.num
                )}
              </div>
              <span
                className={`overline-code ${
                  step.num <= currentStep ? "text-primary" : "text-outline"
                }`}
              >
                {step.label}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Form canvas */}
      <section className="bg-surface-container-low p-8 md:p-12 rounded-lg">
        <div className="mb-10">
          <p className="overline-code text-accent-ink mb-2">KTC / INQUIRY</p>
          <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-2">
            Technical Inquiry
          </h1>
          <p className="text-on-surface-variant">
            Step {currentStep} of 4:{" "}
            {currentStep === 1 && "Company details & contact information"}
            {currentStep === 2 && "Project type & location"}
            {currentStep === 3 && "Technical specifications"}
            {currentStep === 4 && "Budget, timeline & review"}
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (currentStep < 4) goNext();
            else handleSubmit();
          }}
          noValidate
        >
          {/* Honeypot */}
          <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
            <label htmlFor="inquiry-website">Website</label>
            <input
              id="inquiry-website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Field id="company" label="Company name" error={errors.company}>
                <input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  required
                  className="field"
                  value={fields.company}
                  onChange={(e) => set("company", e.target.value)}
                  aria-invalid={errors.company ? true : undefined}
                  aria-describedby={errors.company ? "company-error" : undefined}
                />
              </Field>
              <Field id="contactPerson" label="Contact person" error={errors.contactPerson}>
                <input
                  id="contactPerson"
                  type="text"
                  autoComplete="name"
                  required
                  className="field"
                  value={fields.contactPerson}
                  onChange={(e) => set("contactPerson", e.target.value)}
                  aria-invalid={errors.contactPerson ? true : undefined}
                  aria-describedby={
                    errors.contactPerson ? "contactPerson-error" : undefined
                  }
                />
              </Field>
              <Field id="phone" label="Phone number" error={errors.phone}>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="field tnum"
                  value={fields.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  aria-invalid={errors.phone ? true : undefined}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
              </Field>
              <Field id="email" label="Email address" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="field"
                  value={fields.email}
                  onChange={(e) => set("email", e.target.value)}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </Field>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <Field id="projectType" label="Project type" error={errors.projectType}>
                <select
                  id="projectType"
                  required
                  className="field"
                  value={fields.projectType}
                  onChange={(e) => set("projectType", e.target.value)}
                  aria-invalid={errors.projectType ? true : undefined}
                  aria-describedby={errors.projectType ? "projectType-error" : undefined}
                >
                  <option value="">Select a system type…</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="location" label="Project location" error={errors.location}>
                <input
                  id="location"
                  type="text"
                  required
                  className="field"
                  placeholder="City, State, Country"
                  value={fields.location}
                  onChange={(e) => set("location", e.target.value)}
                  aria-invalid={errors.location ? true : undefined}
                  aria-describedby={errors.location ? "location-error" : undefined}
                />
              </Field>
              <p className="text-sm text-on-surface-variant leading-relaxed bg-surface-container p-5 rounded-md">
                <span className="font-bold text-on-surface">
                  Drawings and specifications:
                </span>{" "}
                no upload needed at this stage — once we reply (within 24
                hours) you can attach PDF, DWG or BIM files directly to the
                email thread.
              </p>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field id="area" label="Facility area (sq.ft) — optional" error={errors.area}>
                  <input
                    id="area"
                    type="text"
                    inputMode="numeric"
                    className="field tnum"
                    placeholder="e.g. 50,000"
                    value={fields.area}
                    onChange={(e) => set("area", e.target.value)}
                  />
                </Field>
                <Field id="hazard" label="Hazard classification — optional" error={errors.hazard}>
                  <select
                    id="hazard"
                    className="field"
                    value={fields.hazard}
                    onChange={(e) => set("hazard", e.target.value)}
                  >
                    <option value="">Select classification…</option>
                    {hazardOptions.map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <fieldset>
                <legend className="overline-code text-on-surface-variant mb-3">
                  Applicable codes &amp; standards — optional
                </legend>
                <div className="flex flex-wrap gap-3">
                  {codeOptions.map((code) => (
                    <label
                      key={code}
                      className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-md cursor-pointer hover:bg-surface-container-highest transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="accent-primary"
                        checked={fields.codes.includes(code)}
                        onChange={() => toggle("codes", code)}
                      />
                      <span className="text-sm">{code}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <Field
                id="requirements"
                label="Additional requirements — optional"
                error={errors.requirements}
              >
                <textarea
                  id="requirements"
                  rows={4}
                  className="field resize-none"
                  placeholder="Special conditions, existing infrastructure, or specific requirements…"
                  value={fields.requirements}
                  onChange={(e) => set("requirements", e.target.value)}
                />
              </Field>
            </div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field id="budget" label="Estimated budget range (INR) — optional" error={errors.budget}>
                  <select
                    id="budget"
                    className="field"
                    value={fields.budget}
                    onChange={(e) => set("budget", e.target.value)}
                  >
                    <option value="">Select range…</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="timeline" label="Project timeline — optional" error={errors.timeline}>
                  <select
                    id="timeline"
                    className="field"
                    value={fields.timeline}
                    onChange={(e) => set("timeline", e.target.value)}
                  >
                    <option value="">Select timeline…</option>
                    {timelineOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <fieldset>
                <legend className="overline-code text-on-surface-variant mb-3">
                  Scope of engagement — optional
                </legend>
                <div className="flex flex-wrap gap-3">
                  {scopeOptions.map((scope) => (
                    <label
                      key={scope}
                      className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-md cursor-pointer hover:bg-surface-container-highest transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="accent-primary"
                        checked={fields.scope.includes(scope)}
                        onChange={() => toggle("scope", scope)}
                      />
                      <span className="text-sm">{scope}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <Field id="notes" label="Additional notes — optional" error={errors.notes}>
                <textarea
                  id="notes"
                  rows={3}
                  className="field resize-none"
                  placeholder="Anything else that would help us prepare an accurate proposal…"
                  value={fields.notes}
                  onChange={(e) => set("notes", e.target.value)}
                />
              </Field>

              {/* Review */}
              <div className="bg-surface-container p-6 rounded-md">
                <h2 className="overline-code text-on-surface-variant mb-4">
                  Review before sending
                </h2>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                  <div>
                    <dt className="text-on-surface-variant text-xs">Company</dt>
                    <dd className="text-on-surface font-semibold">{fields.company || "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-on-surface-variant text-xs">Contact</dt>
                    <dd className="text-on-surface font-semibold">
                      {fields.contactPerson || "—"} · {fields.email || "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-on-surface-variant text-xs">Project</dt>
                    <dd className="text-on-surface font-semibold">
                      {fields.projectType || "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-on-surface-variant text-xs">Location</dt>
                    <dd className="text-on-surface font-semibold">{fields.location || "—"}</dd>
                  </div>
                </dl>
              </div>

              {status === "error" && (
                <div
                  className="bg-error-container text-on-error-container rounded-md p-4 text-sm leading-relaxed"
                  role="alert"
                >
                  <p className="font-bold mb-1">The inquiry could not be sent.</p>
                  <p>
                    Please try again, or call us directly on{" "}
                    <a href={site.phoneHref} className="underline font-bold tnum">
                      {site.phone}
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="pt-12 flex justify-between items-center mt-8">
            <button
              type="button"
              onClick={goBack}
              className={`text-primary font-bold flex items-center gap-2 hover:-translate-x-1 transition-transform ${
                currentStep === 1 ? "invisible" : ""
              }`}
            >
              <Icon name="arrow-left" size={18} strokeWidth={2} />
              Back
            </button>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="gradient-primary text-on-primary px-10 py-4 rounded-lg font-headline font-bold flex items-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:active:scale-100"
            >
              {currentStep < 4
                ? "Next step"
                : status === "submitting"
                  ? "Sending…"
                  : "Submit inquiry"}
              {currentStep < 4 && <Icon name="arrow-right" size={18} strokeWidth={2} />}
            </button>
          </div>
        </form>
      </section>

      {/* Info cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: "check-badge",
            title: "Code-reviewed designs",
            desc: "Every design is prepared against NBC, IS, NFPA, OISD and FM codes, plus state-wise AHJ requirements.",
          },
          {
            icon: "gauge",
            title: "Hydraulically proven",
            desc: "Water-based systems are backed by hydraulic analysis — 200+ analyses delivered in the last five years.",
          },
          {
            icon: "mail",
            title: "24-hour response",
            desc: "Inquiries are answered by the engineering team within 24 hours, not a sales queue.",
          },
        ].map((card) => (
          <div key={card.title} className="bg-surface-container p-6 rounded-lg">
            <Icon name={card.icon} size={26} className="text-primary mb-4" />
            <h2 className="font-headline font-bold text-on-surface mb-2">{card.title}</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
