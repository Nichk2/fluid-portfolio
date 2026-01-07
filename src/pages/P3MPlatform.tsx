import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/hooks/useScrollReveal";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// Import images from the old version
import Goal_1 from '../Image/P3M/Goals_img1.png';
import Goal_2_before from '../Image/P3M/Goals_img2_before.png';
import Goal_2_after from '../Image/P3M/Goals_img2_after.png';
import Goal_3_before from '../Image/P3M/Goals_img3_before.png';
import Goal_3_after from '../Image/P3M/Goals_img3_after.png';
import Goal_4 from '../Image/P3M/Goals_img4.png';
import Goal_5 from '../Image/P3M/Goals_img5.png';
import Goal_5_1 from '../Image/P3M/Goals_img5(1).png';
import Goal_5_2 from '../Image/P3M/Goals_img5(2).png';
import Result from '../Image/P3M/Result.png';
import Logo from '../Image/P3M/logo.svg';

const P3MPlatform = () => {
  const { t } = useTranslation('p3mplatform');
  const [activeTab, setActiveTab] = useState<"before" | "after">("before");
  
  useSmoothScroll();
  useScrollReveal();

  const caseStudyData = {
    title: t("p3mPlatform.sections.overview"),
    subtitle: "Redesign of a Brazilian government mineral information platform to improve business decisions and regional development",
    category: t("p3mPlatform.hero.category"),
    year: "2023",
    client: "SGB - Serviço Geológico do Brasil",
    duration: "3 months",
    role: "UX/UI Designer",
    overview: t("p3mPlatform.content.overview"),
    problem: t("p3mPlatform.content.problem"),
    goal: t("p3mPlatform.content.goal"),
    results: t("p3mPlatform.content.resultsText")
  };

  return (
    <div className={CASE_STUDY_STYLES.background}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${CASE_STUDY_STYLES.navigation}`}>
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-body">
              <ChevronLeft className="w-5 h-5" />
              <span>{t("p3mPlatform.navigation.back")}</span>
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
              {caseStudyData.category}
            </span>
          </div>

          {/* Logo Image */}
          <div className={`w-full h-[500px] flex items-center justify-center mt-16 mb-20 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <img src={Logo} alt="P3M Platform Logo" className="h-full object-contain" />
          </div>

          <div className={`grid md:grid-cols-4 gap-8 text-center md:text-left mt-16 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t("p3mPlatform.hero.client")}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.client}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t("p3mPlatform.hero.year")}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.year}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t("p3mPlatform.hero.duration")}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.duration}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t("p3mPlatform.hero.role")}
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
              {t("p3mPlatform.sections.overview")}
            </h2>
            <p className={CASE_STUDY_STYLES.typography.body}>
              {caseStudyData.overview}
            </p>
          </div>

          {/* Problem */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("p3mPlatform.sections.problem")}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {caseStudyData.problem}
            </p>
          </div>

          {/* Goal */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("p3mPlatform.sections.goal")}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {caseStudyData.goal}
            </p>

            {/* First Goal - Original Screens from old version */}
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6 mt-8`}>
              <img src={Goal_1} alt="Original P3M Platform Screens" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("p3mPlatform.content.originalScreensDescription")}
              </p>
            </div>
          </div>

          {/* Layers Section Redesign */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("p3mPlatform.sections.layersRedesign")}
            </h3>
            
            <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass">
              <div className="flex border-b border-border/20">
                <button
                  className={`flex-1 py-4 font-display font-medium cursor-pointer transition-colors ${activeTab === "before" ? "text-primary" : "text-muted-foreground"}`}
                  onClick={() => setActiveTab("before")}
                >
                  <p className="hover:text-primary ease-in cursor-pointer transition-all">
                  {t("p3mPlatform.content.beforeAfter.before")}
                  </p>
                </button>
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors cursor-pointer ${activeTab === "after" ? "text-primary" : "text-muted-foreground"}`}
                  onClick={() => setActiveTab("after")}
                >
                  <p className="hover:text-primary ease-in cursor-pointer transition-all">
                  {t("p3mPlatform.content.beforeAfter.after")}
                  </p>
                </button>
              </div>
              <div className="relative h-[500px] w-full flex items-center justify-center p-6">
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeTab === "before" ? "opacity-100" : "opacity-0"}`}>
                  <img src={Goal_2_before} alt="Original Layers Section" className="max-h-full max-w-full object-contain rounded-lg" />
                </div>
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeTab === "after" ? "opacity-100" : "opacity-0"}`}>
                  <img src={Goal_2_after} alt="Redesigned Layers Section" className="max-h-full max-w-full object-contain rounded-lg" />
                </div>
              </div>
              <p className="text-muted-foreground text-center p-4 font-body">
                {t("p3mPlatform.content.layersDescription")}
              </p>
            </div>
          </div>

          {/* Commodity Cards Redesign */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("p3mPlatform.sections.commodityCards")}
            </h3>
            
            <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass">
              <div className="flex border-b border-border/20">
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${activeTab === "before" ? "text-primary" : "text-muted-foreground"}`}
                  onClick={() => setActiveTab("before")}
                >
                  <p className="hover:text-primary ease-in cursor-pointer transition-all">
                  {t("p3mPlatform.content.beforeAfter.before")}
                  </p>
                </button>
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${activeTab === "after" ? "text-primary" : "text-muted-foreground"}`}
                  onClick={() => setActiveTab("after")}
                >
                  <p className="hover:text-primary ease-in cursor-pointer transition-all">
                  {t("p3mPlatform.content.beforeAfter.after")}
                  </p>
                </button>
              </div>
              <div className="relative h-[500px] w-full flex items-center justify-center p-6">
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeTab === "before" ? "opacity-100" : "opacity-0"}`}>
                  <img src={Goal_3_before} alt="Original Commodity Cards" className="max-h-full max-w-full object-contain rounded-lg" />
                </div>
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeTab === "after" ? "opacity-100" : "opacity-0"}`}>
                  <img src={Goal_3_after} alt="Redesigned Commodity Cards" className="max-h-full max-w-full object-contain rounded-lg" />
                </div>
              </div>
              <p className="text-muted-foreground p-4 text-center font-body">
                {t("p3mPlatform.content.commodityDescription")}
              </p>
            </div>
          </div>

          {/* Menu Simplification */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("p3mPlatform.sections.menuSimplification")}
            </h3>
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6`}>
              <img src={Goal_4} alt="Menu Relocation Changes" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("p3mPlatform.content.menuDescription")}
              </p>
            </div>
          </div>

          {/* New Dashboard */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("p3mPlatform.sections.newDashboard")}
            </h3>
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6`}>
              <img src={Goal_5} alt="New Dashboard Sections" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("p3mPlatform.content.dashboardDescription")}
              </p>
            </div>
          </div>

          {/* Quick Search Redesign from old version */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("p3mPlatform.sections.quickSearch")}
            </h3>
            
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6 mb-4`}>
              <img src={Goal_5_1} alt="Quick Search Before" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("p3mPlatform.content.quickSearchBefore")}
              </p>
            </div>
            
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6`}>
              <img src={Goal_5_2} alt="Quick Search After" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("p3mPlatform.content.quickSearchAfter")}
              </p>
            </div>
          </div>

          {/* Final Result from old version */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("p3mPlatform.sections.finalHomepage")}
            </h3>
            
            <div className='w-full p-6'>
              <img src={Result} alt="Final Homepage Design" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-10 text-center font-body">
                {t("p3mPlatform.content.finalDescription")}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("p3mPlatform.sections.results")}
            </h2>
            <div className="enhanced-glass p-8 rounded-2xl">
              <p className="text-xl font-body font-medium text-foreground">
                {caseStudyData.results}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}>
            {t("p3mPlatform.sections.nextProject")}
          </h2>
          <Link to="/case-study/awesome-games" className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors leading-tight tracking-tighter">
                {t("p3mPlatform.nextProject.title")}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                {t("p3mPlatform.nextProject.description")}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">
                  {t("p3mPlatform.nextProject.cta")}
                </span>
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

export default P3MPlatform;