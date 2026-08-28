/**
 * Inline SVG icon set — replaces the Material Symbols web font so no
 * render-blocking icon stylesheet is loaded. Stroke-drawn on a 24px grid
 * to match the site's technical-drawing language.
 */

const strokePaths: Record<string, React.ReactNode> = {
  flame: (
    <path d="M12 3c1.5 2.5 4.5 4.7 4.5 8a4.5 4.5 0 0 1-9 0c0-1.2.35-2.2.95-3.1.6 1 1.55 1.6 2.55 1.6-.9-2.2-.4-4.6 1-6.5z M12 21a7.5 7.5 0 0 1-7.5-7.5c0-1.4.35-2.6.9-3.7" />
  ),
  droplet: <path d="M12 4c3 3.5 5 6 5 8.5a5 5 0 0 1-10 0C7 10 9 7.5 12 4z" />,
  bell: (
    <path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2.5h-15L6 16z M10.5 21.5a1.8 1.8 0 0 0 3 0" />
  ),
  shield: <path d="M12 3l7 2.5v5.5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5V5.5L12 3z" />,
  grid: (
    <path d="M4 4h6v6H4z M14 4h6v6h-6z M4 14h6v6H4z M14 14h6v6h-6z" />
  ),
  gauge: (
    <path d="M4 18a8 8 0 1 1 16 0 M12 18l4.2-5.6 M12 18h.01" />
  ),
  blueprint: (
    <path d="M4 4h16v16H4z M9 4v7h7 M15 20v-5h5" />
  ),
  document: (
    <path d="M7 3h7l4 4v14H7V3z M14 3v4h4 M10 12h6 M10 16h6" />
  ),
  "check-badge": (
    <path d="M7 5h-1v16h12V5h-1 M9 5a3 3 0 0 1 6 0v1H9V5z M9.5 13.5l2 2 3.5-4.5" />
  ),
  wrench: (
    <path d="M14.9 6.1a4.2 4.2 0 0 0-5.6 5.6L4 17l3 3 5.3-5.3a4.2 4.2 0 0 0 5.6-5.6l-2.7 2.7-2.3-2.3 2.7-2.7z" />
  ),
  chart: (
    <path d="M4 4v16h16 M7 15l4-4.5 3 3 5-6" />
  ),
  check: <path d="M5 13l4 4L19 7" />,
  "arrow-right": <path d="M4 12h15 M13 6l6 6-6 6" />,
  "arrow-left": <path d="M20 12H5 M11 6l-6 6 6 6" />,
  menu: <path d="M4 7h16 M4 12h16 M4 17h16" />,
  close: <path d="M6 6l12 12 M18 6L6 18" />,
  mail: <path d="M3 5h18v14H3z M3 7l9 6 9-6" />,
  phone: (
    <path d="M5 4h4l1.5 4L8 10a12.5 12.5 0 0 0 6 6l2-2.5L20 15v4a1.5 1.5 0 0 1-1.7 1.5C10 19.6 4.4 14 3.5 5.7A1.5 1.5 0 0 1 5 4z" />
  ),
  pin: (
    <path d="M12 21S5.5 15.6 5.5 10.5a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21z M14.2 10.5a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0z" />
  ),
  search: <path d="M17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0z M15.5 15.5L20 20" />,
  alert: <path d="M12 4l9 16H3l9-16z M12 10v4 M12 17h.01" />,
  "check-circle": (
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z M8.5 12.5l2.5 2.5 4.5-5.5" />
  ),
};

const fillPaths: Record<string, React.ReactNode> = {
  linkedin: (
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  ),
};

export type IconName = keyof typeof strokePaths | keyof typeof fillPaths;

export default function Icon({
  name,
  size = 24,
  strokeWidth = 1.5,
  className = "",
  label,
}: {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  /** Accessible name; omit for decorative icons (hidden from AT). */
  label?: string;
}) {
  const fill = fillPaths[name];
  const stroke = strokePaths[name];
  const a11y = label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true as const };
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill={fill ? "currentColor" : "none"}
      stroke={fill ? "none" : "currentColor"}
      strokeWidth={fill ? undefined : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      {...a11y}
    >
      {fill ?? stroke ?? null}
    </svg>
  );
}
