import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { cardHover } from "@/motion/variants";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import VisaBuddyImage from "@/Image/VisaBuddy/closed menu highfi.png";
import MyHolyBooksImage from "@/Image/MyHolyBooks/thumbnaill.svg";

const FEATURED_PROJECTS = [
  { key: "visabuddy", link: "/case-study/visabuddy", image: VisaBuddyImage },
  { key: "myholybooks", link: "/case-study/myholybooks", image: MyHolyBooksImage },
] as const;

const FeaturedWork = () => {
  const { t } = useTranslation(["home", "portfolio"]);

  return (
    <Section>
      <Container>
        <div className="mb-16 max-w-2xl scroll-reveal">
          <Eyebrow className="mb-4">{t("home:featuredWork.eyebrow")}</Eyebrow>
          <Heading className="mb-6">{t("home:featuredWork.title")}</Heading>
          <Text variant="lead">{t("home:featuredWork.description")}</Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {FEATURED_PROJECTS.map((project) => (
            <motion.div key={project.key} initial="rest" whileHover="hover" animate="rest" className="scroll-reveal">
              <Link to={project.link} className="group block">
                <motion.div
                  variants={cardHover}
                  className="relative aspect-4/3 rounded-2xl overflow-hidden bg-secondary border border-border/30"
                >
                  <img loading="lazy" decoding="async"
                    src={project.image}
                    alt={t(`portfolio:projects.${project.key}.title`)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                </motion.div>

                <div className="flex items-start justify-between mt-6">
                  <div>
                    <span className="text-primary font-body text-sm uppercase tracking-wider">
                      {t(`portfolio:projects.${project.key}.category`)}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-medium mt-1 group-hover:text-primary transition-colors duration-300">
                      {t(`portfolio:projects.${project.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground font-body font-light mt-1">
                      {t(`portfolio:projects.${project.key}.subtitle`)}
                    </p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 mt-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedWork;
