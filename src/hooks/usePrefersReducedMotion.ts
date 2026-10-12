import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

export const usePrefersReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    const handleChange = () => setPrefersReduced(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReduced;
};

export default usePrefersReducedMotion;
