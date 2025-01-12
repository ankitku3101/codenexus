"use client";
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <header className='absolute top-0 left-0 right-0 backdrop-blur-sm bg-transparent z-20'>
        <div className='py-5'>
          <div className='container'>
            <div className='flex items-center justify-center'>
              <nav className='text-sm md:text-base flex gap-6 text-white/75 items-center rounded-full shadow-lg px-6 py-2'>
                <Link href="/#home" className='hover:text-white'>Home</Link>
                <Link href="/#theme" className='hover:text-white'>Theme</Link>
                <Link href="/#schedule" className='hover:text-white'>Schedule</Link>
                <Link href="/#prizes" className='hover:text-white'>Prizes</Link>
                <Link href="/#contact" className='hover:text-white'>Contact</Link>
              </nav>
              <div className='absolute right-6'>
                <Image src={'/gift_logo.png'} alt='logo' width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
