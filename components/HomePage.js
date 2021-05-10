import { motion } from 'framer-motion';
import Link from 'next/link';
import editorData from 'utils/editorData';
import { PageTransition } from './PageTransition';
import style from 'styles/Home.module.css';

export function HomePage() {
  const data = Object.values(editorData);
  return (
    <PageTransition className={style.main}>
      <motion.div className={style.pt1}>
        <motion.span
          layout
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 1
          }}
        >Stage Select</motion.span>
      </motion.div>
      <section className={style.boss_select}>
        {data.map(({ name, fullName, imgPath }) => (
          <Link href={`/editor/${name}`} key={name}>
            <a className={style.boss_card}>
              <motion.img
                layout
                layoutId={`${name}_pic`}
                className={style.boss_image}
                src={imgPath}
                alt={fullName}
              />
              <motion.p
                layout
                className='editor_label'
                layoutId={`${name}_text`}
              >{name}</motion.p>
            </a>
          </Link>
        ))}
      </section>
    </PageTransition>
  );
}
