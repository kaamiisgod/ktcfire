/**
 * Team. Only people documented in the brand material appear here — Manu
 * Chauhan signs the company profile and Piyush Jain is the contact on the
 * ESO presentation. Roles, biographies and photos are not documented
 * anywhere, so those fields are PLACEHOLDER sockets (see HANDOFF.md).
 * Add further real people by copying a block; the grid handles any count.
 */

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Path under /public, e.g. "/team/manu-chauhan.jpg" (800×800). Empty = monogram tile. */
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Manu Chauhan",
    role: "[PLACEHOLDER: Manu Chauhan's role/title]",
    bio: "[PLACEHOLDER: 2–3 sentence biography for Manu Chauhan — experience, specialisation, notable projects]",
    image: "",
  },
  {
    name: "Piyush Jain",
    role: "[PLACEHOLDER: Piyush Jain's role/title]",
    bio: "[PLACEHOLDER: 2–3 sentence biography for Piyush Jain — experience, specialisation, notable projects]",
    image: "",
  },
];

/**
 * The disciplines the team covers — from the company profile: "a team of
 * dedicated professionals who have vast experience in their respective
 * fields of Design, Engineering, Procurement, Execution, Commissioning,
 * Sales and Marketing."
 */
export const disciplines = [
  {
    title: "Design & Engineering",
    desc: "System concepts, detailed design, hydraulic analysis and the full drawing set from DBR to IFC.",
    icon: "blueprint",
  },
  {
    title: "Procurement",
    desc: "Datasheets, BOQs and MTOs, vendor analysis, technical bid evaluation and MR/PR generation.",
    icon: "document",
  },
  {
    title: "Execution & Commissioning",
    desc: "Erection supervision, testing, commissioning and handover to the authorities having jurisdiction.",
    icon: "wrench",
  },
  {
    title: "Sales & Marketing",
    desc: "Pre-bid support, budget preparation and techno-commercial documentation for winning tenders.",
    icon: "handshake",
  },
];
