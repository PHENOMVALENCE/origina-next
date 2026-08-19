"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { panels, primaryNav } from "@/lib/navigation";

export function SiteHeader() {
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6">
      <a
        href="#main"
        className="pointer-events-auto fixed left-4 top-[-5rem] z-[999] bg-gold px-4 py-3 text-noir focus:top-4"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary navigation"
        className={`pointer-events-auto mx-auto flex max-w-(--content-max) items-center justify-between gap-2 rounded-full border px-2 py-1.5 transition-all duration-300 sm:gap-4 sm:px-3 sm:py-2 md:px-4 ${
          scrolled
            ? "border-gold/40 bg-noir/95 shadow-[var(--shadow-nav)] backdrop-blur-xl"
            : "border-gold/25 bg-noir/80 shadow-[var(--shadow-soft)] backdrop-blur-md"
        }`}
      >
        <Link
          href="/"
          aria-label="ORIGINA home"
          className="inline-flex items-center gap-3 rounded-full py-1 pl-1 pr-3 text-ivory transition-opacity hover:opacity-90"
        >
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-gold/35 bg-noir">
            <Image src="/img/brand/origina-mark.png" alt="" width={28} height={28} className="h-7 w-7 object-contain" />
          </span>
          <span className="hidden text-[0.72rem] font-semibold tracking-[0.32em] sm:inline">ORIGINA</span>
        </Link>

        <div ref={navRef} role="menubar" className="hidden items-center gap-1 xl:flex">
          {primaryNav.map((item) => {
            const panelLinks = item.panel ? panels[item.panel] : null;
            if (!panelLinks) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  role="menuitem"
                  className="rounded-full px-3 py-2 text-[0.68rem] uppercase tracking-[0.16em] text-ivory/85 transition-colors hover:bg-white/5 hover:text-gold"
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
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-[0.68rem] uppercase tracking-[0.16em] transition-colors ${
                    isOpen ? "bg-white/8 text-gold" : "text-ivory/85 hover:bg-white/5 hover:text-gold"
                  }`}
                >
                  {item.label}
                  <span aria-hidden className={`text-[0.6rem] transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                {isOpen ? (
                  <div
                    id={`panel-${item.panel}`}
                    role="menu"
                    className="absolute left-1/2 top-[calc(100%+0.75rem)] w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-gold/25 bg-noir/98 py-2 shadow-[var(--shadow-nav)] backdrop-blur-xl"
                  >
                    {panelLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        role="menuitem"
                        onClick={() => setOpenPanel(null)}
                        className="block px-5 py-2.5 text-[0.8125rem] text-ivory/90 transition-colors hover:bg-white/5 hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/contact" className="btn-primary hidden px-5 py-2.5 md:inline-flex">
            Contact
          </Link>
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-11 w-11 place-content-center rounded-full border border-gold/40 text-ivory xl:hidden"
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
            {mobileOpen ? "✕" : "☰"}
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
      className={`pointer-events-auto fixed inset-0 z-40 flex flex-col bg-noir/98 text-ivory backdrop-blur-xl transition-transform duration-300 xl:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="flex shrink-0 items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <span className="text-[0.78rem] font-semibold tracking-[0.32em]">ORIGINA</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="grid h-10 w-10 place-content-center rounded-full border border-gold/40"
        >
          ✕
        </button>
      </div>
      <nav aria-label="Mobile navigation" className="flex flex-1 flex-col gap-6 overflow-y-auto overscroll-contain px-4 py-2 pb-[max(6rem,env(safe-area-inset-bottom))] sm:gap-8 sm:px-6 sm:py-4">
        {primaryNav.map((item) => {
          const panelLinks = item.panel ? panels[item.panel] : null;
          if (!panelLinks) {
            return (
              <Link key={item.label} href={item.href} onClick={onClose} className="font-serif text-2xl text-ivory sm:text-3xl">
                {item.label}
              </Link>
            );
          }
          return (
            <div key={item.label}>
              <p className="eyebrow eyebrow--plain mb-2 sm:mb-3">{item.label}</p>
              <div className="flex flex-col gap-2.5 border-l border-gold/25 pl-3 sm:gap-3 sm:pl-4">
                {panelLinks.map((link) => (
                  <Link key={link.label} href={link.href} onClick={onClose} className="text-[0.9375rem] text-ivory/90 hover:text-gold sm:text-base">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
        <Link href="/contact" onClick={onClose} className="btn-primary mt-2 w-full sm:mt-4 sm:w-fit">
          Contact ORIGINA
        </Link>
      </nav>
    </div>
  );
}
