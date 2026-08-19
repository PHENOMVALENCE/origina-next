import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

type CtaLink = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function PageCta({
  eyebrow,
  title,
  intro,
  links,
  tone = "noir",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: string;
  links: CtaLink[];
  tone?: "noir" | "graphite";
}) {
  return (
    <section className={`${tone === "graphite" ? "bg-graphite" : "bg-noir"} py-12 text-ivory sm:py-16 lg:py-20`}>
      <div className="site-container">
        {eyebrow ? <Eyebrow tone="dark">{eyebrow}</Eyebrow> : null}
        {title ? (
          <h2 className="section-title-light mb-4 max-w-2xl sm:mb-6">{title}</h2>
        ) : null}
        {intro ? <p className="section-intro text-stone">{intro}</p> : null}
        <div className="cta-actions">
          {links.map((link) => (
            <Button
              key={link.href + link.label}
              href={link.href}
              variant={link.variant === "secondary" ? "secondary" : "primary"}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
