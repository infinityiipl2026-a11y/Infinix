import { Suspense } from "react";
import type { Metadata } from "next";
import ShopGrid from "@/components/ShopGrid";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse the current Infinix collection — candles, diffusers, and objects, shown for viewing only.",
};

export default function ShopPage() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-24">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50 mb-4">
          Full Collection
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-none mb-6">
          Shop
        </h1>
        <p className="text-ink/60 max-w-md mb-14 leading-relaxed">
          Every current piece, shown here for viewing. Infinix is a display
          catalogue — for pricing and availability, visit us in person or get
          in touch.
        </p>
      </Reveal>

      <Suspense fallback={<div className="h-96" />}>
        <ShopGrid />
      </Suspense>
    </section>
  );
}
