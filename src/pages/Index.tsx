import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import useScrollReveal from "@/hooks/useScrollReveal";
import gsap from "gsap";
import "@/lib/i18n";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useSmoothScroll();
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Magnetic effect for scroll button
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;
    
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(button, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <div className="noise-bg min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />

      {/* Scroll to top button */}
      <Button
        ref={buttonRef}
        onClick={scrollToTop}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`fixed bottom-8 right-8 z-50 rounded-full w-14 h-14 p-0 cursor-pointer bg-secondary/80 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-500 hover:bg-secondary group ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
      </Button>
    </div>
  );
};

export default Index;
