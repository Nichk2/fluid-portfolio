import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { Front, FramerMotion, ReactLogo, Tailwind, Typescript } from "@/features/case-studies/visabuddy/media";

/** Frontend demo and the UI stack. */
export const FrontendSection = () => {
  const { t } = useTranslation("visabuddy");

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
        {t('visaBuddy.sections.frontend')}
      </h2>
      <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
        {t('visaBuddy.content.frontendDescription')}
      </p>

      {/* Frontend GIF Demonstration */}
      <div className="mb-8">
        <div className={`${CASE_STUDY_STYLES.glassCard} p-4 mb-6`}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <div className="w-full h-64 enhanced-glass rounded-lg flex items-center justify-center overflow-hidden">
                <img loading="lazy" decoding="async" src={Front} alt="Frontend Demonstration" className="w-full h-full object-fill" />
              </div>
            </div>
            <div className="md:w-1/3">
              <h4 className="font-display font-semibold text-primary mb-3 text-lg">
                {t('visaBuddy.content.frontendDemoTitle')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t('visaBuddy.content.frontendDemoDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Frontend Tech Stack */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="enhanced-glass p-4 rounded-xl text-center">

            <img loading="lazy" decoding="async" src={ReactLogo} alt="React" className="w-14 m-auto" />

          <h4 className="font-display font-semibold text-primary">
            {t('visaBuddy.content.frontendTech.react')}
          </h4>
          <p className="text-xs text-muted-foreground">
            {t('visaBuddy.content.frontendTech.reactDesc')}
          </p>
        </div>
        <div className="enhanced-glass p-4 rounded-xl text-center">

            <img loading="lazy" decoding="async" src={Typescript} alt="TypeScript" className="w-14 mb-1 m-auto" />

          <h4 className="font-display font-semibold text-accent">
            {t('visaBuddy.content.frontendTech.typescript')}
          </h4>
          <p className="text-xs text-muted-foreground">
            {t('visaBuddy.content.frontendTech.typescriptDesc')}
          </p>
        </div>
        <div className="enhanced-glass p-4 rounded-xl text-center">

            <img loading="lazy" decoding="async" src={Tailwind} alt="Tailwind CSS" className="w-14 h-14 m-auto" />

          <h4 className="font-display font-semibold text-primary">
            {t('visaBuddy.content.frontendTech.tailwind')}
          </h4>
          <p className="text-xs text-muted-foreground">
            {t('visaBuddy.content.frontendTech.tailwindDesc')}
          </p>
        </div>
        <div className="enhanced-glass p-4 rounded-xl text-center">

            <img loading="lazy" decoding="async" src={FramerMotion} alt="Framer Motion" className="w-14 h-14 m-auto" />

          <h4 className="font-display font-semibold text-accent">
            {t('visaBuddy.content.frontendTech.framer')}
          </h4>
          <p className="text-xs text-muted-foreground">
            {t('visaBuddy.content.frontendTech.framerDesc')}
          </p>
        </div>
      </div>
    </div>
  );
};
