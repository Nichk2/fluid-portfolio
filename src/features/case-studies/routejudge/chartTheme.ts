/**
 * Chart colors for the RouteJudge case study.
 *
 * Recharts writes colors into SVG attributes, which can't resolve CSS custom
 * properties, so the values are concrete hex here. They derive from the
 * portfolio tokens (src/index.css) but are re-stepped for data use:
 *
 * The brand rose and violet both sit at OKLCH L 0.72 with nearby hues, which
 * is fine for accents but fails as two chart series (normal-vision ΔE 10.7,
 * protan 6.6). Checked with the dataviz palette validator on the card surface
 * (#0f0f16, dark mode); the pair below passes every check: lightness band,
 * chroma floor, CVD separation ΔE 15.1 (protan), normal vision ΔE 20.6, and
 * >= 3:1 contrast. Only used on this page, so the values stay here rather
 * than becoming global primitives (design-system.md, "Adding a token" rule 4).
 */
export const seriesColor = {
  /** Deployed model, the series the story is about: oklch(0.66 0.14 355), a deeper brand rose. */
  qwen3: "#d36a96",
  /** Comparison model: oklch(0.52 0.16 295), a deeper brand violet. */
  tinyllama: "#7250ba",
  /** Old model, de-emphasized on purpose: --palette-neutral-400. */
  baseline: "#7f7f89",
} as const;

/** Recessive chart chrome, from the semantic tokens. */
export const chrome = {
  grid: "#23232a", // --border (neutral-700): hairline gridlines and axes
  axisText: "#7f7f89", // --muted-foreground (neutral-400)
  ink: "#edebe5", // --foreground (palette-ink): values and labels
  surface: "#0f0f16", // --card (neutral-850): gap/ring color around marks
} as const;

export type ModelKey = keyof typeof seriesColor;
