/**
 * Service catalogue. Sourced from the company profile's solution range and
 * the ESO presentation's "Our Services" / "Other Services" slides.
 */

export type ServiceGroup = {
  /** Drawing-index code rendered as the group's overline, e.g. "SYS-01". */
  code: string;
  title: string;
  icon: string;
  summary: string;
  items: string[];
};

/** Fire protection systems Krishnatech designs. */
export const systemGroups: ServiceGroup[] = [
  {
    code: "SYS-01",
    title: "Water-Based Systems",
    icon: "droplet",
    summary:
      "Hydrant, sprinkler and spray systems engineered from pump room to the furthest nozzle.",
    items: [
      "Fire pump room design and pump selection",
      "Water tank capacity calculations",
      "Hydrant system",
      "Sprinkler system",
      "High / medium velocity water spray systems",
      "Water curtain and deluge / mulsifyre systems",
      "Foam systems — low, medium and high expansion (storage tanks, dyke walls, helipads, warehouses)",
    ],
  },
  {
    code: "SYS-02",
    title: "Detection & Alarm",
    icon: "bell",
    summary:
      "Detection networks matched to the hazard, from conventional panels to aspirating smoke detection.",
    items: [
      "Intelligent addressable fire alarm systems",
      "Conventional fire alarm systems",
      "Very early smoke detection & alarm (VESDA)",
      "Public address (PA) systems",
    ],
  },
  {
    code: "SYS-03",
    title: "Gas Suppression",
    icon: "shield",
    summary:
      "Clean-agent and CO₂ protection for electrical rooms, server rooms and critical electronics.",
    items: [
      "CO₂ gas-based systems",
      "Argonite / FM-200 / clean agent systems (panel and total flooding)",
      "Portable fire extinguisher schemes",
    ],
  },
  {
    code: "SYS-04",
    title: "Specialty & Ancillary",
    icon: "grid",
    summary:
      "The systems that complete a protected facility, designed alongside the fire package.",
    items: [
      "CCTV surveillance",
      "Water leak detection",
      "Rodent repellent systems",
      "Compressed air systems",
      "Plumbing / PHE design — water demand and balance, rainwater, sewage & drainage, STP / WTP selection",
    ],
  },
];

/** Engineering deliverables and consulting services. */
export const engineeringGroups: ServiceGroup[] = [
  {
    code: "ENG-01",
    title: "Hydraulic Analysis",
    icon: "gauge",
    summary:
      "Computational analysis for water-based and compressed-air systems — 200+ projects delivered in the last five years.",
    items: [
      "Hydraulic analysis for water-based systems",
      "Hydraulic analysis for compressed air systems",
      "Orifice plate calculations",
      "Cost optimisation through hydraulic design and MOC selection",
    ],
  },
  {
    code: "ENG-02",
    title: "Design Documentation",
    icon: "blueprint",
    summary:
      "The full drawing and document set, from design basis report to issued-for-construction.",
    items: [
      "Design basis reports (DBR)",
      "CAD services — As-Built, GFC and IFC drawings",
      "Shop drawing preparation",
      "Technical datasheets",
      "Bill of quantities (BOQ) / MTO",
    ],
  },
  {
    code: "ENG-03",
    title: "Bid & Procurement Support",
    icon: "document",
    summary:
      "Pre-bid and post-bid engineering that lets you quote design-and-build work with confidence.",
    items: [
      "Tender techno-commercial documents",
      "Cost estimation and budget preparation with quotation support",
      "Vendor analysis & technical bid evaluation",
      "MR / PR generation for procurement",
      "Pre-bid and post-bid support for design & build tenders",
    ],
  },
  {
    code: "ENG-04",
    title: "Audit, Compliance & Site",
    icon: "check-badge",
    summary:
      "Keeping existing systems compliant, healthy, and approved by the authorities having jurisdiction.",
    items: [
      "System design review and GAP auditing against latest codes",
      "Static and seismic support design with cost optimisation",
      "Servicing of deluge valves, DVLCP and fire pump room automation",
      "Erection and commissioning supervision",
      "Fire NOC application support and third-party approvals",
      "Value engineering",
    ],
  },
];

/** Condensed home-page summary rows: one per group, linking to /services. */
export const serviceIndex = [...systemGroups, ...engineeringGroups].map(
  (g) => ({
    code: g.code,
    title: g.title,
    icon: g.icon,
    summary: g.summary,
    count: g.items.length,
  }),
);

/** The four-step engagement workflow, from the ESO deck. */
export const workflow = [
  {
    num: "01",
    title: "Share inputs",
    desc: "You send project drawings, specifications and requirements.",
  },
  {
    num: "02",
    title: "We design",
    desc: "We develop the DBR, CAD drawings and supporting documents.",
  },
  {
    num: "03",
    title: "You review",
    desc: "You review the package and send feedback, if any.",
  },
  {
    num: "04",
    title: "We deliver",
    desc: "We finalise and hand over the complete design package.",
  },
];
