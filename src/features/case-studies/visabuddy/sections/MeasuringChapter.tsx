import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { visabuddyMetrics as m } from "@/features/case-studies/visabuddy/metrics";
import { formatInt, formatNumber } from "@/features/case-studies/routejudge/format";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";
import { GroupedBars } from "@/features/case-studies/visabuddy/sections/GroupedBars";
import { PROGRAMS } from "@/features/case-studies/visabuddy/sections/ClaimsChapter";

const GRADER_COUNT = 2;

/** Chapter 3: a frozen test first, then retrieval per program, then the grader's own bugs. */
export const MeasuringChapter = () => {
  const { t, i18n } = useTranslation("visabuddy");
  const lang = i18n.language;
  const { perProgram, citizenshipTarget } = m.v4.retrieval;
  // 100% stays "100%", 87.5% stays "87.5%": matches the note under the chart.
  const pct = (value: number) => `${formatNumber(value, lang, Number.isInteger(value) ? 0 : 1)}%`;
  const cols = ["version", "problem", "fix"] as const;

  return (
    <div className="space-y-16">
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ChapterHeading eyebrow={t("measuring.eyebrow")} title={t("measuring.title")} />
        <p className={CASE_STUDY_STYLES.typography.body}>
          {t("measuring.body", { questions: formatInt(m.v2.goldQuestions, lang), refuse: formatInt(m.v2.goldMustRefuse, lang) })}
        </p>
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <GroupedBars
          title={t("measuring.recallTitle")}
          subtitle={t("measuring.recallSubtitle")}
          series={[
            { key: "a", name: t("measuring.recallSeries.dense"), role: "past" },
            { key: "b", name: t("measuring.recallSeries.hybrid"), role: "current" },
          ]}
          rows={PROGRAMS.map((p) => ({ label: t(`programs.${p}`), a: perProgram[p].dense, b: perProgram[p].hybrid }))}
          max={115}
          format={pct}
          target={citizenshipTarget}
        />
        <p className="mt-4 text-muted-foreground font-body">
          {t("measuring.recallNote", {
            cDense: formatNumber(perProgram.citizenship.dense, lang),
            cHybrid: formatNumber(perProgram.citizenship.hybrid, lang),
            vDense: formatNumber(perProgram.visitor.dense, lang),
            vHybrid: formatNumber(perProgram.visitor.hybrid, lang),
          })}
        </p>
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4">{t("measuring.graderTitle")}</h3>
        <p className="text-muted-foreground font-body font-light text-lg leading-relaxed mb-6">{t("measuring.graderBody")}</p>
        <div className="overflow-x-auto">
          <table className="w-full font-body text-sm md:text-base">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                {cols.map((col) => (
                  <th key={col} scope="col" className="py-3 pr-6 font-medium">
                    {t(`measuring.graderCols.${col}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: GRADER_COUNT }, (_, index) => (
                <tr key={index} className="border-b border-border/40 align-top">
                  {cols.map((col) => (
                    <td key={col} className={`py-4 pr-6 ${col === "version" ? "text-primary whitespace-nowrap" : "text-foreground"}`}>
                      {t(`measuring.graders.${index}.${col}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MeasuringChapter;
