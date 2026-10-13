import { useTranslation } from "react-i18next";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { levelColor, levelInk } from "@/features/case-studies/routejudge/chartTheme";
import { DataTable } from "@/features/case-studies/routejudge/sections/DataTable";

const LEVELS = ["EASY", "MEDIUM", "HARD"] as const;
const LEVEL_KEYS = { EASY: "easy", MEDIUM: "medium", HARD: "hard" } as const;
type Level = (typeof LEVELS)[number];
type Counts = Record<Level, number>;
type Panel = "baseline" | "qwen3";

/** Below this share a segment is too narrow for its count; the hover title and the table still carry it. */
const MIN_LABEL_SHARE = 0.08;

/**
 * Which label each model gave inside each topic, as 100% bars. This is the
 * evidence for clue 2 ("it learned topics, not difficulty"): the old model's
 * bars are nearly one color per topic, the new model's carry all three.
 * Plain HTML bars rather than a chart library: seven rows of three segments
 * don't need axes, and the counts are printed in place.
 */
export const TopicLabels = () => {
  const { t } = useTranslation("routejudge");
  const data = m.labelsByDomain;
  const topics = Object.keys(data.gold) as (keyof typeof data.gold)[];
  const level = (key: Level) => t(`product.tiers.${LEVEL_KEYS[key]}`);
  const topic = (key: string) => t(`results.topics.names.${key}`);
  const model = (key: Panel) => t(`training.series.${key}`);

  const Bar = ({ counts, name }: { counts: Counts; name: string }) => {
    const total = LEVELS.reduce((sum, key) => sum + counts[key], 0);
    return (
      // 2px gaps in the card color separate the segments without relying on color alone.
      <div className="flex h-7 gap-0.5 rounded-md overflow-hidden" role="img" aria-label={`${name}: ${LEVELS.map((key) => `${level(key)} ${counts[key]}`).join(", ")}`}>
        {LEVELS.map((key) => {
          const share = counts[key] / total;
          if (share === 0) return null;
          return (
            <div
              key={key}
              title={`${level(key)}: ${counts[key]}`}
              className="flex items-center justify-center text-xs font-body font-medium tabular-nums"
              style={{ width: `${share * 100}%`, backgroundColor: levelColor[key], color: levelInk[key] }}
            >
              {share >= MIN_LABEL_SHARE ? counts[key] : null}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <figure>
      <figcaption className="mb-8">
        <span className="block text-2xl md:text-3xl font-display font-medium text-foreground mb-2">{t("results.topics.title")}</span>
        <span className="text-muted-foreground font-body">{t("results.topics.caption")}</span>
      </figcaption>

      {/* Legend: color is never the only cue, but it names the ramp's order once. */}
      <ul className="flex flex-wrap gap-6 mb-8 font-body text-sm text-foreground">
        {LEVELS.map((key) => (
          <li key={key} className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: levelColor[key] }} aria-hidden="true" />
            {level(key)}
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {(["baseline", "qwen3"] as const).map((panel) => (
          <div key={panel}>
            <p className="font-body font-medium text-foreground mb-4">{model(panel)}</p>
            <div className="space-y-3">
              {topics.map((key) => (
                <div key={key} className="grid grid-cols-[7rem_1fr] items-center gap-3">
                  <span className="text-sm font-body text-muted-foreground">{topic(key)}</span>
                  <Bar counts={data[panel][key]} name={`${model(panel)}, ${topic(key)}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <DataTable
        caption={t("results.topics.title")}
        columns={[
          t("results.topics.topic"),
          ...(["baseline", "qwen3", "gold"] as const).map((key) =>
            `${key === "gold" ? t("results.topics.real") : model(key)} (${LEVELS.map(level).join(" / ")})`,
          ),
        ]}
        rows={topics.map((key) => [
          topic(key),
          ...(["baseline", "qwen3", "gold"] as const).map((panel) => LEVELS.map((lvl) => data[panel][key][lvl]).join(" / ")),
        ])}
      />
    </figure>
  );
};

export default TopicLabels;
