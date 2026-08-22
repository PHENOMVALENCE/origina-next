"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { isDivisionLayer } from "@/lib/layer";
import { panels, primaryNav } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const dark = isDivisionLayer(pathname ?? "/");

  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

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

  const linkIdle = dark ? "text-ivory/85 hover:text-gold" : "text-ink-soft hover:text-crimson";
  const linkActive = dark ? "text-gold" : "text-crimson";

  return (
    <header className={`site-header ${dark ? "site-header--dark" : "site-header--light"}`}>
      <a
        href="#main"
        className="fixed left-4 top-[-5rem] z-[999] bg-crimson px-5 py-3 text-paper focus:top-4"
      >
        Skip to content
      </a>

      <div className="site-header-inner">
        <Link href="/" aria-label="ORIGINA home" className={`site-wordmark ${dark ? "text-ivory" : "text-ink"}`}>
          {/* The mark is drawn for a dark ground, so it keeps one in both layers
              and reads as a seal rather than washing out on paper. */}
          <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden bg-noir">
            {/* eager, not lazy: the mark is always in the initial viewport, and
                lazy-loading the wordmark risks it popping in after paint.
                Next emits a 1x/2x preload for it, which produces a benign
                "preloaded but not used" notice in dev for the unused candidate. */}
            <Image
              src="/img/brand/origina-mark.png"
              alt=""
              width={24}
              height={24}
              loading="eager"
              className="h-6 w-6 object-contain"
            />
          </span>
          <span className="site-wordmark-text">ORIGINA</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          ref={navRef}
          className="hidden min-w-0 items-center justify-center lg:flex"
        >
          {primaryNav.map((item) => {
            const panelLinks = item.panel ? panels[item.panel] : null;

            if (!panelLinks) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpenPanel(null)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`site-nav-link ${pathname === item.href ? linkActive : linkIdle}`}
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
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.panel}`}
                  onClick={() => setOpenPanel(isOpen ? null : item.label)}
                  className={`site-nav-link inline-flex items-center gap-1.5 ${isOpen ? linkActive : linkIdle}`}
                >
                  {item.label}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 10 6"
                    className={`h-[5px] w-[9px] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>

                {isOpen ? (
                  <div
                    id={`panel-${item.panel}`}
                    className={`site-nav-panel ${dark ? "site-nav-panel--dark" : ""}`}
                  >
                    {panelLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setOpenPanel(null)}
                        aria-current={pathname === link.href ? "page" : undefined}
                        className={`site-nav-panel-link ${
                          dark ? "text-ivory/90 hover:bg-white/5 hover:text-gold" : "text-ink-soft hover:bg-paper-sunk hover:text-crimson"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className={`hidden md:inline-flex ${dark ? "btn-gold" : "btn-primary"} btn-compact`}>
            Enquiries
          </Link>
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className={`grid h-11 w-11 place-content-center border lg:hidden ${
              dark ? "border-gold/40 text-ivory" : "border-rule-strong text-ink"
            }`}
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
            <span aria-hidden>{mobileOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} dark={dark} pathname={pathname ?? "/"} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function MobileMenu({
  open,
  dark,
  pathname,
  onClose,
}: {
  open: boolean;
  dark: boolean;
  pathname: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const surface = dark ? "bg-noir text-ivory" : "bg-paper text-ink";
  const railBorder = dark ? "border-gold/30" : "border-crimson/30";
  const linkColor = dark ? "text-ivory/90 hover:text-gold" : "text-ink-soft hover:text-crimson";

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="ORIGINA navigation"
      aria-hidden={!open}
      inert={!open}
      className={`fixed inset-0 z-40 flex flex-col transition-transform duration-300 lg:hidden ${surface} ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className={`flex shrink-0 items-center justify-between border-b px-5 py-4 sm:px-8 ${dark ? "border-white/15" : "border-rule"}`}>
        <span className="text-[0.9375rem] font-semibold tracking-[0.22em]">ORIGINA</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className={`grid h-10 w-10 place-content-center border ${dark ? "border-gold/40" : "border-rule-strong"}`}
        >
          <span aria-hidden>✕</span>
        </button>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="flex flex-1 flex-col gap-8 overflow-y-auto overscroll-contain px-5 py-6 pb-[max(6rem,env(safe-area-inset-bottom))] sm:px-8"
      >
        {primaryNav.map((item) => {
          const panelLinks = item.panel ? panels[item.panel] : null;

          if (!panelLinks) {
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                aria-current={pathname === item.href ? "page" : undefined}
                className="font-serif text-3xl"
              >
                {item.label}
              </Link>
            );
          }

          return (
            <div key={item.label}>
              <p className={`eyebrow eyebrow--plain mb-3 ${dark ? "eyebrow--dark" : ""}`}>{item.label}</p>
              <div className={`flex flex-col gap-3 border-l pl-4 ${railBorder}`}>
                {panelLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`text-base ${linkColor}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <Link href="/contact" onClick={onClose} className={`${dark ? "btn-gold" : "btn-primary"} mt-2 w-full sm:w-fit`}>
          Contact ORIGINA
        </Link>
      </nav>
    </div>
  );
}
