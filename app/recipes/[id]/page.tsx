import { getMealById } from "@/lib/meals";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Ingredient } from "@/types/meal";
import styles from "./page.module.css";
import Link from "next/link";

type RecipeDetailsPageProps = {
  params: Promise<{ id: string }>;
};

/**
 * Viser detaljsiden for en oppskrift.
 * Henter oppskriften basert på ID-en i URL-en og viser
 * ingredienser, fremgangsmåte og informasjon om oppskriften.
 * @param params - Inneholder oppskriftens ID fra den dynamiske ruten.
 * @returns Detaljsiden for oppskriften, eller en 404-side hvis ID-en ikke finnes.
 */
export default async function RecipeDetailsPage({
  params,
}: RecipeDetailsPageProps) {
  const { id } = await params;
  const meal = await getMealById(id);

  if (!meal) {
    notFound();
  }

  const ingredients: Ingredient[] = [];

  // TheMealDB har opptil 20 ingrediensfelter som vi går gjennom
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient?.trim()) {
      ingredients.push({
        name: ingredient.trim(),
        measure: measure?.trim() || "",
      });
    }
  }

  return (
    <section className={styles.recipeDetails}>
      <Link href="/recipes" className="backLink">
        ← Back to recipes
      </Link>
      <h1 className={styles.recipeTitle}>{meal.strMeal}</h1>
      <Image
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width={300}
        height={200}
        className={styles.recipeImage}
        loading="eager"
      />
      <div className={styles.recipeInfo}>
        <Link
          href={`/recipes?category=${encodeURIComponent(meal.strCategory)}`}
          className={styles.categoryTag}
        >
          {meal.strCategory}
        </Link>
        {meal.strArea && (
          <span className={styles.originTag}>{meal.strArea}</span>
        )}
      </div>
      <h2 className={styles.sectionTitle}>Ingredients</h2>
      <ul className={styles.ingredientsList}>
        {ingredients.map((ingredient, index) => (
          <li key={index} className={styles.ingredientItem}>
            {ingredient.name} - {ingredient.measure}
          </li>
        ))}
      </ul>
      <h2 className={styles.sectionTitle}>Instructions</h2>
      <p className={styles.instructions}>{meal.strInstructions}</p>
    </section>
  );
}
