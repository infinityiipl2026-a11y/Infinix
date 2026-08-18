import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";


export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Infinix (Infinity Industries Pvt. Ltd.) for product enquiries, business opportunities, and franchise partnerships.",
};

export default function ContactPage() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-24 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50 mb-6">
            Contact
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-[0.98] mb-8">
            Get in touch.
          </h1>
          <p className="text-ink/70 leading-relaxed max-w-sm mb-12">
            We&apos;d love to hear from you — reach out for product
            enquiries, business opportunities, franchise partnerships, or
            customer support.
          </p>

          <div className="space-y-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink/40 mb-2">
                Email
              </p>
              <p className="text-sm text-ink/70">
                <a href="mailto:support@infinitycpd.in" className="hover:text-clayDeep transition-colors">
                  support@infinitycpd.in
                </a>
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink/40 mb-2">
                Telephone
              </p>
              <p className="text-sm text-ink/70">
                <a href="tel:+912240462288" className="hover:text-clayDeep transition-colors">
                  +91 22 4046 2288
                </a>
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink/40 mb-2">
                Head Office
              </p>
              <p className="text-sm text-ink/70 leading-relaxed">
                1st Floor, Haroon House,<br />
                294, Perin Nariman St,<br />
                Opposite Reserve Bank Of India,<br />
                Fort, Mumbai,<br />
                Maharashtra 400001
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink/40 mb-2">
                Follow Us
              </p>
              <p className="text-sm text-ink/70 flex gap-3">
                <a href="https://www.instagram.com/infinitycpd/" target="_blank" rel="noreferrer" className="hover:text-clayDeep transition-colors">
                  Instagram
                </a>
                <span>·</span>
                <a href="https://www.facebook.com/infinitycpd.in/" target="_blank" rel="noreferrer" className="hover:text-clayDeep transition-colors">
                  Facebook
                </a>
                <span>·</span>
                <a href="https://pin.it/tperhrupkmjhqb" target="_blank" rel="noreferrer" className="hover:text-clayDeep transition-colors">
                  Pinterest
                </a>
              </p>
            </div>
          </div>

          <div className="mt-14 border border-line overflow-hidden">
            <iframe
              title="Infinix Head Office — Mumbai"
              src="https://maps.google.com/maps?q=Infinity%20Industries%20Pvt%20Ltd%20Fort%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-6 md:col-start-7">
          <div className="border border-line p-8 md:p-10">
            <h2 className="font-display text-2xl mb-8">Send a message</h2>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}