// I Next.js betyr [] at denne delen av URL-en er dynamisk. Dermed kan samme side brukes til både /recipes/52772 og /recipes/52804

import { getMealById } from "@/lib/meals";
import { notFound } from "next/navigation";

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

  return (
    <section>
      <h1>{meal.strMeal}</h1>
      <p>Category: {meal.strCategory}</p>
      <p>Origin: {meal.strArea}</p>
    </section>
  );
}
