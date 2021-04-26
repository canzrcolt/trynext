import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div id="top" className={styles.header}>
      <ul className={styles.headerLink}>
        <li>home</li>
        <li>about </li>
        <li>gallery</li>
        <li>contact</li>
        <Link href="#top">
          <li>top</li>
        </Link>
        <Link href="#down">
          <li>bottom</li>
        </Link>
      </ul>
    </div>
  );
}
