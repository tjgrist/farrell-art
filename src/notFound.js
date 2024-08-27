/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import styles from '../styles/Main.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404 - Image Not Found</h1>
      
      <div className={styles.notFoundDescription}>
        <p>Oops! It seems the artwork you're looking for has wandered off the canvas.</p>
        <p>Don't worry, great art is always worth searching for!</p>
      </div>

      <div className={styles.notFoundImageContainer}>
        {/* You can add a placeholder image or custom 404 artwork here */}
        <img 
          src="/404-placeholder.jpg" 
          alt="404 - Image Not Found" 
          className={styles.notFoundImage}
        />
      </div>

      <Link href="/">
        <a className={styles.notFoundButton}>Return to Gallery</a>
      </Link>
    </div>
  );
}