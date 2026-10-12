import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/motion/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import ScrollToTopButton from "@/features/shell/ScrollToTopButton";
import Navigation from "@/features/shell/Navigation";
import Footer from "@/features/shell/Footer";
import { useCarousel } from "@/features/case-studies/useCarousel";
import {
  Color,
  Empathy_map,
  Hifi1,
  Hifi2,
  Ia,
  Lofi1,
  Lofi2,
  Logo,
  Persona,
  Process,
  Site_map,
  Type,
} from "@/features/case-studies/awesome-games/media";

interface KeySection {
  emoji: string;
  title: string;
  content: string | string[];
}

interface ProcessStep {
  title: string;
  description?: string;
  items?: string[];
}

const AwesomeGamesPage = () => {
  const { t } = useTranslation('awesomegames');
  useScrollReveal();

  // Get translated content
  const getTranslatedArray = (key: string): string[] => {
    try {
      const result = t(key, { returnObjects: true });
      return Array.isArray(result)
        ? result.filter((item): item is string => typeof item === "string")
        : [];
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return [];
    }
  };

  const keySections: KeySection[] = [
    {
      emoji: "🤳🏻",
      title: t('awesomeGames.keySections.product.title'),
      content: t('awesomeGames.keySections.product.content')
    },
    {
      emoji: "🧑🏻‍💻",
      title: t('awesomeGames.keySections.responsibilities.title'),
      content: getTranslatedArray('awesomeGames.keySections.responsibilities.content')
    },
    {
      emoji: "😵‍💫",
      title: t('awesomeGames.keySections.problem.title'),
      content: t('awesomeGames.keySections.problem.content')
    },
    {
      emoji: "🎯",
      title: t('awesomeGames.keySections.goal.title'),
      content: t('awesomeGames.keySections.goal.content')
    },
    {
      emoji: "🙋🏻‍♂️",
      title: t('awesomeGames.keySections.role.title'),
      content: t('awesomeGames.keySections.role.content')
    },
    {
      emoji: "⏰",
      title: t('awesomeGames.keySections.duration.title'),
      content: t('awesomeGames.keySections.duration.content')
    }
  ];

  const testingFindings = getTranslatedArray('awesomeGames.testing.findings');
  const painPoints = getTranslatedArray('awesomeGames.process.steps.2.items');

  const getProcessSteps = (): ProcessStep[] => {
    try {
      return [
        {
          title: t('awesomeGames.process.steps.0.title'),
          description: t('awesomeGames.process.steps.0.description'),
          items: getTranslatedArray('awesomeGames.process.steps.0.items')
        },
        {
          title: t('awesomeGames.process.steps.1.title'),
          description: t('awesomeGames.process.steps.1.description')
        },
        {
          title: t('awesomeGames.process.steps.2.title'),
          items: painPoints
        }
      ];
    } catch (error) {
      console.error('Error getting process steps:', error);
      return [];
    }
  };

  const processSteps = getProcessSteps();

  // Image data
  const hifiImages = [
    { src: Hifi1, alt: "High Fidelity Design 1" },
    { src: Hifi2, alt: "High Fidelity Design 2" }
  ];

  const lofiImages = [
    { src: Lofi1, alt: "Low Fidelity Design 1" },
    { src: Lofi2, alt: "Low Fidelity Design 2" }
  ];

  const hifi = useCarousel(hifiImages.length);
  const lofi = useCarousel(lofiImages.length);

  // Render functions
  const renderListItems = (items: string[] | string) => {
    if (!items) return null;
    const itemsArray = Array.isArray(items) ? items : [items];
    
    return itemsArray.map((item, index) => (
      <li key={`list-item-${index}`} className="text-muted-foreground font-body">
        {item}
      </li>
    ));
  };

  const renderIntroduction = () => {
    try {
      const introData = t('awesomeGames.introduction', { returnObjects: true });
      const introArray = Array.isArray(introData) ? introData : [introData];
      
      return introArray.map((paragraph: string, index: number) => (
        <p key={`intro-${index}`} className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body font-light mb-6">
          {paragraph}
        </p>
      ));
    } catch (error) {
      console.error('Error rendering introduction:', error);
      return <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body font-light mb-6">Introduction content unavailable</p>;
    }
  };

  const renderKeyTakeaways = () => {
    try {
      const takeawaysData = t('awesomeGames.keyTakeaways', { returnObjects: true });
      const takeawaysArray = Array.isArray(takeawaysData) ? takeawaysData : [takeawaysData];
      
      return takeawaysArray.map((paragraph: string, index: number) => (
        <p key={`takeaway-${index}`} className="text-xl text-muted-foreground font-body mb-6">
          {paragraph}
        </p>
      ));
    } catch (error) {
      console.error('Error rendering takeaways:', error);
      return <p className="text-xl text-muted-foreground font-body mb-6">Key takeaways content unavailable</p>;
    }
  };

  return (
    <div className={CASE_STUDY_STYLES.background}>
      <Navigation />

      {/* Hero Section */}
      <section className={CASE_STUDY_STYLES.heroSection}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center scroll-reveal space-y-8">
            <span className="text-sm text-accent font-body font-medium tracking-widest uppercase">
              {t('awesomeGames.meta.category')}
            </span>
          </div>

          {/* Logo Image */}
          <div className={`w-full h-[500px] rounded-3xl flex items-center justify-center mt-16 mb-20 ${CASE_STUDY_STYLES.scrollReveal} overflow-hidden`}>
            <img loading="lazy" decoding="async" 
              src={Logo} 
              alt="AwesomeGames App Interface"
              className="w-full h-full object-contain"
            />
          </div>

          <div className={`flex flex-wrap justify-center gap-x-12 gap-y-6 text-center pt-10 border-t border-border/30 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t('awesomeGames.titles.client')}
              </p>
              <p className="text-foreground font-body font-light">
                {t('awesomeGames.meta.client')}
              </p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t('awesomeGames.titles.year')}
              </p>
              <p className="text-foreground font-body font-light">
                {t('awesomeGames.meta.year')}
              </p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t('awesomeGames.titles.duration')}
              </p>
              <p className="text-foreground font-body font-light">
                {t('awesomeGames.meta.duration')}
              </p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t('awesomeGames.titles.role')}
              </p>
              <p className="text-foreground font-body font-light">
                {t('awesomeGames.meta.role')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          {/* Introduction */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            {renderIntroduction()}
          </div>

          {/* Key Sections with Emojis */}
          <div className={`${CASE_STUDY_STYLES.scrollReveal} space-y-8`}>
            {keySections.map((section, index) => (
              <div key={`section-${index}`} className="enhanced-glass p-8 rounded-2xl">
                <h3 className="text-2xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                  <span>{section.emoji}</span> {section.title}
                </h3>
                {typeof section.content === 'string' ? (
                  <p className="text-muted-foreground font-body">{section.content}</p>
                ) : (
                  <ul className="list-disc pl-5 space-y-2">
                    {renderListItems(section.content)}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Process Card */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <div className="enhanced-glass p-8 rounded-2xl">
              <img loading="lazy" decoding="async"
                src={Process}
                alt="Design Process"
                className="w-full h-auto rounded-lg mb-6"
              />
              <p className="text-muted-foreground font-body mb-6">
                {t('awesomeGames.process.description')}
              </p>
              
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={`process-step-${index}`}>
                    <h4 className="text-xl font-display font-semibold text-primary mb-2">
                      {step.title}
                    </h4>
                    {step.description && (
                      <p className="text-muted-foreground font-body mb-2">
                        {step.description}
                      </p>
                    )}
                    {step.items && (
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-body">
                        {renderListItems(step.items)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Persona */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('awesomeGames.titles.userPersona')}
            </h2>
            <div className="p-4">
              <img loading="lazy" decoding="async"
                src={Persona}
                alt="User Persona"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Site Map */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('awesomeGames.titles.siteMap')}
            </h2>
            <div className="p-4">
              <img loading="lazy" decoding="async"
                src={Site_map}
                alt="Site Map"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Information Architecture */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('awesomeGames.titles.informationArchitecture')}
            </h2>
            <div className="p-4">
              <img loading="lazy" decoding="async"
                src={Ia}
                alt="Information Architecture"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Wireframes */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('awesomeGames.titles.wireframes')}
            </h2>
            <div className="relative w-full overflow-hidden rounded-2xl h-[500px]">
              <div className="relative h-full w-full overflow-hidden">
                {lofiImages.map((image, index) => (
                  <div
                    key={`lofi-${index}`}
                    className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                      lofi.index === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img loading="lazy" decoding="async"
                      src={image.src}
                      alt={image.alt}
                      className="max-h-full max-w-full object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={lofi.previous}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={lofi.next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {lofiImages.map((_, index) => (
                  <button
                    key={`lofi-indicator-${index}`}
                    onClick={() => lofi.goTo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      lofi.index === index ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Testing */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('awesomeGames.titles.usabilityTesting')}
            </h2>
            <div className="enhanced-glass p-8 rounded-2xl mb-8">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-display font-semibold text-primary mb-2">
                    {t('awesomeGames.testing.studyType')}
                  </h4>
                  <p className="text-muted-foreground font-body">
                    {t('awesomeGames.testing.moderated')}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold text-primary mb-2">
                    {t('awesomeGames.testing.participants')}
                  </h4>
                  <p className="text-muted-foreground font-body">
                    5
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold text-primary mb-2">
                    {t('awesomeGames.testing.ageRange')}
                  </h4>
                  <p className="text-muted-foreground font-body">
                    23 - 30
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold text-primary mb-2">
                    {t('awesomeGames.testing.length')}
                  </h4>
                  <p className="text-muted-foreground font-body">
                    15-20 min
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-display font-semibold text-primary mb-4">
                    {t('awesomeGames.testing.keyFindings')}
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {renderListItems(testingFindings)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-display font-semibold text-primary mb-4">
                    {t('awesomeGames.testing.userQuote')}
                  </h4>
                  <blockquote className="italic text-muted-foreground font-body">
                    {t('awesomeGames.testing.quote')}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Aggregated Empathy Map */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('awesomeGames.titles.empathyMap')}
            </h2>
            <div className="p-4 rounded-2xl">
              <img loading="lazy" decoding="async"
                src={Empathy_map}
                alt="Empathy Map"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Style Guide */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('awesomeGames.titles.styleGuide')}
            </h2>
            <div className="p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                {t('awesomeGames.styleGuide.colors')}
              </h3>
              <img loading="lazy" decoding="async"
                src={Color}
                alt="Color Palette"
                className="w-full h-auto rounded-lg mb-8"
              />

              <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                {t('awesomeGames.styleGuide.typography')}
              </h3>
              <img loading="lazy" decoding="async"
                src={Type}
                alt="Typography"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* High Fidelity Designs */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('awesomeGames.titles.highFidelity')}
            </h2>
            <div className="relative w-full overflow-hidden rounded-2xl h-[500px]">
              <div className="relative h-full w-full overflow-hidden">
                {hifiImages.map((image, index) => (
                  <div
                    key={`hifi-${index}`}
                    className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                      hifi.index === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img loading="lazy" decoding="async"
                      src={image.src}
                      alt={image.alt}
                      className="max-h-full max-w-full object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={hifi.previous}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={hifi.next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {hifiImages.map((_, index) => (
                  <button
                    key={`hifi-indicator-${index}`}
                    onClick={() => hifi.goTo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      hifi.index === index ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('awesomeGames.titles.keyTakeaways')}
            </h2>
            <div className="enhanced-glass p-8 rounded-2xl">
              {renderKeyTakeaways()}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}>
            {t('common.nextProject')}
          </h2>
          <Link to="/case-study/visabuddy" className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-[1.02] transition-all duration-500`}>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors tracking-tighter">
                {t('awesomeGames.nextProject.title')}
              </h3>
              <p className="text-muted-foreground mb-8 text-lg md:text-xl font-body font-light">
                {t('awesomeGames.nextProject.description')}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">
                  {t('common.viewCaseStudy')}
                </span>
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AwesomeGamesPage;