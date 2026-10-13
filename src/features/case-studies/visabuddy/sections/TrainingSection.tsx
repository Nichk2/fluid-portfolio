import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { Jupyter, Modal_logo } from "@/features/case-studies/visabuddy/media";

/** Fine-tuning workflow: the notebook demo and the Modal platform. */
export const TrainingSection = () => {
  const { t } = useTranslation("visabuddy");

  const getTranslatedArray = (key: string) => {
    const data = t(key, { returnObjects: true });
    return Array.isArray(data) ? data : [];
  };

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
        {t('visaBuddy.sections.training')}
      </h2>
      <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
        {t('visaBuddy.content.trainingDescription')}
      </p>

      {/* Jupyter Notebook Demonstration */}
      <div className="mb-8">
        <div className={`${CASE_STUDY_STYLES.glassCard} p-4 mb-6`}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <div className="w-full h-64 enhanced-glass rounded-lg flex items-center justify-center overflow-hidden">
                <img loading="lazy" decoding="async" src={Jupyter} alt="Jupyter Notebook Training" className="w-full h-full object-fill" />
              </div>
            </div>
            <div className="md:w-1/3">
              <h4 className="font-display font-semibold text-primary mb-3 text-lg">
                {t('visaBuddy.content.jupyterTitle')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t('visaBuddy.content.jupyterDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Platform Recognition */}
      <div className="enhanced-glass p-8 rounded-3xl mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              {t('visaBuddy.content.modalTitle')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('visaBuddy.content.modalDescription')}
            </p>
            <ul className="space-y-3">
              {getTranslatedArray('visaBuddy.content.modalPoints').map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <span className="text-foreground">{String(point)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-48 h-48 flex items-center justify-center p-4">
              <img loading="lazy" decoding="async" src={Modal_logo} alt="Modal Logo" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
