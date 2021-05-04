import { motion } from 'framer-motion';
import { PageTransition } from './PageTransition';

export function DanPage() {
  return (
    <PageTransition>
      <motion.img
        layoutId='dan_pic'
        src='/daniel.jpeg'
        alt='dan tack'
      />
      <motion.span
        style={{
          display: 'block',
          textTransform: 'uppercase'
        }}
        layoutId='dan_text'
      >dan</motion.span>
    </PageTransition>
  );
}