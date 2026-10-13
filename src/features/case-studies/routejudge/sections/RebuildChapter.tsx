import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { formatInt, formatNumber } from "@/features/case-studies/routejudge/format";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";

const STEP_COUNT = 5;

/**
 * Chapter 5: how the data was rebuilt, as a numbered process down a single
 * rule line. A vertical sequence because each step depends on the one before
 * (the rubric defines the labels, the labels need a teacher, and so on).
 */
export const RebuildChapter = () => {
  const { t, i18n } = useTranslation("routejudge");
  const lang = i18n.language;
  const vars = {
    train: formatInt(m.data.trainRows, lang),
    wildchat: formatInt(m.data.wildchatRows, lang),
    agreement: formatNumber(m.data.teacherAgreement, lang),
    now: formatNumber(m.audit.categoryShortcutNew, lang),
    before: formatNumber(m.audit.categoryShortcutOld, lang),
    localEasy: formatInt(m.tierCheck["qwen2.5:3b"].EASY, lang),
    localHard: formatInt(m.tierCheck["qwen2.5:3b"].HARD, lang),
    tinyEasy: formatInt(m.tierCheck.tinyllama.EASY, lang),
  };

  return (
    <div>
      <ChapterHeading
        eyebrow={t("rebuild.eyebrow")}
        title={t("rebuild.title")}
        className={CASE_STUDY_STYLES.scrollReveal}
      />
      <ol className="mt-12 border-l border-border/60 space-y-12">
        {Array.from({ length: STEP_COUNT }, (_, index) => (
          <li key={index} className={`relative pl-10 ${CASE_STUDY_STYLES.scrollReveal}`}>
            {/* Marker sits on the rule line; ring in the page color keeps it legible over the line. */}
            <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" aria-hidden="true" />
            <h3 className={`${CASE_STUDY_STYLES.typography.subsectionTitle} mb-3`}>{t(`rebuild.steps.${index}.title`)}</h3>
            <p className="text-muted-foreground font-body font-light text-lg leading-relaxed">
              {t(`rebuild.steps.${index}.body`, vars)}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RebuildChapter;
