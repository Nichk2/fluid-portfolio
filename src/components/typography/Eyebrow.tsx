import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { type } from "@/styles/recipes";

type EyebrowProps = React.HTMLAttributes<HTMLParagraphElement>;

/** Small tracked label that introduces a section. Margin is left to the caller. */
export const Eyebrow = forwardRef<HTMLParagraphElement, EyebrowProps>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} className={cn(type.eyebrow, className)} {...props} />;
  },
);

Eyebrow.displayName = "Eyebrow";

export default Eyebrow;
