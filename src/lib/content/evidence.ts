// Ported from origina/content/evidence.php

export const evidenceLevels = [
  { id: "hypothesis", label: "Scientific hypothesis" },
  { id: "in-vitro", label: "In-vitro evidence" },
  { id: "ex-vivo", label: "Ex-vivo evidence" },
  { id: "formulation-testing", label: "Formulation testing" },
  { id: "instrumental", label: "Instrumental / biophysical testing" },
  { id: "pilot-human", label: "Pilot human evaluation" },
  { id: "controlled-clinical", label: "Controlled clinical study" },
  { id: "randomized-controlled", label: "Randomized controlled clinical trial" },
  { id: "systematic", label: "Systematic evidence" },
];

export const evidencePrinciples = [
  "A scientific hypothesis is not a clinical result.",
  "A promising formulation is not automatically a proven treatment.",
  "A laboratory mechanism is not automatically evidence of human clinical efficacy.",
];

export const researchRecordPlaceholder = {
  meta: ["Future state", "Planned"],
  title: "Research record architecture",
  text: "Structured records will be published as work reaches appropriate standards for public disclosure.",
};

export const evidenceResearchNote =
  "Future research records will support metadata including research title, platform, evidence level, population, methodology, and publication status. Empty states are preferable to fabricated data.";
