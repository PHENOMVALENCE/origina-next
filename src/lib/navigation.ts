export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  panel?: keyof typeof panels;
};

export const primaryNav: NavItem[] = [
  { label: "Institution", href: "/about", panel: "institution" },
  { label: "Science", href: "/science", panel: "science" },
  { label: "Platforms", href: "/platforms", panel: "platforms" },
  { label: "Divisions", href: "/divisions", panel: "divisions" },
  { label: "Evidence", href: "/science/evidence", panel: "evidence" },
  { label: "Founder", href: "/founder" },
  { label: "Future", href: "/future", panel: "future" },
  { label: "Contact", href: "/contact" },
];

export const panels = {
  institution: [
    { label: "About ORIGINA", href: "/about" },
    { label: "Africa Originating", href: "/africa" },
    { label: "Culture & Talent", href: "/culture" },
    { label: "Intellectual Property", href: "/intellectual-property" },
  ] satisfies NavLink[],
  science: [
    { label: "ORIGINA Labs™", href: "/labs" },
    { label: "Biology First™", href: "/biology-first" },
    { label: "Scientific Position", href: "/science#position" },
    { label: "Development Framework", href: "/science#framework" },
    { label: "Research", href: "/labs#research" },
  ] satisfies NavLink[],
  platforms: [
    { label: "Platform overview", href: "/platforms" },
    { label: "BMX-24™", href: "/divisions/b-melanox" },
    { label: "BRP-1™", href: "/intellectual-property" },
  ] satisfies NavLink[],
  divisions: [
    { label: "B-Melanox™", href: "/divisions/b-melanox" },
    { label: "BettyWorld", href: "/divisions/bettyworld" },
    { label: "BValence™", href: "/divisions/bvalence" },
    { label: "DIVINE™", href: "/divisions/divine" },
    { label: "NOVIA™", href: "/divisions/novia" },
    { label: "Skin Safari™", href: "/divisions/skin-safari" },
  ] satisfies NavLink[],
  evidence: [
    { label: "Scientific Evidence", href: "/science/evidence" },
    { label: "Quality & Safety", href: "/science/quality" },
    { label: "Regulatory Science", href: "/science/regulatory" },
    { label: "Clinical Research", href: "/science/evidence#clinical" },
    { label: "Responsible Science", href: "/science/responsible-science" },
  ] satisfies NavLink[],
  future: [
    { label: "Academy", href: "/future#academy" },
    { label: "Ventures", href: "/future#ventures" },
    { label: "Research Institute", href: "/future#research-institute" },
    { label: "Foundation", href: "/future#foundation" },
    { label: "∞ Unnamed Division", href: "/future#unnamed" },
  ] satisfies NavLink[],
};

export const footerNav = {
  institution: {
    title: "Institution",
    links: [
      { label: "About", href: "/about" },
      { label: "Founder", href: "/founder" },
      { label: "Africa Originating", href: "/africa" },
      { label: "Biology First™", href: "/biology-first" },
      { label: "Culture & Talent", href: "/culture" },
    ] satisfies NavLink[],
  },
  science: {
    title: "Science",
    links: [
      { label: "ORIGINA Labs™", href: "/labs" },
      { label: "Scientific Position", href: "/science#position" },
      { label: "Development Framework", href: "/science#framework" },
    ] satisfies NavLink[],
  },
  platforms: {
    title: "Platforms",
    links: [
      { label: "BMX-24™", href: "/divisions/b-melanox" },
      { label: "BRP-1™", href: "/intellectual-property" },
      { label: "Intellectual Property", href: "/intellectual-property" },
    ] satisfies NavLink[],
  },
  divisions: {
    title: "Divisions",
    links: panels.divisions,
  },
  evidence: {
    title: "Evidence & Quality",
    links: panels.evidence,
  },
  future: {
    title: "Future",
    links: [
      { label: "Academy", href: "/future#academy" },
      { label: "Ventures", href: "/future#ventures" },
      { label: "Research Institute", href: "/future#research-institute" },
      { label: "Foundation", href: "/future#foundation" },
      { label: "∞", href: "/future#unnamed" },
    ] satisfies NavLink[],
  },
  connect: {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Collaboration", href: "/contact?subject=scientific#enquiry-form" },
      { label: "Media", href: "/contact?subject=media#enquiry-form" },
      { label: "Updates", href: "/updates" },
    ] satisfies NavLink[],
  },
} as const;

export const footerLegal: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Regulatory", href: "/science/regulatory" },
  { label: "Quality", href: "/science/quality" },
  { label: "Intellectual Property", href: "/intellectual-property" },
];
