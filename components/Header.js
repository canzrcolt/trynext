import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div id="top" className={styles.header}>
      <Image src="/vercel.svg" width={100} height={100} />
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
