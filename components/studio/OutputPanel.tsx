import ProvenanceStamp from "../provenance/ProvenanceStamp";

export default function OutputPanel() {
  return (
    <section className="rounded-card border border-white/10 bg-charcoal/80 p-5 shadow-subtleBorder">
      <div className="flex items-center justify-between">
        <h3 className="text-xs uppercase tracking-[0.28em] text-steel">Outputs</h3>
        <span className="text-[0.7rem] uppercase tracking-[0.2em] text-cyan">
          generating_images
        </span>
      </div>
      <div className="mt-4 grid gap-3">
        <div className="rounded-lg border border-white/10 bg-obsidian/60 p-3">
          <p className="text-sm text-slate-100">Hero Pack</p>
          <p className="text-xs text-steel">2048x2048, 1920x1080, 1080x1920</p>
          <div className="mt-3">
            <ProvenanceStamp hash="c0ffee13" grounded />
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-obsidian/60 p-3">
          <p className="text-sm text-slate-100">Caption Set</p>
          <p className="text-xs text-steel">8 grounded lines</p>
          <div className="mt-3">
            <ProvenanceStamp hash="c0ffee13" grounded />
          </div>
        </div>
      </div>
    </section>
  );
}
