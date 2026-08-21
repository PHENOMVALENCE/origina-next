import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { getSiteUrl, getSocialImageUrl, organizationJsonLd, siteDescription, siteName, siteTagline } from "@/lib/site";
import "./globals.css";

// Only the weights the design system actually uses. Headings and display type
// all sit at 400; italic is used by `.principle-stack blockquote`.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

// 400 body, 500 nav/labels, 600 buttons and eyebrows.
const montserrat = Montserrat({
  variable: "--font-montserrat",
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
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} antialiased`}>
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
