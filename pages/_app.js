import Head from "next/head";

import { AnimatePresence, MotionConfig } from "framer-motion";

import "../styles/global.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <MotionConfig reducedMotion="user">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </MotionConfig>
  );
}

export default MyApp;
