import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { I18nextProvider } from 'react-i18next';
import Layout from './layout';
import i18n from '@/locales/i18n';

export default function App({ Component, pageProps }: AppProps) {
  return <I18nextProvider i18n={i18n}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </I18nextProvider>
}
