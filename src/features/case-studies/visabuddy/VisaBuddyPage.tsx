import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/motion/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import ScrollToTopButton from "@/features/shell/ScrollToTopButton";
import Navigation from "@/features/shell/Navigation";
import { HeroSection } from "@/features/case-studies/visabuddy/sections/HeroSection";
import { ProductChapter } from "@/features/case-studies/visabuddy/sections/ProductChapter";
import { ClaimsChapter } from "@/features/case-studies/visabuddy/sections/ClaimsChapter";
import { MeasuringChapter } from "@/features/case-studies/visabuddy/sections/MeasuringChapter";
import { FineTuneChapter } from "@/features/case-studies/visabuddy/sections/FineTuneChapter";
import { V4Chapter } from "@/features/case-studies/visabuddy/sections/V4Chapter";
import { ExamChapter } from "@/features/case-studies/visabuddy/sections/ExamChapter";
import { ShippingChapter } from "@/features/case-studies/visabuddy/sections/ShippingChapter";
import { DesignSection } from "@/features/case-studies/visabuddy/sections/DesignSection";
import { FrontendSection } from "@/features/case-studies/visabuddy/sections/FrontendSection";

/**
 * VisaBuddy case study: "Quote first."
 *
 * Same storytelling as RouteJudge, one chapter per step:
 *   product -> v1's unmeasured numbers -> measuring honestly -> what fine-tuning
 *   could and couldn't fix -> v4 (quote first) -> the sealed exam -> shipping and cost
 *   -> design and frontend (kept from the first version of this page).
 *
 * Every figure comes from metrics.ts, generated from the VisaBuddy run ledger
 * (Visa_buddy/pipeline/export_portfolio_metrics.py), and all copy from
 * public/locales/{en,pt}/visabuddy.json.
 */
const VisaBuddyPage = () => {
  const { t } = useTranslation("visabuddy");
  useScrollReveal();

  return (
    <div className={CASE_STUDY_STYLES.background}>
      <Navigation />
      <HeroSection />

      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-40">
          <ProductChapter />
        </div>
        {/* Chart-heavy chapters get a little more width so the panels stay legible. */}
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-40 mt-40">
          <ClaimsChapter />
          <MeasuringChapter />
          <FineTuneChapter />
          <V4Chapter />
          <ExamChapter />
          <ShippingChapter />
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-32 mt-40">
          <DesignSection />
          <FrontendSection />

          <div className={`${CASE_STUDY_STYLES.scrollReveal} enhanced-glass p-8 rounded-3xl`}>
            <h3 className="text-2xl font-display italic font-medium text-foreground mb-4">{t("visaBuddy.content.quickNote.title")}</h3>
            <p className="text-muted-foreground mb-4">{t("visaBuddy.content.quickNote.paragraph1")}</p>
            <p className="text-muted-foreground mb-6">{t("visaBuddy.content.quickNote.paragraph2")}</p>
            <p className="text-primary font-display font-medium">{t("visaBuddy.content.quickNote.signature")}</p>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}>
            {t('visaBuddy.sections.nextProject')}
          </h2>
          <Link to="/case-study/photox" className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors leading-tight tracking-tighter">
                {t('visaBuddy.nextProject.title')}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                {t('visaBuddy.nextProject.description')}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">{t('visaBuddy.nextProject.cta')}</span>
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

export default VisaBuddyPage;
