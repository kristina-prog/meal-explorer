// henter oppskriftene fra TheMealDB

import type { Meal } from "@/types/meal";

// API-et returnerer ikke en liste direkte, men et objekt
// Derfor lager vi en egen type for API-svaret
type MealResponse = {
  meals: Meal[] | null; // dersom søket ikke gir noen treff
};

// encodeURIComponent(searchTerm) – håndterer mellomrom og spesialtegn i søket
export async function getMeals(searchTerm: string): Promise<Meal[]> {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchTerm)}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: MealResponse = await response.json();

  // Dersom API-et returnerer null, returnerer vi en tom liste
  if (!data.meals) {
    return [];
  }

  return data.meals;
}
