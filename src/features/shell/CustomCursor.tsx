import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type CursorVariant = "default" | "link" | "media";

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select';
const MEDIA_SELECTOR = 'img, video, [data-cursor="media"]';

/**
 * Custom cursor micro-interaction (Framer Motion, per the design brief's motion split).
 * Disabled on touch devices and under prefers-reduced-motion — the native cursor
 * remains the source of truth there, so nothing about pointer behavior degrades.
 */
const CustomCursor = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isTouch, setIsTouch] = useState(true);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    const active = !isTouch && !prefersReducedMotion;
    document.body.classList.toggle("custom-cursor-active", active);
    return () => document.body.classList.remove("custom-cursor-active");
  }, [isTouch, prefersReducedMotion]);

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      if (!visible) setVisible(true);

      const target = event.target as HTMLElement;
      if (target.closest(MEDIA_SELECTOR)) {
        setVariant("media");
      } else if (target.closest(INTERACTIVE_SELECTOR)) {
        setVariant("link");
      } else {
        setVariant("default");
      }
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isTouch, prefersReducedMotion, visible, x, y]);

  if (isTouch || prefersReducedMotion) return null;

  const size = variant === "media" ? 72 : variant === "link" ? 40 : 10;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-100 rounded-full mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: "var(--color-foreground)",
      }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    />
  );
};

export default CustomCursor;
