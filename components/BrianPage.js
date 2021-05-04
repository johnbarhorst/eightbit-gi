import { motion } from 'framer-motion';
import { PageTransition } from './PageTransition';

export function BrianPage() {
  return (
    <PageTransition>
      <motion.img
        layoutId='brian_pic'
        src='/brian.jpeg'
        alt='brian shea'
      />
      <motion.span
        style={{
          display: 'block',
          textTransform: 'uppercase'
        }}
        layoutId='brian_text'
      >brian</motion.span>
    </PageTransition>
  );
}