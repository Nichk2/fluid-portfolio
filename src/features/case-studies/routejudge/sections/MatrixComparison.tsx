import { useTranslation } from "react-i18next";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { formatInt } from "@/features/case-studies/routejudge/format";
import { ConfusionMatrix } from "@/features/case-studies/routejudge/sections/ConfusionMatrix";

/**
 * The payoff of chapter 4's matrix: the same grid for the old model and the
 * deployed Qwen3, side by side on one shared shade scale. The reader saw the
 * old one already, so the change (mass moving onto the diagonal, empty
 * EASY<->HARD corners) is visible without reading a single number.
 */
export const MatrixComparison = () => {
  const { t, i18n } = useTranslation("routejudge");
  const old = m.full.baseline.confusion;
  const next = m.full.qwen3.confusion;
  const max = Math.max(...old.flat(), ...next.flat());

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-2">{t("results.matrices.title")}</h3>
      <p className="text-muted-foreground font-body mb-10">{t("results.matrices.caption", { items: formatInt(m.evalSet.items, i18n.language) })}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ConfusionMatrix matrix={old} max={max} title={t("training.series.baseline")} compact />
        <ConfusionMatrix matrix={next} max={max} title={t("training.series.qwen3")} compact />
      </div>
    </div>
  );
};

export default MatrixComparison;
