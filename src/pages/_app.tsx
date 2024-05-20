import i18n from '@/locales/i18n';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { I18nextProvider } from 'react-i18next';
import Layout from './layout';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <main className={plusJakartaSans.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </I18nextProvider>
  );
}
