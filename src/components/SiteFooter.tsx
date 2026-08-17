import Link from "next/link";
import { footerLegal, footerNav } from "@/lib/navigation";

export function SiteFooter() {
  const columns = Object.values(footerNav);

  return (
    <footer className="bg-[#0d0b09] text-stone">
      <div className="mx-auto max-w-(--content-max) px-6 py-20 lg:px-10">
        <div className="mb-16 border-b border-white/10 pb-16">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gold">ORIGINA™ · Biology First™</p>
          <h2 className="mt-4 font-serif text-4xl text-ivory sm:text-5xl">
            Beginning in Africa.
            <br />
            <em className="not-italic text-gold-light">Serving the world.</em>
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.15em]">Dar es Salaam, Tanzania</p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-[0.78rem] font-medium tracking-[0.38em] text-ivory">
              ORIGINA
            </Link>
            <p className="mt-4 max-w-xs text-sm text-stone">
              A multi-divisional innovation institution built at the intersection of biology,
              clinical science, technology, and human wellbeing.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <strong className="mb-4 block font-serif text-lg font-normal text-ivory">
                {column.title}
              </strong>
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

        <div className="mt-8 flex flex-col justify-between gap-2 text-[0.6rem] uppercase tracking-[0.12em] sm:flex-row">
          <span>© {new Date().getFullYear()} ORIGINA™. All rights reserved.</span>
          <span>Dar es Salaam · Tanzania</span>
        </div>
      </div>
    </footer>
  );
}
