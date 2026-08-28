# NOTES — Phase 1 inventory (2026-08-28)

## Codebase

- **Framework:** Next.js 16.2.1 (App Router, Turbopack default), React 19.2.4, TypeScript 5.
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`; design tokens live in `app/globals.css`
  under `@theme inline` (M3-style token names, palette derived from the logo).
- **Package manager:** npm (package-lock.json). No test script. Lint = `eslint` (flat config).
- **Deploy target:** Vercel, auto-deploy on push to `main`. Live at https://ktcfire.vercel.app.
  (ktcfire.com is registered — registrar Hostinger, DNS on Vercel nameservers, A records exist —
  but the user says the live link is ktcfire.vercel.app; the apex likely isn't attached to the
  Vercel project yet. Not in scope to change DNS.)
- **Build status:** `npm run build` passes clean — 6 static routes: `/`, `/about`, `/team`,
  `/portfolio`, `/inquiry`, `/_not-found`. (Toolchain note: no system Node on this machine;
  session used a scratchpad Node v22.14.0.)
- **Content architecture today:** all copy is hardcoded in JSX; small data arrays at the top of
  each page file (services, projects, team). No CMS, no data files, no API routes, no env vars.

## Page/component status

| File | Status |
|---|---|
| `app/page.tsx` (home) | Built. Hero visual is an icon-in-gradient placeholder; "NPB Certified" badge is **invented** (no such accreditation in brand docs); trusted-clients band uses generic `domain` icons; contact section addresses partly invented ("Main Engineering Hub, NCR Region"). |
| `app/about/page.tsx` | Built; copy faithfully matches krishnaprofile.md (vision/mission/goal/values). |
| `app/team/page.tsx` | **Dangerous**: 5 named people with detailed credentials. Only **Manu Chauhan** (signs krishnaprofile.md) and **Piyush Jain** (contact in ESO presentation) are real. Aarti Sharma, Vikram Singh, Rohan Patel + ALL education/employer details (IIT Delhi, Jacobs, Tyco, AECOM…) are invented. Marked `"use client"` needlessly. |
| `app/portfolio/page.tsx` | Built, client-side filter/search. 22 projects, all traceable to Experience List (real). Source list has 53 projects — 31 missing. |
| `app/inquiry/page.tsx` | 4-step form, **pure theatre**: no state captured, no validation, Submit button does nothing, file-upload UI is dead. |
| `components/ContactForm.tsx` | TODO: fake submit, sets local state only. No name attrs, no validation UI. |
| `components/Header.tsx` | Works. Mobile menu OK. |
| `components/Footer.tsx` | Several `#` dead links marked "Coming Soon" (blog, privacy, terms, safety standards/certifications). "Pipenet — Mukesh Ji" badge is an internal note leaked into UI. LinkedIn icon uses `public` glyph. |
| `app/favicon.ico` | Default Next favicon (present). No OG images, no sitemap, no robots, no 404 page beyond default `_not-found`. |

## Brand & assets (BRAND_DIR)

- **Logo** `public/logo.png` — real, 100×113px PNG (small; fine at h-12 display but no larger
  variant exists). Colors in logo: navy wordmark, orange flame in gear, sky-blue circuit dots,
  red "Fire and Safety" ribbon.
- **Palette in globals.css** (derived from logo, replacing Stitch teal): primary #1D2468 navy,
  secondary #F36F21 orange, tertiary #0099D8 blue + full M3 surface ladder (#f8fafa…#e1e3e3).
- **Stitch mockups** (`stitch_service_inquiry_form/`): three screens + DESIGN.md ("Ignis
  Precision" / "High-Trust Structuralism"). Binding rules extracted:
  - No 1px solid borders for sectioning — boundaries via surface-tier shifts ("No-Line Rule").
  - Ghost borders (outline-variant @15%) only where accessibility demands.
  - Ambient shadow only spec: `0 12px 32px rgba(0,40,40,.08)` — tinted, never pure grey, never on every card.
  - Glassmorphism for floating chrome (navbar) — surface @80% + 20px blur.
  - Signature 135° gradient primary→primary-container for hero CTAs only.
  - Manrope (display/headline) + Inter (title/body/label). NOTE: Inter is on the banned list in
    the completion brief; BRAND_DIR specifies it. BRAND_DIR is priority 1 → Inter stays for body,
    but headline voice (Manrope) must dominate so the site doesn't read as default-Inter.
  - Radii: md 0.375rem / lg 0.5rem — small, deliberate. No uniform large radii.
  - 4px spacing base; section gaps 5–6rem; asymmetry and editorial whitespace encouraged;
    display-scale numerals as anchors.
- **Self-hosted fonts already in repo**: `public/fonts/` has Manrope (Regular/SemiBold/Bold/
  ExtraBold) + Inter (Regular/Medium/SemiBold/Bold) woff2 — currently UNUSED (layout.tsx loads
  Google Fonts at runtime instead).
- **Images `tech-drawing.png` / `hydraulic-analysis.png`**: AI-generated fakes (garbled labels,
  fake title block crediting "APEX DESIGN PARTNERS", fake "Metro Tower" project). 1024×1024 JPEGs
  in .png clothing, 692K/856K. Cannot ship as implied work product → replace with honest
  purpose-built SVG technical illustrations; list real drawing exports in HANDOFF.
- **Material Symbols** icon font loaded from Google — render-blocking `<link>` in layout head.

## Business facts (source of truth)

- Full name: **Krishnatech Consulting & Engineer Services**; concept: ESO — Engineering Service
  Outsourcing; EPCC services; 25+ years experience claim (presentation).
- People: **Manu Chauhan** (signs company profile), **Piyush Jain** (contact on ESO deck).
  No roles/education/photos documented anywhere.
- Contact: phone **9769367666**; emails **solutionswithktc@gmail.com** (deck) and
  **krishnatechconsultancy.sales@gmail.com** (profile); LinkedIn company/krishnatech.
- Addresses: Registered — Ghaziabad, UP (no street address given). Branch — B/17, Janardan
  Apartments, Natwarya Shankar Ghankar Marg, Dadar (W), Mumbai-400028.
- Codes: NBC, IS, NFPA, OISD, FM; state-wise AHJ compliance.
- Services: 17-item solution range (profile) + richer deck list incl. pump selection & tank
  capacity calcs, orifice plate calcs, As-Built/GFC/IFC drawings, BOQ, cost estimation,
  procurement, E&C supervision, GAP auditing, seismic support design, deluge valve servicing,
  compressed air, plumbing/PHE, value engineering, third-party approvals, Fire NOC support.
- Clients/projects: 53-row Experience List (Mankind, Maruti/MSIL, Mahindra, IOCL, BPCL, ONGC,
  NTPC, MSETCL, AAI, Bhopal Metro, Nxtra, Technoelectric, IPCA, Toyo Ink, Radico Khaitan, Renuka
  Sugars, Lords Distillery, Indorama, Boeing hangar Palam, Nigeria oil wells, NMIMS, Aravali
  Power, Oetiker, Calderys, Dhruv, AGSM, CARYA, Amba Shakti, Grainfuel, Superior Foods, KEC…).
  Segments: Pharma, Automobile, Metro & Rail, Distillery (sugar/grain/IMFL), Petrochemical,
  Power/Substation, Airport/Infrastructure, Data Centre, Education, Commercial, Chemical, Food,
  Metal/Steel. "200+ hydraulic analysis projects in last 5 years".
- Target customers: PSUs, MEP consultants, fire protection contractors, MEP/EPC & turnkey
  companies, architects & interior designers.
- Workflow (deck): share inputs → DBR + CAD + docs → review/feedback → final delivery.
- Certifications shown in footer: MSME, GST — plausible but numbers not in docs → placeholder
  tokens needed. "NPB Certified" — not in any doc → remove.

## Email/DNS state (ktcfire.com)

- NS: ns1/ns2.vercel-dns.com (Vercel DNS). A records exist. **No MX records.**
- TXT: `zoho-verification=zb99735345.zmverify.zoho.in`, `v=spf1 include:zoho.in ~all`, plus a
  stale `MS=ms74474230`. → A **Zoho Mail (India DC) setup was started and domain-verified but MX
  was never added**. Receiving branch: complete the existing Zoho setup (add Zoho MX at Vercel
  DNS, create design@ mailbox) rather than adding a second mail route. Details in EMAIL-SETUP.md.

## Gaps / open questions (resolved autonomously, per operating rules)

1. Team page: no real credentials exist → rebuild around the two real names with PLACEHOLDER
   sockets for roles/bios/photos; drop the three invented people.
2. Which public email to display: solutionswithktc@gmail.com (most recent, on the deck). Form
   deliveries go to design@ktcfire.com per the brief.
3. Registered-office street address, MSME/GST numbers, headshots, real drawing exports — only the
   owner can supply → HANDOFF.md.
4. Next 16 notes that matter here: request APIs are async-only (`await headers()`); route
   handlers = `app/api/*/route.ts`; `images.qualities` default `[75]`; middleware renamed proxy
   (unused); sitemap/robots file conventions unchanged.
