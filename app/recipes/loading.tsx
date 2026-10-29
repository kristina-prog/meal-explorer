import styles from "./page.module.css";

export default function Loading() {
  return (
    <section className={styles.recipesPage}>
      <h1 className={styles.pageTitle}>Explore Recipes</h1>
      <p role="status">Loading recipes...</p>
    </section>
  );
}
