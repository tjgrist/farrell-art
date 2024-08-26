/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import styles from "../styles/Main.module.css";
import Script from 'next/script'
import description from "../src/description";
import Footer from "../src/footer";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Meegan Farrell</title>
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

      <main className={styles.main}>
        <h1 className={styles.title}>About Meegan Farrell</h1>
        
        <div className={styles.aboutDescription}>
          <p>Meegan Farrell (1955-2003) was a talented artist, dedicated art teacher, and beloved family member who left a lasting impact on her community and loved ones.</p>
          
          <p>Born and raised in Madison, Wisconsin, Meegan pursued her passion for art throughout her education, attending Queen of Peace, Edgewood High School, and the University of Wisconsin-Madison, where she earned her B.A. in 1976.</p>
          
          <p>Her career in art education began in Monticello, Wisconsin. In 1979, she moved to Chicago to teach art at Glen Brook North. Returning to Madison in 1982, she completed her Master of Fine Arts in 1986 and subsequently taught art in the Madison Public School System for many years.</p>
          
          <p>Known for her creativity and generosity, Meegan inspired her students and shared her unique ability to see art in all aspects of life. Her passion for teaching and her artistic talents made her a beloved figure in the classroom.</p>
          
          <p>In 1984, Meegan married her soul mate, Monty Schiro. Together, they had two children, Hannah and Travis, whom Meegan adored deeply. She found joy in simple pleasures: her golden retrievers, spending time at the lake and on the farm, and appreciating nature's beauty.</p>
          
          <p>Meegan's zest for life was evident in her love for sunrises, flowers, rain, and blue skies. She cherished her relationships with friends and family, touching the lives of everyone she met in a special way.</p>
          
          <p>On August 3, 2003, at the age of 48, Meegan passed away peacefully at the Don and Marilyn Anderson HospiceCare Center in Fitchburg, following a courageous battle with cancer. Her memory lives on through her husband, children, and the many lives she touched as an artist, teacher, and friend.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}