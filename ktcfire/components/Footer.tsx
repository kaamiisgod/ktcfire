import Link from "next/link";

const resources = [
  { label: "Engineering Blog", href: "#", comingSoon: true },
  { label: "Safety Standards", href: "#", comingSoon: true },
  { label: "Project Portfolio", href: "/portfolio", comingSoon: false },
];

const services = [
  { label: "Design & Drafting", href: "/#services", comingSoon: false },
  { label: "Hydraulic Analysis", href: "/#services", comingSoon: false },
  { label: "Code Compliance", href: "/#services", comingSoon: false },
  { label: "Privacy Policy", href: "#", comingSoon: true },
];

const legal = [
  { label: "Terms of Service", href: "#", comingSoon: true },
  { label: "Safety Certifications", href: "#", comingSoon: true },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 w-full pt-16 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-6 md:px-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="space-y-6 sm:col-span-2 md:col-span-1">
          <div className="flex flex-col items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Krishnatech Logo" className="h-14 w-auto object-contain" />
            <span className="text-[10px] uppercase font-bold text-secondary mt-1 tracking-wider">
              An ESO Company
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed font-body max-w-xs">
            Advancing fire safety through innovative engineering and technical
            precision. 25+ years of protecting lives and assets across
            industries.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/krishnatech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              href="mailto:solutionswithktc@gmail.com"
              className="text-slate-500 hover:text-teal-400 transition-colors"
              aria-label="Email"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a
              href="tel:+919769367666"
              className="text-slate-500 hover:text-teal-400 transition-colors"
              aria-label="Phone"
            >
              <span className="material-symbols-outlined">
                contact_phone
              </span>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-teal-500 text-[10px] font-bold tracking-widest mb-6 uppercase">
            Services
          </h4>
          <ul className="space-y-4">
            {services.map((item) => (
              <li key={item.label}>
                {item.comingSoon ? (
                  <span className="font-body text-xs text-slate-500 cursor-not-allowed" title="Coming Soon">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="font-body text-xs text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-teal-500 text-[10px] font-bold tracking-widest mb-6 uppercase">
            Resources
          </h4>
          <ul className="space-y-4">
            {resources.map((item) => (
              <li key={item.label}>
                {item.comingSoon ? (
                  <span className="font-body text-xs text-slate-500 cursor-not-allowed" title="Coming Soon">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="font-body text-xs text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h4 className="text-teal-500 text-[10px] font-bold tracking-widest mb-6 uppercase">
            Corporate
          </h4>
          <ul className="space-y-4">
            {legal.map((item) => (
              <li key={item.label}>
                {item.comingSoon ? (
                  <span className="font-body text-xs text-slate-500 cursor-not-allowed" title="Coming Soon">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="font-body text-xs text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          <div className="mt-8">
            <h4 className="text-teal-500 text-[10px] font-bold tracking-widest mb-4 uppercase">
              Certifications & Compliance
            </h4>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 px-3 py-1.5 rounded flex flex-col items-center justify-center">
                <span className="text-[9px] font-bold text-white tracking-widest uppercase">MSME</span>
              </div>
              <div className="bg-white/10 px-3 py-1.5 rounded flex flex-col items-center justify-center">
                <span className="text-[9px] font-bold text-white tracking-widest uppercase">GST Reg.</span>
              </div>
              <div className="bg-white/10 px-3 py-1.5 rounded flex flex-col items-center justify-center text-center">
                <span className="text-[9px] font-bold text-white tracking-widest uppercase">Pipenet</span>
                <span className="text-[8px] text-slate-400">Mukesh Ji</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-slate-800 px-6 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-slate-400">
          © {new Date().getFullYear()} Krishnatech Engineering. Precision Safety
          Systems.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/company/krishnatech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-xs"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
