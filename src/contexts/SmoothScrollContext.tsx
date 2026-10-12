import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext<Lenis | null>(null);

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    setLenis(instance);
    instance.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      instance.destroy();
      setLenis(null);
      gsap.ticker.remove(onTick);
    };
  }, [prefersReducedMotion]);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

/** Returns the shared Lenis instance, or null (init not finished / reduced motion). */
export const useLenis = () => useContext(SmoothScrollContext);

export default SmoothScrollProvider;
