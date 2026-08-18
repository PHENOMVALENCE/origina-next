import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ORIGINA™ — Biology First™",
  description:
    "ORIGINA is a multi-divisional innovation institution built at the intersection of biology, clinical science, technology, and human wellbeing. Beginning in Africa. Serving the world.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} antialiased`}>
      <body className={isAdmin ? "admin-root" : "flex min-h-screen flex-col font-sans"}>
        {isAdmin ? (
          children
        ) : (
          <>
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </>
        )}
      </body>
    </html>
  );
}
