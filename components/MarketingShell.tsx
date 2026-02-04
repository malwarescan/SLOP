import Link from "next/link";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/proof", label: "Proof" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" }
];

export default function MarketingShell({
  children,
  mainOffset = true,
  headerBlur = true
}: {
  children: React.ReactNode;
  mainOffset?: boolean;
  headerBlur?: boolean;
}) {
  return (
    <div className="min-h-screen bg-obsidian text-slate-100">
      <header
        id="site-header"
        className={`fixed inset-x-0 top-0 z-20 border-b border-white/10 ${
          headerBlur ? "bg-obsidian/90 md:backdrop-blur" : "bg-obsidian/95"
        }`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <Link
            href="/"
            className="min-w-0 truncate text-[0.7rem] uppercase tracking-[0.3em] text-cyan sm:text-sm sm:tracking-[0.4em]"
          >
            SLOP.TECHNOLOGY
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.25em] text-steel md:flex">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-cyan">
                  {link.label}
                </Link>
              ))}
            </nav>

            <details className="relative md:hidden">
              <summary className="list-none rounded-full border border-white/10 bg-obsidian/60 px-3 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-steel [&::-webkit-details-marker]:hidden">
                Menu
              </summary>
              <div className="absolute right-0 mt-3 w-60 rounded-card border border-white/10 bg-obsidian/95 p-2 shadow-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-3 py-3 text-xs uppercase tracking-[0.25em] text-steel hover:bg-white/5 hover:text-cyan"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href="/studio"
              className="whitespace-nowrap rounded-full border border-cyan/40 px-3 py-2 text-[0.6rem] uppercase tracking-[0.25em] text-cyan sm:px-4 sm:text-[0.65rem]"
            >
              Operator Console
            </Link>
          </div>
        </div>
      </header>
      <main className={mainOffset ? "pt-16 sm:pt-20" : ""}>{children}</main>
      <footer className="border-t border-white/10 bg-obsidian/95">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-4 py-6 text-xs uppercase tracking-[0.25em] text-steel sm:px-6 sm:py-8 sm:tracking-[0.3em] md:flex-row md:items-center md:justify-between">
          <span>SLOP.TECHNOLOGY</span>
          <span>Oracle Garden Protocol</span>
        </div>
      </footer>
    </div>
  );
}
