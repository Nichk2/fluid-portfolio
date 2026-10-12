import { useEffect } from "react";
import Navigation from "@/features/shell/Navigation";
import Hero from "@/features/home/sections/Hero";
import Identity from "@/features/home/sections/Identity";
import FeaturedWork from "@/features/home/sections/FeaturedWork";
import Process from "@/features/home/sections/Process";
import Portfolio from "@/features/home/sections/Portfolio";
import Expertise from "@/features/home/sections/Expertise";
import Contact from "@/features/home/sections/Contact";
import Footer from "@/features/shell/Footer";
import ScrollToTopButton from "@/features/shell/ScrollToTopButton";
import useScrollReveal from "@/motion/useScrollReveal";
import { useLenis } from "@/contexts/SmoothScrollContext";
import "@/lib/i18n";

const HomePage = () => {
  const lenis = useLenis();

  useScrollReveal();

  useEffect(() => {
    const hash = window.location.hash.replace(/^#\/?/, "");
    if (!hash) return;

    const target = hash.includes("#") ? hash.split("#")[1] : hash;
    if (!target || target === "/") return;

    const timer = setTimeout(() => {
      const element = document.getElementById(target);
      if (!element) return;
      if (lenis) {
        lenis.scrollTo(element);
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [lenis]);

  return (
    <div className="noise-bg min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      <Hero />
      <Identity />
      <FeaturedWork />
      <Process />
      <Portfolio />
      <Expertise />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
