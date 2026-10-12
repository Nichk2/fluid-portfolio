import { cn } from "@/lib/utils";

const spacing = {
  home: "py-32",
  loose: "py-32 md:py-40",
  case: "py-24",
  hero: "pt-32 pb-24",
  none: "",
} as const;

const tone = {
  background: "bg-background",
  card: "bg-card",
  transparent: "",
} as const;

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  spacing?: keyof typeof spacing;
  tone?: keyof typeof tone;
};

/** Page section with the editorial vertical rhythm. Compose `Container` inside it. */
export const Section = ({
  spacing: spacingKey = "home",
  tone: toneKey = "background",
  className,
  ...props
}: SectionProps) => {
  return (
    <section
      className={cn("relative z-10", spacing[spacingKey], tone[toneKey], className)}
      {...props}
    />
  );
};

export default Section;
