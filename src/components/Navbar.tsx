import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import { LanguageSelector } from './LanguageSelector';

const LINKS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'News',
    href: '/news',
  },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const {t, i18n} = useTranslation();
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <nav className='bg-white w-full flex border-b-8 border-solid border-orange-400'>
      <Image
        className='hidden md:block lg:pl-28'
        src='/img/VGM-Logo.png'
        alt='Vuong Gia Minh'
        width={400}
        height={88}
      />
      <Image
        className='block md:hidden lg:pl-28'
        src='/img/VGM-Logo.png'
        alt='Vuong Gia Minh'
        width={200}
        height={85}
      />
      <section className='MOBILE-MENU lg:hidden md:pr-10 flex flex-grow justify-end items-center'>
        <div
          className='HAMBURGER-ICON space-y-2'
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
        </div>

        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <div
            className='absolute top-0 right-0 px-8 py-8'
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className='h-8 w-8 text-gray-600'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </div>
          <ul className='flex flex-col items-center justify-between min-h-[250px]'>
            {LINKS.map(({name, href}) => (
              <li key={name} className='border-b border-gray-400 my-8 uppercase'>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className='hidden lg:pr-28 lg:flex flex-grow justify-end items-center'>
        <div className='flex flex-grow justify-end items-center'>
          {LINKS.map(({name, href}) => (
            <Link
              key={name}
              href={href}
              className={`text-lg font-bold ${
                pathname === href ? 'text-link-active' : 'text-link-inactive'
              } hover:text-link-active hover:underline mr-8`}
            >
              {t(name)}
            </Link>
          ))}
        </div>
        <Button className='bg-grey-button hover:brightness-75 text-white font-bold p-3 my-5' 
        onClick={() => router.push('/contact')} >
          {t('Contact')}
        </Button>
        <LanguageSelector />
      </div>
    </nav>
  );
}
