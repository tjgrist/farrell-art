import Head from "next/head";
import styles from "../styles/Main.module.css";
import Script from 'next/script'
import Gallery from "../src/gallery";
import description from "../src/description";
import Footer from "../src/footer";
import imageData from "../src/images";

export default function Home({ initialProcessedImages }) {
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
        <Gallery initialProcessedImages={initialProcessedImages} />
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const randomSeed = Math.random();

  const randomize = (array, seed) => {
    const shuffled = [...array];
    const random = (seed) => {
      let t = seed += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(random(seed + i) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const initialProcessedImages = randomize(imageData, randomSeed).map((i, idx) => ({
    ...i,
    thumbnail: i.original,
    originalAlt: `Meegan Farrell original art piece ${idx + 1}`,
    thumbnailAlt: `Meegan Farrell original art piece ${idx + 1}`,
    originalTitle: i.title,
    loading: "lazy",
    thumbnailLoading: "lazy",
  }));

  return {
    props: {
      initialProcessedImages,
    },
  };
}
