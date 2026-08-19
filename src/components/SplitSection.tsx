import Image from "next/image";

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
      className={`grid items-center gap-10 lg:grid-cols-2 ${reverse ? "[&>*:first-child]:lg:order-2 [&>*:last-child]:lg:order-1" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

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
    <figure className={className}>
      <div className="relative aspect-4/5 overflow-hidden rounded-sm">
        <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[0.62rem] uppercase tracking-[0.14em] text-stone">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function PhotoGrid({
  images,
}: {
  images: readonly { src: string; alt: string; offset?: boolean }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image) => (
        <div key={image.src} className={`relative aspect-3/4 overflow-hidden rounded-sm ${image.offset ? "mt-8" : ""}`}>
          <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="25vw" />
        </div>
      ))}
    </div>
  );
}
