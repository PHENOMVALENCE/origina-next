import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { founderImages } from "@/lib/content/images";

const stats = [
  { value: "2024", label: "Established" },
  { value: "DSM", label: "Tanzania" },
  { value: "∞", label: "Possibility" },
] as const;

export function HomeHero() {
  const image = founderImages.lifestyle;

  return (
    <section className="home-hero bg-paper text-ink">
      <div className="home-hero-media">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover object-[center_20%] lg:object-center"
          sizes="(min-width: 1024px) 48vw, 100vw"
        />
        {/* Blends the photograph into the paper ground on large screens. */}
        <div className="home-hero-media-shade" aria-hidden="true" />
        {/* Scrim behind the caption only. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-48 bg-gradient-to-t from-noir/75 to-transparent lg:block"
          aria-hidden="true"
        />
        <div className="home-hero-media-caption">
          <p className="text-[0.75rem] uppercase tracking-[0.18em] text-gold-light">{image.caption}</p>
          <p className="mt-2 max-w-sm text-[0.9375rem] leading-relaxed text-ivory/90">
            Evidence-led innovation beginning with skin of colour.
          </p>
        </div>
      </div>

      <div className="home-hero-content">
        <div className="home-hero-content-inner">
          <div className="home-hero-accent" aria-hidden="true" />

          <p className="home-hero-kicker lg:hidden">
            {image.caption} · Evidence-led innovation beginning with skin of colour.
          </p>

          {/* No wordmark here — it already sits in the header directly above. */}
          <Eyebrow plain className="home-hero-eyebrow">
            Biology First™ · Dar es Salaam, Tanzania
          </Eyebrow>

          <h1 className="display-title home-hero-title">
            Beginning in Africa.
            <span className="home-hero-tagline">Serving the world.</span>
          </h1>

          <p className="home-hero-lede">
            A multi-divisional innovation institution built at the intersection of biology, clinical science,
            technology, and human wellbeing.
          </p>
          <p className="home-hero-origin">Founded in Africa. Designed without limits. Built for the world.</p>

          <div className="cta-actions home-hero-actions">
            <Button href="/about">Explore ORIGINA</Button>
            <Button href="/labs" variant="secondary-dark">
              Enter ORIGINA Labs™
            </Button>
          </div>

          <dl className="home-hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="home-hero-stat">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="stat-figure">{stat.value}</dd>
                <dd className="stat-label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <a href="#institutional-thesis" className="home-hero-scroll">
          <span className="sr-only">Continue to institutional thesis</span>
          <span aria-hidden="true">Scroll</span>
        </a>
      </div>
    </section>
  );
}
