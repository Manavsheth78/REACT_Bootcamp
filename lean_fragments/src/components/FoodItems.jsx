import Items from "./Items";
import { useState } from "react";
const FoodItems = ({ items }) => {
  // let foodItems = ["Dal", "Rice", "Roti", "Milk", "Green Vegetable"];

  const [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
    event.target.style.display = "none";
    event.target.nextSibling.style.display = "inline-block";
  };

  const RemoveButton = (item, event) => {
    let newItems = activeItems.filter((foodItem) => foodItem !== item);
    setActiveItems(newItems);
    event.target.style.display = "none";
    event.target.previousSibling.style.display = "inline-block";
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
          handleRemoveButton={(event) => RemoveButton(item, event)}
        >
          {" "}
        </Items>
        /* the foodItem as an agrument pass item as the parameter */
      ))}
    </ul>
  );
};
export default FoodItems;
