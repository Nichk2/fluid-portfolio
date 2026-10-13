import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { useCarousel } from "@/features/case-studies/useCarousel";
import { testImages } from "@/features/case-studies/hybras-collab/media";

/** Usability testing description and the test-screen carousel. */
export const TestingSection = () => {
  const { t } = useTranslation("hybrascollab");

  // Test carousel data
  const testCarouselItems = [
    { image: testImages[0] },
    { image: testImages[1] },
    { image: testImages[2] },
  ];
  const tests = useCarousel(testCarouselItems.length);

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
        {t('hybras.sections.testing')}
      </h2>
      <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
        {t('hybras.content.testingDescription')}
      </p>

      {/* Test Carousel */}
      <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass h-[700px]">
        <div className="relative h-full w-full overflow-hidden">
          {testCarouselItems.map((item, index) => (
            <div
              key={`test-${index}`}
              className={`absolute inset-0 transition-opacity duration-500 ${
                tests.index === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-full w-full flex flex-col">
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img loading="lazy" decoding="async"
                    src={item.image}
                    alt='test3'
                    className="max-h-full max-w-full object-contain rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={tests.previous}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full cursor-pointer glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={tests.next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect cursor-pointer flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {testCarouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => tests.goTo(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ease-in hover:bg-primary duration-300 ${
                tests.index === index
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
