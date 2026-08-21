import Link from "next/link";
import { ContentStatus } from "@/components/ContentStatus";
import { StatusBadge } from "@/components/StatusBadge";
import { ScientificLabel } from "@/components/ui/ScientificLabel";
import { divisions } from "@/lib/content/divisions";
import { platforms } from "@/lib/content/platforms";

/**
 * Institutional architecture — ORIGINA → Labs → Platforms → Divisions.
 *
 * Hierarchy is carried by weight, not decoration: the institution is a solid
 * crimson block, the scientific engine a solid ink block, and the platforms and
 * divisions below it are paper panels. Crimson hairlines carry the descent.
 */
export function InstitutionMap() {
  const divisionCards = divisions.filter((d) => d.slug !== "labs");

  return (
    <div className="flex flex-col items-stretch gap-0" aria-label="ORIGINA institutional architecture">
      <div className="mx-auto w-full max-w-lg border border-crimson bg-crimson p-6 text-center text-ivory sm:p-7">
        <ScientificLabel className="justify-center text-ivory/75">ORIGINA / Institution</ScientificLabel>
        <span className="mt-3 block font-serif text-[1.85rem] tracking-wide sm:text-[2.25rem]">ORIGINA™</span>
        <p className="mt-2 text-[0.75rem] uppercase tracking-[0.16em] text-ivory/70">
          Multi-divisional innovation institution
        </p>
      </div>

      <div className="mx-auto h-10 w-px bg-crimson/50" aria-hidden="true" />

      <div className="mx-auto w-full max-w-lg border border-ink bg-ink p-6 text-center text-ivory sm:p-7">
        <ScientificLabel className="justify-center text-ivory/70">ORIGINA / Science</ScientificLabel>
        <Link
          href="/labs"
          className="mt-3 block font-serif text-[1.5rem] transition-colors hover:text-crimson-light sm:text-[1.85rem]"
        >
          ORIGINA Labs™
        </Link>
        <p className="mt-2 text-[0.75rem] uppercase tracking-[0.14em] text-stone">
          Research · Formulation · Innovation · IP
        </p>
        <p className="mt-2 text-[0.9375rem] text-stone">The scientific engine.</p>
      </div>

      <div className="mx-auto h-10 w-px bg-crimson/50" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-2xl gap-4 sm:grid-cols-2">
        {platforms.map((platform) => (
          <Link key={platform.id} href={platform.href} className="institutional-card group flex flex-col gap-2">
            <ScientificLabel tone="crimson">Platform / {platform.name}</ScientificLabel>
            <span className="font-serif text-xl text-ink transition-colors group-hover:text-crimson">
              {platform.name}
            </span>
            <p className="text-[0.75rem] uppercase tracking-[0.14em] text-stone">{platform.subtitle}</p>
            <ContentStatus status={platform.status} />
          </Link>
        ))}
      </div>

      <div className="mx-auto h-10 w-px bg-crimson/50" aria-hidden="true" />

      <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {divisionCards.map((division) => (
          <Link key={division.slug} href={division.href} className="institutional-card group flex flex-col gap-3">
            <ScientificLabel tone="crimson">Division / {division.name.replace("™", "")}</ScientificLabel>
            <StatusBadge status={division.status} />
            <strong className="font-serif text-xl text-ink transition-colors group-hover:text-crimson">
              {division.name}
            </strong>
            <span className="text-[0.75rem] uppercase tracking-[0.12em] text-stone">{division.role}</span>
            <span className="text-[0.9375rem] leading-relaxed text-ink-soft">{division.tagline}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
