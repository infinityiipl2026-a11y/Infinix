"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { categories, products } from "@/lib/products";

const tabs = ["All", ...categories];

export default function ShopGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") ?? "All";

  const filtered = useMemo(() => {
    if (active === "All") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  const setCategory = (tab: string) => {
    if (tab === "All") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${encodeURIComponent(tab)}`);
    }
  };

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter by collection"
        className="flex flex-wrap gap-x-8 gap-y-3 mb-14 border-b border-line pb-6"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={active === tab}
            onClick={() => setCategory(tab)}
            className={`font-mono text-[11px] uppercase tracking-widest2 transition-colors pb-1 border-b ${
              active === tab
                ? "text-ink border-ink"
                : "text-ink/45 border-transparent hover:text-ink"
            }`}
          >
            {tab}
          </button>
        ))}
        <span className="ml-auto font-mono text-[11px] text-ink/40 uppercase tracking-widest2">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
        {filtered.map((product, i) => (
          <Reveal key={product.slug} delay={(i % 3) * 80}>
            <ProductCard product={product} tall={i % 5 === 1} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink/50 py-20 text-center font-mono text-sm uppercase tracking-widest2">
          No pieces in this collection yet.
        </p>
      )}
    </>
  );
}
