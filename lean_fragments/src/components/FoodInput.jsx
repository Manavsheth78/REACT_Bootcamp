import styles from "./FoodInput.module.css";
// const FoodInput = (props) => {   //! basically we pass the props from parent to child component and then we use it in the child component but to simply we direclty destructuring the props in the parameter itself as the name handleOnChange and then we use it in the child component
const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder=" Enter Custom Order "
      // onChange={props.handleOnChange}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
