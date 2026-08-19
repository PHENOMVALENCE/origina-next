import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageHero({
  crumb,
  kicker,
  title,
  intro,
  variant = "default",
}: {
  crumb: string;
  kicker?: string;
  title: React.ReactNode;
  intro?: string;
  variant?: "default" | "gradient";
}) {
  const bgClass =
    variant === "gradient"
      ? "bg-[radial-gradient(circle_at_80%_40%,rgba(181,146,74,0.16),transparent_30%)] bg-noir"
      : "bg-noir";

  return (
    <section className={`${bgClass} pt-32 pb-20 text-ivory lg:pt-40 lg:pb-28`}>
      <div className="site-container">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.15em] text-stone">
          <Link href="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ivory/80">{crumb}</span>
        </nav>
        {kicker ? <Eyebrow tone="dark">{kicker}</Eyebrow> : null}
        <h1 className="display-title max-w-4xl">{title}</h1>
        {intro ? <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed muted-on-dark">{intro}</p> : null}
      </div>
    </section>
  );
}
