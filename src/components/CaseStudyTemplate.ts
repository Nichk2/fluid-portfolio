import {
  buttons,
  carousel,
  grids,
  images,
  layout,
  surfaces,
  tabs,
  type,
} from "@/styles/recipes";

/**
 * Class map consumed by the case-study pages.
 * The values live in `src/styles/recipes.ts` so home and case studies share them.
 */
const CASE_STUDY_STYLES = {
  background: surfaces.page,
  navigation: "glass-nav border-b border-border/10",
  heroSection: layout.caseHero,
  contentSection: layout.caseSection,
  scrollReveal: "scroll-reveal",
  glassCard: surfaces.card,
  enhancedGlass: surfaces.elevated,

  typography: {
    mainTitle: type.caseTitle,
    sectionTitle: type.caseSectionTitle,
    subsectionTitle: type.caseSubsectionTitle,
    category: type.category,
    subtitle: type.subtitle,
    body: type.body,
    small: type.small,
    quote: type.quote,
  },

  buttons,
  grids,

  spacing: {
    section: "py-24 md:py-32",
    container: layout.case,
    narrowContainer: layout.caseNarrow,
  },

  images,

  cards: {
    stat: surfaces.stat,
    feature: surfaces.feature,
    process: surfaces.process,
  },

  carousel,
  tabs,
};

export default CASE_STUDY_STYLES;
