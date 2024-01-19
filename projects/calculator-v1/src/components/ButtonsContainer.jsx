import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = () => {
  return (
    <div className={styles.buttons_container}>
      <button className={styles.button}>C</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>+</button>
      <button className={styles.button}>3</button>
      <button className={styles.button}>3</button>
    </div>
  );
};
export default ButtonsContainer;
