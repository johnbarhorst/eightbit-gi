import { motion } from 'framer-motion';
import { PageTransition } from './PageTransition';

export function LianaPage() {
  return (
    <PageTransition>
      <motion.img
        layoutId='liana_pic'
        src='/lianaruppert.jpeg'
        alt='lianaruppert'
      />
      <motion.span
        style={{
          display: 'block',
          textTransform: 'uppercase'
        }}
        layoutId='liana_text'
      >liana</motion.span>
    </PageTransition>
  );
}