import Link from "next/link";

export type BreadcrumbParent = { label: string; href: string };

export function Breadcrumbs({
  crumb,
  parent,
  dark = false,
}: {
  crumb: string;
  parent?: BreadcrumbParent;
  dark?: boolean;
}) {
  const linkClass = `transition-colors ${dark ? "hover:text-gold" : "hover:text-crimson"}`;
  const currentClass = dark ? "text-ivory/80" : "text-ink";
  /*
   * --color-stone is ~5.8:1 on noir (fine) but only ~3.1:1 on paper (fails
   * WCAG AA for this 12px text) — use the AA-safe --color-stone-deep pairing
   * on the light variant instead. See globals.css for the full explanation.
   */
  const mutedClass = dark ? "text-stone" : "text-stone-deep";

  return (
    <nav aria-label="Breadcrumb" className={`breadcrumb ${mutedClass}`}>
      <Link href="/" className={linkClass}>
        Home
      </Link>
      <span aria-hidden="true">/</span>
      {parent ? (
        <>
          <Link href={parent.href} className={linkClass}>
            {parent.label}
          </Link>
          <span aria-hidden="true">/</span>
        </>
      ) : null}
      <span className={currentClass}>{crumb}</span>
    </nav>
  );
}
