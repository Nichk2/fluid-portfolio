import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hybras from "../Image/HYBRAS/thumbnaill_hybras.png"
import VisaBuddy from "../Image/VisaBuddy/closed menu highfi.png";
import AwesomeGames from "../Image/AwesomeGames/thumbnaill_awesomegames.png";
import p3m from "../Image/P3M/thumbnaill.png"
import myholybooks from "../Image/MyHolyBooks/thumbnaill.svg"
import Photox from "../Image/PHOTOX/MAPA.png";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  category: string;
  description: string;
  link: string;
  color: "primary" | "accent";
}

const Portfolio = () => {
  const { t } = useTranslation("portfolio");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: t("projects.visabuddy.title"),
      category: t("projects.visabuddy.category"),
      description: t("projects.visabuddy.subtitle"),
      link: "/case-study/visabuddy",
      color: "primary",
    },
    {
      title: t("projects.myholybooks.title"),
      category: t("projects.myholybooks.category"),
      description: t("projects.myholybooks.subtitle"),
      link: "/case-study/myholybooks",
      color: "accent",
    },
    {
      title: t("projects.p3m-platform.title"),
      category: t("projects.p3m-platform.category"),
      description: t("projects.p3m-platform.subtitle"),
      link: "/case-study/p3m-platform",
      color: "primary",
    },
    {
      title: t("projects.photox.title"),
      category: t("projects.photox.category"),
      description: t("projects.photox.subtitle"),
      link: "/case-study/photox",
      color: "accent",
    },
    {
      title: t("projects.hybras-collab.title"),
      category: t("projects.hybras-collab.category"),
      description: t("projects.hybras-collab.subtitle"),
      link: "/case-study/hybras-collab",
      color: "primary",
    },
    {
      title: t("projects.awesomegames.title"),
      category: t("projects.awesomegames.category"),
      description: t("projects.awesomegames.subtitle"),
      link: "/case-study/awesome-games",
      color: "accent",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stagger project cards
      const cards = projectsRef.current?.querySelectorAll(".project-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div ref={headerRef} className="mb-16">
          <p className="text-primary font-body font-medium text-sm uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 tracking-tighter">
            {t("header.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-body font-light">
            {t("header.description.base")}{" "}
            <span className="text-primary">{t("header.description.highlight")}</span>{" "}
            {t("header.description.suffix")}
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="project-card group relative aspect-[4/3] bg-card rounded-2xl overflow-hidden border border-border/30 hover:border-primary/50 transition-all duration-500"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div>
                  <span className={`text-${project.color} font-body text-sm uppercase tracking-wider`}>
                    {project.category}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-body font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
