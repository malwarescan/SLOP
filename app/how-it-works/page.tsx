import Beam from "../../components/beam/Beam";
import MarketingShell from "../../components/MarketingShell";

const steps = [
  {
    title: "Ingest Logic Package",
    copy: "Croutons/Precogs feeds answer boxes, facts, and claims into the console."
  },
  {
    title: "Select Narrative Controls",
    copy: "Operators choose preset, platform targets, and motif toggles."
  },
  {
    title: "Generate Provenance Packs",
    copy: "Assets and copy ship only after grounding checks pass."
  }
];

export default function HowItWorks() {
  return (
    <MarketingShell>
      <section className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-steel">How It Works</p>
          <h1 className="text-3xl font-semibold uppercase tracking-[0.12em]">
            From Signal to Narrative
          </h1>
          <p className="text-sm text-steel">
            The console never ships ungrounded claims. Every output is traced back
            to the logic package that created it.
          </p>
          <Beam height="180px" />
        </div>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-card border border-white/10 bg-charcoal/80 p-5 shadow-subtleBorder"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-cyan">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-lg text-slate-100">{step.title}</h3>
              <p className="mt-2 text-sm text-steel">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </MarketingShell>
  );
}
