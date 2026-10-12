/**
 * Shared motion decisions.
 *
 * Durations are seconds so they drop straight into Framer Motion and GSAP.
 * The matching CSS custom properties in `src/index.css` use milliseconds.
 *
 * `easeOutExpo` and GSAP's `power3.out` are the paired "settle" curves.
 * Use the bezier with Framer Motion and CSS. Use `gsapEaseOut` with GSAP.
 */
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const gsapEaseOut = "power3.out" as const;

export const duration = {
  fast: 0.3,
  base: 0.4,
  moderate: 0.6,
  slow: 0.8,
  slower: 1,
  reveal: 1,
  heroTitle: 1.4,
} as const;

/** Default stagger between sibling entrances, in seconds. */
export const stagger = 0.08;
