"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { panels, primaryNav } from "@/lib/navigation";

export function SiteHeader() {
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openPanel) return;
    const onClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenPanel(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPanel(null);
    };
    document.addEventListener("click", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openPanel]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-noir/95 backdrop-blur-md border-b border-gold/20" : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="fixed left-4 top-[-5rem] z-[999] bg-gold px-4 py-3 text-noir focus:top-4"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-(--content-max) items-center justify-between px-6 py-5 lg:px-10"
      >
        <Link
          href="/"
          aria-label="ORIGINA home"
          className="inline-flex items-center gap-3 text-[0.78rem] font-medium tracking-[0.38em] text-ivory"
        >
          ORIGINA
        </Link>

        <div ref={navRef} role="menubar" className="hidden items-center gap-8 xl:flex">
          {primaryNav.map((item) => {
            const panelLinks = item.panel ? panels[item.panel] : null;
            if (!panelLinks) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  role="menuitem"
                  className="text-[0.7rem] uppercase tracking-[0.18em] text-ivory/85 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              );
            }
            const isOpen = openPanel === item.label;
            return (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.panel}`}
                  onClick={() => setOpenPanel(isOpen ? null : item.label)}
                  className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-ivory/85 transition-colors hover:text-gold"
                >
                  {item.label}
                  <span aria-hidden className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`panel-${item.panel}`}
                    role="menu"
                    className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 border border-border-gold bg-noir py-3 shadow-xl"
                  >
                    {panelLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        role="menuitem"
                        onClick={() => setOpenPanel(null)}
                        className="block px-5 py-2.5 text-[0.75rem] text-ivory/90 transition-colors hover:bg-white/5 hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir transition-colors hover:bg-gold-light md:inline-flex"
          >
            Build with ORIGINA
          </Link>
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-12 w-12 place-content-center gap-1.5 rounded-full border border-gold/45 xl:hidden"
          >
            <span className="block h-px w-[18px] bg-ivory" />
            <span className="block h-px w-[18px] bg-ivory" />
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-40 bg-noir text-ivory transition-transform duration-300 xl:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="text-[0.78rem] font-medium tracking-[0.38em]">ORIGINA</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="grid h-10 w-10 place-content-center rounded-full border border-gold/45"
        >
          ✕
        </button>
      </div>
      <nav aria-label="Mobile navigation" className="flex flex-col gap-8 overflow-y-auto px-6 py-8">
        {primaryNav.map((item) => {
          const panelLinks = item.panel ? panels[item.panel] : null;
          if (!panelLinks) {
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="font-serif text-3xl"
              >
                {item.label}
              </Link>
            );
          }
          return (
            <div key={item.label}>
              <p className="mb-3 text-[0.65rem] uppercase tracking-[0.2em] text-gold">{item.label}</p>
              <div className="flex flex-col gap-3">
                {panelLinks.map((link) => (
                  <Link key={link.label} href={link.href} onClick={onClose} className="text-lg text-ivory/90">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
