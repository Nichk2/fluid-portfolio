import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Code, Cpu, Monitor, Palette, Search, Layers, Zap, Users, BarChart, Target, Lightbulb } from "lucide-react";
import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Eu from "../Image/Eu/Nicholas - Copia.jpg"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t } = useTranslation("about");
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const aiBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      // Continuous glowing animation for AI box
      if (aiBoxRef.current) {
        const borderElement = aiBoxRef.current.querySelector('.glowing-border');
        if (borderElement) {
          gsap.to(borderElement, {
            backgroundPosition: '200% 0%',
            duration: 3,
            repeat: -1,
            ease: 'linear'
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);


  const designSkills = t("skills.design.items", { returnObjects: true }) as string[];
  const researchSkills = t("skills.research.items", { returnObjects: true }) as string[];
  const aiSkills = t("skills.ai.items", { returnObjects: true }) as string[];
  const frontendSkills = t("skills.frontend.items", { returnObjects: true }) as string[];

  return (
    <div ref={containerRef} className={CASE_STUDY_STYLES.background}>
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Text content */}
            <div className="order-2 lg:order-1">
              <h2
                ref={titleRef}
                className={`${CASE_STUDY_STYLES.typography.mainTitle} mb-12`}
              >
                <span className="text-primary">{t("title")}</span>
              </h2>

              <div ref={contentRef} className="space-y-6 leading-relaxed">
                <p className="about-paragraph text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed">
                  {t("paragraphs.intercultural.base")}{" "}
                  <span className="text-primary font-medium">
                    {t("paragraphs.intercultural.highlight")}
                  </span>
                  {t("paragraphs.intercultural.suffix")}
                </p>

                <p className="about-paragraph text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed">
                  {t("paragraphs.data.base")}{" "}
                  <span className="text-accent font-medium">
                    {t("paragraphs.data.highlight")}
                  </span>
                  {t("paragraphs.data.suffix")}
                </p>

                <p className="about-paragraph text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed">
                  {t("paragraphs.technical.base")}{" "}
                  {(t("paragraphs.technical.tools", { returnObjects: true }) as string[]).join(", ")}{" "}
                  {t("paragraphs.technical.coding")}{" "}
                  {t("paragraphs.technical.languages")}
                  {t("paragraphs.technical.suffix")}
                </p>

                <p className="about-paragraph text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed">
                  {t("paragraphs.approach.text")}
                </p>

                <p className="about-paragraph text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed">
                  {t("paragraphs.design.base")}{" "}
                  <span className="text-accent font-medium">
                    {t("paragraphs.design.highlight")}
                  </span>
                  {t("paragraphs.design.suffix")}
                </p>
              </div>

              {/* Contact CTA */}
              <div className="flex gap-4 mt-12 about-paragraph">
                <a
                  href="mailto:hello@nicholas.design"
                  className={CASE_STUDY_STYLES.buttons.primary}
                >
                  <Mail className="w-4 h-4 inline-block mr-2" />
                  {t("contact.button")}
                </a>
              </div>
            </div>

            {/* Image section */}
            <div ref={imageRef} className="order-1 lg:order-2">
              <div className={`w-full aspect-[3/4] ${CASE_STUDY_STYLES.glassCard} rounded-3xl flex items-center justify-center overflow-hidden`}>
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 flex items-center justify-center">
                  <span className="text-muted-foreground font-body"><img src={Eu} alt="eu" /></span>
                </div>
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
              {/* Design Skills - Enhanced */}
              <div className={`${CASE_STUDY_STYLES.cards.feature} relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-primary text-xl">
                        {t("skills.design.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">User-Centered Design Solutions</p>
                    </div>
                  </div>
                  <ul className="text-muted-foreground space-y-3 font-body">
                    {designSkills.map((skill, index) => (
                      <li key={index} className="flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-200">
                        <div className="flex-shrink-0 mt-1">
                          <span className={`w-2 h-2 rounded-full block ${index % 2 === 0 ? "bg-primary" : "bg-accent"}`}></span>
                        </div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-3">Design Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        Figma
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full font-medium">
                        Webflow
                      </span>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                        Framer
                      </span>
                      
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Research Skills - Enhanced */}
              <div className={`${CASE_STUDY_STYLES.cards.feature} relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-28 h-28 bg-accent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-4 right-4 w-20 h-20 bg-primary rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Search className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-accent text-xl">
                        {t("skills.research.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Data-Driven Insights</p>
                    </div>
                  </div>
                  <ul className="text-muted-foreground space-y-3 font-body">
                    {researchSkills.map((skill, index) => (
                      <li key={index} className="flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-200">
                        <div className="flex-shrink-0 mt-1">
                          <span className={`w-2 h-2 rounded-full block ${index % 2 === 0 ? "bg-accent" : "bg-primary"}`}></span>
                        </div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Research tools */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-3">Research Methods:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                        User Interviews
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        Surveys
                      </span>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                        A/B Testing
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        Analytics
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* AI Skills - With continuously glowing border */}
              <div ref={aiBoxRef} className="relative group">
                {/* Glowing border effect - Always active */}
                <div className="glowing-border absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(90deg, transparent, var(--primary), var(--accent), var(--primary), transparent)',
                    backgroundSize: '200% 100%',
                    padding: '2px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                  }}
                />
                
                {/* Main content */}
                <div className={`relative z-10 ${CASE_STUDY_STYLES.cards.feature} bg-gradient-to-br from-background to-background/95`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative p-2 rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg opacity-20 animate-pulse"></div>
                      <Cpu className="w-6 h-6 text-accent relative z-10" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-accent text-xl">
                        {t("skills.ai.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Intelligent Design Solutions</p>
                    </div>
                  </div>
                  <ul className="text-muted-foreground space-y-3 font-body">
                    {aiSkills.map((skill, index) => (
                      <li key={index} className="flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-200">
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? "bg-gradient-to-r from-primary to-accent" : "bg-gradient-to-r from-accent to-primary"}`}></div>
                        </div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                
                </div>
              </div>

              {/* Frontend Skills */}
              <div className={`${CASE_STUDY_STYLES.cards.feature} relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-24 h-24 bg-blue-500 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 bg-primary rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Code className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-blue-500 text-xl">
                        Frontend Development
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Modern Web Technologies</p>
                    </div>
                  </div>
                  <ul className="text-muted-foreground space-y-3 font-body">
                    {frontendSkills.map((skill, index) => (
                      <li key={index} className="flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-200">
                        <div className="flex-shrink-0 mt-1">
                          <span className={`w-2 h-2 rounded-full block ${index % 2 === 0 ? "bg-blue-500" : "bg-primary"}`}></span>
                        </div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Tech stack tags */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-3">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        React
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full font-medium">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                        Tailwind CSS
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-500 text-xs rounded-full font-medium">
                        Next.js
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs rounded-full font-medium">
                        Node.js
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default About;