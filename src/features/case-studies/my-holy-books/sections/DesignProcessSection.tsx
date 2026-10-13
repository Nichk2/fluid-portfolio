import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { useCarousel } from "@/features/case-studies/useCarousel";
import { IdeateStep } from "@/features/case-studies/my-holy-books/sections/IdeateStep";
import { personaImages, Process_img, prototypeImages, testImages } from "@/features/case-studies/my-holy-books/media";

/** Empathize, define, ideate, prototype and test, each with its own carousel. */
export const DesignProcessSection = () => {
  const { t } = useTranslation("myholybooks");
  const personas = useCarousel(personaImages.length);
  const prototypes = useCarousel(prototypeImages.length);
  const tests = useCarousel(testImages.length);

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
        {t("myholybooks.designProcess.title")}
      </h2>

      {/* Process Overview Image - Made larger */}
      <div className="mb-12 w-full">
        <img loading="lazy" decoding="async"
          src={Process_img}
          alt="Design process overview"
          className="w-full h-auto rounded-2xl"
        />
      </div>

      <div className="space-y-12">
        {/* Empathize */}
        <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
          <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            {t("myholybooks.designProcess.empathize.title")}
          </h3>
          <p className={CASE_STUDY_STYLES.typography.body}>
            {t("myholybooks.designProcess.empathize.content")}
          </p>
        </div>

        {/* Define - Fixed with larger persona images */}
        <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
          <div className="absolute -left-3 top-8 w-6 h-6 bg-accent rounded-full"></div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            {t("myholybooks.designProcess.define.title")}
          </h3>
          <p className={CASE_STUDY_STYLES.typography.body}>
            {t("myholybooks.designProcess.define.content")}
          </p>
          <p className="text-muted-foreground mt-4">
            {t("myholybooks.designProcess.define.personaText")}
          </p>

          {/* Persona Carousel - Made larger */}
          <div className="relative mt-6 h-[670px] w-full overflow-hidden rounded-2xl ">
            <div className="relative h-full w-full">
              {personaImages.map((img, index) => (
                <div
                  key={`persona-${index}`}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    personas.index === index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <img loading="lazy" decoding="async"
                    src={img}
                    alt={`Persona ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={personas.previous}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect hover:bg-primary/20 cursor-pointer  flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={personas.next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect hover:bg-primary/20 cursor-pointer transition-colors duration-300 flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {personaImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => personas.goTo(idx)}
                  className={`w-3 h-3 cursor-pointer hover:bg-primary ease-in rounded-full transition-all ${
                    personas.index === idx
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

              {/* Ideate - Fixed with tab-based feature exploration */}
              <IdeateStep />

        {/* Prototype - Fixed with larger images */}
        <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
          <div className="absolute -left-3 top-8 w-6 h-6 bg-accent rounded-full"></div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            {t("myholybooks.designProcess.prototype.title")}
          </h3>
          <p className={CASE_STUDY_STYLES.typography.body}>
            {t("myholybooks.designProcess.prototype.content")}
          </p>

          {/* Prototype Carousel - Larger */}
          <div className="relative mt-8 h-[600px] w-full overflow-hidden rounded-2xl enhanced-glass">
            <div className="relative h-full w-full">
              {prototypeImages.map((img, index) => (
                <div
                  key={`prototype-${index}`}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    prototypes.index === index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <img loading="lazy" decoding="async"
                    src={img}
                    alt={`Prototype ${index + 1}`}
                    className="max-h-full max-w-full object-contain p-8"
                  />
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prototypes.previous}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect cursor-pointer flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={prototypes.next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full cursor-pointer glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {prototypeImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => prototypes.goTo(idx)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer hover:bg-primary ease-in duration-300 ${
                    prototypes.index === idx
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Test - Fixed with better layout */}
        <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
          <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            {t("myholybooks.designProcess.test.title")}
          </h3>
          <p className={CASE_STUDY_STYLES.typography.body}>
            {t("myholybooks.designProcess.test.content")}
          </p>

          {/* Test Images Carousel - Larger */}
          <div className="relative mt-8 h-[400px] w-full overflow-hidden rounded-2xl enhanced-glass">
            <div className="relative h-full w-full">
              {testImages.map((img, index) => (
                <div
                  key={`test-${index}`}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    tests.index === index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <img loading="lazy" decoding="async"
                    src={img}
                    alt={`Test feature ${index + 1}`}
                    className="max-h-full max-w-full object-contain p-8"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={tests.previous}
              className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={tests.next}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {testImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => tests.goTo(idx)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer hover:bg-primary ease-in duration-300 ${
                    tests.index === idx
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Test Feature Labels */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {testImages.map((img, idx) => (
              <div key={idx} className="enhanced-glass p-4 rounded-xl text-center">
                <div className="h-24 flex items-center justify-center mb-2">
                  <img loading="lazy" decoding="async"
                    src={img}
                    alt={`Test feature thumbnail ${idx + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {idx === 0 ? "Comments" : 
                   idx === 1 ? "Folders" : 
                   idx === 2 ? "Books" : 
                   "Add Friends"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
