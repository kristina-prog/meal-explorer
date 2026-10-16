// bestemmer hvordan én oppskrift skal vises

import Image from "next/image";
import type { Meal } from "@/types/meal";
import styles from "./RecipeCard.module.css";
import Link from "next/link"; // Link er Next.js sin komponent for navigasjon mellom sider

type RecipeCardProps = {
  meal: Meal;
};

export default function RecipeCard({ meal }: RecipeCardProps) {
  return (
    <article className={styles.recipeCard}>
      <Link href={`/recipes/${meal.idMeal}`} className={styles.cardLink}>
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={300}
          height={200}
          className={styles.recipeImage}
        />

        <h2>{meal.strMeal}</h2>
        <p>Category: {meal.strCategory}</p>
      </Link>
    </article>
  );
}
