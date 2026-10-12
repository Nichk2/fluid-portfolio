import { useTranslation } from "react-i18next";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { seriesColor } from "@/features/case-studies/routejudge/chartTheme";

const LABEL_KEYS = { EASY: "easy", MEDIUM: "medium", HARD: "hard" } as const;

/**
 * The old model's confusion matrix as a real HTML table (so it is its own
 * accessible "table view"). Cell shade is a single-hue sequential scale:
 * how many questions landed there, as opacity of the rose series color.
 * Counts are printed in every cell because this is a 3x3 table to be read,
 * not a dense chart to be scanned.
 */
export const ConfusionMatrix = () => {
  const { t } = useTranslation("routejudge");
  const { labels, matrix } = m.baselineConfusion;
  const max = Math.max(...matrix.flat());
  const label = (key: (typeof labels)[number]) => t(`product.tiers.${LABEL_KEYS[key]}`);

  return (
    <figure>
      <figcaption className="mb-6">
        <span className="block text-2xl md:text-3xl font-display font-medium text-foreground mb-2">
          {t("honest.matrixTitle")}
        </span>
        <span className="text-muted-foreground font-body">{t("honest.matrixCaption")}</span>
      </figcaption>
      <div className="overflow-x-auto">
        <table className="border-separate border-spacing-0.5 font-body tabular-nums mx-auto">
          <thead>
            <tr>
              <td />
              {labels.map((col) => (
                <th key={col} scope="col" className="px-3 pb-2 text-xs tracking-widest text-muted-foreground font-medium">
                  {label(col)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, rowIndex) => (
              <tr key={labels[rowIndex]}>
                <th scope="row" className="pr-4 text-right text-xs tracking-widest text-muted-foreground font-medium">
                  {label(labels[rowIndex])}
                </th>
                {row.map((count, colIndex) => {
                  const share = count / max;
                  const correct = rowIndex === colIndex;
                  return (
                    <td
                      key={colIndex}
                      className="w-20 h-16 md:w-28 md:h-20 text-center rounded-md text-lg"
                      style={{
                        backgroundColor: `color-mix(in oklab, ${seriesColor.qwen3} ${Math.round(12 + share * 70)}%, transparent)`,
                        // Light ink on light fills would fail contrast; switch by fill strength.
                        color: share > 0.6 ? "#0a0a11" : "#edebe5",
                        outline: correct ? "1px solid rgb(237 235 229 / 0.35)" : undefined,
                      }}
                    >
                      {count}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
};

export default ConfusionMatrix;
