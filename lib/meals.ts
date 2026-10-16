// henter oppskriftene fra TheMealDB

import type { Meal } from "@/types/meal";

// API-et returnerer ikke en liste direkte, men et objekt
// Derfor lager vi en egen type for API-svaret
type MealResponse = {
  meals: Meal[] | null; // dersom søket ikke gir noen treff
};

// encodeURIComponent(searchTerm) – håndterer mellomrom og spesialtegn i søket
// Henter oppskrifter basert på søketermen
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

// Henter en spesifikk oppskrift basert på ID
// funksjonen returnerer enten en oppskrift eller null dersom ID-en ikke finnes
// når vi søker etter én ID, returnerer TheMealDB et objekt med en meals-liste. Derfor henter vi det første elementet med [0]
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
