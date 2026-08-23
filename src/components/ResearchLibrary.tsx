"use client";

import { useMemo, useState } from "react";
import { labsResearchCards, type ResearchCategory } from "@/lib/content/science";

const filters: { id: ResearchCategory; label: string }[] = [
  { id: "all", label: "All research" },
  { id: "pigmentation", label: "Pigmentation" },
  { id: "formulation", label: "Formulation" },
  { id: "barrier", label: "Skin barrier" },
];

export function ResearchLibrary() {
  const [activeFilter, setActiveFilter] = useState<ResearchCategory>("all");

  const visibleCards = useMemo(() => {
    if (activeFilter === "all") return labsResearchCards;
    return labsResearchCards.filter((card) =>
      (card.categories as readonly string[]).includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter research areas">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-none border px-4 py-2 text-[0.75rem] uppercase tracking-[0.14em] transition-colors ${
                isActive
                  ? "border-crimson bg-crimson text-paper"
                  : "border-rule text-ink hover:border-crimson"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {visibleCards.map((card) => (
          <article key={card.title} className="flex flex-col border border-rule bg-ivory p-6">
            <p className="mb-3 flex justify-between gap-4 text-[0.75rem] uppercase tracking-[0.14em] text-stone-deep">
              <span>{card.meta[0]}</span>
              <span>{card.meta[1]}</span>
            </p>
            <h3 className="font-serif text-2xl text-ink">{card.title}</h3>
            <p className="mt-3 flex-1 text-sm text-ink-soft">{card.text}</p>
            <footer className="mt-6 flex justify-between border-t border-rule pt-4 text-[0.75rem] uppercase tracking-[0.14em] text-stone-deep">
              <span>{card.footer[0]}</span>
              <span>{card.footer[1]}</span>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
