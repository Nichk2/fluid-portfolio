import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";
import { ScreenFigure } from "@/features/case-studies/routejudge/sections/ScreenFigure";
import { ScreenHistory, ScreenStats } from "@/features/case-studies/routejudge/media";

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
