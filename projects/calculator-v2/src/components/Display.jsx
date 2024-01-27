import styles from "./Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <div className={styles.calc_display}>
      <input type="text" className={styles.calc_input} value={displayValue} />
    </div>
  );
};
export default Display;
