/**
 * Company facts. Every value here is sourced from the Krishnatech company
 * profile or the ESO presentation deck — do not add claims that are not in
 * those documents. Strings containing the word PLACEHOLDER are sockets
 * awaiting real values; they are listed in HANDOFF.md.
 */

import { projects, sectors } from "./projects";

export const site = {
  name: "Krishnatech",
  legalName: "Krishnatech Consulting & Engineer Services",
  tagline: "An ESO Company",
  description:
    "Engineering Service Outsourcing (ESO) company specialising in fire detection, protection, and suppression system design — from pre-bid engineering to IFC drawings.",
  url: "https://ktcfire.vercel.app",
  phone: "+91 97693 67666",
  phoneHref: "tel:+919769367666",
  email: "solutions@ktcfire.com",
  designEmail: "design@ktcfire.com",
  linkedin: "https://www.linkedin.com/company/krishnatech/",
  addresses: [
    {
      label: "Office",
      lines: [
        "Krishnatech Consulting Engineer Services",
        "Unit No. 242, Tower T3, Golden I",
        "Techzone-4, Greater Noida West",
        "Uttar Pradesh — 201318",
      ],
    },
  ],
  codes: ["NBC", "IS", "NFPA", "OISD", "FM"],
  stats: [
    { value: "25+", label: "Years in fire protection", note: "Team experience across design, engineering and commissioning" },
    {
      value: `${projects.length}`,
      label: "Major projects",
      note: `Completed and ongoing, across ${sectors.length} industry segments`,
    },
    { value: "200+", label: "Hydraulic analyses", note: "Delivered for clients and consultants in the last 5 years" },
    { value: "5", label: "Code frameworks", note: "NBC · IS · NFPA · OISD · FM, plus state-wise AHJ requirements" },
  ],
  accreditations: [
    {
      label: "MSME Registered",
      value: "[PLACEHOLDER: Udyam registration number]",
    },
    {
      label: "GST Registered",
      value: "[PLACEHOLDER: GSTIN]",
    },
  ],
  clientTypes: [
    "PSUs",
    "MEP Consultants",
    "Fire Protection Contractors",
    "MEP / EPC & Turnkey Project Companies",
    "Architects & Interior Designers",
  ],
  // Wordmarks shown in the client index on the home page. All from the
  // Experience List.
  featuredClients: [
    "Maruti Suzuki",
    "IOCL",
    "ONGC",
    "BPCL",
    "NTPC",
    "Mankind Pharma",
    "Mahindra & Mahindra",
    "AAI",
    "IPCA Laboratories",
    "Radico Khaitan",
    "Nxtra",
    "MSETCL",
  ],
} as const;
