# EMAIL-SETUP — receiving at design@ktcfire.com

## Why these exact steps

Checked on 2026-08-28: **ktcfire.com has no MX records**, so no address at
the domain can receive mail yet. But the DNS already carries
`zoho-verification=zb99735345.zmverify.zoho.in` and
`v=spf1 include:zoho.in ~all` — someone (presumably you) already created and
domain-verified a **Zoho Mail (India)** account for ktcfire.com and only the
MX records were never added. Finishing that setup is the safe route; adding
a different mail service instead would fight the existing Zoho records.
DNS is hosted on **Vercel** (nameservers ns1/ns2.vercel-dns.com).

> Fallback, one line: if the Zoho account is lost and unrecoverable, delete
> the two Zoho TXT records and use ImprovMX free tier instead — but try
> Zoho password recovery first.

## Part A — add Zoho's MX records at Vercel

1. Log in at https://vercel.com and open the **Domains** tab (top-level, next
   to Projects), then click **ktcfire.com**.
2. Open the **DNS Records** section and click the **Add Record** button.
   Create these three records, one at a time:

   | Type | Name | Value | Priority | TTL |
   |------|------|-----------|----------|--------|
   | MX | (leave empty) | `mx.zoho.in` | 10 | 60 min (default) |
   | MX | (leave empty) | `mx2.zoho.in` | 20 | 60 min (default) |
   | MX | (leave empty) | `mx3.zoho.in` | 50 | 60 min (default) |

3. Optional but recommended anti-spoofing (there is no outbound mail from
   this domain, so `reject` is safe):

   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | TXT | `_dmarc` | `v=DMARC1; p=reject; rua=mailto:design@ktcfire.com` | 60 min |

4. **Verify it worked:** after 10–30 minutes, open
   `https://dns.google/resolve?name=ktcfire.com&type=MX` in a browser — the
   answer should list the three `zoho.in` hosts. (Vercel DNS propagates in
   minutes; allow up to an hour worldwide.)

## Part B — create the design@ mailbox in Zoho

5. Log in at https://mailadmin.zoho.in with the account that verified the
   domain. In the left sidebar open **Domains → ktcfire.com** and confirm
   the domain shows verified; its **Email Configuration / MX** check should
   turn green once Part A propagates.
6. In the left sidebar open **Users → Add User** (the free plan includes up
   to 5 users). Create the user with email **design@ktcfire.com** and a
   strong password. Read this mailbox at https://mail.zoho.in or in the
   Zoho Mail app.
   - If you'd rather read it in an existing inbox: open Zoho Mail →
     Settings → **Mail forwarding**, add `[YOUR-INBOX@example.com]` and
     confirm the verification mail Zoho sends there. (Zoho gates forwarding
     on some free plans — if the option is missing, read it in Zoho
     directly.)
7. **Verify it worked:** from any external account (e.g. Gmail), send a test
   to design@ktcfire.com. It should land in the Zoho inbox (check Spam on
   the first one) within a minute of MX propagation.

## Part C — connect the website form (Resend)

8. Go to https://resend.com and **sign up using design@ktcfire.com** as the
   account email (the mailbox must already work — Part B). This matters:
   without a verified sending domain, Resend only delivers to the account
   owner's own address, and we deliberately do not set up a sending domain.
9. In the Resend dashboard open **API Keys** (left sidebar) → click
   **Create API Key** → name it `ktcfire-website`, permission "Sending
   access" → copy the `re_…` value once shown.
10. In Vercel open **Projects → ktcfire → Settings → Environment
    Variables** and add `RESEND_API_KEY` = the copied value, for
    Production, Preview and Development. Click **Save**, then trigger a
    redeploy (Deployments → ⋯ on the latest → **Redeploy**).
11. **End-to-end test:** open the live site, fill the home-page contact
    form with your own details and submit. Within a minute an email titled
    `[KTC Website] Message from <your name>` from
    `KTC Fire Website <onboarding@resend.dev>` should arrive at
    design@ktcfire.com. Press Reply — the To: field should be the address
    you typed into the form.

## Changing the delivery address later

Set the Vercel env var `CONTACT_TO_EMAIL` to the new address and redeploy —
no code change. (While Resend has no verified domain, the new address must
belong to the Resend account owner.)

## When mail does not arrive — check in this order

1. **Resend delivery log:** resend.com → **Emails** (left sidebar). Every
   form submission appears here with status Delivered / Bounced / Failed.
   Nothing listed → the site never reached Resend: check that
   `RESEND_API_KEY` is set in Vercel and the project was redeployed after
   adding it (step 10).
2. **A red "could not be sent" box on the site** with the phone number
   means the API rejected the send — the server log (Vercel → Project →
   Logs) prints Resend's exact error.
3. **Resend shows Delivered but the inbox is empty:** check the Zoho Spam
   folder, then Zoho's own log at mailadmin.zoho.in → **Reports/Mail
   Logs**.
4. **Bounced with "no MX" / "domain not found":** Part A hasn't propagated
   or a record was mistyped — re-check step 4.
5. Rate limiting: more than 5 submissions from one IP within 10 minutes
   are refused with a "try again in a few minutes" message — that's
   deliberate, not a fault.
