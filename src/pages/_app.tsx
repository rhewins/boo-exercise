import '@/styles/globals.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <Head>
        <title>Boo | Dating, Make Friends, Personality Match</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
