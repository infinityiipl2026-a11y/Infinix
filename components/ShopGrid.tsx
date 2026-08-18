"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { categories, categoryGroups, products } from "@/lib/products";

const tabs = ["All", ...categories];

export default function ShopGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const groupSlug = searchParams.get("group");
  const group = groupSlug ? categoryGroups.find((g) => g.slug === groupSlug) : undefined;
  const active = group ? "All" : searchParams.get("category") ?? "All";

  const filtered = useMemo(() => {
    if (group) return products.filter((p) => group.categories.includes(p.category));
    if (active === "All") return products;
    return products.filter((p) => p.category === active);
  }, [active, group]);

  const setCategory = (tab: string) => {
    if (tab === "All") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${encodeURIComponent(tab)}`);
    }
  };

  return (
    <>
      {group && (
        <div className="mb-8 flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50">
            Showing: {group.label}
          </span>
          <button
            onClick={() => router.push("/shop")}
            className="font-mono text-[11px] uppercase tracking-widest2 text-ink/40 hover:text-ink underline underline-offset-4 decoration-line"
          >
            Clear
          </button>
        </div>
      )}

      <div
        role="tablist"
        aria-label="Filter by collection"
        className="flex flex-wrap gap-x-8 gap-y-3 mb-14 border-b border-line pb-6"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={!group && active === tab}
            onClick={() => setCategory(tab)}
            className={`font-mono text-[11px] uppercase tracking-widest2 transition-colors pb-1 border-b ${
              !group && active === tab
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
        {filtered.map((product, i) => (
          <Reveal key={product.slug} delay={(i % 4) * 80}>
            <ProductCard product={product} />
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
