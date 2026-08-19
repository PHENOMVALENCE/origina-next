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
    <section className={`${tone === "graphite" ? "bg-graphite" : "bg-noir"} py-16 text-ivory lg:py-20`}>
      <div className="site-container">
        {eyebrow ? <Eyebrow tone="dark">{eyebrow}</Eyebrow> : null}
        {title ? <h2 className="mb-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">{title}</h2> : null}
        {intro ? <p className="mb-8 max-w-xl text-[0.9375rem] leading-relaxed text-stone">{intro}</p> : null}
        <div className="flex flex-wrap gap-4">
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
