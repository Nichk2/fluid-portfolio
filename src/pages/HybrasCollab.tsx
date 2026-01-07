import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/hooks/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import Hybras_logo from "../Image/HYBRAS/logo.svg";
import Notes from "../Image/HYBRAS/Notificações page.jpg";
import History from "../Image/HYBRAS/Histórico geral.png";
import Empathy_map from "../Image/HYBRAS/empathy_map.png";
import low_fi1 from "../Image/HYBRAS/low-fi.png";
import low_fi2 from "../Image/HYBRAS/lo-fi2.png";
import Research from "../Image/HYBRAS/Research.png";
import Test1 from "../Image/HYBRAS/test- 1.png";
import Test2 from "../Image/HYBRAS/test - 2.png";
import Test3 from "../Image/HYBRAS/test- 3.png";
import Persona from "../Image/HYBRAS/persona.png";
import Final from "../Image/HYBRAS/Final design.png";
import Dashboard from "../Image/HYBRAS/Dashboard colab pessoal.png";
import Submit_data from "../Image/HYBRAS/Submeter Dado.png";
import Grid from "../Image/HYBRAS/Grid - Depositante.png";
import ScrollToTopButton from "@/components/ScrollToTopButton";


const HybrasCollab = () => {
  const { t } = useTranslation('hybrascollab');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSolutionSlide, setCurrentSolutionSlide] = useState(0);
  const [currentTestSlide, setCurrentTestSlide] = useState(0);
  const [currentBeforeAfterSlide, setCurrentBeforeAfterSlide] = useState(0);
  const [activeBeforeAfterTab, setActiveBeforeAfterTab] = useState<
    "before" | "after"
  >("before");
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Solution carousel data
  const solutionCarouselRaw = t('hybras.solutionCarousel', { returnObjects: true });
  const solutionCarouselItems = Array.isArray(solutionCarouselRaw)
    ? solutionCarouselRaw.map((item: any, index: number) => ({
        ...item,
        image: [Submit_data, History, Notes, Dashboard][index]
      }))
    : [];

  // Test carousel data
  const testCarouselItems = [
    { image: Test1 },
    { image: Test2 },
    { image: Test3 },
  ];

  // Before/After carousel data
  const beforeImages = [low_fi1, low_fi2];
  const afterImages = [Grid, Notes];

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
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${CASE_STUDY_STYLES.navigation}`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>{t('hybras.navigation.back')}</span>
            </Link>
            <Link
              to="/"
              className="text-3xl font-display font-bold text-foreground hover:text-primary transition-colors duration-300"
            >
              Nicholas
            </Link>
            <div className="w-32"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={CASE_STUDY_STYLES.heroSection}>
        <div className="max-w-5xl mx-auto px-8">
          <div
            className={`text-center ${CASE_STUDY_STYLES.scrollReveal} space-y-8`}
          >
            <span className={CASE_STUDY_STYLES.typography.category}>
              {caseStudyData.category}
            </span>
            <img src={Hybras_logo} alt="logo" className="p-20 m-auto w-full" />
          </div>

          <div
            className={`w-full flex items-center justify-center mt-16 mb-20 ${CASE_STUDY_STYLES.scrollReveal}`}
          ></div>

          <div
            className={`grid md:grid-cols-4 gap-8 text-center md:text-left ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t('hybras.hero.client')}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.client}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t('hybras.hero.year')}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.year}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t('hybras.hero.duration')}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.duration}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t('hybras.hero.role')}
              </h3>
              <p className="text-muted-foreground font-body font-light">
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
            <p className={`${CASE_STUDY_STYLES.typography.body}`}><span className={`${CASE_STUDY_STYLES.typography.body} text-cyan-300`}>{t('hybras.content.userInsight')}:</span> As a former student and after a chat with other students, I understand the need for a centralized, accessible platform for academic research. Together with the client (also a scholar) we could build a good idea of product.</p>
            <div className="my-8"></div>
            <p className={`${CASE_STUDY_STYLES.typography.body}`}><span className={`${CASE_STUDY_STYLES.typography.body} text-cyan-300`}>{t('hybras.content.howMightWe')}:</span> Create a community-centric platform that simplifies research sharing and enhances collaboration among scholars?</p>
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
                {solutionCarouselItems.map((item: any, index: number) => (
                  <div
                    key={`solution-${index}`}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      currentSolutionSlide === index
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="h-full w-full flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8">
                        <img
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
                onClick={() =>
                  setCurrentSolutionSlide((prev) =>
                    prev === 0 ? solutionCarouselItems.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentSolutionSlide((prev) =>
                    prev === solutionCarouselItems.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 top-140 left-0 right-0 flex justify-center gap-2">
                {solutionCarouselItems.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSolutionSlide(index)}
                    className={`w-3 h-3 hover:bg-primary ease-in cursor-pointer rounded-full transition-all duration-300 ${
                      currentSolutionSlide === index
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
              <img
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
              <img
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
              <img
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
                      currentTestSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="h-full w-full flex flex-col">
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <img
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
                onClick={() =>
                  setCurrentTestSlide((prev) =>
                    prev === 0 ? testCarouselItems.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full cursor-pointer glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentTestSlide((prev) =>
                    prev === testCarouselItems.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect cursor-pointer flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {testCarouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all cursor-pointer ease-in hover:bg-primary duration-300 ${
                      currentTestSlide === index
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
                <button className={`flex-1 py-4 font-display ease-in font-medium transition-colors ${activeBeforeAfterTab === "before" ? "text-primary" : "text-muted-foreground"}`} onClick={() => { setActiveBeforeAfterTab("before"); setCurrentBeforeAfterSlide(0); }}>
                  <p className="cursor-pointer transition-all ease-in hover:text-primary">
                  {t('hybras.content.before')}
                  </p>
                </button>
                <button className={`flex-1 py-4 font-display font-medium transition-colors ${activeBeforeAfterTab === "after" ? "text-primary" : "text-muted-foreground"}`} onClick={() => { setActiveBeforeAfterTab("after"); setCurrentBeforeAfterSlide(0); }}>
                  <p className="cursor-pointer transition-all ease-in hover:text-primary">
                  {t('hybras.content.after')}
                  </p>
                </button>
              </div>
              <div className="relative h-[600px] w-full">
                {/* Before Images */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeBeforeAfterTab === "before"
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    {beforeImages.map((img, index) => (
                      <div
                        key={`before-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          currentBeforeAfterSlide === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img
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
                    activeBeforeAfterTab === "after"
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    {afterImages.map((img, index) => (
                      <div
                        key={`after-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          currentBeforeAfterSlide === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img
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
                  onClick={() =>
                    setCurrentBeforeAfterSlide((prev) =>
                      prev === 0
                        ? activeBeforeAfterTab === "before"
                          ? beforeImages.length - 1
                          : afterImages.length - 1
                        : prev - 1
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() =>
                    setCurrentBeforeAfterSlide((prev) =>
                      prev ===
                      (activeBeforeAfterTab === "before"
                        ? beforeImages.length - 1
                        : afterImages.length - 1)
                        ? 0
                        : prev + 1
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {(activeBeforeAfterTab === "before"
                    ? beforeImages
                    : afterImages
                  ).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentBeforeAfterSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all hover:bg-primary cursor-pointer duration-300 ${
                        currentBeforeAfterSlide === index
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
              <img
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

export default HybrasCollab;