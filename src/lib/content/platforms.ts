import type { ContentStatus } from "@/lib/content/status";

export type Platform = {
  id: string;
  name: string;
  subtitle: string;
  status: ContentStatus;
  division: string;
  href: string;
  summary: string;
};

export const platforms: Platform[] = [
  {
    id: "bmx-24",
    name: "BMX-24™",
    subtitle: "Proprietary Pigment Regulation Platform",
    status: "development",
    division: "B-Melanox™",
    href: "/divisions/b-melanox",
    summary:
      "Developed as a proprietary pigment-regulation platform originating from research into non-hydroquinone approaches to hyperpigmentation in skin of colour. Clinical studies are not yet complete.",
  },
  {
    id: "brp-1",
    name: "BRP-1™",
    subtitle: "Proprietary Research Platform",
    status: "research",
    division: "ORIGINA Labs™",
    href: "/intellectual-property",
    summary:
      "An institutional research platform under development within ORIGINA Labs. Described as proprietary — not as patented unless documentation supports such status.",
  },
];
