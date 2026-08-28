import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <div className="pt-36 pb-24 px-6 md:px-8 max-w-7xl mx-auto grid-paper">
      <div className="max-w-xl">
        <p className="overline-code text-accent-ink mb-4">KTC / 404</p>
        <h1 className="font-headline font-extrabold text-6xl md:text-8xl text-primary tracking-tighter tnum mb-6">
          404
        </h1>
        <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">
          This sheet isn&apos;t in the drawing set.
        </h2>
        <p className="text-on-surface-variant leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          The index below will get you back on track.
        </p>
        <nav aria-label="Suggested pages" className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="gradient-primary text-on-primary px-6 py-3 rounded-lg font-headline font-bold text-sm hover:opacity-90 transition-all inline-flex items-center gap-2"
          >
            <Icon name="arrow-left" size={16} strokeWidth={2} />
            Back to home
          </Link>
          <Link
            href="/services"
            className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-lg font-headline font-bold text-sm hover:bg-surface-container-high transition-all"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-lg font-headline font-bold text-sm hover:bg-surface-container-high transition-all"
          >
            Project index
          </Link>
        </nav>
      </div>
    </div>
  );
}
