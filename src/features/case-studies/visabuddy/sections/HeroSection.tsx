import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { Logo } from "@/features/case-studies/visabuddy/media";

/** Logo, the one-line premise, and the project facts. */
export const HeroSection = () => {
  const { t } = useTranslation("visabuddy");

  const meta = [
    { label: t("hero.meta.client"), value: t("hero.meta.clientValue") },
    { label: t("hero.meta.year"), value: t("hero.meta.yearValue") },
    { label: t("hero.meta.role"), value: t("hero.meta.roleValue") },
    { label: t("hero.meta.stack"), value: t("hero.meta.stackValue") },
  ];

  return (
    <section className={CASE_STUDY_STYLES.heroSection}>
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className={`text-center ${CASE_STUDY_STYLES.scrollReveal} space-y-8`}>
          <span className={CASE_STUDY_STYLES.typography.category}>{t("hero.category")}</span>
          <div className="m-auto w-64 h-24 rounded-2xl flex items-center justify-center p-4">
            <img decoding="async" src={Logo} alt={t("hero.logoAlt")} className="max-w-full max-h-full object-contain" />
          </div>
          <p className="text-2xl md:text-4xl font-display italic text-primary">{t("hero.subtitle")}</p>
          <p className={CASE_STUDY_STYLES.typography.subtitle}>{t("hero.lead")}</p>
        </div>

        <dl
          className={`flex flex-wrap justify-center gap-x-12 gap-y-6 text-center mt-16 pt-10 border-t border-border/30 ${CASE_STUDY_STYLES.scrollReveal}`}
        >
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-primary font-body text-xs uppercase tracking-widest mb-2">{item.label}</dt>
              <dd className="text-foreground font-body font-light">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default HeroSection;
