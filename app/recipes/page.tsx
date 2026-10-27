import RecipeCard from "@/components/RecipeCard/RecipeCard";
import styles from "./page.module.css";
import { getMeals, getCategories, getMealsByCategory } from "@/lib/meals";
import Form from "next/form";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import Link from "next/link";

type RecipesPageProps = {
  searchParams: Promise<{ q?: string; category?: string }>;
};

/**
 * Viser oppskriftsoversikten på /recipes.
 * Viser kategorier, oppskrifter i en valgt kategori eller søkeresultater basert på oppskriftsnavn.
 * @param searchParams - URL-parametere for søk (q) og kategori (category).
 * @returns En side med kategorikort eller oppskriftskort.
 */
export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const { q, category } = await searchParams;
  const categories = !q && !category ? await getCategories() : [];

  const meals = q
    ? await getMeals(q.trim())
    : category
      ? await getMealsByCategory(category)
      : [];

  return (
    <section className={styles.recipesPage}>
      {category && !q && (
        <Link href="./recipes" className="backLink">
          ← Back to categories
        </Link>
      )}
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
