import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";

interface ScreenFigureProps {
  src: string;
  /** Key under `screens.` in routejudge.json, holding `alt` and `caption`. */
  screen?: "dashboard" | "stats" | "history";
  /** Full copy key instead of `screens.<screen>` (e.g. "design.foundations.colors"). */
  copyKey?: string;
  /** The tag before the caption. App screens say "sample data"; foundations don't need to. */
  tagKey?: string;
  /** Pixel size of the file, so the browser reserves the right box before it loads. */
  width?: number;
  height?: number;
}

/**
 * One Figma export with its caption. App screens are tagged "Figma design ·
 * sample data": this case study is about a number that wasn't real, so mockup
 * figures must never pass for measured results. Foundations (colors, type,
 * tokens) hold no data, so they carry their own tag.
 */
export const ScreenFigure = ({ src, screen, copyKey, tagKey = "screens.tag", width = 2560, height = 1800 }: ScreenFigureProps) => {
  const { t } = useTranslation("routejudge");
  const key = copyKey ?? `screens.${screen}`;

  return (
    <figure>
      {/* A desktop screen is small on a phone, so the image links to the full
          2x file: one tap opens it where the reader can zoom. */}
      <a href={src} target="_blank" rel="noopener noreferrer" className={`block ${CASE_STUDY_STYLES.images.feature}`}>
        {/* width/height let the browser reserve the right box before the image loads (no layout shift). */}
        <img src={src} alt={t(`${key}.alt`)} width={width} height={height} loading="lazy" decoding="async" className="w-full h-auto" />
      </a>
      <figcaption className="mt-4 font-body text-sm text-muted-foreground leading-relaxed">
        <span className="text-foreground font-medium">{t(tagKey)}</span> · {t(`${key}.caption`)}
      </figcaption>
    </figure>
  );
};

export default ScreenFigure;
