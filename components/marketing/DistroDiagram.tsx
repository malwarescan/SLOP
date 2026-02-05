type DistroDiagramProps = {
  className?: string;
};

export default function DistroDiagram({ className = "" }: DistroDiagramProps) {
  return (
    <svg
      viewBox="0 0 900 520"
      className={className}
      role="img"
      aria-label="System map showing sources becoming channel kits and published exports, with a spark at the distribution engine."
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
          points="190,60 710,60 690,120 210,120"
          fill="url(#layerFill)"
          stroke="url(#layerStroke)"
          strokeWidth="1"
          opacity="0.9"
        />
        <polygon
          points="230,140 670,140 650,200 250,200"
          fill="url(#layerFill)"
          stroke="url(#layerStroke)"
          strokeWidth="1"
          opacity="0.92"
        />

        {/* Distro layer (highlighted) */}
        <polygon
          points="270,220 630,220 610,280 290,280"
          fill="rgba(11, 14, 17, 0.55)"
          stroke="rgba(89, 240, 255, 0.22)"
          strokeWidth="8"
          opacity="0.45"
          filter="url(#softGlow)"
        />
        <polygon
          points="270,220 630,220 610,280 290,280"
          fill="rgba(18, 22, 27, 0.72)"
          stroke="url(#distroStroke)"
          strokeWidth="2"
          filter="url(#softGlow)"
        />

        <polygon
          points="220,300 680,300 660,360 240,360"
          fill="url(#layerFill)"
          stroke="url(#layerStroke)"
          strokeWidth="1"
          opacity="0.92"
        />
        <polygon
          points="170,380 730,380 710,440 190,440"
          fill="url(#layerFill)"
          stroke="url(#layerStroke)"
          strokeWidth="1"
          opacity="0.88"
        />
      </g>

      {/* Flow lines */}
      <g strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9">
        <path
          d="M450 88 L450 492"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="8"
        />
        <path
          d="M450 88 L450 492"
          stroke="rgba(89,240,255,0.14)"
          strokeWidth="2"
        />
        <path
          id="path-x"
          d="M450 250 C 410 315 340 390 270 490"
          stroke="rgba(89,240,255,0.22)"
          strokeWidth="2"
        />
        <path
          id="path-tt"
          d="M450 250 C 430 320 395 395 360 490"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="2"
        />
        <path
          id="path-yt"
          d="M450 250 C 450 330 450 410 450 490"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
        />
        <path
          id="path-ig"
          d="M450 250 C 470 320 505 395 540 490"
          stroke="rgba(41,255,127,0.18)"
          strokeWidth="2"
        />
        <path
          id="path-nl"
          d="M450 250 C 490 315 560 390 630 490"
          stroke="rgba(89,240,255,0.18)"
          strokeWidth="2"
        />
      </g>

      {/* Pipeline spine nodes */}
      <g>
        {[
          { cy: 90, label: "S", accent: false },
          { cy: 170, label: "C", accent: false },
          { cy: 250, label: "D", accent: true },
          { cy: 330, label: "K", accent: false },
          { cy: 410, label: "P", accent: false }
        ].map((node) => (
          <g key={node.cy}>
            <circle
              cx="450"
              cy={node.cy}
              r="12"
              fill="rgba(11, 14, 17, 0.72)"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1"
            />
            <circle
              cx="450"
              cy={node.cy}
              r="5"
              fill={node.accent ? "rgba(89,240,255,0.95)" : "rgba(138,153,170,0.75)"}
              opacity={node.accent ? 1 : 0.8}
            />
            <text
              x="450"
              y={node.cy + 4}
              fontSize="9"
              fontWeight="700"
              letterSpacing="2"
              fill={node.accent ? "rgba(255,255,255,0.92)" : "rgba(231,238,245,0.78)"}
              textAnchor="middle"
            >
              {node.label}
            </text>
          </g>
        ))}
      </g>

      {/* Spark at distro layer */}
      <g filter="url(#softGlow)">
        <circle cx="450" cy="250" r="7" fill="url(#sparkCore)">
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
          cy="250"
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
          { cx: 430, cy: 242, delay: "0s" },
          { cx: 468, cy: 240, delay: "0.3s" },
          { cx: 444, cy: 272, delay: "0.6s" },
          { cx: 462, cy: 268, delay: "0.9s" },
          { cx: 428, cy: 262, delay: "1.2s" },
          { cx: 472, cy: 256, delay: "1.45s" }
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
          <animateMotion
            dur="2.8s"
            repeatCount="indefinite"
            keyTimes="0;1"
            keySplines="0.3 0 0.2 1"
            calcMode="spline"
          >
            <mpath href="#path-x" />
          </animateMotion>
        </circle>
        <circle r="3.2" fill="rgba(41,255,127,0.9)" filter="url(#softGlow)" opacity="0.9">
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            begin="0.6s"
            keyTimes="0;1"
            keySplines="0.3 0 0.2 1"
            calcMode="spline"
          >
            <mpath href="#path-nl" />
          </animateMotion>
        </circle>
      </g>

      {/* Stage labels */}
      <g
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        textAnchor="middle"
      >
        <g>
          <text x="450" y="86" fill="rgba(231, 238, 245, 0.92)" fontSize="12" fontWeight="700" letterSpacing="3">
            SOURCES
          </text>
          <text x="450" y="104" fill="rgba(138, 153, 170, 0.9)" fontSize="9" letterSpacing="2">
            Croutons • sites • docs • video
          </text>
        </g>

        <g>
          <text x="450" y="166" fill="rgba(231, 238, 245, 0.92)" fontSize="12" fontWeight="700" letterSpacing="3">
            CANONICAL CLAIMS + ASSETS
          </text>
          <text x="450" y="184" fill="rgba(138, 153, 170, 0.9)" fontSize="9" letterSpacing="2">
            Entities • facts • citations • clips
          </text>
        </g>

        <g filter="url(#softGlow)">
          <text x="450" y="242" fill="rgba(89, 240, 255, 0.96)" fontSize="13" fontWeight="800" letterSpacing="3">
            DISTRIBUTION ENGINE
          </text>
          <text x="450" y="260" fill="rgba(231, 238, 245, 0.88)" fontSize="9" letterSpacing="2">
            Templates • Routing • Proof • Scheduling
          </text>
          <text x="450" y="274" fill="rgba(138, 153, 170, 0.85)" fontSize="8" letterSpacing="3">
            SLOP DISTRO LAYER
          </text>
        </g>

        <g>
          <text x="450" y="322" fill="rgba(231, 238, 245, 0.92)" fontSize="12" fontWeight="700" letterSpacing="3">
            CHANNEL KITS
          </text>
          <text x="450" y="340" fill="rgba(138, 153, 170, 0.9)" fontSize="9" letterSpacing="2">
            Shorts pack • X kit • Newsletter issue
          </text>
        </g>

        <g>
          <text x="450" y="402" fill="rgba(231, 238, 245, 0.92)" fontSize="12" fontWeight="700" letterSpacing="3">
            PUBLISH + TELEMETRY
          </text>
          <text x="450" y="420" fill="rgba(138, 153, 170, 0.9)" fontSize="9" letterSpacing="2">
            Exports • UTMs • dashboards • receipts
          </text>
        </g>
      </g>

      {/* Channel nodes */}
      <g fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial">
        {[
          { cx: 270, label: "X", color: "rgba(89,240,255,0.95)" },
          { cx: 360, label: "TT", color: "rgba(255,255,255,0.8)" },
          { cx: 450, label: "YT", color: "rgba(255,255,255,0.85)" },
          { cx: 540, label: "IG", color: "rgba(41,255,127,0.85)" },
          { cx: 630, label: "NL", color: "rgba(89,240,255,0.75)" }
        ].map((node) => (
          <g key={node.label}>
            <circle
              cx={node.cx}
              cy="490"
              r="14"
              fill="rgba(11, 14, 17, 0.78)"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1"
            />
            <circle cx={node.cx} cy="490" r="5" fill={node.color} />
            <text
              x={node.cx}
              y="494"
              fontSize="10"
              fontWeight="800"
              letterSpacing="2"
              fill="rgba(231, 238, 245, 0.9)"
              textAnchor="middle"
            >
              {node.label}
            </text>
          </g>
        ))}

        <text
          x="450"
          y="512"
          textAnchor="middle"
          fontSize="9"
          letterSpacing="2"
          fill="rgba(138, 153, 170, 0.85)"
        >
          + partner sites • newsletters • ad inventory
        </text>
      </g>

      {/* Proof packet callout */}
      <g fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial">
        <path
          d="M470 250 C 560 232 625 214 665 206"
          stroke="rgba(89,240,255,0.28)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="665" cy="206" r="3" fill="rgba(89,240,255,0.85)" />

        <g transform="translate(675 150)">
          <rect
            x="0"
            y="0"
            width="200"
            height="150"
            rx="16"
            fill="rgba(11, 14, 17, 0.86)"
            stroke="rgba(89,240,255,0.28)"
            strokeWidth="1"
          />
          <rect
            x="12"
            y="12"
            width="176"
            height="126"
            rx="12"
            fill="rgba(18, 22, 27, 0.55)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />

          <text
            x="24"
            y="36"
            fontSize="10"
            fontWeight="800"
            letterSpacing="3"
            fill="rgba(89,240,255,0.92)"
          >
            PROOF PACKET
          </text>
          {[
            ["Sources", "14"],
            ["Claims", "22"],
            ["Approved", "22"],
            ["Reused", "78%"],
            ["New", "22%"],
            ["Exported", "5 ch"]
          ].map(([label, value], index) => (
            <g key={label}>
              <text
                x="24"
                y={60 + index * 14}
                fontSize="9"
                letterSpacing="2"
                fill="rgba(138,153,170,0.9)"
              >
                {label}
              </text>
              <text
                x="176"
                y={60 + index * 14}
                fontSize="9"
                fontWeight="700"
                letterSpacing="2"
                fill="rgba(231,238,245,0.9)"
                textAnchor="end"
              >
                {value}
              </text>
            </g>
          ))}

          <text
            x="24"
            y="132"
            fontSize="8"
            letterSpacing="3"
            fill="rgba(138,153,170,0.8)"
          >
            RECEIPTS ATTACHED
          </text>
        </g>
      </g>
    </svg>
  );
}
