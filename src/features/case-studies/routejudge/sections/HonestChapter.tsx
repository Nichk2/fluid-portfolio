import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { formatInt, formatNumber } from "@/features/case-studies/routejudge/format";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";
import { ConfusionMatrix } from "@/features/case-studies/routejudge/sections/ConfusionMatrix";

gsap.registerPlugin(ScrollTrigger);

/**
 * Chapter 4: the honest number.
 * The one big motion moment on the page: the reported 93.3% counts down to
 * the measured 40.9% as the reader scrolls (scrubbed, so the reader controls
 * it). The drop is the story, so it is the thing that moves. Under reduced
 * motion the final number is shown directly.
 */
export const HonestChapter = () => {
  const { t, i18n } = useTranslation("routejudge");
  const lang = i18n.language;
  const counterRef = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { claimedAccuracy, honestAccuracy, oldHardRecall, oldUnderRouting } = m.headline;

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;
    const write = (value: number) => {
      counter.textContent = `${formatNumber(value, lang)}%`;
    };
    if (prefersReducedMotion) {
      write(honestAccuracy);
      return;
    }
    const state = { value: claimedAccuracy };
    write(state.value);
    const tween = gsap.to(state, {
      value: honestAccuracy,
      ease: "none",
      onUpdate: () => write(state.value),
      scrollTrigger: { trigger: triggerRef.current, start: "top 75%", end: "top 30%", scrub: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [prefersReducedMotion, lang, claimedAccuracy, honestAccuracy]);

  const stat = "rounded-2xl border border-border/30 bg-secondary/40 p-6";

  return (
    <div className="space-y-20">
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        {/* The title doesn't state the number: the counter below is the reveal. */}
        <ChapterHeading eyebrow={t("honest.eyebrow")} title={t("honest.title")} />
        <p className={CASE_STUDY_STYLES.typography.body}>
          {t("honest.body", { items: formatInt(m.evalSet.items, lang) })}
        </p>
      </div>

      <div ref={triggerRef} className="text-center">
        {/* Screen readers get the two numbers as a sentence; the animated digits are decorative. */}
        <p className="sr-only">
          {t("honest.from")}: {formatNumber(claimedAccuracy, lang)}%. {t("honest.to")}: {formatNumber(honestAccuracy, lang)}%.
        </p>
        <div aria-hidden="true">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {t("honest.from")} {formatNumber(claimedAccuracy, lang)}% → {t("honest.to")}
          </p>
          <span
            ref={counterRef}
            className="block font-body font-semibold text-primary text-7xl md:text-[9rem] leading-none tracking-tight"
          >
            {formatNumber(honestAccuracy, lang)}%
          </span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className={`${stat} ${CASE_STUDY_STYLES.scrollReveal}`}>
          <p className="text-sm text-muted-foreground font-body">{t("honest.statHard")}</p>
          <p className="text-4xl font-body font-semibold text-foreground mt-2">{formatNumber(oldHardRecall, lang)}%</p>
        </div>
        <div className={`${stat} ${CASE_STUDY_STYLES.scrollReveal}`}>
          <p className="text-sm text-muted-foreground font-body">{t("honest.statCheap")}</p>
          <p className="text-4xl font-body font-semibold text-foreground mt-2">{formatNumber(oldUnderRouting, lang)}%</p>
        </div>
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ConfusionMatrix />
      </div>
    </div>
  );
};

export default HonestChapter;
