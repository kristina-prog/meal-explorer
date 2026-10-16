// filen som styrer oppskriftsoversikten på /recipes
// henter oppskriftene og bruker .map() til å vise ett RecipeCard for hver oppskrift

import RecipeCard from "@/components/RecipeCard/RecipeCard";
import styles from "./page.module.css";
import { getMeals } from "@/lib/meals";

export default async function RecipesPage() {
  const meals = await getMeals("chicken");

  // Her bruker vi .map() til å lage ett oppskriftskort for hver oppskrift API-et returnerer
  // key={meal.idMeal} gir React en unik identifikator for hvert kort
  return (
    <section className={styles.recipesPage}>
      <h1 className={styles.pageTitle}>Explore Recipes</h1>
      <p className={styles.pageDescription}>
        Discover delicious meals from around the world.
      </p>
      <p className={styles.recipeCount}>Found {meals.length} recipes.</p>
      <div className={styles.recipeGrid}>
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </section>
  );
}
