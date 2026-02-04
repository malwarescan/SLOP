import ChromeButton from "../components/chrome/ChromeButton";
import MarketingShell from "../components/MarketingShell";
import HeroIntro from "../components/marketing/HeroIntro";

const pillars = [
  {
    title: "Fact-Grounded by Design",
    copy: "Every caption maps to atomic facts. Unverified claims never ship."
  },
  {
    title: "Provenance Locked",
    copy: "Each asset is stamped with logic and prompt hashes for auditability."
  },
  {
    title: "Operator-Grade Controls",
    copy: "Style presets, motifs, and platform bundles tuned for leaders."
  }
];

export default function Home() {
  return (
    <MarketingShell mainOffset={false} headerBlur={false}>
      <HeroIntro />

      <section className="mx-auto grid max-w-[1240px] gap-5 px-4 py-12 sm:grid-cols-2 sm:gap-6 sm:px-6 sm:py-16 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-card border border-white/10 bg-charcoal/80 p-6 shadow-subtleBorder"
          >
            <h3 className="text-sm uppercase tracking-[0.24em] text-cyan">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm text-steel">{pillar.copy}</p>
          </div>
        ))}
      </section>

      <section className="bg-obsidian-sheen">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-steel">Input</p>
            <h2 className="text-2xl font-semibold uppercase tracking-[0.1em] sm:text-3xl sm:tracking-[0.12em]">
              Logic Packages In
            </h2>
            <p className="text-sm text-steel">
              Answer box, atomic facts, entities, and trend signals flow into the
              operator console. Claims are validated before any narrative exits.
            </p>
            <div className="rounded-card border border-white/10 bg-charcoal/70 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan">
                Required Fields
              </p>
              <ul className="mt-3 space-y-2 text-sm text-steel">
                <li>answer_box</li>
                <li>atomic_facts[]</li>
                <li>claims_allowed[]</li>
                <li>claims_blocked[]</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-steel">Output</p>
            <h2 className="text-2xl font-semibold uppercase tracking-[0.1em] sm:text-3xl sm:tracking-[0.12em]">
              Narrative Packs Out
            </h2>
            <p className="text-sm text-steel">
              Hero imagery, caption packs, and platform kits ship with provenance
              stamped at creation and export time.
            </p>
            <div className="rounded-card border border-white/10 bg-charcoal/70 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan">
                Export Kits
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-steel">
                <span className="rounded-full border border-white/10 px-3 py-1">X</span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Instagram
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  TikTok
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Shorts
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1240px] flex-col gap-4 px-4 py-12 sm:gap-6 sm:px-6 sm:py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold uppercase tracking-[0.1em] sm:text-2xl sm:tracking-[0.12em]">
            Operator Console Ready
          </h3>
          <p className="mt-2 text-sm text-steel">
            Studio, Radar, Library, and Compliance panels tuned for signal-driven
            narrative operations.
          </p>
        </div>
        <ChromeButton label="Launch Studio" />
      </section>
    </MarketingShell>
  );
}
