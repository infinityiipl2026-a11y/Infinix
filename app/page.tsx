import Link from "next/link";
import Image from "next/image";
import ImageFrame from "@/components/ImageFrame";
import InfinityDivider from "@/components/InfinityDivider";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { categoryGroups, products } from "@/lib/products";

const featured = products.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-16 md:pb-0 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-center">
          <div className="md:col-span-5 md:col-start-1 order-2 md:order-1">
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50 mb-6">
              Infinix 
            </p>
            <h1 className="font-display text-[13vw] leading-[0.95] md:text-[5.2vw] md:leading-[0.95] tracking-tight">
              Everyday care,
              <br />
              <span className="italic text-clayDeep">made</span> simple.
            </h1>
            <p className="mt-8 max-w-md text-ink/70 leading-relaxed">
              Infinix makes soaps, hand washes, sanitizers, and everyday
              hygiene essentials — built for daily use, priced to be
              stocked in every bathroom, not saved for special occasions.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 border border-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-widest2 hover:bg-ink hover:text-bone transition-colors duration-300"
              >
                View the collection
              </Link>
              <Link
                href="/about"
                className="font-mono text-[11px] uppercase tracking-widest2 text-ink/60 hover:text-ink underline underline-offset-4 decoration-line"
              >
                Our approach
              </Link>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6 order-1 md:order-2">
            <ImageFrame
              src="/images/hero-banner.webp"
              alt="The full Infinix product range, arranged together"
              priority
              fit="contain"
              className="aspect-[4/3]"
              sizes="(min-width: 768px) 58vw, 100vw"
            />
          </div>
        </div>
      </section>

      <div className="max-w-content mx-auto px-6 md:px-10 mt-20 md:mt-28">
        <InfinityDivider label="Infinity Industries" />
      </div>

      {/* STATEMENT LINE */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-24">
        <Reveal>
          <p className="font-display text-2xl md:text-4xl leading-snug max-w-3xl">
            We make the products people reach for every day — a soap, a
            hand wash, a sanitizer — and price them{" "}
            <span className="italic text-clayDeep">so quality never</span>{" "}
            has to be the thing you skip.
          </p>
        </Reveal>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-content mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <Reveal>
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-2xl md:text-3xl">
              This season
            </h2>
            <Link
              href="/shop"
              className="font-mono text-[11px] uppercase tracking-widest2 text-ink/60 hover:text-ink hidden sm:block"
            >
              All products &rarr;
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
          {featured.map((product, i) => (
            <Reveal key={product.slug} delay={i * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* EDITORIAL / ABOUT TEASER */}
      <section className="bg-paper border-y border-line">
        <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <Reveal className="md:col-span-5">
            <ImageFrame
              src="/images/products/lavender-hygiene-kit.webp"
              alt="An Infinix hygiene kit and personal care essentials"
              className="aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink/40 mb-5">
              About Infinix
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
              Quality care, at a fair price.
            </h2>
            <p className="text-ink/70 leading-relaxed max-w-md mb-8">
              Every Infinix product is formulated and quality-checked before
              it reaches a shelf. We keep our range focused on the personal
              care and household hygiene essentials people actually use
              every day, so quality and affordability don't have to compete.
            </p>
            <Link
              href="/about"
              className="font-mono text-[11px] uppercase tracking-widest2 border-b border-ink pb-1 hover:text-clayDeep hover:border-clayDeep transition-colors"
            >
              Read our approach
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl text-center mb-3">
            Shop by category
          </h2>
          <div className="w-10 h-px bg-clay mx-auto mb-14" />
        </Reveal>
        <div className="grid grid-cols-3 gap-6 md:gap-10 max-w-2xl mx-auto">
          {categoryGroups.map((g, i) => (
            <Reveal key={g.slug} delay={i * 90}>
              <Link href={`/shop?group=${g.slug}`} className="group flex flex-col items-center gap-4 text-center">
                <span className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-paper border border-line flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-clay">
                  <Image
                    src={g.icon}
                    alt=""
                    aria-hidden
                    width={56}
                    height={56}
                    className="w-9 h-9 sm:w-12 sm:h-12 object-contain"
                  />
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest2 text-ink leading-snug">
                  {g.label}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
