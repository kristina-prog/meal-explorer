// henter oppskriftene fra TheMealDB

import type { Meal, MealCategory, MealSummary } from "@/types/meal";

// API-et returnerer ikke en liste direkte, men et objekt
// Derfor lager vi en egen type for API-svaret
type MealResponse = {
  meals: Meal[] | null; // dersom søket ikke gir noen treff
};

// encodeURIComponent(searchTerm) – håndterer mellomrom og spesialtegn i søket

/**
 * Henter oppskrifter fra TheMealDB basert på et søkeord.
 * @param searchTerm - Søkeordet som brukes til å finne oppskrifter.
 * @returns En liste med oppskrifter, eller en tom liste ved ingen treff.
 */
export async function getMeals(searchTerm: string): Promise<Meal[]> {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchTerm)}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: MealResponse = await response.json();

  if (!data.meals) {
    return [];
  }

  return data.meals;
}

/**
 * Henter en bestemt oppskrift fra TheMealDB.
 * @param id - ID-en til oppskriften.
 * @returns Oppskriften, eller null dersom ID-en ikke finnes.
 */
export async function getMealById(id: string): Promise<Meal | null> {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: MealResponse = await response.json();

  if (!data.meals || data.meals.length === 0) {
    return null;
  }

  return data.meals[0];
}

/**
 * Henter alle oppskriftskategoriene fra TheMealDB.
 * @returns En liste med kategorier, eller en tom liste dersom ingen finnes.
 */
export async function getCategories(): Promise<MealCategory[]> {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await response.json();

  return data.categories ?? []; //
}

/**
 * Henter oppskrifter fra en bestemt kategori.
 * @param category - Navnet på kategorien.
 * @returns En liste med oppskrifter, eller en tom liste dersom ingen finnes.
 */
export async function getMealsByCategory(
  category: string,
): Promise<MealSummary[]> {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes by category");
  }

  const data = await response.json();

  return data.meals ?? [];
}
