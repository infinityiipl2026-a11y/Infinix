import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ImageFrame from "@/components/ImageFrame";
import InfinityDivider from "@/components/InfinityDivider";
import ProductCarousel from "@/components/ProductCarousel";
import Reveal from "@/components/Reveal";
import { getProduct, products } from "@/lib/products";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
    openGraph: {
      title: `${product.name} — Infinix`,
      description: product.tagline,
      images: [product.image],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <section className="max-w-content mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-20 md:pb-28">
        <Reveal>
          <nav className="font-mono text-[10px] uppercase tracking-widest2 text-ink/40 mb-10 flex gap-2">
            <Link href="/shop" className="hover:text-ink">Shop</Link>
            <span>/</span>
            <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-ink">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-ink/70">{product.name}</span>
          </nav>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="md:col-span-7">
            <Reveal>
              <ImageFrame
                src={product.image}
                alt={product.name}
                priority
                fit="contain"
                className="aspect-square border border-line/70"
                sizes="(min-width: 768px) 55vw, 100vw"
              />
            </Reveal>
          </div>

          {/* Info */}
          <Reveal delay={120} className="md:col-span-4 md:col-start-9">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink/40 mb-4">
              {product.category}
            </p>
            <h1 className="font-display text-4xl leading-tight mb-3">
              {product.name}
            </h1>
            <p className="text-ink/60 italic font-display text-lg mb-6">
              {product.tagline}
            </p>
            <p className="font-mono text-lg mb-8">
              &#8377;{product.price.toLocaleString("en-IN")}
            </p>

            <p className="text-ink/70 leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="border-t border-line">
              {product.details.map((d) => (
                <div
                  key={d.label}
                  className="flex items-start justify-between gap-6 py-3.5 border-b border-line"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink/40 pt-0.5">
                    {d.label}
                  </span>
                  <span className="text-sm text-right">{d.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-4">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 border border-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-widest2 hover:bg-ink hover:text-bone transition-colors duration-300"
              >
                Enquire about this piece
              </Link>
              <p className="text-xs text-ink/40 text-center leading-relaxed">
                Shown for display only. Infinix does not sell online —
                get in touch for stock and viewing appointments.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="max-w-content mx-auto px-6 md:px-10 pb-24">
          <InfinityDivider label="More from this collection" />
          <div className="mt-14">
            <ProductCarousel products={related} />
          </div>
        </section>
      )}
    </>
  );
}
