import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { team, disciplines } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The people behind Krishnatech — professionals with experience across design, engineering, procurement, execution, commissioning, sales and marketing.",
};

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0] ?? "")
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TeamPage() {
  return (
    <div className="pt-36 pb-24">
      {/* Header */}
      <header className="px-6 md:px-8 max-w-7xl mx-auto mb-16">
        <p className="overline-code text-on-surface-variant mb-4">
          <span className="text-accent-ink">KTC / T-01</span>
          <span aria-hidden="true"> / </span>People
        </p>
        <h1 className="font-headline font-extrabold text-4xl md:text-6xl text-on-surface tracking-tighter mb-6 max-w-3xl">
          A small firm with a{" "}
          <span className="text-primary">deep bench.</span>
        </h1>
        <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
          Krishnatech is a team of dedicated professionals with vast
          experience across design, engineering, procurement, execution,
          commissioning, sales and marketing.
        </p>
      </header>

      {/* People */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {team.map((member) => (
            <article
              key={member.name}
              className="bg-surface-container-low rounded-lg p-8 flex gap-6 items-start"
            >
              <div className="w-20 h-20 rounded-md bg-primary text-on-primary flex items-center justify-center shrink-0 overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="font-headline font-extrabold text-2xl tracking-tight"
                  >
                    {initials(member.name)}
                  </span>
                )}
              </div>
              <div>
                <h2 className="font-headline font-bold text-xl text-on-surface mb-1">
                  {member.name}
                </h2>
                <p className="overline-code text-accent-ink mb-4">{member.role}</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Disciplines bench */}
      <section className="bg-surface-container-low py-20">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <p className="overline-code text-on-surface-variant mb-4">
            <span className="text-accent-ink">KTC / T-02</span>
            <span aria-hidden="true"> / </span>Disciplines
          </p>
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight mb-12 max-w-xl">
            Every stage of the project, covered in-house.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {disciplines.map((d) => (
              <div key={d.title} className="bg-surface-container-lowest rounded-lg p-8">
                <Icon name={d.icon} size={28} className="text-primary mb-5" />
                <h3 className="font-headline font-bold text-on-surface mb-2">{d.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link
              href="/#contact"
              className="text-primary font-headline font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
            >
              Talk to the team
              <Icon name="arrow-right" size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
