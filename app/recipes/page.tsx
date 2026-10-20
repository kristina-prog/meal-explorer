// filen som styrer oppskriftsoversikten på /recipes
// henter oppskriftene og bruker .map() til å vise ett RecipeCard for hver oppskrift

import RecipeCard from "@/components/RecipeCard/RecipeCard";
import styles from "./page.module.css";
import { getMeals, getCategories, getMealsByCategory } from "@/lib/meals";
import Form from "next/form";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

type RecipesPageProps = {
  searchParams: Promise<{ q?: string; category?: string }>;
};

// searchParams betyr at Next.js gir oss tilgang til søkeparameterne i URL-en
// Vi bruker await for å hente verdien i Next.js 16, fordi searchParams er en Promise

/*
  Hvis q finnes, bruker vi getMeals() for søk.
  Hvis category finnes, bruker vi getMealsByCategory().
  Hvis ingen av dem finnes, blir meals en tom liste, fordi vi viser kategoriene i stedet. 
 */
export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const { q, category } = await searchParams;
  const categories = !q && !category ? await getCategories() : [];

  const meals = q
    ? await getMeals(q.trim())
    : category
      ? await getMealsByCategory(category)
      : [];

  // Her bruker vi .map() til å lage ett oppskriftskort for hver oppskrift API-et returnerer
  // key={meal.idMeal} gir React en unik identifikator for hvert kort

  /*
  
  !q && !category betyr at verken et søkeord eller en kategori er valgt
  categories.map() lager ett CategoryCard for hver kategori
  Hvis brukeren har søkt, viser vi RecipeCard som før
  Vi gjenbruker recipeGrid, slik at kortene allerede får den responsive grid-layouten 
  
  */

  return (
    <section className={styles.recipesPage}>
      <h1 className={styles.pageTitle}>
        {category && !q ? `${category} Recipes` : "Explore Recipes"}
      </h1>
      <p className={styles.pageDescription}>
        Discover delicious meals from around the world.
      </p>

      <Form action="/recipes" className={styles.searchForm}>
        <label htmlFor="recipe-search">Search by recipe name</label>
        <div className={styles.searchControls}>
          <input
            type="search"
            id="recipe-search"
            name="q"
            placeholder="e.g. carbonara, lasagne, curry"
            defaultValue={q || ""}
            className={styles.searchInput}
          />
          <button type="submit" className={`button ${styles.searchButton}`}>
            Search
          </button>
        </div>
      </Form>
      {!q && !category ? (
        <>
          <h2>Browse by Category</h2>
          <div className={styles.recipeGrid}>
            {categories.map((category) => (
              <CategoryCard key={category.idCategory} category={category} />
            ))}
          </div>
        </>
      ) : (
        <>
          {meals.length === 0 && (
            <p className={styles.noResults}>No recipes found for {q}.</p>
          )}

          <div className={styles.recipeGrid}>
            {meals.map((meal) => (
              <RecipeCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
