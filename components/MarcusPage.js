import { motion } from 'framer-motion';
import { PageTransition } from './PageTransition';

export function MarcusPage() {
  return (
    <PageTransition>
      <motion.img
        layoutId='marcus_pic'
        src='/marcus.jpeg'
        alt='marcus stewart'
      />
      <motion.span
        style={{
          display: 'block',
          textTransform: 'uppercase'
        }}
        layoutId='marcus_text'
      >marcus</motion.span>
    </PageTransition>
  );
}