import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { useCarousel } from "@/features/case-studies/useCarousel";
import { mobileImages, webImages } from "@/features/case-studies/my-holy-books/media";

/** Web and mobile screens behind tabs. Each tab keeps its own slide position. */
export const FinalProductSection = () => {
  const { t } = useTranslation("myholybooks");
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web");
  const web = useCarousel(webImages.length);
  const mobile = useCarousel(mobileImages.length);

  return (
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
  );
};
