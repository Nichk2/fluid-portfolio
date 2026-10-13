import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/motion/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import ScrollToTopButton from "@/features/shell/ScrollToTopButton";
import Navigation from "@/features/shell/Navigation";
import { HeroSection } from "@/features/case-studies/visabuddy/sections/HeroSection";
import { TrainingSection } from "@/features/case-studies/visabuddy/sections/TrainingSection";
import { DesignSection } from "@/features/case-studies/visabuddy/sections/DesignSection";
import { BackendSection } from "@/features/case-studies/visabuddy/sections/BackendSection";
import { FrontendSection } from "@/features/case-studies/visabuddy/sections/FrontendSection";
import { MetricsSection } from "@/features/case-studies/visabuddy/sections/MetricsSection";

const VisaBuddyPage = () => {
  const { t } = useTranslation("visabuddy");

  useScrollReveal();

  // Get translation data safely
  const getTranslatedArray = (key: string) => {
    const data = t(key, { returnObjects: true });
    return Array.isArray(data) ? data : [];
  };

  return (
    <div className={CASE_STUDY_STYLES.background}>
      <Navigation />

      <HeroSection />

      {/* Content Sections */}
      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          {/* Overview Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.overview')}
            </h2>
            <p className={CASE_STUDY_STYLES.typography.body}>
              {t('visaBuddy.content.overview')}
            </p>
          </div>

          {/* Problem Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.problem')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {t('visaBuddy.content.problem')}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="enhanced-glass p-6 rounded-xl">
                <h4 className="font-display font-semibold text-primary mb-2">
                  {t('visaBuddy.content.problemPoints.pages')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('visaBuddy.content.problemPoints.pagesDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-6 rounded-xl">
                <h4 className="font-display font-semibold text-accent mb-2">
                  {t('visaBuddy.content.problemPoints.updates')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('visaBuddy.content.problemPoints.updatesDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-6 rounded-xl">
                <h4 className="font-display font-semibold text-primary mb-2">
                  {t('visaBuddy.content.problemPoints.decisions')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('visaBuddy.content.problemPoints.decisionsDesc')}
                </p>
              </div>
            </div>
          </div>

          <TrainingSection />

          <DesignSection />

          <BackendSection />

          <FrontendSection />

          <MetricsSection />

          {/* Results Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.results')}
            </h2>
            <div className="space-y-6 mt-8">
              {getTranslatedArray('visaBuddy.content.results').map((result, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 shrink-0"></div>
                  <p className="text-foreground">{String(result)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Note */}
          <div className={`${CASE_STUDY_STYLES.scrollReveal} enhanced-glass p-8 rounded-3xl`}>
            <h3 className="text-2xl font-display italic font-medium text-foreground mb-4">
              {t('visaBuddy.content.quickNote.title')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('visaBuddy.content.quickNote.paragraph1')}
            </p>
            <p className="text-muted-foreground mb-6">
              {t('visaBuddy.content.quickNote.paragraph2')}
            </p>
            <p className="text-primary font-display font-medium">{t('visaBuddy.content.quickNote.signature')}</p>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}>
            {t('visaBuddy.sections.nextProject')}
          </h2>
          <Link to="/case-study/photox" className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors leading-tight tracking-tighter">
                {t('visaBuddy.nextProject.title')}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                {t('visaBuddy.nextProject.description')}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">{t('visaBuddy.nextProject.cta')}</span>
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default VisaBuddyPage;
