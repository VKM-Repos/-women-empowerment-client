// VARIANTS FOR TRANSITION ELEMENTS
const DEFAULT_DURATION = 0.1;

// defaults
export const transElementVariant = {
  initial: { y: -3, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: DEFAULT_DURATION } },
};

export const transStartVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: DEFAULT_DURATION } },
};

// -------------------------PARENTS-------------------------
// parents for staggering children
export const defaultParentVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: DEFAULT_DURATION } },
};

export const defaultParentFastVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: DEFAULT_DURATION - 0.08 } },
};

export const defaultParentSlowVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: DEFAULT_DURATION + 0.2 } },
};

// -------------------------CHILDREN-------------------------
// children with parents variants
export const fromLeftVariant = {
  initial: { opacity: 0, x: "-5%" },
  animate: { opacity: 1, x: 0 },
};

export const fromRightVariant = {
  initial: { opacity: 0, x: "5%" },
  animate: { opacity: 1, x: 0 },
};

export const fromBottomVariant = {
  initial: { opacity: 0, y: "5%" },
  animate: { opacity: 1, y: 0 },
};

export const fromTopVariant = {
  initial: { opacity: 0, y: "-5%" },
  animate: { opacity: 1, y: 0 },
};

// Standalone
export const opacityAloneVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const fromTopAloneVariant = {
  initial: { opacity: 0, y: "-5%" },
  animate: { opacity: 1, y: 0 },
};

export const fromBottomAloneVariant = {
  initial: { opacity: 0, y: "5%" },
  animate: { opacity: 1, y: 0 },
};

export const fromLeftAloneVariant = {
  initial: { opacity: 0, x: "-20%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "-20%" },
};

export const fromRightAloneVariant = {
  initial: { opacity: 0, x: "20%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "20%" },
};
