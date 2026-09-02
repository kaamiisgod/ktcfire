/**
 * Project experience list. Transcribed from "Experience List-180925" (major
 * completed and ongoing projects). Row 15 of the source — the hydraulic
 * analysis practice, 200+ projects across various clients — is presented as
 * a stat on the portfolio page rather than a card.
 */

export type Project = {
  client: string;
  title: string;
  scope: string;
  location?: string;
  sector: Sector;
  /**
   * Drawing or photo for the project card. Path under /public, e.g.
   * "/projects/waste-to-energy.png". Omit for no image.
   */
  image?: string;
};

export type Sector =
  | "Pharma"
  | "Automobile"
  | "Distillery"
  | "Petrochemical & Chemical"
  | "Power"
  | "Metro & Rail"
  | "Airport & Infrastructure"
  | "Data Centre"
  | "Education"
  | "Commercial"
  | "Food & Process"
  | "Metal & Steel";

export const projects: Project[] = [
  {
    client: "Mankind Pharma",
    title: "Complete pharma plant fire protection",
    scope: "Validation and modification of the tender design for the complete pharma plant.",
    location: "Udaipur, Rajasthan",
    sector: "Pharma",
  },
  {
    client: "Mahindra Tractors",
    title: "Furnace & robotic arm unit",
    scope: "Extension and strengthening of the firefighting system for the furnace and robotic-arm unit.",
    location: "SAS Nagar, Mohali",
    sector: "Automobile",
  },
  {
    client: "Bhopal Metro",
    title: "Metro rail depot firefighting works",
    scope: "Validation and modification of the tender design for firefighting works at the depot.",
    location: "Bhopal, Madhya Pradesh",
    sector: "Metro & Rail",
  },
  {
    client: "Lords Distillery",
    title: "Distillery fire protection system",
    scope: "Consultancy and design of the fire protection system for the distillery project.",
    location: "Ghazipur, Uttar Pradesh",
    sector: "Distillery",
  },
  {
    client: "Indorama",
    title: "PET recycling plant",
    scope: "Consultancy and design of the fire protection system for the PET recycling plant.",
    location: "Indonesia",
    sector: "Petrochemical & Chemical",
  },
  {
    client: "AAI",
    title: "Airport terminal building",
    scope: "Fire protection, public health engineering, electrical and HVAC design for the terminal building at the Sarsawa project.",
    location: "Saharanpur, Uttar Pradesh",
    sector: "Airport & Infrastructure",
  },
  {
    client: "Indian Air Force — Palam",
    title: "Boeing aircraft hangar protection",
    scope: "Pre-bid design of a high-expansion foam system for Boeing aircraft hangar protection.",
    location: "Air Force Station Palam, Delhi",
    sector: "Airport & Infrastructure",
  },
  {
    client: "Oil wells project",
    title: "100 m diameter oil well protection",
    scope: "Fixed foam and medium-velocity water spray systems for oil wells of 100 m diameter.",
    location: "Nigeria",
    sector: "Petrochemical & Chemical",
  },
  {
    client: "Toyo Ink",
    title: "Complete plant fire protection",
    scope: "Complete fire protection system for the Toyo Ink plant.",
    location: "Gujarat",
    sector: "Petrochemical & Chemical",
  },
  {
    client: "Shree Renuka Sugars",
    title: "Sugar-based distillery project",
    scope: "Pre-bid design support and consultancy for the fire protection system.",
    location: "Belgaum, Karnataka",
    sector: "Distillery",
  },
  {
    client: "Barauni Refinery",
    title: "Loading / unloading gantries",
    scope: "Pre-bid design support for the loading and unloading gantries.",
    location: "Barauni, Bihar",
    sector: "Petrochemical & Chemical",
    image: "/projects/iocl-barauni-refinery.png",
  },
  {
    client: "IOCL",
    title: "Transformer protection, Viramgam",
    scope: "High-velocity water spray system for transformer protection.",
    location: "Viramgam, Gujarat",
    sector: "Petrochemical & Chemical",
  },
  {
    client: "IPCA Laboratories",
    title: "Foam sprinkler system",
    scope: "Design and consultancy for the foam sprinkler system at the IPCA Labs plant.",
    location: "Ratlam, Madhya Pradesh",
    sector: "Pharma",
  },
  {
    client: "Maruti Suzuki",
    title: "Multi-plant expansion projects",
    scope: "Complete design and consultancy for various expansion projects across multiple plants.",
    location: "NCR region",
    sector: "Automobile",
  },
  {
    client: "Amba Shakti Bio Energy",
    title: "225/250 KLPD ethanol project",
    scope: "Pre-bid design of the fire protection system for the maize / rice based ethanol project.",
    location: "Gwalior, Madhya Pradesh",
    sector: "Distillery",
  },
  {
    client: "Grainfuel Distilleries",
    title: "250 KLPD grain fuel distillery",
    scope: "Design and upgradation of the fire protection system.",
    location: "Baroda, Gujarat",
    sector: "Distillery",
  },
  {
    client: "Nxtra",
    title: "Data centre, Mahape",
    scope: "Shop drawing preparation and cost optimisation.",
    location: "Navi Mumbai, Maharashtra",
    sector: "Data Centre",
  },
  {
    client: "Sunve Kalla project",
    title: "75 KLPD AA & 35 KLPD ENA distillery",
    scope: "Complete pre-bid detailed engineering and consulting for firefighting works for the pharma-grade alcohol project.",
    location: "Gujarat",
    sector: "Distillery",
  },
  {
    client: "Technoelectric",
    title: "Data centre, Chennai",
    scope: "Shop drawing preparation and cost optimisation.",
    location: "Chennai, Tamil Nadu",
    sector: "Data Centre",
  },
  {
    client: "ONGC",
    title: "GDU facility, Tripura asset",
    scope: "Medium-velocity water spray system for the glycol absorber and validation of the hydrant system at Sonamura GCS.",
    location: "Sonamura, Tripura",
    sector: "Petrochemical & Chemical",
  },
  {
    client: "Maruti Suzuki",
    title: "Rohtak Building 6 works",
    scope: "Consulting for the fire protection system.",
    location: "Rohtak, Haryana",
    sector: "Automobile",
  },
  {
    client: "Mahamaya Pharma",
    title: "Fire detection & alarm system",
    scope: "Pre-bid design support for the fire detection and alarm system.",
    location: "Gujarat",
    sector: "Pharma",
  },
  {
    client: "Superior Foods",
    title: "Grain-based distillery project",
    scope: "Consulting support for fire protection design and the Fire NOC application.",
    location: "Shamli, Uttar Pradesh",
    sector: "Distillery",
  },
  {
    client: "Maruti Suzuki",
    title: "Rohtak Building 9A works",
    scope: "Consulting for the fire protection system.",
    location: "Rohtak, Haryana",
    sector: "Automobile",
  },
  {
    client: "Maruti Suzuki",
    title: "Gurugram Building 9A works",
    scope: "Consulting for the fire protection system.",
    location: "Gurugram, Haryana",
    sector: "Automobile",
  },
  {
    client: "MSETCL",
    title: "765 kV substation",
    scope: "Consulting for high-velocity water spray for transformers and reactors, with optimisation of the hydrant system and pump room.",
    location: "Aurangabad, Maharashtra",
    sector: "Power",
  },
  {
    client: "Maruti Suzuki",
    title: "Rohtak Building 3 works",
    scope: "Consulting for the fire protection and utility systems.",
    location: "Rohtak, Haryana",
    sector: "Automobile",
  },
  {
    client: "ONGC",
    title: "GDU facility, Mehsana asset",
    scope: "Design for the compressor shed and transformers, hydrant network validation with hydraulic analysis, and vendor management at Jotana.",
    location: "Jotana, Gujarat",
    sector: "Petrochemical & Chemical",
  },
  {
    client: "NTPC",
    title: "Waste-to-energy plant, Hubali",
    scope: "Consulting and design of the fire protection system for the waste-to-energy plant.",
    image: "/projects/waste-to-energy.png",
    location: "Hubali",
    sector: "Power",
  },
  {
    client: "NTPC",
    title: "Waste-to-energy plant, Bhopal",
    scope: "Consulting and design of the fire protection system for the waste-to-energy plant.",
    image: "/projects/waste-to-energy.png",
    location: "Bhopal, Madhya Pradesh",
    sector: "Power",
  },
  {
    client: "NTPC",
    title: "Waste-to-energy plant, Greater Noida",
    scope: "Consulting and design of the fire protection system for the waste-to-energy plant.",
    image: "/projects/waste-to-energy.png",
    location: "Greater Noida, Uttar Pradesh",
    sector: "Power",
  },
  {
    client: "Shree Ji Labs (Mankind Pharma)",
    title: "Complete fire protection upgradation",
    scope: "Upgradation to the latest IS codes with foam sprinkler, medium-velocity water spray, and medium & high expansion foam systems.",
    location: "Sotanala, Rajasthan",
    sector: "Pharma",
  },
  {
    client: "Bio-CNG plant project",
    title: "Contractors shed & Bio-CNG plant",
    scope: "Consulting for the design of the fire protection works.",
    sector: "Power",
  },
  {
    client: "Maruti Suzuki",
    title: "Rohtak Building 15A works",
    scope: "Consulting for the fire protection and utility systems.",
    location: "Rohtak, Haryana",
    sector: "Automobile",
  },
  {
    client: "Maruti Suzuki",
    title: "Rohtak Building 9 & VVF works",
    scope: "Consulting for the fire protection and utility systems.",
    location: "Rohtak, Haryana",
    sector: "Automobile",
  },
  {
    client: "Mankind Pharma",
    title: "API block fire protection",
    scope: "Consulting for the fire protection works of the API block.",
    location: "Udaipur, Rajasthan",
    sector: "Pharma",
  },
  {
    client: "IPCA Laboratories",
    title: "RM warehouse foam sprinkler",
    scope: "Consultancy for the foam sprinkler system at the raw-material warehouse.",
    location: "Ratlam, Madhya Pradesh",
    sector: "Pharma",
  },
  {
    client: "Toyo Ink",
    title: "Warehouse sprinkler & in-rack foam",
    scope: "Sprinkler consulting for the PC and offset warehouses, with in-rack foam sprinkler design.",
    location: "Gujarat",
    sector: "Petrochemical & Chemical",
  },
  {
    client: "NMIMS",
    title: "Deluge valve rectification & commissioning",
    scope: "Rectification, testing and commissioning of deluge valves for water-curtain systems and flow switches for the sprinkler system.",
    location: "Chandigarh",
    sector: "Education",
  },
  {
    client: "Radico Khaitan",
    title: "Maturation hall protection",
    scope: "Medium-velocity water spray system design for the maturation hall.",
    location: "Uttar Pradesh",
    sector: "Distillery",
  },
  {
    client: "Aravali Power",
    title: "HFO tank protection",
    scope: "Consultancy for the design of the medium-velocity water spray fire protection system for HFO tanks.",
    sector: "Power",
  },
  {
    client: "Mahindra & Mahindra",
    title: "Fire system validation, Haridwar",
    scope: "Hydraulic analysis and vetting of the existing fire system at the Haridwar plant.",
    location: "Haridwar, Uttarakhand",
    sector: "Automobile",
  },
  {
    client: "ONGC",
    title: "Office block, Cambay asset",
    scope: "Consulting and design of the firefighting system for the office building at the Cambay asset phase-3 project.",
    location: "Gujarat",
    sector: "Commercial",
  },
  {
    client: "AGSM Liquors",
    title: "120 KLPD grain-based ethanol plant",
    scope: "Consulting services for the firefighting works of the proposed ethanol plant.",
    location: "Suratgarh, Rajasthan",
    sector: "Distillery",
  },
  {
    client: "CARYA Chemical & Fertilizers",
    title: "125 KLPD grain-based distillery",
    scope: "Consulting services for the firefighting works of the proposed distillery.",
    sector: "Distillery",
  },
  {
    client: "KEC International",
    title: "Bhopal Metro compressed-air piping",
    scope: "Consultancy for the air compressor pipeline works.",
    location: "Bhopal, Madhya Pradesh",
    sector: "Metro & Rail",
  },
  {
    client: "BPCL",
    title: "Horton sphere hydraulic calculations",
    scope: "Hydraulic calculations for two Horton spheres at the Piyala project.",
    location: "Piyala, Haryana",
    sector: "Petrochemical & Chemical",
  },
  {
    client: "BPCL",
    title: "Transformer HVW spray, Bina refinery",
    scope: "System design and hydraulic analysis for the high-velocity water spray system protecting the transformer.",
    location: "Bina, Madhya Pradesh",
    sector: "Petrochemical & Chemical",
  },
  {
    client: "Dhruv Industries",
    title: "Office firefighting & plumbing",
    scope: "Design of the firefighting and plumbing systems for the office area.",
    location: "Gurugram, Haryana",
    sector: "Petrochemical & Chemical",
  },
  {
    client: "Oetiker",
    title: "Firefighting shop drawings",
    scope: "Shop drawing preparation for the firefighting works.",
    location: "Patalganga, Maharashtra",
    sector: "Food & Process",
  },
  {
    client: "Calderys",
    title: "Refractory plant foam system",
    scope: "Design of the foam system for the refractory project.",
    location: "Nagpur, Maharashtra",
    sector: "Metal & Steel",
  },
];

/** Unique sectors ordered by number of projects (for the filter row). */
export const sectors: Sector[] = [...new Set(projects.map((p) => p.sector))].sort(
  (a, b) =>
    projects.filter((p) => p.sector === b).length -
    projects.filter((p) => p.sector === a).length,
);

/** A short selection for the home page. */
export const featuredProjects = [
  projects[0], // Mankind Pharma plant
  projects[6], // Boeing hangar
  projects[25], // MSETCL 765 kV
  projects[19], // ONGC GDU Tripura
] as Project[];
