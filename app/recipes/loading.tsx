import RecipeSkeleton from "@/components/RecipeSkeleton/RecipeSkeleton";
import styles from "./page.module.css";

export default function Loading() {
  return (
    <section
      className={styles.recipesPage}
      role="status"
      aria-label="Loading recipes"
    >
      <h1 className={styles.pageTitle}>Recipes</h1>
      <p>Loading recipes...</p>
      <div className={styles.recipeGrid}>
        <RecipeSkeleton />
        <RecipeSkeleton />
        <RecipeSkeleton />
      </div>
    </section>
  );
}
