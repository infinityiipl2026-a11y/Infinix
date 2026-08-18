"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The Infinix signature mark: a single continuous line drawn as an
 * elongated figure-eight, used between major sections in place of a
 * generic rule. It draws itself in once when scrolled into view.
 */
export default function InfinityDivider({
  label,
}: {
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center gap-6 py-4 md:py-6"
    >
      <span className="h-px flex-1 bg-line" />
      <svg
        width="72"
        height="28"
        viewBox="0 0 72 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M18 14C18 8 22 4 27 4C34 4 36 14 36 14C36 14 38 24 45 24C50 24 54 20 54 14C54 8 50 4 45 4C38 4 36 14 36 14C36 14 34 24 27 24C22 24 18 20 18 14Z"
          stroke="#14181A"
          strokeWidth="1.3"
          pathLength={1}
          className={`infinity-path ${drawn ? "is-drawn" : ""}`}
        />
      </svg>
      {label ? (
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink/50 shrink-0">
          {label}
        </span>
      ) : null}
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
