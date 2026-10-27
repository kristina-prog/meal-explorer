"use client";
import styles from "./page.module.css";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className={styles.recipesPage}>
      <h1>Something went wrong</h1>
      <p>We couldn't load the recipes. Please try again.</p>
      <button className="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
