import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>Discover your next favorite meal</h1>
      <p className={styles.heroDescription}>
        Explore delicious recipes from around the world and find inspiration for
        your next meal.
      </p>
    </section>
  );
}
