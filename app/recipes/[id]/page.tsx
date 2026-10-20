// I Next.js betyr [] at denne delen av URL-en er dynamisk. Dermed kan samme side brukes til både /recipes/52772 og /recipes/52804

import { getMealById } from "@/lib/meals";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Ingredient } from "@/types/meal";
import styles from "./page.module.css";

type RecipeDetailsPageProps = {
  params: Promise<{ id: string }>;
};

// Hvis du besøker /recipes/52772, får variabelen id verdien "52772"
// I Next.js 16 er params en Promise, og derfor bruker vi await
export default async function RecipeDetailsPage({
  params,
}: RecipeDetailsPageProps) {
  const { id } = await params;
  const meal = await getMealById(id);

  if (!meal) {
    notFound();
  }

  // Vi oppretter en tom liste som skal fylles med ingredienser og mål
  const ingredients: Ingredient[] = [];

  // Løkken går gjennom tallene 1 til 20, fordi TheMealDB har opptil 20 ingrediensfelter
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient?.trim()) {
      // filtrerer bort tomme ingrediensfelter
      ingredients.push({
        name: ingredient.trim(),
        measure: measure?.trim() || "",
      });
    }
  }

  return (
    <section className={styles.recipeDetails}>
      <h1 className={styles.recipeTitle}>{meal.strMeal}</h1>
      <Image
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width={300}
        height={200}
        className={styles.recipeImage}
      />
      <p>Category: {meal.strCategory}</p>
      {meal.strArea && <p>Origin: {meal.strArea}</p>}
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
