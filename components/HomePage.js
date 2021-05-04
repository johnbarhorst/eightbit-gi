import { motion } from 'framer-motion';
import Link from 'next/link';
import { PageTransition } from './PageTransition';
import style from 'styles/Home.module.css';

export function HomePage() {
  return (
    <PageTransition className={style.main}>
      <motion.span
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
            <motion.span
              layoutId='alex_text'
            >alex</motion.span>
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
            <motion.span
              layoutId='brian_text'>brian</motion.span>
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
            <motion.span
              layoutId='dan_text'>dan</motion.span>
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
            <motion.span
              layoutId='jason_text'>jason</motion.span>
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
            <motion.span
              layoutId='reiner_text'>reiner</motion.span>
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
            <motion.span
              layoutId='kim_text'>kim</motion.span>
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
            <motion.span
              layoutId='liana_text'
            >liana</motion.span>
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
            <motion.span
              layoutId='marcus_text'>marcus</motion.span>
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
            <motion.span
              layoutId='reeves_text'>reeves</motion.span>
          </div>
        </Link>
      </section>
    </PageTransition>
  );
}
