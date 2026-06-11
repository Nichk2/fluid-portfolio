import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LENIS_ROUTES } from "@/hooks/useSmoothScroll";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Lenis pages handle smooth scroll on mount via useSmoothScroll
    if (LENIS_ROUTES.has(pathname)) return;

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
