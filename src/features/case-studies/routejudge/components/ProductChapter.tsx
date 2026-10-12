import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { duration, gsapEaseOut, stagger } from "@/motion/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ChapterHeading } from "@/features/case-studies/routejudge/components/ChapterHeading";

gsap.registerPlugin(ScrollTrigger);

/**
 * Chapter 1: what RouteJudge does, as a diagram the reader reads top to bottom.
 * The steps enter in order (question -> classifier -> label -> model) because
 * that order IS the product; animating them together would hide the flow.
 */
export const ProductChapter = () => {
  const { t } = useTranslation("routejudge");
  const diagramRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>("[data-step]");
      if (prefersReducedMotion) {
        gsap.set(steps, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        steps,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: duration.moderate,
          ease: gsapEaseOut,
          stagger: stagger * 3,
          scrollTrigger: { trigger: diagramRef.current, start: "top 75%" },
        },
      );
    }, diagramRef);
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const box = "rounded-2xl border border-border/40 bg-card px-6 py-4 text-center";
  const tierLabel = "font-body font-semibold text-sm tracking-[0.2em]";

  return (
    <div>
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ChapterHeading eyebrow={t("product.eyebrow")} title={t("product.title")} />
        <p className={CASE_STUDY_STYLES.typography.body}>{t("product.body")}</p>
      </div>

      <div ref={diagramRef} className="mt-16 flex flex-col items-center gap-4">
        <div data-step className={`${box} max-w-sm`}>
          <p className="text-foreground font-body">{t("product.query")}</p>
        </div>
        <ArrowDown data-step className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
        <div data-step className={`${box} max-w-sm border-primary/40`}>
          <p className="text-foreground font-body font-medium">{t("product.classifier")}</p>
          <p className="text-sm text-muted-foreground font-body mt-1">{t("product.classifierNote")}</p>
        </div>
        <ArrowDown data-step className="w-5 h-5 text-muted-foreground" aria-hidden="true" />

        <div data-step className="grid grid-cols-3 gap-3 md:gap-6 w-full max-w-2xl">
          {(["easy", "medium", "hard"] as const).map((tier) => (
            <div key={tier} className={`${box} px-2`}>
              <p className={`${tierLabel} text-foreground`}>{t(`product.tiers.${tier}`)}</p>
            </div>
          ))}
        </div>

        {/* EASY and MEDIUM both go to the local model; only HARD pays for GPT. */}
        <div data-step className="grid grid-cols-3 gap-3 md:gap-6 w-full max-w-2xl">
          <div className={`${box} col-span-2`}>
            <p className="text-foreground font-body font-medium">{t("product.tiers.local")}</p>
            <p className="text-sm text-muted-foreground font-body mt-1">{t("product.tiers.localNote")}</p>
          </div>
          <div className={`${box} px-2`}>
            <p className="text-foreground font-body font-medium">{t("product.tiers.cloud")}</p>
            <p className="text-sm text-muted-foreground font-body mt-1">{t("product.tiers.cloudNote")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductChapter;
