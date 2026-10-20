import Image from "next/image";
import Link from "next/link";
import type { MealCategory } from "@/types/meal";
import styles from "../RecipeCard/RecipeCard.module.css";

type CategoryCardProps = {
  category: MealCategory;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className={styles.recipeCard}>
      <Link
        href={`/recipes?category=${encodeURIComponent(category.strCategory)}`}
        className={styles.cardLink}
      >
        <Image
          src={category.strCategoryThumb}
          alt=""
          width={300}
          height={200}
          className={styles.recipeImage}
        />
        <h2>{category.strCategory}</h2>
      </Link>
    </article>
  );
}
