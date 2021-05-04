export const containerVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: .3
    }
  }
};

export const itemVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
  }
};