/**
 * Purpose-built SVG illustrations in the site's drawing language. These are
 * deliberately labelled as illustrative — they are graphics, not real
 * deliverables. Real (redacted) drawing exports can replace them later; see
 * HANDOFF.md.
 */

const ink = "var(--color-primary)";
const pipe = "var(--color-tertiary)";
const pipeText = "var(--color-on-tertiary-fixed-variant)";
const accent = "var(--color-secondary)";
const accentText = "var(--color-accent-ink)";
const faint = "var(--color-outline-variant)";
const label = "var(--color-on-surface-variant)";

function TitleStrip({ code, title, width }: { code: string; title: string; width: number }) {
  return (
    <g>
      <rect x="0" y="556" width={width} height="44" fill="var(--color-surface-container-high)" />
      <text x="24" y="583" fontSize="13" letterSpacing="2" fill={ink} fontWeight="700">
        {code}
      </text>
      <text x="150" y="583" fontSize="13" letterSpacing="1.5" fill={label}>
        {title} — ILLUSTRATIVE, NOT FOR CONSTRUCTION
      </text>
    </g>
  );
}

/** Sprinkler head symbol: circle with a cross. */
function Head({ x, y }: { x: number; y: number }) {
  return (
    <g stroke={ink} strokeWidth="1.5">
      <circle cx={x} cy={y} r="6" fill="var(--color-surface-container-lowest)" />
      <path d={`M${x - 4} ${y}h8 M${x} ${y - 4}v8`} />
    </g>
  );
}

export function SprinklerSchematic({ className = "" }: { className?: string }) {
  const branchYs = [150, 230, 310, 390];
  const headXs = [200, 300, 400, 500, 600];
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="Illustrative plan-view schematic of a wet-pipe fire sprinkler layout: an alarm valve feeding a main with four branch lines and evenly spaced sprinkler heads inside a building outline"
      className={className}
    >
      <rect width="800" height="600" fill="var(--color-surface-container-lowest)" />
      {/* faint drawing grid */}
      <g stroke={faint} strokeWidth="0.5" opacity="0.35">
        {Array.from({ length: 15 }, (_, i) => (
          <path key={`v${i}`} d={`M${50 + i * 50} 40V520`} />
        ))}
        {Array.from({ length: 9 }, (_, i) => (
          <path key={`h${i}`} d={`M40 ${60 + i * 52}H760`} />
        ))}
      </g>

      {/* building outline */}
      <rect x="60" y="60" width="680" height="440" fill="none" stroke={ink} strokeWidth="3" />
      {/* interior walls */}
      <g stroke={ink} strokeWidth="1.5" fill="none">
        <path d="M60 440h150v60" />
        <path d="M660 60v90h80" />
      </g>

      {/* room labels */}
      <g fontSize="12" letterSpacing="2" fill={label}>
        <text x="80" y="478">PUMP ROOM</text>
        <text x="672" y="90">RISER</text>
        <text x="352" y="285">PROCESS HALL</text>
      </g>

      {/* dimension line, top */}
      <g stroke={label} strokeWidth="1">
        <path d="M60 44v-14 M740 44v-14 M60 36h680" />
      </g>
      <text x="384" y="28" fontSize="12" letterSpacing="1.5" fill={label} className="tnum">
        34.0 m
      </text>

      {/* piping: cross main + branches */}
      <g stroke={pipe} strokeWidth="3" fill="none">
        <path d="M135 440V110" />
        <path d="M135 110H700" />
      </g>
      <g stroke={pipe} strokeWidth="2" fill="none">
        {branchYs.map((y) => (
          <path key={y} d={`M135 ${y}H640`} />
        ))}
      </g>

      {/* sprinkler heads on branches */}
      {branchYs.map((y) => headXs.map((x) => <Head key={`${x}-${y}`} x={x} y={y} />))}

      {/* alarm valve at the riser base */}
      <g>
        <path d="M120 440l30 18v-36l-30 18z" fill={accent} stroke={accent} />
        <circle cx="135" cy="470" r="4" fill={accent} />
      </g>
      <text x="160" y="452" fontSize="12" letterSpacing="1.5" fill={label}>
        ALARM VALVE
      </text>

      {/* flow arrows on the main */}
      <g fill={accent}>
        <path d="M135 220l-6 14h12l-6 -14z" />
        <path d="M420 104l14 6-14 6v-12z" />
      </g>

      {/* legend */}
      <g>
        <rect x="540" y="410" width="184" height="76" fill="var(--color-surface-container-low)" />
        <g stroke={pipe} strokeWidth="2.5">
          <path d="M552 430h26" />
        </g>
        <text x="588" y="434" fontSize="11" letterSpacing="1" fill={label}>
          WET-PIPE MAIN
        </text>
        <Head x={565} y={452} />
        <text x="588" y="456" fontSize="11" letterSpacing="1" fill={label}>
          PENDENT HEAD K-80
        </text>
        <path d="M556 468l18 10v-20l-18 10z" fill={accent} />
        <text x="588" y="478" fontSize="11" letterSpacing="1" fill={label}>
          ALARM VALVE
        </text>
      </g>

      <TitleStrip code="KTC / SYS-01" title="SPRINKLER LAYOUT" width={800} />
    </svg>
  );
}

export function HydraulicCurve({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="Illustrative pump and system curve chart: pressure against flow, with the duty point marked where the two curves intersect"
      className={className}
    >
      <rect width="800" height="600" fill="var(--color-surface-container-lowest)" />

      {/* chart grid */}
      <g stroke={faint} strokeWidth="0.5" opacity="0.5">
        {Array.from({ length: 7 }, (_, i) => (
          <path key={`gx${i}`} d={`M${190 + i * 90} 70V470`} />
        ))}
        {Array.from({ length: 4 }, (_, i) => (
          <path key={`gy${i}`} d={`M100 ${110 + i * 90}H730`} />
        ))}
      </g>

      {/* axes */}
      <g stroke={ink} strokeWidth="2" fill="none">
        <path d="M100 70V470H730" />
      </g>

      {/* axis ticks + values */}
      <g fontSize="12" fill={label} className="tnum">
        <text x="92" y="475" textAnchor="end">0</text>
        <text x="92" y="385" textAnchor="end">2</text>
        <text x="92" y="295" textAnchor="end">4</text>
        <text x="92" y="205" textAnchor="end">6</text>
        <text x="92" y="115" textAnchor="end">8</text>
        <text x="190" y="492" textAnchor="middle">500</text>
        <text x="370" y="492" textAnchor="middle">1500</text>
        <text x="550" y="492" textAnchor="middle">2500</text>
        <text x="730" y="492" textAnchor="middle">3500</text>
      </g>
      <text x="415" y="524" fontSize="12" letterSpacing="2" fill={label} textAnchor="middle">
        FLOW (L/MIN)
      </text>
      <text
        x="46"
        y="270"
        fontSize="12"
        letterSpacing="2"
        fill={label}
        textAnchor="middle"
        transform="rotate(-90 46 270)"
      >
        PRESSURE (BAR)
      </text>

      {/* pump curve (falling) */}
      <path
        d="M100 140 C300 150 520 220 730 400"
        fill="none"
        stroke={pipe}
        strokeWidth="3"
      />
      <text x="150" y="128" fontSize="12" letterSpacing="1.5" fill={pipeText}>
        PUMP CURVE
      </text>

      {/* system curve (rising) */}
      <path
        d="M100 462 C320 450 520 360 700 160"
        fill="none"
        stroke={ink}
        strokeWidth="2.5"
        strokeDasharray="7 5"
      />
      <text x="225" y="414" fontSize="12" letterSpacing="1.5" fill={ink}>
        SYSTEM CURVE
      </text>

      {/* duty point at the intersection */}
      <g stroke={accent} strokeWidth="1.5" strokeDasharray="4 4" fill="none">
        <path d="M585 295V470 M585 295H100" />
      </g>
      <circle cx="585" cy="295" r="8" fill="none" stroke={accent} strokeWidth="3" />
      <circle cx="585" cy="295" r="2.5" fill={accent} />
      <g>
        <rect x="590" y="200" width="150" height="48" fill="var(--color-surface-container-low)" />
        <text x="602" y="220" fontSize="12" letterSpacing="1.5" fill={accentText} fontWeight="700">
          DUTY POINT
        </text>
        <text x="602" y="238" fontSize="12" fill={label} className="tnum">
          2 200 L/min @ 3.9 bar
        </text>
      </g>

      <TitleStrip code="KTC / ENG-01" title="PUMP–SYSTEM CURVE" width={800} />
    </svg>
  );
}
