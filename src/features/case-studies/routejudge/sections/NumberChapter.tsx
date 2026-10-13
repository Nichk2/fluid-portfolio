import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { formatNumber } from "@/features/case-studies/routejudge/format";

/**
 * Chapter 2: the reported number, alone on the page.
 * Deliberately still: it should look solid and finished, which is what makes
 * the next two chapters land. Sans figure per the dataviz rule for hero
 * numbers (a serif reads as decoration on a figure).
 */
export const NumberChapter = () => {
  const { t, i18n } = useTranslation("routejudge");

  return (
    <div className={`text-center ${CASE_STUDY_STYLES.scrollReveal}`}>
      <Eyebrow className="mb-8">{t("number.eyebrow")}</Eyebrow>
      <p className="font-body font-semibold text-foreground text-7xl md:text-[9rem] leading-none tracking-tight">
        {formatNumber(m.headline.claimedAccuracy, i18n.language)}%
      </p>
      <p className={`${CASE_STUDY_STYLES.typography.subtitle} mt-8`}>{t("number.caption")}</p>
    </div>
  );
};

export default NumberChapter;
