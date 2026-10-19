import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <section className={styles.aboutPage}>
      <h1>About Spoonful</h1>

      <div className={styles.infoCard}>
        <h2>What is Spoonful?</h2>
        <p>
          Spoonful is a recipe website for anyone looking for inspiration and
          new meals to try. You can explore a wide variety of recipes from
          around the world and search for recipes and discover new dishes to
          try.
        </p>
      </div>
      <div className={styles.infoCard}>
        <h2>Where do the recipes come from?</h2>

        <p>Recipes are provided by TheMealDB, an external recipe API.</p>
      </div>
      <div className={styles.infoCard}>
        <h2>Who made Spoonful?</h2>
        <p>
          Spoonful was created by Kristina as part of a school project. The
          application is built using Next.js and TypeScript.
        </p>
      </div>
    </section>
  );
}
