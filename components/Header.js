import { motion } from 'framer-motion';
import Link from 'next/link';

export function Header() {
  return (
    <motion.header layout>
      <h1 className='logo'>
        <Link href='/' >Game Informer</Link>
      </h1>
      <nav>
        {/* TODO: Fix nav on mobile */}
        {/* <Link href='/'>Home</Link> */}
        <Link href='/johnbarhorst'>About Me</Link>
        <Link href='/site'>Site Details</Link>
      </nav>
    </motion.header>
  );
}