import { Eyebrow } from "@/components/typography/Eyebrow";
import { Heading } from "@/components/typography/Heading";

type ChapterHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

/** Numbered chapter label + editorial title, shared by every chapter of the story. */
export const ChapterHeading = ({ eyebrow, title, className }: ChapterHeadingProps) => (
  <div className={className}>
    <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
    <Heading variant="caseSection">{title}</Heading>
  </div>
);

export default ChapterHeading;
