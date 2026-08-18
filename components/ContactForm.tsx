"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError(null);
    // Display-only: no backend is wired up. In production, POST to an
    // API route or third-party form/email service here.
    setSubmitted(true);
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
        className="inline-flex items-center gap-3 border border-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-widest2 hover:bg-ink hover:text-bone transition-colors duration-300"
      >
        Send enquiry
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
