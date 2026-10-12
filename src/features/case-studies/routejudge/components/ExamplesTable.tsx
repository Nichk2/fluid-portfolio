import { useTranslation } from "react-i18next";
import { Check, X } from "lucide-react";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";

const LABEL_KEYS = { EASY: "easy", MEDIUM: "medium", HARD: "hard" } as const;

/**
 * Real test questions the old model got two levels wrong (EASY <-> HARD) and
 * the new one gets right, two per language. Selected and verified by the
 * export script, not hand-typed, so the table can't drift from the runs.
 */
export const ExamplesTable = () => {
  const { t } = useTranslation("routejudge");
  const label = (value: keyof typeof LABEL_KEYS) => t(`product.tiers.${LABEL_KEYS[value]}`);

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-6">{t("results.examplesTitle")}</h3>

      {/* Phones: one card per question. Four table columns at 390px squeeze the
          question into a sliver and push "New model" off-screen. */}
      <ul className="md:hidden divide-y divide-border/40 border-y border-border/40">
        {m.examples.map((example) => (
          <li key={example.id} className="py-4 font-body">
            <p className="text-foreground mb-3" lang={example.language}>
              {example.query}
            </p>
            <dl className="grid grid-cols-3 gap-2 text-sm">
              <div>
                <dt className="text-muted-foreground">{t("results.examples.expected")}</dt>
                <dd className="text-foreground">{label(example.gold)}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">{t("results.examples.before")}</dt>
                <dd className="inline-flex items-center gap-1 text-muted-foreground">
                  <X className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="line-through decoration-primary/60">{label(example.old)}</span>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">{t("results.examples.after")}</dt>
                <dd className="inline-flex items-center gap-1 text-foreground">
                  <Check className="w-4 h-4" aria-hidden="true" />
                  {label(example.new)}
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full font-body text-sm md:text-base">
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th scope="col" className="py-3 pr-6 font-medium">{t("results.examples.question")}</th>
              <th scope="col" className="py-3 pr-6 font-medium whitespace-nowrap">{t("results.examples.expected")}</th>
              <th scope="col" className="py-3 pr-6 font-medium whitespace-nowrap">{t("results.examples.before")}</th>
              <th scope="col" className="py-3 font-medium whitespace-nowrap">{t("results.examples.after")}</th>
            </tr>
          </thead>
          <tbody>
            {m.examples.map((example) => (
              <tr key={example.id} className="border-b border-border/40 align-top">
                <td className="py-4 pr-6 text-foreground" lang={example.language}>
                  {example.query}
                </td>
                <td className="py-4 pr-6 text-foreground whitespace-nowrap">{label(example.gold)}</td>
                <td className="py-4 pr-6 whitespace-nowrap text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <X className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span className="line-through decoration-primary/60">{label(example.old)}</span>
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap text-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Check className="w-4 h-4" aria-hidden="true" />
                    {label(example.new)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamplesTable;
