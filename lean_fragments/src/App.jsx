import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Rice", "Roti", "Milk", "Green Vegetable"];

  return (
    <Container>
      <h1 className="heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
