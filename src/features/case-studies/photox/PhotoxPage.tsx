import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/motion/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import ScrollToTopButton from "@/features/shell/ScrollToTopButton";
import Navigation from "@/features/shell/Navigation";
import { useBeforeAfter, useCarousel } from "@/features/case-studies/useCarousel";
import {
  afterImages,
  beforeImages,
  ideate,
  logo_photox,
  Oldphotox,
  persona,
  Photox1,
  prototypeImages,
  style,
  testImages,
} from "@/features/case-studies/photox/media";

const PhotoxPage = () => {
  const { t } = useTranslation("photox");
  const beforeAfter = useBeforeAfter(beforeImages, afterImages);
  const prototypes = useCarousel(prototypeImages.length);
  const tests = useCarousel(testImages.length);

  useScrollReveal();

  const getTranslatedArray = (key: string) => {
    const data = t(key, { returnObjects: true });
    return Array.isArray(data) ? data : [];
  };

  return (
    <div className={CASE_STUDY_STYLES.background}>
      <Navigation />

      {/* Hero Section */}
      <section className={CASE_STUDY_STYLES.heroSection}>
        <div className="max-w-5xl mx-auto px-8">
          <div className={`text-center ${CASE_STUDY_STYLES.scrollReveal} space-y-8`}>
            <span className={CASE_STUDY_STYLES.typography.category}>
              {t("photox.category")}
            </span>
            <img loading="lazy" decoding="async" src={logo_photox} alt="logo" className="p-20 m-auto w-full" />
          </div>

          <div className={`flex flex-wrap justify-center gap-x-12 gap-y-6 text-center mt-16 pt-10 border-t border-border/30 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">{t("photox.client")}</p>
              <p className="text-foreground font-body font-light">PHOTOX Digital</p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">{t("photox.year")}</p>
              <p className="text-foreground font-body font-light">2024</p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">{t("photox.duration2")}</p>
              <p className="text-foreground font-body font-light">{t("photox.duration")}</p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">{t("photox.role")}</p>
              <p className="text-foreground font-body font-light">Lead UX/UI Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          {/* Overview */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t("photox.title1")}</h2>
            <p className={CASE_STUDY_STYLES.typography.body}>{t("photox.overview")}</p>
          </div>

          {/* Challenge */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t("photox.title2")}</h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>{t("photox.challenge")}</p>
            <img loading="lazy" decoding="async" src={Oldphotox} alt="old" className="max-w-fill" /> 
             

            <div className="mt-12">
              <h3 className={`${CASE_STUDY_STYLES.typography.subtitle} font-semibold mb-8 text-primary`}>
                {t("photox.goals.title")}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                {getTranslatedArray("photox.goals.items").map((goal, index) => (
                  <li key={index} className={CASE_STUDY_STYLES.typography.body}>{String(goal)}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t("photox.title3")}</h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>{t("photox.solution")}</p>

            {/* Before/After Carousel */}
            <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass">
              <div className="flex border-b border-border/20">
              
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors cursor-pointer hover:text-primary ${beforeAfter.tab === "before" ? "text-primary" : "text-muted-foreground"}`}
                  onClick={() => beforeAfter.selectTab("before")}
                >
                  {t("photox.before")}
                </button>
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors cursor-pointer hover:text-primary ${beforeAfter.tab === "after" ? "text-primary" : "text-muted-foreground"}`}
                  onClick={() => beforeAfter.selectTab("after")}
                >
                  {t("photox.after")}
                </button>
              </div>
              <div className="relative h-[500px] w-full">
                {/* Before Images */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    beforeAfter.tab === "before"
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    {beforeImages.map((img, index) => (
                      <div
                        key={`before-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          beforeAfter.index === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`Before design ${index + 1}`}
                          className="max-h-full max-w-full object-contain p-8"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* After Images */}
                <div
                  className={`absolute inset-0 transition-opacity rounded-md duration-500 ${
                    beforeAfter.tab === "after"
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    {afterImages.map((img, index) => (
                      <div
                        key={`after-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          beforeAfter.index === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`After design ${index + 1}`}
                          className="max-h-full max-w-full object-contain p-8"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Navigation */}
                <button type="button" onClick={beforeAfter.previous} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 cursor-pointer h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button type="button" onClick={beforeAfter.next} className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 rounded-full hover:bg-primary/20 transition-colors duration-300 glass-effect flex items-center justify-center">
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {(beforeAfter.tab === "before" ? beforeImages : afterImages).map((_, index) => (
                    <button type="button" key={index} onClick={() => beforeAfter.goTo(index)} className={`w-3 h-3 rounded-full cursor-pointer hover:bg-primary ease-in transition-all ${beforeAfter.index === index ? "bg-primary w-6" : "bg-muted-foreground/30"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Design Process */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t("photox.process.title")}</h2>

            <div className="space-y-12">
              {/* Empathize */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t("photox.process.empathize.title")}</h3>
                <p className={CASE_STUDY_STYLES.typography.body}>{t("photox.process.empathize.description")}</p>
              </div>

              {/* Define */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-accent rounded-full"></div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t("photox.process.define.title")}</h3>
                <p className={CASE_STUDY_STYLES.typography.body}>{t("photox.process.define.description")}</p>
                <p className="text-primary mt-4 font-medium">{t("photox.process.define.goal")}</p>
                
                {/* Persona Image - Fixed with proper sizing */}
                <div className="w-full mt-6">
                  <div className="enhanced-glass rounded-xl overflow-hidden p-4">
                    <img loading="lazy" decoding="async"
                      src={persona}
                      alt="User persona"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Ideate */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t("photox.process.ideate.title")}</h3>
                <p className={CASE_STUDY_STYLES.typography.body}>{t("photox.process.ideate.description")}</p>
                
                {/* Ideation Sketches in separate glass boxes */}
                <div className="space-y-6 mt-6">
                  <div className="enhanced-glass rounded-xl overflow-hidden p-6">
                    <img loading="lazy" decoding="async"
                      src={ideate}
                      alt="Ideation sketches"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="enhanced-glass rounded-xl overflow-hidden p-6">
                    <img loading="lazy" decoding="async"
                      src={style}
                      alt="Style guide"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Prototype - Fixed to be larger */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-accent rounded-full"></div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t("photox.process.prototype.title")}</h3>
                <p className={CASE_STUDY_STYLES.typography.body}>{t("photox.process.prototype.description")}</p>
                
                {/* Prototype Carousel */}
                <div className="relative mt-6 h-[600px] w-full overflow-hidden rounded-2xl enhanced-glass">
                  <div className="relative h-full w-full">
                    {prototypeImages.map((img, index) => (
                      <div
                        key={`proto-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          prototypes.index === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`Prototype screen ${index + 1}`}
                          className="max-h-full max-w-full object-contain p-8"
                        />
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={prototypes.previous} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect hover:bg-primary/20 cursor-pointer ease-in transition-all flex items-center justify-center">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button type="button" onClick={prototypes.next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect flex items-center hover:bg-primary/20 cursor-pointer ease-in transition-all justify-center">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {prototypeImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => prototypes.goTo(index)}
                        className={`w-3 h-3 rounded-full transition-all cursor-pointer  ${prototypes.index === index ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-primary ease-in transition-all"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Test */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t("photox.process.test.title")}</h3>
                <p className={CASE_STUDY_STYLES.typography.body}>{t("photox.process.test.description")}</p>
                
                {/* Test Results Carousel */}
                <div className="relative mt-6 h-[500px] w-full overflow-hidden rounded-2xl enhanced-glass">
                  <div className="relative h-full w-full">
                    {testImages.map((img, index) => (
                      <div
                        key={`test-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          tests.index === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`Testing phase ${index + 1}`}
                          className="max-h-full max-w-full object-contain p-8"
                        />
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={tests.previous} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 cursor-pointer ease-in transition-all">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button type="button" onClick={tests.next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 cursor-pointer ease-in transition-all">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {testImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => tests.goTo(index)}
                        className={`w-3 h-3 cursor-pointer rounded-full transition-all ${tests.index === index ? "bg-primary w-6" : "hover:bg-primary transition-all ease-in bg-muted-foreground/30"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t("photox.results.title")}</h2>
            <div className="space-y-6 mt-8">
              {getTranslatedArray("photox.results.items").map((result, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-foreground">{String(result)}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <img loading="lazy" decoding="async" src={Photox1} alt="final" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}>
            {t("photox.nextProject")}
          </h2>
          <Link to="/case-study/hybras-collab" className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors tracking-tighter">
                {t("photox.projectLabel")}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                {t("photox.descriptionLabel")}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">{t("photox.viewProject")}</span>
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  );
};

export default PhotoxPage;