import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import Link from "next/link";
import slideImages from "../src/images";
import email from "../src/email";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Meegan Farrell art portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <br />
        <h1 className={styles.title}>Meegan Farrell Art</h1>
        <br />
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <>
                <div className="each-slide" key={index}>
                  <Image
                    src={`/${slideImage.url}`}
                    alt={slideImage.caption}
                    width={slideImage.width}
                    height={slideImage.height}
                    layout="intrinsic"
                  />
                </div>
                <p className={styles.description}>{slideImage.caption}</p>
              </>
            ))}
          </Slide>
        </div>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Link href={`mailto:${email}`}>Contact</Link>
        </span>
      </footer>
    </div>
  );
}
