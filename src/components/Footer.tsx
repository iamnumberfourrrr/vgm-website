import { Trans, useTranslation } from 'react-i18next';
import { BoxLink } from './BoxLink';
import Image from 'next/image';
import { LanguageSelector } from './LanguageSelector';

const LINKS = [
  {
    title: <Trans i18nKey='Footer.About' />,
    href: '/about',
  },
  {
    title: <Trans i18nKey='Services' />,
    href: '/services',
  },
  {
    title: <Trans i18nKey='News' />,
    href: '/news',
  },
  {
    title: <Trans i18nKey='Contact' />,
    href: '/contact',
  }
];

const SOCIALS = [
  {
    logo: '/logo/facebook.svg',
    href: 'https://facebook.com'
  },
  {
    logo: '/logo/zalo.svg',
    href: 'https://zalo.com'
  },
  {
    logo: '/logo/wechat.svg',
    href: 'https://wechat.com'
  }
]

const currentYear = new Date().getFullYear();

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="relative w-full bg-background-footer pt-20 px-20">
      <div className='flex flex-col border-b border-[#48628429] pb-20'>
        <div className='flex flex-col gap-5 flex-[0_0_50%]'>
          <p className='font-bold text-3xl text-[#363022]'>{t`Footer.Company name`}</p>
          <p className='text-lg'>{t`Footer.Company description`}</p>
          <div className='flex gap-4'>
            {LINKS.map(l => <BoxLink key={l.href} {...l} />)}
          </div>
        </div>
        <div className='ml-auto'>
          <Image src='/logo/vgm.svg' width={380} height={110} alt='VGM Logo' />
          <div className='flex gap-4 mt-[-25px] justify-center'>
            {SOCIALS.map(({ logo, href }) => 
            <a href={href} key={href} target='_blank'>
              <div className='cursor-pointer bg-white rounded-full p-2 shadow-2xl'>
              <Image className='w-[32px] h-[32px]' src={logo} width={32} height={32} alt='Social logo' />
            </div>
            </a>
            )}
          </div>
          <div className='flex justify-center'>
            <LanguageSelector />
          </div>
        </div>
      </div>
      <div className='mt-10 font-bold'>
      ©{currentYear} Công ty TNHH TM Vương Gia Minh
      </div>
    </footer>
  );
}