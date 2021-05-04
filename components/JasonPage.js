import { motion } from 'framer-motion';
import { PageTransition } from './PageTransition';

export function JasonPage() {
  return (
    <PageTransition>
      <motion.img
        layoutId='jason_pic'
        src='/jason.jpeg'
        alt='jason guisao'
      />
      <motion.p
        className='editor_label'
        style={{
          textTransform: 'uppercase'
        }}
        layoutId='jason_text'
      >jason</motion.p>
    </PageTransition>
  );
}