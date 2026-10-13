import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { formatInt, formatNumber } from "@/features/case-studies/routejudge/format";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";
import { ResultsCharts } from "@/features/case-studies/routejudge/sections/ResultsCharts";
import { TargetsChecklist } from "@/features/case-studies/routejudge/sections/TargetsChecklist";
import { ExamplesTable } from "@/features/case-studies/routejudge/sections/ExamplesTable";
import { MatrixComparison } from "@/features/case-studies/routejudge/sections/MatrixComparison";

/** Chapter 7: the new number, measured exactly like the old one, with the targets and real examples. */
export const ResultsChapter = () => {
  const { t, i18n } = useTranslation("routejudge");
  const lang = i18n.language;

  return (
    <div className="space-y-16">
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ChapterHeading
          eyebrow={t("results.eyebrow")}
          title={t("results.title", {
            value: formatNumber(m.results.qwen3.accuracy, lang),
            old: formatNumber(m.headline.honestAccuracy, lang),
          })}
        />
        <p className={CASE_STUDY_STYLES.typography.body}>{t("results.body")}</p>
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ResultsCharts />
      </div>

      {/* The matrices first, then the sentence that names what they show. */}
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <MatrixComparison />
      </div>

      <p className={`${CASE_STUDY_STYLES.typography.quote} ${CASE_STUDY_STYLES.scrollReveal}`}>
        {t("results.zeroErrors", { items: formatInt(m.evalSet.items, lang) })}
      </p>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <TargetsChecklist />
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ExamplesTable />
      </div>
    </div>
  );
};

export default ResultsChapter;
