import Link from "next/link";
import styles from "../styles/Main.module.css";
import { Analytics } from "@vercel/analytics/react";
import email from "./email";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>
        <Link href="/">Home | </Link>
      </span>
      {/* <span className={styles.logo}>
        <Link href="/about">About | </Link>
      </span> */}
      <span className={styles.logo}>
        <Link href={`mailto:${email}`}>Contact</Link>
      </span>
      <Analytics />
    </footer>
  );
}
