import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { Logo } from "@/features/case-studies/routejudge/media";

/** Title, the one-line premise, and the project facts, same pattern as the other case studies. */
export const HeroChapter = () => {
  const { t } = useTranslation("routejudge");

  const meta = [
    { label: t("hero.meta.client"), value: t("hero.meta.clientValue") },
    { label: t("hero.meta.year"), value: "2026" },
    { label: t("hero.meta.role"), value: t("hero.meta.roleValue") },
    { label: t("hero.meta.stack"), value: t("hero.meta.stackValue") },
  ];

  return (
    <section className={CASE_STUDY_STYLES.heroSection}>
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className={`text-center ${CASE_STUDY_STYLES.scrollReveal} space-y-8`}>
          <span className={CASE_STUDY_STYLES.typography.category}>{t("hero.category")}</span>
          {/* Pixel art: `image-rendering: pixelated` keeps the edges crisp when the browser scales it. */}
          <img
            src={Logo}
            alt={t("hero.logoAlt")}
            width={160}
            height={160}
            decoding="async"
            className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-2xl [image-rendering:pixelated]"
          />
          <h1 className={CASE_STUDY_STYLES.typography.mainTitle}>RouteJudge</h1>
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

export default HeroChapter;
