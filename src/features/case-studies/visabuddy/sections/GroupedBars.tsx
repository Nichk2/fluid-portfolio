import { Bar, BarChart, LabelList, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useInViewOnce } from "@/features/case-studies/routejudge/useInViewOnce";
import { DataTable } from "@/features/case-studies/routejudge/sections/DataTable";
import { chrome, roleColor, type Role } from "@/features/case-studies/visabuddy/chartTheme";

type Series = { key: "a" | "b"; name: string; role: Role };
export type GroupRow = { label: string; a: number; b: number };

type GroupedBarsProps = {
  title: string;
  subtitle: string;
  series: [Series, Series];
  rows: GroupRow[];
  max: number;
  format: (value: number) => string;
  target?: number;
};

/**
 * Two systems side by side per category (before/after on the same scale).
 * Legend above the plot (two series), values direct-labeled, a dashed target
 * line only where one was set in advance, and the table twin underneath.
 */
export const GroupedBars = ({ title, subtitle, series, rows, max, format, target }: GroupedBarsProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  // Two 14px bars per row plus the row gap.
  const height = rows.length * 52 + 24;

  return (
    <figure className="rounded-3xl border border-border/30 bg-card p-6 md:p-8">
      <figcaption className="mb-6">
        <span className="block text-2xl md:text-3xl font-display font-medium text-foreground">{title}</span>
        <span className="text-muted-foreground font-body text-sm">{subtitle}</span>
      </figcaption>

      {/* Legend: color keys beside text-colored labels (text never wears the series color). */}
      <ul className="flex flex-wrap gap-6 mb-4 font-body text-sm text-foreground">
        {series.map((s) => (
          <li key={s.key} className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: roleColor[s.role] }} aria-hidden="true" />
            {s.name}
          </li>
        ))}
      </ul>

      <div ref={ref} style={{ height }}>
        {inView && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rows} layout="vertical" barGap={2} margin={{ top: 4, right: 48, bottom: 4, left: 0 }}>
              <XAxis type="number" domain={[0, max]} hide />
              <YAxis type="category" dataKey="label" width={104} tickLine={false} axisLine={false} tick={{ fill: chrome.axisText, fontSize: 12 }} />
              {target !== undefined && <ReferenceLine x={target} stroke={chrome.axisText} strokeWidth={1} strokeDasharray="4 3" />}
              {series.map((s) => (
                <Bar key={s.key} dataKey={s.key} fill={roleColor[s.role]} barSize={14} radius={[0, 3, 3, 0]} isAnimationActive={!prefersReducedMotion}>
                  <LabelList
                    dataKey={s.key}
                    position="right"
                    formatter={(value: number) => format(value)}
                    style={{ fill: chrome.ink, fontSize: 11, stroke: chrome.surface, strokeWidth: 4, paintOrder: "stroke" }}
                  />
                </Bar>
              ))}
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      <DataTable caption={title} columns={["", series[0].name, series[1].name]} rows={rows.map((row) => [row.label, format(row.a), format(row.b)])} />
    </figure>
  );
};

export default GroupedBars;
