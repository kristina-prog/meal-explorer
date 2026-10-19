import styles from "./RecipeSkeleton.module.css";

export default function RecipeSkeleton() {
  return (
    <div className={styles.skeletonCard} aria-hidden="true">
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonTitle}></div>
      <div className={styles.skeletonCategory}></div>
    </div>
  );
}
