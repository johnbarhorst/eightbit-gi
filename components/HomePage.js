import { motion } from 'framer-motion';
import Link from 'next/link';
import { PageTransition } from './PageTransition';
import style from 'styles/Home.module.css';

export function HomePage() {
  return (
    <PageTransition className={style.main}>
      <motion.span
        layout
        className='editor_label'
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
      <section className={style.boss_select}>
        <Link href='./alex'>
          <div className={style.boss_card}>
            <motion.img
              layoutId='alex_pic'
              className={style.boss_image}
              src='/alexvanaken.jpeg'
              alt='alex vanaken'
            />
            <motion.p
              layout
              className='editor_label'
              layoutId='alex_text'
            >alex</motion.p>
          </div>
        </Link>
        <Link href='./brian'>
          <div className={style.boss_card}>
            <motion.img
              layoutId='brian_pic'
              className={style.boss_image} 
              src='/brian.jpeg'
              alt='brian'
            />
            <motion.p
              layout
              className='editor_label'
              layoutId='brian_text'>brian</motion.p>
          </div>
        </Link>
        <Link href='./dan'>
          <div className={style.boss_card}>
            <motion.img
              layoutId='dan_pic'
              className={style.boss_image} 
              src='/daniel.jpeg'
              alt='daniel'
            />
            <motion.p
              layout
              className='editor_label'
              layoutId='dan_text'>dan</motion.p>
          </div>
        </Link>
        <Link href='./jason'>
          <div className={style.boss_card}>
            <motion.img
              layoutId='jason_pic'
              className={style.boss_image} 
              src='/jason.jpeg'
              alt='jason'
            />
            <motion.p
              layout
              className='editor_label'
              layoutId='jason_text'>jason</motion.p>
          </div>
        </Link>
        <Link href='./reiner'>
          <div className={style.boss_card}>
            <motion.img
              layoutId='reiner_pic'
              className={style.boss_image} 
              src='/reiner.jpeg'
              alt='reiner'
            />
            <motion.p
              layout
              className='editor_label'
              layoutId='reiner_text'>reiner</motion.p>
          </div>
        </Link>
        <Link href='./kim'>
          <div className={style.boss_card}>
            <motion.img
              layoutId='kim_pic'
              className={style.boss_image} 
              src='/kim.jpeg'
              alt='kim'
            />
            <motion.p
              layout
              className='editor_label'
              layoutId='kim_text'>kim</motion.p>
          </div>
        </Link>
        <Link href='./liana'>
          <div className={style.boss_card}>
            <motion.img
              layoutId='liana_pic'
              className={style.boss_image} 
              src='/lianaruppert.jpeg'
              alt='liana ruppert'
            />
            <motion.p
              layout
              className='editor_label'
              layoutId='liana_text'
            >liana</motion.p>
          </div>
        </Link>
        <Link href='./marcus'>
          <div className={style.boss_card}>
            <motion.img
              layoutId='marcus_pic'
              className={style.boss_image} 
              src='/marcus.jpeg'
              alt='marcus'
            />
            <motion.p
              layout
              className='editor_label'
              layoutId='marcus_text'>marcus</motion.p>
          </div>
        </Link>
        <Link href='./reeves'>
          <div className={style.boss_card}>
            <motion.img
              layoutId='reeves_pic'
              className={style.boss_image} 
              src='/reeves.jpeg'
              alt='reeves'
            />
            <motion.p
              layout
              className='editor_label'
              layoutId='reeves_text'>reeves</motion.p>
          </div>
        </Link>
      </section>
    </PageTransition>
  );
}
