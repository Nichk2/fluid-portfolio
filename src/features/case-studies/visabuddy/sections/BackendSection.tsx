import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { Back, Chroma, Fast_api, Transformers, Vectors } from "@/features/case-studies/visabuddy/media";

/** Backend demo and the retrieval stack. */
export const BackendSection = () => {
  const { t } = useTranslation("visabuddy");

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
        {t('visaBuddy.sections.backend')}
      </h2>
      <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
        {t('visaBuddy.content.backendDescription')}
      </p>

      {/* Backend GIF Demonstration */}
      <div className="mb-8">
        <div className={`${CASE_STUDY_STYLES.glassCard} p-4 mb-6`}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <div className="w-full h-64 enhanced-glass rounded-lg flex items-center justify-center overflow-hidden">
                <img loading="lazy" decoding="async" src={Back} alt="Backend Demonstration" className="w-full h-full object-fill" />
              </div>
            </div>
            <div className="md:w-1/3">
              <h4 className="font-display font-semibold text-primary mb-3 text-lg">
                {t('visaBuddy.content.backendDemoTitle')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t('visaBuddy.content.backendDemoDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Backend Tech Stack */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="enhanced-glass p-4 rounded-xl text-center">

            <img loading="lazy" decoding="async" src={Fast_api} alt="FastAPI" className="w-38 h-12 mb-2 m-auto" />
          <h4 className="font-display font-semibold text-primary">
            {t('visaBuddy.content.techStack.fastapi')}
          </h4>
          <p className="text-xs text-muted-foreground">
            {t('visaBuddy.content.techStack.fastapiDesc')}
          </p>
        </div>
        <div className="enhanced-glass p-4 rounded-xl text-center">
            <img loading="lazy" decoding="async" src={Chroma} alt="ChromaDB" className="w-14 m-auto" />
          <h4 className="font-display font-semibold text-accent">
            {t('visaBuddy.content.techStack.chromadb')}
          </h4>
          <p className="text-xs text-muted-foreground">
            {t('visaBuddy.content.techStack.chromadbDesc')}
          </p>
        </div>
        <div className="enhanced-glass p-4 rounded-xl text-center">

            <img loading="lazy" decoding="async" src={Transformers} alt="Transformers" className="w-24 m-auto" />

          <h4 className="font-display font-semibold text-primary">
            {t('visaBuddy.content.techStack.transformers')}
          </h4>
          <p className="text-xs text-muted-foreground">
            {t('visaBuddy.content.techStack.transformersDesc')}
          </p>
        </div>
        <div className="enhanced-glass p-4 rounded-xl text-center">

            <img loading="lazy" decoding="async" src={Vectors} alt="Sentence Transformers" className="w-14 m-auto" />

          <h4 className="font-display font-semibold text-accent">
            {t('visaBuddy.content.techStack.sentenceTransformers')}
          </h4>
          <p className="text-xs text-muted-foreground">
            {t('visaBuddy.content.techStack.sentenceTransformersDesc')}
          </p>
        </div>
      </div>
    </div>
  );
};
