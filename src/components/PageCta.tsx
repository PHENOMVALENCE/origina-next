import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

type CtaLink = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

/**
 * Closing call to action.
 *
 * Defaults to the institutional register: a sunk paper band opened by a rule,
 * with a crimson primary action. Division pages pass `tone="noir"` to close in
 * the product register with a gold action.
 */
export function PageCta({
  eyebrow,
  title,
  intro,
  links,
  tone = "sunk",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: string;
  links: CtaLink[];
  tone?: "sunk" | "noir" | "graphite";
}) {
  const isDark = tone === "noir" || tone === "graphite";
  const ground = tone === "graphite" ? "bg-graphite" : tone === "noir" ? "bg-noir" : "bg-paper-sunk";

  return (
    <section className={`${ground} ${isDark ? "text-ivory" : "text-ink"} border-t ${isDark ? "border-white/12" : "border-rule"}`}>
      <div className="site-container py-16 sm:py-20 lg:py-24">
        {eyebrow ? <Eyebrow tone={isDark ? "dark" : "default"}>{eyebrow}</Eyebrow> : null}

        {title ? (
          <h2 className={`section-title mb-5 max-w-2xl sm:mb-7 ${isDark ? "text-ivory" : ""}`}>{title}</h2>
        ) : null}

        {intro ? <p className={`section-intro ${isDark ? "text-muted-dark" : ""}`}>{intro}</p> : null}

        <div className="cta-actions">
          {links.map((link) => {
            const secondary = link.variant === "secondary";
            const variant = isDark
              ? secondary
                ? "secondary"
                : "gold"
              : secondary
                ? "secondary-dark"
                : "primary";

            return (
              <Button key={link.href + link.label} href={link.href} variant={variant}>
                {link.label}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
