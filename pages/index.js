import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import email from "../src/email";
import Gallery from "../src/gallery";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meegan Farrell Art</title>
        <meta name="description" content="Meegan Farrell Art Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </Head>

      <main>
        <br />
        <h1 className={styles.title}>Meegan Farrell Art</h1>
        <br />
        <Gallery/>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Link href={`mailto:${email}`}>Contact</Link>
        </span>
      </footer>
    </div>
  );
}
