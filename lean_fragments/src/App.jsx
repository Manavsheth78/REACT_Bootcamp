import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  // let foodItems = [];
  // let foodItems = ["Dal", "Rice", "Roti", "Milk", "Green Vegetable"];

  // let textStateArr = useState("Food Items Entered By User");
  // let textToShow = textStateArr[0]; //initail value of the state
  // let setTextState = textStateArr[1]; //method

  // let [textToShow, setTextState] = useState(); //destructuring

  let [foodItems, setFoodItems] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      //? the props are immutable so we ideally should not change the props so we store it in the new array and then we change it
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItemList = [...foodItems, newFoodItem];
      setFoodItems(newItemList);
    }
  };

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <FoodInput handleOnKeyDown={handleKeyDown}></FoodInput>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <p>
          The above list shows the best food for healthy life and well being{" "}
        </p>
      </Container> */}
    </>
  );
}

export default App;
