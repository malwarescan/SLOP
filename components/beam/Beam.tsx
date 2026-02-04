interface BeamProps {
  className?: string;
  height?: string;
}

export default function Beam({ className = "", height = "240px" }: BeamProps) {
  return (
    <div
      className={`relative w-6 overflow-hidden rounded-full ${className}`}
      style={{ height }}
      aria-hidden
    >
      <div className="absolute inset-0 beam-line animate-pulse" />
      <div className="absolute inset-0 shadow-beamGlowShadow" />
    </div>
  );
}
