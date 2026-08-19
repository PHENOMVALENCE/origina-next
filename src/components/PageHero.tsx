import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { ImageAsset } from "@/lib/content/images";

function HeroImage({ image, mobileVariant = "landscape" }: { image: ImageAsset; mobileVariant?: "landscape" | "portrait" }) {
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
        <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-transparent lg:from-noir/50" aria-hidden="true" />
        <span className="editorial-frame-accent" aria-hidden="true" />
      </div>
      {image.caption ? <figcaption className="editorial-caption text-stone">{image.caption}</figcaption> : null}
    </figure>
  );
}

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

  const breadcrumb = (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.65rem] uppercase tracking-[0.14em] text-stone sm:mb-8 sm:text-[0.7rem] sm:tracking-[0.15em]"
    >
      <Link href="/" className="transition-colors hover:text-gold">
        Home
      </Link>
      <span aria-hidden="true">/</span>
      <span className="text-ivory/80">{crumb}</span>
    </nav>
  );

  const copy = (
    <>
      {breadcrumb}
      {kicker ? <Eyebrow tone="dark">{kicker}</Eyebrow> : null}
      <h1 className="display-title max-w-4xl">{title}</h1>
      {intro ? <p className="mt-4 max-w-2xl text-[0.875rem] leading-relaxed muted-on-dark sm:mt-6 sm:text-[0.9375rem]">{intro}</p> : null}
    </>
  );

  if (image) {
    return (
      <section className={`${bgClass} overflow-hidden page-hero-shell`}>
        <div className="site-container">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
            <div>{copy}</div>
            <HeroImage image={image} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${bgClass} page-hero-shell`}>
      <div className="site-container">{copy}</div>
    </section>
  );
}
