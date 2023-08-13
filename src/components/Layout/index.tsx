import Head from "next/head";
import Header from "../Header";

export const Layout = (props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="antialiased">
        <Header />
        <main>{props.children}</main>
      </div>
    </>
  );
};
