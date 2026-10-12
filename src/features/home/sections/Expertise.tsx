import { useTranslation } from "react-i18next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Heading } from "@/components/typography/Heading";

interface Group {
  label: string;
  items: string[];
}

const Expertise = () => {
  const { t } = useTranslation("home");
  const groups = t("expertise.groups", { returnObjects: true }) as Group[];

  return (
    <Section>
      <Container width="wide">
        <div className="mb-16 max-w-2xl scroll-reveal">
          <Eyebrow className="mb-4">{t("expertise.eyebrow")}</Eyebrow>
          <Heading>{t("expertise.title")}</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 scroll-reveal">
          {Array.isArray(groups) &&
            groups.map((group) => (
              <div key={group.label}>
                <h3 className="font-display italic text-2xl text-primary mb-6">{group.label}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-lg text-muted-foreground font-body font-light">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </Container>
    </Section>
  );
};

export default Expertise;
