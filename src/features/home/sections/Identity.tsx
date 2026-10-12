import { useTranslation } from "react-i18next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { type } from "@/styles/recipes";

const Identity = () => {
  const { t } = useTranslation("home");

  return (
    <Section spacing="loose">
      <Container width="reading" className="text-center scroll-reveal">
        <Eyebrow className="mb-10">{t("identity.eyebrow")}</Eyebrow>

        <p className={type.statement}>
          {t("identity.statement.base")}
          <em className="not-italic text-foreground font-medium">{t("identity.statement.highlight1")}</em>
          {t("identity.statement.mid1")}
          <em className="not-italic text-foreground font-medium">{t("identity.statement.highlight2")}</em>
          {t("identity.statement.mid2")}
          <em className="text-primary font-medium">{t("identity.statement.highlight3")}</em>
          {t("identity.statement.suffix")}
        </p>
      </Container>
    </Section>
  );
};

export default Identity;
