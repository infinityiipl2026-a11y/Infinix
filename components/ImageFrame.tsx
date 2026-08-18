import Image from "next/image";

interface ImageFrameProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Wraps every product / editorial photograph in the same warm, slightly
 * desaturated treatment so imagery from different sources reads as one
 * consistent Infinix world.
 */
export default function ImageFrame({
  src,
  alt,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  className = "",
}: ImageFrameProps) {
  return (
    <div className={`relative overflow-hidden bg-line/40 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover grayscale-[8%] contrast-[1.03] saturate-[0.92]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-clay/[0.10] mix-blend-multiply"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent"
      />
    </div>
  );
}
