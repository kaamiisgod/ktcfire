# PLAN — KTC Fire site completion (2026-08-28)

## 1. Visual direction

All three directions below obey BRAND_DIR: logo palette (navy `#1D2468`, orange `#F36F21`,
blue `#0099D8`) on the M3 surface ladder, Manrope display + Inter body, no-line rule (surface
shifts, not borders), tinted ambient shadow only for floating elements, small radii (md/lg),
glass navbar, 135° gradient reserved for hero CTAs, asymmetric editorial layouts.

### Direction A — "The Drawing Office" (chosen)

The site borrows the visual language of the firm's actual deliverable: the engineering drawing
set. Every section carries a drawing-style overline code ("KTC-02 / SERVICES"); stats are set as
display-scale numerals like title-block figures; imagery is honest schematic line-work (SVG
sprinkler layouts, hydraulic gradient curves) labelled "ILLUSTRATIVE — NOT FOR CONSTRUCTION";
a faint blueprint-grid texture sits behind the hero.

- **Palette roles:** paper surfaces `#f8fafa → #e1e3e3` for sectioning; ink navy `#1D2468` for
  headline type and one full-bleed band; orange `#F36F21` strictly as the "fire markup" accent
  (never a background wash); blue `#0099D8` for schematic line-work and links.
- **Type:** Manrope ExtraBold/Bold for display and headlines (tight tracking), Inter
  Regular/Medium for body, Inter SemiBold 11px uppercase +0.15em for drawing-code overlines.
  Tabular figures (`font-feature-settings: "tnum"`) on all stats. Rationale: Manrope's geometric
  weight carries the identity so Inter never reads as a default stack.
- **Layout:** 12-col max-w-7xl grid, asymmetric splits (7/5, 8/4); 4px spacing base, 5–6rem
  section gaps; radius md/lg only; zero decorative borders — surface-tier shifts and whitespace
  do the sectioning; shadow only on the floating navbar and one floating hero annotation.
- **Photography treatment:** none needed at launch — schematic SVG illustration replaces the two
  AI-fake images; real drawing exports slot in later (HANDOFF) with a navy-duotone treatment.
- **Displaces:** icon-topped three-across cards (services become a drawing-index table);
  centred hero + two buttons (asymmetric 7/5 hero with schematic); shadow-on-every-card
  (surface shifts); fake stock imagery (labelled schematics).

### Direction B — "The Monograph" (not chosen)

Editorial consultancy monograph: oversized Manrope display headlines as visual objects, services
as a numbered table-of-contents index, alternating paper/navy full-bleed chapters, pull-stats,
real photography in navy duotone. Same tokens, magazine structure instead of document structure
(chapters + folios instead of drawing codes + title blocks).

### Direction C — "The Control Room" (not chosen)

Dark-first: inverse-surface navy `#2e3131→#10142e` panels site-wide, luminous blue/orange
system diagrams, dense data panels with tabular figures, thin scan-line texture. Legal via the
inverse tokens, but it inverts the documented light surface ladder rather than using it.

**Choice: A.** It is the only direction whose ornament is the firm's actual work product, which
gives specificity no competitor template can imitate, and it uses the documented light surface
ladder exactly as specified instead of re-deriving it. B would have won if the owner had supplied
a photography library and long-form case-study copy; C if the offering were a monitored
product rather than a consultancy.

## 2. Page & section map

| Route | State | Plan |
|---|---|---|
| `/` | exists | Rebuild in direction A: asymmetric hero w/ schematic + stat strip (25+ yrs, 53 projects, 200+ analyses, 13 sectors) · ESO problem/solution · services index (summary → /services) · workflow 4 steps (deck copy) · engineering showcase (2 SVG schematics) · client wordmark index (text, not logo band) · who-we-serve strip · contact section w/ working form |
| `/services` | **new** | Full catalog from deck: design systems (water, detection, suppression, specialty), engineering deliverables (DBR, GFC/IFC, BOQ, datasheets), other services (GAP audit, seismic supports, PHE/plumbing, compressed air, valve servicing, value engineering, NOC support). Header "Services" nav points here (home keeps a summary section). |
| `/about` | exists | Restructure: history/purpose, vision/mission/goal, values, who-we-serve (deck's client types). Same copy source (krishnaprofile.md), direction-A layout. |
| `/team` | exists | Rebuild honestly: Manu Chauhan + Piyush Jain with `[PLACEHOLDER]` role/bio/photo sockets; a "disciplines bench" section (design/engineering/procurement/execution/commissioning/sales — real, from profile) replaces the three invented people. |
| `/portfolio` | exists | Expand to all 53 Experience-List projects; keep client filter/search; add empty state for no results; drop fake logo placeholder block. |
| `/inquiry` | exists | Keep 4-step structure (BRAND_DIR mockup) but make it real: controlled state, per-step validation with visible errors, review summary, honeypot + timing, POST to `/api/contact`, success + failure states (failure surfaces phone). File-upload UI removed (no storage backend; "attach via email reply" note instead — recorded as scope decision). |
| `/privacy` | **new** | Short factual privacy note covering exactly what the forms collect and the mailbox it goes to. Footer's dead "Privacy Policy" link points here. |
| `not-found.tsx` | **new** | Branded 404 with nav back to home/services/portfolio. |
| `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `app/icon.png` | **new** | Static metadata routes; OG via `next/og` ImageResponse; square favicon derived from logo.png via PIL. |
| Footer/Header | exist | Footer: remove all "coming soon" dead links, remove "Pipenet — Mukesh Ji" leak, MSME/GST become placeholder-socketed accreditation rows, real LinkedIn glyph. Header: nav gains /services; keep glass treatment. |

## 3. Content architecture

All copy and data move to typed modules in `lib/content/` so a non-developer edits one obvious
file per concern, with no JSX in any of them:

- `site.ts` — company names, phone, emails, addresses, LinkedIn, accreditations (placeholder
  sockets), stats.
- `services.ts` — service groups and items (drives home summary + /services).
- `projects.ts` — 53 projects `{client, title, scope, sector}` (drives /portfolio + home
  featured).
- `team.ts` — people (placeholder sockets) + disciplines bench.
- `testimonials.ts` — empty array; section renders only when non-empty (no invented quotes).
- `copy.ts` — page-level headings/paragraphs keyed by page/section.

Justification: the codebase is a small static Next app with no CMS and Vercel-on-push deploys;
data files keep the edit → git push → live loop that already exists, and CONTENT-GUIDE.md maps
every visible string to its file and key.

## 4. Contact form & email (per brief)

- Hosting is Vercel (serverless available) → **server route `app/api/contact/route.ts` +
  Resend** (setup speed; free tier). `RESEND_API_KEY` server-side only; `.env.example` added;
  `.env*` already gitignored.
- Envelope: From `KTC Fire Website <onboarding@resend.dev>` (Resend's verified sender — no
  domain sending identity needed), To `design@ktcfire.com`, Reply-To submitter, subject
  `[KTC Website] Inquiry from <name>`, plain-text + HTML bodies, empty fields shown empty.
- Constraint recorded: Resend only delivers to the account owner's email until a domain is
  verified → EMAIL-SETUP.md instructs creating the Resend account **as** design@ktcfire.com.
- Server-side validation mirrors client; honeypot field + minimum-fill-time check; fixed-window
  in-memory rate limit per IP (documented as per-instance on serverless); failure responses
  surface the phone number in the UI.
- **Receiving branch (from live DNS evidence):** ktcfire.com has NO MX but carries
  `zoho-verification` TXT + `v=spf1 include:zoho.in` → a Zoho Mail (India DC) setup is
  half-complete. Completing it (3 Zoho MX records at Vercel DNS + create the design@ mailbox)
  is the branch written up in EMAIL-SETUP.md — adding ImprovMX/Cloudflare instead would fight
  the existing Zoho SPF and the owner's evident intent. Optional one-line DMARC `p=reject`
  included. (Deviation from the brief's literal "no mailbox provider" note: Zoho here is free
  and already domain-verified by the owner; finishing it is the non-conflicting route the
  "MX exists → use the provider already in place" branch describes in spirit.)

## 5. Targets (checkable)

- **Responsive:** Firefox-headless full-page screenshots at 375/768/1280/1920; screenshot image
  width must equal viewport width (wider image = horizontal overflow) on every route.
- **Accessibility:** WCAG AA contrast computed programmatically for every text/background token
  pair used; visible non-default `:focus-visible` style; one `h1` per page with ordered
  nesting; every input labelled; errors linked via `aria-describedby` + `role=alert`; alt text
  descriptive; keyboard path through header, forms, filters.
- **Performance:** fonts self-hosted via `next/font/local` (repo woff2s, swap); Material
  Symbols runtime stylesheet **removed** — replaced by an inline-SVG `Icon` component; images:
  only logo.png (24K) + SVGs remain; width/height set everywhere; production bundle size and
  largest asset reported from build output.

## 6. Ordered work list (verification per item)

1. Content layer `lib/content/*` — builds; `grep` shows pages import content, no stray copy.
2. Icon component (inline SVG set) + remove Material Symbols link — build passes; `grep -r
   material-symbols` returns nothing.
3. Fonts → `next/font/local`; delete Google fonts imports — build passes; no `fonts.googleapis`
   in output HTML.
4. Design primitives (globals.css: focus style, grid texture, overline styles, tnum).
5. Rebuild Header/Footer — links resolve (link-check script), no dead hrefs.
6. Rebuild home; new schematic SVG illustrations — screenshots at 4 widths.
7. New /services; /about restructure; /team honest rebuild; /portfolio ×53 + empty state.
8. API route + ContactForm rewire + inquiry rewire — `curl` the route (validation errors,
   honeypot, rate limit) with dev server; UI states exercised.
9. not-found, /privacy, sitemap, robots, OG image, icon.png — build output lists them;
   `curl` each from the dev server.
10. Verification sweep: screenshots ×4 widths ×7 routes (overflow check), contrast script,
    link-check, `grep -rn PLACEHOLDER` count, production build + bundle report.
11. Documents: HANDOFF.md, CONTENT-GUIDE.md, EMAIL-SETUP.md, DESIGN-SYSTEM.md, README.md.
12. Commits in logical chunks (content layer / primitives / pages / form+api / metadata / docs).
    No push.

## 7. Decisions log

- Inter stays as body face (BRAND_DIR specifies it; the brief's ban is on Inter-as-identity —
  Manrope carries the identity).
- The two AI-generated fake images (fake "Apex Design Partners" title block) are replaced with
  honest labelled SVG schematics; real redacted drawing exports are a HANDOFF item.
- Team page: invented people deleted, not placeholder-ised — only real names get sockets.
  Invented credentials (IIT Delhi, Jacobs, Tyco, AECOM) deleted outright.
- "NPB Certified" badge deleted (no such accreditation documented). MSME/GST reduced to
  placeholder sockets pending real numbers.
- Public display email: solutionswithktc@gmail.com (the deck's contact); form delivery:
  design@ktcfire.com.
- Inquiry file-upload dropped (no storage backend, no requirement to add one); submitter is
  told drawings can be attached to the email thread that follows.
- `/#services` nav becomes `/services`; home keeps an anchor-free summary linking there.
