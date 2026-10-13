import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { BeforeAfterCarousel } from "@/features/case-studies/BeforeAfterCarousel";
import { afterImages, beforeImages, Noodles } from "@/features/case-studies/visabuddy/media";

/** UX/UI: the first sketch, the low-fi to high-fi carousel, and the design features. */
export const DesignSection = () => {
  const { t } = useTranslation("visabuddy");

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
        {t('visaBuddy.sections.design')}
      </h2>
      <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
        {t('visaBuddy.content.designDescription')}
      </p>

      {/* Noodles - Starting oldschool */}
      <div className={`${CASE_STUDY_STYLES.glassCard} p-6 mb-8 h-full`}>
        <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
          {t("visaBuddy.content.oldTitle")}
        </h3>
        <div className="w-full h-full enhanced-glass rounded-lg flex items-center justify-center overflow-hidden">
          <img loading="lazy" decoding="async" src={Noodles} alt="Starting oldschool - Sketch/Noodles" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>

      {/* Design Evolution Carousel */}
      <BeforeAfterCarousel
        before={beforeImages}
        after={afterImages}
        beforeLabel={t("visaBuddy.content.beforeAfter.lowFi")}
        afterLabel={t("visaBuddy.content.beforeAfter.highFi")}
        beforeAlt={(index) => `Low-fidelity design ${index + 1}`}
        afterAlt={(index) => `High-fidelity design ${index + 1}`}
      />

      {/* Design Features */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="enhanced-glass p-6 rounded-2xl">
          <h3 className="font-display font-semibold text-primary mb-3 text-lg">
            {t('visaBuddy.content.designFeatures.chatTitle')}
          </h3>
          <p className="text-muted-foreground">
            {t('visaBuddy.content.designFeatures.chatDescription')}
          </p>
        </div>
        <div className="enhanced-glass p-6 rounded-2xl">
          <h3 className="font-display font-semibold text-accent mb-3 text-lg">
            {t('visaBuddy.content.designFeatures.mobileTitle')}
          </h3>
          <p className="text-muted-foreground">
            {t('visaBuddy.content.designFeatures.mobileDescription')}
          </p>
        </div>
      </div>
    </div>
  );
};
