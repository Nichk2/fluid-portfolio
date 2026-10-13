import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { useCarousel } from "@/features/case-studies/useCarousel";
import { Group_members, ideateImages, Languages } from "@/features/case-studies/my-holy-books/media";

/** Ideate step: sketch carousel plus the groups/languages feature tabs. */
export const IdeateStep = () => {
  const { t } = useTranslation("myholybooks");
  const [activeFeatureTab, setActiveFeatureTab] = useState<"groups" | "languages">("groups");
  const ideate = useCarousel(ideateImages.length);

  return (
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
  );
};
