/**
 * Team. Only people documented in the brand material appear here. Roles and
 * biographies are supplied by the company; photos are not, so `image` stays
 * empty and the grid falls back to a monogram tile.
 * Add further real people by copying a block; the grid handles any count.
 */

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Path under /public, e.g. "/team/mukesh-chauhan.jpg" (800×800). Empty = monogram tile. */
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Mukesh Chauhan",
    role: "Design & Operations Head",
    bio: "A mechanical engineer by training and a certified PIPENET professional, Mukesh leads engineering design, project execution and operations at Krishnatech. His focus on technical excellence, quality and timely delivery is what keeps the practice turning out solutions that are practical, reliable and efficient on site.",
    image: "",
  },
  {
    name: "Piyush Jain",
    role: "Business Relations, Sales & Marketing",
    bio: "Piyush brings a background in mechanical and piping engineering together with an acumen for sales and marketing. He leads business relations, sales and marketing at Krishnatech, driving client engagement, business development and strategic growth on the strength of both technical and commercial understanding.",
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
