"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const interest = (form.elements.namedItem("interest") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    const company = (form.elements.namedItem("company") as HTMLInputElement).value; // honeypot

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, interest, message, company }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-line px-8 py-14 text-center">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-clayDeep mb-4">
          Message received
        </p>
        <h3 className="font-display text-2xl mb-3">Thank you.</h3>
        <p className="text-ink/60 max-w-sm mx-auto leading-relaxed">
          We reply to every enquiry within two working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <Field label="Name" name="name" type="text" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
      </div>
      <Field label="Interested in (optional)" name="interest" type="text" placeholder="e.g. Ember Vessel" />
      {/* Honeypot field: hidden from real users, bots tend to fill it in */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div>
        <label
          htmlFor="message"
          className="block font-mono text-[10px] uppercase tracking-widest2 text-ink/50 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border border-line px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors resize-none"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-clayDeep">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-3 border border-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-widest2 hover:bg-ink hover:text-bone transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-[10px] uppercase tracking-widest2 text-ink/50 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border border-line px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors"
      />
    </div>
  );
}
