import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Main.module.css';
import images from '../src/images';

export default function ViewPiece() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the image data based on the slug
  const image = images.find(img => img.slug === slug);

  // If image is not found, you might want to handle this case (e.g., show an error message or redirect)
  if (!image) {
    return <div>Loading...</div>;
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
          <Image
            src={image.original}
            alt={`Image ${slug}`}
            layout="responsive"
            width={800}
            height={600}
            objectFit="contain"
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