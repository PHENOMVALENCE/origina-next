import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { founderImages } from "@/lib/content/images";

/*
 * Institutional editorial hero — left content column on the warm paper ground,
 * right documentary photograph. Light register (unifies with the light home
 * header). Server-rendered: the entrance is pure CSS (`hero-rise`), so no client
 * JS ships for the hero. A single landscape-composed image, not a carousel —
 * calm reads as institutional. The image stacks beneath the content on mobile.
 */
const heroImage = founderImages.multidisciplinary;

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="hero-heading">
      <div className="site-container home-hero-grid">
        <div className="home-hero-content">
          <p className="home-hero-eyebrow hero-rise">Biology First™ · Evidence-led innovation</p>

          <h1 id="hero-heading" className="home-hero-title hero-rise" style={{ animationDelay: "80ms" }}>
            <span className="block">Beginning in Africa.</span>
            <span className="home-hero-title-accent">Serving the world.</span>
          </h1>

          <p className="home-hero-lede hero-rise" style={{ animationDelay: "160ms" }}>
            A multi-divisional innovation institution built at the intersection of biology, clinical science,
            technology, and human wellbeing.
          </p>

          <div className="home-hero-actions hero-rise" style={{ animationDelay: "240ms" }}>
            <Button href="/about">Explore ORIGINA</Button>
            <TextLink href="/labs">Enter ORIGINA Labs™</TextLink>
          </div>

          <p className="home-hero-meta hero-rise" style={{ animationDelay: "320ms" }}>
            <span>Research · Biology · Africa</span>
            <span className="home-hero-meta-sep" aria-hidden="true">
              ·
            </span>
            <span>Dar es Salaam, Tanzania · Est. 2024</span>
          </p>
        </div>

        <figure className="home-hero-figure hero-rise" style={{ animationDelay: "120ms" }}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-[center_20%]"
          />
          <div className="home-hero-figure-shade" aria-hidden="true" />
          <figcaption className="home-hero-caption">{heroImage.caption} · Dar es Salaam, Tanzania</figcaption>
        </figure>
      </div>
    </section>
  );
}
