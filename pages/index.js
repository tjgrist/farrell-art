import Head from "next/head";
import styles from "../styles/Main.module.css";
import Script from 'next/script'
import Gallery from "../src/gallery";
import description from "../src/description";
import Footer from "../src/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meegan Farrell Art</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </Head>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>

      <main>
        <h1 className={styles.title}>Meegan Farrell Art</h1>
        <Gallery/>
      </main>

      <Footer />
    </div>
  );
}
