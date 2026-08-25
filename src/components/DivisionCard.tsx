import Image from "next/image";
import Link from "next/link";
import type { DivisionStatus } from "@/lib/content/divisions";
import { divisionImages } from "@/lib/content/images";
import { StatusBadge } from "@/components/StatusBadge";

type DivisionPreview = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  status: DivisionStatus;
  href: string;
};

export function DivisionCard({ division }: { division: DivisionPreview }) {
  const image = divisionImages[division.slug];

  return (
    <Link href={division.href} data-division={division.slug} className="division-card group">
      {image ? (
        <div className="division-card-media">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent" aria-hidden="true" />
        </div>
      ) : null}
      <div className="division-card-body text-ivory">
        <StatusBadge status={division.status} />
        <strong className="mt-3 block font-serif text-xl transition-colors group-hover:text-gold-light sm:text-2xl">
          {division.name}
        </strong>
        <span className="mt-1 block text-[0.75rem] uppercase tracking-[0.12em] text-stone">{division.role}</span>
        <span className="mt-auto pt-4 text-sm text-stone">{division.tagline}</span>
      </div>
    </Link>
  );
}
