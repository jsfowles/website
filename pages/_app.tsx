import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import Head from 'next/head';
import Layout from '@components/Layout';
import { ThemeProvider } from 'next-themes';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/urp6zno.css" />
      </Head>
      <Layout>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </>
  );
}

export default MyApp;
