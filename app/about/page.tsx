import Link from "next/link";
import type { Metadata } from "next";
import ImageFrame from "@/components/ImageFrame";
import InfinityDivider from "@/components/InfinityDivider";
import Reveal from "@/components/Reveal";
import FranchiseeCard from "@/components/FranchiseeCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "About",
  description:
    "Infinix (Infinity Industries Pvt. Ltd.) makes household, personal care, and fragrance products focused on quality, affordability, and customer trust.",
};

const values = [
  {
    title: "Our Vision",
    copy: "To become a trusted household name by providing reliable and innovative products that improve daily living.",
  },
  {
    title: "Our Mission",
    copy: "To offer premium-quality products while maintaining customer trust, affordability, and excellence.",
  },
  {
    title: "Quality First",
    copy: "Every product undergoes strict quality checks to ensure customer satisfaction.",
  },
  {
    title: "Customer Focus",
    copy: "We believe long-term relationships are built through trust and service.",
  },
];

const loveGrid = [
  {
    title: "Premium Quality",
    copy: "Every product undergoes strict quality checks.",
  },
  {
    title: "Affordable Pricing",
    copy: "Premium products at budget-friendly prices.",
  },
  {
    title: "Easy Availability",
    copy: "Products available across multiple regions.",
  },
  {
    title: "Customer Trust",
    copy: "Building relationships through quality and service.",
  },
];

const franchisees = [
  {
    name: "Disney Frozen",
    image: "/images/frozen.jpg",
    copy: "Infinity Industries Pvt. Ltd. was previously associated with Disney Frozen under an official licensing arrangement, bringing the world of Elsa and Anna to children through a range of personal care and lifestyle products.",
  },
  {
    name: "Mickey & Friends",
    image: "/images/mickey.jpg",
    copy: "Through a past association with Mickey & Friends, Infinity Industries introduced a collection of products inspired by Disney's most beloved characters, for children and families.",
  },
  {
    name: "Marvel Spider-Man",
    image: "/images/spiderman.jpg",
    copy: "A past collaboration with Marvel Spider-Man allowed Infinity Industries to offer products inspired by one of the world's most iconic superheroes.",
  },
];

const stats = [
  { value: `${products.length}+`, label: "Products" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "50+", label: "Cities Served" },
  { value: "5+", label: "Years Experience" },
];

export default function AboutPage() {
  return (
    <>
      <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-20 md:pb-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
        <Reveal className="md:col-span-6">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50 mb-6">
            About
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-[0.98] mb-8">
            About Infinix.
          </h1>
          <p className="text-ink/70 leading-relaxed max-w-md">
            Infinix, from Infinity Industries Pvt. Ltd., is committed to
            delivering high-quality consumer products that enhance everyday
            life. Our focus is on innovation, quality, and customer
            satisfaction.
          </p>
        </Reveal>
        <Reveal delay={120} className="md:col-span-5 md:col-start-8">
          <ImageFrame
            src="/images/products/sandalwood-soap.webp"
            alt="An Infinix sandalwood soap bar"
            priority
            className="aspect-[4/5]"
          />
        </Reveal>
      </section>

      <div className="max-w-content mx-auto px-6 md:px-10">
        <InfinityDivider />
      </div>

      {/* Vision / Mission / Quality / Customer Focus */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <h3 className="font-display text-xl mb-3">{v.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{v.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why customers love Infinix */}
      <section className="bg-paper border-y border-line">
        <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl mb-14">
              Why customers love Infinix
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {loveGrid.map((l, i) => (
              <Reveal key={l.title} delay={i * 90}>
                <h3 className="font-display text-xl mb-3">{l.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{l.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <p className="font-display text-4xl md:text-5xl text-clayDeep">
                {s.value}
              </p>
              <p className="text-sm text-ink/60 mt-2">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="max-w-content mx-auto px-6 md:px-10">
        <InfinityDivider />
      </div>

      {/* Previous franchisee associations */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl mb-3">
            Previous Franchisee Associations
          </h2>
          <p className="text-sm text-ink/60 max-w-2xl mb-14 leading-relaxed">
            Past licensing partnerships Infinity Industries has held.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8">
          {franchisees.map((f, i) => (
            <Reveal key={f.name} delay={i * 90}>
              <FranchiseeCard name={f.name} image={f.image} copy={f.copy} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-content mx-auto px-6 md:px-10 pb-24 md:pb-32">
        <Reveal>
          <div className="border border-line px-8 py-16 md:py-20 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              See the current collection
            </h2>
            <p className="text-ink/60 max-w-md mx-auto mb-9 leading-relaxed">
              {products.length} products, shown as they stand today.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 border border-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-widest2 hover:bg-ink hover:text-bone transition-colors duration-300"
            >
              Go to shop
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}