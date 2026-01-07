import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { t } = useTranslation('contact');
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split heading animation
      const lines = headingRef.current?.querySelectorAll('span, br');
      
      gsap.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        descriptionRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <section id="contact" ref={sectionRef} className="py-32 bg-card relative z-10">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <div className="space-y-16">
          {/* Main heading */}
          <h2 
            ref={headingRef}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-16 leading-tight tracking-tighter"
          >
            {t('heading.line1')}
            <br />
            <span className="text-primary">{t('heading.line2')}</span>
            <br />
            <span className="text-accent">{t('heading.line3')}</span>
          </h2>

          {/* Description */}
          <div ref={descriptionRef}>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body font-light">
              {t('description.base')}{" "}
              <span className="text-primary font-medium">
                {t('description.highlight')}
              </span>{" "}
              {t('description.suffix')}
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-16">
            <a
              ref={buttonRef}
              href={`mailto:${t('button.email')}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="inline-block bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-500 px-12 md:px-16 py-5 md:py-6 text-lg md:text-xl font-body font-semibold rounded-full glow-primary hover:scale-105"
            >
              {t('button.text')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
