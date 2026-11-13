import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { visabuddyMetrics as m } from "@/features/case-studies/visabuddy/metrics";
import { Metrics1, Metrics2 } from "@/features/case-studies/visabuddy/media";
import { formatInt, formatNumber } from "@/features/case-studies/routejudge/format";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";
import { LossCurve } from "@/features/case-studies/visabuddy/sections/LossCurve";
import { GroupedBars } from "@/features/case-studies/visabuddy/sections/GroupedBars";

const CLUE_COUNT = 4;
export const PROGRAMS = ["express_entry", "study_permit", "work_permit", "pgwp", "visitor", "family", "citizenship"] as const;

/**
 * Chapter 2: v1's published numbers, then why they didn't hold.
 * The original dashboard images stay on the page as evidence, tagged
 * "Claimed", so the reader sees exactly what was shown before.
 */
export const ClaimsChapter = () => {
  const { t, i18n } = useTranslation("visabuddy");
  const lang = i18n.language;
  const { headline, v1, v4 } = m;
  const vars = {
    score: headline.claimedScore,
    queries: formatInt(headline.claimedTestQueries, lang),
    formula: v1.lossCurveFormula,
    steps: formatInt(v1.lossCurvePlottedSteps, lang),
    compared: formatInt(v1.oldQueriesCompared, lang),
    right: formatInt(v1.oldQueriesTop1RightProgram, lang),
    pages: formatInt(v1.pagesCrawled, lang),
    ee: formatInt(v1.pagesByProgram.express_entry, lang),
    rows: formatInt(v1.sftRows, lang),
    similar: formatInt(v1.sftRowsSimilarityGe05, lang),
  };
  const v1Pages: Record<string, number> = v1.pagesByProgram;
  const stat = "rounded-2xl border border-border/30 bg-secondary/40 p-6";

  return (
    <div className="space-y-20">
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <ChapterHeading eyebrow={t("claims.eyebrow")} title={t("claims.title")} />
        <p className={CASE_STUDY_STYLES.typography.body}>{t("claims.body", vars)}</p>
      </div>

      <figure className={CASE_STUDY_STYLES.scrollReveal}>
        <figcaption className="flex items-center gap-3 mb-4">
          <span className="rounded-full border border-primary/60 px-3 py-0.5 text-xs uppercase tracking-widest text-primary font-body">
            {t("claims.claimTag")}
          </span>
          <span className="font-body text-muted-foreground">{t("claims.dashboardTitle")}</span>
        </figcaption>
        <div className="grid md:grid-cols-2 gap-4">
          <img loading="lazy" decoding="async" src={Metrics1} alt={t("claims.dashboardAlt1")} className="w-full rounded-2xl bg-white" />
          <img loading="lazy" decoding="async" src={Metrics2} alt={t("claims.dashboardAlt2")} className="w-full rounded-2xl bg-white" />
        </div>
      </figure>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-8">{t("claims.cluesTitle")}</h3>
        <ol className="grid md:grid-cols-2 gap-6">
          {Array.from({ length: CLUE_COUNT }, (_, index) => (
            <li key={index} className={CASE_STUDY_STYLES.cards.feature}>
              <span className="font-body text-sm text-primary tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              <h4 className={`${CASE_STUDY_STYLES.typography.subsectionTitle} mt-2 mb-3`}>{t(`claims.clues.${index}.title`)}</h4>
              <p className="text-muted-foreground font-body font-light leading-relaxed">{t(`claims.clues.${index}.body`, vars)}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Claimed vs measured: the same question ("does retrieval work?"), two answers. */}
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-6">{t("claims.claimedVsMeasured")}</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className={stat}>
            <p className="text-sm text-muted-foreground font-body">{t("claims.retrievalClaimed")}</p>
            <p className="text-5xl font-body font-semibold text-muted-foreground mt-2 line-through decoration-primary/60">
              {formatNumber(headline.claimedRetrievalSuccess, lang, 0)}%
            </p>
          </div>
          <div className={stat}>
            <p className="text-sm text-muted-foreground font-body">{t("claims.retrievalMeasured")}</p>
            <p className="text-5xl font-body font-semibold text-foreground mt-2">{formatNumber(headline.measuredRecallAt5, lang)}%</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground font-body">{t("claims.retrievalNote")}</p>
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <LossCurve />
      </div>

      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <GroupedBars
          title={t("claims.pagesTitle")}
          subtitle={t("claims.pagesSubtitle")}
          series={[
            { key: "a", name: t("claims.pagesSeries.v1", { n: formatInt(v1.pagesCrawled, lang) }), role: "past" },
            { key: "b", name: t("claims.pagesSeries.v4", { n: formatInt(v4.pagesCrawled, lang) }), role: "current" },
          ]}
          rows={PROGRAMS.map((p) => ({ label: t(`programs.${p}`), a: v1Pages[p] ?? 0, b: v4.pagesByProgram[p] }))}
          // Headroom for the value labels to the right of the longest bar.
          max={Math.max(...Object.values(v4.pagesByProgram)) * 1.1}
          format={(value) => formatInt(value, lang)}
        />
      </div>
    </div>
  );
};

export default ClaimsChapter;
