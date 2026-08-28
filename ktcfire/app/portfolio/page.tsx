"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { projects, sectors } from "@/lib/content/projects";

export default function PortfolioPage() {
  const [activeSector, setActiveSector] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((p) => {
    const matchesSector = activeSector === "All" || p.sector === activeSector;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      p.title.toLowerCase().includes(q) ||
      p.client.toLowerCase().includes(q) ||
      p.scope.toLowerCase().includes(q) ||
      (p.location ?? "").toLowerCase().includes(q);
    return matchesSector && matchesSearch;
  });

  return (
    <div className="pt-36 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-14 max-w-3xl">
        <p className="overline-code text-on-surface-variant mb-4">
          <span className="text-accent-ink">KTC / P-01</span>
          <span aria-hidden="true"> / </span>Project Index
        </p>
        <h1 className="font-headline font-extrabold text-4xl md:text-6xl text-on-surface tracking-tighter mb-6">
          {projects.length} projects,{" "}
          <span className="text-primary">{sectors.length} sectors.</span>
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          Major completed and ongoing work — plus a hydraulic-analysis practice
          of 200+ projects delivered for clients and consultants over the last
          five years.
        </p>
      </header>

      {/* Search & filters */}
      <section aria-label="Filter projects" className="mb-12 space-y-8">
        <div className="relative max-w-xl">
          <Icon
            name="search"
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
          />
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <input
            id="project-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-surface-container-high border-none rounded-lg text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface-container-highest transition-all duration-200"
            placeholder="Search clients, systems or locations…"
          />
        </div>
        <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter by sector">
          {["All", ...sectors].map((sector) => (
            <button
              key={sector}
              onClick={() => setActiveSector(sector)}
              aria-pressed={activeSector === sector}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                activeSector === sector
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>
      </section>

      {/* Results */}
      {filteredProjects.length === 0 ? (
        <div className="py-24 text-center max-w-md mx-auto">
          <Icon name="search" size={40} className="text-outline-variant mx-auto mb-6" />
          <h2 className="font-headline font-bold text-xl text-on-surface mb-2">
            Nothing in the index matches.
          </h2>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
            No project matches &ldquo;{searchQuery}&rdquo;
            {activeSector !== "All" ? ` in ${activeSector}` : ""}. Try a
            different term, or clear the filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveSector("All");
            }}
            className="text-primary font-headline font-bold text-sm hover:underline"
          >
            Clear search and filters
          </button>
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <li
              key={`${project.client}-${project.title}`}
              className="flex flex-col bg-surface-container-low rounded-lg p-8"
            >
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <span className="overline-code text-accent-ink">{project.sector}</span>
                {project.location && (
                  <span className="text-[11px] text-on-surface-variant text-right">
                    {project.location}
                  </span>
                )}
              </div>
              <h2 className="font-headline font-bold text-xl text-on-surface leading-snug mb-2">
                {project.title}
              </h2>
              <p className="text-xs font-semibold text-primary mb-4">{project.client}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed mt-auto">
                {project.scope}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Results count */}
      <p className="mt-16 text-center text-sm font-bold text-on-surface-variant font-headline tnum" aria-live="polite">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>
    </div>
  );
}
