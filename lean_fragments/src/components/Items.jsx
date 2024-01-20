import styles from "./Items.module.css";
/* const Items = (props) => {                              //method 1 directly pass the props
  return <li className="list-group-item">{props.foodItem}</li>;
};

export default Items; */

/* const Items = (props) => {                             // method 2 destructuring the props
  let { foodItem } = props;
  return <li className="list-group-item">{foodItem}</li>;
};

export default Items;
 */

const Items = ({ foodItem, handleBuyButton }) => {
  //method 3 destructuring the props in the parameter itself

  return (
    <li className={` ${styles["kg-bgColor"]} list-group-item`}>
      <span className={styles.kg_span}>{foodItem} </span>
      <button
        onClick={handleBuyButton}
        className={`${styles.button} btn btn-info`}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
