import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { Logo } from "@/features/case-studies/awesome-games/media";

/** Category, app image and the project facts. */
export const HeroSection = () => {
  const { t } = useTranslation('awesomegames');

  return (
    <section className={CASE_STUDY_STYLES.heroSection}>
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center scroll-reveal space-y-8">
          <span className="text-sm text-accent font-body font-medium tracking-widest uppercase">
            {t('awesomeGames.meta.category')}
          </span>
        </div>

        {/* Logo Image */}
        <div className={`w-full h-[500px] rounded-3xl flex items-center justify-center mt-16 mb-20 ${CASE_STUDY_STYLES.scrollReveal} overflow-hidden`}>
          <img loading="lazy" decoding="async" 
            src={Logo} 
            alt="AwesomeGames App Interface"
            className="w-full h-full object-contain"
          />
        </div>

        <div className={`flex flex-wrap justify-center gap-x-12 gap-y-6 text-center pt-10 border-t border-border/30 ${CASE_STUDY_STYLES.scrollReveal}`}>
          <div>
            <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
              {t('awesomeGames.titles.client')}
            </p>
            <p className="text-foreground font-body font-light">
              {t('awesomeGames.meta.client')}
            </p>
          </div>
          <div>
            <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
              {t('awesomeGames.titles.year')}
            </p>
            <p className="text-foreground font-body font-light">
              {t('awesomeGames.meta.year')}
            </p>
          </div>
          <div>
            <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
              {t('awesomeGames.titles.duration')}
            </p>
            <p className="text-foreground font-body font-light">
              {t('awesomeGames.meta.duration')}
            </p>
          </div>
          <div>
            <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
              {t('awesomeGames.titles.role')}
            </p>
            <p className="text-foreground font-body font-light">
              {t('awesomeGames.meta.role')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
