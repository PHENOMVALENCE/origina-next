import Link from "next/link";
import { ContentStatus } from "@/components/ContentStatus";
import { StatusBadge } from "@/components/StatusBadge";
import { ScientificLabel } from "@/components/ui/ScientificLabel";
import { divisions } from "@/lib/content/divisions";
import { platforms } from "@/lib/content/platforms";

/** Institutional architecture — ORIGINA → Labs → Platforms → Divisions */
export function InstitutionMap() {
  const divisionCards = divisions.filter((d) => d.slug !== "labs");

  return (
    <div className="flex flex-col items-stretch gap-0" aria-label="ORIGINA institutional architecture">
      <div className="institutional-panel mx-auto w-full max-w-lg border-gold/35 bg-noir text-center text-ivory">
        <ScientificLabel tone="gold" className="justify-center text-gold-light">
          ORIGINA / Institution
        </ScientificLabel>
        <span className="mt-3 block font-serif text-2xl tracking-wide sm:text-3xl">ORIGINA™</span>
        <p className="mt-2 text-[0.75rem] uppercase tracking-[0.16em] text-stone">
          Multi-divisional innovation institution
        </p>
      </div>

      <div className="mx-auto h-10 w-px bg-gold/45" aria-hidden="true" />

      <div className="institutional-panel mx-auto w-full max-w-lg border-gold/30 bg-graphite text-center text-ivory">
        <ScientificLabel tone="gold" className="justify-center text-gold-light">
          ORIGINA / Science
        </ScientificLabel>
        <Link href="/labs" className="mt-3 block font-serif text-xl transition-colors hover:text-gold sm:text-2xl">
          ORIGINA Labs™
        </Link>
        <p className="mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-stone">
          Research · Formulation · Innovation · IP
        </p>
        <p className="mt-1 text-sm text-stone">The scientific engine.</p>
      </div>

      <div className="mx-auto h-10 w-px bg-gold/45" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-2xl gap-3 sm:grid-cols-2">
        {platforms.map((platform) => (
          <Link key={platform.id} href={platform.href} className="institutional-panel group hover:border-gold/35">
            <ScientificLabel>Platform / {platform.name}</ScientificLabel>
            <span className="mt-2 block font-serif text-xl text-graphite group-hover:text-oxblood">{platform.name}</span>
            <p className="mt-1 text-[0.68rem] uppercase tracking-[0.14em] text-stone">{platform.subtitle}</p>
            <ContentStatus status={platform.status} />
          </Link>
        ))}
      </div>

      <div className="mx-auto h-10 w-px bg-gold/45" aria-hidden="true" />

      <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {divisionCards.map((division) => (
          <Link key={division.slug} href={division.href} className="institutional-panel group flex flex-col gap-3">
            <ScientificLabel>Division / {division.name.replace("™", "")}</ScientificLabel>
            <StatusBadge status={division.status} />
            <strong className="font-serif text-xl text-graphite group-hover:text-oxblood">{division.name}</strong>
            <span className="text-[0.68rem] uppercase tracking-[0.12em] text-stone">{division.role}</span>
            <span className="text-sm text-graphite/75">{division.tagline}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
