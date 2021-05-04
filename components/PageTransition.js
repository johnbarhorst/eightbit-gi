import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export function PageTransition({ children, ...rest }) {
  return (
    <motion.main
      {...rest}
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
      layout
    >
      { children }
    </motion.main>
  );
}