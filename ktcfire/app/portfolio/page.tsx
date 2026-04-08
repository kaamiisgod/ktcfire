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
    category: "Data Centre",
    client: "Nxtra Data Centre",
    title: "Project Nexus Fire Infrastructure",
    scope: "Sprinkler System Design & Gas Suppression",
    icon: "engineering",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmIAETreoEQWTrn3xcTrPc1RkQycJXzRWTZzroGfxfcY2KqZH0R5K0WeSXjGV7WtACfR64m5nNzX8mIJDd7HI_k0UChm69xMz7j5N3t3s4bW-eT3n2wBQbAk-MoVK4r6ORyECBX8oB4_UEG-e4m1g00O1Kx0x_tbddjCP19bEHl0j6PCZbZGpRuklSDGykG9jTSYtz2NXc5xHnpGxXURO1m0MFT17C4G_hTo3c_hFfQK5IRZ2DTuc-Nv9_wGLxYRjyvTU96XFbR7PV",
  },
  {
    category: "Pharma",
    client: "Mankind Pharma",
    title: "Advanced Pharma Plant Fire Protection",
    scope: "Complete Fire Detection, Protection & Suppression",
    icon: "fire_extinguisher",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj1kXk_rWg47_gsDUUbR5eExVm7MFexEPgvWpzBd6ZGTbbzAhZmK_kc2nVxwKb-TocKmH84ruU8FvfCHbJ8gOxe7cyIVJ5XDyW3TjchEVxxYpjOlQpDA-xpLaJ2GZsK6qk3vFGbr4VrBLar9ZDmf1JUrtIwXaOxdyq5RFAapqppXktsgwCFHrT3BnC9zcycRmlluUzm5Agn4neNUgZU7sIRz8ajDQTwQmH1rEJxRGfu2PhX4Qv2o0Kt2DLGCX2M3BsajDOZ8H7tbes",
  },
  {
    category: "Metro & Rail",
    client: "Bhopal Metro Depot",
    title: "Metro Rail Depot Fire Safety System",
    scope: "Hydrant System Engineering & Tunnel Ventilation",
    icon: "design_services",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJz1EfXKkRz8bL2TF6GYNaifBmmwmK9Y1ZHJ8b62lRXuWqnQE58nxMXpvrZBWtUPMPpwpujrvdkmgEFrRvLtbd2qmG_plaGjNNMzaGANdYDzM0CH82igSbyG9RgshIV4mDLySq4U3bWyu3KrvYZI3TJFgFvS2LUTjDxMU9xNlXuTlHTnLUsjqKIMVambd60Hnz5dcv1G1YnvwvIwRqT-2Sm-qG1_qCS67g7iMgqDfIB3Hnd4czOqWgoK85fYxLsJeyLQ9VNjJfBWbh",
  },
  {
    category: "Automobile",
    client: "Maruti Suzuki India Ltd",
    title: "Paint Shop Fire Suppression Upgrade",
    scope: "Deluge Valve Systems & Foam Suppression",
    icon: "verified_user",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Gp2fYaIOoQj8U1gkwSfNbeicSBuCtIpPzTR-tiqt0iWyeZWkGUqnLOUsGhwer3XmydkHOtIec3pIXZajNFkX2BKuFqHmauZw3V7vyWhzVj6OcTss8ZnB6KJfxHElFcL0PjLs933xSO2bZKBeRBQVB9Qbuzen8E-2cgNMYPeG4PBCapl5HsngeMTkXgtTExWwM00iaGCKTZiADtnFGPWfe-4x_sfx1YIS6aTrNhr5PBNWRUVbQOAtZU1T59NUEde7VP61ULgLwUh7",
  },
  {
    category: "Petrochemical",
    client: "IOCL Ltd",
    title: "Transformer Protection – HVW Spray System",
    scope: "Intrinsically Safe Detection & Remote Monitoring",
    icon: "precision_manufacturing",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5nwnokJsK9zZ8GImjkqDW7M1zhulZ_RoRE1kNOibkQPvyuQXQEBBBm5UuVwVI0WnRBoQCN54MTDFMYi1mH1h8H8iGJXj_Y8kmAKySAyXdtBEmpePDwNujoDw_LyNUPPTOL1RlMzMrtNRdVTshpLu-27zyXFCTKFNFWKipPSBEsRn8ZpvwGCHykt9DbP3nZGifN222UfphpcI-YBzC4t9fYnjPZUslkoFFEhjxHOGsQrzBhOAJ7O52tmcKURMsAjq5ZcPDorJds1PG",
  },
  {
    category: "Power",
    client: "NTPC / Aravali Power",
    title: "Waste-to-Energy & Substation Fire Protection",
    scope: "Fire Sealing & Cable Coating Application",
    icon: "construction",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASDPIaxglB1ArC1jXOKowieLpaL6hI8HA4ZYAnZTpzIJMVY6JmHkWEEtrNwcOzYQhNzRLsaHu_b6KoT6j-7L6onw-KUJOTrVASQVuFUeR44CyQHtLSSET_5xIkYi5RQYfYJeoA_LGzU3GlM6MX_cvzIojv7L8_kMSDccEq1n3VY0ah81u2JIMMK0ULTb8Xqi-Pk8Vqw9uKtvMT5v_A5TXOP8ZtBI6uIdoiNMlECZQRpBwSCqnx1Sk6YPgtnGPei3M6M0AZmN3sAERH",
  },
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
            {/* Image */}
            <div className="h-56 w-full relative overflow-hidden bg-surface-container-high">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
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

      {/* ═══════════════ PAGINATION ═══════════════ */}
      <div className="mt-20 flex justify-center items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-on-surface-variant hover:bg-primary-fixed transition-colors">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <span className="text-sm font-bold text-primary font-headline">
          01 / 05
        </span>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-on-surface-variant hover:bg-primary-fixed transition-colors">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
