# Design system

Working reference for this portfolio. The visual identity is the current editorial theme: warm near-black, Fraunces for display, Plus Jakarta Sans for UI, rose and violet used sparingly. This system names those decisions. It does not introduce a second look.

## Where things live

| Concern | Location |
| --- | --- |
| Primitive and semantic tokens, base styles, component CSS | `src/index.css` |
| Repeated class recipes | `src/styles/recipes.ts` |
| Case-study class map | `src/components/CaseStudyTemplate.ts` (re-exports the recipes) |
| Layout primitives | `src/components/layout/` |
| Type primitives | `src/components/typography/` |
| shadcn/Radix controls | `src/components/ui/` |
| App shell (nav, footer, cursor, scroll) | `src/features/shell/` |
| Home page and sections | `src/features/home/` |
| Case studies | `src/features/case-studies/` — shared carousel first, then one folder per project |
| Motion durations and easing | `src/motion/motion.ts` |
| Framer Motion variants | `src/motion/variants.ts` |
| Scroll reveals | `src/motion/useScrollReveal.ts` |
| Lenis + GSAP ticker | `src/contexts/SmoothScrollContext.tsx` |

### Case study folders

Each study lives in `src/features/case-studies/<slug>/` (kebab-case) with at least `<Name>Page.tsx` and `media.ts`. Copy stays in `public/locales/{en,pt}/<namespace>.json`.

Add `sections/` only when it earns its place: the page is hard to navigate (~400+ lines), a block has real logic (tabs, carousels, synced galleries), or a block repeats on the same page. Never `components/`, and no empty `hooks/` or `animations/` folders. Section components call `useTranslation` themselves. The page calls `useScrollReveal()` once.

| Slug | `sections/` | Notes |
| --- | --- | --- |
| `routejudge` | Chapters, charts, tables | `metrics.ts` is generated; do not edit it by hand. Also `format.ts`, `chartTheme.ts`, `useInViewOnce.ts`. |
| `my-holy-books` | Hero, DesignProcess (+ IdeateStep), FinalProduct | Web/mobile and groups/languages tabs live in their sections. |
| `visabuddy` | Hero, Training, Design, Backend, Frontend, Metrics | Only page using `BeforeAfterCarousel`. |
| `awesome-games` | Hero, Overview, DesignCarousel, ListItems | `DesignCarousel` renders both wireframes and high-fidelity. |
| `hybras-collab` | Solution, Testing, DesignEvolution | Before/after keeps its own markup with `useBeforeAfter`. |
| `photox` | Solution, DesignProcess | Same: own before/after markup, shared hook. |
| `p3m-platform` | RedesignComparison | One `useBeforeAfter` drives both galleries; do not split it. |

Shared at `case-studies/` level: `useCarousel.ts` (`useCarousel`, `useBeforeAfter`) and `BeforeAfterCarousel.tsx`. A component moves up here only when two pages share identical markup. Studies never import each other, and the shared layer never imports a study.

There is no `tailwind.config.ts`. Tailwind v4 is configured in CSS through `@tailwindcss/vite`.

## Token layers

### Primitives

Defined on `:root` as `--palette-*`, `--font-family-*`, and `--duration-*`. They are not Tailwind color utilities. Add a primitive only when a new raw value is a real design decision, not a one-off tweak.

Neutrals use hue 285. `--palette-ink` is the warm off-white and is intentionally a different hue.

### Semantic tokens

`--background`, `--foreground`, `--primary`, `--ring`, and the rest of the shadcn names. `@theme inline` maps each one to a Tailwind color (`bg-background`, `text-primary`, `border-border`).

Components should use these utilities. They should not repeat `oklch(...)`.

The site is dark only. `next-themes` is installed and used by the Sonner toaster, but there is no light theme and no toggle. A future light theme should override the semantic variables, not the components.

### Component classes

`.glass-nav`, `.noise-bg`, `.glow-primary`, `.link-underline`, `.scroll-reveal` stay in `index.css` because they are not a single utility. Prefer a recipe or a primitive component before adding another global class.

## Typography and layout

Use the components for home sections:

```tsx
<Section>
  <Container>
    <Eyebrow className="mb-4">Selected work</Eyebrow>
    <Heading>Featured work</Heading>
    <Text variant="lead">A short supporting line.</Text>
  </Container>
</Section>
```

`Section` spacing: `home` (`py-32`), `loose` (`py-32 md:py-40`), `case` (`py-24`), `hero` (`pt-32 pb-24`). Tone: `background`, `card`, `transparent`.

`Container` width: `page` (7xl), `wide` (6xl), `reading` (5xl), `prose` (4xl), `narrow` (3xl), `text` (2xl). Gutter: `home` (`px-8`) or `case` (`px-6 md:px-8`).

`Heading` variants: `hero`, `section`, `contact`, `case`, `caseSection`. Pass `level` for the heading element.

Case-study pages keep using `CASE_STUDY_STYLES`. Those strings come from `src/styles/recipes.ts`, so changing a recipe updates the case studies.

Do not fluid-scale the hero. The display sizes are breakpoint steps (`text-7xl md:text-[10rem]` and the case-study scale). A single `clamp()` would change the current type.

## Buttons

Editorial calls to action use `buttons` from `src/styles/recipes.ts`:

- `primary` — rose pill with glow. About page.
- `display` — the large contact link.
- `nav` / `navLink` — the header call to action.
- `secondary`, `ghost`, `icon` — available to case studies through `CASE_STUDY_STYLES.buttons`.

`src/components/ui/button.tsx` stays the shadcn control (`rounded-md`, focus ring, sizes). The scroll-to-top button uses it and then overrides the shape. Do not fold the pill styles into that component: its base classes (`h-10`, `text-sm`, `rounded-md`) fight the editorial padding.

## Tailwind versus custom CSS

Use Tailwind utilities for layout, color, and type. Use `cn()` from `src/lib/utils.ts` when a component accepts `className`.

Use custom CSS when the style is a pseudo-element, a keyframe, or a runtime token (`@theme inline`). Do not recreate component styling with `@apply`.

`@theme inline` is for values that must follow the semantic variables at runtime. Static decisions (radius, shadow, easing) stay in a normal `@theme` block.

## Adding a token

1. If it is a new raw color or time, add a primitive on `:root`.
2. If components should switch it with a theme, add a semantic variable and a matching `--color-*` (or font) entry in `@theme inline`.
3. If it is a repeated class string, add a recipe. Point the page at the recipe instead of pasting utilities.
4. If only one component needs it, keep the value on that component.

## Motion

| Library | Use it for | Do not use it for |
| --- | --- | --- |
| Framer Motion | Hover, tap, menus, cursor, small enter/exit | Scroll-driven timelines |
| GSAP + ScrollTrigger | Hero timeline, scroll reveals, sequenced section entrances | Button hover |
| Lenis | Smooth wheel scrolling, wired once in `SmoothScrollProvider` | A second scroll library |
| CSS | Focus, underline, color transitions, the `.scroll-reveal` initial state | A second copy of a GSAP tween |

`MotionConfig reducedMotion="user"` is set in `App.tsx`. GSAP hooks and Lenis also check `usePrefersReducedMotion`. CSS `@media (prefers-reduced-motion: reduce)` reveals `.scroll-reveal` immediately so content is not stuck at `opacity: 0`.

Lenis is created in `SmoothScrollContext`, updates ScrollTrigger on scroll, and runs on `gsap.ticker`. It is destroyed on unmount. It does not start when reduced motion is requested. `html { scroll-behavior: smooth }` remains the fallback; the `.lenis-smooth` rule turns that off while Lenis is active.

ScrollTrigger tweens created in `useScrollReveal` are killed on cleanup. Hero and contact timelines use `gsap.context()` and `ctx.revert()`.

Durations in `motion.ts` are seconds. The CSS variables `--duration-*` are milliseconds of the same steps.

## Accessibility

- Target is WCAG 2.2 AA where it applies to this site.
- `:focus-visible` in `@layer base` draws a rose outline. Components that set `outline-none` must keep a `focus-visible:ring-*` replacement. The editorial button recipes include one.
- The mobile menu button exposes `aria-expanded`.
- Do not remove the outline without a visible replacement.
- Reduced motion skips Lenis, magnetic pull, and scroll tweens.
- The custom cursor is limited to fine pointers and is off under reduced motion.

## What is still duplicated

These are known and were left in place on purpose:

- Case-study pages still hand-roll carousels and repeat some heading classes (`font-bold`, `text-4xl md:text-5xl`) instead of `CASE_STUDY_STYLES.typography`.
- Home sections and case studies use different gutters (`px-8` versus `px-6 md:px-8`). Both are named in `layout`.
