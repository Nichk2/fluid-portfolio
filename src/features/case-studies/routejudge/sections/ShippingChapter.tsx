import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { formatNumber } from "@/features/case-studies/routejudge/format";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";

const ITEM_COUNT = 5;

/** Chapter 8: what changed in the product. Quiet on purpose: pragmatic changes, no extra motion. */
export const ShippingChapter = () => {
  const { t, i18n } = useTranslation("routejudge");
  const lang = i18n.language;
  const vars = {
    value: formatNumber(m.results.qwen3.accuracy, lang),
    old: formatNumber(m.headline.honestAccuracy, lang),
    cost: formatNumber(m.costUsd, lang, 2),
  };

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <ChapterHeading eyebrow={t("shipping.eyebrow")} title={t("shipping.title")} />
      <ul className="space-y-5 mt-4">
        {Array.from({ length: ITEM_COUNT }, (_, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="w-2 h-2 bg-primary rounded-full mt-3 shrink-0" aria-hidden="true" />
            <p className="text-foreground font-body font-light text-lg leading-relaxed">{t(`shipping.items.${index}`, vars)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShippingChapter;
