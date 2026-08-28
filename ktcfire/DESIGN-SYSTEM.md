# DESIGN-SYSTEM — tokens as built

Direction: **"The Drawing Office"** — the site borrows the language of an
engineering drawing set (overline sheet codes, tabular numerals, labelled
schematics, paper surface tiers). Full rationale in PLAN.md.

Single source of truth: **`app/globals.css`**, inside the `@theme inline`
block. Change a value there and every page follows; the classes below are
Tailwind utilities generated from those tokens.

## Colours

| Token | Value | Role |
|---|---|---|
| `--color-primary` | `#1D2468` | Ink navy (logo wordmark): headlines, primary buttons, schematic line-work |
| `--color-primary-container` | `#2A3699` | Gradient end for hero CTAs |
| `--color-secondary` | `#F36F21` | Flame orange (logo mark): graphics, buttons, and text **on the dark ink band only** |
| `--color-accent-ink` | `#BF360C` | The orange for **text on light surfaces** (AA ≥4.5:1). Never use `--color-secondary` for small text on light backgrounds — it fails contrast |
| `--color-on-secondary-fixed` | `#E65100` | Large display numerals in orange on light (AA large-text) |
| `--color-tertiary` | `#0099D8` | Schematic blue (logo circuitry): pipe/curve line-work, decorative icons |
| `--color-on-tertiary-fixed-variant` | `#0277BD` | Blue **text** on light surfaces (AA) |
| `--color-surface` … `--color-surface-container-highest` | `#f8fafa` → `#e1e3e3` | The paper ladder. Sections are separated by stepping one tier — never by borders ("no-line rule") |
| `--color-ink` / `--color-ink-high` | `#141a4e` / `#1D2468` | Dark band backgrounds (contact section, footer, CTA cards) |
| `--color-on-ink` / `--color-on-ink-variant` | `#eef0fb` / `#aeb4d9` | Text on the ink band |
| `--color-on-surface` / `-variant` | `#191c1d` / `#3e4949` | Body text on paper |
| `--color-outline` / `-variant` | `#5d6767` / `#bdc9c8` | Placeholder text / faint drawing grid |
| `--color-error`, `--color-error-container`, `--color-on-error-container` | `#ba1a1a` / `#ffdad6` / `#93000a` | Form error text and the failure banner |

All text/background pairs in use were verified ≥4.5:1 (≥3:1 for large
text) — the audit script pairs are reproducible from this table.

## Type

| Face | File | Used for |
|---|---|---|
| Manrope (variable 200–800) | `public/fonts/Manrope-Variable.woff2`, loaded in `app/layout.tsx` via `next/font/local` as `--font-manrope` | `font-headline`: display, headings, buttons, wordmarks |
| Inter 400 / 600 / 700 | `public/fonts/Inter-*.woff2`, same mechanism, as `--font-inter` | `font-body` / `font-label`: body copy, labels, overlines |

Scale in practice: display `text-4xl…text-6xl` ExtraBold tracking-tighter;
section h2 `text-3xl/4xl` ExtraBold tracking-tight; card h3 `text-lg/xl`
Bold; body `text-base/sm`; overlines `.overline-code` (11px, 600,
+0.18em, uppercase). Stats and figures take `.tnum` (tabular numerals).

## Spacing, radius, elevation

- Spacing: Tailwind 4px base. Standard card padding `p-6`/`p-8`; section
  rhythm `py-20 md:py-28`; grid gaps `gap-8`/`gap-12`.
- Grid: `max-w-7xl mx-auto px-6 md:px-8`, 12-column asymmetric splits
  (7/5, 8/4) via `lg:grid-cols-12`.
- Radius: `rounded-md` (0.375rem) and `rounded-lg` (0.5rem) only — small
  and deliberate; tokens in `--radius-*`.
- Elevation: **no borders, no default shadows.** Depth = surface-tier
  shifts. The only shadow is `.shadow-ambient`
  (`0 12px 32px rgba(0,40,40,.08)`, tinted) on floating chrome (navbar,
  hero schematic card). `.ghost-border` exists solely as an accessibility
  fallback.

## Utilities (defined at the bottom of globals.css)

| Class | What it does |
|---|---|
| `.overline-code` | Drawing-sheet code style ("KTC / 02 / SERVICES") |
| `.tnum` | Tabular figures for stats/numbers |
| `.grid-paper` / `.grid-paper-dark` | Faint blueprint grid background (hero, ink bands) |
| `.glass` | Frosted navbar background |
| `.gradient-primary` | 135° navy gradient — hero CTAs only |
| `.field` / `.field-error` | Form input style (bottom-bar focus) and error text |
| `:focus-visible` | Global keyboard focus ring: `accent-ink` on light, brighter orange inside `.bg-ink`/footer |

## Breakpoints

Tailwind defaults: `sm` 640, `md` 768, `lg` 1024, `xl` 1280. Layouts were
verified overflow-free at 375 / 768 / 1280 / 1920px.

## Icons & illustrations

- Icons: `components/Icon.tsx` — inline stroke SVGs on a 24px grid
  (`<Icon name="droplet" size={20} />`). Add a new one by adding a path to
  `strokePaths`. No icon font is loaded.
- Schematics: `components/Schematics.tsx` — code-drawn, brand-token SVG
  illustrations, each carrying an "ILLUSTRATIVE — NOT FOR CONSTRUCTION"
  title strip. Colors come from the CSS tokens, so palette changes follow
  automatically.
