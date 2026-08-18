"use client";

import { useRef } from "react";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { Product } from "@/lib/products";

/**
 * Shows a row of products.
 * - On mobile: a swipeable, snap-scrolling carousel (one card + a peek of
 *   the next) with arrow buttons for anyone not using touch.
 * - From `sm` up: a regular static grid, same as the rest of the site.
 */
export default function ProductCarousel({ products }: { products: Product[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-item]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.7;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar -mx-6 px-6 pb-1
          sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-14 sm:overflow-visible"
      >
        {products.map((p, i) => (
          <div
            key={p.slug}
            data-carousel-item
            className="shrink-0 w-[58%] snap-start sm:w-auto sm:shrink"
          >
            <Reveal delay={i * 90}>
              <ProductCard product={p} />
            </Reveal>
          </div>
        ))}
      </div>

      {products.length > 1 && (
        <div className="flex justify-end gap-2 mt-4 sm:hidden">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous product"
            className="flex h-9 w-9 items-center justify-center border border-line text-ink/60 hover:text-ink hover:border-ink transition-colors"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next product"
            className="flex h-9 w-9 items-center justify-center border border-line text-ink/60 hover:text-ink hover:border-ink transition-colors"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
