import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { Metrics1, Metrics2 } from "@/features/case-studies/visabuddy/media";

/** Training and RAG evaluation charts with their readings. */
export const MetricsSection = () => {
  const { t } = useTranslation("visabuddy");

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
        {t('visaBuddy.sections.metrics')}
      </h2>

      <div className="space-y-12">
        {/* Training Metrics */}
        <div className="enhanced-glass p-8 rounded-3xl">
          <div className="text-center mb-6">
            <h3 className="font-display font-semibold text-primary text-2xl mb-2">
              {t('visaBuddy.content.metrics.trainingTitle')}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('visaBuddy.content.metrics.trainingSubtitle')}
            </p>
          </div>

          {/* Training Metrics Chart */}
          <div className="mb-8">
            <div className="w-full h-80 rounded-xl flex items-center justify-center overflow-hidden p-4">
              <img loading="lazy" decoding="async" src={Metrics1} alt="Training Metrics Chart" className="w-full h-full object-fill rounded-2xl" />
            </div>
          </div>

          {/* Explanation */}
          <div className="max-w-4xl mx-auto">
            <p className="text-foreground text-lg mb-4">
              {t('visaBuddy.content.metrics.trainingDescription')}
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="enhanced-glass p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span className="font-medium">{t('visaBuddy.content.metrics.trainingPoints.convergence')}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t('visaBuddy.content.metrics.trainingPoints.convergenceDesc')}</p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-primary/80 rounded-full mr-2"></div>
                  <span className="font-medium">{t('visaBuddy.content.metrics.trainingPoints.loss')}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t('visaBuddy.content.metrics.trainingPoints.lossDesc')}</p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-primary/60 rounded-full mr-2"></div>
                  <span className="font-medium">{t('visaBuddy.content.metrics.trainingPoints.optimized')}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t('visaBuddy.content.metrics.trainingPoints.optimizedDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RAG Evaluation Metrics */}
        <div className="enhanced-glass p-8 rounded-3xl">
          <div className="text-center mb-6">
            <h3 className="font-display font-semibold text-accent text-2xl mb-2">
              {t('visaBuddy.content.metrics.ragTitle')}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('visaBuddy.content.metrics.ragSubtitle')}
            </p>
          </div>

          {/* RAG Metrics Chart */}
          <div className="mb-8">
            <div className="w-full h-130  rounded-xl flex items-center justify-center overflow-hidden p-4">
              <img loading="lazy" decoding="async" src={Metrics2} alt="RAG Metrics Chart" className="w-full h-full object-fill rounded-2xl" />
            </div>
          </div>

          {/* Explanation */}
          <div className="max-w-4xl mx-auto">
            <p className="text-foreground text-lg mb-4">
              {t('visaBuddy.content.metrics.ragDescription')}
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="enhanced-glass p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                  <span className="font-medium">{t('visaBuddy.content.metrics.ragPoints.retrieval')}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t('visaBuddy.content.metrics.ragPoints.retrievalDesc')}</p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-accent/80 rounded-full mr-2"></div>
                  <span className="font-medium">{t('visaBuddy.content.metrics.ragPoints.relevance')}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t('visaBuddy.content.metrics.ragPoints.relevanceDesc')}</p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-accent/60 rounded-full mr-2"></div>
                  <span className="font-medium">{t('visaBuddy.content.metrics.ragPoints.sources')}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t('visaBuddy.content.metrics.ragPoints.sourcesDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
