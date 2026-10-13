import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { Logo } from "@/features/case-studies/visabuddy/media";

/** Category, logo and the project facts. */
export const HeroSection = () => {
  const { t } = useTranslation("visabuddy");

  const heroMeta = [
    { label: t("visaBuddy.hero.client"), value: "Personal Project" },
    { label: t("visaBuddy.hero.year"), value: "2025" },
    { label: t("visaBuddy.hero.duration"), value: "3 weeks" },
    { label: t("visaBuddy.hero.role"), value: "Full Stack Developer, AI Engineer, UX/UI Designer" },
  ];

  return (
    <section className={CASE_STUDY_STYLES.heroSection}>
      <div className="max-w-5xl mx-auto px-8">
        <div className={`text-center ${CASE_STUDY_STYLES.scrollReveal} space-y-8`}>
          <span className={CASE_STUDY_STYLES.typography.category}>
            {t('visaBuddy.hero.category')}
          </span>
          {/* VisaBuddy Logo */}
          <div className="m-auto w-64 h-24 rounded-2xl flex items-center justify-center p-4">
            <img loading="lazy" decoding="async" src={Logo} alt="VisaBuddy Logo" className="max-w-full max-h-full object-contain" />
          </div>
        </div>

        {/* Project Meta */}
        <div className={`flex flex-wrap justify-center gap-x-12 gap-y-6 text-center mt-16 pt-10 border-t border-border/30 ${CASE_STUDY_STYLES.scrollReveal}`}>
          {heroMeta.map((item) => (
            <div key={item.label}>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">{item.label}</p>
              <p className="text-foreground font-body font-light">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
