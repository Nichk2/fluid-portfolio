import { useTranslation } from "react-i18next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Heading } from "@/components/typography/Heading";

interface Step {
  number: string;
  title: string;
  description: string;
}

const Process = () => {
  const { t } = useTranslation("home");
  const steps = t("process.steps", { returnObjects: true }) as Step[];

  return (
    <Section tone="card">
      <Container width="wide">
        <div className="mb-20 max-w-2xl scroll-reveal">
          <Eyebrow className="mb-4">{t("process.eyebrow")}</Eyebrow>
          <Heading>{t("process.title")}</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 scroll-reveal">
          {Array.isArray(steps) &&
            steps.map((step) => (
              <div key={step.number} className="border-t border-border/30 pt-8">
                <span className="font-display italic text-3xl text-primary">{step.number}</span>
                <h3 className="text-2xl font-display font-medium mt-4 mb-3">{step.title}</h3>
                <p className="text-muted-foreground font-body font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
        </div>
      </Container>
    </Section>
  );
};

export default Process;
