/** Shared Framer Motion variants for the micro-interaction layer (buttons, cards, menus). */

import { duration, easeOutExpo, stagger } from "@/motion/motion";

const EASE_OUT = easeOutExpo;

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.01, transition: { duration: duration.base, ease: EASE_OUT } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.moderate, ease: EASE_OUT } },
};

export const menuReveal = {
  closed: { opacity: 0, height: 0, transition: { duration: duration.fast, ease: EASE_OUT } },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: duration.base, ease: EASE_OUT },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
};

export const menuItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.fast, ease: EASE_OUT } },
};
