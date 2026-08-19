import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bone">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          <p className="mt-4 text-sm text-ink/60 max-w-xs leading-relaxed">
            Objects for slower rooms. Designed in small collections, shown
            here for viewing — not for checkout.
          </p>
        </div>

        <div className="md:col-span-2 md:col-start-7">
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink/40 mb-4">
            Explore
          </p>
          <ul className="space-y-3 text-sm">
            <li><Link href="/shop" className="hover:text-clayDeep transition-colors">Shop</Link></li>
            <li><Link href="/about" className="hover:text-clayDeep transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-clayDeep transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink/40 mb-4">
            Collections
          </p>
          <ul className="space-y-3 text-sm">
            <li><Link href="/shop?category=Soap" className="hover:text-clayDeep transition-colors">Soap</Link></li>
            <li><Link href="/shop?category=Hand%20Wash" className="hover:text-clayDeep transition-colors">Hand Wash</Link></li>
            <li><Link href="/shop?category=Sanitizer" className="hover:text-clayDeep transition-colors">Sanitizer</Link></li>
          </ul>
        </div>

        {/* <div className="md:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink/40 mb-4">
            Visit
          </p>
          <p className="text-sm text-ink/70 leading-relaxed">
            Studio 4, Lower Mill Yard<br />
            Open by appointment
          </p>
        </div> */}
      </div>

      <div className="border-t border-line">
        <div className="max-w-content mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest2 text-ink/40">
          <span>&copy; {new Date().getFullYear()} Infinix </span>
          <span>Display only — no online purchasing</span>
        </div>
      </div>
    </footer>
  );
}
