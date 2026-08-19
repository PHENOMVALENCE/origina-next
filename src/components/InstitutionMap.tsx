import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import { divisions } from "@/lib/content/divisions";

/** Institutional architecture diagram — ported from origina/includes/components.php */
export function InstitutionMap() {
  const divisionCards = divisions.filter((d) => d.slug !== "labs");

  return (
    <div className="flex flex-col items-center gap-0" aria-label="ORIGINA institutional architecture">
      <div className="w-full max-w-lg rounded-sm border border-gold/35 bg-noir px-8 py-7 text-center text-ivory shadow-[var(--shadow-soft)]">
        <span className="font-serif text-3xl tracking-wide">ORIGINA™</span>
        <p className="mt-2 text-[0.75rem] uppercase tracking-[0.16em] text-stone">Multi-divisional innovation institution</p>
      </div>
      <div className="h-10 w-px bg-gold/45" aria-hidden="true" />
      <div className="w-full max-w-lg rounded-sm border border-gold/30 bg-graphite px-8 py-6 text-center text-ivory">
        <Link href="/labs" className="font-serif text-2xl transition-colors hover:text-gold">
          ORIGINA Labs™
        </Link>
        <p className="mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-stone">Research · Platforms · Evidence · IP</p>
      </div>
      <div className="h-10 w-px bg-gold/45" aria-hidden="true" />
      <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
        <div className="institutional-card text-center">
          <span className="font-serif text-xl text-graphite">BMX-24™</span>
          <p className="mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-stone">Pigment regulation platform</p>
        </div>
        <div className="institutional-card text-center">
          <span className="font-serif text-xl text-graphite">BRP-1™</span>
          <p className="mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-stone">Research platform</p>
        </div>
      </div>
      <div className="h-10 w-px bg-gold/45" aria-hidden="true" />
      <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {divisionCards.map((division) => (
          <Link key={division.slug} href={division.href} className="institutional-card flex flex-col gap-3">
            <StatusBadge status={division.status} />
            <strong className="font-serif text-xl text-graphite">{division.name}</strong>
            <span className="text-[0.68rem] uppercase tracking-[0.12em] text-stone">{division.role}</span>
            <span className="text-sm text-graphite/75">{division.tagline}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
