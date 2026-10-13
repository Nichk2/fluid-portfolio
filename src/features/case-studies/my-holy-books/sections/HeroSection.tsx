import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { Logo } from "@/features/case-studies/my-holy-books/media";

/** Category, logo, subtitle and the project facts. */
export const HeroSection = () => {
  const { t } = useTranslation("myholybooks");

  return (
    <section className={CASE_STUDY_STYLES.heroSection}>
      <div className="max-w-5xl mx-auto px-8">
        <div
          className={`text-center ${CASE_STUDY_STYLES.scrollReveal} space-y-8`}
        >
          <span className={CASE_STUDY_STYLES.typography.category}>
            {t("myholybooks.category")}
          </span>
          {/* Logo */}
          <img loading="lazy" decoding="async"
            src={Logo}
            alt="MyHolyBooks logo"
            className="m-auto w-full max-w-md h-auto p-12"
          />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("myholybooks.subtitle")}
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-x-12 gap-y-6 text-center mt-16 pt-10 border-t border-border/30 ${CASE_STUDY_STYLES.scrollReveal}`}
        >
          <div>
            <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
              {t("myholybooks.clientTitle")}
            </p>
            <p className="text-foreground font-body font-light">
              {t("myholybooks.client")}
            </p>
          </div>
          <div>
            <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
              {t("myholybooks.yearTitle")}
            </p>
            <p className="text-foreground font-body font-light">
              {t("myholybooks.year")}
            </p>
          </div>
          <div>
            <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
              {t("myholybooks.durationTitle")}
            </p>
            <p className="text-foreground font-body font-light">
              {t("myholybooks.duration")}
            </p>
          </div>
          <div>
            <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
              {t("myholybooks.roleTitle")}
            </p>
            <p className="text-foreground font-body font-light">
              {t("myholybooks.role")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
