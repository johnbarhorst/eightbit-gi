import { motion } from 'framer-motion';
import { PageTransition } from './PageTransition';

export function BarhorstPage() {
  return (
    <PageTransition className='layout'>
      <motion.h1 layout>A bit about me</motion.h1>
      <motion.div layout className='grid'>
        <motion.section layout>
          <motion.p layout>Tech Skills</motion.p>
          <motion.ul layout>
            <li>React.js</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
          </motion.ul>
        </motion.section>
        <motion.section layout>
          <motion.p layout>I&apos;m a life-long resident and lover of Minnesota, currently living in Northeast Minneapolis.</motion.p>
          <motion.p layout>I&apos;ve been a big fan of Game Informer since I was in High School (Late 1990&apos;s). The reviews and opinions of GI&apos;s were always the ones that I felt most mirrored my own tastes. Also it was always a joy to me that GI was located in MN. At the time it felt to me like all media came out of Hollywood or New York. Having something actually be from my state was amazing!</motion.p>
          <motion.p layout>A little over six years ago I started off as a web developer. I learned the fundamentals from Team Treehouse, and then moved on to taking courses from Wes Bos, Level Up Tutorials, and devouring every online resource I can find. There&apos;s no college degree here, but what I lack in expensive student loans, I make up for in passion for the craft.</motion.p>
          <motion.p layout>My experience is primarily with React, and lately specifically Next.js. However I absolutely love learning about all web technologies. I have no direct experience with Drupal, but I have worked with other CMS&apos;s, such as Keystone.js.</motion.p>
        </motion.section>
      </motion.div>
    </PageTransition>
  );
}