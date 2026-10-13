import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/motion/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import Navigation from "@/features/shell/Navigation";
import ScrollToTopButton from "@/features/shell/ScrollToTopButton";
import { HeroChapter } from "@/features/case-studies/routejudge/sections/HeroChapter";
import { ProductChapter } from "@/features/case-studies/routejudge/sections/ProductChapter";
import { NumberChapter } from "@/features/case-studies/routejudge/sections/NumberChapter";
import { InvestigationChapter } from "@/features/case-studies/routejudge/sections/InvestigationChapter";
import { HonestChapter } from "@/features/case-studies/routejudge/sections/HonestChapter";
import { RebuildChapter } from "@/features/case-studies/routejudge/sections/RebuildChapter";
import { TrainingChapter } from "@/features/case-studies/routejudge/sections/TrainingChapter";
import { ResultsChapter } from "@/features/case-studies/routejudge/sections/ResultsChapter";
import { ShippingChapter } from "@/features/case-studies/routejudge/sections/ShippingChapter";

/**
 * RouteJudge case study: "The 93% that wasn't."
 *
 * Told as an investigation, one chapter per component:
 *   product -> the reported number -> the audit's clues -> the honest number
 *   -> rebuilding the data -> training (and the merge bug) -> results -> shipping.
 *
 * Every figure comes from metrics.ts, generated from the RouteJudge run ledger
 * (routejudge/experiments/export_portfolio_metrics.py), and all copy from
 * public/locales/{en,pt}/routejudge.json.
 */
const RouteJudgePage = () => {
  const { t } = useTranslation("routejudge");
  useScrollReveal();

  return (
    <div className={CASE_STUDY_STYLES.background}>
      <Navigation />
      <HeroChapter />

      <section className={CASE_STUDY_STYLES.contentSection}>
        {/* The investigation needs room for its two-column layout; the rest reads at prose width. */}
        <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-40">
          <ProductChapter />
          <NumberChapter />
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-8 mt-40">
          <InvestigationChapter />
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-40 mt-40">
          <HonestChapter />
          <RebuildChapter />
          <TrainingChapter />
        </div>
        <div className="max-w-5xl mx-auto px-6 md:px-8 mt-40">
          <ResultsChapter />
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-8 mt-40">
          <ShippingChapter />
        </div>
      </section>

      {/* Next project: same pattern as the other case studies. */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}>
            {t("nextProject.label")}
          </h2>
          <Link to="/case-study/visabuddy" className={`block group ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className={`${CASE_STUDY_STYLES.cards.feature} p-12`}>
              <h3 className="text-4xl md:text-5xl font-display font-medium text-foreground mb-6 group-hover:text-primary transition-colors duration-300 tracking-tight">
                {t("nextProject.title")}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">{t("nextProject.description")}</p>
              <span className="inline-flex items-center gap-3 text-primary font-body font-medium text-lg group-hover:translate-x-2 transition-transform duration-300">
                {t("nextProject.cta")} <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  );
};

export default RouteJudgePage;
