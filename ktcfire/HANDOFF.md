# HANDOFF — what only you can supply

Ordered by what blocks launch. Every `[PLACEHOLDER: …]` token in the code
appears here. Paths are relative to `ktcfire/` inside the repo.

## 1. DNS + mailbox (blocks the contact form) — do this first

The form code is finished and tested; it delivers to **design@ktcfire.com**,
which cannot receive mail until you complete the steps in
[EMAIL-SETUP.md](EMAIL-SETUP.md). Two accounts are involved:

| What | Where | Needed value |
|---|---|---|
| Zoho Mail admin access | mailadmin.zoho.in (the account that added the existing `zoho-verification` DNS record) | login credentials you hold |
| Mailbox to read design@ mail in, or a forward target | EMAIL-SETUP.md step 6 | `[YOUR-INBOX@example.com]` |
| Resend API key | resend.com → API Keys, account registered as design@ktcfire.com | paste into Vercel env `RESEND_API_KEY` |

## 2. Registration numbers (footer shows placeholder text until fixed)

| What | File & line | Format | How to replace |
|---|---|---|---|
| MSME / Udyam registration number | `lib/content/site.ts` line 44 | `UDYAM-XX-00-0000000` | Replace everything between the quotes with the number. |
| GSTIN | `lib/content/site.ts` line 48 | 15-character GSTIN | Replace everything between the quotes. If you'd rather not publish these, delete both entries inside `accreditations: [...]` and the footer section disappears. |

## 3. Team details (team page shows placeholder text until fixed)

| What | File & line | Format | How to replace |
|---|---|---|---|
| Manu Chauhan — role/title | `lib/content/team.ts` line 20 | short title, e.g. "Principal Engineer" | Replace the bracketed text between the quotes. |
| Manu Chauhan — biography | `lib/content/team.ts` line 21 | 2–3 sentences | Same. |
| Piyush Jain — role/title | `lib/content/team.ts` line 26 | short title | Same. |
| Piyush Jain — biography | `lib/content/team.ts` line 27 | 2–3 sentences | Same. |
| Headshots (optional — monogram tiles show until added) | `lib/content/team.ts` lines 22 and 28 (`image: ""`) | square JPG, 800×800px, under 150KB, e.g. `/team/manu-chauhan.jpg` | Put the file in `public/team/` and set `image: "/team/manu-chauhan.jpg"`. |

The previous team page listed three more people (Aarti Sharma, Vikram
Singh, Rohan Patel) with detailed credentials. None of them appear in any
company document, so they were removed rather than kept as placeholders.
Add real colleagues via CONTENT-GUIDE.md § "Add a team member".

## 4. Optional improvements (nothing blocks without them)

| What | Where | Notes |
|---|---|---|
| Real drawing exports (redacted) | replace `components/Schematics.tsx` usage on the home page | Current graphics are honest labelled illustrations. A real (client-approved, redacted) GA drawing exported at ~1600×1200 WebP would be stronger. Send it and ask for it to be wired in, or follow CONTENT-GUIDE.md § "Replace a photograph". |
| Larger logo file | `public/logo.png` is 100×113px | Fine at header size; a 400px+ version would render crisper on retina screens. Same filename, drop in place. |
| Verify one project location | `lib/content/projects.ts` line 231 | The Experience List says the NTPC waste-to-energy plant is at "Hubali, West Bengal" — the state looks like a typo (Haldia?). The site currently shows just "Hubali"; correct it when confirmed. |
| Testimonials | `lib/content/testimonials.ts` | Ships empty; the home section appears automatically once a real quote is added. |
| Custom domain | Vercel dashboard → Domains | ktcfire.com already points its A records at Vercel but the site is served from ktcfire.vercel.app. Attach the domain to the project in Vercel (Project → Settings → Domains → Add → ktcfire.com), then update `url` in `lib/content/site.ts` to `https://ktcfire.com` so the sitemap and OG tags follow. |

## Verification after you finish

1. `grep -rn PLACEHOLDER lib/` inside `ktcfire/` returns nothing.
2. The footer Registration section and the team page show real values.
3. A form submission from the live site arrives at design@ktcfire.com
   (EMAIL-SETUP.md § "End-to-end test").
