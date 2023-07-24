import { Layout } from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
