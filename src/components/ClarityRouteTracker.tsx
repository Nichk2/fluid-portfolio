import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackClarityPage } from "@/lib/clarity";

const ClarityRouteTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    trackClarityPage(`#${pathname}`);
  }, [pathname]);

  return null;
};

export default ClarityRouteTracker;
