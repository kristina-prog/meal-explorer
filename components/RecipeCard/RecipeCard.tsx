// bestemmer hvordan én oppskrift skal vises

import Image from "next/image";
import type { Meal, MealSummary } from "@/types/meal";
import styles from "./RecipeCard.module.css";
import Link from "next/link";

type RecipeCardProps = {
  meal: Meal | MealSummary;
};

/**
 * Viser et oppskriftskort med bilde og navn som lenker til detaljsiden.
 * @param meal - Oppskriften som skal vises (Meal eller MealSummary).
 * @returns Et oppskriftskort med lenke til oppskriftens detaljside.
 */
export default function RecipeCard({ meal }: RecipeCardProps) {
  return (
    <article className={styles.recipeCard}>
      <Link href={`/recipes/${meal.idMeal}`} className={styles.cardLink}>
        <div className={styles.imageWrapper}>
          <Image
            src={meal.strMealThumb}
            alt=""
            width={300}
            height={200}
            className={styles.recipeImage}
          />
        </div>

        <h2>{meal.strMeal}</h2>
      </Link>
    </article>
  );
}
