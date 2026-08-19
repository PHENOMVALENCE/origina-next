import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const legacyRedirects = [
  { source: "/bmelanox", destination: "/divisions/b-melanox", permanent: true },
  { source: "/bettyworld", destination: "/divisions/bettyworld", permanent: true },
  { source: "/bvalence", destination: "/divisions/bvalence", permanent: true },
  { source: "/divine", destination: "/divisions/divine", permanent: true },
  { source: "/novia", destination: "/divisions/novia", permanent: true },
  { source: "/skin-safari", destination: "/divisions/skin-safari", permanent: true },
  { source: "/evidence", destination: "/science/evidence", permanent: true },
  { source: "/regulatory", destination: "/science/regulatory", permanent: true },
  { source: "/quality", destination: "/science/quality", permanent: true },
  { source: "/responsible-science", destination: "/science/responsible-science", permanent: true },
  { source: "/service.html", destination: "/labs", permanent: true },
  { source: "/project.html", destination: "/divisions/b-melanox", permanent: true },
  { source: "/about.html", destination: "/about", permanent: true },
  { source: "/contact.html", destination: "/contact", permanent: true },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
