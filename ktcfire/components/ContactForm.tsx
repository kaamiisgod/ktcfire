"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { site } from "@/lib/content/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: { name: string; email: string; message: string }): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!values.message.trim()) errors.message = "Tell us briefly about the project.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [startedAt] = useState(() => Date.now());
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "contact",
          startedAt,
          website: honeypot,
          fields: values,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          fieldErrors?: Errors;
        };
        if (data.fieldErrors) setErrors(data.fieldErrors);
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
      <div className="bg-surface-container-lowest rounded-lg p-10 md:p-14 flex flex-col items-center justify-center text-center gap-4 h-full">
        <Icon name="check-circle" size={56} className="text-primary" label="" />
        <h3 className="font-headline font-bold text-2xl text-on-surface">
          Message sent
        </h3>
        <p className="text-on-surface-variant max-w-sm leading-relaxed">
          Thank you for reaching out. Our engineering team will get back to you
          within 24 hours.
        </p>
        <button
          onClick={() => {
            setValues({ name: "", email: "", message: "" });
            setStatus("idle");
          }}
          className="mt-4 text-primary font-headline font-bold text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest rounded-lg p-8 md:p-12">
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        {/* Honeypot — humans never see or fill this. */}
        <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="overline-code text-on-surface-variant block"
          >
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="field"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className="field-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="overline-code text-on-surface-variant block"
          >
            Work email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="field"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && (
            <p id="contact-email-error" className="field-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-message"
            className="overline-code text-on-surface-variant block"
          >
            Project brief
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            className="field resize-none"
            placeholder="System type, site, and what you need designed…"
            value={values.message}
            onChange={(e) =>
              setValues((v) => ({ ...v, message: e.target.value }))
            }
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
          />
          {errors.message && (
            <p id="contact-message-error" className="field-error" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {status === "error" && (
          <div
            className="bg-error-container text-on-error-container rounded-md p-4 text-sm leading-relaxed"
            role="alert"
          >
            <p className="font-bold mb-1">The message could not be sent.</p>
            <p>
              Please try again, or call us directly on{" "}
              <a href={site.phoneHref} className="underline font-bold tnum">
                {site.phone}
              </a>
              .
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full gradient-primary text-on-primary py-4 rounded-lg font-headline font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:active:scale-100"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
