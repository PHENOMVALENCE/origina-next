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
  { label: "Divisions", href: "/divisions", panel: "divisions" },
  { label: "Evidence", href: "/science/evidence" },
  { label: "Future", href: "/future", panel: "future" },
  { label: "Contact", href: "/contact" },
];

export const panels = {
  institution: [
    { label: "About", href: "/about" },
    { label: "Biology First™", href: "/biology-first" },
    { label: "Africa Originating", href: "/africa" },
    { label: "Founder", href: "/founder" },
  ] satisfies NavLink[],
  science: [
    { label: "ORIGINA Labs™", href: "/labs" },
    { label: "Biology First™", href: "/biology-first" },
    { label: "Scientific Position", href: "/science#position" },
    { label: "Clinical & Scientific Evidence", href: "/science/evidence" },
    { label: "Regulatory Science", href: "/science/regulatory" },
    { label: "Quality & Safety", href: "/science/quality" },
    { label: "Intellectual Property", href: "/intellectual-property" },
    { label: "Responsible Science", href: "/science/responsible-science" },
  ] satisfies NavLink[],
  divisions: [
    { label: "B-Melanox™", href: "/divisions/b-melanox" },
    { label: "BettyWorld", href: "/divisions/bettyworld" },
    { label: "BValence™", href: "/divisions/bvalence" },
    { label: "DIVINE™", href: "/divisions/divine" },
    { label: "NOVIA™", href: "/divisions/novia" },
    { label: "Skin Safari™", href: "/divisions/skin-safari" },
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
      { label: "Evidence", href: "/science/evidence" },
      { label: "Regulatory", href: "/science/regulatory" },
      { label: "Quality", href: "/science/quality" },
      { label: "Intellectual Property", href: "/intellectual-property" },
    ] satisfies NavLink[],
  },
  divisions: {
    title: "Divisions",
    links: panels.divisions,
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
