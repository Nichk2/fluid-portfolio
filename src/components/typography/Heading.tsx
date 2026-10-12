import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { type } from "@/styles/recipes";

const variants = {
  hero: type.heroTitle,
  section: type.homeSectionTitle,
  contact: type.contactTitle,
  case: type.caseTitle,
  caseSection: type.caseSectionTitle,
} as const;

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3;
  variant?: keyof typeof variants;
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, variant = "section", className, ...props }, ref) => {
    const Tag = `h${level}` as "h1" | "h2" | "h3";
    return <Tag ref={ref} className={cn(variants[variant], className)} {...props} />;
  },
);

Heading.displayName = "Heading";

export default Heading;
