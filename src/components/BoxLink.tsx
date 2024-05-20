import clsx from 'clsx';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type BoxLinkProps = {
  title: string | React.ReactNode;
  href: string;
}
export const BoxLink: React.FC<BoxLinkProps> = ({ title, href }) => {
  return <Link className={'border border-tobacco-dark text-tobacco-dark px-5 py-3 hover:text-white hover:bg-tobacco-dark transition-all duration-300'} href={href}>{title}</Link>
}