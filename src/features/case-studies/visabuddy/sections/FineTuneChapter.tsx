import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { visabuddyMetrics as m } from "@/features/case-studies/visabuddy/metrics";
import { formatInt, formatNumber } from "@/features/case-studies/routejudge/format";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";
import { DataTable } from "@/features/case-studies/routejudge/sections/DataTable";
import { BarPanel } from "@/features/case-studies/visabuddy/sections/BarPanel";

const VERSIONS = ["baseline", "v2", "v3", "v4"] as const;
const T = m.v4Targets;
// Targets are the ones pre-registered for v4 (reports/V4_PLAN.md). The refusal panel's target
// is the full 32, which is also its scale, so no line is drawn there.
const METRICS = [
  { key: "factCoverageGold", target: T.factCoverageGold, lowerIsBetter: false },
  { key: "factCoverageRules", target: T.factCoverageRules, lowerIsBetter: false },
  { key: "overRefusalGold", target: T.overRefusal, lowerIsBetter: true },
  { key: "mustRefuseRefused", target: undefined, lowerIsBetter: false },
] as const;
const STEP_COUNT = 4;

/**
 * Chapter 4: what fine-tuning fixed across versions (small multiples, one
 * metric per panel, v4 in the story color, the rest gray), the stale-rule
 * failure it couldn't fix, and the quote-first redesign that answered it.
 */
export const FineTuneChapter = () => {
  const { t, i18n } = useTranslation("visabuddy");
  const lang = i18n.language;
  const { versions } = m;
  const total = versions.mustRefuseTotal;
  const format = (key: (typeof METRICS)[number]["key"]) => (value: number) =>
    key === "mustRefuseRefused" ? formatInt(value, lang) : `${formatNumber(value, lang)}%`;
  const title = (key: (typeof METRICS)[number]["key"]) => t(`finetune.metrics.${key}`, { total });

  return (
    <div className="space-y-16">
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ChapterHeading eyebrow={t("finetune.eyebrow")} title={t("finetune.title")} />
        <p className={CASE_STUDY_STYLES.typography.body}>{t("finetune.body")}</p>
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-6">{t("finetune.versionsTitle")}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {METRICS.map((metric) => (
            <BarPanel
              key={metric.key}
              title={title(metric.key)}
              note={metric.lowerIsBetter ? t("finetune.metrics.lowerIsBetter") : undefined}
              rows={VERSIONS.map((v) => ({ label: t(`finetune.versions.${v}`), value: versions[v][metric.key], role: v === "v4" ? "current" : "past" }))}
              max={metric.key === "mustRefuseRefused" ? total * 1.15 : 100}
              format={format(metric.key)}
              target={metric.target}
            />
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground font-body">{t("finetune.versionsNote")}</p>
        <DataTable
          caption={t("finetune.versionsTitle")}
          columns={["", ...METRICS.map((metric) => title(metric.key))]}
          rows={VERSIONS.map((v) => [t(`finetune.versions.${v}`), ...METRICS.map((metric) => format(metric.key)(versions[v][metric.key]))])}
        />
      </div>

      <aside className={`${CASE_STUDY_STYLES.cards.process} ${CASE_STUDY_STYLES.scrollReveal}`}>
        <p className={`${CASE_STUDY_STYLES.typography.category} mb-2`}>{t("finetune.staleTitle")}</p>
        <p className="text-foreground font-body font-light text-lg leading-relaxed">{t("finetune.staleBody")}</p>
      </aside>

      {/* The redesign as a numbered flow: an ordered list, so it reads in order without the picture. */}
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4">{t("finetune.pipelineTitle")}</h3>
        <p className="text-muted-foreground font-body font-light text-lg leading-relaxed mb-8">{t("finetune.pipelineBody")}</p>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: STEP_COUNT }, (_, index) => (
            <li key={index} className="relative rounded-2xl border border-border/30 bg-card p-5">
              <span className="font-body text-sm text-primary tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              <p className="font-display text-xl text-foreground mt-1 mb-2">{t(`finetune.steps.${index}.name`)}</p>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{t(`finetune.steps.${index}.body`)}</p>
              {index < STEP_COUNT - 1 && (
                <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default FineTuneChapter;
