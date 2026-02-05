import Beam from "../../components/beam/Beam";
import ChromeButton from "../../components/chrome/ChromeButton";
import NarrativeControls from "../../components/studio/NarrativeControls";
import OutputPanel from "../../components/studio/OutputPanel";
import TruthPanel from "../../components/studio/TruthPanel";

export default function OperatorConsole() {
  return (
    <div className="min-h-screen bg-obsidian text-slate-100">
      <header className="border-b border-white/10 bg-obsidian/90">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <span className="whitespace-nowrap text-[0.7rem] uppercase tracking-[0.25em] text-cyan sm:text-xs sm:tracking-[0.3em]">
              SLOP.TECHNOLOGY
            </span>
            <div className="flex flex-wrap items-center gap-2 text-[0.6rem] uppercase tracking-[0.22em] text-steel sm:text-[0.65rem] sm:tracking-[0.25em]">
              <span className="rounded-full border border-cyan/40 px-3 py-1 text-cyan">
                Logic
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Narrative
              </span>
            </div>
          </div>
          <div className="order-last w-full text-[0.65rem] uppercase tracking-[0.22em] text-steel sm:order-none sm:w-auto sm:text-xs sm:tracking-[0.25em]">
            Entity: Oracle Garden
          </div>
          <ChromeButton label="New Job" className="shrink-0" />
        </div>
      </header>

      <main className="mx-auto grid max-w-[1320px] gap-6 px-4 py-8 sm:px-6 sm:py-10 md:grid-cols-[1fr_1fr_1fr]">
        <div className="space-y-6">
          <TruthPanel />
          <div className="rounded-card border border-white/10 bg-charcoal/80 p-5 shadow-subtleBorder">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.28em] text-steel">
                Trend Signal
              </p>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-cyan">
                urgent
              </span>
            </div>
            <p className="mt-3 text-sm text-steel">
              Rising query density in sustainability and civic infrastructure.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <NarrativeControls />
          <div className="rounded-card border border-white/10 bg-charcoal/80 p-5 shadow-subtleBorder">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.28em] text-steel">
                Compliance Status
              </p>
              <span className="rounded-full border border-warning/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-warning">
                Blocked: medical
              </span>
            </div>
            <p className="mt-3 text-sm text-steel">
              Medical claims disabled by policy. Adjust narrative outputs.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-card border border-white/10 bg-charcoal/80 p-5 shadow-subtleBorder">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Beam height="96px" />
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-steel">
                    Job Status
                  </p>
                  <p className="text-sm text-cyan">generating_images</p>
                </div>
              </div>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-steel">
                No ETA
              </span>
            </div>
          </div>
          <OutputPanel />
        </div>
      </main>
    </div>
  );
}

