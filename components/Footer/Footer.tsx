import styles from "./Footer.module.css";

/**
 * Viser bunnteksten med informasjon om Spoonful og oppskriftskilden.
 * @returns En footer med nettstedets navn og informasjon om TheMealDB.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2026 Spoonful</p>
      <p>
        Recipes provided by {""}
        <a
          href="https://www.themealdb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TheMealDB
        </a>
      </p>
    </footer>
  );
}
