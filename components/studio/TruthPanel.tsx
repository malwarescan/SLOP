export default function TruthPanel() {
  return (
    <section className="rounded-card border border-white/10 bg-charcoal/80 p-5 shadow-subtleBorder">
      <h3 className="text-xs uppercase tracking-[0.28em] text-steel">Truth / Logic Package</h3>
      <div className="mt-4 space-y-4 text-sm text-slate-200/90">
        <div>
          <p className="text-steel">Entity</p>
          <p className="text-base text-slate-100">ORACLE GARDEN PROTOCOL</p>
          <p className="text-xs text-steel">entity_id: EG-0294</p>
        </div>
        <div>
          <p className="text-steel">Answer Box</p>
          <p className="text-slate-200/80">
            Primary signal reveals a convergence of clean-energy narratives and
            civic infrastructure upgrades.
          </p>
        </div>
        <div>
          <p className="text-steel">Atomic Facts</p>
          <ul className="mt-2 space-y-2 text-xs text-slate-200/80">
            <li>F1 — 2025 pilot program validated three municipal partners.</li>
            <li>F2 — Energy capture lifted efficiency by 18% in Q4.</li>
            <li>F3 — Public sentiment rose for sustainable infra in 6 markets.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
