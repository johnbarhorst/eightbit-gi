import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from 'utils/variants';
import { PageTransition } from './PageTransition';


export function EditorPage({ name, fullName, bio, imgPath }) {
  return (
    <PageTransition className='layout'>
      <div>
        <motion.img
          initial={{
            borderRadius: 'none'
          }}
          animate={{
            borderRadius: '50%'
          }}
          layoutId={`${name}_pic`}
          src={imgPath}
          alt={`${fullName}`}
        />
        <motion.h3
          style={{
            textTransform: 'uppercase'
          }}
          layoutId={`${name}_text`}
        >{fullName}</motion.h3>
      </div>
      <motion.section
        variants={containerVariants}
        initial='initial'
        animate='animate'
      >
        {bio.map((text, i) => (<motion.p layout variants={itemVariants} key={i}>{text}</motion.p>))}
      </motion.section>
    </PageTransition>
  );
}