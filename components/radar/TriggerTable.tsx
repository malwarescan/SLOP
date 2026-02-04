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
    <div className="rounded-card border border-white/10 bg-charcoal/80 p-5 shadow-subtleBorder">
      <div className="grid grid-cols-5 gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-steel">
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
            className="grid grid-cols-5 items-center gap-3 rounded-lg border border-white/10 bg-obsidian/60 px-3 py-3"
          >
            <span>{item.cluster}</span>
            <span className="text-steel">{item.type}</span>
            <span className="text-cyan">{item.urgency}</span>
            <span className="text-steel">{item.window}</span>
            <button className="rounded-full border border-cyan/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-cyan">
              Generate Pack
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
