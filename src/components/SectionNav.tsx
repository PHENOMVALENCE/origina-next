"use client";

import { useEffect, useState } from "react";

export type SectionNavItem = {
  /** Must match the `id` given to the corresponding <Section>. */
  id: string;
  label: string;
};

/**
 * In-page section navigation.
 *
 * A standard institutional reading aid: on long pages the reader can see the
 * shape of the whole argument, jump within it, and always knows where they are.
 * Renders as a sticky bar directly beneath the site header, scrollable on small
 * screens. Sits above full-bleed section bands rather than beside them.
 */
export function SectionNav({ items }: { items: readonly SectionNavItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    // The active section is the last one whose top has passed the reading line,
    // a third of the way down the viewport. Every target is measured on each
    // pass, so the result never depends on which elements happened to move.
    const measure = () => {
      const line = window.innerHeight * 0.3;
      let current = items[0]?.id ?? "";

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) current = item.id;
      }

      setActive(current);
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });

    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [items]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-(--header-offset) z-40 border-b border-rule bg-paper/95 backdrop-blur-sm"
    >
      <div className="site-container">
        <ul className="-mx-1 flex items-center gap-1 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <li className="shrink-0 pr-3">
            <span className="scientific-label text-stone-deep">On this page</span>
          </li>

          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`block whitespace-nowrap border-b-2 px-3 py-3 text-[0.875rem] transition-colors ${
                    isActive
                      ? "border-crimson text-crimson"
                      : "border-transparent text-ink-soft hover:text-crimson"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
