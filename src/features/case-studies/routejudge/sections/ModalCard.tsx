import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { routejudgeMetrics as m } from "@/features/case-studies/routejudge/metrics";
import { formatNumber } from "@/features/case-studies/routejudge/format";
import { ModalLogo } from "@/features/case-studies/routejudge/media";

const POINT_COUNT = 5;

/** "A100-80GB" -> "A100 (80 GB)": the run records keep Modal's GPU ids. */
const gpuName = (id: string) => id.replace(/-(\d+)GB$/, " ($1 GB)");

/**
 * Where the retune ran. Every GPU step was a Modal job, which is what let an
 * 8 GB laptop drive a 24B labeling model and two fine-tunes. GPU types and
 * minutes come from the runs' compute records (metrics.ts), not from copy.
 */
export const ModalCard = () => {
  const { t, i18n } = useTranslation("routejudge");
  const lang = i18n.language;
  const { compute } = m;
  const vars = {
    teacherGpu: gpuName(compute.teacherGpu),
    trainGpu: gpuName(compute.train.qwen3.gpu),
    tinyMinutes: formatNumber(compute.train.tinyllama.minutes, lang),
    qwenMinutes: formatNumber(compute.train.qwen3.minutes, lang),
    evalMachine: compute.evalMachine,
    cost: formatNumber(m.costUsd, lang, 2),
  };

  return (
    <aside className={`${CASE_STUDY_STYLES.cards.process} ${CASE_STUDY_STYLES.scrollReveal}`}>
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        <div className="flex-1">
          <p className={`${CASE_STUDY_STYLES.typography.category} mb-2`}>{t("training.modal.title")}</p>
          <p className="text-foreground font-body font-light text-lg leading-relaxed mb-6">{t("training.modal.body")}</p>
          <ul className="space-y-3">
            {Array.from({ length: POINT_COUNT }, (_, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                <span className="text-foreground font-body">{t(`training.modal.points.${index}`, vars)}</span>
              </li>
            ))}
          </ul>
        </div>
        <img src={ModalLogo} alt="Modal" loading="lazy" decoding="async" className="w-32 md:w-40 shrink-0 self-center md:self-start" />
      </div>
    </aside>
  );
};

export default ModalCard;
