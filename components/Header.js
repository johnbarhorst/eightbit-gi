import Link from 'next/link';

export function Header() {
  return (
    <header>
      <h1 className='logo'>
        <Link href='/' >Game Informer</Link>
      </h1>
      <nav>
        <Link href='/johnbarhorst'>About Me</Link>
        <Link href='/site'>Site Details</Link>
      </nav>
    </header>
  );
}