import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Text } from "@/components/typography/Text";
import { type } from "@/styles/recipes";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import Hybras from "@/Image/HYBRAS/thumbnaill_hybras.png";
import VisaBuddy from "@/Image/VisaBuddy/closed menu highfi.png";
import AwesomeGames from "@/Image/AwesomeGames/thumbnaill_awesomegames.png";
import p3m from "@/Image/P3M/thumbnaill.png";
import myholybooks from "@/Image/MyHolyBooks/thumbnaill.svg";
import Photox from "@/Image/PHOTOX/MAPA.png";

interface Project {
  key: string;
  title: string;
  category: string;
  link: string;
  image: string;
}

const Portfolio = () => {
  const { t } = useTranslation("portfolio");

  const projects: Project[] = [
    { key: "visabuddy", title: t("projects.visabuddy.title"), category: t("projects.visabuddy.category"), link: "/case-study/visabuddy", image: VisaBuddy },
    { key: "myholybooks", title: t("projects.myholybooks.title"), category: t("projects.myholybooks.category"), link: "/case-study/myholybooks", image: myholybooks },
    { key: "p3m-platform", title: t("projects.p3m-platform.title"), category: t("projects.p3m-platform.category"), link: "/case-study/p3m-platform", image: p3m },
    { key: "photox", title: t("projects.photox.title"), category: t("projects.photox.category"), link: "/case-study/photox", image: Photox },
    { key: "hybras-collab", title: t("projects.hybras-collab.title"), category: t("projects.hybras-collab.category"), link: "/case-study/hybras-collab", image: Hybras },
    { key: "awesomegames", title: t("projects.awesomegames.title"), category: t("projects.awesomegames.category"), link: "/case-study/awesome-games", image: AwesomeGames },
  ];

  return (
    <Section id="portfolio">
      <Container>
        <div className="mb-16 max-w-2xl scroll-reveal">
          <Eyebrow className="mb-4">{t("header.title")}</Eyebrow>
          <Text variant="lead">
            {t("header.description.base")}{" "}
            <span className="text-foreground">{t("header.description.highlight")}</span>{" "}
            {t("header.description.suffix")}
          </Text>
        </div>

        <div className="border-t border-border/30 scroll-reveal">
          {projects.map((project, index) => (
            <Link
              key={project.key}
              to={project.link}
              className="group relative flex items-center justify-between gap-6 py-8 border-b border-border/30 transition-colors duration-300 hover:border-primary/30"
            >
              <div className="flex items-baseline gap-6 min-w-0">
                <span className="font-body text-sm text-muted-foreground shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={type.projectTitle}>
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-6 shrink-0">
                <span className="hidden sm:block text-muted-foreground font-body text-sm uppercase tracking-wider">
                  {project.category}
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>

              {/* Hover preview thumbnail */}
              <div
                className="pointer-events-none absolute right-24 top-1/2 -translate-y-1/2 w-56 h-36 rounded-xl overflow-hidden border border-border/30 opacity-0 scale-95 -rotate-2 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 hidden lg:block bg-secondary"
              >
                <img loading="lazy" decoding="async"
                  src={project.image}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
