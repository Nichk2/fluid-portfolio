import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { type } from "@/styles/recipes";

const variants = {
  body: type.body,
  lead: type.homeLead,
  hero: type.heroLead,
  contact: type.contactLead,
  small: type.small,
} as const;

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: keyof typeof variants;
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = "body", className, ...props }, ref) => {
    return <p ref={ref} className={cn(variants[variant], className)} {...props} />;
  },
);

Text.displayName = "Text";

export default Text;
