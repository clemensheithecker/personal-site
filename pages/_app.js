import Head from "next/head";

import { MotionConfig } from "framer-motion";

import "../styles/global.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <MotionConfig reducedMotion="user">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MotionConfig>
  );
}

export default MyApp;
