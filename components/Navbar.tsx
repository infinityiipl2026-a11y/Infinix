"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-bone/90 backdrop-blur transition-[border-color,box-shadow] duration-500 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <Link href="/" aria-label="Infinix home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-widest2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative pb-1 transition-colors ${
                pathname === l.href
                  ? "text-ink"
                  : "text-ink/50 hover:text-ink"
              }`}
            >
              {l.label}
              {pathname === l.href && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-px bg-ink" />
              )}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden font-mono text-[11px] uppercase tracking-widest2"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-line bg-bone px-6 py-6 flex flex-col gap-5 font-mono text-[11px] uppercase tracking-widest2"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "text-ink" : "text-ink/50"}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
