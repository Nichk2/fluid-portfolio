import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";
import { TrainingCurves } from "@/features/case-studies/routejudge/sections/TrainingCurves";
import { ModalCard } from "@/features/case-studies/routejudge/sections/ModalCard";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { formatInt, formatNumber } from "@/features/case-studies/routejudge/format";

/** Chapter 6: the two training runs, and the bug that almost shipped. */
export const TrainingChapter = () => {
  const { t, i18n } = useTranslation("routejudge");
  const lang = i18n.language;
  // Shown as one figure only if every evaluated model agrees, so the sentence can't hide an outlier.
  const invalidRates = [m.full.tinyllama.invalidOutputRate, m.full.qwen3.invalidOutputRate];
  const invalid = invalidRates.every((rate) => rate === invalidRates[0]) ? invalidRates[0] : null;

  return (
    <div className="space-y-12">
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ChapterHeading eyebrow={t("training.eyebrow")} title={t("training.title")} />
        <p className={CASE_STUDY_STYLES.typography.body}>{t("training.body")}</p>
      </div>

      {/* Where it ran, before what it produced. */}
      <ModalCard />

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <TrainingCurves />
      </div>

      {/* The bug is told plainly: catching it is part of the result. */}
      <aside className={`${CASE_STUDY_STYLES.cards.process} ${CASE_STUDY_STYLES.scrollReveal}`}>
        <p className={`${CASE_STUDY_STYLES.typography.category} mb-2`}>{t("training.bugTitle")}</p>
        <p className="text-foreground font-body font-light text-lg leading-relaxed">{t("training.bugBody")}</p>
        {/* The outcome of the fix, measured on the full test set rather than the 60-question probe. */}
        {invalid !== null && (
          <p className="mt-4 text-muted-foreground font-body">
            {t("training.invalidResult", { rate: formatNumber(invalid, lang), items: formatInt(m.evalSet.items, lang) })}
          </p>
        )}
      </aside>
    </div>
  );
};

export default TrainingChapter;
