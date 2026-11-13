import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { visabuddyMetrics as m } from "@/features/case-studies/visabuddy/metrics";
import { formatInt, formatNumber } from "@/features/case-studies/routejudge/format";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";
import { DataTable } from "@/features/case-studies/routejudge/sections/DataTable";
import { BarPanel } from "@/features/case-studies/visabuddy/sections/BarPanel";

// Structural, not typeof: metrics.ts is `as const`, so each system's numbers are distinct literal types.
type Compare = {
  wrongRulesShown: number;
  factCoverage: { gold_v2: number; rules_v1: number; rules_yes_v1: number };
  overRefusal: { gold_v2: number; rules_v1: number };
};
const SYSTEMS = ["untuned", "fineTuned"] as const;
const T = m.v4Targets;
// One panel per pre-registered criterion; overGold only in the table, to keep the grid even.
const METRICS = [
  { key: "factRules", get: (c: Compare) => c.factCoverage.rules_v1, target: T.factCoverageRules, kind: "pct", lowerIsBetter: false, panel: true },
  { key: "factYes", get: (c: Compare) => c.factCoverage.rules_yes_v1, target: T.factCoverageYes, kind: "pct", lowerIsBetter: false, panel: true },
  { key: "overRules", get: (c: Compare) => c.overRefusal.rules_v1, target: T.overRefusal, kind: "pct", lowerIsBetter: true, panel: true },
  { key: "wrongRules", get: (c: Compare) => c.wrongRulesShown, target: T.wrongRulesShown, kind: "count", lowerIsBetter: true, panel: true },
  { key: "overGold", get: (c: Compare) => c.overRefusal.gold_v2, target: T.overRefusal, kind: "pct", lowerIsBetter: true, panel: false },
] as const;

/** Chapter 5: the v4 model, the teacher gate exception, and the untuned vs fine-tuned decision. */
export const V4Chapter = () => {
  const { t, i18n } = useTranslation("visabuddy");
  const lang = i18n.language;
  const { compare, teacherGates, sftRows } = m.v4;
  const format = (kind: "pct" | "count") => (value: number) => (kind === "pct" ? `${formatNumber(value, lang)}%` : formatInt(value, lang));

  return (
    <div className="space-y-16">
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ChapterHeading eyebrow={t("v4.eyebrow")} title={t("v4.title")} />
        <p className={CASE_STUDY_STYLES.typography.body}>{t("v4.body", { rows: formatInt(sftRows.train, lang) })}</p>
      </div>

      <aside className={`${CASE_STUDY_STYLES.cards.process} ${CASE_STUDY_STYLES.scrollReveal}`}>
        <p className={`${CASE_STUDY_STYLES.typography.category} mb-2`}>{t("v4.gateTitle")}</p>
        <p className="text-foreground font-body font-light text-lg leading-relaxed">
          {t("v4.gateBody", {
            mistralWrong: formatInt(teacherGates.teacherGateMistral.wrongRulesShown, lang),
            qwenRefused: formatInt(teacherGates.teacherGateQwen30b.mustRefuseRefused, lang),
          })}
        </p>
      </aside>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-6">{t("v4.compareTitle")}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {METRICS.filter((metric) => metric.panel).map((metric) => {
            const values = SYSTEMS.map((s) => metric.get(compare[s]));
            return (
              <BarPanel
                key={metric.key}
                title={t(`v4.metrics.${metric.key}`)}
                note={metric.lowerIsBetter ? t("finetune.metrics.lowerIsBetter") : undefined}
                rows={SYSTEMS.map((s, i) => ({ label: t(`v4.series.${s}`), value: values[i], role: s === "fineTuned" ? "current" : "compare" }))}
                // Counts get a small fixed scale so 2 doesn't fill the panel like 100% would.
                max={metric.kind === "pct" ? 100 : 5}
                format={format(metric.kind)}
                // A target of 0 sits on the axis and would hide the bar start; only draw positive ones.
                target={metric.target > 0 ? metric.target : undefined}
                labelWidth={112}
              />
            );
          })}
        </div>
        <p className="mt-4 text-sm text-muted-foreground font-body">{t("v4.compareNote")}</p>
        <DataTable
          caption={t("v4.compareTitle")}
          columns={["", ...SYSTEMS.map((s) => t(`v4.series.${s}`))]}
          rows={METRICS.map((metric) => [t(`v4.metrics.${metric.key}`), ...SYSTEMS.map((s) => format(metric.kind)(metric.get(compare[s])))])}
        />
        <p className="mt-8 text-foreground font-body font-light text-lg leading-relaxed">{t("v4.decision")}</p>
      </div>
    </div>
  );
};

export default V4Chapter;
