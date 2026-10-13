import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { useCarousel } from "@/features/case-studies/useCarousel";
import { solutionImages } from "@/features/case-studies/hybras-collab/media";

interface SolutionCarouselEntry {
  title: string;
  bullets: string[];
}

interface SolutionCarouselItem extends SolutionCarouselEntry {
  image: string;
}

/** Solution text and the image-plus-bullets carousel built from hybras.solutionCarousel. */
export const SolutionSection = () => {
  const { t } = useTranslation("hybrascollab");

  // Solution carousel data
  const solutionCarouselRaw = t('hybras.solutionCarousel', { returnObjects: true });
  const solutionCarouselItems: SolutionCarouselItem[] = Array.isArray(solutionCarouselRaw)
    ? (solutionCarouselRaw as SolutionCarouselEntry[]).map((item, index) => ({
        ...item,
        image: solutionImages[index] ?? "",
      }))
    : [];
  const solution = useCarousel(solutionCarouselItems.length);

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
        {t('hybras.sections.solution')}
      </h2>
      <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
        {t('hybras.caseStudyData.solution')}
      </p>

      <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass h-[600px]">
        <div className="relative h-full w-full overflow-hidden">
          {solutionCarouselItems.map((item, index) => (
            <div
              key={`solution-${index}`}
              className={`absolute inset-0 transition-opacity duration-500 ${
                solution.index === index
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <div className="h-full w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8">
                  <img loading="lazy" decoding="async"
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain rounded-xl shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-8">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {item.bullets.map((bullet: string, i: number) => (
                      <li
                        key={i}
                        className="text-muted-foreground font-body"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={solution.previous}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={solution.next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-4 top-140 left-0 right-0 flex justify-center gap-2">
          {solutionCarouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => solution.goTo(index)}
              className={`w-3 h-3 hover:bg-primary ease-in cursor-pointer rounded-full transition-all duration-300 ${
                solution.index === index
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
