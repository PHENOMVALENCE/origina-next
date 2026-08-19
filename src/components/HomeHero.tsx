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
    <section className="home-hero bg-noir text-ivory">
      <div className="home-hero-media">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover object-[center_20%] lg:object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="home-hero-media-shade" aria-hidden="true" />
        <div className="home-hero-media-caption">
          <p className="text-[0.62rem] uppercase tracking-[0.18em] text-gold">{image.caption}</p>
          <p className="mt-1 max-w-xs text-sm leading-relaxed text-ivory/85">
            Evidence-led innovation beginning with skin of colour.
          </p>
        </div>
      </div>

      <div className="home-hero-content">
        <div className="home-hero-content-inner">
          <div className="home-hero-accent" aria-hidden="true" />

          <p className="home-hero-kicker lg:hidden">{image.caption} · Evidence-led innovation beginning with skin of colour.</p>

          <Eyebrow tone="dark" plain className="home-hero-eyebrow">
            Biology First™ · Dar es Salaam, Tanzania
          </Eyebrow>

          <p className="font-serif text-[0.72rem] uppercase tracking-[0.28em] text-gold-light sm:text-[0.78rem]">
            ORIGINA™
          </p>

          <h1 className="display-title home-hero-title">
            Beginning in Africa.
            <span className="home-hero-tagline">Serving the world.</span>
          </h1>

          <p className="home-hero-lede muted-on-dark">
            A multi-divisional innovation institution built at the intersection of biology, clinical science,
            technology, and human wellbeing.
          </p>
          <p className="home-hero-origin">Founded in Africa. Designed without limits. Built for the world.</p>

          <div className="cta-actions home-hero-actions">
            <Button href="/about">Explore ORIGINA</Button>
            <Button href="/labs" variant="secondary">
              Enter ORIGINA Labs™
            </Button>
          </div>

          <dl className="home-hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="home-hero-stat">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-[1.75rem] leading-none text-gold sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1.5 text-[0.58rem] uppercase tracking-[0.16em] text-stone">{stat.label}</dd>
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
