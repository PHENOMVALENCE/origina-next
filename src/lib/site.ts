export const siteName = "ORIGINA";
export const siteTagline = "Biology First™";
export const siteDescription =
  "ORIGINA is a multi-divisional innovation institution built at the intersection of biology, clinical science, technology, and human wellbeing. Beginning in Africa. Serving the world.";

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? process.env.ORIGINA_SITE_URL ?? "https://origina.co").replace(
    /\/$/,
    "",
  );
}

export const socialImagePath = "/img/founder/founder-07.jpeg";

export function getSocialImageUrl(): string {
  return `${getSiteUrl()}${socialImagePath}`;
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ORIGINA",
  alternateName: "ORIGINA™",
  url: getSiteUrl(),
  foundingDate: "2024",
  slogan: "Biology First™",
  founder: {
    "@type": "Person",
    name: "Dr. Elizabeth Consoli",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
} as const;

/** Public routes included in sitemap.xml */
export const publicRoutes = [
  "",
  "/about",
  "/science",
  "/biology-first",
  "/science/evidence",
  "/science/regulatory",
  "/science/quality",
  "/intellectual-property",
  "/science/responsible-science",
  "/labs",
  "/divisions",
  "/divisions/b-melanox",
  "/divisions/bettyworld",
  "/divisions/bvalence",
  "/divisions/divine",
  "/divisions/novia",
  "/divisions/skin-safari",
  "/founder",
  "/africa",
  "/future",
  "/culture",
  "/updates",
  "/contact",
  "/privacy",
  "/terms",
] as const;
