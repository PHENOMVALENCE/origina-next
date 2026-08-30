import Image from "next/image";
import type { ImageAsset } from "@/lib/content/images";

type EditorialVariant = "portrait" | "landscape" | "square" | "cinematic";
type EditorialTone = "light" | "dark" | "none";

const aspect: Record<EditorialVariant, string> = {
  portrait: "aspect-4/5",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
  cinematic: "aspect-[21/9]",
};

export function SplitSection({
  reverse,
  children,
  className = "",
}: {
  reverse?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${reverse ? "[&>*:first-child]:lg:order-2 [&>*:last-child]:lg:order-1" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function EditorialImage({
  image,
  variant = "portrait",
  tone = "light",
  priority = false,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  image: ImageAsset;
  variant?: EditorialVariant;
  tone?: EditorialTone;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={`editorial-frame ${className}`}>
      <div className={`relative overflow-hidden ${aspect[variant]}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
          sizes={sizes}
        />
        {tone !== "none" ? (
          <div
            className={`pointer-events-none absolute inset-0 ${
              tone === "dark"
                ? "bg-gradient-to-t from-noir/75 via-noir/15 to-transparent"
                : "bg-gradient-to-t from-ivory/40 via-transparent to-transparent"
            }`}
            aria-hidden="true"
          />
        ) : null}
        <span className="editorial-frame-accent" aria-hidden="true" />
      </div>
      {image.caption ? <figcaption className="editorial-caption">{image.caption}</figcaption> : null}
    </figure>
  );
}

/** @deprecated Use EditorialImage — kept for gradual migration. */
export function MediaFigure({
  src,
  alt,
  caption,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <EditorialImage
      image={{ src, alt, caption }}
      tone="none"
      sizes={sizes}
      className={className}
    />
  );
}

/*
 * A duo mosaic always sits inside a SplitSection, so it occupies half the
 * container at lg (two ~25vw columns) but the full width below it — one column
 * under sm, two above. A flat "25vw" served a 256px file into a 342px box.
 */
const MOSAIC_DUO_SIZES = "(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 92vw";

export function PhotoGrid({
  images,
}: {
  images: readonly (ImageAsset & { offset?: boolean })[];
}) {
  return (
    <div className="photo-mosaic photo-mosaic--duo">
      {images.map((image, index) => (
        <EditorialImage
          key={image.src}
          image={image}
          variant="portrait"
          tone="none"
          sizes={MOSAIC_DUO_SIZES}
          className={index === 1 || image.offset ? "sm:mt-12 lg:mt-16" : ""}
        />
      ))}
    </div>
  );
}

export function ImageBreak({
  image,
  title,
  subtitle,
}: {
  image: ImageAsset;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="image-break" aria-label={image.alt}>
      <div className="relative min-h-[28vh] sm:min-h-[38vh] lg:min-h-[52vh]">
        <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/90 via-noir/55 to-noir/25 sm:from-noir/85 sm:via-noir/45 sm:to-noir/20" aria-hidden="true" />
        {(title || subtitle) && (
          <div className="absolute inset-0 flex items-end">
            <div className="site-container pb-8 sm:pb-12 lg:pb-16">
              {title ? (
                <p className="font-serif text-2xl leading-tight text-ivory sm:text-3xl lg:text-5xl">{title}</p>
              ) : null}
              {subtitle ? (
                <p className="mt-2 max-w-xl text-[0.875rem] leading-relaxed text-ivory/80 sm:mt-3 sm:text-[0.9375rem]">{subtitle}</p>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* Trio: one column under sm, two to lg, three above — never a flat third. */
const MOSAIC_TRIO_SIZES = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw";

export function PhotoMosaic({
  images,
  layout = "duo",
}: {
  images: readonly ImageAsset[];
  layout?: "duo" | "trio";
}) {
  if (layout === "trio" && images.length >= 3) {
    return (
      <div className="photo-mosaic photo-mosaic--trio">
        <EditorialImage image={images[0]} variant="portrait" tone="none" sizes={MOSAIC_TRIO_SIZES} />
        <EditorialImage
          image={images[1]}
          variant="portrait"
          tone="none"
          sizes={MOSAIC_TRIO_SIZES}
          className="mt-10"
        />
        <EditorialImage
          image={images[2]}
          variant="landscape"
          tone="none"
          sizes={MOSAIC_TRIO_SIZES}
          className="sm:col-span-2 lg:col-span-1"
        />
      </div>
    );
  }

  return (
    <div className="photo-mosaic photo-mosaic--duo">
      {images.slice(0, 2).map((image, index) => (
        <EditorialImage
          key={image.src}
          image={image}
          variant="portrait"
          tone="none"
          sizes={MOSAIC_DUO_SIZES}
          className={index === 1 ? "mt-12 lg:mt-16" : ""}
        />
      ))}
    </div>
  );
}
