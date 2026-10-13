import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/motion/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import ScrollToTopButton from "@/features/shell/ScrollToTopButton";
import Navigation from "@/features/shell/Navigation";
import { Websolution } from "@/features/case-studies/my-holy-books/media";
import { HeroSection } from "@/features/case-studies/my-holy-books/sections/HeroSection";
import { DesignProcessSection } from "@/features/case-studies/my-holy-books/sections/DesignProcessSection";
import { FinalProductSection } from "@/features/case-studies/my-holy-books/sections/FinalProductSection";

const MyHolyBooksPage = () => {
  const { t } = useTranslation("myholybooks");

  useScrollReveal();

  const getTranslatedArray = (key: string) => {
    const data = t(`myholybooks.${key}`, { returnObjects: true });
    return Array.isArray(data) ? data : [];
  };

  return (
    <div className={CASE_STUDY_STYLES.background}>
      <Navigation />

      <HeroSection />

      {/* Content Sections */}
      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          {/* Overview */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
          <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t('Overview')}</h2>
          <p className={CASE_STUDY_STYLES.typography.body}>{t('myholybooks.overview')}</p>
          </div>

          {/* Challenge */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("myholybooks.challenge.title")}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
              {t("myholybooks.challenge.content")}
            </p>
            <p className={CASE_STUDY_STYLES.typography.body}>
              <span className="text-primary font-medium">
                {t("myholybooks.challenge.userInsight")}
              </span>
              {t("myholybooks.challenge.userInsightText")}
            </p>
            <div className="my-6"></div>
            <p className={CASE_STUDY_STYLES.typography.body}>
              <span className="text-accent font-medium">
                {t("myholybooks.challenge.howMightWe")}
              </span>
              {t("myholybooks.challenge.howMightWeText")}
            </p>
          </div>

          {/* Solution */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("myholybooks.solution")}
            </h2>
            <p className={CASE_STUDY_STYLES.typography.body}>
              {t("myholybooks.solution")}
            </p>
            {/* Solution Image - Made larger */}
            <div className="mt-8 w-full">
              <img loading="lazy" decoding="async"
                src={Websolution}
                alt="MyHolyBooks solution"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <DesignProcessSection />

          <FinalProductSection />

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("myholybooks.results.title")}
            </h2>
            <div className="space-y-6 mt-8">
              {getTranslatedArray("results.items").map((result, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-foreground">{String(result)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2
            className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            {t("myholybooks.nextProject.title")}
          </h2>
          <Link
            to="/case-study/p3m-platform"
            className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div
              className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors tracking-tighter">
                {t("myholybooks.nextProject.p3mPlatform")}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                {t("myholybooks.nextProject.description")}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">
                  {t("myholybooks.nextProject.cta")}
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

export default MyHolyBooksPage;
