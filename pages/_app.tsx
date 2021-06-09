import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/cursor.css';
import Head from 'next/head';
import Layout from '@components/Layout';
import { ThemeProvider } from 'next-themes';
import Cursor from '@components/Cursor';
import MouseContextProvider from '@context/mouseContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/urp6zno.css" />
      </Head>
      <MouseContextProvider>
        <Layout>
          <Cursor />
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </MouseContextProvider>
    </>
  );
}

export default MyApp;
