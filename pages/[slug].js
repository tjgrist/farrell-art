/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Main.module.css';
import images from '../src/images';

export default function ViewPiece({ image, slug }) {
  if (!image) {
    return (
      <div className={styles.container}>
        <h1>Art piece not found</h1>
        <Link href="/">
          <a className={styles.button}>Back to Gallery</a>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Art piece: ${slug}`}</title>
        <meta name="description" content={`Viewing art piece: ${slug}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{slug}</h1>

        <div className={styles.imageContainer}>
          <img
            src={image.original}
            alt={`Image ${slug}`}
            className={styles.responsiveImage}
          />
        </div>

        <div className={styles.description}>
          <p>{image.caption}</p>
        </div>

        <Link href="/">
          <a className={styles.button}>Back to Gallery</a>
        </Link>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const image = images.find(img => img.slug === slug);

  return {
    props: { 
      image: image ? JSON.parse(JSON.stringify(image)) : null, 
      slug 
    },
  };
}