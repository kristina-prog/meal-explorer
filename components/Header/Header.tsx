import Link from "next/link";
import styles from "./Header.module.css";

/**
 * Viser nettstedets header med logo og hovednavigasjon.
 * @returns En header med lenker til forsiden, oppskrifter og om-siden.
 */
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
