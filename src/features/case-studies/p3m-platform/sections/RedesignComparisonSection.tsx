import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { useBeforeAfter } from "@/features/case-studies/useCarousel";
import { Goal_2_after, Goal_2_before, Goal_3_after, Goal_3_before } from "@/features/case-studies/p3m-platform/media";

/**
 * Layers and commodity-card before/after galleries.
 * Both share one useBeforeAfter on purpose: picking "after" on either flips both.
 */
export const RedesignComparisonSection = () => {
  const { t } = useTranslation("p3mplatform");
  const comparison = useBeforeAfter([Goal_2_before], [Goal_2_after]);

  return (
    <>
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <h3 className="text-2xl font-display font-bold mb-6">
          {t("p3mPlatform.sections.layersRedesign")}
        </h3>

        <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass">
          <div className="flex border-b border-border/20">
            <button
              className={`flex-1 py-4 font-display font-medium cursor-pointer transition-colors ${comparison.tab === "before" ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => comparison.selectTab("before")}
            >
              <p className="hover:text-primary ease-in cursor-pointer transition-all">
              {t("p3mPlatform.content.beforeAfter.before")}
              </p>
            </button>
            <button
              className={`flex-1 py-4 font-display font-medium transition-colors cursor-pointer ${comparison.tab === "after" ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => comparison.selectTab("after")}
            >
              <p className="hover:text-primary ease-in cursor-pointer transition-all">
              {t("p3mPlatform.content.beforeAfter.after")}
              </p>
            </button>
          </div>
          <div className="relative h-[500px] w-full flex items-center justify-center p-6">
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${comparison.tab === "before" ? "opacity-100" : "opacity-0"}`}>
              <img loading="lazy" decoding="async" src={Goal_2_before} alt="Original Layers Section" className="max-h-full max-w-full object-contain rounded-lg" />
            </div>
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${comparison.tab === "after" ? "opacity-100" : "opacity-0"}`}>
              <img loading="lazy" decoding="async" src={Goal_2_after} alt="Redesigned Layers Section" className="max-h-full max-w-full object-contain rounded-lg" />
            </div>
          </div>
          <p className="text-muted-foreground text-center p-4 font-body">
            {t("p3mPlatform.content.layersDescription")}
          </p>
        </div>
      </div>

      {/* Commodity Cards Redesign */}
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <h3 className="text-2xl font-display font-bold mb-6">
          {t("p3mPlatform.sections.commodityCards")}
        </h3>

        <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass">
          <div className="flex border-b border-border/20">
            <button
              className={`flex-1 py-4 font-display font-medium transition-colors ${comparison.tab === "before" ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => comparison.selectTab("before")}
            >
              <p className="hover:text-primary ease-in cursor-pointer transition-all">
              {t("p3mPlatform.content.beforeAfter.before")}
              </p>
            </button>
            <button
              className={`flex-1 py-4 font-display font-medium transition-colors ${comparison.tab === "after" ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => comparison.selectTab("after")}
            >
              <p className="hover:text-primary ease-in cursor-pointer transition-all">
              {t("p3mPlatform.content.beforeAfter.after")}
              </p>
            </button>
          </div>
          <div className="relative h-[500px] w-full flex items-center justify-center p-6">
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${comparison.tab === "before" ? "opacity-100" : "opacity-0"}`}>
              <img loading="lazy" decoding="async" src={Goal_3_before} alt="Original Commodity Cards" className="max-h-full max-w-full object-contain rounded-lg" />
            </div>
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${comparison.tab === "after" ? "opacity-100" : "opacity-0"}`}>
              <img loading="lazy" decoding="async" src={Goal_3_after} alt="Redesigned Commodity Cards" className="max-h-full max-w-full object-contain rounded-lg" />
            </div>
          </div>
          <p className="text-muted-foreground p-4 text-center font-body">
            {t("p3mPlatform.content.commodityDescription")}
          </p>
        </div>
      </div>
    </>
  );
};
