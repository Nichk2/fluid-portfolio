import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useLenis } from "@/contexts/SmoothScrollContext";
import { useMagnetic } from "@/motion/useMagnetic";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

const Hero = () => {
  const { t } = useTranslation("hero");
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const scrollCue = useMagnetic<HTMLButtonElement>(0.3);
  const lenis = useLenis();
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (!element) return;
    if (lenis) {
      lenis.scrollTo(element);
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Hero entrance is exactly the kind of scroll-independent timeline choreography
    // GSAP stays reserved for, per the motion split (Framer Motion handles hover/click micro-interactions).
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([eyebrowRef.current, titleRef.current, subtitleRef.current, descriptionRef.current], {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        eyebrowRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          titleRef.current,
          { y: 100, opacity: 0, filter: "blur(20px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.4 },
          "-=0.3"
        )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.8"
        )
        .fromTo(
          descriptionRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center relative bg-background px-6 pt-20 z-10"
    >
      <div className="text-center max-w-6xl mx-auto">
        <Eyebrow ref={eyebrowRef} className="mb-8">
          {t("subtitle")}
        </Eyebrow>

        <div className="mb-10">
          <Heading ref={titleRef} level={1} variant="hero">
            {t("title")}
          </Heading>
        </div>

        <div className="mb-12">
          <Text ref={descriptionRef} variant="hero" className="max-w-3xl mx-auto">
            {t("description.base")}
            <span className="text-foreground font-medium"> {t("description.highlight1")}</span>,
            <span className="text-foreground font-medium"> {t("description.highlight2")}</span>
            <span className="text-primary font-medium"> {t("description.highlight3")}</span>
          </Text>
        </div>
      </div>

      <motion.button
        ref={scrollCue.ref}
        style={scrollCue.style}
        onMouseMove={scrollCue.onMouseMove}
        onMouseLeave={scrollCue.onMouseLeave}
        onClick={scrollToPortfolio}
        animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 p-4 rounded-full bg-secondary/80 cursor-pointer border border-border/50 hover:border-primary/50 transition-colors duration-500 group z-20"
        aria-label={t("scrollIndicator.ariaLabel")}
      >
        <ChevronDown className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
      </motion.button>
    </section>
  );
};

export default Hero;
