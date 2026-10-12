import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/motion/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import ScrollToTopButton from "@/features/shell/ScrollToTopButton";
import Navigation from "@/features/shell/Navigation";
import { useCarousel } from "@/features/case-studies/useCarousel";
import {
  Group_members,
  ideateImages,
  Languages,
  Logo,
  mobileImages,
  personaImages,
  Process_img,
  prototypeImages,
  testImages,
  webImages,
  Websolution,
} from "@/features/case-studies/my-holy-books/media";

const MyHolyBooksPage = () => {
  const { t } = useTranslation("myholybooks");
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web");
  const [activeFeatureTab, setActiveFeatureTab] = useState<"groups" | "languages">("groups");
  const personas = useCarousel(personaImages.length);
  const ideate = useCarousel(ideateImages.length);
  const prototypes = useCarousel(prototypeImages.length);
  const tests = useCarousel(testImages.length);
  const web = useCarousel(webImages.length);
  const mobile = useCarousel(mobileImages.length);

  useScrollReveal();

  const getTranslatedArray = (key: string) => {
    const data = t(`myholybooks.${key}`, { returnObjects: true });
    return Array.isArray(data) ? data : [];
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
              {t("myholybooks.category")}
            </span>
            {/* Logo */}
            <img loading="lazy" decoding="async"
              src={Logo}
              alt="MyHolyBooks logo"
              className="m-auto w-full max-w-md h-auto p-12"
            />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("myholybooks.subtitle")}
            </p>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-x-12 gap-y-6 text-center mt-16 pt-10 border-t border-border/30 ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t("myholybooks.clientTitle")}
              </p>
              <p className="text-foreground font-body font-light">
                {t("myholybooks.client")}
              </p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t("myholybooks.yearTitle")}
              </p>
              <p className="text-foreground font-body font-light">
                {t("myholybooks.year")}
              </p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t("myholybooks.durationTitle")}
              </p>
              <p className="text-foreground font-body font-light">
                {t("myholybooks.duration")}
              </p>
            </div>
            <div>
              <p className="text-primary font-body text-xs uppercase tracking-widest mb-2">
                {t("myholybooks.roleTitle")}
              </p>
              <p className="text-foreground font-body font-light">
                {t("myholybooks.role")}
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
          <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t('Overview')}</h2>
          <p className={CASE_STUDY_STYLES.typography.body}>{t('myholybooks.overview')}</p>
          </div>

          {/* Challenge */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("myholybooks.challenge.title")}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
              {t("myholybooks.challenge.content")}
            </p>
            <p className={CASE_STUDY_STYLES.typography.body}>
              <span className="text-primary font-medium">
                {t("myholybooks.challenge.userInsight")}
              </span>
              {t("myholybooks.challenge.userInsightText")}
            </p>
            <div className="my-6"></div>
            <p className={CASE_STUDY_STYLES.typography.body}>
              <span className="text-accent font-medium">
                {t("myholybooks.challenge.howMightWe")}
              </span>
              {t("myholybooks.challenge.howMightWeText")}
            </p>
          </div>

          {/* Solution */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("myholybooks.solution")}
            </h2>
            <p className={CASE_STUDY_STYLES.typography.body}>
              {t("myholybooks.solution")}
            </p>
            {/* Solution Image - Made larger */}
            <div className="mt-8 w-full">
              <img loading="lazy" decoding="async"
                src={Websolution}
                alt="MyHolyBooks solution"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Design Process */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("myholybooks.designProcess.title")}
            </h2>

            {/* Process Overview Image - Made larger */}
            <div className="mb-12 w-full">
              <img loading="lazy" decoding="async"
                src={Process_img}
                alt="Design process overview"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="space-y-12">
              {/* Empathize */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {t("myholybooks.designProcess.empathize.title")}
                </h3>
                <p className={CASE_STUDY_STYLES.typography.body}>
                  {t("myholybooks.designProcess.empathize.content")}
                </p>
              </div>

              {/* Define - Fixed with larger persona images */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-accent rounded-full"></div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {t("myholybooks.designProcess.define.title")}
                </h3>
                <p className={CASE_STUDY_STYLES.typography.body}>
                  {t("myholybooks.designProcess.define.content")}
                </p>
                <p className="text-muted-foreground mt-4">
                  {t("myholybooks.designProcess.define.personaText")}
                </p>

                {/* Persona Carousel - Made larger */}
                <div className="relative mt-6 h-[670px] w-full overflow-hidden rounded-2xl ">
                  <div className="relative h-full w-full">
                    {personaImages.map((img, index) => (
                      <div
                        key={`persona-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          personas.index === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`Persona ${index + 1}`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={personas.previous}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect hover:bg-primary/20 cursor-pointer  flex items-center justify-center"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={personas.next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect hover:bg-primary/20 cursor-pointer transition-colors duration-300 flex items-center justify-center"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {personaImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => personas.goTo(idx)}
                        className={`w-3 h-3 cursor-pointer hover:bg-primary ease-in rounded-full transition-all ${
                          personas.index === idx
                            ? "bg-primary w-6"
                            : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Ideate - Fixed with tab-based feature exploration */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {t("myholybooks.designProcess.ideate.title")}
                </h3>
                <p className={CASE_STUDY_STYLES.typography.body}>
                  {t("myholybooks.designProcess.ideate.content")}
                </p>

                {/* Ideate Carousel - Large with navigation */}
                <div className="relative mt-8 h-[500px] w-full overflow-hidden rounded-2xl enhanced-glass">
                  <div className="relative h-full w-full">
                    {ideateImages.map((img, index) => (
                      <div
                        key={`ideate-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          ideate.index === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`Ideate ${index + 1}`}
                          className="max-h-full max-w-full object-contain p-8"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation buttons */}
                  <button
                    onClick={ideate.previous}
                    className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={ideate.next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Pagination dots */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {ideateImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => ideate.goTo(idx)}
                        className={`w-3 h-3 rounded-full cursor-pointer hover:bg-primary transition-all ease-in duration-300 ${
                          ideate.index === idx
                            ? "bg-primary w-6"
                            : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Feature Exploration Section - Tab-based approach */}
                <div className="mt-12">
                  <h4 className="text-xl font-display font-semibold text-primary mb-6 text-center">
                    {t("myholybooks.designProcess.ideate.featureExploration")}
                  </h4>
                  
                  {/* Tab Navigation */}
                  <div className="flex border-b border-border mb-8">
                    <button
                      className={`py-4 px-8 font-display cursor-pointer hover:text-primary transition-all ease-in font-medium text-lg ${
                        activeFeatureTab === "groups"
                          ? "text-primary border-b-2 border-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setActiveFeatureTab("groups")}
                    >
                      {t("myholybooks.designProcess.ideate.featureTitle 1")}
                    </button>
                    <button
                      className={`py-4 px-8 font-display font-medium cursor-pointer hover:text-primary transition-all ease-in text-lg ${
                        activeFeatureTab === "languages"
                          ? "text-primary border-b-2 border-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setActiveFeatureTab("languages")}
                    >
                      {t("myholybooks.designProcess.ideate.featureTitle 2")}
                    </button>
                  </div>

                  {/* Feature Content Container */}
                  <div className=" rounded-2xl p-8">
                    {activeFeatureTab === "groups" ? (
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-8">
                           {/* Feature Description */}
                           <div className="w-full">
                            <div className="bg-primary/10 p-6 rounded-xl">
                              <h5 className="font-display font-bold text-primary text-2xl mb-4">
                                {t("myholybooks.designProcess.ideate.featureTitleBox 1")}
                              </h5>
                              <p className="text-foreground">
                                {t("myholybooks.designProcess.ideate.featureContainer 1")}
                              </p>
                            </div>
                          </div>
                          {/* Feature Image */}
                          <div className="w-full">
                            <img loading="lazy" decoding="async"
                              src={Group_members}
                              alt="Create Your Own Group Interface"
                              className="w-full h-auto rounded-xl shadow-lg"
                            />
                          </div>
                        </div>
                        <div className="text-center text-muted-foreground">
                        {t("myholybooks.designProcess.ideate.featureContainerText 1")}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-8">
                          {/* Feature Description */}
                          <div className="w-full">
                            <div className="bg-accent/10 p-6 rounded-xl">
                              <h5 className="font-display font-bold text-accent text-2xl mb-4">
                              {t("myholybooks.designProcess.ideate.featureTitleBox 2")}
                              </h5>
                              <p className="text-foreground">
                              {t("myholybooks.designProcess.ideate.featureContainer 2")}
                              </p>
                            </div>
                          </div>
                          {/* Feature Image */}
                          <div className="w-full">
                            <img loading="lazy" decoding="async"
                              src={Languages}
                              alt="Multi-Language Support Interface"
                              className="w-full h-auto rounded-xl shadow-lg"
                            />
                          </div>
                        </div>
                        <div className="text-center text-muted-foreground">
                        {t("myholybooks.designProcess.ideate.featureContainerText 2")}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                
              </div>

              {/* Prototype - Fixed with larger images */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-accent rounded-full"></div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {t("myholybooks.designProcess.prototype.title")}
                </h3>
                <p className={CASE_STUDY_STYLES.typography.body}>
                  {t("myholybooks.designProcess.prototype.content")}
                </p>

                {/* Prototype Carousel - Larger */}
                <div className="relative mt-8 h-[600px] w-full overflow-hidden rounded-2xl enhanced-glass">
                  <div className="relative h-full w-full">
                    {prototypeImages.map((img, index) => (
                      <div
                        key={`prototype-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          prototypes.index === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`Prototype ${index + 1}`}
                          className="max-h-full max-w-full object-contain p-8"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation buttons */}
                  <button
                    onClick={prototypes.previous}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect cursor-pointer flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={prototypes.next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full cursor-pointer glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Pagination dots */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {prototypeImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => prototypes.goTo(idx)}
                        className={`w-3 h-3 rounded-full transition-all cursor-pointer hover:bg-primary ease-in duration-300 ${
                          prototypes.index === idx
                            ? "bg-primary w-6"
                            : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Test - Fixed with better layout */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {t("myholybooks.designProcess.test.title")}
                </h3>
                <p className={CASE_STUDY_STYLES.typography.body}>
                  {t("myholybooks.designProcess.test.content")}
                </p>
                
                {/* Test Images Carousel - Larger */}
                <div className="relative mt-8 h-[400px] w-full overflow-hidden rounded-2xl enhanced-glass">
                  <div className="relative h-full w-full">
                    {testImages.map((img, index) => (
                      <div
                        key={`test-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          tests.index === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`Test feature ${index + 1}`}
                          className="max-h-full max-w-full object-contain p-8"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={tests.previous}
                    className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={tests.next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {testImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => tests.goTo(idx)}
                        className={`w-3 h-3 rounded-full transition-all cursor-pointer hover:bg-primary ease-in duration-300 ${
                          tests.index === idx
                            ? "bg-primary w-6"
                            : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Test Feature Labels */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {testImages.map((img, idx) => (
                    <div key={idx} className="enhanced-glass p-4 rounded-xl text-center">
                      <div className="h-24 flex items-center justify-center mb-2">
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`Test feature thumbnail ${idx + 1}`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {idx === 0 ? "Comments" : 
                         idx === 1 ? "Folders" : 
                         idx === 2 ? "Books" : 
                         "Add Friends"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Final Product */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("myholybooks.finalProduct.title")}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
              {t("myholybooks.finalProduct.content")}
            </p>

            {/* Final Product Tabs - Larger */}
            <div className="enhanced-glass rounded-2xl p-6">
              <div className="flex border-b border-border mb-8">
                <button
                  className={`py-4 px-8 font-display cursor-pointer hover:text-primary transition-all ease-in font-medium text-lg ${
                    activeTab === "web"
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("web")}
                >
                  {t("myholybooks.finalProduct.webVersion")}
                </button>
                <button
                  className={`py-4 px-8 font-display font-medium cursor-pointer hover:text-primary transition-all ease-in text-lg ${
                    activeTab === "mobile"
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("mobile")}
                >
                  {t("myholybooks.finalProduct.mobileVersion")}
                </button>
              </div>

              {activeTab === "web" ? (
                <div className="relative h-[650px] flex items-center justify-center">
                  <div className="relative h-full w-full">
                    {webImages.map((img, index) => (
                      <div
                        key={`web-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          web.index === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`Web screenshot ${index + 1}`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={web.previous}
                    className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={web.next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full cursor-pointer glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 flex gap-2 left-0 right-0 justify-center">
                    {webImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => web.goTo(idx)}
                        className={`w-3 h-3 rounded-full transition-all cursor-pointer hover:bg-primary ease-in duration-300 ${
                          web.index === idx
                            ? "bg-primary w-6"
                            : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="relative h-[600px] flex items-center justify-center">
                  <div className="relative h-full w-full">
                    {mobileImages.map((img, index) => (
                      <div
                        key={`mobile-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          mobile.index === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img loading="lazy" decoding="async"
                          src={img}
                          alt={`Mobile screenshot ${index + 1}`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={mobile.previous}
                    className="absolute left-4 top-1/2 hover:bg-primary/20 cursor-pointer ease-in -translate-y-1/2 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={mobile.next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hover:bg-primary/20 cursor-pointer ease-in glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 flex gap-2 left-0 right-0 justify-center">
                    {mobileImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => mobile.goTo(idx)}
                        className={`w-3 h-3 rounded-full ${
                          mobile.index === idx
                            ? "bg-primary w-6"
                            : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("myholybooks.results.title")}
            </h2>
            <div className="space-y-6 mt-8">
              {getTranslatedArray("results.items").map((result, index) => (
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
          <h2
            className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            {t("myholybooks.nextProject.title")}
          </h2>
          <Link
            to="/case-study/p3m-platform"
            className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div
              className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors tracking-tighter">
                {t("myholybooks.nextProject.p3mPlatform")}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                {t("myholybooks.nextProject.description")}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">
                  {t("myholybooks.nextProject.cta")}
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

export default MyHolyBooksPage;