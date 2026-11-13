import { Bar, BarChart, Cell, LabelList, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useInViewOnce } from "@/features/case-studies/routejudge/useInViewOnce";
import { chrome, roleColor, type Role } from "@/features/case-studies/visabuddy/chartTheme";

export type BarRow = { label: string; value: number; role: Role };

type BarPanelProps = {
  title: string;
  note?: string;
  rows: BarRow[];
  max: number;
  format: (value: number) => string;
  /** Pre-registered target, drawn as a line; only where one was set before the run. */
  target?: number;
  labelWidth?: number;
};

/**
 * One metric, one horizontal bar per system, direct-labeled (no legend to
 * decode). Shared by every bar chart on the page so they all read the same:
 * same bar height, same label halo, same target line, same draw-in on first view.
 */
export const BarPanel = ({ title, note, rows, max, format, target, labelWidth = 96 }: BarPanelProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  // 20px bars + gaps; grows with the rows so the card never scrolls internally.
  const height = rows.length * 36 + 16;

  return (
    <figure className="rounded-3xl border border-border/30 bg-card p-6">
      <figcaption className="mb-4">
        <span className="block font-body font-medium text-foreground">{title}</span>
        {note && <span className="text-xs text-muted-foreground font-body">{note}</span>}
      </figcaption>
      <div ref={ref} style={{ height }}>
        {inView && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rows} layout="vertical" margin={{ top: 4, right: 56, bottom: 4, left: 0 }}>
              <XAxis type="number" domain={[0, max]} hide />
              <YAxis
                type="category"
                dataKey="label"
                width={labelWidth}
                tickLine={false}
                axisLine={false}
                tick={{ fill: chrome.axisText, fontSize: 12 }}
              />
              {target !== undefined && <ReferenceLine x={target} stroke={chrome.axisText} strokeWidth={1} strokeDasharray="4 3" />}
              <Bar dataKey="value" barSize={20} radius={[0, 4, 4, 0]} isAnimationActive={!prefersReducedMotion}>
                {rows.map((row) => (
                  <Cell key={row.label} fill={roleColor[row.role]} />
                ))}
                <LabelList
                  dataKey="value"
                  position="right"
                  formatter={(value: number) => format(value)}
                  // Halo in the card color so a target line can't cut through a label.
                  style={{ fill: chrome.ink, fontSize: 12, stroke: chrome.surface, strokeWidth: 4, paintOrder: "stroke" }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </figure>
  );
};

export default BarPanel;
