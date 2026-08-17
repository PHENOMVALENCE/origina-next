import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import { divisions } from "@/lib/content/divisions";

/** Ported from render_institution_map() in origina/includes/components.php */
export function InstitutionMap() {
  const divisionCards = divisions.filter((d) => d.slug !== "labs");

  return (
    <div className="flex flex-col items-center gap-0" aria-label="ORIGINA institutional architecture">
      <div className="w-full max-w-md rounded-sm border border-gold/30 bg-noir px-8 py-6 text-center text-ivory">
        <span className="font-serif text-2xl tracking-wide">ORIGINA™</span>
      </div>
      <div className="h-8 w-px bg-gold/40" aria-hidden="true" />
      <div className="w-full max-w-md rounded-sm border border-gold/25 bg-graphite px-8 py-5 text-center text-ivory">
        <Link href="/labs" className="font-serif text-xl hover:text-gold">
          ORIGINA Labs™
        </Link>
        <small className="mt-1 block text-[0.62rem] uppercase tracking-[0.14em] text-stone">
          Research · Platforms · Evidence
        </small>
      </div>
      <div className="h-8 w-px bg-gold/40" aria-hidden="true" />
      <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
        <div className="border border-gold/25 bg-cream px-6 py-4 text-center">
          <span className="font-serif text-lg">BMX-24™</span>
          <small className="mt-1 block text-[0.62rem] uppercase tracking-[0.14em] text-stone">
            Pigment regulation
          </small>
        </div>
        <div className="border border-gold/25 bg-cream px-6 py-4 text-center">
          <span className="font-serif text-lg">BRP-1™</span>
          <small className="mt-1 block text-[0.62rem] uppercase tracking-[0.14em] text-stone">
            Research platform
          </small>
        </div>
      </div>
      <div className="h-8 w-px bg-gold/40" aria-hidden="true" />
      <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {divisionCards.map((division) => (
          <Link
            key={division.slug}
            href={division.href}
            className="flex flex-col gap-2 border border-border-subtle bg-ivory p-5 transition-colors hover:border-gold/40 hover:bg-cream"
          >
            <strong className="font-serif text-lg">{division.name}</strong>
            <small className="text-[0.62rem] uppercase tracking-[0.12em] text-stone">{division.role}</small>
            <StatusBadge status={division.status} />
          </Link>
        ))}
      </div>
    </div>
  );
}
