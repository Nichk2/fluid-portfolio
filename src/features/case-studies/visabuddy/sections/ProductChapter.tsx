import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { ChapterHeading } from "@/features/case-studies/routejudge/sections/ChapterHeading";

const CARD_COUNT = 3;

/** Chapter 1: what the assistant does, and why the domain is hard. */
export const ProductChapter = () => {
  const { t } = useTranslation("visabuddy");

  return (
    <div className={CASE_STUDY_STYLES.scrollReveal}>
      <ChapterHeading eyebrow={t("product.eyebrow")} title={t("product.title")} />
      <p className={CASE_STUDY_STYLES.typography.body}>{t("product.body")}</p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {Array.from({ length: CARD_COUNT }, (_, index) => (
          <div key={index} className="enhanced-glass p-6 rounded-xl">
            <h3 className="font-display font-semibold text-primary mb-2">{t(`product.cards.${index}.title`)}</h3>
            <p className="text-sm text-muted-foreground">{t(`product.cards.${index}.body`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductChapter;
