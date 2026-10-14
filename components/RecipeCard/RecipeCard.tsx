// bestemmer hvordan én oppskrift skal vises

import Image from "next/image";
import type { Meal } from "@/types/meal";
import styles from "./RecipeCard.module.css";

type RecipeCardProps = {
  meal: Meal;
};

export default function RecipeCard({ meal }: RecipeCardProps) {
  return (
    <article className={styles.recipeCard}>
      <Image
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width={300}
        height={200}
      />
      <h2>{meal.strMeal}</h2>
      <p>Category: {meal.strCategory}</p>
    </article>
  );
}
