const triggers = [
  {
    cluster: "clean infra surge",
    type: "rising_query",
    urgency: 78,
    window: "6h",
    preset: "Artifact Minimal"
  },
  {
    cluster: "oracle garden",
    type: "competitor_gap",
    urgency: 64,
    window: "9h",
    preset: "Collage Oracle"
  }
];

export default function TriggerTable() {
  return (
    <div className="rounded-card border border-white/10 bg-charcoal/80 p-4 shadow-subtleBorder sm:p-5">
      <div className="hidden grid-cols-5 gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-steel md:grid">
        <span>Cluster</span>
        <span>Type</span>
        <span>Urgency</span>
        <span>Window</span>
        <span>Preset</span>
      </div>
      <div className="mt-4 space-y-3 text-sm">
        {triggers.map((item) => (
          <div
            key={item.cluster}
            className="rounded-lg border border-white/10 bg-obsidian/60 p-3"
          >
            <div className="grid gap-3 md:grid-cols-5 md:items-center md:gap-3">
              <div className="min-w-0">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-steel md:hidden">
                  Cluster
                </p>
                <p className="truncate text-slate-100">{item.cluster}</p>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-steel md:hidden">
                  Type
                </p>
                <p className="text-steel">{item.type}</p>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-steel md:hidden">
                  Urgency
                </p>
                <p className="text-cyan">{item.urgency}</p>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-steel md:hidden">
                  Window
                </p>
                <p className="text-steel">{item.window}</p>
              </div>
              <div className="pt-2 md:pt-0 md:text-right">
                <button className="w-full rounded-full border border-cyan/40 px-3 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-cyan md:w-auto">
                  Generate Pack
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
