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

export const bMelanoxFocusAreas = [
  "Hyperpigmentation",
  "Post-inflammatory pigmentation",
  "Melasma",
  "Uneven skin tone",
  "Pigment regulation",
  "Barrier preservation",
  "Long-term management",
];

export const bMelanoxProducts = [
  {
    image: "/img/products/bmelanox-01.jpeg",
    alt: "B-Melanox Night Intensive Pigment Corrector with its packaging",
    label: "01 · PRODUCT SYSTEM",
    title: "B-Melanox Corrector",
    text: "A focused product expression emerging from the platform's work in pigmentation science.",
  },
  {
    image: "/img/products/bmelanox-03.jpeg",
    alt: "B-Melanox pigment corrector in a botanical still life",
    label: "02 · MATERIAL LANGUAGE",
    title: "Science, presented clearly",
    text: "Clinical precision is balanced with a warm, considered material language.",
  },
  {
    image: "/img/products/bmelanox-06.jpeg",
    alt: "B-Melanox pigment corrector and carton shown together",
    label: "03 · COMPLETE PRESENTATION",
    title: "Designed as one system",
    text: "Formula, dispensing, protection, and packaging are considered as a unified experience.",
  },
];

export const bMelanoxGalleryViews = [
  { id: "01", src: "/img/products/bmelanox-01.jpeg", alt: "B-Melanox Night Intensive Pigment Corrector with its carton", label: "01" },
  { id: "02", src: "/img/products/bmelanox-04.jpeg", alt: "Material study", label: "02" },
  { id: "03", src: "/img/products/bmelanox-06.jpeg", alt: "Complete presentation", label: "03" },
];

export const bMelanoxFutureExpansion = [
  { num: "I", title: "Professional protocols", text: "Structured approaches for qualified professionals." },
  { num: "II", title: "Clinical programs", text: "Evaluation and long-term management frameworks." },
  { num: "III", title: "Education", text: "Resources for professionals and informed users." },
  { num: "IV", title: "Research", text: "Scientific documentation and future publications." },
];

export const bValenceDomains = [
  { title: "Extracellular Matrix", text: "Collagen, elastin and matrix organization." },
  { title: "Cellular Senescence", text: "Senescent-cell biology and relevance to tissue ageing." },
  { title: "Mitochondrial Biology", text: "Cellular energy and oxidative stress." },
  { title: "Inflammaging", text: "Chronic inflammatory signalling associated with ageing." },
  { title: "Glycation", text: "AGE-related effects on tissue structure and function." },
  { title: "DNA & Cellular Protection", text: "Genomic stability and cellular stress responses." },
  { title: "Longevity Biology", text: "Tissue maintenance and biological resilience." },
];

export const skinSafariAreas = [
  "Dermatology",
  "Skin of colour",
  "Cosmetic science",
  "Ingredient science",
  "Myth correction",
  "Research translation",
  "Clinical education",
  "African scientific innovation",
];

export const noviaStatements = [
  "Beauty is not permission.",
  "Care is not apology.",
  "Ritual is not excess.",
];

export const noviaPillars = [
  { num: "I", title: "Personal care", text: "Textures, scents, and formulations that transform daily body care into considered ritual." },
  { num: "II", title: "Beauty & elegance", text: "Products and experiences that celebrate feminine beauty across expressions and skin tones." },
  { num: "III", title: "Lifestyle & wellness", text: "Intentional living that reaches beyond products into presence, environment, and wellbeing." },
  { num: "IV", title: "Education", text: "Knowledge that helps women understand, care for, and celebrate their own skin and body." },
  { num: "V", title: "Community", text: "A gathering of women who are educated, empowered, and unapologetically alive." },
  { num: "VI", title: "Confidence", text: "Every touchpoint designed to leave the woman experiencing it more powerfully herself." },
];
