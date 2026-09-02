"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "@/components/Icon";
import { site } from "@/lib/content/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass shadow-ambient">
      <div className="flex justify-between items-center px-6 md:px-8 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex flex-col shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo.png"
            alt="Krishnatech — Consulting Engineer Services"
            width={100}
            height={113}
            priority
            className="h-12 w-auto object-contain"
          />
          <span className="text-[10px] uppercase font-bold text-accent-ink mt-1 tracking-wider text-center">
            An ESO Company
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isHashLink = link.href.includes("#");
            const isActive = isHashLink
              ? false
              : link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`font-headline font-bold tracking-tight text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-primary border-b-2 border-secondary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          {site.inquiriesOpen && (
            <Link
              href="/inquiry"
              className="hidden sm:inline-block bg-primary text-on-primary px-5 py-2.5 rounded-md font-headline font-bold text-sm hover:bg-primary-container active:scale-[0.98] transition-all"
            >
              Start an Inquiry
            </Link>
          )}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-surface-container-high transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <Icon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Main" className="md:hidden glass px-6 pb-6">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-headline font-bold text-sm text-on-surface-variant hover:text-primary transition-colors py-2.5"
              >
                {link.label}
              </Link>
            ))}
            {site.inquiriesOpen && (
              <Link
                href="/inquiry"
                onClick={() => setMobileOpen(false)}
                className="sm:hidden mt-2 bg-primary text-on-primary px-5 py-3 rounded-md font-headline font-bold text-sm text-center"
              >
                Start an Inquiry
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
