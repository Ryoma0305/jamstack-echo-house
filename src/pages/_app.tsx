import "tailwindcss/tailwind.css";
// import "src/styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "@/components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <Link rel="icon" href="/public/favicon.ico" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
          rel="stylesheet"
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;900&family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <Link
          href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
