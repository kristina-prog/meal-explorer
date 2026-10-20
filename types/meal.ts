//Meal beskriver hvordan dataene kommer fra API-et
export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;

  // forteller TypeScript hvordan ingrediensene og mengdene er lagret i API-responsen
  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
};

// beskriver hvordan vi ønsker å bruke dataene i Spoonful
export type Ingredient = {
  name: string;
  measure: string;
};

export type MealCategory = {
  idCategory: string; // kategoriens ID
  strCategory: string; // navnet, f eks Seafood
  strCategoryThumb: string; // URL til kategoribildet
  strCategoryDescription: string;
};

export type MealSummary = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};
