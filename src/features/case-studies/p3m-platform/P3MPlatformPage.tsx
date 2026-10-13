import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/motion/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import ScrollToTopButton from "@/features/shell/ScrollToTopButton";
import Navigation from "@/features/shell/Navigation";
import { Goal_1, Goal_4, Goal_5, Goal_5_1, Goal_5_2, Logo, Result } from "@/features/case-studies/p3m-platform/media";
import { RedesignComparisonSection } from "@/features/case-studies/p3m-platform/sections/RedesignComparisonSection";

const P3MPlatformPage = () => {
  const { t } = useTranslation("p3mplatform");

  useScrollReveal();

  const caseStudyData = {
    title: t("p3mPlatform.sections.overview"),
    subtitle: "Redesign of a Brazilian government mineral information platform to improve business decisions and regional development",
    category: t("p3mPlatform.hero.category"),
    year: "2023",
    client: "SGB - Serviço Geológico do Brasil",
    duration: "3 months",
    role: "UX/UI Designer",
    overview: t("p3mPlatform.content.overview"),
    problem: t("p3mPlatform.content.problem"),
    goal: t("p3mPlatform.content.goal"),
    results: t("p3mPlatform.content.resultsText")
  };

  return (
    <div className={CASE_STUDY_STYLES.background}>
      <Navigation />

      {/* Hero Section */}
      <section className={CASE_STUDY_STYLES.heroSection}>
        <div className="max-w-5xl mx-auto px-8">
          <div className={`text-center ${CASE_STUDY_STYLES.scrollReveal} space-y-8`}>
            <span className={CASE_STUDY_STYLES.typography.category}>
              {caseStudyData.category}
            </span>
          </div>

          {/* Logo Image */}
          <div className={`w-full h-[500px] flex items-center justify-center mt-16 mb-20 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <img loading="lazy" decoding="async" src={Logo} alt="P3M Platform Logo" className="h-full object-contain" />
          </div>

          <div className={`flex flex-wrap justify-center gap-x-12 gap-y-6 text-center mt-16 pt-10 border-t border-border/30 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t("p3mPlatform.hero.client")}
              </p>
              <p className="text-foreground font-body font-light">
                {caseStudyData.client}
              </p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t("p3mPlatform.hero.year")}
              </p>
              <p className="text-foreground font-body font-light">
                {caseStudyData.year}
              </p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t("p3mPlatform.hero.duration")}
              </p>
              <p className="text-foreground font-body font-light">
                {caseStudyData.duration}
              </p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t("p3mPlatform.hero.role")}
              </p>
              <p className="text-foreground font-body font-light">
                {caseStudyData.role}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          {/* Overview */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("p3mPlatform.sections.overview")}
            </h2>
            <p className={CASE_STUDY_STYLES.typography.body}>
              {caseStudyData.overview}
            </p>
          </div>

          {/* Problem */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("p3mPlatform.sections.problem")}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {caseStudyData.problem}
            </p>
          </div>

          {/* Goal */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("p3mPlatform.sections.goal")}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {caseStudyData.goal}
            </p>

            {/* First Goal - Original Screens from old version */}
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6 mt-8`}>
              <img loading="lazy" decoding="async" src={Goal_1} alt="Original P3M Platform Screens" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("p3mPlatform.content.originalScreensDescription")}
              </p>
            </div>
          </div>

          <RedesignComparisonSection />

          {/* Menu Simplification */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("p3mPlatform.sections.menuSimplification")}
            </h3>
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6`}>
              <img loading="lazy" decoding="async" src={Goal_4} alt="Menu Relocation Changes" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("p3mPlatform.content.menuDescription")}
              </p>
            </div>
          </div>

          {/* New Dashboard */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("p3mPlatform.sections.newDashboard")}
            </h3>
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6`}>
              <img loading="lazy" decoding="async" src={Goal_5} alt="New Dashboard Sections" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("p3mPlatform.content.dashboardDescription")}
              </p>
            </div>
          </div>

          {/* Quick Search Redesign from old version */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("p3mPlatform.sections.quickSearch")}
            </h3>

            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6 mb-4`}>
              <img loading="lazy" decoding="async" src={Goal_5_1} alt="Quick Search Before" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("p3mPlatform.content.quickSearchBefore")}
              </p>
            </div>

            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6`}>
              <img loading="lazy" decoding="async" src={Goal_5_2} alt="Quick Search After" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("p3mPlatform.content.quickSearchAfter")}
              </p>
            </div>
          </div>

          {/* Final Result from old version */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("p3mPlatform.sections.finalHomepage")}
            </h3>

            <div className='w-full p-6'>
              <img loading="lazy" decoding="async" src={Result} alt="Final Homepage Design" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-10 text-center font-body">
                {t("p3mPlatform.content.finalDescription")}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("p3mPlatform.sections.results")}
            </h2>
            <div className="enhanced-glass p-8 rounded-2xl">
              <p className="text-xl font-body font-medium text-foreground">
                {caseStudyData.results}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}>
            {t("p3mPlatform.sections.nextProject")}
          </h2>
          <Link to="/case-study/awesome-games" className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors leading-tight tracking-tighter">
                {t("p3mPlatform.nextProject.title")}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                {t("p3mPlatform.nextProject.description")}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">
                  {t("p3mPlatform.nextProject.cta")}
                </span>
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  );
};

export default P3MPlatformPage;
