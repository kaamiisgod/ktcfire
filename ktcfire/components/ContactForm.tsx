"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Replace with actual form submission (API route, email service, etc.)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-surface-container-low p-10 md:p-14 flex flex-col items-center justify-center text-center gap-4">
        <span
          className="material-symbols-outlined text-6xl text-primary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
        <h3 className="font-headline font-bold text-2xl text-on-surface">
          Message Sent!
        </h3>
        <p className="text-on-surface-variant max-w-sm">
          Thank you for reaching out. Our engineering team will get back to you
          within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-primary font-headline font-bold text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low p-10 md:p-14">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            required
            className="w-full bg-surface-container-high border-none p-4 rounded-t-lg font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
            Corporate Email
          </label>
          <input
            type="email"
            placeholder="info@company.com"
            required
            className="w-full bg-surface-container-high border-none p-4 rounded-t-lg font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">
            Project Brief
          </label>
          <textarea
            rows={4}
            placeholder="Describe your safety engineering needs..."
            required
            className="w-full bg-surface-container-high border-none p-4 rounded-t-lg font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full gradient-primary text-white py-4 rounded-xl font-headline font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
