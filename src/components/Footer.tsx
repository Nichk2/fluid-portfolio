import { Github, Linkedin } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { t } = useTranslation('footer');
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const brandingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        brandingRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-background py-20 border-t border-border/20 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div 
          ref={contentRef}
          className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0"
        >
          {/* Copyright */}
          <div>
            <p className="text-muted-foreground font-body text-lg">
              {t('copyright.base')} <span className="text-primary font-semibold">{t('copyright.name')}</span>.
              {t('copyright.rights')}
            </p>
            <p className="mt-2 text-muted-foreground/70">
              {t('copyright.phone')}
            </p>
          </div>

          {/* Social links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Nichk2"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 text-muted-foreground hover:text-primary transition-all duration-300 rounded-full hover:bg-secondary"
              aria-label={t('social.github.ariaLabel')}
            >
              <Github className="w-6 h-6" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/nicholas-antunes-de-andrade/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 text-muted-foreground hover:text-primary transition-all duration-300 rounded-full hover:bg-secondary"
              aria-label={t('social.linkedin.ariaLabel')}
            >
              <Linkedin className="w-6 h-6" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            </a>
          </div>
        </div>

        {/* Branding */}
        <div 
          ref={brandingRef}
          className="mt-16 pt-8 border-t border-border/20 text-center"
        >
          <p className="text-muted-foreground font-body text-sm">
            {t('branding.text')} <span className="text-primary">{t('branding.efficiency')}</span> {t('branding.and')} <span className="text-accent">{t('branding.purpose')}</span> {t('branding.suffix')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
