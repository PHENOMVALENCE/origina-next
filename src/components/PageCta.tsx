import Link from "next/link";

type CtaLink = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function PageCta({
  eyebrow,
  title,
  links,
}: {
  eyebrow?: string;
  title?: string;
  links: CtaLink[];
}) {
  return (
    <section className="bg-noir py-16 text-ivory">
      <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
        {eyebrow && (
          <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        )}
        {title && (
          <h2 className="mb-6 font-serif text-3xl leading-tight">
            {title}
          </h2>
        )}
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className={
                link.variant === "secondary"
                  ? "rounded-full border border-ivory/35 px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ivory hover:border-gold hover:text-gold"
                  : "rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir hover:bg-gold-light"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
