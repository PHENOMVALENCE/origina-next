export type RoadmapItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  footnote: string;
  unnamed?: boolean;
};

export const roadmapItems: RoadmapItem[] = [
  {
    id: "academy",
    label: "I · PLANNED",
    title: "ORIGINA Academy",
    description:
      "Develop future innovators, researchers, clinicians, entrepreneurs, and creators. Education · Training · Talent.",
    footnote: "Subject to scientific feasibility, regulatory classification, evidence, and institutional capacity.",
  },
  {
    id: "ventures",
    label: "II · PLANNED",
    title: "ORIGINA Ventures",
    description: "Incubation · Investment · Innovation. Supporting internal and aligned external innovation.",
    footnote: "INCUBATION · ENTERPRISE · IP",
  },
  {
    id: "research-institute",
    label: "III · FUTURE",
    title: "ORIGINA Research Institute",
    description:
      "Advanced Research · Clinical Science across dermatology, skin biology, regenerative technologies, and biotechnology.",
    footnote: "RESEARCH · CLINICAL · PUBLICATION",
  },
  {
    id: "foundation",
    label: "IV · FUTURE",
    title: "ORIGINA Foundation",
    description: "Impact · Education · Opportunity. Scholarships, scientific education, and community development.",
    footnote: "IMPACT · ACCESS · COMMUNITY",
  },
  {
    id: "product-divisions",
    label: "V · FUTURE",
    title: "Future Product & Technology Divisions",
    description:
      "Nutritional science, medical devices, biotechnology, regenerative technologies, and future therapeutic fields.",
    footnote: "SCIENCE · PRODUCTS · HUMAN LIFE",
  },
  {
    id: "unnamed",
    label: "∞ · OPEN POSSIBILITY",
    title: "What has not yet been named",
    description:
      "ORIGINA was deliberately designed to accommodate discoveries that do not yet have a commercial category. We intend to leave room for it.",
    footnote: "CURIOSITY · COURAGE · THE UNKNOWN",
    unnamed: true,
  },
];

export const expansionChecks = [
  "Does it improve human life in a meaningful way?",
  "Can Origina contribute something genuinely distinctive?",
  "Is the evidence, talent, and operating capacity present?",
  "Can excellence be sustained for the long term?",
];
