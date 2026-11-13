import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { Logo, Wordmark } from "@/features/case-studies/routejudge/media";

/** Logo, the one-line premise, and the project facts. */
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
          <div
            role="img"
            aria-label={t("hero.logoAlt")}
            className="mx-auto flex w-fit items-center gap-4 md:gap-6 rounded-2xl bg-[#282A36] pl-2 pr-6 py-2 md:pr-8"
          >
            <img
              src={Logo}
              alt=""
              width={96}
              height={96}
              decoding="async"
              className="w-16 h-16 md:w-24 md:h-24 [image-rendering:pixelated]"
            />
            <img
              src={Wordmark}
              alt=""
              width={297}
              height={30}
              decoding="async"
              className="h-5 md:h-8 w-auto"
            />
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

export default HeroChapter;
