import ChromeButton from "../../components/chrome/ChromeButton";
import MarketingShell from "../../components/MarketingShell";

const tiers = [
  {
    name: "Operator",
    price: "$4,000",
    copy: "Pilot teams running a single studio cell.",
    bullets: ["10 logic packages / month", "2 seats", "Standard presets"]
  },
  {
    name: "Command",
    price: "$12,000",
    copy: "Narrative squads driving multi-platform packs.",
    bullets: ["50 logic packages / month", "8 seats", "Advanced motif packs"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    copy: "Dedicated compliance + custom rendering pipelines.",
    bullets: ["Unlimited ingest", "Private models", "Audit exports"]
  }
];

export default function Pricing() {
  return (
    <MarketingShell>
      <section className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-steel">Pricing</p>
          <h1 className="text-3xl font-semibold uppercase tracking-[0.12em]">
            Signal-Grade Plans
          </h1>
          <p className="text-sm text-steel">
            All tiers enforce fact-grounding, provenance, and compliance rules.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-card border border-white/10 bg-charcoal/80 p-6 shadow-subtleBorder"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-cyan">
                {tier.name}
              </p>
              <p className="mt-4 text-2xl text-slate-100">{tier.price}</p>
              <p className="mt-2 text-sm text-steel">{tier.copy}</p>
              <ul className="mt-4 space-y-2 text-sm text-steel">
                {tier.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <div className="mt-6">
                <ChromeButton label="Talk to Sales" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </MarketingShell>
  );
}
