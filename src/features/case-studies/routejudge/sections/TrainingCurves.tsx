import { useTranslation } from "react-i18next";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { chrome, seriesColor } from "@/features/case-studies/routejudge/chartTheme";
import { formatInt, formatNumber } from "@/features/case-studies/routejudge/format";
import { useInViewOnce } from "@/features/case-studies/routejudge/useInViewOnce";
import { DataTable } from "@/features/case-studies/routejudge/sections/DataTable";

const MODELS = ["qwen3", "tinyllama"] as const;

/**
 * Validation macro-F1 over training steps for both models (one axis, two
 * series). Marks follow the dataviz specs: 2px lines, >= 8px end markers
 * ringed in the surface color, hairline solid grid, legend present for two
 * series, hover tooltip with a crosshair, and a table view underneath.
 */
export const TrainingCurves = () => {
  const { t, i18n } = useTranslation("routejudge");
  const lang = i18n.language;
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  // Both runs evaluated at the same steps; merge into one row per step.
  const rows = m.curves.qwen3.map((point, index) => ({
    step: point.step,
    qwen3: point.macroF1,
    tinyllama: m.curves.tinyllama[index].macroF1,
  }));
  const name = (key: (typeof MODELS)[number]) => t(`training.series.${key}`);
  const f1 = (value: number) => formatNumber(value, lang, 3);

  return (
    <figure className="rounded-3xl border border-border/30 bg-card p-6 md:p-8">
      <figcaption className="mb-6">
        <span className="block text-2xl md:text-3xl font-display font-medium text-foreground">{t("training.chartTitle")}</span>
        <span className="text-muted-foreground font-body text-sm">
          {t("training.chartSubtitle", { valid: formatInt(m.data.validRows, lang) })}
        </span>
      </figcaption>

      {/* Legend: line keys beside text-colored labels (text never wears the series color). */}
      <ul className="flex flex-wrap gap-6 mb-4 font-body text-sm text-foreground">
        {MODELS.map((key) => (
          <li key={key} className="flex items-center gap-2">
            <span className="inline-block w-5 h-0.5 rounded-full" style={{ backgroundColor: seriesColor[key] }} aria-hidden="true" />
            {name(key)}
          </li>
        ))}
      </ul>

      {/* Fixed height includes the x-axis band, so the card never scrolls internally. */}
      <div ref={ref} className="h-80">
        {inView && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rows} margin={{ top: 8, right: 16, bottom: 24, left: 0 }}>
              <CartesianGrid stroke={chrome.grid} strokeWidth={1} vertical={false} />
              {/* Numeric axis: steps are a quantity, so 700 -> 771 must be shorter than 100 -> 200. */}
              <XAxis
                dataKey="step"
                type="number"
                domain={[100, rows[rows.length - 1].step]}
                ticks={[100, 200, 300, 400, 500, 600, 700, rows[rows.length - 1].step]}
                stroke={chrome.grid}
                tick={{ fill: chrome.axisText, fontSize: 12 }}
                tickLine={false}
                label={{ value: t("training.xLabel"), position: "insideBottom", offset: -16, fill: chrome.axisText, fontSize: 12 }}
              />
              <YAxis
                domain={[0.6, 0.85]}
                ticks={[0.6, 0.65, 0.7, 0.75, 0.8, 0.85]}
                tickFormatter={(value: number) => formatNumber(value, lang, 2)}
                stroke={chrome.grid}
                tick={{ fill: chrome.axisText, fontSize: 12 }}
                tickLine={false}
                width={48}
              />
              <Tooltip
                cursor={{ stroke: chrome.axisText, strokeWidth: 1 }}
                contentStyle={{ background: chrome.surface, border: `1px solid ${chrome.grid}`, borderRadius: 12 }}
                labelStyle={{ color: chrome.axisText }}
                itemStyle={{ color: chrome.ink }}
                labelFormatter={(step) => `${t("chart.step")} ${step}`}
                formatter={(value: number, key: string) => [f1(value), name(key as (typeof MODELS)[number])]}
              />
              {MODELS.map((key) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={seriesColor[key]}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  dot={{ r: 4, fill: seriesColor[key], stroke: chrome.surface, strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: seriesColor[key], stroke: chrome.surface, strokeWidth: 2 }}
                  isAnimationActive={!prefersReducedMotion}
                  animationDuration={1200}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      <DataTable
        caption={t("training.chartTitle")}
        columns={[t("chart.step"), name("qwen3"), name("tinyllama")]}
        rows={rows.map((row) => [row.step, f1(row.qwen3), f1(row.tinyllama)])}
      />
    </figure>
  );
};

export default TrainingCurves;
