import { useTranslation } from "react-i18next";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import { ListItems } from "@/features/case-studies/awesome-games/sections/ListItems";
import { Process } from "@/features/case-studies/awesome-games/media";

interface KeySection {
  emoji: string;
  title: string;
  content: string | string[];
}

interface ProcessStep {
  title: string;
  description?: string;
  items?: string[];
}

/** Introduction, the emoji key-fact cards, and the design process card. */
export const OverviewSection = () => {
  const { t } = useTranslation('awesomegames');

  // Get translated content
  const getTranslatedArray = (key: string): string[] => {
    try {
      const result = t(key, { returnObjects: true });
      return Array.isArray(result)
        ? result.filter((item): item is string => typeof item === "string")
        : [];
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return [];
    }
  };

  const keySections: KeySection[] = [
    {
      emoji: "🤳🏻",
      title: t('awesomeGames.keySections.product.title'),
      content: t('awesomeGames.keySections.product.content')
    },
    {
      emoji: "🧑🏻‍💻",
      title: t('awesomeGames.keySections.responsibilities.title'),
      content: getTranslatedArray('awesomeGames.keySections.responsibilities.content')
    },
    {
      emoji: "😵‍💫",
      title: t('awesomeGames.keySections.problem.title'),
      content: t('awesomeGames.keySections.problem.content')
    },
    {
      emoji: "🎯",
      title: t('awesomeGames.keySections.goal.title'),
      content: t('awesomeGames.keySections.goal.content')
    },
    {
      emoji: "🙋🏻‍♂️",
      title: t('awesomeGames.keySections.role.title'),
      content: t('awesomeGames.keySections.role.content')
    },
    {
      emoji: "⏰",
      title: t('awesomeGames.keySections.duration.title'),
      content: t('awesomeGames.keySections.duration.content')
    }
  ];

  const painPoints = getTranslatedArray('awesomeGames.process.steps.2.items');

  const getProcessSteps = (): ProcessStep[] => {
    try {
      return [
        {
          title: t('awesomeGames.process.steps.0.title'),
          description: t('awesomeGames.process.steps.0.description'),
          items: getTranslatedArray('awesomeGames.process.steps.0.items')
        },
        {
          title: t('awesomeGames.process.steps.1.title'),
          description: t('awesomeGames.process.steps.1.description')
        },
        {
          title: t('awesomeGames.process.steps.2.title'),
          items: painPoints
        }
      ];
    } catch (error) {
      console.error('Error getting process steps:', error);
      return [];
    }
  };

  const processSteps = getProcessSteps();

  const renderIntroduction = () => {
    try {
      const introData = t('awesomeGames.introduction', { returnObjects: true });
      const introArray = Array.isArray(introData) ? introData : [introData];

      return introArray.map((paragraph: string, index: number) => (
        <p key={`intro-${index}`} className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body font-light mb-6">
          {paragraph}
        </p>
      ));
    } catch (error) {
      console.error('Error rendering introduction:', error);
      return <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body font-light mb-6">Introduction content unavailable</p>;
    }
  };

  return (
    <>
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        {renderIntroduction()}
      </div>

      {/* Key Sections with Emojis */}
      <div className={`${CASE_STUDY_STYLES.scrollReveal} space-y-8`}>
        {keySections.map((section, index) => (
          <div key={`section-${index}`} className="enhanced-glass p-8 rounded-2xl">
            <h3 className="text-2xl font-display font-bold text-primary mb-4 flex items-center gap-2">
              <span>{section.emoji}</span> {section.title}
            </h3>
            {typeof section.content === 'string' ? (
              <p className="text-muted-foreground font-body">{section.content}</p>
            ) : (
              <ul className="list-disc pl-5 space-y-2">
                <ListItems items={section.content} />
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Process Card */}
      <div className={CASE_STUDY_STYLES.scrollReveal}>
        <div className="enhanced-glass p-8 rounded-2xl">
          <img loading="lazy" decoding="async"
            src={Process}
            alt="Design Process"
            className="w-full h-auto rounded-lg mb-6"
          />
          <p className="text-muted-foreground font-body mb-6">
            {t('awesomeGames.process.description')}
          </p>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={`process-step-${index}`}>
                <h4 className="text-xl font-display font-semibold text-primary mb-2">
                  {step.title}
                </h4>
                {step.description && (
                  <p className="text-muted-foreground font-body mb-2">
                    {step.description}
                  </p>
                )}
                {step.items && (
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-body">
                    <ListItems items={step.items} />
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
