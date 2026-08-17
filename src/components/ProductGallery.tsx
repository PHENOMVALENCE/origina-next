"use client";

import Image from "next/image";
import { useState } from "react";

export type GalleryView = {
  id: string;
  src: string;
  alt: string;
  label: string;
};

export function ProductGallery({ views }: { views: readonly GalleryView[] }) {
  const [active, setActive] = useState(0);
  const current = views[active] ?? views[0];

  if (!current) return null;

  return (
    <div>
      <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-cream">
        <Image src={current.src} alt={current.alt} fill className="object-cover" priority />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2" aria-label="Product views">
        {views.map((view, index) => (
          <button
            key={view.id}
            type="button"
            aria-pressed={index === active}
            onClick={() => setActive(index)}
            className={`relative aspect-square overflow-hidden rounded-sm border-2 transition-colors ${
              index === active ? "border-gold" : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <Image src={view.src} alt="" fill className="object-cover" />
            <span className="absolute left-1 top-1 bg-noir/70 px-1.5 py-0.5 text-[0.55rem] text-ivory">
              {view.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
