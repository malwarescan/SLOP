export default function NarrativeControls() {
  return (
    <section className="rounded-card border border-white/10 bg-charcoal/80 p-5 shadow-subtleBorder">
      <h3 className="text-xs uppercase tracking-[0.28em] text-steel">Narrative Controls</h3>
      <div className="mt-4 space-y-4 text-sm text-slate-200/90">
        <div>
          <p className="text-steel">Style Preset</p>
          <div className="mt-2 grid gap-2 text-xs">
            {[
              "Artifact Minimal",
              "Collage Oracle",
              "Poster Ritual"
            ].map((label) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-obsidian/60 px-3 py-2"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-steel">Spice</p>
          <div className="mt-2 h-2 rounded-full bg-white/10">
            <div className="h-2 w-2/3 rounded-full bg-cyan/70" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-cyan">
          <span className="rounded-full border border-cyan/40 px-3 py-1">Images</span>
          <span className="rounded-full border border-cyan/40 px-3 py-1">Captions</span>
          <span className="rounded-full border border-cyan/20 px-3 py-1 text-steel">
            Video Pack
          </span>
        </div>
      </div>
    </section>
  );
}
