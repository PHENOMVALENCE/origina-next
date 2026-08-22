"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { founderImages } from "@/lib/content/images";

/*
 * Landscape-composed shots only — founderImages.portraitClinical is a tall
 * portrait crop and object-cover forces it into an unrecognisable close-up
 * when stretched across the full-bleed hero. It has a proper home in the
 * Founder section's portrait-aspect EditorialImage instead.
 */
const heroImages = [
  founderImages.multidisciplinary,
  founderImages.recognition,
  founderImages.lifestyle,
] as const;

const stats = [
  { value: "2024", label: "Established" },
  { value: "DSM", label: "Tanzania" },
  { value: "∞", label: "Possibility" },
] as const;

export function HomeHero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const image = heroImages[activeImage];

  return (
    <section className="home-hero bg-noir text-ivory">
      <div className="home-hero-media">
        {heroImages.map((heroImage, index) => (
          <Image
            key={heroImage.src}
            src={heroImage.src}
            alt={index === activeImage ? heroImage.alt : ""}
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            aria-hidden={index === activeImage ? undefined : true}
            className={`home-hero-image ${index === activeImage ? "home-hero-image--active" : ""}`}
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
        ))}
        {/* Blends the photograph into the paper ground on large screens. */}
        <div className="home-hero-media-shade" aria-hidden="true" />
        {/* Scrim behind the caption only. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-48 bg-gradient-to-t from-noir/75 to-transparent lg:block"
          aria-hidden="true"
        />
        <div className="home-hero-media-caption" aria-live="polite">
          <p className="text-[0.75rem] uppercase tracking-[0.18em] text-gold-light">{image.caption}</p>
          <p className="mt-2 max-w-sm text-[0.9375rem] leading-relaxed text-ivory/90">
            Evidence-led innovation beginning with skin of colour.
          </p>
          <div className="mt-5 flex gap-2" aria-label="Hero images">
            {heroImages.map((heroImage, index) => (
              <button
                key={heroImage.src}
                type="button"
                aria-label={`Show hero image ${index + 1}`}
                aria-pressed={index === activeImage}
                onClick={() => setActiveImage(index)}
                className={`h-1 transition-all ${index === activeImage ? "w-10 bg-gold" : "w-5 bg-ivory/50 hover:bg-ivory"}`}
              />
            ))}
          </div>
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
            <Button href="/labs" variant="secondary">
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
