import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { useBeforeAfter } from "@/features/case-studies/useCarousel";
import { afterImages, beforeImages } from "@/features/case-studies/photox/media";

/** Solution text and the before/after gallery (stacked layers, state from useBeforeAfter). */
export const SolutionSection = () => {
  const { t } = useTranslation("photox");
  const beforeAfter = useBeforeAfter(beforeImages, afterImages);

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t("photox.title3")}</h2>
      <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>{t("photox.solution")}</p>

      {/* Before/After Carousel */}
      <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass">
        <div className="flex border-b border-border/20">

          <button
            className={`flex-1 py-4 font-display font-medium transition-colors cursor-pointer hover:text-primary ${beforeAfter.tab === "before" ? "text-primary" : "text-muted-foreground"}`}
            onClick={() => beforeAfter.selectTab("before")}
          >
            {t("photox.before")}
          </button>
          <button
            className={`flex-1 py-4 font-display font-medium transition-colors cursor-pointer hover:text-primary ${beforeAfter.tab === "after" ? "text-primary" : "text-muted-foreground"}`}
            onClick={() => beforeAfter.selectTab("after")}
          >
            {t("photox.after")}
          </button>
        </div>
        <div className="relative h-[500px] w-full">
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
                    beforeAfter.index === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img loading="lazy" decoding="async"
                    src={img}
                    alt={`Before design ${index + 1}`}
                    className="max-h-full max-w-full object-contain p-8"
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
                    beforeAfter.index === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img loading="lazy" decoding="async"
                    src={img}
                    alt={`After design ${index + 1}`}
                    className="max-h-full max-w-full object-contain p-8"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Navigation */}
          <button type="button" onClick={beforeAfter.previous} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 cursor-pointer h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button type="button" onClick={beforeAfter.next} className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 rounded-full hover:bg-primary/20 transition-colors duration-300 glass-effect flex items-center justify-center">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {(beforeAfter.tab === "before" ? beforeImages : afterImages).map((_, index) => (
              <button type="button" key={index} onClick={() => beforeAfter.goTo(index)} className={`w-3 h-3 rounded-full cursor-pointer hover:bg-primary ease-in transition-all ${beforeAfter.index === index ? "bg-primary w-6" : "bg-muted-foreground/30"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
