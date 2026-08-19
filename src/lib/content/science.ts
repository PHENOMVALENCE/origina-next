// Ported from origina/content/science.php

export const developmentPathway = [
  "Biological hypothesis",
  "Literature & evidence review",
  "Target / pathway selection",
  "Ingredient & technology selection",
  "Formulation development",
  "Stability & compatibility assessment",
  "Microbiological / safety evaluation",
  "Analytical & quality testing",
  "Regulatory classification",
  "Human evaluation where appropriate",
  "Manufacturing scale-up",
  "Regulatory submission / registration",
  "Post-market monitoring",
];

export const biologyFirst = {
  title: "Biology First™",
  summary: "Every innovation begins by understanding living systems.",
  pillars: [
    {
      name: "Biology First™",
      text: "Every innovation begins by understanding living systems.",
    },
    {
      name: "Systems Thinking™",
      text: "Pigmentation, inflammation, barrier function, ageing, cellular processes and environmental exposure interact.",
    },
    {
      name: "Platform Innovation™",
      text: "Develop scientific platforms capable of supporting multiple products, protocols and applications.",
    },
    {
      name: "Evidence Before Exaggeration",
      text: "The strength of a claim must correspond to the strength of the evidence.",
    },
  ],
};

export const qualityFramework = [
  { title: "Regulatory compliance", text: "Alignment with Tanzania and applicable export-market requirements for each product category." },
  { title: "GMP-aligned manufacturing", text: "Appropriate controls around manufacturing, hygiene, documentation, and quality." },
  { title: "Ingredient compliance", text: "Screening against applicable prohibited and restricted ingredient requirements." },
  { title: "Microbiological quality", text: "Risk-based microbiological testing appropriate to the formulation." },
  { title: "Stability", text: "Physical, chemical, and microbiological stability assessment as appropriate." },
  { title: "Packaging compatibility", text: "Container-closure compatibility and product protection." },
  { title: "Traceability", text: "Batch-level manufacturing documentation." },
  { title: "Claims substantiation", text: "Claims should correspond to evidence." },
  { title: "Post-market surveillance", text: "Complaint handling, adverse-event monitoring, and corrective action where required." },
];

export const labsFunctions = [
  { num: "01", title: "Biological Research", text: "Pathways, mechanisms, biological targets and research questions." },
  { num: "02", title: "Formulation Science", text: "Translate biological hypotheses into stable, manufacturable formulations." },
  { num: "03", title: "Analytical Development", text: "Develop appropriate approaches for characterizing formulations and relevant actives." },
  { num: "04", title: "Safety & Quality", text: "Evaluate quality, stability and safety according to product category and risk." },
  { num: "05", title: "Clinical Evaluation", text: "Design or support appropriate human evaluation where scientifically and regulatorily appropriate." },
  { num: "06", title: "Intellectual Property", text: "Document formulations, inventions, systems, processes, technologies and platforms for appropriate protection." },
  { num: "07", title: "Manufacturing Translation", text: "Translate validated laboratory concepts into repeatable manufacturing." },
];

/** Ported from labs.php — six connected capabilities shown on the Labs page. */
export const labsCapabilities = [
  { title: "Formulate", text: "Design proprietary formulas from first principles for melanin-rich skin biology." },
  { title: "Research", text: "Build the scientific investigation beneath every product claim and protocol." },
  { title: "Evaluate", text: "Test and validate formulas against dermatological standards for skin of colour." },
  { title: "Protect", text: "Document and strategically protect innovation as institutional intellectual property." },
  { title: "Archive", text: "Grow an evidence-based institutional knowledge system around every discovery." },
  { title: "Scale", text: "Bridge laboratory innovation to controlled manufacturing and global distribution." },
];

export const labsContinuum = [
  { step: "01", title: "Question", text: "Define the unmet human or scientific need." },
  { step: "02", title: "Investigate", text: "Build evidence, hypotheses, and design criteria." },
  { step: "03", title: "Formulate", text: "Translate knowledge into a viable intervention." },
  { step: "04", title: "Evaluate", text: "Test performance, safety, and suitability." },
  { step: "05", title: "Scale", text: "Prepare a controlled path to manufacturing." },
];

export const labsFutureFields = [
  "Dermatology",
  "Regenerative technologies",
  "Personal care",
  "Medical devices",
  "Nutritional science",
  "Fields yet to emerge",
];

export type ResearchCategory = "all" | "pigmentation" | "formulation" | "barrier";

export const labsResearchCards = [
  {
    categories: ["pigmentation", "formulation"] as const,
    meta: ["Foundational programme", "Active"],
    title: "BMelanox™ formulation platform",
    text: "Investigating a disciplined product system for visible uneven tone and melanin-rich skin.",
    footer: ["Programme 01", "2024—ongoing"],
  },
  {
    categories: ["pigmentation"] as const,
    meta: ["Research question", "Scoping"],
    title: "Contextual drivers of uneven pigmentation",
    text: "Mapping environmental, behavioural, and biological variables to improve how formulation questions are framed.",
    footer: ["Field note", "In development"],
  },
  {
    categories: ["barrier"] as const,
    meta: ["Protocol", "Development"],
    title: "Barrier-first evaluation framework",
    text: "Building a repeatable approach to evaluating tolerance and suitability without separating efficacy from skin-barrier health.",
    footer: ["Protocol 02", "Internal review"],
  },
  {
    categories: ["formulation"] as const,
    meta: ["Methods", "Active"],
    title: "From formulation logic to controlled scale",
    text: "Documenting the decisions required to protect formula intent as laboratory work moves toward manufacturing.",
    footer: ["Methods brief", "2025—ongoing"],
  },
];

export const systemsThinking = [
  "Pigmentation",
  "Inflammation",
  "Barrier function",
  "Environment",
  "Cellular ageing",
  "Metabolic stress",
];

export const regulatoryCategories = [
  {
    title: "Cosmetics",
    text: "Product categories subject to applicable cosmetic regulatory frameworks, including Tanzania Bureau of Standards (TBS) requirements for cosmetic products placed on the Tanzanian market.",
  },
  {
    title: "Medicines",
    text: "Subject to applicable Tanzania Medicines and Medical Devices Authority (TMDA) frameworks where products meet pharmaceutical regulatory requirements.",
  },
  {
    title: "Medical devices & diagnostics",
    text: "Subject to applicable TMDA frameworks where products meet medical device or diagnostic regulatory requirements—distinct from cosmetic classification.",
  },
  {
    title: "Clinical investigations",
    text: "Regulated clinical research remains conceptually separate from cosmetic product marketing. Clinical trials follow applicable TMDA pathways where required.",
  },
];

export const clinicalResearchPathway =
  "Where regulated clinical research is conducted, the pathway includes applicable regulatory authorization, ethics review, informed consent, participant safety, predefined endpoints, statistical methodology, adverse-event monitoring, data integrity, investigator responsibilities, and appropriate reporting—distinct from cosmetic marketing.";

export const regulatoryDisclaimer =
  "Compliance work and framework alignment do not constitute regulatory approval unless explicitly documented. ORIGINA does not claim TBS Approved, TMDA Approved, or regulator approved status without underlying documentation.";

export const technicalFileArchitecture =
  "The intended internal technical-file architecture includes formula specification, raw-material specifications, supplier qualification, Certificate of Analysis documentation, manufacturing specification, batch records, stability data, microbiological testing, packaging compatibility, safety assessment, claims substantiation, labelling review, regulatory documentation, complaint records, and change-control history.";

export const technicalFileItems = [
  "Formula specification",
  "Raw-material specifications",
  "Supplier qualification",
  "Certificate of Analysis documentation",
  "Manufacturing specification",
  "Batch records",
  "Stability data",
  "Microbiological testing",
  "Packaging compatibility",
  "Safety assessment",
  "Claims substantiation",
  "Labelling review",
  "Regulatory documentation",
  "Complaint / adverse-event records",
  "Change-control history",
] as const;

export const clinicalResearchPrinciples = [
  "Scientifically justified protocols",
  "Ethics review",
  "Informed consent",
  "Participant safety",
  "Predefined endpoints",
  "Statistical methodology",
  "Adverse-event monitoring",
  "Data integrity",
  "Investigator responsibilities",
  "Appropriate reporting",
] as const;

export const ipTypes = [
  {
    title: "Trademarks",
    text: "Brand names and identifiers including ORIGINA™, ORIGINA Labs™, B-Melanox™, BMX-24™, and division marks. ™ does not mean patented.",
  },
  {
    title: "Proprietary technology",
    text: "Platform innovations developed through institutional research.",
  },
  {
    title: "Proprietary know-how",
    text: "Formulation logic, processes, and institutional methods.",
  },
  {
    title: "Patent applications & grants",
    text: "Described only where explicit documentation supports such status.",
  },
];

export const responsibleScienceRejections = [
  "Unsupported clinically proven claims",
  "Exaggerated anti-ageing claims",
  "Disease-treatment claims for products not authorized as medicines",
  "Misleading before/after claims",
  "Unsupported superiority claims",
  "Invented clinical outcomes",
  "Patented language without a patent basis",
  "Regulatory language implying approval that has not occurred",
];
