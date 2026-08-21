export type RoadmapItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  footnote: string;
  unnamed?: boolean;
  focusAreas?: readonly string[];
};

export const roadmapItems: RoadmapItem[] = [
  {
    id: "academy",
    label: "I · PLANNED",
    title: "ORIGINA Academy",
    description:
      "Develop future innovators, researchers, clinicians, entrepreneurs, and creators. Education · Training · Talent.",
    footnote: "Subject to scientific feasibility, regulatory classification, evidence, and institutional capacity.",
    focusAreas: [
      "Researchers",
      "Clinicians",
      "Formulators",
      "Scientists",
      "Entrepreneurs",
      "Innovators",
      "Creators",
    ],
  },
  {
    id: "ventures",
    label: "II · PLANNED",
    title: "ORIGINA Ventures",
    description: "Incubation · Investment · Innovation. Supporting internal and aligned external innovation.",
    footnote: "Does not imply that an operating investment fund currently exists unless explicitly confirmed.",
    focusAreas: ["Incubation", "Strategic partnerships", "Aligned external innovators", "Institutional IP pathways"],
  },
  {
    id: "research-institute",
    label: "III · FUTURE",
    title: "ORIGINA Research Institute",
    description:
      "Advanced Research · Clinical Science across dermatology, skin biology, regenerative technologies, and biotechnology.",
    footnote: "Future institutional development — not presented as an operating entity unless established.",
    focusAreas: [
      "Dermatology",
      "Skin biology",
      "Regenerative technologies",
      "Ageing biology",
      "Biotechnology",
      "Clinical science",
      "Future therapeutic technologies",
    ],
  },
  {
    id: "foundation",
    label: "IV · FUTURE",
    title: "ORIGINA Foundation",
    description: "Impact · Education · Opportunity. Scholarships, scientific education, and community development.",
    footnote: "Planned institutional direction — distinct from current operating divisions.",
    focusAreas: ["Scholarships", "Scientific education", "Community development", "Access to knowledge", "Future African innovators"],
  },
  {
    id: "product-divisions",
    label: "V · FUTURE",
    title: "Future Product & Technology Divisions",
    description:
      "Nutritional science, medical devices, biotechnology, regenerative technologies, and future therapeutic fields.",
    footnote: "Subject to scientific feasibility, regulatory classification, and institutional capacity.",
    focusAreas: [
      "Nutritional science",
      "Medical devices",
      "Biotechnology",
      "Regenerative technologies",
      "Personal health technologies",
      "Future therapeutic fields",
    ],
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
