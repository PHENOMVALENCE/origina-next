import Image from "next/image";
import { Breadcrumbs, type BreadcrumbParent } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { ImageAsset } from "@/lib/content/images";

function HeroImage({
  image,
  dark,
  mobileVariant = "landscape",
}: {
  image: ImageAsset;
  dark: boolean;
  mobileVariant?: "landscape" | "portrait";
}) {
  return (
    <figure className="editorial-frame">
      <div
        className={`relative overflow-hidden ${
          mobileVariant === "landscape" ? "aspect-[16/10] lg:aspect-[4/5]" : "aspect-4/5"
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        {dark ? (
          <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-transparent" aria-hidden="true" />
        ) : null}
        <span
          className={`editorial-frame-accent ${dark ? "bg-gold/60" : ""}`}
          aria-hidden="true"
        />
      </div>
      {image.caption ? <figcaption className="editorial-caption">{image.caption}</figcaption> : null}
    </figure>
  );
}

export function PageHero({
  crumb,
  parent,
  kicker,
  title,
  intro,
  variant = "light",
  image,
  meta,
}: {
  crumb: string;
  /** Optional intermediate breadcrumb level, e.g. { label: "Science", href: "/science" }. */
  parent?: BreadcrumbParent;
  kicker?: string;
  title: React.ReactNode;
  intro?: string;
  /**
   * "light" — institution layer (default).
   * "dark"  — division / product layer.
   */
  variant?: "light" | "dark";
  image?: ImageAsset;
  /** Optional provenance line, e.g. "Reviewed August 2026". */
  meta?: string;
}) {
  const dark = variant === "dark";
  const shellTone = dark ? "page-hero--dark" : "page-hero--light";

  const copy = (
    <>
      <Breadcrumbs crumb={crumb} parent={parent} dark={dark} />
      {kicker ? <Eyebrow tone={dark ? "dark" : "default"}>{kicker}</Eyebrow> : null}
      <h1 className="display-title max-w-4xl">{title}</h1>
      {intro ? (
        <p className={`mt-7 max-w-(--measure) text-[1.125rem] leading-[1.66] ${dark ? "muted-on-dark" : "text-ink-soft"}`}>
          {intro}
        </p>
      ) : null}
      {meta ? <p className={`page-meta mt-10 max-w-(--measure) ${dark ? "border-white/15" : ""}`}>{meta}</p> : null}
    </>
  );

  if (image) {
    return (
      <section className={`${shellTone} overflow-hidden page-hero-shell`}>
        <div className="site-container">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
            <div>{copy}</div>
            <HeroImage image={image} dark={dark} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${shellTone} page-hero-shell`}>
      <div className="site-container">{copy}</div>
    </section>
  );
}
