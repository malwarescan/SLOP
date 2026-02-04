import AssetCard from "../../components/library/AssetCard";

export default function Library() {
  return (
    <div className="min-h-screen bg-obsidian text-slate-100">
      <div className="mx-auto max-w-[1240px] px-6 py-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-steel">Library</p>
          <h1 className="text-3xl font-semibold uppercase tracking-[0.12em]">
            Narrative Packages Vault
          </h1>
          <p className="text-sm text-steel">
            Search and export grounded assets by entity, preset, and platform.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <AssetCard key={`asset-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
