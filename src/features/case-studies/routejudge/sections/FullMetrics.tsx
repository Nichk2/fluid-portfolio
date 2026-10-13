import { useTranslation } from "react-i18next";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { formatInt, formatNumber } from "@/features/case-studies/routejudge/format";

const MODELS = ["baseline", "tinyllama", "qwen3"] as const;
const LEVELS = ["EASY", "MEDIUM", "HARD"] as const;
const LEVEL_KEYS = { EASY: "easy", MEDIUM: "medium", HARD: "hard" } as const;

/**
 * Every metric from the evaluation, for the reader who wants to check the
 * story against the numbers. Closed by default (native <details>) so it
 * doesn't compete with the charts; it is the depth layer, not the argument.
 * All values come from metrics.ts, the same ledger runs as the charts.
 */
export const FullMetrics = () => {
  const { t, i18n } = useTranslation("routejudge");
  const lang = i18n.language;
  const pct = (value: number) => `${formatNumber(value, lang)}%`;
  const seconds = (ms: number) => `${formatNumber(ms / 1000, lang, 2)} s`;
  const level = (key: (typeof LEVELS)[number]) => t(`product.tiers.${LEVEL_KEYS[key]}`);

  // One row per metric: label + one value per model.
  const rows: { label: string; values: string[]; section?: boolean }[] = [
    { label: t("results.full.accuracy"), values: MODELS.map((key) => pct(m.results[key].accuracy)) },
    { label: t("results.full.macroF1"), values: MODELS.map((key) => formatNumber(m.results[key].macroF1, lang, 3)) },
    ...LEVELS.flatMap((lvl) => [
      { label: level(lvl), values: MODELS.map(() => ""), section: true },
      ...(["precision", "recall", "f1"] as const).map((stat) => ({
        label: t(`results.full.${stat}`),
        values: MODELS.map((key) => pct(m.full[key].perClass[lvl][stat])),
      })),
    ]),
    { label: t("results.full.routing"), values: MODELS.map(() => ""), section: true },
    { label: t("results.metrics.underRouting"), values: MODELS.map((key) => pct(m.results[key].underRouting)) },
    { label: t("results.metrics.overRouting"), values: MODELS.map((key) => pct(m.results[key].overRouting)) },
    { label: t("results.full.invalid"), values: MODELS.map((key) => pct(m.full[key].invalidOutputRate)) },
    { label: t("results.full.latencyP50"), values: MODELS.map((key) => seconds(m.full[key].latencyMs.p50)) },
    { label: t("results.full.latencyP95"), values: MODELS.map((key) => seconds(m.full[key].latencyMs.p95)) },
  ];

  return (
    <details className="group rounded-3xl border border-border/30 bg-card p-6 md:p-8">
      <summary className="cursor-pointer font-display text-2xl md:text-3xl font-medium text-foreground">
        {t("results.full.title")}
      </summary>
      <p className="mt-4 text-muted-foreground font-body">{t("results.full.note", { items: formatInt(m.evalSet.items, lang) })}</p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm font-body tabular-nums">
          <caption className="sr-only">{t("results.full.title")}</caption>
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th scope="col" className="py-2 pr-6 font-medium" />
              {MODELS.map((key) => (
                <th key={key} scope="col" className="py-2 pr-6 font-medium whitespace-nowrap">
                  {t(`training.series.${key}`)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) =>
              row.section ? (
                <tr key={index}>
                  <th scope="colgroup" colSpan={MODELS.length + 1} className="pt-6 pb-2 text-left text-xs tracking-widest text-muted-foreground font-medium">
                    {row.label}
                  </th>
                </tr>
              ) : (
                <tr key={index} className="border-b border-border/40">
                  <th scope="row" className="py-2 pr-6 text-left font-normal text-muted-foreground">
                    {row.label}
                  </th>
                  {row.values.map((value, cell) => (
                    <td key={cell} className="py-2 pr-6 text-foreground">
                      {value}
                    </td>
                  ))}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </details>
  );
};

export default FullMetrics;
