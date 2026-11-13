import { useTranslation } from "react-i18next";
import { CartesianGrid, ReferenceLine, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { visabuddyMetrics as m } from "@/features/case-studies/visabuddy/metrics";
import { chrome, roleColor } from "@/features/case-studies/visabuddy/chartTheme";
import { formatNumber } from "@/features/case-studies/routejudge/format";
import { useInViewOnce } from "@/features/case-studies/routejudge/useInViewOnce";
import { DataTable } from "@/features/case-studies/routejudge/sections/DataTable";

/**
 * Strip plot: one dot per exam question, answered and refused on separate
 * rows. Every reply is visible (25 points is few enough to show them all), so
 * the median isn't hiding a long tail. Dots are 8px, ringed in the surface
 * color so overlapping ones stay countable.
 */
export const ReplyTimes = () => {
  const { t, i18n } = useTranslation("visabuddy");
  const lang = i18n.language;
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const exam = m.finalExam;
  const rowName = { answer: t("exam.timesRows.answer"), refuse: t("exam.timesRows.refuse") };
  // y is the row: 1 = answered, 0 = refused. Refusals all take ~4-5 s and would stack into
  // one dot, so each point gets a small fixed vertical offset (by index: no randomness).
  const points = exam.replySeconds.map((r, index) => ({ id: r.id, s: r.s, y: (r.mustRefuse ? 0 : 1) + ((index % 5) - 2) * 0.08 }));
  const secs = (value: number) => `${formatNumber(value, lang)} s`;
  const max = Math.ceil(exam.maxReplyS / 5) * 5;
  // The pre-registered limit, from the report's own criterion ("<= 15").
  const limit = Number(exam.criteria.median_reply_s.target.replace(/[^\d.]/g, ""));

  return (
    <figure className="rounded-3xl border border-border/30 bg-card p-6 md:p-8">
      <figcaption className="mb-6">
        <span className="block text-2xl md:text-3xl font-display font-medium text-foreground">{t("exam.timesTitle")}</span>
        <span className="text-muted-foreground font-body text-sm">{t("exam.timesSubtitle")}</span>
      </figcaption>
      <div ref={ref} className="h-48">
        {inView && (
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 8, right: 16, bottom: 24, left: 0 }}>
              <CartesianGrid stroke={chrome.grid} vertical horizontal={false} />
              <XAxis
                type="number"
                dataKey="s"
                domain={[0, max]}
                tickCount={max / 5 + 1}
                stroke={chrome.grid}
                tick={{ fill: chrome.axisText, fontSize: 12 }}
                tickLine={false}
                label={{ value: t("chart.seconds"), position: "insideBottom", offset: -16, fill: chrome.axisText, fontSize: 12 }}
              />
              <YAxis
                type="number"
                dataKey="y"
                domain={[-0.5, 1.5]}
                ticks={[0, 1]}
                tickFormatter={(y: number) => (y === 1 ? rowName.answer : rowName.refuse)}
                stroke={chrome.grid}
                tick={{ fill: chrome.axisText, fontSize: 12 }}
                tickLine={false}
                width={88}
              />
              <ReferenceLine x={limit} stroke={chrome.axisText} strokeDasharray="4 3" />
              <Tooltip
                cursor={false}
                contentStyle={{ background: chrome.surface, border: `1px solid ${chrome.grid}`, borderRadius: 12 }}
                itemStyle={{ color: chrome.ink }}
                // Only the time is shown: y is a row position plus the offset, not a value.
                formatter={(value: number, key: string) => (key === "s" ? [secs(value), t("chart.seconds")] : [null, null])}
              />
              <Scatter data={points} fill={roleColor.current} stroke={chrome.surface} strokeWidth={2} isAnimationActive={!prefersReducedMotion} />
            </ScatterChart>
          </ResponsiveContainer>
        )}
      </div>
      <p className="mt-4 text-muted-foreground font-body">
        {t("exam.timesNote", { median: formatNumber(exam.medianReplyS, lang), max: formatNumber(exam.maxReplyS, lang) })}
      </p>
      <DataTable
        caption={t("exam.timesTitle")}
        columns={[t("exam.timesCols.id"), t("exam.timesCols.kind"), t("chart.seconds")]}
        rows={exam.replySeconds.map((r) => [r.id, r.mustRefuse ? rowName.refuse : rowName.answer, formatNumber(r.s, lang)])}
      />
    </figure>
  );
};

export default ReplyTimes;
