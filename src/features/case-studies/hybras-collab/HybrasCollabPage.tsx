import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/motion/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import Navigation from "@/features/shell/Navigation";
import ScrollToTopButton from "@/features/shell/ScrollToTopButton";
import { useBeforeAfter, useCarousel } from "@/features/case-studies/useCarousel";
import {
  afterImages,
  beforeImages,
  Empathy_map,
  Final,
  Hybras_logo,
  Persona,
  Research,
  solutionImages,
  testImages,
} from "@/features/case-studies/hybras-collab/media";

interface SolutionCarouselEntry {
  title: string;
  bullets: string[];
}

interface SolutionCarouselItem extends SolutionCarouselEntry {
  image: string;
}

const HybrasCollabPage = () => {
  const { t } = useTranslation("hybrascollab");
  useScrollReveal();

  // Solution carousel data
  const solutionCarouselRaw = t('hybras.solutionCarousel', { returnObjects: true });
  const solutionCarouselItems: SolutionCarouselItem[] = Array.isArray(solutionCarouselRaw)
    ? (solutionCarouselRaw as SolutionCarouselEntry[]).map((item, index) => ({
        ...item,
        image: solutionImages[index] ?? "",
      }))
    : [];

  // Test carousel data
  const testCarouselItems = [
    { image: testImages[0] },
    { image: testImages[1] },
    { image: testImages[2] },
  ];

  const solution = useCarousel(solutionCarouselItems.length);
  const tests = useCarousel(testCarouselItems.length);
  const beforeAfter = useBeforeAfter(beforeImages, afterImages);

  const caseStudyData = {
    title: "HYBRAS COLLAB",
    image: Hybras_logo,
    category: t('hybras.caseStudyData.category'),
    year: "2024",
    client: "SGB - Serviço Geológico do Brasil",
    duration: t('hybras.hero.time'),
    role: "Lead UX/UI Designer",
    overview: t('hybras.caseStudyData.overview'),
    challenge: t('hybras.caseStudyData.challenge'),
    solution: t('hybras.caseStudyData.solution'),
    process: t('hybras.caseStudyData.process', { returnObjects: true }),
    results: Array.isArray(t('hybras.caseStudyData.results', { returnObjects: true }))
      ? t('hybras.caseStudyData.results', { returnObjects: true })
      : [],
  };

  return (
    <div className={CASE_STUDY_STYLES.background}>
      <Navigation />

      {/* Hero Section */}
      <section className={CASE_STUDY_STYLES.heroSection}>
        <div className="max-w-5xl mx-auto px-8">
          <div
            className={`text-center ${CASE_STUDY_STYLES.scrollReveal} space-y-8`}
          >
            <span className={CASE_STUDY_STYLES.typography.category}>
              {caseStudyData.category}
            </span>
            <img loading="lazy" decoding="async" src={Hybras_logo} alt="logo" className="p-20 m-auto w-full" />
          </div>

          <div
            className={`w-full flex items-center justify-center mt-16 mb-20 ${CASE_STUDY_STYLES.scrollReveal}`}
          ></div>

          <div
            className={`flex flex-wrap justify-center gap-x-12 gap-y-6 text-center pt-10 border-t border-border/30 ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t('hybras.hero.client')}
              </p>
              <p className="text-foreground font-body font-light">
                {caseStudyData.client}
              </p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t('hybras.hero.year')}
              </p>
              <p className="text-foreground font-body font-light">
                {caseStudyData.year}
              </p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t('hybras.hero.duration')}
              </p>
              <p className="text-foreground font-body font-light">
                {caseStudyData.duration}
              </p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t('hybras.hero.role')}
              </p>
              <p className="text-foreground font-body font-light">
                {caseStudyData.role}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          {/* Overview */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('hybras.sections.overview')}
            </h2>
            <p className={CASE_STUDY_STYLES.typography.body}>
              {caseStudyData.overview}
            </p>
          </div>

          {/* Challenge */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('hybras.sections.challenge')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {caseStudyData.challenge}
            </p>
            <p className={`${CASE_STUDY_STYLES.typography.body}`}><span className={`${CASE_STUDY_STYLES.typography.body} text-primary`}>{t('hybras.content.userInsight')}:</span> As a former student and after a chat with other students, I understand the need for a centralized, accessible platform for academic research. Together with the client (also a scholar) we could build a good idea of product.</p>
            <div className="my-8"></div>
            <p className={`${CASE_STUDY_STYLES.typography.body}`}><span className={`${CASE_STUDY_STYLES.typography.body} text-primary`}>{t('hybras.content.howMightWe')}:</span> Create a community-centric platform that simplifies research sharing and enhances collaboration among scholars?</p>
          </div>

          {/* Solution Carousel */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('hybras.sections.solution')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {caseStudyData.solution}
            </p>

            <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass h-[600px]">
              <div className="relative h-full w-full overflow-hidden">
                {solutionCarouselItems.map((item, index) => (
                  <div
                    key={`solution-${index}`}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      solution.index === index
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="h-full w-full flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8">
                        <img loading="lazy" decoding="async"
                          src={item.image}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain rounded-xl shadow-lg"
                        />
                      </div>
                      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-8">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                          {item.title}
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {item.bullets.map((bullet: string, i: number) => (
                            <li
                              key={i}
                              className="text-muted-foreground font-body"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={solution.previous}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={solution.next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 top-140 left-0 right-0 flex justify-center gap-2">
                {solutionCarouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => solution.goTo(index)}
                    className={`w-3 h-3 hover:bg-primary ease-in cursor-pointer rounded-full transition-all duration-300 ${
                      solution.index === index
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Research */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('hybras.sections.research')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {t('hybras.content.competitiveAnalysis')}
            </p>
            {/* Research Image */}
            <div className={`${CASE_STUDY_STYLES.glassCard} p-4`}>
              <img loading="lazy" decoding="async"
                src={Research}
                alt="Research workshops with stakeholders"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center mt-4 text-muted-foreground font-body">
                {t('hybras.content.workshopCaption')}
              </p>
            </div>
          </div>

          {/* Persona */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('hybras.sections.persona')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {t('hybras.content.personaDescription')}
            </p>
            {/* Persona Image */}
            <div>
              <img loading="lazy" decoding="async"
                src={Persona}
                alt="User persona - Maria"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center mt-5 text-muted-foreground font-body">
                {t('hybras.content.personaCaption')}
              </p>
            </div>
          </div>

          {/* Empathy Map */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('hybras.sections.empathy')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {t('hybras.content.empathyDescription')}
            </p>
            {/* Empathy Map Image */}
            <div>
              <img loading="lazy" decoding="async"
                src={Empathy_map}
                alt="Empathy map for hydrology researchers"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center mt-7 text-muted-foreground font-body">
                {t('hybras.content.empathyCaption')}
              </p>
            </div>
          </div>

          {/* Testing */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('hybras.sections.testing')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {t('hybras.content.testingDescription')}
            </p>
            
            {/* Test Carousel */}
            <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass h-[700px]">
              <div className="relative h-full w-full overflow-hidden">
                {testCarouselItems.map((item, index) => (
                  <div
                    key={`test-${index}`}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      tests.index === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="h-full w-full flex flex-col">
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <img loading="lazy" decoding="async"
                          src={item.image}
                          alt='test3'
                          className="max-h-full max-w-full object-contain rounded-xl shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={tests.previous}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full cursor-pointer glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={tests.next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect cursor-pointer flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {testCarouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => tests.goTo(index)}
                    className={`w-3 h-3 rounded-full transition-all cursor-pointer ease-in hover:bg-primary duration-300 ${
                      tests.index === index
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Design Evolution */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('hybras.sections.evolution')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {t('hybras.content.evolutionDescription')}
            </p>

            <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass">
              <div className="flex border-b border-border/20">
                <button className={`flex-1 py-4 font-display ease-in font-medium transition-colors ${beforeAfter.tab === "before" ? "text-primary" : "text-muted-foreground"}`} onClick={() => beforeAfter.selectTab("before")}>
                  <p className="cursor-pointer transition-all ease-in hover:text-primary">
                  {t('hybras.content.before')}
                  </p>
                </button>
                <button className={`flex-1 py-4 font-display font-medium transition-colors ${beforeAfter.tab === "after" ? "text-primary" : "text-muted-foreground"}`} onClick={() => beforeAfter.selectTab("after")}>
                  <p className="cursor-pointer transition-all ease-in hover:text-primary">
                  {t('hybras.content.after')}
                  </p>
                </button>
              </div>
              <div className="relative h-[600px] w-full">
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
                          beforeAfter.index === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`Before design ${index + 1}`}
                          className="max-h-[80%] max-w-[90%] object-contain rounded-xl shadow-lg"
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
                          beforeAfter.index === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`After design ${index + 1}`}
                          className="max-h-[80%] max-w-[90%] object-contain rounded-xl shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Navigation Arrows */}
                <button
                  onClick={beforeAfter.previous}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={beforeAfter.next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {(beforeAfter.tab === "before"
                    ? beforeImages
                    : afterImages
                  ).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => beforeAfter.goTo(index)}
                      className={`w-3 h-3 rounded-full transition-all hover:bg-primary cursor-pointer duration-300 ${
                        beforeAfter.index === index
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Final Design */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('hybras.sections.final')}
            </h2>
            {/* Final Design Image */}
            <div className={`${CASE_STUDY_STYLES.glassCard} p-4`}>
              <img loading="lazy" decoding="async"
                src={Final}
                alt="Final product design"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center mt-4 text-muted-foreground font-body">
                {t('hybras.content.finalCaption')}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('hybras.sections.results')}
            </h2>
            <div className="space-y-6 mt-8">
              {(Array.isArray(caseStudyData.results) ? caseStudyData.results : []).map((result: string, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-foreground">{String(result)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}>
            {t('hybras.sections.next')}
          </h2>
          <Link to="/case-study/myholybooks" className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors tracking-tighter">
                {t('hybras.nextProject.title')}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                {t('hybras.nextProject.description')}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">{t('hybras.nextProject.cta')}</span>
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

export default HybrasCollabPage;