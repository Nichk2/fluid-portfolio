import { ChevronLeft, ChevronRight } from "lucide-react";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { useBeforeAfter } from "@/features/case-studies/useCarousel";

type BeforeAfterCarouselProps = {
  before: readonly string[];
  after: readonly string[];
  beforeLabel: string;
  afterLabel: string;
  beforeAlt: (index: number) => string;
  afterAlt: (index: number) => string;
};

export const BeforeAfterCarousel = ({
  before,
  after,
  beforeLabel,
  afterLabel,
  beforeAlt,
  afterAlt,
}: BeforeAfterCarouselProps) => {
  const { tab, selectTab, index, previous, next, goTo } = useBeforeAfter(before, after);
  const beforeIndex = Math.min(index, Math.max(before.length - 1, 0));
  const afterIndex = Math.min(index, Math.max(after.length - 1, 0));
  const dots = tab === "before" ? before : after;

  return (
    <div className={`${CASE_STUDY_STYLES.glassCard} p-6 relative w-full overflow-hidden rounded-2xl enhanced-glass`}>
      <div className="flex border-b border-border/20">
        <TabButton active={tab === "before"} onClick={() => selectTab("before")}>
          {beforeLabel}
        </TabButton>
        <TabButton active={tab === "after"} onClick={() => selectTab("after")}>
          {afterLabel}
        </TabButton>
      </div>
      <div className="relative h-[600px] w-full">
        <div className={`absolute inset-0 transition-opacity duration-500 ${tab === "before" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
            <img
              loading="lazy"
              decoding="async"
              src={before[beforeIndex]}
              alt={beforeAlt(beforeIndex)}
              className="max-h-[80%] max-w-[90%] object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
        <div className={`absolute inset-0 transition-opacity duration-500 ${tab === "after" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
            <img
              loading="lazy"
              decoding="async"
              src={after[afterIndex]}
              alt={afterAlt(afterIndex)}
              className="max-h-[80%] max-w-[90%] object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={previous}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 cursor-pointer h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-2">
          {dots.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => goTo(dotIndex)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer duration-300 ${index === dotIndex ? "bg-primary cursor-pointer ease-in transition-all w-6" : "bg-muted-foreground/30 hover:bg-primary/90"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TabButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) => (
  <button
    type="button"
    className={`flex-1 py-4 font-display font-medium transition-colors cursor-pointer ${active ? "text-primary" : "text-muted-foreground"}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default BeforeAfterCarousel;
