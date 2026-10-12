import { cn } from "@/lib/utils";

const widths = {
  page: "max-w-7xl",
  wide: "max-w-6xl",
  reading: "max-w-5xl",
  prose: "max-w-4xl",
  narrow: "max-w-3xl",
  text: "max-w-2xl",
} as const;

const gutters = {
  home: "px-8",
  case: "px-6 md:px-8",
} as const;

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: keyof typeof widths;
  gutter?: keyof typeof gutters;
};

/** Centers content and applies the page gutter. Does not add vertical padding. */
export const Container = ({
  width = "page",
  gutter = "home",
  className,
  ...props
}: ContainerProps) => {
  return <div className={cn("mx-auto", widths[width], gutters[gutter], className)} {...props} />;
};

export default Container;
