// GSAP-Inspired Case Study Styles
// Centralized styles for all case study pages

const CASE_STUDY_STYLES = {
  // Background with noise texture
  background: "noise-bg min-h-screen bg-background relative z-10",
  
  // Navigation styling
  navigation: "glass-nav border-b border-border/10 backdrop-blur-xl",
  
  // Hero section
  heroSection: "pt-32 pb-24 relative z-10",
  
  // Content sections
  contentSection: "py-24 relative z-10",
  
  // Scroll reveal class
  scrollReveal: "scroll-reveal",
  
  // Glass card effect
  glassCard: "bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl",
  
  // Enhanced glass with hover
  enhancedGlass: "bg-secondary/30 backdrop-blur-sm border border-border/20 rounded-2xl hover:border-primary/30 transition-all duration-500",
  
  // Typography
  typography: {
    // Main title (Hero titles)
    mainTitle: "text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground tracking-tighter leading-tight",
    
    // Section titles
    sectionTitle: "text-3xl md:text-5xl font-display font-bold text-foreground mb-8 tracking-tight",
    
    // Subsection titles
    subsectionTitle: "text-2xl md:text-3xl font-display font-semibold text-foreground mb-6",
    
    // Category label
    category: "inline-block text-primary font-body font-medium text-sm uppercase tracking-widest mb-4",
    
    // Subtitle/description
    subtitle: "text-xl md:text-2xl text-muted-foreground font-body font-light max-w-3xl mx-auto leading-relaxed",
    
    // Body text
    body: "text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed",
    
    // Small text
    small: "text-sm text-muted-foreground font-body",
    
    // Quote/highlight text
    quote: "text-2xl md:text-3xl font-display font-medium text-foreground italic",
  },
  
  // Buttons
  buttons: {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-body font-medium transition-all duration-300 hover:scale-105 glow-primary",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-4 rounded-full font-body font-medium transition-all duration-300",
    ghost: "bg-transparent border border-border/50 hover:border-primary/50 text-foreground px-8 py-4 rounded-full font-body font-medium transition-all duration-300",
    icon: "p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-all duration-300",
  },
  
  // Grid layouts
  grids: {
    twoColumn: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12",
    threeColumn: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    fourColumn: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8",
  },
  
  // Spacing
  spacing: {
    section: "py-24 md:py-32",
    container: "max-w-7xl mx-auto px-6 md:px-8",
    narrowContainer: "max-w-4xl mx-auto px-6 md:px-8",
  },
  
  // Image containers
  images: {
    hero: "w-full aspect-video rounded-2xl overflow-hidden bg-card border border-border/20",
    feature: "w-full rounded-2xl overflow-hidden bg-card border border-border/20",
    thumbnail: "w-full aspect-square rounded-xl overflow-hidden bg-card border border-border/20",
  },
  
  // Cards
  cards: {
    stat: "bg-secondary/30 backdrop-blur-sm border border-border/20 rounded-2xl p-6 text-center",
    feature: "bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500",
    process: "bg-secondary/20 backdrop-blur-sm border border-border/20 rounded-2xl p-8",
  },
  
  // Carousel controls
  carousel: {
    button: "absolute top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/30 hover:border-primary/50 hover:bg-secondary transition-all duration-300 z-10",
    dots: "flex justify-center gap-2 mt-6",
    dot: "w-2 h-2 rounded-full bg-muted-foreground/30 transition-all duration-300",
    dotActive: "w-2 h-2 rounded-full bg-primary scale-125",
  },
  
  // Before/After tabs
  tabs: {
    container: "flex gap-2 p-1 bg-secondary/50 rounded-full backdrop-blur-sm border border-border/20",
    tab: "px-6 py-2 rounded-full font-body font-medium text-sm transition-all duration-300",
    tabActive: "bg-primary text-primary-foreground",
    tabInactive: "text-muted-foreground hover:text-foreground",
  },
};

export default CASE_STUDY_STYLES;
