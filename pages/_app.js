import Layout from "../components/Layout";
import "../styles/globals.scss";
import Head from "next/head";
import Var from "../styles/abstracts/_colors.module.scss";
import Signature from "../components/Signature";
import { Loader } from "../components/Loader";

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <Head>
        <link rel="icon" type="image/png" href="/favicon/RP-Logo-Apple.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="mask-icon" href="/favicon/RP-Logo.svg" color="#000000" />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />

        <meta name="msapplication-TileColor" content={Var.foreground_color} />
        <meta name="theme-color" content={Var.overlay_background_color} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <Signature />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Loader />
    </div>
  );
}

export default MyApp;
