import { createHash } from "node:crypto";

export function hashVisitor(ip: string): string {
  const day = new Date().toISOString().slice(0, 10);
  return createHash("sha256").update(`${ip}|${day}|origina-metrics`).digest("hex");
}
