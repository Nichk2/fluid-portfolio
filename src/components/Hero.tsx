import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

const Hero = () => {
  const { t } = useTranslation('hero');
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for staggered entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { 
          y: 100, 
          opacity: 0,
          filter: "blur(20px)"
        },
        { 
          y: 0, 
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.4
        }
      )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.8"
      )
      .fromTo(
        descriptionRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      );

      // Floating animation for scroll button
      gsap.to(buttonRef.current, {
        y: 8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Magnetic effect for button
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;
    
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
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
    <section 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center relative bg-background px-6 pt-20 z-10"
    >
      <div className="text-center max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 
            ref={titleRef}
            className="text-8xl md:text-[12rem] font-display font-bold text-foreground mb-4 leading-none tracking-tighter"
          >
            {t('title')}
          </h1>
        </div>

        <div className="mb-16">
          <p 
            ref={subtitleRef}
            className="text-3xl md:text-4xl text-primary font-display font-medium tracking-wide"
          >
            {t('subtitle')}
          </p>
        </div>

        <div className="mb-12">
          <p 
            ref={descriptionRef}
            className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body font-light"
          >
            {t('description.base')}
            <span className="text-primary font-medium"> {t('description.highlight1')}</span>,
            <span className="text-accent font-medium"> {t('description.highlight2')}</span>
            <span className="text-primary font-medium"> {t('description.highlight3')}</span>
          </p>
        </div>
      </div>

      <button
        ref={buttonRef}
        onClick={scrollToPortfolio}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="absolute bottom-12 p-4 rounded-full bg-secondary/80 cursor-pointer border border-border/50 hover:border-primary/50 transition-all duration-500 group z-20 backdrop-blur-sm"
        aria-label={t('scrollIndicator.ariaLabel')}
      >
        <ChevronDown className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
      </button>
    </section>
  );
};

export default Hero;
