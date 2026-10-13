import Link from "next/link"; // Her bruker vi Link fra Next.js i stedet for vanlige <a>-elementer til intern navigasjon
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Spoonful
      </Link>

      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/recipes" className={styles.navLink}>
          Recipes
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
      </nav>
    </header>
  );
}
