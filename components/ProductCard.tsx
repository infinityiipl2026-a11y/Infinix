import Link from "next/link";
import ImageFrame from "./ImageFrame";
import { Product } from "@/lib/products";

export default function ProductCard({
  product,
}: {
  product: Product;
  tall?: boolean;
}) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <ImageFrame
        src={product.image}
        alt={product.name}
        fit="contain"
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 47vw"
        className="w-full aspect-square border border-line/70 transition-transform duration-500 ease-smooth group-hover:scale-[1.02]"
      />
      <div className="mt-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-mono text-[9px] uppercase tracking-widest2 text-ink/40 mb-1">
            {product.category}
          </p>
          <h3 className="font-display text-sm sm:text-base leading-tight truncate">
            {product.name}
          </h3>
        </div>
        <p className="font-mono text-xs sm:text-sm text-ink/70 whitespace-nowrap pt-0.5">
          &#8377;{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </Link>
  );
}
