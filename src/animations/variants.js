export const createFadeUp = (reduceMotion = false) => ({
  hidden: { opacity: 0, transform: reduceMotion ? 'translateY(0px)' : 'translateY(28px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    transform: 'translateY(0px)',
    transition: { duration: 0.25, delay, ease: [0.23, 1, 0.32, 1] },
  }),
});

export const fadeUp = {
  hidden: { opacity: 0, transform: 'translateY(28px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    transform: 'translateY(0px)',
    transition: { duration: 0.25, delay, ease: [0.23, 1, 0.32, 1] },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.25, delay, ease: [0.23, 1, 0.32, 1] },
  }),
};

export const createStaggerContainer = (reduceMotion = false) => ({
  hidden: {},
  visible: {
    transition: reduceMotion
      ? { staggerChildren: 0, delayChildren: 0 }
      : { staggerChildren: 0.08, delayChildren: 0.15 },
  },
});

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};
