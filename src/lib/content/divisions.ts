// Ported from origina/content/divisions.php

export type DivisionStatus = "active" | "research" | "development" | "emerging" | "planned" | "future" | "open";

export const statusLabels: Record<DivisionStatus, string> = {
  active: "ACTIVE",
  research: "RESEARCH",
  development: "DEVELOPMENT",
  emerging: "EMERGING",
  planned: "PLANNED",
  future: "FUTURE",
  open: "OPEN POSSIBILITY",
};

export const divisions = [
  {
    slug: "labs",
    name: "ORIGINA Labs™",
    role: "Research · Formulation · Innovation · IP",
    tagline: "The scientific engine.",
    status: "active" as DivisionStatus,
    href: "/labs",
  },
  {
    slug: "b-melanox",
    name: "B-Melanox™",
    role: "Pigmentation Science",
    tagline: "Scientific pigmentation division.",
    status: "active" as DivisionStatus,
    href: "/divisions/b-melanox",
  },
  {
    slug: "bettyworld",
    name: "BettyWorld",
    role: "Everyday Dermatological Skincare",
    tagline: "Daily care for skin of colour.",
    status: "development" as DivisionStatus,
    href: "/divisions/bettyworld",
  },
  {
    slug: "bvalence",
    name: "BValence™",
    role: "Ageing & Longevity Biology",
    tagline: "Ageing is biology.",
    status: "research" as DivisionStatus,
    href: "/divisions/bvalence",
  },
  {
    slug: "divine",
    name: "DIVINE™",
    role: "Luxury Makeup Science",
    tagline: "Biology-aware colour science.",
    status: "planned" as DivisionStatus,
    href: "/divisions/divine",
  },
  {
    slug: "novia",
    name: "NOVIA™",
    role: "Luxury Body Care",
    tagline: "Formulation engineering for the body.",
    status: "active" as DivisionStatus,
    href: "/divisions/novia",
  },
  {
    slug: "skin-safari",
    name: "Skin Safari™",
    role: "Education · Media · Scientific Communication",
    tagline: "Science should travel.",
    status: "emerging" as DivisionStatus,
    href: "/divisions/skin-safari",
  },
];

export const platforms = [
  {
    name: "BMX-24™",
    subtitle: "Proprietary Pigment Regulation Platform",
    status: "development" as DivisionStatus,
    division: "B-Melanox™",
  },
  {
    name: "BRP-1™",
    subtitle: "Proprietary Research Platform",
    status: "research" as DivisionStatus,
    division: "ORIGINA Labs™",
  },
];
