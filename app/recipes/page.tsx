// filen som styrer oppskriftsoversikten på /recipes
// henter oppskriftene og bruker .map() til å vise ett RecipeCard for hver oppskrift

import RecipeCard from "@/components/RecipeCard/RecipeCard";
import styles from "./page.module.css";
import { getMeals } from "@/lib/meals";

type RecipesPageProps = {
  searchParams: Promise<{ q?: string }>;
};

// searchParams betyr at Next.js gir oss tilgang til søkeparameterne i URL-en
// Vi bruker await for å hente verdien i Next.js 16, fordi searchParams er en Promise
export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const { q } = await searchParams;
  const meals = await getMeals(q?.trim() || "chicken"); // fjerner mellomrom rundt søkeordet, dersom q finnes
  // || "chicken" bruker "chicken" dersom søkeordet mangler eller er tomt.

  // Her bruker vi .map() til å lage ett oppskriftskort for hver oppskrift API-et returnerer
  // key={meal.idMeal} gir React en unik identifikator for hvert kort
  return (
    <section className={styles.recipesPage}>
      <h1 className={styles.pageTitle}>Explore Recipes</h1>
      <p className={styles.pageDescription}>
        Discover delicious meals from around the world.
      </p>

      <form action="/recipes" method="GET" className={styles.searchForm}>
        <label htmlFor="recipe-search">Search Recipes</label>
        <input
          type="text"
          id="recipe-search"
          name="q"
          placeholder="e.g. pasta, chicken, soup"
          defaultValue={q || ""}
          className={styles.searchInput}
        />
        <button type="submit" className={`button ${styles.searchButton}`}>
          Search
        </button>
      </form>
      {meals.length === 0 ? (
        <p className={styles.noResults}>No recipes found for {q}.</p>
      ) : null}
      <div className={styles.recipeGrid}>
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </section>
  );
}
