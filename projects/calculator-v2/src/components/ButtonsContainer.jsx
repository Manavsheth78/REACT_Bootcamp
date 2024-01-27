import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttons_container}>
      {buttonNames.map((btn) => (
        <button className={styles.button} onClick={() => onButtonClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
