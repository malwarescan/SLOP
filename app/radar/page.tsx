import TriggerTable from "../../components/radar/TriggerTable";

export default function Radar() {
  return (
    <div className="min-h-screen bg-obsidian text-slate-100">
      <div className="mx-auto max-w-[1240px] px-4 py-10 sm:px-6 sm:py-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-steel">Radar</p>
          <h1 className="text-2xl font-semibold uppercase tracking-[0.1em] sm:text-3xl sm:tracking-[0.12em]">
            Precogs Trigger Queue
          </h1>
          <p className="text-sm text-steel">
            Prioritized signals with one-click narrative generation.
          </p>
        </div>
        <div className="mt-8">
          <TriggerTable />
        </div>
      </div>
    </div>
  );
}
