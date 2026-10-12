import { useState } from "react";

/** Slide index with wraparound. `length` is the size of the list currently on screen. */
export const useCarousel = (length: number) => {
  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex((current) => (current <= 0 ? Math.max(length - 1, 0) : current - 1));
  };

  const next = () => {
    setIndex((current) => {
      if (length <= 1) return 0;
      return current >= length - 1 ? 0 : current + 1;
    });
  };

  const goTo = (nextIndex: number) => setIndex(nextIndex);

  return { index, previous, next, goTo };
};

export type BeforeAfterTab = "before" | "after";

/** Before/after gallery. Switching tabs returns to the first slide. */
export const useBeforeAfter = <T,>(before: readonly T[], after: readonly T[]) => {
  const [tab, setTab] = useState<BeforeAfterTab>("before");
  const items = tab === "before" ? before : after;
  const carousel = useCarousel(items.length);

  const selectTab = (nextTab: BeforeAfterTab) => {
    setTab(nextTab);
    carousel.goTo(0);
  };

  return { tab, selectTab, items, ...carousel };
};
