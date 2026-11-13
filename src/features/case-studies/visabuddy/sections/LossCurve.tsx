import { useTranslation } from "react-i18next";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { visabuddyMetrics as m } from "@/features/case-studies/visabuddy/metrics";
import { chrome, roleColor } from "@/features/case-studies/visabuddy/chartTheme";
import { formatNumber } from "@/features/case-studies/routejudge/format";
import { useInViewOnce } from "@/features/case-studies/routejudge/useInViewOnce";
import { DataTable } from "@/features/case-studies/routejudge/sections/DataTable";

const SERIES = [
  { key: "v1", role: "past" },
  { key: "v4", role: "current" },
] as const;

/**
 * v1's published loss curve (a formula) next to v4's real training loss, on
 * one numeric step axis. The point is that both look the same: a low loss
 * proves nothing about the answers. v4 logs every step and v1 every 5th, so
 * the merged rows leave gaps that each line bridges with connectNulls.
 */
export const LossCurve = () => {
  const { t, i18n } = useTranslation("visabuddy");
  const lang = i18n.language;
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const { v1Formula, v4Real } = m.v4.lossCurves;

  const byStep = new Map<number, { step: number; v1?: number; v4?: number }>();
  for (const point of v1Formula) byStep.set(point.step, { step: point.step, v1: point.loss });
  for (const point of v4Real) byStep.set(point.step, { ...byStep.get(point.step), step: point.step, v4: point.loss });
  const rows = [...byStep.values()].sort((a, b) => a.step - b.step);
  const loss = (value: number) => formatNumber(value, lang, 3);
  const name = (key: (typeof SERIES)[number]["key"]) => t(`claims.lossSeries.${key}`);
  const last = v4Real[v4Real.length - 1].loss;

  return (
    <figure className="rounded-3xl border border-border/30 bg-card p-6 md:p-8">
      <figcaption className="mb-6">
        <span className="block text-2xl md:text-3xl font-display font-medium text-foreground">{t("claims.lossTitle")}</span>
        <span className="text-muted-foreground font-body text-sm">{t("claims.lossSubtitle")}</span>
      </figcaption>

      <ul className="flex flex-wrap gap-6 mb-4 font-body text-sm text-foreground">
        {SERIES.map((s) => (
          <li key={s.key} className="flex items-center gap-2">
            <span className="inline-block w-5 h-0.5 rounded-full" style={{ backgroundColor: roleColor[s.role] }} aria-hidden="true" />
            {name(s.key)}
          </li>
        ))}
      </ul>

      <div ref={ref} className="h-72">
        {inView && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rows} margin={{ top: 8, right: 16, bottom: 24, left: 0 }}>
              <CartesianGrid stroke={chrome.grid} strokeWidth={1} vertical={false} />
              <XAxis
                dataKey="step"
                type="number"
                domain={[0, 500]}
                ticks={[0, 100, 200, 300, 400, 500]}
                stroke={chrome.grid}
                tick={{ fill: chrome.axisText, fontSize: 12 }}
                tickLine={false}
                label={{ value: t("chart.step"), position: "insideBottom", offset: -16, fill: chrome.axisText, fontSize: 12 }}
              />
              <YAxis
                domain={[0, 2.5]}
                ticks={[0, 0.5, 1, 1.5, 2, 2.5]}
                tickFormatter={(value: number) => formatNumber(value, lang, 1)}
                stroke={chrome.grid}
                tick={{ fill: chrome.axisText, fontSize: 12 }}
                tickLine={false}
                width={40}
              />
              <Tooltip
                cursor={{ stroke: chrome.axisText, strokeWidth: 1 }}
                contentStyle={{ background: chrome.surface, border: `1px solid ${chrome.grid}`, borderRadius: 12 }}
                labelStyle={{ color: chrome.axisText }}
                itemStyle={{ color: chrome.ink }}
                labelFormatter={(step) => `${t("chart.step")} ${step}`}
                formatter={(value: number, key: string) => [loss(value), name(key as (typeof SERIES)[number]["key"])]}
              />
              {SERIES.map((s) => (
                <Line
                  key={s.key}
                  type="monotone"
                  dataKey={s.key}
                  connectNulls
                  stroke={roleColor[s.role]}
                  strokeWidth={2}
                  // v1's line is dashed as well as gray: drawn, not measured.
                  strokeDasharray={s.key === "v1" ? "6 4" : undefined}
                  dot={false}
                  activeDot={{ r: 5, fill: roleColor[s.role], stroke: chrome.surface, strokeWidth: 2 }}
                  isAnimationActive={!prefersReducedMotion}
                  animationDuration={1200}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      <p className="mt-6 text-muted-foreground font-body">{t("claims.lossNote", { last: loss(last) })}</p>

      <DataTable
        caption={t("claims.lossTitle")}
        columns={[t("chart.step"), name("v1"), name("v4")]}
        // Every 20th step keeps the table readable; the chart has every point.
        rows={rows.filter((row) => row.step % 20 === 0).map((row) => [row.step, row.v1 === undefined ? "—" : loss(row.v1), row.v4 === undefined ? "—" : loss(row.v4)])}
      />
    </figure>
  );
};

export default LossCurve;
