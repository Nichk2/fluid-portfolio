import { useTranslation } from "react-i18next";
import { Check, X } from "lucide-react";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { visabuddyMetrics as m } from "@/features/case-studies/visabuddy/metrics";
import { formatInt, formatNumber } from "@/features/case-studies/routejudge/format";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";
import { ReplyTimes } from "@/features/case-studies/visabuddy/sections/ReplyTimes";

type CriterionKey = keyof typeof m.finalExam.criteria;
const CRITERIA: CriterionKey[] = ["wrong_rules_shown", "must_refuse_refused", "fact_coverage", "over_refusal_rate", "median_reply_s"];

/**
 * Chapter 6: the sealed exam. The failed criterion stays first and visible:
 * reporting it is the point. State is an icon AND a word, never color alone.
 * The wrong answers are the model's real outputs, exported from the run.
 */
export const ExamChapter = () => {
  const { t, i18n } = useTranslation("visabuddy");
  const lang = i18n.language;
  const exam = m.finalExam;
  const value = (key: CriterionKey) => {
    const v = exam.criteria[key].value;
    if (key === "fact_coverage" || key === "over_refusal_rate") return `${formatNumber(v * 100, lang)}%`;
    if (key === "median_reply_s") return `${formatNumber(v, lang)} s`;
    if (key === "must_refuse_refused") return `${formatInt(v, lang)} / ${formatInt(exam.mustRefuse, lang)}`;
    return formatInt(v, lang);
  };

  return (
    <div className="space-y-16">
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ChapterHeading eyebrow={t("exam.eyebrow")} title={t("exam.title")} />
        <p className={CASE_STUDY_STYLES.typography.body}>
          {t("exam.body", { questions: formatInt(exam.questions, lang), refuse: formatInt(exam.mustRefuse, lang) })}
        </p>
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-6">{t("exam.checklistTitle")}</h3>
        <ul className="divide-y divide-border/40 border-y border-border/40">
          {CRITERIA.map((key) => {
            const met = exam.criteria[key].pass;
            return (
              <li key={key} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <span className="font-body text-foreground">{t(`exam.criteria.${key}`)}</span>
                <span className="flex items-center gap-3 font-body">
                  <span className="text-foreground font-semibold tabular-nums">{value(key)}</span>
                  <span className={`flex items-center gap-1 text-sm ${met ? "text-foreground" : "text-primary"}`}>
                    {met ? <Check className="w-4 h-4" aria-hidden="true" /> : <X className="w-4 h-4" aria-hidden="true" />}
                    {met ? t("exam.met") : t("exam.missed")}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-2xl font-display italic text-primary">{t("exam.verdict")}</p>
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-6">{t("exam.wrongTitle")}</h3>
        <ul className="space-y-6">
          {exam.wrongAnswers.map((w) => (
            <li key={w.id} className="rounded-3xl border border-border/30 bg-card p-6">
              {/* Questions and answers are the run's real text, in English on both locales. */}
              <dl className="grid md:grid-cols-3 gap-6 font-body" lang="en">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-2" lang={lang}>{t("exam.wrongCols.question")}</dt>
                  <dd className="text-foreground">{w.question}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-2" lang={lang}>{t("exam.wrongCols.answered")}</dt>
                  <dd className="flex items-start gap-2 text-foreground">
                    <X className="w-4 h-4 mt-1 shrink-0 text-primary" aria-hidden="true" />
                    <span>{w.answer}</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-2" lang={lang}>{t("exam.wrongCols.source")}</dt>
                  <dd className="flex items-start gap-2 text-foreground">
                    <Check className="w-4 h-4 mt-1 shrink-0" aria-hidden="true" />
                    <span>
                      {w.expectedVerdict ? `${w.expectedVerdict === "yes" ? "Yes" : "No"}. ` : ""}
                      {w.expectedFact}
                    </span>
                  </dd>
                </div>
              </dl>
              <p className="mt-4 pt-4 border-t border-border/30 text-sm text-muted-foreground font-body">{t(`exam.wrongWhy.${w.id}`)}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ReplyTimes />
      </div>

      <p className={`${CASE_STUDY_STYLES.typography.body} ${CASE_STUDY_STYLES.scrollReveal}`}>{t("exam.meaning")}</p>
    </div>
  );
};

export default ExamChapter;
