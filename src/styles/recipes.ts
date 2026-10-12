/**
 * Class recipes for decisions that Tailwind utilities already express,
 * but that were being copied between pages.
 *
 * These strings are the current editorial styles. Change them here;
 * do not paste a new copy into a page.
 */
export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const type = {
  eyebrow: "text-primary font-body font-medium text-sm uppercase tracking-[0.3em]",
  heroTitle:
    "text-7xl md:text-[10rem] font-display italic font-medium text-foreground leading-[0.95] tracking-tight text-balance",
  heroLead:
    "text-xl md:text-3xl text-muted-foreground leading-relaxed font-body font-light text-balance",
  statement:
    "font-display text-3xl md:text-5xl lg:text-6xl leading-[1.25] tracking-tight text-balance",
  homeSectionTitle: "text-4xl md:text-6xl font-display font-medium tracking-tight text-balance",
  homeLead: "text-lg md:text-xl text-muted-foreground font-body font-light",
  contactTitle:
    "text-6xl md:text-8xl lg:text-9xl font-display italic font-medium leading-[0.95] tracking-tight",
  contactLead:
    "text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-body font-light",
  projectTitle:
    "text-3xl md:text-5xl font-display font-medium tracking-tight truncate group-hover:text-primary transition-colors duration-300",
  caseTitle:
    "text-5xl md:text-7xl lg:text-8xl font-display italic font-medium text-foreground tracking-tight leading-[0.95]",
  caseSectionTitle:
    "text-3xl md:text-5xl font-display italic font-medium text-foreground mb-8 tracking-tight",
  caseSubsectionTitle: "text-2xl md:text-3xl font-display font-medium text-foreground mb-6",
  category: "inline-block text-primary font-body font-medium text-sm uppercase tracking-[0.3em] mb-4",
  subtitle:
    "text-xl md:text-2xl text-muted-foreground font-body font-light max-w-3xl mx-auto leading-relaxed",
  body: "text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed",
  small: "text-sm text-muted-foreground font-body",
  quote: "text-2xl md:text-3xl font-display font-medium text-foreground italic",
} as const;

export const layout = {
  page: "max-w-7xl mx-auto px-8",
  wide: "max-w-6xl mx-auto px-8",
  reading: "max-w-5xl mx-auto px-8",
  case: "max-w-7xl mx-auto px-6 md:px-8",
  caseNarrow: "max-w-4xl mx-auto px-6 md:px-8",
  homeSection: "py-32 relative z-10",
  homeSectionLoose: "py-32 md:py-40 relative z-10",
  caseSection: "py-24 relative z-10",
  caseHero: "pt-32 pb-24 relative z-10",
} as const;

export const surfaces = {
  page: "noise-bg min-h-screen bg-background relative z-10",
  card: "bg-card border border-border/30 rounded-2xl",
  elevated:
    "bg-secondary/40 border border-border/20 rounded-2xl hover:border-primary/30 transition-colors duration-500",
  stat: "bg-secondary/40 border border-border/20 rounded-2xl p-6 text-center",
  feature:
    "bg-card border border-border/20 rounded-2xl p-8 hover:border-primary/30 transition-colors duration-500",
  process: "bg-secondary/30 border border-border/20 rounded-2xl p-8",
} as const;

export const buttons = {
  primary: `inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-full font-body font-medium transition-colors duration-300 glow-primary ${focusRing}`,
  secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-4 rounded-full font-body font-medium transition-colors duration-300 ${focusRing}`,
  ghost: `bg-transparent border border-border/50 hover:border-primary/50 text-foreground px-8 py-4 rounded-full font-body font-medium transition-colors duration-300 ${focusRing}`,
  icon: `p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-colors duration-300 ${focusRing}`,
  nav: `hidden md:block bg-primary cursor-pointer text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300 px-6 py-2.5 rounded-full font-body font-medium ${focusRing}`,
  navLink: `block bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300 px-6 py-2.5 rounded-full font-body font-medium ${focusRing}`,
  display: `inline-block bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-500 px-12 md:px-16 py-5 md:py-6 text-lg md:text-xl font-body font-semibold rounded-full glow-primary ${focusRing}`,
} as const;

export const grids = {
  twoColumn: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12",
  threeColumn: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  fourColumn: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8",
} as const;

export const images = {
  hero: "w-full aspect-video rounded-2xl overflow-hidden bg-card border border-border/20",
  feature: "w-full rounded-2xl overflow-hidden bg-card border border-border/20",
  thumbnail: "w-full aspect-square rounded-xl overflow-hidden bg-card border border-border/20",
} as const;

export const carousel = {
  button:
    "absolute top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 border border-border/30 hover:border-primary/50 hover:bg-secondary transition-colors duration-300 z-10",
  dots: "flex justify-center gap-2 mt-6",
  dot: "w-2 h-2 rounded-full bg-muted-foreground/30 transition-all duration-300",
  dotActive: "w-2 h-2 rounded-full bg-primary scale-125",
} as const;

export const tabs = {
  container: "flex gap-2 p-1 bg-secondary/50 rounded-full border border-border/20",
  tab: "px-6 py-2 rounded-full font-body font-medium text-sm transition-colors duration-300",
  tabActive: "bg-primary text-primary-foreground",
  tabInactive: "text-muted-foreground hover:text-foreground",
} as const;
