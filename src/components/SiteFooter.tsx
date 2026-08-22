import Link from "next/link";
import { footerLegal, footerNav } from "@/lib/navigation";
import { TextLink } from "@/components/ui/TextLink";

/**
 * The footer stays dark in both layers — it is the institution's colophon and
 * anchors every page. Accents are restrained: warm neutrals, crimson on hover.
 */
export function SiteFooter() {
  const columns = Object.values(footerNav);

  return (
    <footer className="bg-noir-deep text-stone">
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="mb-14 border-b border-white/12 pb-14 sm:mb-16 sm:pb-16">
          <p className="eyebrow eyebrow--plain text-crimson-light">ORIGINA™ · Biology First™</p>
          <h2 className="mt-4 mb-0 max-w-2xl section-title-light">
            Beginning in Africa.
            <br />
            <span className="text-crimson-light">Serving the world.</span>
          </h2>
          <p className="mt-5 text-[0.75rem] uppercase tracking-[0.16em] text-stone">
            Dar es Salaam, Tanzania · Est. 2024
          </p>
          <div className="mt-9 flex flex-wrap gap-6">
            <TextLink href="/contact" light>
              Build with ORIGINA
            </TextLink>
            <TextLink href="/updates" light>
              Read updates
            </TextLink>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-[0.9375rem] font-semibold tracking-[0.22em] text-ivory">
              ORIGINA
            </Link>
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-stone">
              A multi-divisional innovation institution at the intersection of biology, clinical science,
              technology, and human wellbeing.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <strong className="mb-5 block font-serif text-xl font-normal text-ivory">{column.title}</strong>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.9375rem] text-stone transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/12 pt-9">
          {footerLegal.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[0.75rem] uppercase tracking-[0.14em] text-stone transition-colors hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-9 flex flex-col justify-between gap-2 text-[0.75rem] uppercase tracking-[0.12em] text-stone/75 sm:flex-row">
          <span>© {new Date().getFullYear()} ORIGINA™. All rights reserved.</span>
          <span>Biology First™ · Evidence-led · Africa Originating</span>
        </div>
      </div>
    </footer>
  );
}
