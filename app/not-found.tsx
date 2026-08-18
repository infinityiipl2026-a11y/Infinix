import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-32 md:py-44 text-center">
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50 mb-6">
        404
      </p>
      <h1 className="font-display text-4xl md:text-5xl mb-6">
        This page isn&apos;t here.
      </h1>
      <p className="text-ink/60 max-w-sm mx-auto mb-10 leading-relaxed">
        The piece you&apos;re looking for may have sold out of the current
        collection.
      </p>
      <Link
        href="/shop"
        className="inline-flex items-center gap-3 border border-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-widest2 hover:bg-ink hover:text-bone transition-colors duration-300"
      >
        Back to shop
      </Link>
    </section>
  );
}
