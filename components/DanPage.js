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
      <motion.p
        className='editor_label'
        style={{
          textTransform: 'uppercase'
        }}
        layoutId='dan_text'
      >dan</motion.p>
    </PageTransition>
  );
}