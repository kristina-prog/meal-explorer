"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

/**
 * Viser nettstedets header med logo og hovednavigasjon.
 * @returns En header med lenker til forsiden, oppskrifter og om-siden.
 */
export default function Header() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Spoonful
      </Link>

      <nav className={styles.nav} aria-label="Main navigation">
        <Link
          href="/"
          className={`${styles.navLink} ${pathname === "/" ? styles.activeLink : ""}`}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Home
        </Link>

        <Link
          href="/recipes"
          className={`${styles.navLink} ${pathname.startsWith("/recipe") ? styles.activeLink : ""}`}
          aria-current={pathname.startsWith("/recipes") ? "page" : undefined}
        >
          Recipes
        </Link>

        <Link
          href="/about"
          className={`${styles.navLink} ${pathname === "/about" ? styles.activeLink : ""}`}
          aria-current={pathname === "/about" ? "page" : undefined}
        >
          About
        </Link>
      </nav>
    </header>
  );
}
