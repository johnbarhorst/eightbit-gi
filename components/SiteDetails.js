import { motion } from 'framer-motion';
import { PageTransition } from './PageTransition';

export function SiteDetails() {
  return (
    <PageTransition className='layout'>
      <motion.div layout>
        <h1>A bit about this site</h1>
        <section>
          <p>I started out wanting to test out some ideas I had for page transitions. Then I saw the post about Game Informer hiring for a junior dev role. So I decided to combine my efforts!</p>
          <p>The design/css for this site was an exercise in building a &lsquo;classless&rsquo; css system based on Mega Man 2, using the original NES color palette.</p>
          <p>All the animations were built using <a href='https://www.framer.com/motion/' target="_blank" rel="noreferrer noopener">Framer Motion</a>, a React specific animation library. Framer is super rad not only because it makes super slick animations easy to do, but it also does them all in a way that is less cpu intensive than standard css animations.</p>
          <p>This site was built with React, using Next.js. <a href='http://nextjs.org' target="_blank" rel="noreferrer noopener">Next.js</a> is an amazing React based library for creating super fast statically generated and server rendered websites.</p>
          <p>I chose to host the site on <a href='http://vercel.com' target="_blank" rel="noreferrer noopener">Vercel</a>, because Vercel makes Next.js and it&apos;s tailor made for hosting such things. I swear this isn&apos;t an ad for Vercel or Next. They just happen to be the tech I used for all this.</p>
        </section>
      </motion.div>
    </PageTransition>
  );
}