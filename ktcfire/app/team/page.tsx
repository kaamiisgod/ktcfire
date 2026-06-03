"use client";

/* ===============================================================
   KRISHNATECH — TEAM PAGE
   =============================================================== */

const marketingTeam = [
  {
    name: "Piyush Jain",
    role: "Head of Marketing & Sales",
    education: "MBA in Marketing, IIT Delhi",
    experience: "Former Marketing Lead at L&T Technology Services and Siemens.",
    icon: "campaign",
    image: "", // Add photo path e.g. "/team/piyush.jpg"
  },
  {
    name: "Aarti Sharma",
    role: "Client Relations Manager",
    education: "B.Tech & PGDM, NMIMS Mumbai",
    experience: "Previously managed key accounts at Honeywell Fire Solutions.",
    icon: "support_agent",
    image: "", // Add photo path e.g. "/team/aarti.jpg"
  }
];

const designTeam = [
  {
    name: "Manu Chauhan",
    role: "Lead Fire Protection Engineer",
    education: "M.Tech in Safety Engineering, UPES Dehradun",
    experience: "15+ years experience. Previously Senior Consultant at Jacobs Engineering.",
    icon: "engineering",
    image: "", // Add photo path e.g. "/team/manu.jpg"
  },
  {
    name: "Vikram Singh",
    role: "Hydraulic Analysis Specialist",
    education: "B.E. Mechanical Engineering, NIT Trichy",
    experience: "Ex-Design Engineer at Tyco Fire Products.",
    icon: "water_drop",
    image: "", // Add photo path e.g. "/team/vikram.jpg"
  },
  {
    name: "Rohan Patel",
    role: "CAD & BIM Manager",
    education: "B.Arch, CEPT University",
    experience: "Led BIM coordination at AECOM for major infrastructure projects.",
    icon: "architecture",
    image: "", // Add photo path e.g. "/team/rohan.jpg"
  }
];

export default function TeamPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-16 text-center">
        <div className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-bold tracking-widest mb-6 uppercase">
          Our Experts
        </div>
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-primary tracking-tighter mb-6">
          Meet the Minds Behind <br />
          <span className="text-secondary">Krishnatech</span>
        </h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
          Our team of dedicated professionals brings vast experience in Design, Engineering, Procurement, Execution, Commissioning, Sales, and Marketing.
        </p>
      </header>

      {/* Marketing Team */}
      <section className="mb-20">
        <h2 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight mb-8 border-b-2 border-outline-variant pb-4">
          Marketing & Business Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketingTeam.map((member) => (
            <div key={member.name} className="bg-surface-container-low p-8 rounded-xl shadow-ambient flex gap-6 items-start group hover:bg-surface-container transition-colors">
              <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform overflow-hidden">
                {member.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-3xl">{member.icon}</span>
                )}
              </div>
              <div>
                <h3 className="font-headline font-bold text-xl text-on-surface mb-1">{member.name}</h3>
                <p className="text-sm font-bold text-secondary mb-4 uppercase tracking-wider">{member.role}</p>
                <div className="space-y-2 text-sm text-on-surface-variant">
                  <p><strong className="text-on-surface">Education:</strong> {member.education}</p>
                  <p><strong className="text-on-surface">Background:</strong> {member.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Team */}
      <section>
        <h2 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight mb-8 border-b-2 border-outline-variant pb-4">
          Design & Engineering Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designTeam.map((member) => (
            <div key={member.name} className="bg-surface-container-low p-8 rounded-xl shadow-ambient flex flex-col items-center text-center group hover:bg-surface-container transition-colors">
              <div className="w-20 h-20 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform overflow-hidden">
                {member.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-4xl">{member.icon}</span>
                )}
              </div>
              <h3 className="font-headline font-bold text-xl text-on-surface mb-1">{member.name}</h3>
              <p className="text-xs font-bold text-primary mb-4 uppercase tracking-wider">{member.role}</p>
              <div className="space-y-3 text-sm text-on-surface-variant w-full bg-surface-container-highest p-4 rounded-lg text-left mt-auto">
                <p><strong className="text-on-surface block mb-1">Education:</strong> {member.education}</p>
                <p><strong className="text-on-surface block mb-1">Background:</strong> {member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
