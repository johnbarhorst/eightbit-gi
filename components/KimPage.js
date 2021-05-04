import { motion } from 'framer-motion';
import { PageTransition } from './PageTransition';

export function KimPage() {
  return (
    <PageTransition>
      <motion.img
        layoutId='kim_pic'
        src='/kim.jpeg'
        alt='andrew kim'
      />
      <motion.span
        style={{
          display: 'block',
          textTransform: 'uppercase'
        }}
        layoutId='kim_text'
      >kim</motion.span>
    </PageTransition>
  );
}