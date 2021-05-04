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
      <motion.p
        className='editor_label'
        style={{
          textTransform: 'uppercase'
        }}
        layoutId='reiner_text'
      >reiner</motion.p>
    </PageTransition>
  );
}