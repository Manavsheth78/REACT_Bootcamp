import styles from "./Display.module.css";
const Display = () => {
  return (
    <div className={styles.calc_display}>
      <input type="text" className={styles.calc_input} />
    </div>
  );
};
export default Display;
