"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Renders /public/images/logo.png. If that file isn't there yet, falls
 * back to the existing text mark so the header/footer never show a
 * broken image.
 */
export default function Logo({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`inline-flex items-center gap-2 font-display text-xl tracking-tight ${className}`}>
        <span aria-hidden className="text-clayDeep">
          ∞
        </span>
        Infinix
      </span>
    );
  }

  return (
    <Image
      src="/images/logo1.png"
      alt="Infinix"
      width={140}
      height={40}
      priority
      onError={() => setFailed(true)}
      className={`h-8 md:h-9 w-auto object-contain ${className}`}
    />
  );
}
