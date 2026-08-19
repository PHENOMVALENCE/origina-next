import type { Metadata } from "next";
import { getSiteUrl, getSocialImageUrl, siteDescription, siteName } from "@/lib/site";

export function createPageMetadata({
  title,
  description = siteDescription,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `${getSiteUrl()}${path}`;
  const image = getSocialImageUrl();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      url,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
