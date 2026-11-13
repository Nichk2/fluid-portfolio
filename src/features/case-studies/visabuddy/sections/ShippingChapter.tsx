import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { visabuddyMetrics as m } from "@/features/case-studies/visabuddy/metrics";
import { formatNumber } from "@/features/case-studies/routejudge/format";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";
import { DataTable } from "@/features/case-studies/routejudge/sections/DataTable";
import { BarPanel } from "@/features/case-studies/visabuddy/sections/BarPanel";

const OPTION_COUNT = 4;
const OPTION_COLS = ["option", "cost", "trade", "fits"] as const;

/**
 * Chapter 7: where it runs and what it cost. Costs are Modal's own billing
 * (reports/costs.json in the VisaBuddy repo), not estimates; the one estimate
 * (cost per 1,000 answers) is labeled as such in the copy.
 */
export const ShippingChapter = () => {
  const { t, i18n } = useTranslation("visabuddy");
  const lang = i18n.language;
  const { costs } = m;
  const usd = (value: number) => (lang.startsWith("pt") ? `US$ ${formatNumber(value, lang, 2)}` : `$${formatNumber(value, lang, 2)}`);
  const rows = [
    { key: "teacher", value: costs.byRole.teacher },
    { key: "training", value: costs.byRole.training },
    { key: "comparison", value: costs.byRole.comparison },
    { key: "colab", value: costs.colabUsd },
  ];

  return (
    <div className="space-y-16">
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ChapterHeading eyebrow={t("shipping.eyebrow")} title={t("shipping.title")} />
        <p className={CASE_STUDY_STYLES.typography.body}>{t("shipping.body")}</p>
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <BarPanel
          title={t("shipping.costTitle")}
          note={t("shipping.costSubtitle")}
          rows={rows.map((row) => ({ label: t(`shipping.costRoles.${row.key}`), value: row.value, role: row.key === "colab" ? "current" : "past" }))}
          max={Math.max(...rows.map((row) => row.value)) * 1.2}
          format={usd}
          labelWidth={176}
        />
        <p className="mt-4 text-muted-foreground font-body">
          {t("shipping.costNote", { total: formatNumber(costs.modalTotal, lang, 2), per1000: formatNumber(costs.estUsdPer1000AnswersT4, lang, 2) })}
        </p>
        <DataTable
          caption={t("shipping.costTitle")}
          columns={["", "USD"]}
          rows={rows.map((row) => [t(`shipping.costRoles.${row.key}`), usd(row.value)])}
        />
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-6">{t("shipping.optionsTitle")}</h3>
        <div className="overflow-x-auto">
          <table className="w-full font-body text-sm md:text-base">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                {OPTION_COLS.map((col) => (
                  <th key={col} scope="col" className="py-3 pr-6 font-medium">
                    {t(`shipping.optionsCols.${col}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: OPTION_COUNT }, (_, index) => (
                // The chosen option (first row) is marked in the copy and in weight, not by color alone.
                <tr key={index} className={`border-b border-border/40 align-top ${index === 0 ? "font-medium" : ""}`}>
                  {OPTION_COLS.map((col) => (
                    <td key={col} className={`py-4 pr-6 ${col === "option" && index === 0 ? "text-primary" : "text-foreground"}`}>
                      {t(`shipping.options.${index}.${col}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <aside className={`${CASE_STUDY_STYLES.cards.process} ${CASE_STUDY_STYLES.scrollReveal}`}>
        <p className={`${CASE_STUDY_STYLES.typography.category} mb-2`}>{t("shipping.honestTitle")}</p>
        <p className="text-foreground font-body font-light text-lg leading-relaxed">{t("shipping.honestBody")}</p>
      </aside>
    </div>
  );
};

export default ShippingChapter;
