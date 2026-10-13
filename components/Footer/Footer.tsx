import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2026 Spoonful. Made with love for food.</p>
      <p>Recipes provided by TheMealDB</p>
    </footer>
  );
}
