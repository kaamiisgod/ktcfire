import { INDIA_VIEWBOX, indiaStates } from "@/lib/content/india-map";
import { projectsByState } from "@/lib/content/projects";

/**
 * Inline SVG of India with the states KTC has delivered projects in filled
 * in brand colour. Server-rendered, no client JS; hovering a filled state
 * shows the project count via the native <title> tooltip.
 */
export default function IndiaMap({ className = "" }: { className?: string }) {
  const covered = indiaStates.filter((s) => projectsByState[s.id]);
  const max = Math.max(...covered.map((s) => projectsByState[s.id]));

  return (
    <svg
      viewBox={INDIA_VIEWBOX}
      role="img"
      aria-labelledby="india-map-title"
      className={className}
    >
      <title id="india-map-title">
        Map of India showing the {covered.length} states and union territories where Krishnatech
        has delivered projects
      </title>
      {/* Base outline — every state, so the country reads as a whole. */}
      <g fill="var(--color-surface-container-high)" stroke="var(--color-surface-container-lowest)" strokeWidth={1.2} strokeLinejoin="round">
        {indiaStates.map((s) => (
          <path key={s.id} d={s.d} />
        ))}
      </g>
      {/* Covered states on top, opacity scaled to the project count. */}
      <g fill="var(--color-primary)" stroke="var(--color-surface-container-lowest)" strokeWidth={1.2} strokeLinejoin="round">
        {covered.map((s) => {
          const n = projectsByState[s.id];
          return (
            <path
              key={s.id}
              d={s.d}
              fillOpacity={0.45 + 0.55 * (n / max)}
              className="transition-[fill] duration-200 hover:fill-secondary"
            >
              <title>
                {s.name}: {n} {n === 1 ? "project" : "projects"}
              </title>
            </path>
          );
        })}
      </g>
    </svg>
  );
}
