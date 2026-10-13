import { useTranslation } from "react-i18next";
import { Check, X } from "lucide-react";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { formatNumber } from "@/features/case-studies/routejudge/format";

/**
 * The four targets set before training, checked against the deployed model.
 * The missed one stays visible: reporting it is the point of the story.
 * State is shown with an icon AND a word, never color alone.
 */
export const TargetsChecklist = () => {
  const { t, i18n } = useTranslation("routejudge");
  const lang = i18n.language;
  const q = m.results.qwen3;
  const langs = m.parallelLanguageAccuracy.qwen3;
  const gap = Math.max(langs.en, langs.pt, langs.zh) - Math.min(langs.en, langs.pt, langs.zh);

  const rows = [
    { key: "accuracy", value: `${formatNumber(q.accuracy, lang)}%`, met: q.accuracy >= m.targets.accuracy },
    { key: "hardRecall", value: `${formatNumber(q.hardRecall, lang)}%`, met: q.hardRecall >= m.targets.hardRecall },
    { key: "underRouting", value: `${formatNumber(q.underRouting, lang)}%`, met: q.underRouting <= m.targets.underRouting },
    {
      key: "languageGap",
      value: formatNumber(gap, lang),
      met: gap <= m.targets.languageGap,
      missedBy: formatNumber(gap - m.targets.languageGap, lang),
      note: t("results.targets.languageNote", {
        en: formatNumber(langs.en, lang),
        pt: formatNumber(langs.pt, lang),
        zh: formatNumber(langs.zh, lang),
      }),
    },
  ] as const;

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-6">{t("results.targetsTitle")}</h3>
      <ul className="divide-y divide-border/40 border-y border-border/40">
        {rows.map((row) => (
          <li key={row.key} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
            <span className="font-body text-foreground">
              {t(`results.targets.${row.key}`, { target: m.targets[row.key] })}
              {"note" in row && <span className="block text-sm text-muted-foreground mt-1">{row.note}</span>}
            </span>
            <span className="flex items-center gap-3 font-body">
              <span className="text-foreground font-semibold">{row.value}</span>
              <span className={`flex items-center gap-1 text-sm ${row.met ? "text-foreground" : "text-primary"}`}>
                {row.met ? <Check className="w-4 h-4" aria-hidden="true" /> : <X className="w-4 h-4" aria-hidden="true" />}
                {row.met ? t("results.targets.met") : t("results.targets.missed", { gap: "missedBy" in row ? row.missedBy : "" })}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TargetsChecklist;
