import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "@/contexts/SmoothScrollContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
