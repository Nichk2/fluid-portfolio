import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";

interface ScreenFigureProps {
  src: string;
  /** Key under `screens.` in routejudge.json, holding `alt` and `caption`. */
  screen: "dashboard" | "stats" | "history";
}

/**
 * One app screen with its caption. Every caption starts with the same
 * "Figma design · sample data" tag: this case study is about a number that
 * wasn't real, so mockup figures must never pass for measured results.
 */
export const ScreenFigure = ({ src, screen }: ScreenFigureProps) => {
  const { t } = useTranslation("routejudge");

  return (
    <figure>
      <div className={CASE_STUDY_STYLES.images.feature}>
        {/* width/height let the browser reserve the right box before the image loads (no layout shift). */}
        <img src={src} alt={t(`screens.${screen}.alt`)} width={2560} height={1800} loading="lazy" decoding="async" className="w-full h-auto" />
      </div>
      <figcaption className="mt-4 font-body text-sm text-muted-foreground leading-relaxed">
        <span className="text-foreground font-medium">{t("screens.tag")}</span> · {t(`screens.${screen}.caption`)}
      </figcaption>
    </figure>
  );
};

export default ScreenFigure;
