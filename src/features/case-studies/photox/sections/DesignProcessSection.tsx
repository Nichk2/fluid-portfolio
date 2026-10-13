import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { useCarousel } from "@/features/case-studies/useCarousel";
import { ideate, persona, prototypeImages, style, testImages } from "@/features/case-studies/photox/media";

/** Empathize to test, with the prototype and test carousels. */
export const DesignProcessSection = () => {
  const { t } = useTranslation("photox");
  const prototypes = useCarousel(prototypeImages.length);
  const tests = useCarousel(testImages.length);

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t("photox.process.title")}</h2>

      <div className="space-y-12">
        {/* Empathize */}
        <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
          <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t("photox.process.empathize.title")}</h3>
          <p className={CASE_STUDY_STYLES.typography.body}>{t("photox.process.empathize.description")}</p>
        </div>

        {/* Define */}
        <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
          <div className="absolute -left-3 top-8 w-6 h-6 bg-accent rounded-full"></div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t("photox.process.define.title")}</h3>
          <p className={CASE_STUDY_STYLES.typography.body}>{t("photox.process.define.description")}</p>
          <p className="text-primary mt-4 font-medium">{t("photox.process.define.goal")}</p>

          {/* Persona Image - Fixed with proper sizing */}
          <div className="w-full mt-6">
            <div className="enhanced-glass rounded-xl overflow-hidden p-4">
              <img loading="lazy" decoding="async"
                src={persona}
                alt="User persona"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Ideate */}
        <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
          <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t("photox.process.ideate.title")}</h3>
          <p className={CASE_STUDY_STYLES.typography.body}>{t("photox.process.ideate.description")}</p>

          {/* Ideation Sketches in separate glass boxes */}
          <div className="space-y-6 mt-6">
            <div className="enhanced-glass rounded-xl overflow-hidden p-6">
              <img loading="lazy" decoding="async"
                src={ideate}
                alt="Ideation sketches"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="enhanced-glass rounded-xl overflow-hidden p-6">
              <img loading="lazy" decoding="async"
                src={style}
                alt="Style guide"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Prototype - Fixed to be larger */}
        <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
          <div className="absolute -left-3 top-8 w-6 h-6 bg-accent rounded-full"></div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t("photox.process.prototype.title")}</h3>
          <p className={CASE_STUDY_STYLES.typography.body}>{t("photox.process.prototype.description")}</p>

          {/* Prototype Carousel */}
          <div className="relative mt-6 h-[600px] w-full overflow-hidden rounded-2xl enhanced-glass">
            <div className="relative h-full w-full">
              {prototypeImages.map((img, index) => (
                <div
                  key={`proto-${index}`}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    prototypes.index === index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <img loading="lazy" decoding="async"
                    src={img}
                    alt={`Prototype screen ${index + 1}`}
                    className="max-h-full max-w-full object-contain p-8"
                  />
                </div>
              ))}
            </div>
            <button type="button" onClick={prototypes.previous} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect hover:bg-primary/20 cursor-pointer ease-in transition-all flex items-center justify-center">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button type="button" onClick={prototypes.next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect flex items-center hover:bg-primary/20 cursor-pointer ease-in transition-all justify-center">
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {prototypeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => prototypes.goTo(index)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer  ${prototypes.index === index ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-primary ease-in transition-all"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Test */}
        <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
          <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t("photox.process.test.title")}</h3>
          <p className={CASE_STUDY_STYLES.typography.body}>{t("photox.process.test.description")}</p>

          {/* Test Results Carousel */}
          <div className="relative mt-6 h-[500px] w-full overflow-hidden rounded-2xl enhanced-glass">
            <div className="relative h-full w-full">
              {testImages.map((img, index) => (
                <div
                  key={`test-${index}`}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    tests.index === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img loading="lazy" decoding="async"
                    src={img}
                    alt={`Testing phase ${index + 1}`}
                    className="max-h-full max-w-full object-contain p-8"
                  />
                </div>
              ))}
            </div>
            <button type="button" onClick={tests.previous} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 cursor-pointer ease-in transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button type="button" onClick={tests.next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 cursor-pointer ease-in transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {testImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => tests.goTo(index)}
                  className={`w-3 h-3 cursor-pointer rounded-full transition-all ${tests.index === index ? "bg-primary w-6" : "hover:bg-primary transition-all ease-in bg-muted-foreground/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
