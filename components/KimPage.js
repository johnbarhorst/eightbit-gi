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
      <motion.p
        layout
        className='editor_label'
        style={{
          textTransform: 'uppercase'
        }}
        layoutId='kim_text'
      >kim</motion.p>
    </PageTransition>
  );
}