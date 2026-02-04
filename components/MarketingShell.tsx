import Link from "next/link";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/proof", label: "Proof" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" }
];

export default function MarketingShell({
  children,
  mainOffset = true
}: {
  children: React.ReactNode;
  mainOffset?: boolean;
}) {
  return (
    <div className="min-h-screen bg-obsidian text-slate-100">
      <header
        id="site-header"
        className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-obsidian/90 backdrop-blur"
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm uppercase tracking-[0.4em] text-cyan">
            SLOP.TECHNOLOGY
          </Link>
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.25em] text-steel md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-cyan">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/studio"
            className="rounded-full border border-cyan/40 px-4 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-cyan"
          >
            Operator Console
          </Link>
        </div>
      </header>
      <main className={mainOffset ? "pt-20" : ""}>{children}</main>
      <footer className="border-t border-white/10 bg-obsidian/95">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-6 py-8 text-xs uppercase tracking-[0.3em] text-steel md:flex-row md:items-center md:justify-between">
          <span>SLOP.TECHNOLOGY</span>
          <span>Oracle Garden Protocol</span>
        </div>
      </footer>
    </div>
  );
}
