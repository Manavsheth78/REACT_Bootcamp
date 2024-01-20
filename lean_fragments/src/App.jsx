import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Rice", "Roti", "Milk", "Green Vegetable"];
  let textToShow = "Food Items Entered By User";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value; // this will not work as react will not re-render the component
  };

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
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
