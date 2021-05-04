import { motion } from 'framer-motion';
import { PageTransition } from './PageTransition';

export function ReinerPage() {
  return (
    <PageTransition>
      <motion.img
        layoutId='reiner_pic'
        src='/reiner.jpeg'
        alt='andrew reiner'
      />
      <motion.span
        style={{
          display: 'block',
          textTransform: 'uppercase'
        }}
        layoutId='reiner_text'
      >reiner</motion.span>
    </PageTransition>
  );
}