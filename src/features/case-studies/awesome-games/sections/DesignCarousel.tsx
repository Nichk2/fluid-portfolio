import { ChevronLeft, ChevronRight } from "lucide-react";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { useCarousel } from "@/features/case-studies/useCarousel";

type DesignCarouselProps = {
  title: string;
  images: { src: string; alt: string }[];
};

/** Titled image carousel. The page uses it twice: low-fidelity wireframes and high-fidelity designs. */
export const DesignCarousel = ({ title, images }: DesignCarouselProps) => {
  const carousel = useCarousel(images.length);

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
        {title}
      </h2>
      <div className="relative w-full overflow-hidden rounded-2xl h-[500px]">
        <div className="relative h-full w-full overflow-hidden">
          {images.map((image, index) => (
            <div
              key={`slide-${index}`}
              className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                carousel.index === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img loading="lazy" decoding="async"
                src={image.src}
                alt={image.alt}
                className="max-h-full max-w-full object-contain rounded-xl"
              />
            </div>
          ))}
        </div>
        <button
          onClick={carousel.previous}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={carousel.next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => carousel.goTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                carousel.index === index ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
