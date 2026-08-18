"use client";

import Image from "next/image";
import { useState } from "react";

export default function FranchiseeCard({
  name,
  image,
  copy,
}: {
  name: string;
  image: string;
  copy: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div>
      <div className="relative aspect-square bg-paper border border-line overflow-hidden mb-5">
        {failed ? (
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink/35">
              Image coming soon
            </span>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-contain p-[6%]"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <h3 className="font-display text-xl mb-3">{name}</h3>
      <p className="text-sm text-ink/60 leading-relaxed">{copy}</p>
    </div>
  );
}
