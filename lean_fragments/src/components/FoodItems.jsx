import Items from "./Items";
const FoodItems = ({ items }) => {
  // let foodItems = ["Dal", "Rice", "Roti", "Milk", "Green Vegetable"];

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items key={item} foodItem={item}>
          {" "}
        </Items>
        /* the foodItem as an agrument pass item as the parameter */
      ))}
    </ul>
  );
};
export default FoodItems;
