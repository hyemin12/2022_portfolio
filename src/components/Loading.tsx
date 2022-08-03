import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loading_animation}></div>
    </div>
  );
}

export default Loading;
