import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { ChapterHeading } from "@/features/case-studies/routejudge/components/ChapterHeading";
import { TrainingCurves } from "@/features/case-studies/routejudge/components/TrainingCurves";

/** Chapter 6: the two training runs, and the bug that almost shipped. */
export const TrainingChapter = () => {
  const { t } = useTranslation("routejudge");

  return (
    <div className="space-y-12">
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ChapterHeading eyebrow={t("training.eyebrow")} title={t("training.title")} />
        <p className={CASE_STUDY_STYLES.typography.body}>{t("training.body")}</p>
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <TrainingCurves />
      </div>

      {/* The bug is told plainly: catching it is part of the result. */}
      <aside className={`${CASE_STUDY_STYLES.cards.process} ${CASE_STUDY_STYLES.scrollReveal}`}>
        <p className={`${CASE_STUDY_STYLES.typography.category} mb-2`}>{t("training.bugTitle")}</p>
        <p className="text-foreground font-body font-light text-lg leading-relaxed">{t("training.bugBody")}</p>
      </aside>
    </div>
  );
};

export default TrainingChapter;
