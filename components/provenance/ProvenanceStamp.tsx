interface ProvenanceStampProps {
  hash: string;
  grounded?: boolean;
}

export default function ProvenanceStamp({ hash, grounded = true }: ProvenanceStampProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-charcoal/70 px-3 py-1 text-[0.7rem] uppercase tracking-[0.25em] text-cyan shadow-cyanGlowShadow">
      <span className="text-[0.62rem]">{grounded ? "Grounded" : "Review"}</span>
      <span className="h-1 w-1 rounded-full bg-cyan" aria-hidden />
      <span className="text-[0.62rem]">{hash.slice(0, 8)}</span>
    </div>
  );
}
