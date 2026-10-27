# Spoonful

Spoonful is a recipe website built with Next.js and TypeScript. It helps users discover recipes from around the world by browsing categories or searching for recipes by name.

The website is designed for anyone looking for inspiration for their next meal.

## Features

- Browse recipes by category.
- Search for recipes by name.
- View recipe details, including ingredients and instructions.
- Navigate between recipes and categories.
- Responsive design for mobile and desktop.
- Error handling for failed API requests, missing recipes and searches with no results.

## Technologies

- Next.js
- TypeScript
- CSS Modules
- TheMealDB API

## Getting Started

### Requirements

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kristina-prog/meal-explorer.git
   ```

2. Open the project folder:

   ```bash
   cd meal-explorer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser.

To create a production build, run:

```bash
npm run build
```

## API

Spoonful uses the free TheMealDB API to retrieve recipe information, images and categories.

The website uses the following API endpoints:

- `categories.php` – retrieves recipe categories.
- `filter.php?c=` – retrieves recipes from a selected category.
- `search.php?s=` – searches for recipes by name.
- `lookup.php?i=` – retrieves details for a specific recipe.

No API key or environment variables are required.

## Limitations

- Search only matches recipe names, not ingredients.
- Recipe information depends on the data available from TheMealDB.

## About

Spoonful was developed as part of a frontend development assignment using Next.js and TypeScript.
