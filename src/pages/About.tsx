import { Mail, Code, Cpu, Palette, Search } from "lucide-react";
import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/features/shell/Navigation";
import Footer from "@/features/shell/Footer";
import ScrollToTopButton from "@/features/shell/ScrollToTopButton";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { buttons, type } from "@/styles/recipes";
import Eu from "../Image/Eu/Nicholas - Copia.jpg";

gsap.registerPlugin(ScrollTrigger);

const SKILL_CARD = "bg-secondary/50 border border-border/30 rounded-2xl p-8 hover:border-primary/30 transition-colors duration-500";

const About = () => {
  const { t } = useTranslation(["about", "contact"]);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const aiBoxRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([titleRef.current, imageRef.current, skillsRef.current], {
          y: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
        });
        gsap.set(contentRef.current?.querySelectorAll(".about-paragraph") ?? [], {
          y: 0,
          opacity: 1,
        });
        return;
      }

      // Hero animations
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        imageRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      // Stagger content paragraphs
      const paragraphs = contentRef.current?.querySelectorAll(".about-paragraph");
      if (paragraphs) {
        gsap.fromTo(
          paragraphs,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.6
          }
        );
      }

      // Skills section scroll animation
      gsap.fromTo(
        skillsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Continuous shimmer for the AI card border
      if (aiBoxRef.current) {
        const borderElement = aiBoxRef.current.querySelector(".glowing-border");
        if (borderElement) {
          gsap.to(borderElement, {
            backgroundPosition: "200% 0%",
            duration: 4,
            repeat: -1,
            ease: "linear"
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // i18next-http-backend loads namespaces asynchronously — on the very first
  // render (before the "about" JSON has arrived) `returnObjects` calls can
  // resolve to the key string instead of an array. Guard every one of them;
  // an unguarded `.map()`/`.join()` here throws with no error boundary in
  // the tree, which blanks the entire app, not just this component.
  const getArray = (key: string): string[] => {
    const data = t(key, { returnObjects: true });
    return Array.isArray(data) ? (data as string[]) : [];
  };

  const designSkills = getArray("skills.design.items");
  const researchSkills = getArray("skills.research.items");
  const aiSkills = getArray("skills.ai.items");
  const frontendSkills = getArray("skills.frontend.items");
  const technicalTools = getArray("paragraphs.technical.tools");

  return (
    <div ref={containerRef} className="noise-bg min-h-screen bg-background relative z-10">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Text content */}
            <div className="order-2 lg:order-1">
              <h2
                ref={titleRef}
                className="font-display italic font-medium text-5xl md:text-7xl text-foreground tracking-tight mb-12"
              >
                {t("title")}
              </h2>

              <div ref={contentRef} className="space-y-6 leading-relaxed">
                <p className={`about-paragraph ${type.body}`}>
                  {t("paragraphs.intercultural.base")}{" "}
                  <span className="text-foreground font-medium">
                    {t("paragraphs.intercultural.highlight")}
                  </span>
                  {t("paragraphs.intercultural.suffix")}
                </p>

                <p className={`about-paragraph ${type.body}`}>
                  {t("paragraphs.data.base")}{" "}
                  <span className="text-foreground font-medium">
                    {t("paragraphs.data.highlight")}
                  </span>
                  {t("paragraphs.data.suffix")}
                </p>

                <p className={`about-paragraph ${type.body}`}>
                  {t("paragraphs.technical.base")}{" "}
                  {technicalTools.join(", ")}{" "}
                  {t("paragraphs.technical.coding")}{" "}
                  {t("paragraphs.technical.languages")}
                  {t("paragraphs.technical.suffix")}
                </p>

                <p className={`about-paragraph ${type.body}`}>
                  {t("paragraphs.approach.text")}
                </p>

                <p className={`about-paragraph ${type.body}`}>
                  {t("paragraphs.design.base")}{" "}
                  <span className="text-primary font-medium">
                    {t("paragraphs.design.highlight")}
                  </span>
                  {t("paragraphs.design.suffix")}
                </p>
              </div>

              {/* Contact CTA */}
              <div className="flex gap-4 mt-12 about-paragraph">
                <a
                  href={`mailto:${t("contact:button.email")}`}
                  className={buttons.primary}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {t("contact.button")}
                </a>
              </div>
            </div>

            {/* Image section */}
            <div ref={imageRef} className="order-1 lg:order-2">
              <div className="w-full aspect-3/4 bg-secondary border border-border/30 rounded-3xl overflow-hidden">
                <img loading="lazy" decoding="async" src={Eu} alt={t("title")} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Design Skills */}
              <div className={SKILL_CARD}>
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="w-5 h-5 text-primary" />
                  <h3 className="font-display italic text-xl text-primary">
                    {t("skills.design.title")}
                  </h3>
                </div>
                <ul className="text-muted-foreground space-y-3 font-body font-light">
                  {designSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>

              {/* Research Skills */}
              <div className={SKILL_CARD}>
                <div className="flex items-center gap-3 mb-6">
                  <Search className="w-5 h-5 text-primary" />
                  <h3 className="font-display italic text-xl text-primary">
                    {t("skills.research.title")}
                  </h3>
                </div>
                <ul className="text-muted-foreground space-y-3 font-body font-light">
                  {researchSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* AI Skills — with continuously shimmering border */}
              <div ref={aiBoxRef} className="relative">
                <div
                  className="glowing-border absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--color-primary), var(--color-accent), var(--color-primary), transparent)",
                    backgroundSize: "200% 100%",
                    padding: "1px",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                  }}
                />
                <div className={`relative z-10 ${SKILL_CARD}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <Cpu className="w-5 h-5 text-primary" />
                    <h3 className="font-display italic text-xl text-primary">
                      {t("skills.ai.title")}
                    </h3>
                  </div>
                  <ul className="text-muted-foreground space-y-3 font-body font-light">
                    {aiSkills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Frontend Skills */}
              <div className={SKILL_CARD}>
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-5 h-5 text-primary" />
                  <h3 className="font-display italic text-xl text-primary">
                    {t("skills.frontend.title")}
                  </h3>
                </div>
                <ul className="text-muted-foreground space-y-3 font-body font-light">
                  {frontendSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default About;
