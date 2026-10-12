import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/contexts/SmoothScrollContext";
import { useMagnetic } from "@/motion/useMagnetic";
import { menuReveal, staggerContainer, menuItem } from "@/motion/variants";
import { buttons } from "@/styles/recipes";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoState, setLogoState] = useState<"collapsed" | "expanding" | "expanded">("collapsed");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation("navigation");
  const lenis = useLenis();

  const cta = useMagnetic<HTMLButtonElement | HTMLAnchorElement>(0.15);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      if (scrolled && logoState === "collapsed") {
        setLogoState("expanding");
        setTimeout(() => setLogoState("expanded"), 300);
      } else if (!scrolled && logoState === "expanded") {
        setLogoState("expanding");
        setTimeout(() => setLogoState("collapsed"), 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoState]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    if (lenis) {
      lenis.scrollTo(element);
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const scrollTop = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguageMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-nav border-b border-border/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-3xl font-display italic font-medium text-foreground hover:text-primary h-10 flex items-center min-w-[126px] transition-colors duration-300"
              onClick={scrollTop}
            >
              <div className="relative h-full w-full overflow-hidden">
                <div className={`whitespace-nowrap transition-all duration-300 ease-gsap ${
                  logoState === "collapsed" ? "opacity-100 translate-y-0" :
                  logoState === "expanding" ? "opacity-100 -translate-y-full" :
                  "opacity-0 -translate-y-full"
                }`}>
                  N.
                </div>
                <div className={`absolute top-0 left-0 whitespace-nowrap transition-all duration-300 ease-gsap ${
                  logoState === "collapsed" ? "opacity-0 translate-y-full" :
                  logoState === "expanding" ? "opacity-100 translate-y-0" :
                  "opacity-100 translate-y-0"
                }`}>
                  Nicholas
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/aboutme"
                className={`transition-all duration-300 font-body font-medium link-underline ${
                  location.pathname === "/aboutme"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {t("links.about")}
              </Link>

              {location.pathname === "/" ? (
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 font-body font-medium link-underline"
                >
                  {t("links.work")}
                </button>
              ) : (
                <Link
                  to="/#portfolio"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-body font-medium link-underline"
                >
                  {t("links.work")}
                </Link>
              )}

              {location.pathname === "/" ? (
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 font-body font-medium link-underline"
                >
                  {t("links.contact")}
                </button>
              ) : (
                <Link
                  to="/#contact"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-body font-medium link-underline"
                >
                  {t("links.contact")}
                </Link>
              )}

              {/* Language Switcher */}
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-muted-foreground cursor-pointer hover:text-primary transition-all px-3 py-1 rounded-full"
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  aria-label={t("buttons.language.ariaLabel")}
                >
                  <span className="font-body font-medium">
                    {i18n.language.toUpperCase()}
                  </span>
                  <span className={`transition-transform duration-300 ${languageMenuOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {languageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-28 bg-card rounded-xl shadow-lg overflow-hidden z-50 border border-border/30 animate-fade-in">
                    <button
                      onClick={() => handleLanguageChange("en")}
                      className={`block w-full text-left px-4 py-3 text-sm cursor-pointer hover:bg-secondary transition-colors ${
                        i18n.language === "en" ? "text-primary font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {t("buttons.language.en")}
                    </button>
                    <button
                      onClick={() => handleLanguageChange("pt")}
                      className={`block w-full text-left px-4 py-3 text-sm hover:bg-secondary cursor-pointer transition-colors ${
                        i18n.language === "pt" ? "text-primary font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {t("buttons.language.pt")}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop CTA + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {location.pathname === "/" ? (
                <motion.button
                  ref={cta.ref as React.RefObject<HTMLButtonElement>}
                  style={cta.style}
                  onMouseMove={cta.onMouseMove}
                  onMouseLeave={cta.onMouseLeave}
                  onClick={() => scrollToSection("contact")}
                  className={buttons.nav}
                >
                  {t("buttons.getInTouch")}
                </motion.button>
              ) : (
                <motion.div style={cta.style} className="hidden md:block">
                  <Link
                    ref={cta.ref as React.RefObject<HTMLAnchorElement>}
                    onMouseMove={cta.onMouseMove}
                    onMouseLeave={cta.onMouseLeave}
                    to="/#contact"
                    className={buttons.navLink}
                  >
                    {t("buttons.getInTouch")}
                  </Link>
                </motion.div>
              )}

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-foreground cursor-pointer p-2"
                aria-expanded={mobileMenuOpen}
                aria-label={t("buttons.menu")}
              >
                <div className="w-6 flex flex-col gap-1.5">
                  <span className={`h-0.5 w-full bg-foreground transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}></span>
                  <span className={`h-0.5 w-full bg-foreground transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}></span>
                  <span className={`h-0.5 w-full bg-foreground transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={menuReveal}
          className="md:hidden overflow-hidden"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={mobileMenuOpen ? "visible" : "hidden"}
            className="px-6 pb-6 pt-2 space-y-4 bg-background/95 backdrop-blur-xl border-b border-border/20"
          >
            <motion.div variants={menuItem}>
              <Link
                to="/aboutme"
                onClick={closeMobileMenu}
                className={`block w-full text-left py-3 transition-all duration-300 font-body font-medium text-lg ${
                  location.pathname === "/aboutme"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {t("links.about")}
              </Link>
            </motion.div>

            <motion.div variants={menuItem}>
              {location.pathname === "/" ? (
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="block w-full text-left py-3 text-muted-foreground cursor-pointer hover:text-primary transition-all duration-300 font-body font-medium text-lg"
                >
                  {t("links.work")}
                </button>
              ) : (
                <Link
                  to="/#portfolio"
                  onClick={closeMobileMenu}
                  className="block w-full text-left py-3 text-muted-foreground hover:text-primary transition-all duration-300 font-body font-medium text-lg"
                >
                  {t("links.work")}
                </Link>
              )}
            </motion.div>

            <motion.div variants={menuItem}>
              {location.pathname === "/" ? (
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left py-3 text-muted-foreground cursor-pointer hover:text-primary transition-all duration-300 font-body font-medium text-lg"
                >
                  {t("links.contact")}
                </button>
              ) : (
                <Link
                  to="/#contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-left py-3 text-muted-foreground hover:text-primary transition-all duration-300 font-body font-medium text-lg"
                >
                  {t("links.contact")}
                </Link>
              )}
            </motion.div>

            {/* Mobile Language Switcher */}
            <motion.div variants={menuItem} className="pt-4 border-t border-border/20">
              <div className="flex gap-3">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`flex-1 py-3 text-sm rounded-xl cursor-pointer border transition-all duration-300 ${
                    i18n.language === "en"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {t("buttons.language.en")}
                </button>
                <button
                  onClick={() => handleLanguageChange("pt")}
                  className={`flex-1 py-3 text-sm rounded-xl border cursor-pointer transition-all duration-300 ${
                    i18n.language === "pt"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {t("buttons.language.pt")}
                </button>
              </div>
            </motion.div>

            <motion.div variants={menuItem} className="pt-4">
              {location.pathname === "/" ? (
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-primary text-primary-foreground cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-6 py-3 rounded-full font-body font-medium text-lg"
                >
                  {t("buttons.getInTouch")}
                </button>
              ) : (
                <Link
                  to="/#contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center bg-primary text-primary-foreground cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-6 py-3 rounded-full font-body font-medium text-lg"
                >
                  {t("buttons.getInTouch")}
                </Link>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
