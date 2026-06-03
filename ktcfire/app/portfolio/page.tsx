"use client";

import { useState } from "react";

/* ===============================================================
   KRISHNATECH — PROJECT PORTFOLIO PAGE
   Sections: Header · Search · Filters · Project Grid · Pagination
   =============================================================== */

const categories = [
  "All Projects",
  "Pharma",
  "Automobile",
  "Petrochemical",
  "Distillery",
  "Power",
  "Infrastructure",
  "Data Centre",
  "Metro & Rail",
];

const projects = [
  {
    category: "Pharma",
    client: "Mankind Pharma",
    title: "Complete Pharma Plant Fire Protection",
    scope: "Validation and Modification of tender designing",
    icon: "science"
  },
  {
    category: "Automobile",
    client: "Mahindra Tractors",
    title: "Furnace & Robotic Arm Unit",
    scope: "Extension and strengthening of Fire Fighting system",
    icon: "directions_car"
  },
  {
    category: "Metro & Rail",
    client: "Bhopal Metro Depot",
    title: "Metro Rail Depot Fire Safety System",
    scope: "Validation and Modification of tender design",
    icon: "train"
  },
  {
    category: "Distillery",
    client: "Lords Distillery",
    title: "Distillery Fire Protection System",
    scope: "Consultancy and Designing of Fire protection system",
    icon: "liquor"
  },
  {
    category: "Petrochemical",
    client: "Indorama",
    title: "Pet Recycling Plant, Indonesia",
    scope: "Consultancy and Designing of Fire protection system",
    icon: "oil_barrel"
  },
  {
    category: "Infrastructure",
    client: "AAI Terminal Building",
    title: "Airport Terminal Fire & Public Health",
    scope: "Designing of Fire protection, Public health engineering",
    icon: "flight_takeoff"
  },
  {
    category: "Infrastructure",
    client: "Boeing Aircraft Hangar",
    title: "High Expansion Foam System",
    scope: "Pre bid Designing of Fire protection system",
    icon: "flight"
  },
  {
    category: "Petrochemical",
    client: "Oil Wells, Nigeria",
    title: "Fixed foam & MVW spray system",
    scope: "System for 100 mtr diameter Oil Wells",
    icon: "water_drop"
  },
  {
    category: "Petrochemical",
    client: "Toyo Ink",
    title: "Chemical Plant Protection",
    scope: "Complete Fire protection system",
    icon: "science"
  },
  {
    category: "Distillery",
    client: "Shree Renuka Sugars",
    title: "Sugar based Distillery Project",
    scope: "Pre bid Designing support and consultancy",
    icon: "eco"
  },
  {
    category: "Petrochemical",
    client: "Barauni Refinery",
    title: "Loading Unloading Gantries",
    scope: "Pre bid Design Support",
    icon: "local_shipping"
  },
  {
    category: "Petrochemical",
    client: "IOCL Ltd.",
    title: "Transformer Protection",
    scope: "High velocity Water spray system",
    icon: "electric_bolt"
  },
  {
    category: "Pharma",
    client: "IPCA Laboratories",
    title: "Foam Sprinkler System",
    scope: "Designing and consultancy",
    icon: "medical_services"
  },
  {
    category: "Automobile",
    client: "Maruti Suzuki India",
    title: "Multiple Expansion Projects",
    scope: "Complete designing and consultancy works",
    icon: "directions_car"
  },
  {
    category: "Data Centre",
    client: "Nxtra Data Centre",
    title: "Project Nexus Fire Infrastructure",
    scope: "Shop Drawing preparation and cost optimization",
    icon: "dns"
  },
  {
    category: "Data Centre",
    client: "Technoelectric Data Centre",
    title: "Chennai Data Centre Facility",
    scope: "Shop Drawing preparation and cost optimization",
    icon: "dns"
  },
  {
    category: "Petrochemical",
    client: "ONGC - GDU Facility",
    title: "Glycol Absorber MVW Spray",
    scope: "MVW spray system and Validation of Hydrant system",
    icon: "propane_tank"
  },
  {
    category: "Power",
    client: "NTPC",
    title: "Waste to Energy Project",
    scope: "Consulting and Designing works of Fire protection",
    icon: "bolt"
  },
  {
    category: "Power",
    client: "MSETCL 765 KV Substation",
    title: "Transformer HVW Spray System",
    scope: "Consulting for HVW spray system for Transformers/Reactors",
    icon: "electric_bolt"
  },
  {
    category: "Pharma",
    client: "Mahamaya Pharma",
    title: "Fire Detection & Alarm",
    scope: "Pre Bid Designing support",
    icon: "sensors"
  },
  {
    category: "Distillery",
    client: "Radico Khaitan",
    title: "Maturation Hall Protection",
    scope: "Medium Velocity water spray system designing",
    icon: "liquor"
  },
  {
    category: "Petrochemical",
    client: "BPCL Bina Refinery",
    title: "High Velocity Water Spray",
    scope: "System Design & hydraulic Analysis for Transformers",
    icon: "water_drop"
  }
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      activeFilter === "All Projects" || p.category === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.scope.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* ═══════════════ EDITORIAL HEADER ═══════════════ */}
      <header className="mb-16">
        <div className="inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-bold tracking-widest mb-6 uppercase">
          Engineering Excellence
        </div>
        <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-primary tracking-tighter mb-6">
          Our Project <br />
          <span className="text-secondary">Portfolio</span>
        </h1>
        <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
          Meticulously engineered fire safety solutions across diverse
          industrial sectors. Explore our track record of precision and
          technical integrity.
        </p>
      </header>

      {/* ═══════════════ SEARCH & FILTERS ═══════════════ */}
      <section className="mb-12 space-y-8">
        <div className="relative max-w-xl">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-surface-container-high border-none rounded-xl text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:bg-surface-container-highest transition-all duration-200"
            placeholder="Search projects, clients or systems..."
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === cat
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-highest text-on-surface-variant hover:bg-secondary-fixed hover:text-on-secondary-fixed-variant"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ═══════════════ PROJECT GRID ═══════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:shadow-ambient transition-all duration-300"
          >
            {/* Logo Placeholder */}
            <div className="h-48 w-full relative overflow-hidden bg-surface-container-high flex flex-col items-center justify-center text-outline-variant group-hover:bg-primary-container group-hover:text-primary transition-colors duration-500">
              <span className="material-symbols-outlined text-6xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {project.icon}
              </span>
              <div className="absolute top-4 left-4">
                <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-xs font-semibold text-secondary mb-2 tracking-wide">
                Client: {project.client}
              </div>
              <h3 className="font-headline font-bold text-xl text-on-surface mb-4 leading-tight">
                {project.title}
              </h3>
              <div className="mt-auto pt-6 flex items-start gap-3 text-sm text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-primary shrink-0"
                  style={{ fontSize: "18px" }}
                >
                  {project.icon}
                </span>
                <span>{project.scope}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ═══════════════ RESULTS COUNT ═══════════════ */}
      <div className="mt-20 flex justify-center items-center">
        <span className="text-sm font-bold text-on-surface-variant font-headline">
          Showing {filteredProjects.length} of {projects.length} projects
        </span>
      </div>
    </div>
  );
}
