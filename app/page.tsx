import Link from "next/link";
import ImageFrame from "@/components/ImageFrame";
import InfinityDivider from "@/components/InfinityDivider";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/products";

const featured = products.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-16 md:pb-0 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-end">
          <div className="md:col-span-6 md:col-start-1 order-2 md:order-1">
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50 mb-6">
              Infinix — Current Collection
            </p>
            <h1 className="font-display text-[13vw] leading-[0.95] md:text-[5.2vw] md:leading-[0.95] tracking-tight">
              Objects for
              <br />
              <span className="italic text-clayDeep">slower</span> rooms.
            </h1>
            <p className="mt-8 max-w-md text-ink/70 leading-relaxed">
              Infinix designs candles, diffusers, and light objects in small,
              considered collections — built to be lived with, not just
              looked at.
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

          <div className="md:col-span-5 md:col-start-8 order-1 md:order-2">
            <ImageFrame
              src="/images/products/aloe-vera-soap.webp"
              alt="An Infinix candle vessel resting on a stone surface"
              priority
              className="aspect-[4/5] md:aspect-[3/4] md:translate-y-10"
              sizes="(min-width: 768px) 42vw, 100vw"
            />
          </div>
        </div>
      </section>

      <div className="max-w-content mx-auto px-6 md:px-10 mt-20 md:mt-28">
        <InfinityDivider label="Est. Studio" />
      </div>

      {/* STATEMENT LINE */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-24">
        <Reveal>
          <p className="font-display text-2xl md:text-4xl leading-snug max-w-3xl">
            We design in threes — a candle, a diffuser, an object — and
            release them together, so a room can be furnished{" "}
            <span className="italic text-clayDeep">in one sitting</span>{" "}
            rather than assembled over years.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {featured.map((product, i) => (
            <Reveal key={product.slug} delay={i * 90}>
              <ProductCard product={product} tall={i === 1} />
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
              alt="Inside the Infinix studio, materials and vessels laid out on a workbench"
              className="aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink/40 mb-5">
              About Infinix
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
              Fewer objects, made to last longer.
            </h2>
            <p className="text-ink/70 leading-relaxed max-w-md mb-8">
              Every Infinix collection is designed, cast, and finished in one
              studio, in quantities small enough to inspect by hand. We
              publish two collections a year and let them sell out rather
              than reproduce them endlessly.
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
          <h2 className="font-display text-2xl md:text-3xl mb-10">
            Shop by collection
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              cat: "Soap",
              image: "/images/products/aloe-vera-soap.webp",
              copy: "Everyday bars in aloe vera, charcoal, sandalwood, and more.",
            },
            {
              cat: "Hand Wash",
              image: "/images/products/lavender-hand-wash.webp",
              copy: "Gentle liquid hand washes for daily hygiene.",
            },
            {
              cat: "Sanitizer",
              image: "/images/products/aqua-sanitizer.webp",
              copy: "Quick-drying sanitizers for on-the-go use.",
            },
          ].map((c, i) => (
            <Reveal key={c.cat} delay={i * 90}>
              <Link href={`/shop?category=${encodeURIComponent(c.cat)}`} className="group block">
                <ImageFrame
                  src={c.image}
                  alt={c.cat}
                  className="aspect-[4/5] transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
                />
                <div className="mt-4">
                  <h3 className="font-display text-xl">{c.cat}</h3>
                  <p className="text-sm text-ink/60 mt-1">{c.copy}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative">
        <div className="relative h-[70vh] min-h-[420px] max-h-[640px] overflow-hidden">
          <ImageFrame
            src="/images/products/masculin-value-pack.webp"
            alt="A dimly lit room with an Infinix lamp and candle"
            className="absolute inset-0 h-full w-full"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/35" />
          <div className="relative h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-end pb-16 md:pb-20">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-bone/70 mb-4">
                Now viewing — full collection
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-bone max-w-xl leading-tight mb-8">
                See every piece in the current release.
              </h2>
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 bg-bone text-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-widest2 hover:bg-clay hover:text-ink transition-colors duration-300 w-fit"
              >
                Enter the shop
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
