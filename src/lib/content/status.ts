export type ContentStatus = "current" | "development" | "research" | "future";

export const contentStatusLabels: Record<ContentStatus, string> = {
  current: "Current",
  development: "Development",
  research: "Research",
  future: "Future",
};
