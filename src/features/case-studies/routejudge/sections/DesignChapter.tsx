import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";
import { ScreenFigure } from "@/features/case-studies/routejudge/sections/ScreenFigure";
import {
  FoundationsColors,
  FoundationsTokens,
  FoundationsType,
  ScreenHistory,
  ScreenStats,
} from "@/features/case-studies/routejudge/media";

/**
 * Chapter 9: the product side. Placed after shipping so it doesn't interrupt
 * the ML story; it shows that the app was designed (tokens, components,
 * states) before it was coded, not decorated afterwards.
 */
export const DesignChapter = () => {
  const { t } = useTranslation("routejudge");

  return (
    <div>
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ChapterHeading eyebrow={t("design.eyebrow")} title={t("design.title")} />
        <p className={CASE_STUDY_STYLES.typography.body}>{t("design.body")}</p>
      </div>

      {/* Foundations first (the system), then the screens built from it. */}
      <div className={`mt-16 ${CASE_STUDY_STYLES.scrollReveal}`}>
        <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-2">{t("design.foundations.title")}</h3>
        <p className="text-muted-foreground font-body mb-10">{t("design.foundations.body")}</p>
        {/* Columns sized to each image's aspect ratio (1.70 vs 0.70), so both
            render at the same height side by side; stacked on phones. */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-10 lg:gap-6 items-start">
          <ScreenFigure src={FoundationsColors} copyKey="design.foundations.colors" tagKey="design.foundations.tag" width={1728} height={1015} />
          <ScreenFigure src={FoundationsType} copyKey="design.foundations.type" tagKey="design.foundations.tag" width={737} height={1046} />
        </div>
        <div className="mt-10">
          <ScreenFigure src={FoundationsTokens} copyKey="design.foundations.tokens" tagKey="design.foundations.tag" width={2704} height={2014} />
        </div>
      </div>

      {/* Stacked at full width: side by side, each screen shrank to ~520px and
          the app's pixel text became unreadable. */}
      <div className={`mt-16 space-y-20 ${CASE_STUDY_STYLES.scrollReveal}`}>
        <ScreenFigure src={ScreenStats} screen="stats" />
        <ScreenFigure src={ScreenHistory} screen="history" />
      </div>
    </div>
  );
};

export default DesignChapter;
