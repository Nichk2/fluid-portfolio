import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/motion/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import ScrollToTopButton from "@/features/shell/ScrollToTopButton";
import Navigation from "@/features/shell/Navigation";
import { logo_photox, Oldphotox, Photox1 } from "@/features/case-studies/photox/media";
import { SolutionSection } from "@/features/case-studies/photox/sections/SolutionSection";
import { DesignProcessSection } from "@/features/case-studies/photox/sections/DesignProcessSection";

const PhotoxPage = () => {
  const { t } = useTranslation("photox");

  useScrollReveal();

  const getTranslatedArray = (key: string) => {
    const data = t(key, { returnObjects: true });
    return Array.isArray(data) ? data : [];
  };

  return (
    <div className={CASE_STUDY_STYLES.background}>
      <Navigation />

      {/* Hero Section */}
      <section className={CASE_STUDY_STYLES.heroSection}>
        <div className="max-w-5xl mx-auto px-8">
          <div className={`text-center ${CASE_STUDY_STYLES.scrollReveal} space-y-8`}>
            <span className={CASE_STUDY_STYLES.typography.category}>
              {t("photox.category")}
            </span>
            <img loading="lazy" decoding="async" src={logo_photox} alt="logo" className="p-20 m-auto w-full" />
          </div>

          <div className={`flex flex-wrap justify-center gap-x-12 gap-y-6 text-center mt-16 pt-10 border-t border-border/30 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">{t("photox.client")}</p>
              <p className="text-foreground font-body font-light">PHOTOX Digital</p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">{t("photox.year")}</p>
              <p className="text-foreground font-body font-light">2024</p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">{t("photox.duration2")}</p>
              <p className="text-foreground font-body font-light">{t("photox.duration")}</p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">{t("photox.role")}</p>
              <p className="text-foreground font-body font-light">Lead UX/UI Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          {/* Overview */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t("photox.title1")}</h2>
            <p className={CASE_STUDY_STYLES.typography.body}>{t("photox.overview")}</p>
          </div>

          {/* Challenge */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t("photox.title2")}</h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>{t("photox.challenge")}</p>
            <img loading="lazy" decoding="async" src={Oldphotox} alt="old" className="max-w-fill" /> 

            <div className="mt-12">
              <h3 className={`${CASE_STUDY_STYLES.typography.subtitle} font-semibold mb-8 text-primary`}>
                {t("photox.goals.title")}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                {getTranslatedArray("photox.goals.items").map((goal, index) => (
                  <li key={index} className={CASE_STUDY_STYLES.typography.body}>{String(goal)}</li>
                ))}
              </ul>
            </div>
          </div>

          <SolutionSection />

          <DesignProcessSection />

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t("photox.results.title")}</h2>
            <div className="space-y-6 mt-8">
              {getTranslatedArray("photox.results.items").map((result, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-foreground">{String(result)}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <img loading="lazy" decoding="async" src={Photox1} alt="final" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}>
            {t("photox.nextProject")}
          </h2>
          <Link to="/case-study/hybras-collab" className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors tracking-tighter">
                {t("photox.projectLabel")}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                {t("photox.descriptionLabel")}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">{t("photox.viewProject")}</span>
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

export default PhotoxPage;
