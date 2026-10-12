import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { duration, easeOutExpo } from '@/motion/motion';
import { useMagnetic } from '@/motion/useMagnetic';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { Heading } from '@/components/typography/Heading';
import { Text } from '@/components/typography/Text';
import { buttons } from '@/styles/recipes';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { t } = useTranslation('contact');
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const cta = useMagnetic<HTMLAnchorElement>(0.2);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([headingRef.current, descriptionRef.current], { y: 0, opacity: 1 });
        return;
      }

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

    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="contact" ref={sectionRef} className="py-32 bg-card relative z-10">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <div className="space-y-16">
          {/* Main heading */}
          <Heading
            ref={headingRef}
            variant="contact"
            className="mb-16"
          >
            {t('heading.line1')}
            <br />
            <span className="text-primary">{t('heading.line2')}</span>
            <br />
            {t('heading.line3')}
          </Heading>

          {/* Description */}
          <div ref={descriptionRef}>
            <Text variant="contact" className="max-w-4xl mx-auto">
              {t('description.base')}{" "}
              <span className="text-primary font-medium">
                {t('description.highlight')}
              </span>{" "}
              {t('description.suffix')}
            </Text>
          </div>

          {/* CTA Button */}
          <motion.div
            className="pt-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: duration.slow, delay: 0.2, ease: easeOutExpo }}
          >
            <motion.a
              ref={cta.ref}
              style={cta.style}
              onMouseMove={cta.onMouseMove}
              onMouseLeave={cta.onMouseLeave}
              href={`mailto:${t('button.email')}`}
              className={buttons.display}
            >
              {t('button.text')}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
