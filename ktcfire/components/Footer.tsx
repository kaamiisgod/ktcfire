import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { site } from "@/lib/content/site";

const explore = [
  { label: "Services", href: "/services" },
  { label: "Project Portfolio", href: "/portfolio" },
  { label: "About the Firm", href: "/about" },
  { label: "Team", href: "/team" },
];

const engage = [
  ...(site.inquiriesOpen ? [{ label: "Start an Inquiry", href: "/inquiry" }] : []),
  { label: "Contact", href: "/#contact" },
  { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-ink w-full pt-16 pb-8 grid-paper-dark">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-6 md:px-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="space-y-6 sm:col-span-2 md:col-span-1">
          <div className="flex flex-col items-start">
            <div className="bg-surface-container-lowest rounded-md p-2">
              <Image
                src="/logo.png"
                alt="Krishnatech — Consulting Engineer Services"
                width={100}
                height={113}
                className="h-12 w-auto object-contain"
              />
            </div>
            <span className="text-[10px] uppercase font-bold text-secondary mt-2 tracking-wider">
              An ESO Company
            </span>
          </div>
          <p className="text-on-ink-variant text-xs leading-relaxed max-w-xs">
            {site.legalName}. Outsourced fire protection design — detection,
            protection and suppression systems from pre-bid engineering to IFC
            drawings.
          </p>
          <div className="flex gap-4">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-ink-variant hover:text-on-ink transition-colors"
              aria-label="Krishnatech on LinkedIn"
            >
              <Icon name="linkedin" size={20} />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-on-ink-variant hover:text-on-ink transition-colors"
              aria-label={`Email ${site.email}`}
            >
              <Icon name="mail" size={20} />
            </a>
            <a
              href={site.phoneHref}
              className="text-on-ink-variant hover:text-on-ink transition-colors"
              aria-label={`Call ${site.phone}`}
            >
              <Icon name="phone" size={20} />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-secondary overline-code mb-6">Explore</h2>
          <ul className="space-y-4">
            {explore.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-xs text-on-ink-variant hover:text-on-ink transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Engage */}
        <div>
          <h2 className="text-secondary overline-code mb-6">Engage</h2>
          <ul className="space-y-4">
            {engage.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-xs text-on-ink-variant hover:text-on-ink transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & registration */}
        <div>
          <h2 className="text-secondary overline-code mb-6">Contact</h2>
          <ul className="space-y-4 text-xs text-on-ink-variant">
            <li>
              <a href={site.phoneHref} className="hover:text-on-ink transition-colors">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-on-ink transition-colors break-all">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.designEmail}`}
                className="hover:text-on-ink transition-colors break-all"
              >
                {site.designEmail}
              </a>
            </li>
            <li className="leading-relaxed">
              {site.addresses[0].lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </li>
          </ul>
          <div className="mt-8">
            <h2 className="text-secondary overline-code mb-4">Registration</h2>
            <ul className="space-y-2 text-[11px] text-on-ink-variant tnum">
              {site.accreditations.map((a) => (
                <li key={a.label}>
                  {a.label} · {a.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 pt-8 px-6 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 bg-transparent">
        <p className="text-xs text-on-ink-variant">
          © {new Date().getFullYear()} {site.legalName}
        </p>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-ink-variant hover:text-on-ink transition-colors text-xs"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
