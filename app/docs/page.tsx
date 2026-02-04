import MarketingShell from "../../components/MarketingShell";

const docs = [
  { title: "API Contract", desc: "Endpoints, auth, and job state machine." },
  { title: "Logic Package Schema", desc: "Atomic facts, claims, and trend signals." },
  { title: "Narrative Package Schema", desc: "Assets, copy, provenance, and export kits." }
];

export default function Docs() {
  return (
    <MarketingShell>
      <section className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 sm:py-16">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-steel">Docs</p>
          <h1 className="text-2xl font-semibold uppercase tracking-[0.1em] sm:text-3xl sm:tracking-[0.12em]">
            Operator Documentation
          </h1>
          <p className="text-sm text-steel">
            Public index with deep docs available to authenticated operators.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((item) => (
            <div
              key={item.title}
              className="rounded-card border border-white/10 bg-charcoal/80 p-5 sm:p-6"
            >
              <h3 className="text-sm uppercase tracking-[0.24em] text-cyan">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-steel">{item.desc}</p>
              <button className="mt-4 text-[0.65rem] uppercase tracking-[0.22em] text-cyan">
                Open
              </button>
            </div>
          ))}
        </div>
      </section>
    </MarketingShell>
  );
}
