/**
 * Contact/inquiry form delivery. Validates server-side, applies honeypot,
 * minimum-fill-time and per-IP rate limiting, then sends through Resend's
 * REST API. The API key never reaches the browser. See EMAIL-SETUP.md.
 */

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "design@ktcfire.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "KTC Fire Website <onboarding@resend.dev>";
const MIN_FILL_MS = 4_000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1_000;

// Per-instance fixed window. Serverless instances each keep their own map,
// so this bounds abuse per instance rather than globally — acceptable for a
// brochure-site form.
const hits = new Map<string, { count: number; windowStart: number }>();

/** Returns how many seconds the caller must wait, or 0 if it may proceed. */
function retryAfterSeconds(ip: string): number {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    hits.set(ip, { count: 1, windowStart: now });
    return 0;
  }
  entry.count += 1;
  if (entry.count <= RATE_LIMIT) return 0;
  return Math.max(1, Math.ceil((entry.windowStart + RATE_WINDOW_MS - now) / 1_000));
}

/** "3 minutes" / "45 seconds", for the wait message. */
function humanWait(seconds: number): string {
  if (seconds < 60) return `${seconds} second${seconds === 1 ? "" : "s"}`;
  const minutes = Math.ceil(seconds / 60);
  return `${minutes} minute${minutes === 1 ? "" : "s"}`;
}

/** 429 with the wait spelled out, so a person is never left guessing. */
function waitResponse(seconds: number, lead: string) {
  return Response.json(
    { error: `${lead} Please wait ${humanWait(seconds)} and send it again.`, retryAfterSeconds: seconds },
    { status: 429, headers: { "Retry-After": String(seconds) } },
  );
}

type FormKind = "contact" | "inquiry";

/** field key -> [label, required, max length] per form */
const SCHEMAS: Record<FormKind, Record<string, [string, boolean, number]>> = {
  contact: {
    name: ["Full name", true, 200],
    email: ["Email", true, 320],
    message: ["Project brief", true, 5_000],
  },
  inquiry: {
    company: ["Company name", true, 200],
    contactPerson: ["Contact person", true, 200],
    phone: ["Phone number", true, 40],
    email: ["Email", true, 320],
    projectType: ["Project type", true, 100],
    location: ["Project location", true, 300],
    area: ["Facility area (sq.ft)", false, 40],
    hazard: ["Hazard classification", false, 100],
    codes: ["Applicable codes & standards", false, 300],
    requirements: ["Additional requirements", false, 5_000],
    budget: ["Estimated budget range", false, 100],
    timeline: ["Project timeline", false, 100],
    scope: ["Scope of engagement", false, 400],
    notes: ["Additional notes", false, 5_000],
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const waitFor = retryAfterSeconds(ip);
  if (waitFor > 0) {
    return waitResponse(waitFor, "You have sent several submissions already.");
  }

  let body: {
    form?: string;
    elapsedMs?: number;
    startedAt?: number;
    website?: string;
    fields?: Record<string, unknown>;
  };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const kind = body.form as FormKind;
  const schema = SCHEMAS[kind];
  if (!schema || typeof body.fields !== "object" || body.fields === null) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled: a definite bot. Pretend success so it learns nothing.
  if (body.website) {
    return Response.json({ ok: true });
  }

  // Fill time is measured on the client and sent as a duration, so a device
  // clock that disagrees with the server's cannot make a real submission look
  // instantaneous. `startedAt` is still read as a fallback so a page cached
  // from before this deploy keeps working.
  const elapsed =
    typeof body.elapsedMs === "number"
      ? body.elapsedMs
      : typeof body.startedAt === "number"
        ? Date.now() - body.startedAt
        : Number.NaN;
  // Too fast to be a person typing. Never drop it silently — say so and let
  // them send again, so a real message is delayed rather than lost.
  if (!(elapsed >= MIN_FILL_MS)) {
    const wait = Number.isFinite(elapsed)
      ? Math.max(1, Math.ceil((MIN_FILL_MS - elapsed) / 1_000))
      : Math.ceil(MIN_FILL_MS / 1_000);
    return waitResponse(wait, "That was submitted faster than we can accept.");
  }

  // Server-side validation mirroring the client.
  const fields: Record<string, string> = {};
  const fieldErrors: Record<string, string> = {};
  for (const [key, [label, required, maxLen]] of Object.entries(schema)) {
    const raw = body.fields[key];
    const value = typeof raw === "string" ? raw.trim() : "";
    if (required && !value) {
      fieldErrors[key] = `${label} is required.`;
    } else if (value.length > maxLen) {
      fieldErrors[key] = `${label} must be under ${maxLen} characters.`;
    }
    fields[key] = value;
  }
  if (fields.email && !EMAIL_RE.test(fields.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }
  if (Object.keys(fieldErrors).length > 0) {
    return Response.json(
      { error: "Please correct the highlighted fields.", fieldErrors },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; cannot deliver form submission.");
    return Response.json(
      { error: "The contact service is not configured." },
      { status: 503 },
    );
  }

  const submitterName = fields.name || fields.contactPerson || "Website visitor";
  const subject = `[KTC Website] ${
    kind === "inquiry" ? "Service inquiry" : "Message"
  } from ${submitterName}`;

  // Every schema field appears in the body, empty ones shown as empty.
  const rows = Object.entries(schema).map(
    ([key, [label]]) => [label, fields[key] ?? ""] as const,
  );
  const text = [
    `${kind === "inquiry" ? "Service inquiry" : "Contact message"} from ${submitterName} via the KTC Fire website`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    `Submitted: ${new Date().toISOString()}`,
  ].join("\n");
  const html = `<h2 style="font-family:sans-serif">${
    kind === "inquiry" ? "Service inquiry" : "Contact message"
  }</h2><table style="font-family:sans-serif;border-collapse:collapse">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#555;vertical-align:top">${escapeHtml(
          label,
        )}</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(
          value,
        )}</td></tr>`,
    )
    .join("")}</table><p style="font-family:sans-serif;color:#888;font-size:12px">Submitted ${new Date().toISOString()} · Reply to answer the sender directly.</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: fields.email,
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend rejected the submission:", res.status, detail);
    return Response.json(
      { error: "The message could not be sent." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
