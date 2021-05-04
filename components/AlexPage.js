import { motion } from 'framer-motion';
import { PageTransition } from './PageTransition';

export function AlexPage() {
  return (
    <PageTransition>
      <motion.img
        layoutId='alex_pic'
        src='/alexvanaken.jpeg'
        alt='alex vanaken'
      />
      <motion.p
        className='editor_label'
        style={{
          textTransform: 'uppercase'
        }}
        layoutId='alex_text'
      >alex</motion.p>
    </PageTransition>
  );
}