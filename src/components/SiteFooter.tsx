import Link from "next/link";
import { footerLegal, footerNav } from "@/lib/navigation";
import { TextLink } from "@/components/ui/TextLink";

export function SiteFooter() {
  const columns = Object.values(footerNav);

  return (
    <footer className="bg-noir-deep text-stone">
      <div className="site-container py-14 sm:py-16 lg:py-24">
        <div className="mb-12 border-b border-white/10 pb-12 sm:mb-16 sm:pb-16">
          <p className="eyebrow eyebrow--plain text-gold">ORIGINA™ · Biology First™</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-ivory sm:mt-4 sm:text-4xl lg:text-5xl">
            Beginning in Africa.
            <br />
            <span className="text-gold-light">Serving the world.</span>
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.14em] text-stone">Dar es Salaam, Tanzania · Est. 2024</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <TextLink href="/contact" light>
              Build with ORIGINA
            </TextLink>
            <TextLink href="/updates" light>
              Read updates
            </TextLink>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 xl:grid-cols-7">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-[0.78rem] font-semibold tracking-[0.32em] text-ivory">
              ORIGINA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone">
              A multi-divisional innovation institution at the intersection of biology, clinical science,
              technology, and human wellbeing.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <strong className="mb-4 block font-serif text-lg font-normal text-ivory">{column.title}</strong>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-stone transition-colors hover:text-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-8">
          {footerLegal.map((link) => (
            <Link key={link.label} href={link.href} className="text-xs uppercase tracking-[0.12em] text-stone hover:text-gold">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-between gap-2 text-[0.62rem] uppercase tracking-[0.12em] text-stone/80 sm:flex-row">
          <span>© {new Date().getFullYear()} ORIGINA™. All rights reserved.</span>
          <span>Biology First™ · Evidence-led · Africa Originating</span>
        </div>
      </div>
    </footer>
  );
}
