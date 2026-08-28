# CONTENT-GUIDE — editing the site without touching layout code

Everything visible on the site lives in six data files under
`lib/content/`, or in the page files listed in the copy table at the end.
Workflow for any change: edit the file → preview locally (last section) →
commit and push to `main` → Vercel deploys automatically.

## Add a team member

1. Open `lib/content/team.ts`.
2. Copy an existing block inside `export const team = [...]` — from `{` to
   `},` — and paste it before the closing `];`:

   ```ts
   {
     name: "Full Name",
     role: "Their title",
     bio: "Two or three sentences about them.",
     image: "/team/full-name.jpg",
   },
   ```

3. Fields: `name` (as displayed), `role` (short title, rendered as an
   orange overline), `bio` (2–3 sentences), `image` (path under `public/`,
   or `""` to show a navy monogram tile instead).
4. Photo: save a **square JPG, 800×800px, under 150KB** as
   `public/team/full-name.jpg`. The site renders it at 80×80px.
5. Layout at different counts: the grid is 2 columns on desktop. Two
   members = one row; three = 2 + 1 (the odd card sits bottom-left);
   four = 2×2; five = 2+2+1. Nothing else needs changing.
6. **Verify:** run the local preview; /team shows the new card with no
   placeholder brackets.

## Replace a photograph / illustration

- **Team photos** — see above.
- **Logo** (`public/logo.png`, 100×113px PNG, transparent background):
  overwrite the file keeping the same name. Then regenerate the favicon:
  easiest is to ask your developer (or Claude) to re-run the PIL snippet
  in the repo history; otherwise any "PNG to ICO" converter — favicon
  lives at `app/favicon.ico` (16/32/48px) and `app/icon.png` (192×192).
- **Home-page schematics** (the sprinkler layout and the pump-curve chart)
  are code-drawn SVGs in `components/Schematics.tsx`, not image files. To
  replace one with a real drawing export: save the export as
  `public/drawings/<name>.webp` (landscape 4:3, ~1600×1200px, under
  300KB, WebP — convert with https://squoosh.app or `cwebp in.png -o
  out.webp`), then in `app/page.tsx` swap the `<SprinklerSchematic …/>` or
  `<HydraulicCurve …/>` element for
  `<Image src="/drawings/<name>.webp" alt="describe what the drawing
  shows" width={1600} height={1200} className="w-full h-auto block" />`
  (add `import Image from "next/image";` at the top if it isn't there).
- **Check after any image change:** preview locally; the layout must not
  shift (same aspect ratio as before), and the image should look sharp at
  full width on a laptop screen.

## Change any visible copy

| Text | File | Key / location |
|---|---|---|
| Phone, emails, addresses, LinkedIn | `lib/content/site.ts` | `phone`, `email`, `addresses` |
| Stats (25+, 53, 200+, 5) | `lib/content/site.ts` | `stats` |
| Registration numbers | `lib/content/site.ts` | `accreditations` |
| Client types ("Who we serve") | `lib/content/site.ts` | `clientTypes` |
| Client wordmarks on home | `lib/content/site.ts` | `featuredClients` |
| Service groups, items, summaries | `lib/content/services.ts` | `systemGroups`, `engineeringGroups` |
| Workflow steps | `lib/content/services.ts` | `workflow` |
| Projects (cards on /portfolio) | `lib/content/projects.ts` | `projects` |
| Featured projects on home | `lib/content/projects.ts` | `featuredProjects` (picks by index) |
| Team names/roles/bios | `lib/content/team.ts` | `team`, `disciplines` |
| Testimonials | `lib/content/testimonials.ts` | `testimonials` |
| Home hero headline & paragraphs | `app/page.tsx` | search for the sentence you want to change |
| About page prose | `app/about/page.tsx` | same |
| Services page header | `app/services/page.tsx` | same |
| Inquiry form labels/options | `app/inquiry/page.tsx` | option lists at the top of the file |
| Privacy text | `app/privacy/page.tsx` | body sections |
| 404 text | `app/not-found.tsx` | body |
| Footer link labels | `components/Footer.tsx` | `explore`, `engage` arrays |
| Page titles / descriptions (SEO) | each page's `metadata` export; site-wide default in `app/layout.tsx` | `title`, `description` |

## Add or remove a service

1. Open `lib/content/services.ts`.
2. To add an item to an existing group, add a string to that group's
   `items` array. To add a whole group, copy a `{ code, title, icon,
   summary, items }` block; give it the next code (`SYS-05` / `ENG-05`).
   Valid `icon` names are listed in `components/Icon.tsx`.
3. Removal is the reverse. The home "drawing index" and /services update
   automatically, including the "N items" counts.
4. **Verify:** preview /services and the home index; the group and count
   appear.

## Add a testimonial

1. Open `lib/content/testimonials.ts` and add inside the array:

   ```ts
   {
     quote: "What they said, without quote marks.",
     name: "Person Name",
     role: "Their title",
     company: "Their company",
   },
   ```

2. The home page testimonial section is invisible while this list is
   empty and appears automatically once one entry exists. Only ever paste
   real, permission-given quotes.
3. **Verify:** preview the home page; the section appears after the
   "Track Record" section.

## Add a project

Open `lib/content/projects.ts`, copy any `{ client, title, scope,
location, sector }` block into the array. `sector` must be one of the
values in the `Sector` type at the top of the file (add a new one there
first if needed — the filter chips update automatically).

## Preview locally

1. Install Node.js 20+ (https://nodejs.org).
2. In a terminal:

   ```bash
   cd ktcfire
   npm ci
   npm run dev
   ```

3. Open http://localhost:3000. Edits to content files hot-reload.
4. To test the contact form locally, copy `.env.example` to `.env.local`
   and fill `RESEND_API_KEY`; without it the form shows its failure state
   (by design).

## Publish

1. `npm run build` inside `ktcfire/` must finish without errors.
2. Commit and push to the `main` branch — Vercel deploys automatically
   (2–3 minutes).
3. **Verify:** open https://ktcfire.vercel.app in a private window and
   check the page you changed.
