import { useTranslation } from "react-i18next";
import { Bar, BarChart, Cell, LabelList, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { chrome, seriesColor, type ModelKey } from "@/features/case-studies/routejudge/chartTheme";
import { formatNumber } from "@/features/case-studies/routejudge/format";
import { useInViewOnce } from "@/features/case-studies/routejudge/useInViewOnce";
import { DataTable } from "@/features/case-studies/routejudge/components/DataTable";

const MODELS: ModelKey[] = ["baseline", "tinyllama", "qwen3"];
const METRICS = [
  { key: "accuracy", target: m.targets.accuracy, lowerIsBetter: false },
  { key: "hardRecall", target: m.targets.hardRecall, lowerIsBetter: false },
  { key: "underRouting", target: m.targets.underRouting, lowerIsBetter: true },
] as const;

/**
 * Small multiples, one per metric, instead of one grouped chart: the three
 * metrics don't share a meaning (and one is lower-is-better), so they get
 * separate panels on the same 0-100 scale. Bars are direct-labeled through the
 * category axis (each bar is its own row), the old model is gray on purpose
 * (emphasis on the new models), and each panel shows its pre-set target.
 */
export const ResultsCharts = () => {
  const { t, i18n } = useTranslation("routejudge");
  const lang = i18n.language;
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const name = (key: ModelKey) => t(`training.series.${key}`);
  const pct = (value: number) => `${formatNumber(value, lang)}%`;

  return (
    <div>
      <div ref={ref} className="grid md:grid-cols-3 gap-6">
        {METRICS.map((metric) => {
          const rows = MODELS.map((model) => ({ model, label: name(model), value: m.results[model][metric.key] }));
          return (
            <figure key={metric.key} className="rounded-3xl border border-border/30 bg-card p-6">
              <figcaption className="mb-4">
                <span className="block font-body font-medium text-foreground">{t(`results.metrics.${metric.key}`)}</span>
                <span className="text-xs text-muted-foreground font-body">
                  {t("results.metrics.target")} {metric.lowerIsBetter ? "≤" : "≥"} {metric.target}%
                  {metric.lowerIsBetter ? ` · ${t("results.metrics.lowerIsBetter")}` : ""}
                </span>
              </figcaption>
              {/* Height covers three 20px bars, their gaps and the axis band. */}
              <div className="h-48">
                {inView && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={rows} layout="vertical" margin={{ top: 4, right: 48, bottom: 4, left: 0 }}>
                      <XAxis type="number" domain={[0, 100]} hide />
                      <YAxis
                        type="category"
                        dataKey="label"
                        width={96}
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: chrome.axisText, fontSize: 12 }}
                      />
                      <ReferenceLine x={metric.target} stroke={chrome.axisText} strokeWidth={1} />
                      <Bar dataKey="value" barSize={20} radius={[0, 4, 4, 0]} isAnimationActive={!prefersReducedMotion}>
                        {rows.map((row) => (
                          <Cell key={row.model} fill={seriesColor[row.model]} />
                        ))}
                        <LabelList
                          dataKey="value"
                          position="right"
                          formatter={(value: number) => pct(value)}
                          // Halo in the card color, painted under the glyphs, so the target
                          // line can't cut through a label that lands on it.
                          style={{ fill: chrome.ink, fontSize: 12, stroke: chrome.surface, strokeWidth: 4, paintOrder: "stroke" }}
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </figure>
          );
        })}
      </div>

      <DataTable
        caption={t("results.eyebrow")}
        columns={["", ...METRICS.map((metric) => t(`results.metrics.${metric.key}`))]}
        rows={MODELS.map((model) => [name(model), ...METRICS.map((metric) => pct(m.results[model][metric.key]))])}
      />
    </div>
  );
};

export default ResultsCharts;
