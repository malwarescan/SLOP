import MarketingShell from "../../components/MarketingShell";
import ProvenanceStamp from "../../components/provenance/ProvenanceStamp";

const metrics = [
  { label: "Fact-Grounded Lines", value: "98%" },
  { label: "Avg. Job Time", value: "2m 14s" },
  { label: "Export Success", value: "100%" }
];

export default function Proof() {
  return (
    <MarketingShell>
      <section className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-steel">Proof</p>
            <h1 className="text-3xl font-semibold uppercase tracking-[0.12em]">
              Provenance You Can Audit
            </h1>
            <p className="text-sm text-steel">
              Every output carries logic and prompt hashes for instant traceability.
              Compliance policies are enforced at generation time.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-card border border-white/10 bg-charcoal/80 p-4 text-center"
                >
                  <p className="text-xl text-cyan">{metric.value}</p>
                  <p className="mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-steel">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-card border border-white/10 bg-charcoal/80 p-4">
            <video
              className="w-full rounded-[12px]"
              src="/sloptech-720p.mp4"
              controls
              preload="metadata"
            />
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.28em] text-steel">
                Sample Export
              </span>
              <ProvenanceStamp hash="6a9bf2cc" grounded />
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
