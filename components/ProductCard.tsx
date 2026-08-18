import Link from "next/link";
import ImageFrame from "./ImageFrame";
import { Product } from "@/lib/products";

export default function ProductCard({
  product,
  tall = false,
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
        className={`w-full ${tall ? "aspect-[3/4]" : "aspect-[4/5]"} transition-transform duration-700 ease-smooth group-hover:scale-[1.03]`}
      />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink/40 mb-1">
            {product.category}
          </p>
          <h3 className="font-display text-lg leading-tight">
            {product.name}
          </h3>
        </div>
        <p className="font-mono text-sm text-ink/70 whitespace-nowrap pt-1">
          &#8377;{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </Link>
  );
}
