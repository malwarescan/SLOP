import AssetCard from "../../components/library/AssetCard";

export default function Library() {
  return (
    <div className="min-h-screen bg-obsidian text-slate-100">
      <div className="mx-auto max-w-[1240px] px-4 py-10 sm:px-6 sm:py-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-steel">Library</p>
          <h1 className="text-2xl font-semibold uppercase tracking-[0.1em] sm:text-3xl sm:tracking-[0.12em]">
            Narrative Packages Vault
          </h1>
          <p className="text-sm text-steel">
            Search and export grounded assets by entity, preset, and platform.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <AssetCard key={`asset-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
