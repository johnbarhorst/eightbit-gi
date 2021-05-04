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
      <motion.p
        className='editor_label'
        style={{
          textTransform: 'uppercase'
        }}
        layoutId='liana_text'
      >liana</motion.p>
    </PageTransition>
  );
}