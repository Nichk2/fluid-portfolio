import { useRef, MouseEvent as ReactMouseEvent } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Magnetic hover effect for buttons/links, built on Framer Motion springs.
 * Per the motion split in the design brief: Framer Motion drives micro-interactions
 * (buttons, hover states, cards, links, menus, cursor), GSAP stays reserved for
 * scroll-tied choreography.
 */
export const useMagnetic = <T extends HTMLElement = HTMLElement>(strength = 0.3) => {
  const ref = useRef<T>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 });

  const handleMouseMove = (event: ReactMouseEvent<T>) => {
    if (prefersReducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
};

export default useMagnetic;
