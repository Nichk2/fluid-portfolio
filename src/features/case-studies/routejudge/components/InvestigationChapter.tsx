import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { formatInt, formatNumber } from "@/features/case-studies/routejudge/format";
import { ChapterHeading } from "@/features/case-studies/routejudge/components/ChapterHeading";

const CLUE_COUNT = 4;

/**
 * Chapter 3: the audit, as four clues.
 * On wide screens the title stays pinned (CSS sticky) while the clues scroll
 * past it, so the reader keeps "Four clues it wasn't" in view as the case
 * builds. Sticky instead of a GSAP pin: same effect, no scroll hijacking, and
 * nothing to tear down under reduced motion.
 */
export const InvestigationChapter = () => {
  const { t, i18n } = useTranslation("routejudge");
  const lang = i18n.language;
  const vars = {
    shortcut: formatNumber(m.audit.categoryShortcutOld, lang),
    stale: formatInt(m.audit.trainedOnStaleRows, lang),
    local: formatInt(m.audit.localTrainRows, lang),
  };

  return (
    <div className="grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <div className={`lg:sticky lg:top-32 ${CASE_STUDY_STYLES.scrollReveal}`}>
          <ChapterHeading eyebrow={t("investigation.eyebrow")} title={t("investigation.title")} />
          <p className={CASE_STUDY_STYLES.typography.body}>{t("investigation.intro")}</p>
        </div>
      </div>

      <ol className="lg:col-span-7 space-y-6">
        {Array.from({ length: CLUE_COUNT }, (_, index) => (
          <li key={index} className={`${CASE_STUDY_STYLES.cards.feature} ${CASE_STUDY_STYLES.scrollReveal}`}>
            <span className="font-body text-sm text-primary tabular-nums">{String(index + 1).padStart(2, "0")}</span>
            <h3 className={`${CASE_STUDY_STYLES.typography.subsectionTitle} mt-2 mb-3`}>
              {t(`investigation.clues.${index}.title`)}
            </h3>
            <p className="text-muted-foreground font-body font-light leading-relaxed">
              {t(`investigation.clues.${index}.body`, vars)}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InvestigationChapter;
