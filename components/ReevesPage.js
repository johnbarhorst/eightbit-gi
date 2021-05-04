import { motion } from 'framer-motion';
import { PageTransition } from './PageTransition';

export function ReevesPage() {
  return (
    <PageTransition>
      <motion.img
        layoutId='reeves_pic'
        src='/reeves.jpeg'
        alt='ben reeves'
      />
      <motion.span
        style={{
          display: 'block',
          textTransform: 'uppercase'
        }}
        layoutId='reeves_text'
      >reeves</motion.span>
    </PageTransition>
  );
}