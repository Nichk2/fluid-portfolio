import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { useBeforeAfter } from "@/features/case-studies/useCarousel";
import { afterImages, beforeImages } from "@/features/case-studies/hybras-collab/media";

/** Before/after gallery. Keeps its own stacked-layer markup; only the state comes from useBeforeAfter. */
export const DesignEvolutionSection = () => {
  const { t } = useTranslation("hybrascollab");
  const beforeAfter = useBeforeAfter(beforeImages, afterImages);

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
        {t('hybras.sections.evolution')}
      </h2>
      <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
        {t('hybras.content.evolutionDescription')}
      </p>

      <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass">
        <div className="flex border-b border-border/20">
          <button className={`flex-1 py-4 font-display ease-in font-medium transition-colors ${beforeAfter.tab === "before" ? "text-primary" : "text-muted-foreground"}`} onClick={() => beforeAfter.selectTab("before")}>
            <p className="cursor-pointer transition-all ease-in hover:text-primary">
            {t('hybras.content.before')}
            </p>
          </button>
          <button className={`flex-1 py-4 font-display font-medium transition-colors ${beforeAfter.tab === "after" ? "text-primary" : "text-muted-foreground"}`} onClick={() => beforeAfter.selectTab("after")}>
            <p className="cursor-pointer transition-all ease-in hover:text-primary">
            {t('hybras.content.after')}
            </p>
          </button>
        </div>
        <div className="relative h-[600px] w-full">
          {/* Before Images */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              beforeAfter.tab === "before"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative h-full w-full overflow-hidden">
              {beforeImages.map((img, index) => (
                <div
                  key={`before-${index}`}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    beforeAfter.index === index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <img loading="lazy" decoding="async"
                    src={img}
                    alt={`Before design ${index + 1}`}
                    className="max-h-[80%] max-w-[90%] object-contain rounded-xl shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* After Images */}
          <div
            className={`absolute inset-0 transition-opacity rounded-md duration-500 ${
              beforeAfter.tab === "after"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative h-full w-full overflow-hidden">
              {afterImages.map((img, index) => (
                <div
                  key={`after-${index}`}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    beforeAfter.index === index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <img loading="lazy" decoding="async"
                    src={img}
                    alt={`After design ${index + 1}`}
                    className="max-h-[80%] max-w-[90%] object-contain rounded-xl shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={beforeAfter.previous}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={beforeAfter.next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {(beforeAfter.tab === "before"
              ? beforeImages
              : afterImages
            ).map((_, index) => (
              <button
                key={index}
                onClick={() => beforeAfter.goTo(index)}
                className={`w-3 h-3 rounded-full transition-all hover:bg-primary cursor-pointer duration-300 ${
                  beforeAfter.index === index
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
