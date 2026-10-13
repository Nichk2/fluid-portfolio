import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/motion/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import ScrollToTopButton from "@/features/shell/ScrollToTopButton";
import Navigation from "@/features/shell/Navigation";
import Footer from "@/features/shell/Footer";
import {
  Color,
  Empathy_map,
  Hifi1,
  Hifi2,
  Ia,
  Lofi1,
  Lofi2,
  Persona,
  Site_map,
  Type,
} from "@/features/case-studies/awesome-games/media";
import { HeroSection } from "@/features/case-studies/awesome-games/sections/HeroSection";
import { OverviewSection } from "@/features/case-studies/awesome-games/sections/OverviewSection";
import { DesignCarousel } from "@/features/case-studies/awesome-games/sections/DesignCarousel";
import { ListItems } from "@/features/case-studies/awesome-games/sections/ListItems";

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

  const testingFindings = getTranslatedArray('awesomeGames.testing.findings');

  // Image data
  const hifiImages = [
    { src: Hifi1, alt: "High Fidelity Design 1" },
    { src: Hifi2, alt: "High Fidelity Design 2" }
  ];

  const lofiImages = [
    { src: Lofi1, alt: "Low Fidelity Design 1" },
    { src: Lofi2, alt: "Low Fidelity Design 2" }
  ];

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

      <HeroSection />

      {/* Content Sections */}
      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          <OverviewSection />

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

          <DesignCarousel title={t('awesomeGames.titles.wireframes')} images={lofiImages} />

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
                    <ListItems items={testingFindings} />
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

          <DesignCarousel title={t('awesomeGames.titles.highFidelity')} images={hifiImages} />

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
