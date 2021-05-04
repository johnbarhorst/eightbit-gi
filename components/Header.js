import Link from 'next/link';

export function Header() {
  return (
    <header>
      <h1 className='logo'>
        <Link href='/' >Game Informer</Link>
      </h1>
    </header>
  );
}