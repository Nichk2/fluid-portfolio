import { chrome as routejudgeChrome, seriesColor as routejudgeSeries } from "@/features/case-studies/routejudge/chartTheme";

/**
 * Chart colors for the VisaBuddy case study.
 *
 * Same roles and the same validated values as the RouteJudge page
 * (routejudge/chartTheme.ts: rose and violet pass the dataviz validator on the
 * card surface, CVD ΔE 15.1), so the two case studies read as one system:
 *   current  - the shipped system, the series the story is about (rose)
 *   compare  - the thing it is compared against (violet)
 *   past     - older versions and v1's claims, de-emphasized on purpose (gray)
 */
export const roleColor = {
  current: routejudgeSeries.qwen3,
  compare: routejudgeSeries.tinyllama,
  past: routejudgeSeries.baseline,
} as const;

export type Role = keyof typeof roleColor;

export const chrome = routejudgeChrome;
