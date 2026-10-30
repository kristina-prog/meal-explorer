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

export type Ingredient = {
  name: string;
  measure: string;
};

export type MealCategory = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type MealSummary = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};
