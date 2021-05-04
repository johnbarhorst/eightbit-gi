import { Header } from './Header';
import { Footer } from './Footer';
import Head from 'next/head';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

export function Layout({ children }) {
  return (
    <div className="layout_wrapper">
      <Head>
        <title>8 Bit GI</title>
        <meta name="description" content="Some fun with Game Informer" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <AnimateSharedLayout>
          {children}
        </AnimateSharedLayout>
      </AnimatePresence>
      <Footer />
    </div>
  );
}