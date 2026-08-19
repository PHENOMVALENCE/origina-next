import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { ImageAsset } from "@/lib/content/images";

export function PageHero({
  crumb,
  kicker,
  title,
  intro,
  variant = "default",
  image,
}: {
  crumb: string;
  kicker?: string;
  title: React.ReactNode;
  intro?: string;
  variant?: "default" | "gradient";
  image?: ImageAsset;
}) {
  const bgClass =
    variant === "gradient"
      ? "bg-[radial-gradient(circle_at_80%_40%,rgba(181,146,74,0.16),transparent_30%)] bg-noir"
      : "bg-noir";

  if (image) {
    return (
      <section className={`${bgClass} overflow-hidden pt-32 text-ivory lg:pt-40`}>
        <div className="site-container pb-20 lg:pb-28">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <div>
              <nav
                aria-label="Breadcrumb"
                className="mb-8 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.15em] text-stone"
              >
                <Link href="/" className="transition-colors hover:text-gold">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-ivory/80">{crumb}</span>
              </nav>
              {kicker ? <Eyebrow tone="dark">{kicker}</Eyebrow> : null}
              <h1 className="display-title max-w-4xl">{title}</h1>
              {intro ? (
                <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed muted-on-dark">{intro}</p>
              ) : null}
            </div>
            <figure className="editorial-frame hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-transparent" aria-hidden="true" />
                <span className="editorial-frame-accent" aria-hidden="true" />
              </div>
              {image.caption ? <figcaption className="editorial-caption text-stone">{image.caption}</figcaption> : null}
            </figure>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${bgClass} pt-32 pb-20 text-ivory lg:pt-40 lg:pb-28`}>
      <div className="site-container">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.15em] text-stone"
        >
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
