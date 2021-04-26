import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.headerLink}>
        <li>home</li>
        <li>about </li>
        <li>gallery</li>
        <li>contact</li>
      </ul>
    </div>
  );
}
