import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { getSiteUrl, getSocialImageUrl, organizationJsonLd, siteDescription, siteName, siteTagline } from "@/lib/site";
import "./globals.css";

// Editorial serif for headings, display type, and pull quotes. Headings sit at
// 400; 600 is available for the heaviest display use; italic is used by
// `.principle-stack blockquote`.
const sourceSerif = Source_Serif_4({
  variable: "--font-serif-family",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

// Sans for body, interface, and labels. 400 body, 500 nav/labels, 600 buttons
// and eyebrows.
const sourceSans = Source_Sans_3({
  variable: "--font-sans-family",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteName}™ — ${siteTagline}`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  icons: {
    icon: "/img/brand/origina-mark.png",
    apple: "/img/brand/origina-mark.png",
  },
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName}™ — ${siteTagline}`,
    description: siteDescription,
    url: getSiteUrl(),
    images: [{ url: getSocialImageUrl(), alt: `${siteName} — ${siteTagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName}™ — ${siteTagline}`,
    description: siteDescription,
    images: [getSocialImageUrl()],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${sourceSans.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
