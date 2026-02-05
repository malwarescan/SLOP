type DistroDiagramProps = {
  className?: string;
};

export default function DistroDiagram({ className = "" }: DistroDiagramProps) {
  return (
    <svg
      viewBox="0 0 900 520"
      className={className}
      role="img"
      aria-label="Depth distribution diagram with a spark at the SLOP distro layer."
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="layerFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(18, 22, 27, 0.92)" />
          <stop offset="1" stopColor="rgba(18, 22, 27, 0.55)" />
        </linearGradient>

        <linearGradient id="layerStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(255, 255, 255, 0.16)" />
          <stop offset="0.5" stopColor="rgba(140, 160, 180, 0.26)" />
          <stop offset="1" stopColor="rgba(255, 255, 255, 0.12)" />
        </linearGradient>

        <linearGradient id="distroStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(41, 255, 127, 0.85)" />
          <stop offset="0.55" stopColor="rgba(89, 240, 255, 0.92)" />
          <stop offset="1" stopColor="rgba(41, 255, 127, 0.75)" />
        </linearGradient>

        <radialGradient id="sparkCore" cx="50%" cy="50%" r="60%">
          <stop offset="0" stopColor="rgba(255, 255, 255, 0.95)" />
          <stop offset="0.45" stopColor="rgba(89, 240, 255, 0.9)" />
          <stop offset="1" stopColor="rgba(41, 255, 127, 0.2)" />
        </radialGradient>

        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 0.8 0"
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Layers (top -> bottom) */}
      <g>
        <polygon
          points="190,90 710,90 690,150 210,150"
          fill="url(#layerFill)"
          stroke="url(#layerStroke)"
          strokeWidth="1"
          opacity="0.9"
        />
        <polygon
          points="230,170 670,170 650,230 250,230"
          fill="url(#layerFill)"
          stroke="url(#layerStroke)"
          strokeWidth="1"
          opacity="0.92"
        />

        {/* Distro layer (highlighted) */}
        <polygon
          points="270,250 630,250 610,310 290,310"
          fill="rgba(11, 14, 17, 0.55)"
          stroke="rgba(89, 240, 255, 0.22)"
          strokeWidth="8"
          opacity="0.45"
          filter="url(#softGlow)"
        />
        <polygon
          points="270,250 630,250 610,310 290,310"
          fill="rgba(18, 22, 27, 0.72)"
          stroke="url(#distroStroke)"
          strokeWidth="2"
          filter="url(#softGlow)"
        />

        <polygon
          points="220,330 680,330 660,390 240,390"
          fill="url(#layerFill)"
          stroke="url(#layerStroke)"
          strokeWidth="1"
          opacity="0.92"
        />
        <polygon
          points="170,410 730,410 710,470 190,470"
          fill="url(#layerFill)"
          stroke="url(#layerStroke)"
          strokeWidth="1"
          opacity="0.88"
        />
      </g>

      {/* Flow lines */}
      <g strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9">
        <path
          d="M450 110 L450 450"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="8"
        />
        <path
          d="M450 110 L450 450"
          stroke="rgba(89,240,255,0.14)"
          strokeWidth="2"
        />
        <path
          id="path-left"
          d="M450 280 C 420 320 350 360 260 440"
          stroke="rgba(89,240,255,0.22)"
          strokeWidth="2"
        />
        <path
          id="path-right"
          d="M450 280 C 480 320 550 360 640 440"
          stroke="rgba(41,255,127,0.18)"
          strokeWidth="2"
        />
        <path
          id="path-center"
          d="M450 280 L450 472"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
        />
      </g>

      {/* Output nodes */}
      <g>
        {[
          { cx: 260, cy: 440, color: "rgba(89,240,255,0.9)" },
          { cx: 450, cy: 472, color: "rgba(255,255,255,0.85)" },
          { cx: 640, cy: 440, color: "rgba(41,255,127,0.8)" }
        ].map((node) => (
          <g key={`${node.cx}-${node.cy}`}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r="10"
              fill="rgba(11, 14, 17, 0.72)"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1"
            />
            <circle cx={node.cx} cy={node.cy} r="4" fill={node.color} />
          </g>
        ))}
      </g>

      {/* Spark at distro layer */}
      <g filter="url(#softGlow)">
        <circle cx="450" cy="280" r="7" fill="url(#sparkCore)">
          <animate attributeName="r" values="6;10;6" dur="2.2s" repeatCount="indefinite" />
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="2.2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="450"
          cy="280"
          r="18"
          fill="none"
          stroke="rgba(89,240,255,0.55)"
          strokeWidth="2"
          opacity="0.7"
        >
          <animate attributeName="r" values="14;26" dur="1.7s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.65;0" dur="1.7s" repeatCount="indefinite" />
        </circle>

        {[
          { cx: 430, cy: 272, delay: "0s" },
          { cx: 468, cy: 270, delay: "0.3s" },
          { cx: 444, cy: 302, delay: "0.6s" },
          { cx: 462, cy: 298, delay: "0.9s" },
          { cx: 428, cy: 292, delay: "1.2s" },
          { cx: 472, cy: 286, delay: "1.45s" }
        ].map((spark) => (
          <circle
            key={`${spark.cx}-${spark.cy}`}
            cx={spark.cx}
            cy={spark.cy}
            r="2.5"
            fill="rgba(255,255,255,0.85)"
            opacity="0.0"
          >
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1.6s"
              begin={spark.delay}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="1.5;3.5;1.5"
              dur="1.6s"
              begin={spark.delay}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>

      {/* Traveling spark */}
      <g opacity="0.85">
        <circle r="3.5" fill="rgba(89,240,255,0.95)" filter="url(#softGlow)">
          <animateMotion dur="2.8s" repeatCount="indefinite" keyTimes="0;1" keySplines="0.3 0 0.2 1" calcMode="spline">
            <mpath href="#path-left" />
          </animateMotion>
        </circle>
        <circle r="3.2" fill="rgba(41,255,127,0.9)" filter="url(#softGlow)" opacity="0.9">
          <animateMotion dur="3.2s" repeatCount="indefinite" begin="0.6s" keyTimes="0;1" keySplines="0.3 0 0.2 1" calcMode="spline">
            <mpath href="#path-right" />
          </animateMotion>
        </circle>
      </g>

      {/* Labels */}
      <g fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" textAnchor="middle">
        <text x="450" y="128" fill="rgba(138, 153, 170, 0.9)" fontSize="12" letterSpacing="3">
          INGEST
        </text>
        <text x="450" y="208" fill="rgba(138, 153, 170, 0.9)" fontSize="12" letterSpacing="3">
          NORMALIZE
        </text>
        <text x="450" y="290" fill="rgba(89, 240, 255, 0.92)" fontSize="12" letterSpacing="3">
          SLOP DISTRO LAYER
        </text>
        <text x="450" y="368" fill="rgba(138, 153, 170, 0.9)" fontSize="12" letterSpacing="3">
          PACK
        </text>
        <text x="450" y="448" fill="rgba(138, 153, 170, 0.9)" fontSize="12" letterSpacing="3">
          EXPORT
        </text>
      </g>
    </svg>
  );
}

