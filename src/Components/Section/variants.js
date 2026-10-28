const ease = [0.22, 1, 0.36, 1];

// Parent: staggers its children each time the section enters the viewport.
export const stagger = (gap = 0.1, delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

// Child: rises and fades in.
export const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const pop = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease } },
};
