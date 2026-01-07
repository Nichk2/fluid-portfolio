import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/hooks/useScrollReveal";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import ScrollToTopButton from "@/components/ScrollToTopButton";


import Logo from "@/Image/VisaBuddy/Logo.svg";
import Lofi_menu_close from "@/Image/VisaBuddy/closed menu lofi.png";
import Hifi_menu_close from "@/Image/VisaBuddy/closed menu highfi.png";
import Lofi_chat from "@/Image/VisaBuddy/Started chat lofi.png";
import Hifi_chat from "@/Image/VisaBuddy/Started chat highfi.png";
import Url_lofi from "@/Image/VisaBuddy/URL modal lofi.png";
import Url_hifi from "@/Image/VisaBuddy/URL modal highfi.png";
import Lofi_menu_open from "@/Image/VisaBuddy/open menu lofi.png";
import Hifi_menu_open from "@/Image/VisaBuddy/open menu highfi.png";
import Metrics1 from "@/Image/VisaBuddy/metrics.png";
import Metrics2 from "@/Image/VisaBuddy/metrics 2.png";
import Front from "@/Image/VisaBuddy/frontend test.gif";
import Jupyter from "@/Image/VisaBuddy/jupyter notebook training.gif";
import Modal_logo from "@/Image/VisaBuddy/Modal-Primary-Logo.svg";
import Back from "@/Image/VisaBuddy/google colab model and backend.gif";
import Chroma from "@/Image/VisaBuddy/Chroma--Streamline-Svg-Logos.svg";
import Fast_api from "@/Image/VisaBuddy/FastAPI_logo.svg";
import Transformers from "@/Image/VisaBuddy/HG transfomers.svg";
import Vectors from "@/Image/VisaBuddy/vectors 1.svg";
import Tailwind from "@/Image/VisaBuddy/tailwindcss.svg";
import ReactLogo from "@/Image/VisaBuddy/react.svg";
import Typescript from "@/Image/VisaBuddy/typescript.svg";
import FramerMotion from "@/Image/VisaBuddy/framer motion.svg";
import Noodles from "@/Image/VisaBuddy/noodles.jpeg";

const VisaBuddy = () => {
  const { t } = useTranslation("visabuddy");
  const [currentBeforeAfterSlide, setCurrentBeforeAfterSlide] = useState(0);
  const [activeBeforeAfterTab, setActiveBeforeAfterTab] = useState<"before" | "after">("before");
  
  useSmoothScroll();
  useScrollReveal();

  // Before/After carousel data
  const beforeImages = [Lofi_menu_close, Lofi_menu_open, Lofi_chat, Url_lofi];
  const afterImages = [Hifi_menu_close, Hifi_menu_open, Hifi_chat, Url_hifi];

  // Get translation data safely
  const getTranslatedArray = (key: string) => {
    const data = t(key, { returnObjects: true });
    return Array.isArray(data) ? data : [];
  };

  const getTranslatedObject = (key: string) => {
    const data = t(key, { returnObjects: true });
    return typeof data === 'object' && data !== null ? data : {};
  };

  return (
    <div className={CASE_STUDY_STYLES.background}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${CASE_STUDY_STYLES.navigation}`}>
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-body">
              <ChevronLeft className="w-5 h-5" />
              <span>{t('visaBuddy.navigation.back')}</span>
            </Link>
            <Link to="/" className="text-3xl font-display font-bold text-foreground hover:text-primary transition-colors duration-300">
              Nicholas
            </Link>
            <div className="w-32"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={CASE_STUDY_STYLES.heroSection}>
        <div className="max-w-5xl mx-auto px-8">
          <div className={`text-center ${CASE_STUDY_STYLES.scrollReveal} space-y-8`}>
            <span className={CASE_STUDY_STYLES.typography.category}>
              {t('visaBuddy.hero.category')}
            </span>
            {/* VisaBuddy Logo */}
            <div className="m-auto w-64 h-24 rounded-2xl flex items-center justify-center p-4">
              <img src={Logo} alt="VisaBuddy Logo" className="max-w-full max-h-full object-contain" />
            </div>
          </div>

          {/* Project Info Cards */}
          <div className={`grid md:grid-cols-4 gap-8 text-center md:text-left mt-16 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t('visaBuddy.hero.client')}
              </h3>
              <p className="text-muted-foreground font-body font-light">Personal Project</p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t('visaBuddy.hero.year')}
              </h3>
              <p className="text-muted-foreground font-body font-light">2025</p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t('visaBuddy.hero.duration')}
              </h3>
              <p className="text-muted-foreground font-body font-light">3 weeks</p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t('visaBuddy.hero.role')}
              </h3>
              <p className="text-muted-foreground font-body font-light">Full Stack Developer, AI Engineer, UX/UI Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          {/* Overview Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.overview')}
            </h2>
            <p className={CASE_STUDY_STYLES.typography.body}>
              {t('visaBuddy.content.overview')}
            </p>
          </div>

          {/* Problem Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.problem')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {t('visaBuddy.content.problem')}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="enhanced-glass p-6 rounded-xl">
                <h4 className="font-display font-semibold text-primary mb-2">
                  {t('visaBuddy.content.problemPoints.pages')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('visaBuddy.content.problemPoints.pagesDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-6 rounded-xl">
                <h4 className="font-display font-semibold text-accent mb-2">
                  {t('visaBuddy.content.problemPoints.updates')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('visaBuddy.content.problemPoints.updatesDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-6 rounded-xl">
                <h4 className="font-display font-semibold text-primary mb-2">
                  {t('visaBuddy.content.problemPoints.decisions')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('visaBuddy.content.problemPoints.decisionsDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Training Platform Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.training')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {t('visaBuddy.content.trainingDescription')}
            </p>

            {/* Jupyter Notebook Demonstration */}
            <div className="mb-8">
              <div className={`${CASE_STUDY_STYLES.glassCard} p-4 mb-6`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-2/3">
                    <div className="w-full h-64 enhanced-glass rounded-lg flex items-center justify-center overflow-hidden">
                      <img src={Jupyter} alt="Jupyter Notebook Training" className="w-full h-full object-fill" />
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <h4 className="font-display font-semibold text-primary mb-3 text-lg">
                      {t('visaBuddy.content.jupyterTitle')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('visaBuddy.content.jupyterDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Platform Recognition */}
            <div className="enhanced-glass p-8 rounded-3xl mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {t('visaBuddy.content.modalTitle')}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t('visaBuddy.content.modalDescription')}
                  </p>
                  <ul className="space-y-3">
                    {getTranslatedArray('visaBuddy.content.modalPoints').map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                        <span className="text-foreground">{String(point)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-48 h-48 flex items-center justify-center p-4">
                    <img src={Modal_logo} alt="Modal Logo" className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* UX/UI Design Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.design')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {t('visaBuddy.content.designDescription')}
            </p>
            
            {/* Noodles - Starting oldschool */}
            <div className={`${CASE_STUDY_STYLES.glassCard} p-6 mb-8 h-full`}>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                {t("visaBuddy.content.oldTitle")}
              </h3>
              <div className="w-full h-full enhanced-glass rounded-lg flex items-center justify-center overflow-hidden">
                <img src={Noodles} alt="Starting oldschool - Sketch/Noodles" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>

            {/* Design Evolution Carousel */}
            <div className={` ${CASE_STUDY_STYLES.glassCard} p-6 relative w-full overflow-hidden rounded-2xl enhanced-glass`}>
              <div className="flex border-b border-border/20">
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors cursor-pointer ${activeBeforeAfterTab === "before" ? "text-primary" : "text-muted-foreground"}`}
                  onClick={() => { setActiveBeforeAfterTab("before"); setCurrentBeforeAfterSlide(0); }}
                >
                  {t('visaBuddy.content.beforeAfter.lowFi')}
                </button>
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors cursor-pointer ${activeBeforeAfterTab === "after" ? "text-primary" : "text-muted-foreground"}`}
                  onClick={() => { setActiveBeforeAfterTab("after"); setCurrentBeforeAfterSlide(0); }}
                >
                  {t('visaBuddy.content.beforeAfter.highFi')}
                </button>
              </div>
              <div className="relative h-[600px] w-full">
                {/* Low-Fidelity Images */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${activeBeforeAfterTab === "before" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                    <img 
                      src={beforeImages[currentBeforeAfterSlide]} 
                      alt={`Low-fidelity design ${currentBeforeAfterSlide + 1}`}
                      className="max-h-[80%] max-w-[90%] object-contain rounded-xl shadow-lg"
                    />
                  </div>
                </div>
                {/* High-Fidelity Images */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${activeBeforeAfterTab === "after" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                    <img 
                      src={afterImages[currentBeforeAfterSlide]} 
                      alt={`High-fidelity design ${currentBeforeAfterSlide + 1}`}
                      className="max-h-[80%] max-w-[90%] object-contain rounded-xl shadow-lg"
                    />
                  </div>
                </div>
                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentBeforeAfterSlide((prev) => prev === 0 ? (activeBeforeAfterTab === "before" ? beforeImages.length - 1 : afterImages.length - 1) : prev - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 cursor-pointer h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setCurrentBeforeAfterSlide((prev) => prev === (activeBeforeAfterTab === "before" ? beforeImages.length - 1 : afterImages.length - 1) ? 0 : prev + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 cursor-pointer rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                {/* Pagination Dots */}
                <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-2">
                  {(activeBeforeAfterTab === "before" ? beforeImages : afterImages).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentBeforeAfterSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all cursor-pointer duration-300 ${currentBeforeAfterSlide === index ? "bg-primary cursor-pointer ease-in transition-all w-6" : "bg-muted-foreground/30 hover:bg-primary/90"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Design Features */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="enhanced-glass p-6 rounded-2xl">
                <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                  {t('visaBuddy.content.designFeatures.chatTitle')}
                </h3>
                <p className="text-muted-foreground">
                  {t('visaBuddy.content.designFeatures.chatDescription')}
                </p>
              </div>
              <div className="enhanced-glass p-6 rounded-2xl">
                <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                  {t('visaBuddy.content.designFeatures.mobileTitle')}
                </h3>
                <p className="text-muted-foreground">
                  {t('visaBuddy.content.designFeatures.mobileDescription')}
                </p>
              </div>
            </div>
          </div>

          {/* Backend Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.backend')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {t('visaBuddy.content.backendDescription')}
            </p>

            {/* Backend GIF Demonstration */}
            <div className="mb-8">
              <div className={`${CASE_STUDY_STYLES.glassCard} p-4 mb-6`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-2/3">
                    <div className="w-full h-64 enhanced-glass rounded-lg flex items-center justify-center overflow-hidden">
                      <img src={Back} alt="Backend Demonstration" className="w-full h-full object-fill" />
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <h4 className="font-display font-semibold text-primary mb-3 text-lg">
                      {t('visaBuddy.content.backendDemoTitle')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('visaBuddy.content.backendDemoDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Tech Stack */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="enhanced-glass p-4 rounded-xl text-center">
                
                  <img src={Fast_api} alt="FastAPI" className="w-38 h-12 mb-2 m-auto" />
                <h4 className="font-display font-semibold text-primary">
                  {t('visaBuddy.content.techStack.fastapi')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.techStack.fastapiDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl text-center">
                  <img src={Chroma} alt="ChromaDB" className="w-14 m-auto" />
                <h4 className="font-display font-semibold text-accent">
                  {t('visaBuddy.content.techStack.chromadb')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.techStack.chromadbDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl text-center">
                
                  <img src={Transformers} alt="Transformers" className="w-24 m-auto" />
                
                <h4 className="font-display font-semibold text-primary">
                  {t('visaBuddy.content.techStack.transformers')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.techStack.transformersDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl text-center">
                
                  <img src={Vectors} alt="Sentence Transformers" className="w-14 m-auto" />
                
                <h4 className="font-display font-semibold text-accent">
                  {t('visaBuddy.content.techStack.sentenceTransformers')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.techStack.sentenceTransformersDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Frontend Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.frontend')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {t('visaBuddy.content.frontendDescription')}
            </p>

            {/* Frontend GIF Demonstration */}
            <div className="mb-8">
              <div className={`${CASE_STUDY_STYLES.glassCard} p-4 mb-6`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-2/3">
                    <div className="w-full h-64 enhanced-glass rounded-lg flex items-center justify-center overflow-hidden">
                      <img src={Front} alt="Frontend Demonstration" className="w-full h-full object-fill" />
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <h4 className="font-display font-semibold text-primary mb-3 text-lg">
                      {t('visaBuddy.content.frontendDemoTitle')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('visaBuddy.content.frontendDemoDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend Tech Stack */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="enhanced-glass p-4 rounded-xl text-center">
                
                  <img src={ReactLogo} alt="React" className="w-14 m-auto" />
                
                <h4 className="font-display font-semibold text-primary">
                  {t('visaBuddy.content.frontendTech.react')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.frontendTech.reactDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl text-center">
                
                  <img src={Typescript} alt="TypeScript" className="w-14 mb-1 m-auto" />
                
                <h4 className="font-display font-semibold text-accent">
                  {t('visaBuddy.content.frontendTech.typescript')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.frontendTech.typescriptDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl text-center">
                
                  <img src={Tailwind} alt="Tailwind CSS" className="w-14 h-14 m-auto" />
                
                <h4 className="font-display font-semibold text-primary">
                  {t('visaBuddy.content.frontendTech.tailwind')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.frontendTech.tailwindDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl text-center">
                
                  <img src={FramerMotion} alt="Framer Motion" className="w-14 h-14 m-auto" />
              
                <h4 className="font-display font-semibold text-accent">
                  {t('visaBuddy.content.frontendTech.framer')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.frontendTech.framerDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Model Metrics Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.metrics')}
            </h2>

            <div className="space-y-12">
              {/* Training Metrics */}
              <div className="enhanced-glass p-8 rounded-3xl">
                <div className="text-center mb-6">
                  <h3 className="font-display font-semibold text-primary text-2xl mb-2">
                    {t('visaBuddy.content.metrics.trainingTitle')}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {t('visaBuddy.content.metrics.trainingSubtitle')}
                  </p>
                </div>

                {/* Training Metrics Chart */}
                <div className="mb-8">
                  <div className="w-full h-80 rounded-xl flex items-center justify-center overflow-hidden p-4">
                    <img src={Metrics1} alt="Training Metrics Chart" className="w-full h-full object-fill rounded-2xl" />
                  </div>
                </div>

                {/* Explanation */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-foreground text-lg mb-4">
                    {t('visaBuddy.content.metrics.trainingDescription')}
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="enhanced-glass p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                        <span className="font-medium">{t('visaBuddy.content.metrics.trainingPoints.convergence')}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{t('visaBuddy.content.metrics.trainingPoints.convergenceDesc')}</p>
                    </div>
                    <div className="enhanced-glass p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-primary/80 rounded-full mr-2"></div>
                        <span className="font-medium">{t('visaBuddy.content.metrics.trainingPoints.loss')}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{t('visaBuddy.content.metrics.trainingPoints.lossDesc')}</p>
                    </div>
                    <div className="enhanced-glass p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-primary/60 rounded-full mr-2"></div>
                        <span className="font-medium">{t('visaBuddy.content.metrics.trainingPoints.optimized')}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{t('visaBuddy.content.metrics.trainingPoints.optimizedDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RAG Evaluation Metrics */}
              <div className="enhanced-glass p-8 rounded-3xl">
                <div className="text-center mb-6">
                  <h3 className="font-display font-semibold text-accent text-2xl mb-2">
                    {t('visaBuddy.content.metrics.ragTitle')}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {t('visaBuddy.content.metrics.ragSubtitle')}
                  </p>
                </div>

                {/* RAG Metrics Chart */}
                <div className="mb-8">
                  <div className="w-full h-80  rounded-xl flex items-center justify-center overflow-hidden p-4">
                    <img src={Metrics2} alt="RAG Metrics Chart" className="w-full h-full object-fill rounded-2xl" />
                  </div>
                </div>

                {/* Explanation */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-foreground text-lg mb-4">
                    {t('visaBuddy.content.metrics.ragDescription')}
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="enhanced-glass p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                        <span className="font-medium">{t('visaBuddy.content.metrics.ragPoints.retrieval')}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{t('visaBuddy.content.metrics.ragPoints.retrievalDesc')}</p>
                    </div>
                    <div className="enhanced-glass p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-accent/80 rounded-full mr-2"></div>
                        <span className="font-medium">{t('visaBuddy.content.metrics.ragPoints.relevance')}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{t('visaBuddy.content.metrics.ragPoints.relevanceDesc')}</p>
                    </div>
                    <div className="enhanced-glass p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-accent/60 rounded-full mr-2"></div>
                        <span className="font-medium">{t('visaBuddy.content.metrics.ragPoints.sources')}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{t('visaBuddy.content.metrics.ragPoints.sourcesDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.results')}
            </h2>
            <div className="space-y-6 mt-8">
              {getTranslatedArray('visaBuddy.content.results').map((result, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 shrink-0"></div>
                  <p className="text-foreground">{String(result)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Note */}
          <div className={`${CASE_STUDY_STYLES.scrollReveal} enhanced-glass p-8 rounded-3xl`}>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Quick Note</h3>
            <p className="text-muted-foreground mb-4">
              I just want to say that this has been an amazing experience for me. I had the opportunity to apply, all together, the knowledge that I've been gathering during my years in the tech industry.
            </p>
            <p className="text-muted-foreground mb-6">
              The current project is not perfect or even extremely realistic and my findings look weird (ok... I get it), and the metrics might seem unusual if applied to a real company or problem, but this is a great opportunity that I created for myself to showcase my skills. :)
            </p>
            <p className="text-primary font-display font-medium">x Nick</p>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}>
            {t('visaBuddy.sections.nextProject')}
          </h2>
          <Link to="/case-study/photox" className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors leading-tight tracking-tighter">
                {t('visaBuddy.nextProject.title')}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                {t('visaBuddy.nextProject.description')}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">{t('visaBuddy.nextProject.cta')}</span>
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default VisaBuddy;
