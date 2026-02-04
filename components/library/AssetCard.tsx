import ProvenanceStamp from "../provenance/ProvenanceStamp";

export default function AssetCard() {
  return (
    <div className="rounded-card border border-white/10 bg-charcoal/80 p-4 shadow-subtleBorder">
      <div className="h-40 rounded-lg bg-obsidian/70" />
      <div className="mt-4 space-y-2">
        <p className="text-sm text-slate-100">Oracle Garden Pack</p>
        <p className="text-xs text-steel">Artifact Minimal</p>
        <ProvenanceStamp hash="c0ffee13" grounded />
      </div>
    </div>
  );
}
