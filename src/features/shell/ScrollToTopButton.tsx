import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLenis } from "@/contexts/SmoothScrollContext";

const ScrollToTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 cursor-pointer rounded-full w-14 h-14 p-0 glass-effect transition-all duration-500 hover:scale-110 group ${
        showScrollTop
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
    </Button>
  );
};

export default ScrollToTopButton;
