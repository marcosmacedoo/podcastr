import Head from "next/head";
import { Header } from "../components/Header";
import { Player } from "../components/Player";
import styles from "../styles/app.module.scss";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Podcastr</title>
      </Head>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  );
}

export default MyApp;
