# ktcfire — Krishnatech marketing site

Next.js 16 (App Router) + Tailwind CSS 4 + TypeScript. Deployed on Vercel;
every push to `main` goes live at https://ktcfire.vercel.app.

## Run

```bash
npm ci          # install (Node 20.9+)
npm run dev     # http://localhost:3000
npm run build   # production build (must pass before pushing)
npm run lint    # eslint
```

## Environment variables

Copy `.env.example` to `.env.local` (never commit real values; `.env*` is
gitignored except the example):

- `RESEND_API_KEY` — Resend API key; the contact/inquiry forms return
  their failure state without it. Setup: EMAIL-SETUP.md.
- `CONTACT_TO_EMAIL` — delivery address (default `design@ktcfire.com`).
- `CONTACT_FROM_EMAIL` — From header (default Resend onboarding sender).

On Vercel these live under Project → Settings → Environment Variables.

## Where things are

- `lib/content/` — all editable copy and data (see CONTENT-GUIDE.md)
- `app/` — pages; `app/api/contact/route.ts` — form delivery endpoint
- `components/` — Header, Footer, ContactForm, Icon set, SVG schematics
- `app/globals.css` — design tokens (see DESIGN-SYSTEM.md)

## Documents

- HANDOFF.md — what still needs real values, in launch order
- EMAIL-SETUP.md — DNS + mailbox + Resend, step by step
- CONTENT-GUIDE.md — how to edit content, add people/services/projects
- DESIGN-SYSTEM.md — tokens, type, spacing, where each is defined
