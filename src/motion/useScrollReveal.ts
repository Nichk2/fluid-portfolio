import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { duration, gsapEaseOut } from "@/motion/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const REVEALED_ATTR = "data-scroll-revealed";

/** Fades/slides in every `.scroll-reveal` element on scroll. No-ops under prefers-reduced-motion. */
export const useScrollReveal = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      document.querySelectorAll(".scroll-reveal").forEach((element) => {
        gsap.set(element, { y: 0, opacity: 1 });
      });
      return;
    }

    const tweens: gsap.core.Tween[] = [];

    const reveal = (element: Element) => {
      if (element.hasAttribute(REVEALED_ATTR)) return;
      element.setAttribute(REVEALED_ATTR, "true");

      tweens.push(
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: duration.reveal,
            ease: gsapEaseOut,
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        )
      );
    };

    document.querySelectorAll(".scroll-reveal").forEach(reveal);

    // Content behind async-loaded i18next namespaces (or any other async
    // render) can mount `.scroll-reveal` elements after this effect's
    // initial query — a MutationObserver catches those instead of leaving
    // them permanently stuck at opacity: 0.
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(".scroll-reveal")) reveal(node);
          node.querySelectorAll?.(".scroll-reveal").forEach(reveal);
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      tweens.forEach((tween) => tween.scrollTrigger?.kill());
    };
  }, [prefersReducedMotion]);
};

export default useScrollReveal;
